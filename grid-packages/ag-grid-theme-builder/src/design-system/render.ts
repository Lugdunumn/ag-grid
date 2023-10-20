type CssValue = null | undefined | string | number;

interface NestedRuleSet {
  [selector: string]: NestedDeclarations;
}

interface NestedDeclarations {
  [property: string]: CssValue | NestedDeclarations;
}

interface FlatRule {
  selectors: string[];
  declarations: [string, string][];
}

export const renderCssRuleSet = (nestedRules: NestedRuleSet): string => {
  const rules = flattenCssRuleSet(nestedRules);
  const result: string[] = [];
  addRules(rules, result);
  return result.join('').trim();
};

const addRules = (rules: FlatRule[], result: string[]) => {
  for (const { selectors, declarations } of rules) {
    if (declarations.length === 0 || selectors.length === 0) continue;
    result.push(selectors.join(',\n'), ' {\n');
    for (const [property, value] of declarations) {
      result.push('\t', property, ': ', value, ';\n');
    }
    result.push('}\n');
  }
};

// Flattens a nested rule set e.g. {someClass: {anotherClass: {color: red}}}
// flattens to .ag-some-class .ag-another-class { color: red; }
const flattenCssRuleSet = (input: NestedRuleSet): FlatRule[] => {
  const result: FlatRule[] = [];
  for (const [selectorsString, declarations] of Object.entries(input)) {
    flattenCssRule(selectorsString, declarations, [], result);
  }
  return result;
};

// flatten a block that can contain declarations e.g. 'color: red' or nested blocks
const flattenCssRule = (
  selectorsString: string,
  rule: NestedDeclarations,
  ancestorSelectors: string[][],
  result: FlatRule[],
) => {
  const selectors = parseSelectorsString(selectorsString);
  // if this block has declarations, emit them as a single css style rule block
  const declarations: [string, string][] = [];
  for (const [key, value] of Object.entries(rule)) {
    if (value == null || typeof value === 'object') continue;
    const renderedValue = typeof value === 'number' ? `${value}px` : value;
    declarations.push([toKebabCase(key), renderedValue]);
  }
  const selectorsPath: string[][] = [...ancestorSelectors, selectors];
  if (declarations.length > 0) {
    const propertiesRule: FlatRule = {
      selectors: cartesianProduct(selectorsPath).map(joinSelectors),
      declarations,
    };
    result.push(propertiesRule);
  }

  // recurse into nested blocks
  for (const [key, value] of Object.entries(rule)) {
    if (value == null || typeof value !== 'object') continue;
    flattenCssRule(key, value, selectorsPath, result);
  }
};

export const parseSelectorsString = (rawSelector: string): string[] =>
  rawSelector
    .trim()
    .replaceAll(/(?<![\w"'[:-])[a-z]+|\.[a-z]+/gi, mapElementsToClassNames)
    .split(/\s*,\s*/);

const mapElementsToClassNames = (element: string): string => {
  if (knownElements.has(element)) return element;
  if (element.startsWith('.')) {
    return mapElementsToClassNames(element.substring(1));
  }
  return '.ag-' + toKebabCase(element);
};

// https://en.wikipedia.org/wiki/Cartesian_product
export const cartesianProduct = <T>(input: T[][]): T[][] => {
  const last = input[input.length - 1];
  if (!last) return [[]];
  const rest = input.slice(0, -1);
  return cartesianProduct(rest).flatMap((c) => last.map((v) => [...c, v]));
};

const joinSelectors = (selectors: string[]) =>
  selectors
    .map((selector) => (selector.startsWith('&') ? selector.substring(1) : ' ' + selector))
    .join('');

const toKebabCase = (camelCase: string) =>
  camelCase.replaceAll(/(?<=[a-z])(?=[A-Z])/g, '-').toLowerCase();

// TODO embed a much smaller set of elements that we actually use
const knownElements = new Set(
  'a abbr address area article aside audio b base bdi bdo blockquote body br button canvas caption cite code col colgroup command datalist dd del details dfn div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link map mark menu meta meter nav noscript object ol optgroup option output p param pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr'.split(
    ' ',
  ),
);
