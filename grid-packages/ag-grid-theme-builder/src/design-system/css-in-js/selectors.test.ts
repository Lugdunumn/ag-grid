import { expect, test } from 'vitest';
import { getSelectors, selectors } from '.';

test(selectors, () => {
  const sel = selectors('root', 'rootWrapper', 'rootWrapperBody');

  expect(getSelectors(sel)).toMatchInlineSnapshot([
    '.ag-root',
    '.ag-root-wrapper',
    '.ag-root-wrapper-body',
  ]);

  // memoization means that same arguments will yield same symbol
  expect(selectors('root', 'rootWrapper', 'rootWrapperBody')).toBe(sel);
  expect(selectors('root', 'rootWrapper')).not.toBe(sel);
});
