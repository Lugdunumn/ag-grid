import { inject } from './inject';
import { renderNestedRules } from './render';
import { generalStructuralStyles } from './style/structural/general';

type Theme = {
  className: string;
};

export const installTheme = (theme: Theme) => {
  if (!theme.className.startsWith('ag-theme-')) {
    throw new Error('Theme class names must begin "ag-theme-"');
  }
  inject({
    id: 'structural',
    replace: true,
    generate: () => renderNestedRules(generalStructuralStyles),
  });
};
