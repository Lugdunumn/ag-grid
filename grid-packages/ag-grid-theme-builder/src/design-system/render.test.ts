import { expect, test } from 'vitest';
import { literal } from './dsl';
import { joinSelectors, renderNestedRules } from './render';

test(`Render a flat rule`, () => {
  expect(
    renderNestedRules({
      a: {
        color: literal('red'),
        backgroundColor: literal('green'),
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
        color: literal('red'),
        b: {
          color: literal('blue'),
          backgroundColor: literal('green'),
          c: {
            color: literal('purple'),
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
          color: literal('blue'),
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
          color: literal('blue'),
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
            color: literal('blue'),
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
            color: literal('blue'),
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
        color: literal('red'),
        b: {
          color: literal('green'),
          '&:before': {
            color: literal('blue'),
          },
        },
        '.rtl &': {
          color: literal('purple'),
          foo: {
            color: literal('pink'),
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
        paddingLeading: literal('1px'),
        borderLeadingWidth: literal('2px'),
        leading: literal('3px'),
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
        color: literal('red'),
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
        color: literal('red'),
        marginLeading: literal('1px'),
        b: {
          color: literal('green'),
          leading: literal('2px'),
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
        bar: literal('converted'),
      },
      'ag-grid, ::before, :not(:first-child)': {
        bar: literal('not converted'),
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
