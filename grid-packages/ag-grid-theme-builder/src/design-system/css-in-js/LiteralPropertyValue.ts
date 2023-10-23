import { PropertyValue } from './PropertyValue';

export class LiteralPropertyValue extends PropertyValue {
  constructor(readonly css: string) {
    super();
  }
  valueCss(): string {
    return this.css;
  }
}
