import { StyleRule } from './selector-dsl';
import { PropertyValue } from './types/CssProperties';
import { toKebabCase } from './utils';

export const renderRules = (rules: StyleRule[]): string => {
  const output: string[] = [];
  for (const { selectors, properties } of rules) {
    const plainProperties: [string, string][] = [];
    const rtlProperties: [string, string][] = [];
    const ltrProperties: [string, string][] = [];
    for (const [name, value] of Object.entries(properties)) {
      if (value == null) continue;
      const cssName = renderPropertyName(name);
      const cssValue = renderPropertyValue(value);
      if (cssName.includes('leading') || cssName.includes('trailing')) {
        ltrProperties.push([
          cssName.replace('leading', 'left').replace('trailing', 'right'),
          cssValue,
        ]);
        rtlProperties.push([
          cssName.replace('leading', 'right').replace('trailing', 'left'),
          cssValue,
        ]);
      } else {
        plainProperties.push([cssName.replace('always-', ''), cssValue]);
      }
    }
    renderSelectorsAndProperties(output, '', selectors, plainProperties);
    renderSelectorsAndProperties(output, '.ag-ltr ', selectors, ltrProperties);
    renderSelectorsAndProperties(output, '.ag-rtl ', selectors, rtlProperties);
  }
  return output.join('');
};

const renderPropertyName = (jsName: string) => {
  const cssName = toKebabCase(jsName);
  return /^(moz|ms|webkit)-/.test(cssName) ? '-' + cssName : cssName;
};

const renderSelectorsAndProperties = (
  output: string[],
  prefix: string,
  selectors: string[],
  properties: [string, string][],
) => {
  if (selectors.length === 0 || properties.length === 0) return;
  for (let i = 0; i < selectors.length; i++) {
    if (i !== 0) {
      output.push(', ');
    }
    output.push(prefix, selectors[i]);
  }
  output.push(' {\n');
  for (const [property, value] of properties) {
    output.push('\t', toKebabCase(property), ': ', renderPropertyValue(value), ';\n');
  }
  output.push('}\n');
};

const renderPropertyValue = (value: unknown): string => {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return String(value);
  if (Array.isArray(value)) {
    return value.map(renderPropertyValue).join(' ');
  }
  const css = (value as PropertyValue).css;
  if (typeof css === 'string') {
    return css;
  }
  throw new Error(`Invalid property value ${value}`);
};
