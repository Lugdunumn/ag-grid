import { Expression } from './Expression';

export const dimension = (number: number, units: string) => new DimensionExpression(number, units);
export const px = (number: number) => dimension(number, 'px');
export const percent = (number: number) => dimension(number, '%');
export const seconds = (number: number) => dimension(number, 's');

export class DimensionExpression extends Expression {
  constructor(
    readonly number: number,
    readonly units: string,
  ) {
    super(number + units);
  }
}
