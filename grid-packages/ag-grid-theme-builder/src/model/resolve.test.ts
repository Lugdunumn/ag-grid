import { Expression, calc, dimension, px, rgb, v } from 'design-system/css-in-js';
import { resolve } from 'model/resolve';
import { expect, test } from 'vitest';

test('resolve calc', () => {
  // simple
  expect(resolve(calc(1, '+', 2), {})).toEqual(dimension(3, ''));
  expect(resolve(calc(1), {})).toEqual(dimension(1, ''));
  expect(resolve(calc(px(1), '+', px(2)), {})).toEqual(px(3));

  // operator precedence
  expect(resolve(calc(px(1), '+', px(5), '*', px(2)), {})).toEqual(px(11));

  // nested calc
  expect(resolve(calc(px(1), '+', calc(px(5), '*', px(2))), {})).toEqual(px(11));

  // nested var
  expect(resolve(calc(px(1), '+', calc(v.gridSize, '*', px(2))), { gridSize: px(2) })).toEqual(
    px(5),
  );

  // errors
  expect(() => resolve(calc(px(1), '+', v.gridSize), {})).toThrowErrorMatchingInlineSnapshot(
    '"Expected var(--ag-grid-size) to resolve to a dimension, but got null (while evaluating calc(1px + var(--ag-grid-size)))"',
  );
  expect(() =>
    resolve(calc(px(1), '+', v.foregroundColor), { foregroundColor: rgb(0, 0, 0) }),
  ).toThrowErrorMatchingInlineSnapshot(
    '"Expected var(--ag-foreground-color) to resolve to a dimension, but got rgb(0, 0, 0) (while evaluating calc(1px + var(--ag-foreground-color)))"',
  );
  expect(() => resolve(untypedCalc(px(1), '+'), {})).toThrowErrorMatchingInlineSnapshot(
    '"Invalid expression (1 +) (while evaluating calc(1px +))"',
  );
  expect(() =>
    resolve(v.iconSize, { iconSize: untypedCalc('+') }),
  ).toThrowErrorMatchingInlineSnapshot('"Invalid expression (+) (while evaluating var(--ag-icon-size) -> calc(+))"');
});

const untypedCalc = calc as (...parts: unknown[]) => Expression;

test('resolve var', () => {
  // simple
  expect(resolve(v.iconSize, { iconSize: px(5) })).toEqual(px(5));
  expect(resolve(v.foregroundColor, { foregroundColor: rgb(0, 0, 0) })).toEqual(rgb(0, 0, 0));

  // targeting another var
  expect(resolve(v.iconSize, { iconSize: v.gridSize, gridSize: px(10) })).toEqual(px(10));

  // targeting calc
  expect(resolve(v.iconSize, { iconSize: calc(v.gridSize, '*', 2), gridSize: px(10) })).toEqual(
    px(20),
  );

  // errors
  expect(() => resolve(v.iconSize, { iconSize: v.iconSize })).toThrowErrorMatchingInlineSnapshot(
    '"Infinite recursion detected while evaluating var(--ag-icon-size) -> var(--ag-icon-size)"',
  );
  expect(() =>
    resolve(v.iconSize, { iconSize: v.gridSize, gridSize: v.iconSize }),
  ).toThrowErrorMatchingInlineSnapshot(
    '"Infinite recursion detected while evaluating var(--ag-icon-size) -> var(--ag-grid-size) -> var(--ag-icon-size)"',
  );
});
