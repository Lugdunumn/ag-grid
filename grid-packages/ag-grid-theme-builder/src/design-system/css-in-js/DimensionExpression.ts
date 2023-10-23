import { Expression } from './Expression';

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
