import { expect, test } from 'vitest';
import { ColorExpression, literal, px, solid } from '.';
import { renderRules } from './render';
import * as dsl from './selector-dsl';

// allow any property access for test purposes
type MockDsl = dsl.SelectorDsl & { [key: string]: dsl.SelectorDsl };
const _ = dsl._ as MockDsl;
const $ = dsl.$ as MockDsl;

test(`Render nested rules`, () => {
  const rules = _.rootWrapper(
    {
      content: literal('base'),
    },

    _.a(
      {
        content: literal('loose'),
      },

      _.b({
        content: literal('loose loose'),
      }),

      $.c({
        content: literal('loose tight'),
      }),
    ),

    $.d(
      {
        content: literal('tight'),
      },

      _.e({
        content: literal('tight loose'),
      }),

      $.f({
        content: literal('tight tight '),
      }),
    ),
  );
  expect(renderRules(rules)).toMatchInlineSnapshot(`
    ".ag-root-wrapper {
    	content: base;
    }
    .ag-root-wrapper a {
    	content: loose;
    }
    .ag-root-wrapper a .ag-b {
    	content: loose loose;
    }
    .ag-root-wrapper a.ag-c {
    	content: loose tight;
    }
    .ag-root-wrapper.ag-d {
    	content: tight;
    }
    .ag-root-wrapper.ag-d .ag-e {
    	content: tight loose;
    }
    .ag-root-wrapper.ag-d.ag-f {
    	content: tight tight ;
    }
    "
  `);
});

test(`Render RTL versions`, () => {
  const rules = _.rootWrapper({
    leading: px(1),
    trailing: px(2),
    paddingLeading: px(3),
    paddingTrailing: px(4),
    borderLeadingWidth: px(5),
    borderTrailingWidth: px(6),

    alwaysLeft: px(7),
    alwaysRight: px(8),
    paddingAlwaysLeft: px(9),
    paddingAlwaysRight: px(10),
    borderAlwaysLeftWidth: px(11),
    borderAlwaysRightWidth: px(12),
  });
  expect(renderRules(rules)).toMatchInlineSnapshot(`
    ".ag-root-wrapper {
    	left: 7px;
    	right: 8px;
    	padding-left: 9px;
    	padding-right: 10px;
    	border-left-width: 11px;
    	border-right-width: 12px;
    }
    .ag-ltr .ag-root-wrapper {
    	left: 1px;
    	right: 2px;
    	padding-left: 3px;
    	padding-right: 4px;
    	border-left-width: 5px;
    	border-right-width: 6px;
    }
    .ag-rtl .ag-root-wrapper {
    	right: 1px;
    	left: 2px;
    	padding-right: 3px;
    	padding-left: 4px;
    	border-right-width: 5px;
    	border-left-width: 6px;
    }
    "
  `);
});

test(`Render a compound property value`, () => {
  const rules = _.a({
    border: [solid, px(1), red],
  });
  expect(renderRules(rules)).toMatchInlineSnapshot(`
    "a {
    	border: solid 1px red;
    }
    "
  `);
});

test(`RTL rules don't apply to property names`, () => {
  const rules = _.leading({
    color: red,
  });
  expect(renderRules(rules)).toMatchInlineSnapshot(`
    ".ag-leading {
    	color: red;
    }
    "
  `);
});

test(`Convert`, () => {
  const rules = _.a({
    webkitOverflowScrolling: literal('x'),
    msOverflowStyle: literal('y'),
    mozAppearance: literal('z'),
  });
  expect(renderRules(rules)).toMatchInlineSnapshot(`
    "a {
    	-webkit-overflow-scrolling: x;
    	-ms-overflow-style: y;
    	-moz-appearance: z;
    }
    "
  `);
});

// test(`Render @keyframes blocks`, () => {
//   expect(
//     renderRules({
//       '@keyframes': {
//         id: 'foo-bar',
//         from: {
//           color: red,
//           paddingAlwaysLeft: px(3),
//         },
//         to: {
//           color: blue,
//           paddingAlwaysLeft: px(10),
//         },
//       },
//     }),
//   ).toMatchInlineSnapshot(`
//     "@keyframes foo-bar {
//     	from {
//     		color: red;
//     		padding-left: 3px;
//     	}
//     	to {
//     		color: blue;
//     		padding-left: 10px;
//     	}
//     }"
//   `);
// });

// test(`Render @font-face blocks`, () => {
//   expect(
//     renderRules({
//       '@font-face': {
//         fontFamily: literal('monospace'),
//         src: literal('url(./some-url)'),
//         fontWeight: bold,
//       },
//     }),
//   ).toMatchInlineSnapshot(`
//     "@font-face {
//     	font-family: monospace;
//     	src: url(./some-url);
//     	font-weight: bold;
//     }"
//   `);
// });

// test(`Render @media blocks`, () => {
//   expect(
//     renderRules({
//       '@media': {
//         query: 'print',
//         rules: {
//           [a]: {
//             color: red,
//             [b]: {
//               color: blue,
//             },
//           },
//         },
//       },
//     }),
//   ).toMatchInlineSnapshot(`
//     "@media print {
//     	a {
//     		color: red;
//     	}
//     	a b {
//     		color: blue;
//     	}
//     }"
//   `);
// });

const red = literal('red') as unknown as ColorExpression;
const green = literal('green') as unknown as ColorExpression;
const blue = literal('blue') as unknown as ColorExpression;
const purple = literal('purple') as unknown as ColorExpression;
const pink = literal('pink') as unknown as ColorExpression;
