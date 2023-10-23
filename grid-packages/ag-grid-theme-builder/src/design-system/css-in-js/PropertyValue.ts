// The right-hand side of a CSS `property-name: value` pair
export abstract class PropertyValue {
  abstract valueCss(): string;
}
