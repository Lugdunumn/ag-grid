import { Selector } from './types/Rules';

type CacheNode = {
  symbol: symbol;
  children: Map<string, CacheNode | undefined>;
};
const selectorsToSymbols = new Map<string, CacheNode | undefined>();

const symbolsToSelectors = new Map<symbol, readonly string[] | undefined>();

export const selectors = (first: Selector, ...rest: readonly Selector[]) =>
  untypedSelectors(first, ...rest);

export const untypedSelectors = (first: string, ...rest: readonly string[]): symbol => {
  let node = getNode(selectorsToSymbols, first);
  for (const selector of rest) {
    node = getNode(node.children, selector);
  }
  const { symbol } = node;
  if (!symbolsToSelectors.has(symbol)) {
    symbolsToSelectors.set(symbol, [first, ...rest]);
  }
  return symbol;
};

const getNode = (map: Map<string, CacheNode | undefined>, key: string): CacheNode => {
  let node = map.get(key);
  if (node == null) {
    node = {
      symbol: Symbol(`${selectors.name}(...)`),
      children: new Map(),
    };
    map.set(key, node);
  }
  return node;
};

export const getSelectors = (symbol: symbol): readonly string[] => {
  const result = symbolsToSelectors.get(symbol);
  if (!result) {
    throw new Error(`Symbol not created with ${selectors.name}(...)`);
  }
  return result;
};
