import { expect, test } from 'vitest';
import { hex, rgb } from '.';

test(`hex`, () => {
  expect(hex('#fff')).toEqual(rgb(1, 1, 1, 1));
});
