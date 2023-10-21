import { expect, test } from 'vitest';
import { CssRepresentable } from './expressions';
import { joinSelectors, renderNestedRules } from './render';

test(`Render a flat rule`, () => {
  expect(
    renderNestedRules({
      a: {
        color: val('red'),
        backgroundColor: val('green'),
      },
    }),
  ).toMatchInlineSnapshot(`
    "a {
    	color: red;
    	background-color: green;
    }"
  `);
});

test(`Render a nested rule`, () => {
  expect(
    renderNestedRules({
      a: {
        color: val('red'),
        b: {
          color: val('blue'),
          backgroundColor: val('green'),
          c: {
            color: val('purple'),
          },
        },
      },
    }),
  ).toMatchInlineSnapshot(`
    "a {
    	color: red;
    }
    a b {
    	color: blue;
    	background-color: green;
    }
    a b c {
    	color: purple;
    }"
  `);
});

test(`Render a nested rule with & combiner before`, () => {
  expect(
    renderNestedRules({
      a: {
        '&:hover': {
          color: val('blue'),
        },
      },
    }),
  ).toMatchInlineSnapshot(`
    "a:hover {
    	color: blue;
    }"
  `);
});

test(`Render a 1-deep nested rule with & combiner after`, () => {
  expect(
    renderNestedRules({
      a: {
        'b &': {
          color: val('blue'),
        },
      },
    }),
  ).toMatchInlineSnapshot(`
    "b a {
    	color: blue;
    }"
  `);
});

test(`Render a 2-deep nested rule with & combiner after`, () => {
  expect(
    renderNestedRules({
      a: {
        b: {
          'c &': {
            color: val('blue'),
          },
        },
      },
    }),
  ).toMatchInlineSnapshot(`
    "c a b {
    	color: blue;
    }"
  `);
});

test(`Render a 2-deep nested rule with & combiner in middle`, () => {
  expect(
    renderNestedRules({
      a: {
        b: {
          'c & x': {
            color: val('blue'),
          },
        },
      },
    }),
  ).toMatchInlineSnapshot(`
    "c a b x {
    	color: blue;
    }"
  `);
});

test(`Render nested with intermediate declarations`, () => {
  expect(
    renderNestedRules({
      a: {
        color: val('red'),
        b: {
          color: val('green'),
          '&:before': {
            color: val('blue'),
          },
        },
        '.rtl &': {
          color: val('purple'),
          foo: {
            color: val('pink'),
          },
        },
      },
    }),
  ).toMatchInlineSnapshot(`
    "a {
    	color: red;
    }
    a b {
    	color: green;
    }
    a b:before {
    	color: blue;
    }
    .ag-rtl a {
    	color: purple;
    }
    .ag-rtl a .ag-foo {
    	color: pink;
    }"
  `);
});

test(joinSelectors, () => {
  const expectJoin = (a: string, b: string, expected: string) =>
    expect(joinSelectors(a, b)).toBe(expected);

  expectJoin('a', 'b', 'a b');
  expectJoin('a', '&b', 'ab');
  expectJoin('a', '&', 'a');
  expectJoin('&a', '&', '&a');
  expectJoin('&a', 'b', '&a b');
  expectJoin('&a', '&b', '&ab');
  expectJoin('a', 'b &', 'b & a');
  expectJoin('a &', 'b &', 'b a &');
  expectJoin('a', 'b & c', 'b & a c');
  expectJoin('a & x', 'b & c', 'b a & x c');
  expectJoin('a & x', '&b', 'a & xb');
  expectJoin('&a', 'b & c', 'b &a c');
});

test(`Render RTL rules`, () => {
  expect(
    renderNestedRules({
      a: {
        paddingLeading: val('1px'),
        borderLeadingWidth: val('2px'),
        leading: val('3px'),
      },
    }),
  ).toMatchInlineSnapshot(`
    ".ag-ltr a {
    	padding-left: 1px;
    	border-left-width: 2px;
    	left: 3px;
    }
    .ag-rtl a {
    	padding-right: 1px;
    	border-right-width: 2px;
    	right: 3px;
    }"
  `);
});

test(`RTL rules don't apply to property names`, () => {
  expect(
    renderNestedRules({
      leading: {
        color: val('red'),
      },
    }),
  ).toMatchInlineSnapshot(`
    ".ag-leading {
    	color: red;
    }"
  `);
});

test(`Render RTL nested`, () => {
  expect(
    renderNestedRules({
      a: {
        color: val('red'),
        marginLeading: val('1px'),
        b: {
          color: val('green'),
          leading: val('2px'),
        },
      },
    }),
  ).toMatchInlineSnapshot(`
    "a {
    	color: red;
    }
    a b {
    	color: green;
    }
    .ag-ltr a b {
    	left: 2px;
    }
    .ag-rtl a b {
    	right: 2px;
    }
    .ag-ltr a {
    	margin-left: 1px;
    }
    .ag-rtl a {
    	margin-right: 1px;
    }"
  `);
});

test(`Convert camelCase to .ag-kebab-case class names`, () => {
  expect(
    renderNestedRules({
      'one, oneTwo, three:not(fourFive)': {
        bar: val('converted'),
      },
      'ag-grid, ::before, :not(:first-child)': {
        bar: val('not converted'),
      },
    }),
  ).toMatchInlineSnapshot(`
    ".ag-one,
    .ag-one-two,
    .ag-three:not(.ag-four-five) {
    	bar: converted;
    }
    ag-grid,
    ::before,
    :not(:first-child) {
    	bar: not converted;
    }"
  `);
});

const val = (s: string): CssRepresentable => ({ toCss: () => s });
