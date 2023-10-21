type CssValue = null | undefined | string;

interface NestedRuleSet {
  [selector: string]: NestedBlock;
}

// Can contain declarations and nested blocks, e.g:
// {color: red, {'&:hover': {color: blue}}}
interface NestedBlock {
  [property: string]: CssValue | NestedBlock;
}

// Represents a CSSStyleRule e.g. `.a, .b, { color: red; }`
interface StyleRule {
  selectors: string[];
  declarations: Declaration[];
}

// a rendered CSS declaration, e.g. `padding-right: 4px`
interface Declaration {
  property: string;
  value: string;
}

export const renderNestedRules = (nestedRules: NestedRuleSet): string => {
  const rules = flattenNestedBlock(nestedRules);
  const result: string[] = [];
  for (const { selectors, declarations } of rules) {
    if (declarations.length === 0 || selectors.length === 0) continue;
    const selectorsWithoutAmpersands = selectors
      .join(',\n')
      .replaceAll(/ & |& | &/g, ' ')
      .replaceAll('&', '');
    result.push(selectorsWithoutAmpersands, ' {\n');
    for (const { property, value } of declarations) {
      result.push('\t', property, ': ', value, ';\n');
    }
    result.push('}\n');
  }
  return result.join('').trim();
};

// flatten a block that can contain declarations e.g. 'color: red' or nested blocks
const flattenNestedBlock = (rule: NestedBlock): StyleRule[] => {
  const declarations: Declaration[] = [];
  const result: StyleRule[] = [];
  for (const [key, value] of Object.entries(rule)) {
    if (value == null) continue;
    if (typeof value === 'object') {
      const parentSelectors = parseSelectorsString(key);
      result.push(...joinParentSelectors(parentSelectors, flattenNestedBlock(value)));
    } else {
      declarations.push({ property: toKebabCase(key), value });
    }
  }
  if (declarations.length > 0) {
    result.unshift({
      selectors: ['&'],
      declarations,
    });
  }
  return result;
};

// Combine StyleRules with one or more parent selectors, using a
// https://en.wikipedia.org/wiki/Cartesian_product
const joinParentSelectors = (parentSelectors: string[], styleRules: StyleRule[]): StyleRule[] => {
  return styleRules.flatMap(({ selectors, declarations }) =>
    parentSelectors.map(
      (parentSelector): StyleRule => ({
        selectors: selectors.map((selector) => joinSelectors(parentSelector, selector)),
        declarations,
      }),
    ),
  );
};

// implement the rules for combining a selector with its parent selector,
// in the Sass style e.g. 'x' joined to '&:hover' = 'x:hover'
export const joinSelectors = (a: string, b: string): string => {
  if (!b.includes('&')) return a + ' ' + b;

  if (!/^(&[^&]*|[^&]* &|[^&]* & [^&]*)$/.test(b)) {
    throw new Error(
      `Selectors can contain at most one &, either at the start or separated by spaces ("${b}")`,
    );
  }

  if (b.startsWith('&')) return a + b.substring(1);

  if (!a.includes('&')) a = '& ' + a;

  return b.replaceAll('&', a);
};

const parseSelectorsString = (rawSelector: string): string[] =>
  rawSelector
    .trim()
    .replaceAll(/(?<![\w"'[:-])[a-z]+|\.[a-z]+/gi, mapElementsToClassNames)
    .split(/\s*,\s*/);

const mapElementsToClassNames = (element: string): string => {
  if (knownElements.has(element) || element.length === 1) return element;
  if (element.startsWith('.')) {
    element = element.substring(1);
  }
  return '.ag-' + toKebabCase(element);
};

const toKebabCase = (camelCase: string) =>
  camelCase.replaceAll(/(?<=[a-z])(?=[A-Z])/g, '-').toLowerCase();

// TODO embed a much smaller set of elements that we actually use
const knownElements = new Set(
  'a abbr address area article aside audio b base bdi bdo blockquote body br button canvas caption cite code col colgroup command datalist dd del details dfn div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link map mark menu meta meter nav noscript object ol optgroup option output p param pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr'.split(
    ' ',
  ),
);
