export const toKebabCase = (camelCase: string) =>
  camelCase.replaceAll(/(?<=[a-z])(?=[A-Z])/g, '-').toLowerCase();
