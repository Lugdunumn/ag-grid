import { clamp } from 'model/utils';
import { CssRepresentable } from './model';

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

  static fromHex(hex: string) {
    hex = hex.substring(1);
    if (hex.length === 3) hex += 'f';
    if (hex.length === 4)
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    else if (hex.length === 6) hex += 'ff';
    const value = parseInt(hex, 16);
    if (hex.length !== 8 || isNaN(value)) throw new Error(`Invalid hex "${hex}"`);
    return new ColorExpression(
      (value >>> 24) % 0x100,
      (value >>> 16) % 0x100,
      (value >>> 8) % 0x100,
      value % 0x100,
    );
  }
}

type Hex1 =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'a'
  | 'A'
  | 'b'
  | 'B'
  | 'c'
  | 'C'
  | 'd'
  | 'D'
  | 'e'
  | 'E'
  | 'f'
  | 'F';

type Hex2<T extends string> = T extends `${Hex1}${infer Rest}`
  ? Rest extends Hex1
    ? T
    : never
  : never;

type Hex3<T extends string> = T extends `${Hex1}${infer Rest}`
  ? Rest extends Hex2<Rest>
    ? T
    : never
  : never;

type Hex4<T extends string> = T extends `${Hex1}${infer Rest}`
  ? Rest extends Hex3<Rest>
    ? T
    : never
  : never;

type Hex6<T extends string> = T extends `${Hex3<infer _>}${infer Rest}`
  ? Rest extends Hex3<Rest>
    ? T
    : never
  : never;

type Hex8<T extends string> = T extends `${Hex4<infer _>}${infer Rest}`
  ? Rest extends Hex4<Rest>
    ? T
    : never
  : never;

// A valid hex color string e.g. #f00 with 3, 4, 6 or 8 digits
export type HexColorString<T extends string> =
  // if T is typed `string` then let it pass because we can't validate it
  string extends T
    ? string
    : T extends `#${infer Rest}`
    ? // else (if T is a string literal) require it's in the right format
      Rest extends Hex3<Rest> | Hex4<Rest> | Hex6<Rest> | Hex8<Rest>
      ? T
      : never
    : never;

export class LiteralExpression<T> implements Expression<T> {
  constructor(readonly css: string) {}
  toCss(): string {
    return this.css;
  }
}
