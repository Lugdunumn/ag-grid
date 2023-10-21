import { clamp } from 'model/utils';
import { toKebabCase } from './utils';

export interface CssRepresentable {
  toCss(): string;
}

export const isCssRepresentable = (value: unknown): value is CssRepresentable =>
  value instanceof Object && 'toCss' in value && typeof value.toCss === 'function';

export interface Expression<T> extends CssRepresentable {
  readonly _type?: T; // need to use T so that typing works, but no value is provided
}

export class StringExpression implements Expression<StringExpression> {
  constructor(readonly content: string) {}

  toCss(): string {
    return JSON.stringify(this.content);
  }
}

export const string = (content: string) => new StringExpression(content);

class Dimension implements Expression<Dimension> {
  constructor(
    readonly number: number,
    readonly units: string,
  ) {}

  toCss(): string {
    return this.number + this.units;
  }
}

export const dimension = (number: number, units: string) => new Dimension(number, units);
export const px = (number: number) => dimension(number, 'px');

class Color implements Expression<Color> {
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

  withAlpha(alpha: number): Color {
    return new Color(this.r, this.g, this.b, this.a * clamp(alpha, 0, 1));
  }

  withTemperature(percent: number): Color {
    const amount = 1 - Math.abs(this.r - 0.5) * 2;
    const newR = this.r + this.r * percent * -0.01 * amount;
    return new Color(newR, this.g, this.b, this.a);
  }
}

class LiteralExpression<T> implements Expression<T> {
  constructor(readonly css: string) {}
  toCss(): string {
    return this.css;
  }
}

export const literal = (css: string) => new LiteralExpression(css);

export const rgb = (r: number, g: number, b: number, a = 1) => new Color(r, g, b, a);

type Variables = {
  iconSize: Dimension;
  foregroundColor: Color;
};

type VariableExpressions = {
  [K in keyof Variables]: Expression<K>;
};

export const v: VariableExpressions = new Proxy({} as Record<string, CssRepresentable>, {
  get(cache, prop) {
    prop = String(prop);
    return (cache[prop] ||= new LiteralExpression(
      `var(--ag-${String(toKebabCase(String(prop)))})`,
    ));
  },
}) as VariableExpressions;
