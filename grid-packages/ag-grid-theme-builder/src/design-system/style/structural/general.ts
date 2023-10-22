import { block, hidden, important, literal, none, themePart } from 'design-system/dsl';

export const generalStructuralStyles = themePart({
  'ag-grid, ag-grid-angular, ag-grid-ng2, ag-grid-polymer, ag-grid-aurelia': {
    display: block,
  },
  hidden: {
    display: important(none),
  },
  invisible: {
    visibility: important(hidden),
  },
  noTransition: {
    transition: important(none),
  },
  rootWrapper: {
    border: literal('solid 1px blue'),
  },
});
