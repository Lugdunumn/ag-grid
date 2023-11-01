import { StyleRule } from './render';
import { CssProperties } from './types/CssProperties';
import { GridClassNames } from './types/GridClassNames';
import { toKebabCase } from './utils';

export type Selector = {
  selectors: string[];
  tightJoin: boolean;
};

export type JoiningStyleRule = StyleRule & {
  tightJoin: boolean;
};

export type SelectorDsl = Selector &
  SelectorDslCall &
  SelectorDslMethods & {
    [K in KnownElement | PseudoClass | GridClassNames]: SelectorDsl;
  };

export type SelectorDslCall = {
  (properties: CssProperties, ...nested: JoiningStyleRule[][]): JoiningStyleRule[];
};

export type SelectorDslMethods = {
  not(other: Selector): SelectorDsl;
  nthChild(number: number): SelectorDsl;
  toString(): string;
};

const propertyToSelector = new Map<string, string>();

const knownElements = ['a', 'input', 'textarea', 'select', 'button', 'div', 'span'] as const;
knownElements.forEach((el) => propertyToSelector.set(el, el));
type KnownElement = (typeof knownElements)[number];

const pseudoClasses = [
  'active',
  'disabled',
  'firstChild',
  'focus',
  'focusVisible',
  'focusWithin',
  'hover',
  'invalid',
  'lastChild',
] as const;
pseudoClasses.forEach((prop) => propertyToSelector.set(prop, ':' + toKebabCase(prop)));
type PseudoClass = (typeof pseudoClasses)[number];

const selectorDsl = (tightJoin: boolean): SelectorDsl => {
  const selector: Selector & SelectorDslMethods = {
    tightJoin,
    selectors: [''],
    not(other: Selector) {
      return append(other.selectors.map((s) => `:not(${s})`).join());
    },
    nthChild(number: number) {
      return append(`:nth-child(${number})`);
    },
    toString() {
      return this.selectors.join();
    },
  };

  const append = (fragment: string) => {
    for (let i = 0; i < selector.selectors.length; i++) {
      selector.selectors[i] += fragment;
    }
    return dsl;
  };

  const call: SelectorDslCall = (properties, ...nested) =>
    flattenStyleRules(
      {
        type: 'style',
        selectors: selector.selectors,
        tightJoin,
        properties,
      },
      nested,
    );

  const dsl: SelectorDsl = new Proxy(call as any, {
    get: (_, prop) => {
      if (typeof prop === 'symbol' || prop in selector) return (selector as any)[prop];
      const predefined = propertyToSelector.get(prop);
      if (predefined != null) {
        return append(predefined);
      }
      if (prop === 'toJSON') {
        return () => ({ foo: 'bar' });
      }
      return append('.ag-' + toKebabCase(prop));
    },
  });

  return dsl;
};

const selectorDslFactory = (tightJoin: boolean) =>
  new Proxy<SelectorDsl>({} as any, {
    get: (_, prop) => {
      return selectorDsl(tightJoin)[prop as keyof SelectorDsl];
    },
  });

export const _ = selectorDslFactory(false);
export const $ = selectorDslFactory(true);

const flattenStyleRules = (
  parent: JoiningStyleRule,
  children: JoiningStyleRule[][],
): JoiningStyleRule[] => [
  parent,
  ...children.flat().map((child): JoiningStyleRule => {
    const separator = child.tightJoin ? '' : ' ';
    return {
      type: 'style',
      properties: child.properties,
      tightJoin: parent.tightJoin,
      selectors: parent.selectors.flatMap((parentSelector) =>
        child.selectors.map((childSelector) => parentSelector + separator + childSelector),
      ),
    };
  }),
];
