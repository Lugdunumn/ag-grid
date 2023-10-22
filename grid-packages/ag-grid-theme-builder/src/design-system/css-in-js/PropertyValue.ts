declare const __brand: unique symbol;

// The right-hand side of a CSS `property-name: value` pair
export abstract class PropertyValue<T> {
  abstract valueCss(): string;
  // Prevent PropertyValues with different T parameters from being assigned to each other
  readonly [__brand]?: T;
}
