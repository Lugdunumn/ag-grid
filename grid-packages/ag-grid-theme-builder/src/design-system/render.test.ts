import { expect, test } from 'vitest';
import { parseSelectorString } from './render';

// test(renderCssRuleSet, () => {
//   expect(
//     renderCssRuleSet({
//       foo: {
//         color: 'red',

//         bar: {
//           color: 'green',
//         },
//       },
//     }),
//   ).toMatchInlineSnapshot('""');
// });

test(parseSelectorString, () => {
  expect(parseSelectorString('foo')).toEqual([['.ag-foo']]);
  expect(parseSelectorString('fooBar')).toEqual([['.ag-foo-bar']]);
  expect(parseSelectorString('foo bar')).toEqual([['.ag-foo', '.ag-bar']]);
  expect(parseSelectorString('foo, bar')).toEqual([['.ag-foo'], ['.ag-bar']]);

  // append state classes
  expect(parseSelectorString('foo.stateClass')).toEqual([['.ag-foo.ag-state-class']]);
  expect(parseSelectorString('foo:not(stateClass)')).toEqual([['.ag-foo:not(.ag-state-class)']]);

  // pseudo selectors
  expect(parseSelectorString('foo:last-child')).toEqual([['.ag-foo:last-child']]);

  // pseudo classes
  expect(parseSelectorString('foo::before')).toEqual([['.ag-foo::before']]);

  // html elements
  expect(parseSelectorString('input[type="button"]')).toEqual([['input[type="button"]']]);
});
