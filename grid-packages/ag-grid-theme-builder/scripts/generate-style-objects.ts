/**
 * This script parses Sass code and rewrites it as object-based styles
 */

///
/// IMPLEMENTATION
///
import * as fs from 'fs';
import * as path from 'path';
import * as scss from 'scss-parser';

const projectDir = path.resolve(__dirname, '..');

/*
TODO

 - 
*/

const convertFile = (srcPath: string) => {
  const source = fs.readFileSync(
    path.resolve(projectDir, '../../grid-community-modules/styles/src', srcPath),
    'utf8',
  );
  const parsed = scss.parse(source);
  for (const node of parsed.value) {
    visitNode(node);
  }
};

const visitNode = (node: any) => {
  if (node.type === 'space') return;
  if (node.type === 'atrule' && node.value[0].value === 'use') return;
  console.log(node);
};

convertFile('internal/base/parts/_common-structural.scss');
