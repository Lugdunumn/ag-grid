import { ColorExpression } from './ColorExpression';
import { PropertyValue } from './PropertyValue';

type CSSDeclarationTypes = {
  // display: PropertyValue<'none' | 'block' | 'flex'>;
  display: PropertyValue<'none'> | PropertyValue<'block'> | PropertyValue<'flex'>;
  visibility: PropertyValue<'visible' | 'hidden'>;
  transition: PropertyValue<string>;
  border: PropertyValue<string>;
  color: PropertyValue<ColorExpression>;
  backgroundColor: PropertyValue<ColorExpression>;
};

export type CSSDeclarations = {
  [K in keyof CSSDeclarationTypes]?: CSSDeclarationTypes[K];
};
