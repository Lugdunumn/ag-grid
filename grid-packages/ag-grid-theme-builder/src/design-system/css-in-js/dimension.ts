import { Expression } from './Expression';

export const dimension = (number: number, units: string) => new DimensionExpression(number, units);
export const px = (number: number) => dimension(number, 'px');

export class DimensionExpression extends Expression {
  constructor(
    readonly number: number,
    readonly units: string,
  ) {
    super();
  }

  expressionCss(): string {
    return this.number + this.units;
  }
}
