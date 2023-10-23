import { Expression } from './Expression';

export class LiteralExpression extends Expression {
  constructor(readonly css: string) {
    super();
  }
  expressionCss(): string {
    return this.css;
  }
}
