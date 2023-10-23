import { PropertyValue } from './rules';

// A CSS value that can be used both as a property value, or an argument to a function
export abstract class Expression extends PropertyValue {
  abstract expressionCss(): string;

  valueCss(): string {
    return this.expressionCss();
  }

  get important(): PropertyValue {
    return new LiteralPropertyValue(this.expressionCss() + '!important');
  }
}

class LiteralPropertyValue extends PropertyValue {
  constructor(readonly css: string) {
    super();
  }
  valueCss(): string {
    return this.css;
  }
}
