import { Selector } from './types/Rules';
import { toKebabCase } from './utils';

type CacheNode = {
  symbol: symbol;
  children: Cache;
};
type Cache = Map<string, CacheNode | undefined>;

const selectorsToSymbol: Cache = new Map();

const symbolToSelectors = new Map<symbol, readonly string[] | undefined>();

export const selectors = (first: Selector, ...rest: readonly Selector[]) =>
  untypedSelectors(first, ...rest);

export const untypedSelectors = (first: string, ...rest: readonly string[]): symbol => {
  let node = getNode(selectorsToSymbol, first);
  for (const selector of rest) {
    node = getNode(node.children, selector);
  }
  const { symbol } = node;
  if (!symbolToSelectors.has(symbol)) {
    symbolToSelectors.set(symbol, [
      convertClassNamesInSelector(first),
      ...rest.map(convertClassNamesInSelector),
    ]);
  }
  return symbol;
};

const getNode = (cache: Cache, key: string): CacheNode => {
  let node = cache.get(key);
  if (node == null) {
    node = {
      symbol: Symbol(`${selectors.name}(...)`),
      children: new Map(),
    };
    cache.set(key, node);
  }
  return node;
};

export const getSelectors = (symbol: symbol): readonly string[] => {
  const result = symbolToSelectors.get(symbol);
  if (!result) {
    throw new Error(`Symbol not created with ${selectors.name}(...)`);
  }
  return result;
};

// these are not converted to classnames
const knownElements = new Set(['input', 'textarea', 'select', 'button', 'div', 'span']);

// "rootWrapper" -> ".ag-root-wrapper"
export const convertClassNamesInSelector = (input: string): string =>
  input.trim().replaceAll(/((?<![\w"'@[:-])[a-z]+|\.[a-z]+)(?![a-z-])/gi, (word): string => {
    if (knownElements.has(word) || word.length === 1) return word;
    if (word.startsWith('.')) {
      word = word.substring(1);
    }
    return '.ag-' + toKebabCase(word);
  });
