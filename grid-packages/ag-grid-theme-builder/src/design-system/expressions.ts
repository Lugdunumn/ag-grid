import { clamp } from 'model/utils';

export interface CssRepresentable {
  toCss(): string;
}

export const isCssRepresentable = (value: unknown): value is CssRepresentable =>
  value instanceof Object && 'toCss' in value && typeof value.toCss === 'function';

export interface Expression<T> extends CssRepresentable {
  readonly _type?: T; // need to use T so that typing works, but no value is provided
}

export class StringsExpression implements Expression<StringsExpression> {
  constructor(readonly content: string[]) {}

  toCss(): string {
    return this.content.map((s) => JSON.stringify(s)).join(', ');
  }
}

export class DimensionExpression implements Expression<DimensionExpression> {
  constructor(
    readonly number: number,
    readonly units: string,
  ) {}

  toCss(): string {
    return this.number + this.units;
  }
}

export class ColorExpression implements Expression<ColorExpression> {
  constructor(
    readonly r: number,
    readonly g: number,
    readonly b: number,
    readonly a: number,
  ) {
    this.r = clamp(r, 0, 1);
    this.g = clamp(g, 0, 1);
    this.b = clamp(b, 0, 1);
    this.a = clamp(a, 0, 1);
  }

  toCss(): string {
    const r = Math.round(this.r * 255);
    const g = Math.round(this.g * 255);
    const b = Math.round(this.b * 255);
    const a = Math.floor(this.a * 100) / 100;
    return a === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  withAlpha(alpha: number): ColorExpression {
    return new ColorExpression(this.r, this.g, this.b, this.a * clamp(alpha, 0, 1));
  }

  withTemperature(percent: number): ColorExpression {
    const amount = 1 - Math.abs(this.r - 0.5) * 2;
    const newR = this.r + this.r * percent * -0.01 * amount;
    return new ColorExpression(newR, this.g, this.b, this.a);
  }
}

export class LiteralExpression<T> implements Expression<T> {
  constructor(readonly css: string) {}
  toCss(): string {
    return this.css;
  }
}
