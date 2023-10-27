import { Selector } from './types/Rules';
import { toKebabCase } from './utils';

type CacheNode = {
  symbol: symbol;
  children: Map<string, CacheNode | undefined>;
};
const selectorsToSymbols = new Map<string, CacheNode | undefined>();

const symbolsToSelectors = new Map<symbol, readonly string[] | undefined>();

export const selectors = (first: Selector, ...rest: readonly Selector[]) =>
  untypedSelectors(first, ...rest);

export const untypedSelectors = (first: string, ...rest: readonly string[]): symbol =>
  rawSelectors(convertClassNamesInSelector(first), ...rest.map(convertClassNamesInSelector));

export const rawSelectors = (first: string, ...rest: readonly string[]): symbol => {
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

// TODO embed a much smaller set of elements that we actually use
const knownElements = new Set(
  'a abbr address area article aside audio b base bdi bdo blockquote body br button canvas caption cite code col colgroup command datalist dd del details dfn div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link map mark menu meta meter nav noscript object ol optgroup option output p param pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr'.split(
    ' ',
  ),
);

export const convertClassNamesInSelector = (input: string): string =>
  input.trim().replaceAll(/((?<![\w"'@[:-])[a-z]+|\.[a-z]+)(?![a-z-])/gi, (word): string => {
    if (knownElements.has(word)) return word;
    if (word.startsWith('.')) {
      word = word.substring(1);
    }
    return '.ag-' + toKebabCase(word);
  });
