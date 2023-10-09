---
title: "Sass Styling API"
---

The Sass Styling API is an optional lightweight wrapper around [Themes](/themes) and [Global Style Customisations](/global-style-customisation) that automates the process of importing CSS files and setting CSS variables.

The Sass API provides a couple of benefits on top of the CSS API:

1. **Validation.** In the Sass API you will get a build error if you accidentally pass an invalid parameter name or value. In CSS this would be silent and lead to incorrect styling.
2. **Automatic selection of CSS files.** The Sass API ensures that only the necessary CSS files are loaded, only once, in the correct order, and combined into a single file.

## Getting started

First, set up your project to compile Sass (.scss) files. We provide examples for the major frameworks:

 - Vanilla JS and React: use the [Sass CLI](https://github.com/ag-grid/ag-grid-customise-theme/tree/master/src/vanilla) or [Webpack and sass-loader](https://github.com/ag-grid/ag-grid-customise-theme/tree/master/src/vanilla-webpack)
 - Angular: see our [Angular CLI](https://github.com/ag-grid/ag-grid-customise-theme/tree/master/src/angular) example
 - Vue: see our [Vue CLI](https://github.com/ag-grid/ag-grid-customise-theme/tree/master/src/vue) example

Next, import the Sass API in your .scss file:

```scss
@use "~ag-grid-community/styles" as ag;
```

The above import path assumes that `node_modules` is added to the Sass load path. Depending on how your project is configured, you may need to add one or more prefixes to the import path:

 - `@ag-grid-community/styles` if you're using the grid [modules](/modules/) feature
 - `node_modules/ag-grid-community/styles` if `node_modules` is not in the Sass load path
 - `~ag-grid-community/styles` is you're using webpack and sass-loader (the tilde instructs sass-loader to look in `node_modules`)

## Simple example

To emit all the styles you need for an AG Grid application, include the `grid-styles` mixin:

```scss
@use "~ag-grid-community/styles" as ag;
@include ag.grid-styles();
```

Because no theme is specified, it will default to Alpine. Compiling this file will select the `ag-grid.css` and `ag-theme-alpine.css` files from the grid distribution and combine them into the output. There is no need to separately include `ag-grid.css` in your build.

To use the theme, set the `ag-theme-alpine` class on your grid div:

```html
<div id="myGrid" class="ag-theme-alpine">
```

To customise the Alpine theme, you can add more parameters to the `grid-styles` mixin, as described in the rest of this page.

## Choosing a theme

Use the `theme` parameter to set the name of the outputted theme.

```scss
@use "~ag-grid-community/styles" as ag;
@include ag.grid-styles((
    theme: balham
));
```

This can be either:

1. a [provided theme](/themes/) (`alpine`, `alpine-dark`, `balham`, `balham-dark` or `material`). The CSS file for the theme will automatically be included.
2. Any string of your choice to create a custom theme.

## Setting CSS variables

The Sass Styling API is a wrapper around the CSS variable API for design customisation, you can pass any supported CSS variable as a parameter to the Sass API:

```scss
@use "~ag-grid-community/styles" as ag;
@include ag.grid-styles((
    theme: balham,
    --ag--active-color: deeppink
));
```

For information about what CSS variables and rules to use to control grid features, see the [full list of CSS variables](/global-style-customisation-variables/)

The Sass API provides a little bit of sugar to make it easier to read and remember some parameter values and assists migration from the [Legacy Sass API](/global-style-customisation-sass-legacy/).

- The `--ag-` prefix is optional.
- You can pass `true` or `false` to any `borders-*` parameter to enable or disable the border (`true` is converted to `solid 1px` and `false` to `none`)
- You can pass `true` or `false` to the `header-column-separator-display` or `header-column-resize-handle-display` parameters (`true` is converted to `block` and `false` to `none`)
- You can pass `null` to any `*-color` parameter, which will be converted to a CSS value of `transparent`

## Adding your own CSS rules

When you cannot achieve the effect you want with variables, add custom CSS rules below the `grid-styles` mixin:

```scss
@use "~ag-grid-community/styles" as ag;
@include ag.grid-styles((
    theme: alpine
));
.ag-theme-alpine {
    // Nest rules in .ag-theme-alpine so that the selectors include the theme name.
    // Without the theme name, your styles will not override the theme's built-in
    // styles due to CSS selector specificity rules.
    .ag-header-cell-label {
        font-style: italic;
    }
}
```

## Multiple themes

You can use multiple themes. This is useful for projects that allow the end user to select a theme. In simple use cases where each theme has the same configuration you can pass an array of theme names to the `themes` parameter.

```scss
@use "~ag-grid-community/styles" as ag;
@include ag.grid-styles((
    themes: (alpine, alpine-dark),
    alpine-active-color: red
));
```

If each theme needs a different configuration, `themes` can be a map of theme name to additional configuration:

```scss
@use "~ag-grid-community/styles" as ag;
@include ag.grid-styles((
    themes: (
        alpine: (
            header-background-color: rgb(234, 191, 177),
        ),
        alpine-dark: (
            header-background-color: rgb(72, 44, 17),
        )
        // ^^^ different header background for each theme
    ),
    alpine-active-color: red
    // ^^^ but the same active colour
));
```

## Suppressing native widget styles

Setting `suppress-native-widget-styling` to `true` will suppress native widget styling, see [Customising Inputs & Widgets](/global-style-customisation-widgets/) for more information.

## Extending a provided theme

If you want to use a provided theme (say alpine), apply some customisations, and package this as a custom theme to share between multiple apps, then you may want to use a different theme name.

To do this, set the `theme` parameter to your custom theme and the `extend-theme` parameter to one of the provided themes:

```scss
@use "~ag-grid-community/styles" as ag;
@include ag.grid-styles((
    theme: acmecorp,
    extend-theme: alpine,
    alpine-active-color: red
));
```

To use this theme, add the `ag-theme-acmecorp` class to your grid div.

Theme extension is only available in the Sass API. The alternative method of creating a [reusable package of design customisations](/global-style-customisation#creating-a-reusable-package-of-design-customisations) works in both Sass and pure CSS projects.

Theme extension works with multiple themes too, set the `extend-theme` parameter at the theme level:

```scss
@use "~ag-grid-community/styles" as ag;
@include ag.grid-styles((
    themes: (
        acmecorp: (extend-theme: alpine),
        acmecorp-dark: (extend-theme: alpine-dark),
    ),
    alpine-active-color: red
));
```

<note>
`extend-theme` internally uses the Sass `@extend` rule, which generates new selectors for `.ag-theme-acmecorp` while leaving the original selectors for `.ag-theme-alpine` intact. This slightly increases the output of the compiled CSS, but the difference is likely to be too small to measure in real world conditions (less than 1kb gzipped)
</note>
