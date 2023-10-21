import { expect, test } from 'vitest';
import { literal, v } from './values';

test(`var proxy`, () => {
  expect(v.iconSize).toEqual(literal('var(--ag-icon-size)'));
});
