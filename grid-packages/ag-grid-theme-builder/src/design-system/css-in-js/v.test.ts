import { expect, test } from 'vitest';
import { literal } from '.';
import { v } from './v';

test(`variable proxy`, () => {
  expect(v.iconSize).toEqual(literal('var(--ag-icon-size)'));
});
