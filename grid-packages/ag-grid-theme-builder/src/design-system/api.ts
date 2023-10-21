import {
  ColorExpression,
  DimensionExpression,
  LiteralExpression,
  StringsExpression,
} from './expressions';

export const strings = (content: string[]) => new StringsExpression(content);

export const dimension = (number: number, units: string) => new DimensionExpression(number, units);
export const px = (number: number) => dimension(number, 'px');

export const literal = (css: string) => new LiteralExpression(css);

export const rgb = (r: number, g: number, b: number, a = 1) => new ColorExpression(r, g, b, a);

export const fontWeight = (weight: 'normal' | 'bold' | number) =>
  new LiteralExpression(String(weight));

export const display = (show: boolean) => new LiteralExpression(show ? 'block' : 'none');

export { v } from './variables';
