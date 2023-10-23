import { literal } from '.';
import { Expression } from './Expression';
import { VariableName } from './VariableName';
import { proxy, toKebabCase } from './utils';

export const v = proxy(
  // TODO convert to VarExpression
  (prop) => literal(`var(--ag-${String(toKebabCase(String(prop)))})`),
) as Record<VariableName, Expression>;
