import { expect, test } from 'vitest';
import { _ } from './selector-dsl';

test(`Build selectors`, () => {
  expect(_.input.toString()).toBe('input');
  expect(_.input.not(_.div).toString()).toBe('input:not(div)');
  expect(_.input.firstChild.toString()).toBe('input:first-child');
  expect(_.input.not(_.firstChild).toString()).toBe('input:not(:first-child)');
  expect(_.input.nthChild(3).hover.toString()).toBe('input:nth-child(3):hover');
});
