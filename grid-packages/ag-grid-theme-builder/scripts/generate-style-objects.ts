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
  // console.log(parsed);
  console.log(JSON.stringify(parsed, null, '    '));
};

convertFile('internal/base/parts/_common-structural.scss');
