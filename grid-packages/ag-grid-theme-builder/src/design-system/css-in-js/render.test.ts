import { expect, test } from 'vitest';
import { literal, px, solid } from '.';
import { ColorExpression } from './color';
import { joinSelectors, renderRules } from './render';
import { untypedSelectors } from './selectors';

const a = untypedSelectors('a');
const b = untypedSelectors('b');
const c = untypedSelectors('c');

test(`Render a flat rule`, () => {
  expect(
    renderRules({
      [a]: {
        color: red,
        backgroundColor: green,
      },
    }),
  ).toMatchInlineSnapshot(`
    "a {
    	color: red;
    	background-color: green;
    }"
  `);
});

test(`Render a compound property value`, () => {
  expect(
    renderRules({
      [a]: {
        border: [solid, px(1), red],
      },
    }),
  ).toMatchInlineSnapshot(`
    "a {
    	border: solid 1px red;
    }"
  `);
});

test(`Render a nested rule`, () => {
  expect(
    renderRules({
      [a]: {
        color: red,
        [b]: {
          color: blue,
          backgroundColor: green,
          [c]: {
            color: purple,
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
    renderRules({
      [a]: {
        '&:hover': {
          color: blue,
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
    renderRules({
      [a]: {
        [untypedSelectors('b &')]: {
          color: blue,
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
    renderRules({
      [a]: {
        [b]: {
          [untypedSelectors('c &')]: {
            color: blue,
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
    renderRules({
      [a]: {
        [b]: {
          [untypedSelectors('c & x')]: {
            color: blue,
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
    renderRules({
      [a]: {
        color: red,
        [b]: {
          color: green,
          '&::before': {
            color: blue,
          },
        },
        [untypedSelectors('.rtl &')]: {
          color: purple,
          [c]: {
            color: pink,
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
    .ag-rtl a c {
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
    renderRules({
      [a]: {
        paddingLeading: px(1),
        borderLeadingWidth: px(2),
        leading: px(3),
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
    renderRules({
      [untypedSelectors('leading')]: {
        color: red,
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
    renderRules({
      [a]: {
        color: red,
        marginLeading: px(1),
        [b]: {
          color: green,
          leading: px(2),
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
    renderRules({
      [untypedSelectors('one', 'oneTwo', 'three:not(fourFive)')]: {
        content: literal('converted'),
      },
      [untypedSelectors('ag-grid', '::before', ':not(:first-child)')]: {
        content: literal('not converted'),
      },
    }),
  ).toMatchInlineSnapshot(`
    ".ag-one,
    .ag-one-two,
    .ag-three:not(.ag-four-five) {
    	content: converted;
    }
    ag-grid,
    ::before,
    :not(:first-child) {
    	content: not converted;
    }"
  `);
});

// test(`Render @keyframes blocks`, () => {
//   expect(
//     renderRules({
//       '@keyframes fooBar': {
//         from: {
//           color: red,
//         },
//         to: {
//           color: blue,
//         },
//       },
//     }),
//   ).toMatchInlineSnapshot(`
//     "@keyframes foo-bar {
//     	from {
//     		color: red;
//     	}
//     	to {
//     		color: blue;
//     	}
//     }"
//   `);
// });

// test(`Render @font-face blocks`, () => {
//   expect(
//     renderRules({
//       '@font-face': {
//         fontFamily: literal('monospace'),
//         src: literal('url(./some-url)'),
//       },
//     }),
//   ).toMatchInlineSnapshot(`
//     "@font-face {
//     	font-family: monospace;
//     	src: url(./some-url);
//     }"
//   `);
// });

// TODO also @media and @font-face

const red = literal('red') as unknown as ColorExpression;
const green = literal('green') as unknown as ColorExpression;
const blue = literal('blue') as unknown as ColorExpression;
const purple = literal('purple') as unknown as ColorExpression;
const pink = literal('pink') as unknown as ColorExpression;
