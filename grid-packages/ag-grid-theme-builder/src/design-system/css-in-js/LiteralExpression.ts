import { Expression } from './Expression';

export class LiteralExpression<T> extends Expression<T> {
  constructor(readonly css: string) {
    super();
  }
  expressionCss(): string {
    return this.css;
  }
}
