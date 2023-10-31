import { convertClassNamesInSelector, getSelectors } from '.';
import { CssPropertiesRecord, PropertyValue } from './types/CssProperties';
import { KeyframesRule, MediaRule, SelectorRecord, TopLevelRules } from './types/Rules';
import { toKebabCase } from './utils';

export const renderRules = (rules: TopLevelRules): string => {
  const output: string[] = [];
  for (const key of Reflect.ownKeys(rules)) {
    switch (key) {
      case '@keyframes':
        emitKeyframes(rules['@keyframes'], output);
        break;
      case '@font-face':
        emitNested('@font-face', rules, output);
        break;
      case '@media':
        emitMedia(rules['@media'], output);
        break;
      default:
        emitNested(key, rules, output);
    }
  }
  return output.join('').trim();
};

const emitNested = (key: string | symbol, rules: SelectorRecord, output: string[], indent = '') => {
  // TODO check whether this is a performance bottleneck, and if so switch from flattening the nested blocks to traversing and emitting
  const flat = flattenNestedBlock({
    [key]: rules[key],
  });
  for (const { selectors, declarations } of flat) {
    if (declarations.length === 0 || selectors.length === 0) continue;
    const selectorsWithoutAmpersands = selectors
      .join(',\n')
      .replaceAll(/ & |& | &/g, ' ')
      .replaceAll('&', '');
    output.push(indent, selectorsWithoutAmpersands, ' {\n');
    for (const { property, value } of declarations) {
      output.push(indent, '\t', property, ': ', value, ';\n');
    }
    output.push(indent, '}\n');
  }
};

const emitKeyframes = (keyframes: KeyframesRule | undefined | null, output: string[]) => {
  if (!keyframes) return;
  output.push('@keyframes ', keyframes.id, ' {\n\tfrom {\n');
  emitProperties(keyframes.from, output, '\t\t');
  output.push('\t}\n\tto {\n');
  emitProperties(keyframes.to, output, '\t\t');
  output.push('\t}\n}\n');
};

const emitMedia = (media: MediaRule | undefined | null, output: string[]) => {
  if (!media) return;
  output.push('@media ', media.query, ' {\n');
  for (const key of Reflect.ownKeys(media.rules)) {
    emitNested(key, media.rules, output, '\t');
  }
  output.push('}\n');
};

const emitProperties = (properties: CssPropertiesRecord, output: string[], indent: string) => {
  for (const [name, value] of Object.entries(properties)) {
    if (!value) continue;
    let cssName = toKebabCase(name).replaceAll('always-', '');
    if (/^(moz|ms|webkit)-/.test(cssName)) {
      cssName = '-' + cssName;
    }
    output.push(indent, cssName, ': ');
    if (isPropertyValueArray(value)) {
      for (let i = 0; i < value.length; i++) {
        if (i > 0) {
          output.push(' ');
        }
        output.push(value[i].css);
      }
    } else {
      output.push(value.css);
    }
    output.push(';\n');
  }
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
      //
      // TODO / NOTE - this logic duplicated in emitProperties, needs refactor
      //
      let property = toKebabCase(key).replaceAll('always-', '');
      if (/^(moz|ms|webkit)-/.test(property)) {
        property = '-' + property;
      }
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
