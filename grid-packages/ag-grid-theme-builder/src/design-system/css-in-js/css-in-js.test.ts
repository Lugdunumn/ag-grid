import { expect, test } from 'vitest';
import { hex, literal, rgb, v } from '.';

test(`var proxy`, () => {
  expect(v.iconSize).toEqual(literal('var(--ag-icon-size)'));
});

test(`hex`, () => {
  expect(hex('#fff')).toEqual(rgb(1, 1, 1, 1));
});
