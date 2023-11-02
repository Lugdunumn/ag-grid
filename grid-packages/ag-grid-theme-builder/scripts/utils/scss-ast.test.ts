import { expect, test } from 'vitest';
import { parseScssFile, parseScssString } from './scss-ast';

test(`Parses ast`, () => {
  expect(
    parseScssString(`
    @use "ag";

    @mixin output {
      // rule comment
      ag-grid, ag-grid-angular  {
          // property comment
          display: block;
      }

      .ag-hidden {
          display: none !important;
      }
    }
  `).nodes,
  ).toMatchInlineSnapshot(`
    [
      {
        "text": "rule comment",
        "type": "line-comment",
      },
      {
        "children": [
          {
            "text": "property comment",
            "type": "line-comment",
          },
          {
            "name": "display",
            "type": "property",
            "value": "block",
          },
        ],
        "selectors": [
          "ag-grid",
          "ag-grid-angular",
        ],
        "type": "style-rule",
      },
      {
        "children": [
          {
            "name": "display",
            "type": "property",
            "value": "none !important",
          },
        ],
        "selectors": [
          ".ag-hidden",
        ],
        "type": "style-rule",
      },
    ]
  `);
});

const allFiles = [
  'src/internal/base/parts/_reset.scss',
  'src/internal/base/parts/_date-time.scss',
  'src/internal/base/parts/_advanced-filter.scss',
  'src/internal/base/parts/_widgets.scss',
  'src/internal/base/parts/_charts.scss',
  'src/internal/base/parts/_grid-layout.scss',
  'src/internal/base/parts/_common-structural.scss',
  'src/internal/base/parts/_filter-tool-panel.scss',
  'src/internal/base/parts/_menu.scss',
  'src/internal/base/parts/_column-drop.scss',
  'src/internal/base/parts/_grid-borders.scss',
  'src/internal/base/parts/_print-structural.scss',
  'src/internal/base/parts/_sidebar.scss',
  'src/internal/base/parts/_columns-tool-panel.scss',
  'src/internal/base/parts/_footer.scss',
  'src/internal/base/parts/_root.scss',
  'src/internal/base/parts/_native-inputs.scss',
  'src/internal/base/parts/_icons.scss',
  'src/internal/base/parts/_header.scss',
  'src/internal/base/_base-variables.scss',
];

test(`Parses codebase`, () => {
  for (const file of allFiles) {
    console.log('!!!', file);
    parseScssFile(file);
  }
});
