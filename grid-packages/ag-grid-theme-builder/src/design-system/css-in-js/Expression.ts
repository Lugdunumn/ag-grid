import { LiteralExpression } from './LiteralExpression';
import { PropertyValue } from './PropertyValue';

// A CSS value that can be used both as a property value, or an argument to a function
export abstract class Expression<T> extends PropertyValue<T> {
  abstract expressionCss(): string;

  valueCss(): string {
    return this.expressionCss();
  }

  get important(): PropertyValue<T> {
    return new LiteralExpression(this.expressionCss() + '!important');
  }
}
