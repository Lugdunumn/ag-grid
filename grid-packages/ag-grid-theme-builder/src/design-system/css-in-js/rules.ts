// A map of class names to style blocks
export type Rules = Record<string, Block>;

// A block that can contain both style declarations and nested blocks, e.g:
// {color: red, {'&:hover': {color: blue}}}
export type Block = {
  [key: string]: BlockValue;
};

export type BlockValue = PropertyValue | ReadonlyArray<PropertyValue> | Block | null | undefined;

// The right-hand side of a CSS `property-name: value` pair
export interface PropertyValue {
  readonly css: string;
}

export const rules = (part: Rules) => part;

type;
