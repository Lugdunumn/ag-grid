import { expect, test } from 'vitest';
import { px } from '.';
import { calc } from './calc';
import { v } from './v';

test(calc, () => {
  expect(calc(1, '*', 2).valueCss()).toEqual('calc(1 * 2)');
  expect(calc(v.iconSize, '*', 2).valueCss()).toEqual('calc(var(--ag-icon-size) * 2)');
  expect(calc(v.iconSize, '*', px(2)).valueCss()).toEqual('calc(var(--ag-icon-size) * 2px)');
});

test('calc nesting', () => {
  expect(calc(calc(2, '+', 3), '*', 2).valueCss()).toEqual('calc((2 + 3) * 2)');
  expect(calc(calc(2, '+', 3), '*', calc(px(2), '+', v.iconSize)).valueCss()).toEqual(
    'calc((2 + 3) * (2px + var(--ag-icon-size)))',
  );
});
