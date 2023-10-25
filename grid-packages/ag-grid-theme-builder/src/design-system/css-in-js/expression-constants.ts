import { dimension, rgb } from '.';
import { literal } from './literal';

export const block = literal('block');
export const none = literal('none');
export const flex = literal('flex');
export const inlineBlock = literal('inline-block');

export const solid = literal('solid');
export const dotted = literal('dotted');
export const dashed = literal('dashed');

export const zero = dimension(0, '');

export const hidden = literal('hidden');
export const visible = literal('visible');

export const normal = literal('normal');
export const bold = literal('bold');
export const semiBold = literal('600');

export const transparent = rgb(0, 0, 0, 0);
