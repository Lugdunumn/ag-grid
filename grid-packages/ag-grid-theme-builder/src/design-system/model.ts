export interface CssRepresentable {
  toCss(): string;
}

// an object containing
export interface NestedRuleSet {
  [selector: string]: NestedBlock | null | undefined;
}

// Can contain declarations and nested blocks, e.g:
// {color: red, {'&:hover': {color: blue}}}
export interface NestedBlock {
  [property: string]: CssRepresentable | null | undefined | NestedBlock;
}

// a rendered CSS declaration, e.g. `padding-right: 4px`
export interface Declaration {
  property: string;
  value: string;
}
