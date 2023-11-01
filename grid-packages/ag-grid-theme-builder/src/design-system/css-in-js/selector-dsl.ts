import { CssProperties } from './types/CssProperties';
import { GridClassNames } from './types/GridClassNames';
import { toKebabCase } from './utils';

export type Selector = {
  selectors: string[];
  tightJoin: boolean;
};

export type StyleRule = Selector & {
  properties: CssProperties;
};

const selectorToRule = (selector: Selector, properties: CssProperties): StyleRule => ({
  selectors: selector.selectors,
  tightJoin: selector.tightJoin,
  properties,
});

const flattenStyleRules = (parent: StyleRule, children: StyleRule[][]): StyleRule[] => [
  parent,
  ...children
    .flatMap((c) => c)
    .map((child): StyleRule => {
      const separator = child.tightJoin ? '' : ' ';
      return {
        properties: child.properties,
        tightJoin: parent.tightJoin,
        selectors: parent.selectors.flatMap((parentSelector) =>
          child.selectors.map((childSelector) => parentSelector + separator + childSelector),
        ),
      };
    }),
];

export type SelectorDsl = Selector &
  SelectorDslCall &
  SelectorDslMethods & {
    [K in KnownElement | PseudoClass | GridClassNames]: SelectorDsl;
  };

export type SelectorDslCall = {
  (properties: CssProperties, ...nested: StyleRule[][]): StyleRule[];
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

const makeSelectorDsl = (tightJoin: boolean): SelectorDsl => {
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

  const dsl: SelectorDsl = new Proxy((() => null) as any, {
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
    apply: (_, __, [properties, ...nested]): StyleRule[] => {
      return flattenStyleRules(selectorToRule(selector, properties), nested);
    },
  });

  return dsl;
};

const makeSelectorDslFactory = (tightJoin: boolean) =>
  new Proxy<SelectorDsl>({} as any, {
    get: (_, prop) => {
      return makeSelectorDsl(tightJoin)[prop as keyof SelectorDsl];
    },
  });

export const _ = makeSelectorDslFactory(false);
export const $ = makeSelectorDslFactory(true);
