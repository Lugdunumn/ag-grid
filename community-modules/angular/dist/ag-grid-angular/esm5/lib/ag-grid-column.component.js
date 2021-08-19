import { __decorate, __metadata, __rest } from "tslib";
import { Component, ContentChildren, Input, QueryList } from "@angular/core";
var AgGridColumn = /** @class */ (function () {
    function AgGridColumn() {
        // inputs - pretty much most of ColDef, with the exception of template, templateUrl and internal only properties
        // @START@
        /** Columns in this group     */
        this.children = undefined;
        /** The sort order, provide an array with any of the following in any order ['asc','desc',null]     */
        this.sortingOrder = undefined;
        /** Agg funcs allowed on this column. If missing, all installed agg funcs are allowed.
         * Can be eg ['sum','avg']. This will restrict what the GUI allows to select only.     */
        this.allowedAggFuncs = undefined;
        /** The menu tabs to show, and in which order, the valid values for this property are:
         * filterMenuTab, generalMenuTab, columnsMenuTab     *     */
        this.menuTabs = undefined;
        /** Rules for applying css classes     */
        this.cellClassRules = undefined;
        /** Icons for this column. Leave blank to use default.     */
        this.icons = undefined;
        /** The custom header group component to be used for rendering the component header. If none specified the default AG Grid is used*     */
        this.headerGroupComponent = undefined;
        /** The custom header group component to be used for rendering the component header in the hosting framework (ie: React/Angular). If none specified the default AG Grid is used*     */
        this.headerGroupComponentFramework = undefined;
        /** The custom header group component to be used for rendering the component header. If none specified the default AG Grid is used*     */
        this.headerGroupComponentParams = undefined;
        /** An object of css values. Or a function returning an object of css values.     */
        this.cellStyle = undefined;
        this.cellRendererParams = undefined;
        this.cellEditorFramework = undefined;
        this.cellEditorParams = undefined;
        /** @deprecated Use cellRendererSelector if you want a different Cell Renderer for pinned rows. Check params.node.rowPinned.
         */
        this.pinnedRowCellRendererFramework = undefined;
        /** @deprecated Use cellRendererSelector if you want a different Cell Renderer for pinned rows. Check params.node.rowPinned.
         */
        this.pinnedRowCellRendererParams = undefined;
        this.filterFramework = undefined;
        this.filterParams = undefined;
        /** The custom header component to be used for rendering the component header. If none specified the default AG Grid is used*     */
        this.headerComponent = undefined;
        /** The custom header component to be used for rendering the component header in the hosting framework (ie: React/Angular). If none specified the default AG Grid is used*     */
        this.headerComponentFramework = undefined;
        /** The custom header component parameters*     */
        this.headerComponentParams = undefined;
        this.floatingFilterComponent = undefined;
        this.floatingFilterComponentParams = undefined;
        this.floatingFilterComponentFramework = undefined;
        this.tooltipComponent = undefined;
        this.tooltipComponentParams = undefined;
        this.tooltipComponentFramework = undefined;
        this.refData = undefined;
        /** Params to customise the columns menu behaviour and appearance     */
        this.columnsMenuParams = undefined;
        /** The name to render in the column header     */
        this.headerName = undefined;
        /** Whether to show the column when the group is open / closed.     */
        this.columnGroupShow = undefined;
        /** CSS class for the header     */
        this.headerClass = undefined;
        /** CSS class for the toolPanel     */
        this.toolPanelClass = undefined;
        /** Expression or function to get the cells value.     */
        this.headerValueGetter = undefined;
        /** Group ID     */
        this.groupId = undefined;
        /** The unique ID to give the column. This is optional. If missing, the ID will default to the field.
         * If both field and colId are missing, a unique ID will be generated.
         * This ID is used to identify the column in the API for sorting, filtering etc.     */
        this.colId = undefined;
        /** If sorting by default, set it here. Set to 'asc' or 'desc'     */
        this.sort = undefined;
        this.initialSort = undefined;
        /** The field of the row to get the cells data from     */
        this.field = undefined;
        /** A comma separated string or array of strings containing ColumnType keys which can be used as a template for a column.
         * This helps to reduce duplication of properties when you have a lot of common column properties.     */
        this.type = undefined;
        /** The field where we get the tooltip on the object     */
        this.tooltipField = undefined;
        /** Tooltip for the column header     */
        this.headerTooltip = undefined;
        /** Class to use for the cell. Can be string, array of strings, or function.     */
        this.cellClass = undefined;
        /** Set to true to have the grid place the values for the group into the cell, or put the name of a grouped column to just show that group.     */
        this.showRowGroup = undefined;
        this.filter = undefined;
        this.initialAggFunc = undefined;
        /** Name of function to use for aggregation. One of [sum,min,max,first,last] or a function.     */
        this.aggFunc = undefined;
        /** A function for rendering a cell.     */
        this.cellRenderer = undefined;
        /** Cell editor     */
        this.cellEditor = undefined;
        /** Whether this column is pinned or not.     */
        this.pinned = undefined;
        this.initialPinned = undefined;
        /** Defines the column data type used when charting     */
        this.chartDataType = undefined;
        this.cellEditorPopupPosition = undefined;
        /** @deprecated since v24 - use sortIndex instead
         */
        this.sortedAt = undefined;
        /** If sorting more than one column by default, specifies order in which the sorting should be applied.     */
        this.sortIndex = undefined;
        this.initialSortIndex = undefined;
        /** Sets the grow factor of a column. It specifies how much of the remaining
         * space should be assigned to the column.     */
        this.flex = undefined;
        this.initialFlex = undefined;
        /** Actual width, in pixels, of the cell     */
        this.width = undefined;
        /** Default width, in pixels, of the cell     */
        this.initialWidth = undefined;
        /** Min width, in pixels, of the cell     */
        this.minWidth = undefined;
        /** Max width, in pixels, of the cell     */
        this.maxWidth = undefined;
        /** To group by this column by default, either provide an index (eg rowGroupIndex=1), or set rowGroup=true.     */
        this.rowGroupIndex = undefined;
        this.initialRowGroupIndex = undefined;
        /** To pivot by this column by default, either provide an index (eg pivotIndex=1), or set pivot=true.     */
        this.pivotIndex = undefined;
        this.initialPivotIndex = undefined;
        /** For native drag and drop, set to true to allow custom onRowDrag processing     */
        this.dndSourceOnRowDrag = undefined;
        /** Expression or function to get the cells value.     */
        this.valueGetter = undefined;
        /** If not using a field, then this puts the value into the cell     */
        this.valueSetter = undefined;
        /** Expression or function to get the cells value for filtering.     */
        this.filterValueGetter = undefined;
        /** Function to return the key for a value - use this if the value is an object (not a primitive type) and you
         * want to a) group by this field or b) use set filter on this field.     */
        this.keyCreator = undefined;
        this.cellRendererFramework = undefined;
        /** @deprecated Use cellRendererSelector if you want a different Cell Renderer for pinned rows. Check params.node.rowPinned.
         */
        this.pinnedRowCellRenderer = undefined;
        /** A function to format a value, should return a string. Not used for CSV export or copy to clipboard, only for UI cell rendering.     */
        this.valueFormatter = undefined;
        /** @deprecated Use valueFormatter for pinned rows, and check params.node.rowPinned.
         */
        this.pinnedRowValueFormatter = undefined;
        /** Gets called after editing, converts the value in the cell.     */
        this.valueParser = undefined;
        /** Comparator function for custom sorting.     */
        this.comparator = undefined;
        /** Comparator for values, used by renderer to know if values have changed. Cells who's values have not changed don't get refreshed.     */
        this.equals = undefined;
        /** Comparator for ordering the pivot columns     */
        this.pivotComparator = undefined;
        /** Allows the user to suppress certain keyboard events in the grid cell     */
        this.suppressKeyboardEvent = undefined;
        /** Allows the user to suppress certain keyboard events in the grid header     */
        this.suppressHeaderKeyboardEvent = undefined;
        this.colSpan = undefined;
        this.rowSpan = undefined;
        /** To create the quick filter text for this column, if toString is not good enough on the value.     */
        this.getQuickFilterText = undefined;
        /** Callbacks for editing. See editing section for further details.
         * Return true if the update was successful, or false if not.
         * If false, then skips the UI refresh and no events are emitted.
         * Return false if the values are the same (ie no update).     */
        this.newValueHandler = undefined;
        /** Callbacks for editing.See editing section for further details.     */
        this.onCellValueChanged = undefined;
        /** Function callback, gets called when a cell is clicked.     */
        this.onCellClicked = undefined;
        /** Function callback, gets called when a cell is double clicked.     */
        this.onCellDoubleClicked = undefined;
        /** Function callback, gets called when a cell is right clicked.     */
        this.onCellContextMenu = undefined;
        /** To configure the text to be displayed in the floating div while dragging a row when rowDrag is true     */
        this.rowDragText = undefined;
        /** The function used to calculate the tooltip of the object, tooltipField takes precedence     */
        this.tooltipValueGetter = undefined;
        this.cellRendererSelector = undefined;
        this.cellEditorSelector = undefined;
        /** Set to true to not flash this column for value changes     */
        this.suppressCellFlash = undefined;
        /** Set to true to not include this column in the Columns Tool Panel     */
        this.suppressColumnsToolPanel = undefined;
        /** Set to true to not include this column / filter in the Filters Tool Panel     */
        this.suppressFiltersToolPanel = undefined;
        /** Open by Default     */
        this.openByDefault = undefined;
        /** If true, group cannot be broken up by column moving, child columns will always appear side by side, however you can rearrange child columns within the group     */
        this.marryChildren = undefined;
        /** Set to true for this column to be hidden. Naturally you might think, it would make more sense to call this field 'visible' and mark it false to hide,
         * however we want all default values to be false and we want columns to be visible by default.     */
        this.hide = undefined;
        this.initialHide = undefined;
        this.rowGroup = undefined;
        this.initialRowGroup = undefined;
        this.pivot = undefined;
        this.initialPivot = undefined;
        /** Set to true to render a selection checkbox in the column.     */
        this.checkboxSelection = undefined;
        /** If true, a 'select all' checkbox will be put into the header     */
        this.headerCheckboxSelection = undefined;
        /** If true, the header checkbox selection will work on filtered items     */
        this.headerCheckboxSelectionFilteredOnly = undefined;
        /** Set to true if no menu should be shown for this column header.     */
        this.suppressMenu = undefined;
        /** Set to true to not allow moving this column via dragging it's header     */
        this.suppressMovable = undefined;
        /** Set to true to make sure this column is always first. Other columns, if movable, cannot move before this column.     */
        this.lockPosition = undefined;
        /** Set to true to block the user showing / hiding the column, the column can only be shown / hidden via definitions or API     */
        this.lockVisible = undefined;
        /** Set to true to block the user pinning the column, the column can only be pinned via definitions or API     */
        this.lockPinned = undefined;
        /** Set to true if you want the unsorted icon to be shown when no sort is applied to this column.     */
        this.unSortIcon = undefined;
        /** Set to true if you want this columns width to be fixed during 'size to fit' operation.     */
        this.suppressSizeToFit = undefined;
        /** Set to true if you do not want this column to be auto-resizable by double clicking it's edge.     */
        this.suppressAutoSize = undefined;
        /** If true, GUI will allow adding this columns as a row group     */
        this.enableRowGroup = undefined;
        /** If true, GUI will allow adding this columns as a pivot     */
        this.enablePivot = undefined;
        /** If true, GUI will allow adding this columns as a value     */
        this.enableValue = undefined;
        /** Set to true if this col is editable, otherwise false. Can also be a function to have different rows editable.     */
        this.editable = undefined;
        /** Set to true if this col should not be allowed take new values from the clipboard .     */
        this.suppressPaste = undefined;
        /** Set to true if this col should not be navigable with the tab key. Can also be a function to have different rows editable.     */
        this.suppressNavigable = undefined;
        /** If true, grid will flash cell after cell is refreshed     */
        this.enableCellChangeFlash = undefined;
        /** For grid row dragging, set to true to enable row dragging within the grid     */
        this.rowDrag = undefined;
        /** For native drag and drop, set to true to enable drag source     */
        this.dndSource = undefined;
        /** True if this column should stretch rows height to fit contents     */
        this.autoHeight = undefined;
        /** True if this column should wrap cell contents - typically used with autoHeight     */
        this.wrapText = undefined;
        /** Set to true if sorting allowed for this column.     */
        this.sortable = undefined;
        /** Set to true if this column should be resizable     */
        this.resizable = undefined;
        /** If true, this cell will be in editing mode after first click.     */
        this.singleClickEdit = undefined;
        /** Whether to display a floating filter for this column.     */
        this.floatingFilter = undefined;
        this.cellEditorPopup = undefined;
        // @END@
    }
    AgGridColumn_1 = AgGridColumn;
    AgGridColumn.prototype.hasChildColumns = function () {
        if (this.childColumns && this.childColumns.length > 0) {
            // necessary because of https://github.com/angular/angular/issues/10098
            return !(this.childColumns.length === 1 && this.childColumns.first === this);
        }
        return false;
    };
    AgGridColumn.prototype.toColDef = function () {
        var colDef = this.createColDefFromGridColumn(this);
        if (this.hasChildColumns()) {
            colDef["children"] = this.getChildColDefs(this.childColumns);
        }
        return colDef;
    };
    AgGridColumn.prototype.getChildColDefs = function (childColumns) {
        return childColumns
            // necessary because of https://github.com/angular/angular/issues/10098
            .filter(function (column) { return !column.hasChildColumns(); })
            .map(function (column) {
            return column.toColDef();
        });
    };
    AgGridColumn.prototype.createColDefFromGridColumn = function (from) {
        var childColumns = from.childColumns, colDef = __rest(from, ["childColumns"]);
        return colDef;
    };
    var AgGridColumn_1;
    __decorate([
        ContentChildren(AgGridColumn_1),
        __metadata("design:type", QueryList)
    ], AgGridColumn.prototype, "childColumns", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], AgGridColumn.prototype, "children", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], AgGridColumn.prototype, "sortingOrder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], AgGridColumn.prototype, "allowedAggFuncs", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], AgGridColumn.prototype, "menuTabs", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "cellClassRules", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "icons", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "headerGroupComponent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "headerGroupComponentFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "headerGroupComponentParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "cellStyle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "cellRendererParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "cellEditorFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "cellEditorParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "pinnedRowCellRendererFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "pinnedRowCellRendererParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "filterFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "filterParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "headerComponent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "headerComponentFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "headerComponentParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "floatingFilterComponent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "floatingFilterComponentParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "floatingFilterComponentFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "tooltipComponent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "tooltipComponentParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "tooltipComponentFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "refData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "columnsMenuParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridColumn.prototype, "headerName", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridColumn.prototype, "columnGroupShow", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "headerClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "toolPanelClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "headerValueGetter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridColumn.prototype, "groupId", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridColumn.prototype, "colId", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridColumn.prototype, "sort", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridColumn.prototype, "initialSort", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridColumn.prototype, "field", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "type", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridColumn.prototype, "tooltipField", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridColumn.prototype, "headerTooltip", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "cellClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "showRowGroup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "filter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "initialAggFunc", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "aggFunc", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "cellRenderer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "cellEditor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "pinned", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "initialPinned", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridColumn.prototype, "chartDataType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AgGridColumn.prototype, "cellEditorPopupPosition", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridColumn.prototype, "sortedAt", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridColumn.prototype, "sortIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridColumn.prototype, "initialSortIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridColumn.prototype, "flex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridColumn.prototype, "initialFlex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridColumn.prototype, "width", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridColumn.prototype, "initialWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridColumn.prototype, "minWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridColumn.prototype, "maxWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridColumn.prototype, "rowGroupIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridColumn.prototype, "initialRowGroupIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridColumn.prototype, "pivotIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AgGridColumn.prototype, "initialPivotIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridColumn.prototype, "dndSourceOnRowDrag", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "valueGetter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "valueSetter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "filterValueGetter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridColumn.prototype, "keyCreator", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "cellRendererFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "pinnedRowCellRenderer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "valueFormatter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "pinnedRowValueFormatter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "valueParser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridColumn.prototype, "comparator", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridColumn.prototype, "equals", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridColumn.prototype, "pivotComparator", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridColumn.prototype, "suppressKeyboardEvent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridColumn.prototype, "suppressHeaderKeyboardEvent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridColumn.prototype, "colSpan", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridColumn.prototype, "rowSpan", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridColumn.prototype, "getQuickFilterText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridColumn.prototype, "newValueHandler", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridColumn.prototype, "onCellValueChanged", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridColumn.prototype, "onCellClicked", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridColumn.prototype, "onCellDoubleClicked", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridColumn.prototype, "onCellContextMenu", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridColumn.prototype, "rowDragText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridColumn.prototype, "tooltipValueGetter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridColumn.prototype, "cellRendererSelector", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], AgGridColumn.prototype, "cellEditorSelector", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "suppressCellFlash", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "suppressColumnsToolPanel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "suppressFiltersToolPanel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "openByDefault", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "marryChildren", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "hide", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "initialHide", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "rowGroup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "initialRowGroup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "pivot", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "initialPivot", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "checkboxSelection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "headerCheckboxSelection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "headerCheckboxSelectionFilteredOnly", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "suppressMenu", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "suppressMovable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "lockPosition", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "lockVisible", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "lockPinned", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "unSortIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "suppressSizeToFit", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "suppressAutoSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "enableRowGroup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "enablePivot", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "enableValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "editable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "suppressPaste", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "suppressNavigable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "enableCellChangeFlash", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "rowDrag", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "dndSource", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "autoHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "wrapText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "sortable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "resizable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "singleClickEdit", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "floatingFilter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AgGridColumn.prototype, "cellEditorPopup", void 0);
    AgGridColumn = AgGridColumn_1 = __decorate([
        Component({
            selector: 'ag-grid-column',
            template: ''
        })
    ], AgGridColumn);
    return AgGridColumn;
}());
export { AgGridColumn };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWctZ3JpZC1jb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnLWdyaWQtY29tbXVuaXR5L2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvYWctZ3JpZC1jb2x1bW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTdFO0lBQUE7UUFrQ0ksZ0hBQWdIO1FBQ2hILFVBQVU7UUFDVixnQ0FBZ0M7UUFDaEIsYUFBUSxHQUF5QyxTQUFTLENBQUM7UUFDM0Usc0dBQXNHO1FBQ3RGLGlCQUFZLEdBQWtDLFNBQVMsQ0FBQztRQUN4RTtpR0FDeUY7UUFDekUsb0JBQWUsR0FBeUIsU0FBUyxDQUFDO1FBQ2xFO3FFQUM2RDtRQUM3QyxhQUFRLEdBQXlCLFNBQVMsQ0FBQztRQUMzRCx5Q0FBeUM7UUFDekIsbUJBQWMsR0FBK0IsU0FBUyxDQUFDO1FBQ3ZFLDZEQUE2RDtRQUM3QyxVQUFLLEdBQXNELFNBQVMsQ0FBQztRQUNyRiwwSUFBMEk7UUFDMUgseUJBQW9CLEdBQXNELFNBQVMsQ0FBQztRQUNwRyx1TEFBdUw7UUFDdkssa0NBQTZCLEdBQW9CLFNBQVMsQ0FBQztRQUMzRSwwSUFBMEk7UUFDMUgsK0JBQTBCLEdBQW9CLFNBQVMsQ0FBQztRQUN4RSxvRkFBb0Y7UUFDcEUsY0FBUyxHQUFrRSxTQUFTLENBQUM7UUFDckYsdUJBQWtCLEdBQW9CLFNBQVMsQ0FBQztRQUNoRCx3QkFBbUIsR0FBb0IsU0FBUyxDQUFDO1FBQ2pELHFCQUFnQixHQUFvQixTQUFTLENBQUM7UUFDOUQ7V0FDRztRQUNhLG1DQUE4QixHQUFvQixTQUFTLENBQUM7UUFDNUU7V0FDRztRQUNhLGdDQUEyQixHQUFvQixTQUFTLENBQUM7UUFDekQsb0JBQWUsR0FBUSxTQUFTLENBQUM7UUFDakMsaUJBQVksR0FBUSxTQUFTLENBQUM7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VyxZQUFZLENBMFJ4QjtJQUFELG1CQUFDO0NBQUEsQUExUkQsSUEwUkM7U0ExUlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENlbGxDbGFzc0Z1bmMsIENlbGxDbGFzc1J1bGVzLCBDZWxsQ2xpY2tlZEV2ZW50LCBDZWxsQ29udGV4dE1lbnVFdmVudCwgQ2VsbERvdWJsZUNsaWNrZWRFdmVudCwgQ2VsbEVkaXRvclNlbGVjdG9yRnVuYywgQ2VsbFJlbmRlcmVyU2VsZWN0b3JGdW5jLCBDZWxsU3R5bGVGdW5jLCBDaGVja2JveFNlbGVjdGlvbkNhbGxiYWNrLCBDb2xEZWYsIENvbEdyb3VwRGVmLCBDb2xTcGFuUGFyYW1zLCBDb2x1bW5zTWVudVBhcmFtcywgRG5kU291cmNlQ2FsbGJhY2ssIEVkaXRhYmxlQ2FsbGJhY2ssIEdldFF1aWNrRmlsdGVyVGV4dFBhcmFtcywgSGVhZGVyQ2hlY2tib3hTZWxlY3Rpb25DYWxsYmFjaywgSGVhZGVyQ2xhc3MsIElBZ2dGdW5jLCBJQ2VsbEVkaXRvckNvbXAsIElDZWxsUmVuZGVyZXJDb21wLCBJQ2VsbFJlbmRlcmVyRnVuYywgSUhlYWRlckdyb3VwQ29tcCwgSVJvd0RyYWdJdGVtLCBJVG9vbHRpcENvbXAsIElUb29sdGlwUGFyYW1zLCBOZXdWYWx1ZVBhcmFtcywgUm93RHJhZ0NhbGxiYWNrLCBSb3dOb2RlLCBSb3dTcGFuUGFyYW1zLCBTdXBwcmVzc0hlYWRlcktleWJvYXJkRXZlbnRQYXJhbXMsIFN1cHByZXNzS2V5Ym9hcmRFdmVudFBhcmFtcywgU3VwcHJlc3NOYXZpZ2FibGVDYWxsYmFjaywgU3VwcHJlc3NQYXN0ZUNhbGxiYWNrLCBUb29sUGFuZWxDbGFzcywgVmFsdWVGb3JtYXR0ZXJGdW5jLCBWYWx1ZUdldHRlckZ1bmMsIFZhbHVlUGFyc2VyRnVuYywgVmFsdWVTZXR0ZXJGdW5jIH0gZnJvbSBcIkBhZy1ncmlkLWNvbW11bml0eS9jb3JlXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSW5wdXQsIFF1ZXJ5TGlzdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYWctZ3JpZC1jb2x1bW4nLFxuICAgIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBBZ0dyaWRDb2x1bW4ge1xuICAgIEBDb250ZW50Q2hpbGRyZW4oQWdHcmlkQ29sdW1uKSBwdWJsaWMgY2hpbGRDb2x1bW5zOiBRdWVyeUxpc3Q8QWdHcmlkQ29sdW1uPjtcblxuICAgIHB1YmxpYyBoYXNDaGlsZENvbHVtbnMoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmNoaWxkQ29sdW1ucyAmJiB0aGlzLmNoaWxkQ29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBuZWNlc3NhcnkgYmVjYXVzZSBvZiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMDA5OFxuICAgICAgICAgICAgcmV0dXJuICEodGhpcy5jaGlsZENvbHVtbnMubGVuZ3RoID09PSAxICYmIHRoaXMuY2hpbGRDb2x1bW5zLmZpcnN0ID09PSB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHRvQ29sRGVmKCk6IENvbERlZiB7XG4gICAgICAgIGxldCBjb2xEZWY6IENvbERlZiA9IHRoaXMuY3JlYXRlQ29sRGVmRnJvbUdyaWRDb2x1bW4odGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzQ2hpbGRDb2x1bW5zKCkpIHtcbiAgICAgICAgICAgICg8YW55PmNvbERlZilbXCJjaGlsZHJlblwiXSA9IHRoaXMuZ2V0Q2hpbGRDb2xEZWZzKHRoaXMuY2hpbGRDb2x1bW5zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sRGVmO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q2hpbGRDb2xEZWZzKGNoaWxkQ29sdW1uczogUXVlcnlMaXN0PEFnR3JpZENvbHVtbj4pIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkQ29sdW1uc1xuICAgICAgICAgICAgLy8gbmVjZXNzYXJ5IGJlY2F1c2Ugb2YgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTAwOThcbiAgICAgICAgICAgIC5maWx0ZXIoY29sdW1uID0+ICFjb2x1bW4uaGFzQ2hpbGRDb2x1bW5zKCkpXG4gICAgICAgICAgICAubWFwKChjb2x1bW46IEFnR3JpZENvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2x1bW4udG9Db2xEZWYoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQ29sRGVmRnJvbUdyaWRDb2x1bW4oZnJvbTogQWdHcmlkQ29sdW1uKTogQ29sRGVmIHtcbiAgICAgICAgbGV0IHsgY2hpbGRDb2x1bW5zLCAuLi5jb2xEZWYgfSA9IGZyb207XG4gICAgICAgIHJldHVybiBjb2xEZWY7XG4gICAgfVxuXG4gICAgLy8gaW5wdXRzIC0gcHJldHR5IG11Y2ggbW9zdCBvZiBDb2xEZWYsIHdpdGggdGhlIGV4Y2VwdGlvbiBvZiB0ZW1wbGF0ZSwgdGVtcGxhdGVVcmwgYW5kIGludGVybmFsIG9ubHkgcHJvcGVydGllc1xuICAgIC8vIEBTVEFSVEBcbiAgICAvKiogQ29sdW1ucyBpbiB0aGlzIGdyb3VwICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjaGlsZHJlbjogKENvbERlZiB8IENvbEdyb3VwRGVmKVtdIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBUaGUgc29ydCBvcmRlciwgcHJvdmlkZSBhbiBhcnJheSB3aXRoIGFueSBvZiB0aGUgZm9sbG93aW5nIGluIGFueSBvcmRlciBbJ2FzYycsJ2Rlc2MnLG51bGxdICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzb3J0aW5nT3JkZXI6IChzdHJpbmcgfCBudWxsKVtdIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBBZ2cgZnVuY3MgYWxsb3dlZCBvbiB0aGlzIGNvbHVtbi4gSWYgbWlzc2luZywgYWxsIGluc3RhbGxlZCBhZ2cgZnVuY3MgYXJlIGFsbG93ZWQuXG4gICAgICogQ2FuIGJlIGVnIFsnc3VtJywnYXZnJ10uIFRoaXMgd2lsbCByZXN0cmljdCB3aGF0IHRoZSBHVUkgYWxsb3dzIHRvIHNlbGVjdCBvbmx5LiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYWxsb3dlZEFnZ0Z1bmNzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogVGhlIG1lbnUgdGFicyB0byBzaG93LCBhbmQgaW4gd2hpY2ggb3JkZXIsIHRoZSB2YWxpZCB2YWx1ZXMgZm9yIHRoaXMgcHJvcGVydHkgYXJlOlxuICAgICAqIGZpbHRlck1lbnVUYWIsIGdlbmVyYWxNZW51VGFiLCBjb2x1bW5zTWVudVRhYiAgICAgKiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbWVudVRhYnM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBSdWxlcyBmb3IgYXBwbHlpbmcgY3NzIGNsYXNzZXMgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGNlbGxDbGFzc1J1bGVzOiBDZWxsQ2xhc3NSdWxlcyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogSWNvbnMgZm9yIHRoaXMgY29sdW1uLiBMZWF2ZSBibGFuayB0byB1c2UgZGVmYXVsdC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGljb25zOiB7IFtrZXk6IHN0cmluZ106IEZ1bmN0aW9uIHwgc3RyaW5nOyB9IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBUaGUgY3VzdG9tIGhlYWRlciBncm91cCBjb21wb25lbnQgdG8gYmUgdXNlZCBmb3IgcmVuZGVyaW5nIHRoZSBjb21wb25lbnQgaGVhZGVyLiBJZiBub25lIHNwZWNpZmllZCB0aGUgZGVmYXVsdCBBRyBHcmlkIGlzIHVzZWQqICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJHcm91cENvbXBvbmVudDogc3RyaW5nIHwgeyBuZXcoKTogSUhlYWRlckdyb3VwQ29tcDsgfSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogVGhlIGN1c3RvbSBoZWFkZXIgZ3JvdXAgY29tcG9uZW50IHRvIGJlIHVzZWQgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50IGhlYWRlciBpbiB0aGUgaG9zdGluZyBmcmFtZXdvcmsgKGllOiBSZWFjdC9Bbmd1bGFyKS4gSWYgbm9uZSBzcGVjaWZpZWQgdGhlIGRlZmF1bHQgQUcgR3JpZCBpcyB1c2VkKiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyR3JvdXBDb21wb25lbnRGcmFtZXdvcms6IGFueSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogVGhlIGN1c3RvbSBoZWFkZXIgZ3JvdXAgY29tcG9uZW50IHRvIGJlIHVzZWQgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50IGhlYWRlci4gSWYgbm9uZSBzcGVjaWZpZWQgdGhlIGRlZmF1bHQgQUcgR3JpZCBpcyB1c2VkKiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyR3JvdXBDb21wb25lbnRQYXJhbXM6IGFueSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQW4gb2JqZWN0IG9mIGNzcyB2YWx1ZXMuIE9yIGEgZnVuY3Rpb24gcmV0dXJuaW5nIGFuIG9iamVjdCBvZiBjc3MgdmFsdWVzLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbFN0eWxlOiB7IFtjc3NQcm9wZXJ0eTogc3RyaW5nXTogc3RyaW5nIH0gfCBDZWxsU3R5bGVGdW5jIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsUmVuZGVyZXJQYXJhbXM6IGFueSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbEVkaXRvckZyYW1ld29yazogYW55IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsRWRpdG9yUGFyYW1zOiBhbnkgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEBkZXByZWNhdGVkIFVzZSBjZWxsUmVuZGVyZXJTZWxlY3RvciBpZiB5b3Ugd2FudCBhIGRpZmZlcmVudCBDZWxsIFJlbmRlcmVyIGZvciBwaW5uZWQgcm93cy4gQ2hlY2sgcGFyYW1zLm5vZGUucm93UGlubmVkLlxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwaW5uZWRSb3dDZWxsUmVuZGVyZXJGcmFtZXdvcms6IGFueSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIGNlbGxSZW5kZXJlclNlbGVjdG9yIGlmIHlvdSB3YW50IGEgZGlmZmVyZW50IENlbGwgUmVuZGVyZXIgZm9yIHBpbm5lZCByb3dzLiBDaGVjayBwYXJhbXMubm9kZS5yb3dQaW5uZWQuXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHBpbm5lZFJvd0NlbGxSZW5kZXJlclBhcmFtczogYW55IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmaWx0ZXJGcmFtZXdvcms6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZmlsdGVyUGFyYW1zOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFRoZSBjdXN0b20gaGVhZGVyIGNvbXBvbmVudCB0byBiZSB1c2VkIGZvciByZW5kZXJpbmcgdGhlIGNvbXBvbmVudCBoZWFkZXIuIElmIG5vbmUgc3BlY2lmaWVkIHRoZSBkZWZhdWx0IEFHIEdyaWQgaXMgdXNlZCogICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlckNvbXBvbmVudDogc3RyaW5nIHwgeyBuZXcoKTogYW55OyB9IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBUaGUgY3VzdG9tIGhlYWRlciBjb21wb25lbnQgdG8gYmUgdXNlZCBmb3IgcmVuZGVyaW5nIHRoZSBjb21wb25lbnQgaGVhZGVyIGluIHRoZSBob3N0aW5nIGZyYW1ld29yayAoaWU6IFJlYWN0L0FuZ3VsYXIpLiBJZiBub25lIHNwZWNpZmllZCB0aGUgZGVmYXVsdCBBRyBHcmlkIGlzIHVzZWQqICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJDb21wb25lbnRGcmFtZXdvcms6IGFueSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogVGhlIGN1c3RvbSBoZWFkZXIgY29tcG9uZW50IHBhcmFtZXRlcnMqICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJDb21wb25lbnRQYXJhbXM6IGFueSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZmxvYXRpbmdGaWx0ZXJDb21wb25lbnQ6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZmxvYXRpbmdGaWx0ZXJDb21wb25lbnRQYXJhbXM6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgZmxvYXRpbmdGaWx0ZXJDb21wb25lbnRGcmFtZXdvcms6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgdG9vbHRpcENvbXBvbmVudDogeyBuZXcoKTogSVRvb2x0aXBDb21wOyB9IHwgc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0b29sdGlwQ29tcG9uZW50UGFyYW1zOiBhbnkgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHRvb2x0aXBDb21wb25lbnRGcmFtZXdvcms6IGFueSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgcmVmRGF0YTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFBhcmFtcyB0byBjdXN0b21pc2UgdGhlIGNvbHVtbnMgbWVudSBiZWhhdmlvdXIgYW5kIGFwcGVhcmFuY2UgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGNvbHVtbnNNZW51UGFyYW1zOiBDb2x1bW5zTWVudVBhcmFtcyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogVGhlIG5hbWUgdG8gcmVuZGVyIGluIHRoZSBjb2x1bW4gaGVhZGVyICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFdoZXRoZXIgdG8gc2hvdyB0aGUgY29sdW1uIHdoZW4gdGhlIGdyb3VwIGlzIG9wZW4gLyBjbG9zZWQuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjb2x1bW5Hcm91cFNob3c6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQ1NTIGNsYXNzIGZvciB0aGUgaGVhZGVyICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJDbGFzczogSGVhZGVyQ2xhc3MgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIENTUyBjbGFzcyBmb3IgdGhlIHRvb2xQYW5lbCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdG9vbFBhbmVsQ2xhc3M6IFRvb2xQYW5lbENsYXNzIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBFeHByZXNzaW9uIG9yIGZ1bmN0aW9uIHRvIGdldCB0aGUgY2VsbHMgdmFsdWUuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJWYWx1ZUdldHRlcjogc3RyaW5nIHwgRnVuY3Rpb24gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEdyb3VwIElEICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBncm91cElkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFRoZSB1bmlxdWUgSUQgdG8gZ2l2ZSB0aGUgY29sdW1uLiBUaGlzIGlzIG9wdGlvbmFsLiBJZiBtaXNzaW5nLCB0aGUgSUQgd2lsbCBkZWZhdWx0IHRvIHRoZSBmaWVsZC5cbiAgICAgKiBJZiBib3RoIGZpZWxkIGFuZCBjb2xJZCBhcmUgbWlzc2luZywgYSB1bmlxdWUgSUQgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICogVGhpcyBJRCBpcyB1c2VkIHRvIGlkZW50aWZ5IHRoZSBjb2x1bW4gaW4gdGhlIEFQSSBmb3Igc29ydGluZywgZmlsdGVyaW5nIGV0Yy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGNvbElkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIElmIHNvcnRpbmcgYnkgZGVmYXVsdCwgc2V0IGl0IGhlcmUuIFNldCB0byAnYXNjJyBvciAnZGVzYycgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHNvcnQ6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGluaXRpYWxTb3J0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFRoZSBmaWVsZCBvZiB0aGUgcm93IHRvIGdldCB0aGUgY2VsbHMgZGF0YSBmcm9tICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmaWVsZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBBIGNvbW1hIHNlcGFyYXRlZCBzdHJpbmcgb3IgYXJyYXkgb2Ygc3RyaW5ncyBjb250YWluaW5nIENvbHVtblR5cGUga2V5cyB3aGljaCBjYW4gYmUgdXNlZCBhcyBhIHRlbXBsYXRlIGZvciBhIGNvbHVtbi5cbiAgICAgKiBUaGlzIGhlbHBzIHRvIHJlZHVjZSBkdXBsaWNhdGlvbiBvZiBwcm9wZXJ0aWVzIHdoZW4geW91IGhhdmUgYSBsb3Qgb2YgY29tbW9uIGNvbHVtbiBwcm9wZXJ0aWVzLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdHlwZTogc3RyaW5nIHwgc3RyaW5nW10gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFRoZSBmaWVsZCB3aGVyZSB3ZSBnZXQgdGhlIHRvb2x0aXAgb24gdGhlIG9iamVjdCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdG9vbHRpcEZpZWxkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFRvb2x0aXAgZm9yIHRoZSBjb2x1bW4gaGVhZGVyICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJUb29sdGlwOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIENsYXNzIHRvIHVzZSBmb3IgdGhlIGNlbGwuIENhbiBiZSBzdHJpbmcsIGFycmF5IG9mIHN0cmluZ3MsIG9yIGZ1bmN0aW9uLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbENsYXNzOiBzdHJpbmcgfCBzdHJpbmdbXSB8IENlbGxDbGFzc0Z1bmMgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byB0cnVlIHRvIGhhdmUgdGhlIGdyaWQgcGxhY2UgdGhlIHZhbHVlcyBmb3IgdGhlIGdyb3VwIGludG8gdGhlIGNlbGwsIG9yIHB1dCB0aGUgbmFtZSBvZiBhIGdyb3VwZWQgY29sdW1uIHRvIGp1c3Qgc2hvdyB0aGF0IGdyb3VwLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc2hvd1Jvd0dyb3VwOiBzdHJpbmcgfCBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmaWx0ZXI6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgaW5pdGlhbEFnZ0Z1bmM6IHN0cmluZyB8IElBZ2dGdW5jIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBOYW1lIG9mIGZ1bmN0aW9uIHRvIHVzZSBmb3IgYWdncmVnYXRpb24uIE9uZSBvZiBbc3VtLG1pbixtYXgsZmlyc3QsbGFzdF0gb3IgYSBmdW5jdGlvbi4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGFnZ0Z1bmM6IHN0cmluZyB8IElBZ2dGdW5jIHwgbnVsbCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQSBmdW5jdGlvbiBmb3IgcmVuZGVyaW5nIGEgY2VsbC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGNlbGxSZW5kZXJlcjogeyBuZXcoKTogSUNlbGxSZW5kZXJlckNvbXA7IH0gfCBJQ2VsbFJlbmRlcmVyRnVuYyB8IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQ2VsbCBlZGl0b3IgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGNlbGxFZGl0b3I6IHN0cmluZyB8IHsgbmV3KCk6IElDZWxsRWRpdG9yQ29tcDsgfSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogV2hldGhlciB0aGlzIGNvbHVtbiBpcyBwaW5uZWQgb3Igbm90LiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcGlubmVkOiBib29sZWFuIHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgaW5pdGlhbFBpbm5lZDogYm9vbGVhbiB8IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogRGVmaW5lcyB0aGUgY29sdW1uIGRhdGEgdHlwZSB1c2VkIHdoZW4gY2hhcnRpbmcgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGNoYXJ0RGF0YVR5cGU6ICdjYXRlZ29yeScgfCAnc2VyaWVzJyB8ICd0aW1lJyB8ICdleGNsdWRlZCcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGNlbGxFZGl0b3JQb3B1cFBvc2l0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEBkZXByZWNhdGVkIHNpbmNlIHYyNCAtIHVzZSBzb3J0SW5kZXggaW5zdGVhZFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzb3J0ZWRBdDogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBJZiBzb3J0aW5nIG1vcmUgdGhhbiBvbmUgY29sdW1uIGJ5IGRlZmF1bHQsIHNwZWNpZmllcyBvcmRlciBpbiB3aGljaCB0aGUgc29ydGluZyBzaG91bGQgYmUgYXBwbGllZC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHNvcnRJbmRleDogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgaW5pdGlhbFNvcnRJbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXRzIHRoZSBncm93IGZhY3RvciBvZiBhIGNvbHVtbi4gSXQgc3BlY2lmaWVzIGhvdyBtdWNoIG9mIHRoZSByZW1haW5pbmdcbiAgICAgKiBzcGFjZSBzaG91bGQgYmUgYXNzaWduZWQgdG8gdGhlIGNvbHVtbi4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGZsZXg6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgaW5pdGlhbEZsZXg6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQWN0dWFsIHdpZHRoLCBpbiBwaXhlbHMsIG9mIHRoZSBjZWxsICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBEZWZhdWx0IHdpZHRoLCBpbiBwaXhlbHMsIG9mIHRoZSBjZWxsICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpbml0aWFsV2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogTWluIHdpZHRoLCBpbiBwaXhlbHMsIG9mIHRoZSBjZWxsICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBtaW5XaWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBNYXggd2lkdGgsIGluIHBpeGVscywgb2YgdGhlIGNlbGwgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG1heFdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFRvIGdyb3VwIGJ5IHRoaXMgY29sdW1uIGJ5IGRlZmF1bHQsIGVpdGhlciBwcm92aWRlIGFuIGluZGV4IChlZyByb3dHcm91cEluZGV4PTEpLCBvciBzZXQgcm93R3JvdXA9dHJ1ZS4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHJvd0dyb3VwSW5kZXg6IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGluaXRpYWxSb3dHcm91cEluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFRvIHBpdm90IGJ5IHRoaXMgY29sdW1uIGJ5IGRlZmF1bHQsIGVpdGhlciBwcm92aWRlIGFuIGluZGV4IChlZyBwaXZvdEluZGV4PTEpLCBvciBzZXQgcGl2b3Q9dHJ1ZS4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHBpdm90SW5kZXg6IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGluaXRpYWxQaXZvdEluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEZvciBuYXRpdmUgZHJhZyBhbmQgZHJvcCwgc2V0IHRvIHRydWUgdG8gYWxsb3cgY3VzdG9tIG9uUm93RHJhZyBwcm9jZXNzaW5nICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkbmRTb3VyY2VPblJvd0RyYWc6IChwYXJhbXM6IHsgcm93Tm9kZTogUm93Tm9kZSwgZHJhZ0V2ZW50OiBEcmFnRXZlbnQ7IH0pID0+IHZvaWQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEV4cHJlc3Npb24gb3IgZnVuY3Rpb24gdG8gZ2V0IHRoZSBjZWxscyB2YWx1ZS4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHZhbHVlR2V0dGVyOiBzdHJpbmcgfCBWYWx1ZUdldHRlckZ1bmMgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIElmIG5vdCB1c2luZyBhIGZpZWxkLCB0aGVuIHRoaXMgcHV0cyB0aGUgdmFsdWUgaW50byB0aGUgY2VsbCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdmFsdWVTZXR0ZXI6IHN0cmluZyB8IFZhbHVlU2V0dGVyRnVuYyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogRXhwcmVzc2lvbiBvciBmdW5jdGlvbiB0byBnZXQgdGhlIGNlbGxzIHZhbHVlIGZvciBmaWx0ZXJpbmcuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmaWx0ZXJWYWx1ZUdldHRlcjogc3RyaW5nIHwgVmFsdWVHZXR0ZXJGdW5jIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBGdW5jdGlvbiB0byByZXR1cm4gdGhlIGtleSBmb3IgYSB2YWx1ZSAtIHVzZSB0aGlzIGlmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3QgKG5vdCBhIHByaW1pdGl2ZSB0eXBlKSBhbmQgeW91XG4gICAgICogd2FudCB0byBhKSBncm91cCBieSB0aGlzIGZpZWxkIG9yIGIpIHVzZSBzZXQgZmlsdGVyIG9uIHRoaXMgZmllbGQuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBrZXlDcmVhdG9yOiAodmFsdWU6IGFueSkgPT4gc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsUmVuZGVyZXJGcmFtZXdvcms6IGFueSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIGNlbGxSZW5kZXJlclNlbGVjdG9yIGlmIHlvdSB3YW50IGEgZGlmZmVyZW50IENlbGwgUmVuZGVyZXIgZm9yIHBpbm5lZCByb3dzLiBDaGVjayBwYXJhbXMubm9kZS5yb3dQaW5uZWQuXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHBpbm5lZFJvd0NlbGxSZW5kZXJlcjogeyBuZXcoKTogSUNlbGxSZW5kZXJlckNvbXA7IH0gfCBJQ2VsbFJlbmRlcmVyRnVuYyB8IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQSBmdW5jdGlvbiB0byBmb3JtYXQgYSB2YWx1ZSwgc2hvdWxkIHJldHVybiBhIHN0cmluZy4gTm90IHVzZWQgZm9yIENTViBleHBvcnQgb3IgY29weSB0byBjbGlwYm9hcmQsIG9ubHkgZm9yIFVJIGNlbGwgcmVuZGVyaW5nLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdmFsdWVGb3JtYXR0ZXI6IHN0cmluZyB8IFZhbHVlRm9ybWF0dGVyRnVuYyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIHZhbHVlRm9ybWF0dGVyIGZvciBwaW5uZWQgcm93cywgYW5kIGNoZWNrIHBhcmFtcy5ub2RlLnJvd1Bpbm5lZC5cbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcGlubmVkUm93VmFsdWVGb3JtYXR0ZXI6IHN0cmluZyB8IFZhbHVlRm9ybWF0dGVyRnVuYyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogR2V0cyBjYWxsZWQgYWZ0ZXIgZWRpdGluZywgY29udmVydHMgdGhlIHZhbHVlIGluIHRoZSBjZWxsLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdmFsdWVQYXJzZXI6IHN0cmluZyB8IFZhbHVlUGFyc2VyRnVuYyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQ29tcGFyYXRvciBmdW5jdGlvbiBmb3IgY3VzdG9tIHNvcnRpbmcuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjb21wYXJhdG9yOiAodmFsdWVBOiBhbnksIHZhbHVlQjogYW55LCBub2RlQTogUm93Tm9kZSwgbm9kZUI6IFJvd05vZGUsIGlzSW52ZXJ0ZWQ6IGJvb2xlYW4pID0+IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQ29tcGFyYXRvciBmb3IgdmFsdWVzLCB1c2VkIGJ5IHJlbmRlcmVyIHRvIGtub3cgaWYgdmFsdWVzIGhhdmUgY2hhbmdlZC4gQ2VsbHMgd2hvJ3MgdmFsdWVzIGhhdmUgbm90IGNoYW5nZWQgZG9uJ3QgZ2V0IHJlZnJlc2hlZC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGVxdWFsczogKHZhbHVlQTogYW55LCB2YWx1ZUI6IGFueSkgPT4gYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogQ29tcGFyYXRvciBmb3Igb3JkZXJpbmcgdGhlIHBpdm90IGNvbHVtbnMgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHBpdm90Q29tcGFyYXRvcjogKHZhbHVlQTogc3RyaW5nLCB2YWx1ZUI6IHN0cmluZykgPT4gbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBBbGxvd3MgdGhlIHVzZXIgdG8gc3VwcHJlc3MgY2VydGFpbiBrZXlib2FyZCBldmVudHMgaW4gdGhlIGdyaWQgY2VsbCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NLZXlib2FyZEV2ZW50OiAocGFyYW1zOiBTdXBwcmVzc0tleWJvYXJkRXZlbnRQYXJhbXMpID0+IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBzdXBwcmVzcyBjZXJ0YWluIGtleWJvYXJkIGV2ZW50cyBpbiB0aGUgZ3JpZCBoZWFkZXIgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzSGVhZGVyS2V5Ym9hcmRFdmVudDogKHBhcmFtczogU3VwcHJlc3NIZWFkZXJLZXlib2FyZEV2ZW50UGFyYW1zKSA9PiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjb2xTcGFuOiAocGFyYW1zOiBDb2xTcGFuUGFyYW1zKSA9PiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIHJvd1NwYW46IChwYXJhbXM6IFJvd1NwYW5QYXJhbXMpID0+IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogVG8gY3JlYXRlIHRoZSBxdWljayBmaWx0ZXIgdGV4dCBmb3IgdGhpcyBjb2x1bW4sIGlmIHRvU3RyaW5nIGlzIG5vdCBnb29kIGVub3VnaCBvbiB0aGUgdmFsdWUuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXRRdWlja0ZpbHRlclRleHQ6IChwYXJhbXM6IEdldFF1aWNrRmlsdGVyVGV4dFBhcmFtcykgPT4gc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBDYWxsYmFja3MgZm9yIGVkaXRpbmcuIFNlZSBlZGl0aW5nIHNlY3Rpb24gZm9yIGZ1cnRoZXIgZGV0YWlscy5cbiAgICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgdXBkYXRlIHdhcyBzdWNjZXNzZnVsLCBvciBmYWxzZSBpZiBub3QuXG4gICAgICogSWYgZmFsc2UsIHRoZW4gc2tpcHMgdGhlIFVJIHJlZnJlc2ggYW5kIG5vIGV2ZW50cyBhcmUgZW1pdHRlZC5cbiAgICAgKiBSZXR1cm4gZmFsc2UgaWYgdGhlIHZhbHVlcyBhcmUgdGhlIHNhbWUgKGllIG5vIHVwZGF0ZSkuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBuZXdWYWx1ZUhhbmRsZXI6IChwYXJhbXM6IE5ld1ZhbHVlUGFyYW1zKSA9PiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBDYWxsYmFja3MgZm9yIGVkaXRpbmcuU2VlIGVkaXRpbmcgc2VjdGlvbiBmb3IgZnVydGhlciBkZXRhaWxzLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgb25DZWxsVmFsdWVDaGFuZ2VkOiAoZXZlbnQ6IE5ld1ZhbHVlUGFyYW1zKSA9PiB2b2lkIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBGdW5jdGlvbiBjYWxsYmFjaywgZ2V0cyBjYWxsZWQgd2hlbiBhIGNlbGwgaXMgY2xpY2tlZC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG9uQ2VsbENsaWNrZWQ6IChldmVudDogQ2VsbENsaWNrZWRFdmVudCkgPT4gdm9pZCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogRnVuY3Rpb24gY2FsbGJhY2ssIGdldHMgY2FsbGVkIHdoZW4gYSBjZWxsIGlzIGRvdWJsZSBjbGlja2VkLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgb25DZWxsRG91YmxlQ2xpY2tlZDogKGV2ZW50OiBDZWxsRG91YmxlQ2xpY2tlZEV2ZW50KSA9PiB2b2lkIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBGdW5jdGlvbiBjYWxsYmFjaywgZ2V0cyBjYWxsZWQgd2hlbiBhIGNlbGwgaXMgcmlnaHQgY2xpY2tlZC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG9uQ2VsbENvbnRleHRNZW51OiAoZXZlbnQ6IENlbGxDb250ZXh0TWVudUV2ZW50KSA9PiB2b2lkIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBUbyBjb25maWd1cmUgdGhlIHRleHQgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBmbG9hdGluZyBkaXYgd2hpbGUgZHJhZ2dpbmcgYSByb3cgd2hlbiByb3dEcmFnIGlzIHRydWUgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHJvd0RyYWdUZXh0OiAocGFyYW1zOiBJUm93RHJhZ0l0ZW0sIGRyYWdJdGVtQ291bnQ6IG51bWJlcikgPT4gc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBUaGUgZnVuY3Rpb24gdXNlZCB0byBjYWxjdWxhdGUgdGhlIHRvb2x0aXAgb2YgdGhlIG9iamVjdCwgdG9vbHRpcEZpZWxkIHRha2VzIHByZWNlZGVuY2UgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHRvb2x0aXBWYWx1ZUdldHRlcjogKHBhcmFtczogSVRvb2x0aXBQYXJhbXMpID0+IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbFJlbmRlcmVyU2VsZWN0b3I6IENlbGxSZW5kZXJlclNlbGVjdG9yRnVuYyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbEVkaXRvclNlbGVjdG9yOiBDZWxsRWRpdG9yU2VsZWN0b3JGdW5jIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gdHJ1ZSB0byBub3QgZmxhc2ggdGhpcyBjb2x1bW4gZm9yIHZhbHVlIGNoYW5nZXMgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQ2VsbEZsYXNoOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gdHJ1ZSB0byBub3QgaW5jbHVkZSB0aGlzIGNvbHVtbiBpbiB0aGUgQ29sdW1ucyBUb29sIFBhbmVsICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0NvbHVtbnNUb29sUGFuZWw6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byB0cnVlIHRvIG5vdCBpbmNsdWRlIHRoaXMgY29sdW1uIC8gZmlsdGVyIGluIHRoZSBGaWx0ZXJzIFRvb2wgUGFuZWwgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzRmlsdGVyc1Rvb2xQYW5lbDogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogT3BlbiBieSBEZWZhdWx0ICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBvcGVuQnlEZWZhdWx0OiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBJZiB0cnVlLCBncm91cCBjYW5ub3QgYmUgYnJva2VuIHVwIGJ5IGNvbHVtbiBtb3ZpbmcsIGNoaWxkIGNvbHVtbnMgd2lsbCBhbHdheXMgYXBwZWFyIHNpZGUgYnkgc2lkZSwgaG93ZXZlciB5b3UgY2FuIHJlYXJyYW5nZSBjaGlsZCBjb2x1bW5zIHdpdGhpbiB0aGUgZ3JvdXAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG1hcnJ5Q2hpbGRyZW46IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byB0cnVlIGZvciB0aGlzIGNvbHVtbiB0byBiZSBoaWRkZW4uIE5hdHVyYWxseSB5b3UgbWlnaHQgdGhpbmssIGl0IHdvdWxkIG1ha2UgbW9yZSBzZW5zZSB0byBjYWxsIHRoaXMgZmllbGQgJ3Zpc2libGUnIGFuZCBtYXJrIGl0IGZhbHNlIHRvIGhpZGUsXG4gICAgICogaG93ZXZlciB3ZSB3YW50IGFsbCBkZWZhdWx0IHZhbHVlcyB0byBiZSBmYWxzZSBhbmQgd2Ugd2FudCBjb2x1bW5zIHRvIGJlIHZpc2libGUgYnkgZGVmYXVsdC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGhpZGU6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgQElucHV0KCkgcHVibGljIGluaXRpYWxIaWRlOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dHcm91cDogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgaW5pdGlhbFJvd0dyb3VwOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwaXZvdDogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBASW5wdXQoKSBwdWJsaWMgaW5pdGlhbFBpdm90OiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gdHJ1ZSB0byByZW5kZXIgYSBzZWxlY3Rpb24gY2hlY2tib3ggaW4gdGhlIGNvbHVtbi4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGNoZWNrYm94U2VsZWN0aW9uOiBib29sZWFuIHwgQ2hlY2tib3hTZWxlY3Rpb25DYWxsYmFjayB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogSWYgdHJ1ZSwgYSAnc2VsZWN0IGFsbCcgY2hlY2tib3ggd2lsbCBiZSBwdXQgaW50byB0aGUgaGVhZGVyICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJDaGVja2JveFNlbGVjdGlvbjogYm9vbGVhbiB8IEhlYWRlckNoZWNrYm94U2VsZWN0aW9uQ2FsbGJhY2sgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIElmIHRydWUsIHRoZSBoZWFkZXIgY2hlY2tib3ggc2VsZWN0aW9uIHdpbGwgd29yayBvbiBmaWx0ZXJlZCBpdGVtcyAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyQ2hlY2tib3hTZWxlY3Rpb25GaWx0ZXJlZE9ubHk6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byB0cnVlIGlmIG5vIG1lbnUgc2hvdWxkIGJlIHNob3duIGZvciB0aGlzIGNvbHVtbiBoZWFkZXIuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc01lbnU6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byB0cnVlIHRvIG5vdCBhbGxvdyBtb3ZpbmcgdGhpcyBjb2x1bW4gdmlhIGRyYWdnaW5nIGl0J3MgaGVhZGVyICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc01vdmFibGU6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byB0cnVlIHRvIG1ha2Ugc3VyZSB0aGlzIGNvbHVtbiBpcyBhbHdheXMgZmlyc3QuIE90aGVyIGNvbHVtbnMsIGlmIG1vdmFibGUsIGNhbm5vdCBtb3ZlIGJlZm9yZSB0aGlzIGNvbHVtbi4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGxvY2tQb3NpdGlvbjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIHRydWUgdG8gYmxvY2sgdGhlIHVzZXIgc2hvd2luZyAvIGhpZGluZyB0aGUgY29sdW1uLCB0aGUgY29sdW1uIGNhbiBvbmx5IGJlIHNob3duIC8gaGlkZGVuIHZpYSBkZWZpbml0aW9ucyBvciBBUEkgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGxvY2tWaXNpYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gdHJ1ZSB0byBibG9jayB0aGUgdXNlciBwaW5uaW5nIHRoZSBjb2x1bW4sIHRoZSBjb2x1bW4gY2FuIG9ubHkgYmUgcGlubmVkIHZpYSBkZWZpbml0aW9ucyBvciBBUEkgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGxvY2tQaW5uZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byB0cnVlIGlmIHlvdSB3YW50IHRoZSB1bnNvcnRlZCBpY29uIHRvIGJlIHNob3duIHdoZW4gbm8gc29ydCBpcyBhcHBsaWVkIHRvIHRoaXMgY29sdW1uLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdW5Tb3J0SWNvbjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIHRydWUgaWYgeW91IHdhbnQgdGhpcyBjb2x1bW5zIHdpZHRoIHRvIGJlIGZpeGVkIGR1cmluZyAnc2l6ZSB0byBmaXQnIG9wZXJhdGlvbi4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzU2l6ZVRvRml0OiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gdHJ1ZSBpZiB5b3UgZG8gbm90IHdhbnQgdGhpcyBjb2x1bW4gdG8gYmUgYXV0by1yZXNpemFibGUgYnkgZG91YmxlIGNsaWNraW5nIGl0J3MgZWRnZS4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzQXV0b1NpemU6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIElmIHRydWUsIEdVSSB3aWxsIGFsbG93IGFkZGluZyB0aGlzIGNvbHVtbnMgYXMgYSByb3cgZ3JvdXAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZVJvd0dyb3VwOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBJZiB0cnVlLCBHVUkgd2lsbCBhbGxvdyBhZGRpbmcgdGhpcyBjb2x1bW5zIGFzIGEgcGl2b3QgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZVBpdm90OiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBJZiB0cnVlLCBHVUkgd2lsbCBhbGxvdyBhZGRpbmcgdGhpcyBjb2x1bW5zIGFzIGEgdmFsdWUgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZVZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gdHJ1ZSBpZiB0aGlzIGNvbCBpcyBlZGl0YWJsZSwgb3RoZXJ3aXNlIGZhbHNlLiBDYW4gYWxzbyBiZSBhIGZ1bmN0aW9uIHRvIGhhdmUgZGlmZmVyZW50IHJvd3MgZWRpdGFibGUuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBlZGl0YWJsZTogYm9vbGVhbiB8IEVkaXRhYmxlQ2FsbGJhY2sgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byB0cnVlIGlmIHRoaXMgY29sIHNob3VsZCBub3QgYmUgYWxsb3dlZCB0YWtlIG5ldyB2YWx1ZXMgZnJvbSB0aGUgY2xpcGJvYXJkIC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzUGFzdGU6IGJvb2xlYW4gfCBTdXBwcmVzc1Bhc3RlQ2FsbGJhY2sgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byB0cnVlIGlmIHRoaXMgY29sIHNob3VsZCBub3QgYmUgbmF2aWdhYmxlIHdpdGggdGhlIHRhYiBrZXkuIENhbiBhbHNvIGJlIGEgZnVuY3Rpb24gdG8gaGF2ZSBkaWZmZXJlbnQgcm93cyBlZGl0YWJsZS4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzTmF2aWdhYmxlOiBib29sZWFuIHwgU3VwcHJlc3NOYXZpZ2FibGVDYWxsYmFjayB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogSWYgdHJ1ZSwgZ3JpZCB3aWxsIGZsYXNoIGNlbGwgYWZ0ZXIgY2VsbCBpcyByZWZyZXNoZWQgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZUNlbGxDaGFuZ2VGbGFzaDogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogRm9yIGdyaWQgcm93IGRyYWdnaW5nLCBzZXQgdG8gdHJ1ZSB0byBlbmFibGUgcm93IGRyYWdnaW5nIHdpdGhpbiB0aGUgZ3JpZCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcm93RHJhZzogYm9vbGVhbiB8IFJvd0RyYWdDYWxsYmFjayB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogRm9yIG5hdGl2ZSBkcmFnIGFuZCBkcm9wLCBzZXQgdG8gdHJ1ZSB0byBlbmFibGUgZHJhZyBzb3VyY2UgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGRuZFNvdXJjZTogYm9vbGVhbiB8IERuZFNvdXJjZUNhbGxiYWNrIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBUcnVlIGlmIHRoaXMgY29sdW1uIHNob3VsZCBzdHJldGNoIHJvd3MgaGVpZ2h0IHRvIGZpdCBjb250ZW50cyAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYXV0b0hlaWdodDogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogVHJ1ZSBpZiB0aGlzIGNvbHVtbiBzaG91bGQgd3JhcCBjZWxsIGNvbnRlbnRzIC0gdHlwaWNhbGx5IHVzZWQgd2l0aCBhdXRvSGVpZ2h0ICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB3cmFwVGV4dDogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIHRydWUgaWYgc29ydGluZyBhbGxvd2VkIGZvciB0aGlzIGNvbHVtbi4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHNvcnRhYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gdHJ1ZSBpZiB0aGlzIGNvbHVtbiBzaG91bGQgYmUgcmVzaXphYmxlICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyByZXNpemFibGU6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLyoqIElmIHRydWUsIHRoaXMgY2VsbCB3aWxsIGJlIGluIGVkaXRpbmcgbW9kZSBhZnRlciBmaXJzdCBjbGljay4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHNpbmdsZUNsaWNrRWRpdDogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvKiogV2hldGhlciB0byBkaXNwbGF5IGEgZmxvYXRpbmcgZmlsdGVyIGZvciB0aGlzIGNvbHVtbi4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGZsb2F0aW5nRmlsdGVyOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsRWRpdG9yUG9wdXA6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgLy8gQEVOREBcblxufVxuIl19