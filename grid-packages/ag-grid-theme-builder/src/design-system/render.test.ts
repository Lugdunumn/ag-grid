import { expect, test } from 'vitest';
import { cartesianProduct, parseSelectorsString, renderCssRuleSet } from './render';

test('flattening nested rules', () => {
  expect(
    renderCssRuleSet({
      foo: {
        color: 'red',

        bar: {
          color: 'green',
        },
      },
    }),
  ).toMatchInlineSnapshot(`
    ".ag-foo {
    	color: red;
    }
     .ag-foo .ag-bar {
    	color: green;
    }"
  `);
});

test('expanding nested rules', () => {
  expect(
    renderCssRuleSet({
      'foo, bar': {
        'baz, quux': {
          color: 'green',
        },
      },
    }),
  ).toMatchInlineSnapshot(`
    ".ag-foo .ag-baz,
     .ag-foo .ag-quux,
     .ag-bar .ag-baz,
     .ag-bar .ag-quux {
    	color: green;
    }"
  `);
});

test('joining rules with &', () => {
  expect(
    renderCssRuleSet({
      'foo, bar': {
        '&-baz': {
          color: 'red',
        },
        '&:not(quux)': {
          color: 'green',
        },
      },
    }),
  ).toMatchInlineSnapshot(`
    ".ag-foo-baz,
     .ag-bar-baz {
    	color: red;
    }
     .ag-foo:not(.ag-quux),
     .ag-bar:not(.ag-quux) {
    	color: green;
    }"
  `);
});

test('RTL styles', () => {
    Next up: fix this test case
  expect(
    renderCssRuleSet({
      foo: {
        paddingLeading: 4,
      },
    }),
  ).toMatchInlineSnapshot(`
      ".ag-ltr .ag-foo {
          padding-left: 4px;
      }
      .ag-rtl .ag-foo {
          padding-right: 4px;
      }"
    `);
});

test(parseSelectorsString, () => {
  expect(parseSelectorsString('foo')).toEqual(['.ag-foo']);
  expect(parseSelectorsString('fooBar')).toEqual(['.ag-foo-bar']);
  expect(parseSelectorsString('foo bar')).toEqual(['.ag-foo .ag-bar']);
  expect(parseSelectorsString('foo, bar')).toEqual(['.ag-foo', '.ag-bar']);

  // append state classes
  expect(parseSelectorsString('foo.stateClass')).toEqual(['.ag-foo.ag-state-class']);
  expect(parseSelectorsString('foo:not(stateClass)')).toEqual(['.ag-foo:not(.ag-state-class)']);

  // pseudo selectors
  expect(parseSelectorsString('foo:last-child')).toEqual(['.ag-foo:last-child']);

  // attributes
  expect(parseSelectorsString('[data-foo="bar"]')).toEqual(['[data-foo="bar"]']);
  expect(parseSelectorsString('foo[data-foo="bar"]')).toEqual(['.ag-foo[data-foo="bar"]']);

  // pseudo classes
  expect(parseSelectorsString('foo::before')).toEqual(['.ag-foo::before']);

  // html elements
  expect(parseSelectorsString('input')).toEqual(['input']);
  expect(parseSelectorsString('input[type="button"]')).toEqual(['input[type="button"]']);
});

test(cartesianProduct, () => {
  expect(
    cartesianProduct([
      [1, 2],
      [3, 4],
    ]),
  ).toEqual([
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
  ]);

  expect(cartesianProduct([])).toEqual([[]]);
  expect(cartesianProduct([[1]])).toEqual([[1]]);
  expect(cartesianProduct([[1, 2]])).toEqual([[1], [2]]);
  expect(cartesianProduct([[1, 2], [3]])).toEqual([
    [1, 3],
    [2, 3],
  ]);
  expect(
    cartesianProduct([
      [1, 2],
      [3, 4],
    ]),
  ).toEqual([
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
  ]);
  expect(cartesianProduct([[1, 2], [3], [4, 5, 6]])).toEqual([
    [1, 3, 4],
    [1, 3, 5],
    [1, 3, 6],
    [2, 3, 4],
    [2, 3, 5],
    [2, 3, 6],
  ]);
});
