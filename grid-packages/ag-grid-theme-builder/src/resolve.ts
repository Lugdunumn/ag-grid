import {
  CalcExpression,
  DimensionExpression,
  Expression,
  VarExpression,
  dimension,
} from 'design-system/css-in-js';
import MathExpressions from 'math-expression-evaluator';
import { VariableValues } from 'model/resolve';

export const resolve = (expr: Expression, values: VariableValues) => {
  return doResolve(expr, values, []);
};

const doResolve = (expr: Expression, values: VariableValues, stack: Expression[]) => {
  if (stack.length >= 100) {
    const cssStack = stack.map((e) => e.expressionCss());
    const recursionIndex = cssStack.indexOf(cssStack[0], 1);
    const path = cssStack.slice(0, recursionIndex == -1 ? 10 : recursionIndex + 1).join(' -> ');
    throw new Error(`Infinite recursion detected while evaluating ${path}`);
  }
  if (expr instanceof CalcExpression) {
    return resolveCalc(expr, values, [...stack, expr]);
  } else if (expr instanceof VarExpression) {
    return resolveVar(expr, values, [...stack, expr]);
  }
  return expr;
};

const mathExpressions = new MathExpressions();

const resolveCalc = (
  calc: CalcExpression,
  values: VariableValues,
  stack: Expression[],
): DimensionExpression => {
  let units = '';
  const expression = calc.parts
    .map((part): number | string => {
      if (typeof part === 'number' || typeof part === 'string') {
        return part;
      }
      const resolved = doResolve(part, values, stack);
      if (!(resolved instanceof DimensionExpression)) {
        throw new Error(
          `Expected ${part.expressionCss()} to resolve to a dimension, but got ${
            resolved?.expressionCss() || null
          } (while evaluating ${calc.expressionCss()})`,
        );
      }
      units ||= resolved.units;
      if (units && resolved.units && units !== resolved.units) {
        throw new Error(
          `Mixed units in calc expression ${calc.expressionCss()} (${units} and ${resolved.units})`,
        );
      }
      return resolved.number;
    })
    .join(' ');
  try {
    const number = mathExpressions.eval(expression, [], {});
    return dimension(number, units);
  } catch {
    throw new Error(`Invalid calc expression ${calc.expressionCss()}`);
  }
};

const resolveVar = (
  { propertyName }: VarExpression,
  values: VariableValues,
  stack: Expression[],
): Expression | null => {
  const value = values[propertyName] || null;
  return value != null ? doResolve(value, values, stack) : null;
};
