import { expect, test } from 'vitest';
import { joinSelectors, renderNestedRules } from './render';

test(`${renderNestedRules.name} renders a flat rule`, () => {
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

test(`${renderNestedRules.name} renders a nested rule`, () => {
  expect(
    renderNestedRules({
      a: {
        color: 'red',
        b: {
          color: 'blue',
        },
      },
    }),
  ).toMatchInlineSnapshot(`
    "a {
    	color: red;
    }
    a b {
    	color: blue;
    }"
  `);
});

test(`${renderNestedRules.name} renders a nested rule with & combiner before`, () => {
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

test(`${renderNestedRules.name} renders a 1-deep nested rule with & combiner after`, () => {
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

test(joinSelectors, () => {});

// test(`${renderNestedRules.name} renders a 2-deep nested rule with & combiner after`, () => {
//   expect(
//     renderNestedRules({
//       a: {
//         b: {
//           'c &': {
//             color: 'blue',
//           },
//         },
//       },
//     }),
//   ).toMatchInlineSnapshot(`
//     "c a b {
//     	color: blue;
//     }"
//   `);
// });

// test('joining rules with &', () => {
//   expect(
//     renderCssRuleSet({
//       foo: {
//         // bar treated as an ag-className
//         '&bar': {
//           color: 'green',
//         },
//         // -baz not treated as an ag-className
//         '&-baz': {
//           color: 'red',
//         },
//         // quux treated as an ag-className, but not :not
//         '&:not(quux)': {
//           color: 'blue',
//         },
//       },
//     }),
//   ).toMatchInlineSnapshot(`
//     ".ag-foo.ag-bar {
//     	color: green;
//     }
//      .ag-foo-baz {
//     	color: red;
//     }
//      .ag-foo:not(.ag-quux) {
//     	color: blue;
//     }"
//   `);
// });

// test('RTL styles', () => {
//   expect(
//     renderCssRuleSet({
//       foo: {
//         paddingLeading: 4,
//       },
//     }),
//   ).toMatchInlineSnapshot(`
//       ".ag-ltr .ag-foo {
//           padding-left: 4px;
//       }
//       .ag-rtl .ag-foo {
//           padding-right: 4px;
//       }"
//     `);
// });

// test(parseSelectorsString, () => {
//   expect(parseSelectorsString('foo')).toEqual(['.ag-foo']);
//   expect(parseSelectorsString('fooBar')).toEqual(['.ag-foo-bar']);
//   expect(parseSelectorsString('foo bar')).toEqual(['.ag-foo .ag-bar']);
//   expect(parseSelectorsString('foo, bar')).toEqual(['.ag-foo', '.ag-bar']);

//   // append state classes
//   expect(parseSelectorsString('foo.stateClass')).toEqual(['.ag-foo.ag-state-class']);
//   expect(parseSelectorsString('foo:not(stateClass)')).toEqual(['.ag-foo:not(.ag-state-class)']);

//   // pseudo selectors
//   expect(parseSelectorsString('foo:last-child')).toEqual(['.ag-foo:last-child']);

//   // attributes
//   expect(parseSelectorsString('[data-foo="bar"]')).toEqual(['[data-foo="bar"]']);
//   expect(parseSelectorsString('foo[data-foo="bar"]')).toEqual(['.ag-foo[data-foo="bar"]']);

//   // pseudo classes
//   expect(parseSelectorsString('foo::before')).toEqual(['.ag-foo::before']);

//   // html elements
//   expect(parseSelectorsString('input')).toEqual(['input']);
//   expect(parseSelectorsString('input[type="button"]')).toEqual(['input[type="button"]']);
// });

// test(cartesianProduct, () => {
//   expect(
//     cartesianProduct([
//       [1, 2],
//       [3, 4],
//     ]),
//   ).toEqual([
//     [1, 3],
//     [1, 4],
//     [2, 3],
//     [2, 4],
//   ]);

//   expect(cartesianProduct([])).toEqual([[]]);
//   expect(cartesianProduct([[1]])).toEqual([[1]]);
//   expect(cartesianProduct([[1, 2]])).toEqual([[1], [2]]);
//   expect(cartesianProduct([[1, 2], [3]])).toEqual([
//     [1, 3],
//     [2, 3],
//   ]);
//   expect(
//     cartesianProduct([
//       [1, 2],
//       [3, 4],
//     ]),
//   ).toEqual([
//     [1, 3],
//     [1, 4],
//     [2, 3],
//     [2, 4],
//   ]);
//   expect(cartesianProduct([[1, 2], [3], [4, 5, 6]])).toEqual([
//     [1, 3, 4],
//     [1, 3, 5],
//     [1, 3, 6],
//     [2, 3, 4],
//     [2, 3, 5],
//     [2, 3, 6],
//   ]);
// });
