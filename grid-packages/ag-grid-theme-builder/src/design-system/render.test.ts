import { expect, test } from 'vitest';
import { joinSelectors, renderNestedRules } from './render';

test(`Render a flat rule`, () => {
  expect(
    renderNestedRules({
      a: {
        color: 'red',
        backgroundColor: 'green',
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
        color: 'red',
        b: {
          color: 'blue',
          backgroundColor: 'green',
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
    }"
  `);
});

test(`Render a nested rule with & combiner before`, () => {
  expect(
    renderNestedRules({
      a: {
        '&:hover': {
          color: 'blue',
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
          color: 'blue',
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
            color: 'blue',
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
            color: 'blue',
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
        color: 'red',
        b: {
          color: 'green',
          '&:before': {
            color: 'blue',
          },
        },
        '.rtl &': {
          color: 'purple',
          foo: {
            color: 'pink',
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
        paddingLeading: '1px',
        borderLeadingWidth: '2px',
        leading: '3px',
      },
    }),
  ).toMatchInlineSnapshot(`
    "a {
    	padding-leading: 1px;
    	border-leading-width: 2px;
    	leading: 3px;
    }"
  `);
});
