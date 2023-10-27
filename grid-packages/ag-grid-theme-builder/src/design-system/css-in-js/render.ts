import { convertClassNamesInSelector, getSelectors } from '.';
import { PropertyValue } from './types/CssProperties';
import { SelectorRecord, TopLevelRules } from './types/Rules';
import { toKebabCase } from './utils';

export const renderRules = (nestedRules: TopLevelRules): string => {
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
const flattenNestedBlock = (rule: SelectorRecord): StyleRule[] => {
  const blockDeclarations: Declaration[] = [];
  const ltrDeclarations: Declaration[] = [];
  const result: StyleRule[] = [];
  for (const key of Reflect.ownKeys(rule)) {
    const valueOrBlock = rule[key];
    if (valueOrBlock == null) continue;
    if (isPropertyValue(valueOrBlock) || isPropertyValueArray(valueOrBlock)) {
      // type checking should make it impossible to use a symbol as a key for property values
      if (typeof key === 'symbol') continue;
      const property = toKebabCase(key).replaceAll('always-', '');
      const value = isPropertyValueArray(valueOrBlock)
        ? valueOrBlock.map((v: PropertyValue) => v.css).join(' ')
        : valueOrBlock.css;
      if (value === '') continue;
      if (/\b(leading|trailing)\b/.test(property)) {
        ltrDeclarations.push({
          property: property.replaceAll('leading', 'left').replaceAll('trailing', 'right'),
          value,
        });
      } else {
        blockDeclarations.push({ property, value });
      }
    } else {
      const selectors =
        typeof key === 'symbol' ? getSelectors(key) : [convertClassNamesInSelector(key)];
      result.push(...joinParentSelectors(selectors, flattenNestedBlock(valueOrBlock)));
    }
  }
  if (ltrDeclarations.length > 0) {
    result.push({
      selectors: ['.ag-ltr &'],
      declarations: ltrDeclarations,
    });
    result.push({
      selectors: ['.ag-rtl &'],
      declarations: ltrDeclarations.map(({ property, value }) => ({
        property: property.replaceAll('left', 'right'),
        value,
      })),
    });
  }
  if (blockDeclarations.length > 0) {
    result.unshift({
      selectors: ['&'],
      declarations: blockDeclarations,
    });
  }
  return result;
};

const isPropertyValue = (value: unknown): value is PropertyValue =>
  value instanceof Object && 'css' in value && typeof value.css === 'string';

const isPropertyValueArray = (value: unknown): value is readonly PropertyValue[] =>
  Array.isArray(value);

// Combine StyleRules with one or more parent selectors, using a
// https://en.wikipedia.org/wiki/Cartesian_product
const joinParentSelectors = (
  parentSelectors: readonly string[],
  styleRules: readonly StyleRule[],
): readonly StyleRule[] => {
  return styleRules.map(({ selectors, declarations }): StyleRule => {
    const selectorProduct = parentSelectors.flatMap((parentSelector) =>
      selectors.map((selector) => joinSelectors(parentSelector, selector)),
    );
    return {
      selectors: selectorProduct,
      declarations,
    };
  });
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

// A flattened CSS style rule e.g. `.a, .b, { color: red; }`
interface StyleRule {
  selectors: string[];
  declarations: Declaration[];
}

// a rendered CSS declaration, e.g. `padding-right: 4px`
interface Declaration {
  property: string;
  value: string;
}
