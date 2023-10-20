type CssValue = null | undefined | string;

interface NestedRuleSet {
  [selector: string]: NestedDeclarations;
}

interface NestedDeclarations {
  [property: string]: CssValue | NestedDeclarations;
}

interface FlatRule {
  selectors: string[][];
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
      result.push('\t', property, ': ', value, '\n');
    }
    result.push('}\n');
  }
};

const flattenCssRuleSet = (input: NestedRuleSet): FlatRule[] => {
  const result: FlatRule[] = [];
  for (const [rawSelector, declarations] of Object.entries(input)) {
    const selectors = parseSelectorString(rawSelector);
    flattenCssRule(selectors, declarations, result);
  }
  return result;
};

const flattenCssRule = (selectors: string[][], rule: NestedDeclarations, result: FlatRule[]) => {
  const propertiesRule: FlatRule = {
    selectors,
    declarations: [],
  };
  for (const [key, value] of Object.entries(rule)) {
    if (value == null || typeof value === 'object') continue;
    propertiesRule.declarations.push([toKebabCase(key), value]);
  }
  if (propertiesRule.declarations.length > 0) {
    result.push(propertiesRule);
  }
};

export const parseSelectorString = (rawSelector: string): string[][] =>
  rawSelector
    .trim()
    .replaceAll(/(?<![\w"'[:-])\w+|\.\w+/g, mapElementsToClassNames)
    .split(/\s*,\s*/)
    .map((part) => part.split(/\s+/));

const mapElementsToClassNames = (element: string): string => {
  if (knownElements.has(element)) return element;
  if (element.startsWith('.')) {
    return mapElementsToClassNames(element.substring(1));
  }
  return '.ag-' + toKebabCase(element);
};

const toKebabCase = (camelCase: string) =>
  camelCase.replaceAll(/(?<=[a-z])(?=[A-Z])/g, '-').toLowerCase();

const knownElements = new Set(
  'a abbr address area article aside audio b base bdi bdo blockquote body br button canvas caption cite code col colgroup command datalist dd del details dfn div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link map mark menu meta meter nav noscript object ol optgroup option output p param pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr'.split(
    ' ',
  ),
);
