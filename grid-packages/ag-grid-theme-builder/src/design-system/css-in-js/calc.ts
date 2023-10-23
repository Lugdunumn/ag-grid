import { Expression } from './Expression';

export const calc = (...parts: ReadonlyArray<CalcPart>) => new CalcExpression(parts);

export type CalcPart = '+' | '-' | '*' | '/' | Expression;

export class CalcExpression extends Expression {
  constructor(readonly parts: ReadonlyArray<CalcPart>) {
    super();
  }

  expressionCss(): string {
    throw new Error('Method not implemented.');
  }
}
