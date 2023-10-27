import { CssProperties, CssPropertiesValue, PropertyValue } from './CssProperties';
import { GridClassNames } from './GridClassNames';

export type TopLevelRules = SelectorRules & {
  // TODO implement media rules
  //   '@media'?: MediaValue;
};

export type Selector = GridClassNames | PseudoClassSelector | PseudoElementSelector;
export type SelectorValue = (CssProperties & SelectorRules) | null | undefined;

export type SelectorRules = {
  readonly [K in Selector]?: SelectorValue;
} & {
  // symbols support {[selectors("foo")]: value} syntax
  readonly [key: symbol]: SelectorValue;
};

const pv: PropertyValue = { css: '' };
export const value: SelectorValue = pv;

export type SubLevelRecord = Readonly<Record<string | symbol, SelectorValue | CssPropertiesValue>>;

type PseudoClass =
  | ':active'
  | ':disabled'
  | ':first-child'
  | ':focus'
  | ':focus-visible'
  | ':focus-within'
  | ':hover'
  | ':invalid'
  | ':last-child';

export type PseudoClassSelector = `&${PseudoClass}` | `&:not(${PseudoClass})`;

export type PseudoElementSelector =
  | '&::-moz-ag-range-thumb'
  | '&::-moz-ag-range-track'
  | '&::-moz-range-track'
  | '&::-ms-thumb'
  | '&::-ms-track'
  | '&::-webkit-inner-spin-button'
  | '&::-webkit-outer-spin-button'
  | '&::-webkit-scrollbar'
  | '&::-webkit-slider-runnable-track'
  | '&::-webkit-slider-thumb'
  | '&::after'
  | '&::before'
  | '&::placeholder';
