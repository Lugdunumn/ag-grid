import { Expression } from './Expression';

export class StringsExpression extends Expression {
  constructor(readonly content: string[]) {
    super();
  }

  expressionCss(): string {
    return this.content.map((s) => JSON.stringify(s)).join(', ');
  }
}
