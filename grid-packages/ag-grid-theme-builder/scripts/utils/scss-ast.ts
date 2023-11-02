import * as fs from 'fs';
import * as path from 'path';
import { Node, parse, stringify } from 'scss-parser';

type FileContent = {
  type: 'file-content';
  nodes: ParsedNode[];
};

type ParsedNode = StyleRule | AtRule | PropertyDeclaration | LineComment | Include;

type StyleRule = {
  type: 'style-rule';
  selectors: string[];
  children: ParsedNode[];
};

type AtRule = {
  type: 'at-rule';
  rule: string;
  children: ParsedNode[];
};

type PropertyDeclaration = {
  type: 'property';
  name: string;
  value: string;
  comment?: string;
};

type Include = {
  type: 'include';
  mixin: string;
  argumentMap?: Record<string, string>;
};

type LineComment = {
  type: 'line-comment';
  text: string;
};

export const parseScssFile = (filePath: string): FileContent => {
  return parseScssString(
    fs.readFileSync(
      path.resolve(__dirname, '../../../../grid-community-modules/styles', filePath),
      'utf8',
    ),
  );
};

export const parseScssString = (scssContent: string): FileContent => {
  const ast = parse(scssContent);
  const result: FileContent = {
    type: 'file-content',
    nodes: [],
  };
  collectChildren(result.nodes, ast);
  return result;
};

const collectChildren = (output: ParsedNode[], node: Node) => {
  if (typeof node.value === 'string')
    throw new Error(
      `Can't use ${collectChildren.name} on a node with string value ${JSON.stringify(node)}`,
    );
  for (const child of node.value) {
    switch (child.type) {
      case 'space':
        continue;
      case 'comment_singleline':
        collectComment(output, child);
        continue;
      case 'atrule':
        collectAtRule(output, child);
        continue;
      case 'rule':
        collectRule(output, child);
        continue;
      case 'declaration':
        collectDeclaration(output, child);
        continue;
      default:
        logAst(child);
        throw new Error(`Don't know how to handle ${child.type} node`);
    }
  }
};

const collectAtRule = (output: ParsedNode[], node: Node) => {
  const atRule = toScss(node.value[0] as Node);
  switch (atRule) {
    case '@use':
      return;
    case '@mixin':
      return collectMixin(output, node);
    default:
      throw new Error(`Don't know how to handle ${atRule}`);
  }
};

const collectRule = (output: ParsedNode[], node: Node) => {
  const selectors = toScss(singleNodeByType(node, 'selector')).split(/\s*,\s*/g);
  const result: StyleRule = {
    type: 'style-rule',
    selectors,
    children: [],
  };
  collectChildren(result.children, singleNodeByType(node, 'block'));
  output.push(result);
};

const collectDeclaration = (output: ParsedNode[], node: Node) => {
  output.push({
    type: 'property',
    name: toScss(singleNodeByType(node, 'property')),
    value: toScss(singleNodeByType(node, 'value')),
  });
};

const singleNodeByType = (nodes: Node | Node[], type: string): Node => {
  if (!Array.isArray(nodes)) {
    nodes = children(nodes);
  }
  const candidates = nodes.filter((node) => node.type === type);
  if (candidates.length !== 1) {
    console.error(nodes);
    throw new Error(`Expected one ${type} node, got ${candidates.length}`);
  }
  return candidates[0];
};

const collectComment = (output: ParsedNode[], node: Node) => {
  output.push({
    type: 'line-comment',
    text: stringValue(node).trim(),
  });
};

const collectMixin = (output: ParsedNode[], node: Node) => {
  const name = toScss(singleNodeByType(node, 'identifier'));
  const content = singleNodeByType(node, 'block');
  if (name === 'output') {
    collectChildren(output, content);
  } else {
    throw new Error(`Don't know how to handle @mixin ${name}`);
  }
};

const children = (node: Node) => {
  if (typeof node.value === 'string') {
    throw new Error(`${node.type} node has no children (${stringify(node)})`);
  }
  return node.value;
};

const stringValue = (node: Node): string => {
  if (typeof node.value !== 'string') {
    throw new Error(`${node.type} node has array value (${stringify(node)})`);
  }
  return node.value;
};

const toScss = (node: Node): string => stringify(node).trim();

const logAst = (ast: any) =>
  console.log(
    JSON.stringify(
      ast,
      (key, value) => {
        if (key === 'start' || key === 'next') return undefined;
        return value;
      },
      '  ',
    ),
  );
