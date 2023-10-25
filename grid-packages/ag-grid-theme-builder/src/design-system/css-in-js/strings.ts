import { LiteralExpression } from '.';

export const strings = (content: string[]) =>
  new LiteralExpression(content.map((s) => JSON.stringify(s)).join(', '));
