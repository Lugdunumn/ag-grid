import { AnyPropertyValue } from './PropertyValue';

// A map of class names to style blocks
export type RuleSet = Record<string, Block>;

// A block that can contain both style declarations and nested blocks, e.g:
// {color: red, {'&:hover': {color: blue}}}
export type Block = {
  [key: string]: AnyPropertyValue | Block | null | undefined;
};
