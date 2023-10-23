import { ColorExpression, HexColorString } from './ColorExpression';
import { DimensionExpression } from './DimensionExpression';
import { Expression } from './Expression';
import { LiteralExpression } from './LiteralExpression';
import { RuleSet } from './RuleSet';
import { StringsExpression } from './StringsExpression';
import { VariableName } from './VariableName';
import { proxy, toKebabCase } from './utils';

export const strings = (content: string[]) => new StringsExpression(content);

export const dimension = (number: number, units: string) => new DimensionExpression(number, units);

export const px = (number: number) => dimension(number, 'px');

export const literal = (css: string) => new LiteralExpression(css);

export const rgb = (r: number, g: number, b: number, a = 1) => new ColorExpression(r, g, b, a);

export const hex = <T extends string>(value: HexColorString<T>) => ColorExpression.fromHex(value);

export const fontWeight = (weight: 'normal' | 'bold' | number) =>
  new LiteralExpression(String(weight));

export const block = literal('block');
export const none = literal('none');
export const flex = literal('flex');
export const hidden = literal('hidden');
export const visible = literal('visible');

export const v = proxy(
  (prop) => new LiteralExpression(`var(--ag-${String(toKebabCase(String(prop)))})`),
) as Record<VariableName, Expression>;

export const themePart = (part: RuleSet) => part;

export { inject } from './inject';
export { renderRuleSet as renderThemePart } from './render';
