import { PropertyValue } from './PropertyValue';

export class LiteralPropertyValue<T> extends PropertyValue<T> {
  constructor(readonly css: string) {
    super();
  }
  valueCss(): string {
    return this.css;
  }
}
