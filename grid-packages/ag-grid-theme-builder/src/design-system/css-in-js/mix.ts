import { clamp } from 'model/utils';
import { ColorExpression, VarExpression } from '.';
import { Expression } from './Expression';

type MixableExpression = ColorExpression | ColorMixExpression | VarExpression;

export const mix = (
  background: MixableExpression,
  foreground: MixableExpression,
  foregroundAmount: number,
) => new ColorMixExpression(background, foreground, foregroundAmount);

export class ColorMixExpression extends Expression {
  constructor(
    readonly background: MixableExpression,
    readonly foreground: MixableExpression,
    readonly foregroundAmount: number,
  ) {
    super();
    this.foregroundAmount = clamp(foregroundAmount, 0, 1);
  }

  expressionCss(): string {
    const bPercent = Math.round(this.foregroundAmount * 100);
    return `color-mix(in srgb, ${this.background.expressionCss()}, ${this.foreground.expressionCss()}, ${bPercent}%)`;
  }
}
