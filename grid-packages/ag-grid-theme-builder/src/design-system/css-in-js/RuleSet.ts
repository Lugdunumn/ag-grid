import { CSSDeclarations } from './CSSDeclarations';

// A map of class names to style blocks
export type RuleSet = {
  [key in string]?: Block;
};

Next up: I think I have to lose typing here. In practice it has not been an issue using untyped css.

// A block that can contain both style declarations and nested blocks, e.g:
// {color: red, {'&:hover': {color: blue}}}
export type Block = {
  [K in keyof CSSDeclarations]: CSSDeclarations[K];
} & {
  [key in string]?: RuleSet;
};
