import { AbstractColDef, ColumnEventType, Component, ToolPanelColumnCompParams } from "@ag-grid-community/core";
export declare class PrimaryColsListPanel extends Component {
    static TEMPLATE: string;
    private columnModel;
    private colDefService;
    private columnApi;
    private modelItemUtils;
    private allowDragging;
    private filterText;
    private expandGroupsByDefault;
    private params;
    private eventType;
    private groupsExist;
    private virtualList;
    private allColsTree;
    private displayedColsList;
    private destroyColumnItemFuncs;
    constructor();
    private destroyColumnTree;
    init(params: ToolPanelColumnCompParams, allowDragging: boolean, eventType: ColumnEventType): void;
    private createComponentFromItem;
    onColumnsChanged(): void;
    private getExpandedStates;
    private setExpandedStates;
    private buildTreeFromWhatGridIsDisplaying;
    setColumnLayout(colDefs: AbstractColDef[]): void;
    private buildTreeFromProvidedColumnDefs;
    private buildListModel;
    private onColumnExpanded;
    private flattenAndFilterModel;
    private focusRowIfAlive;
    private forEachItem;
    doSetExpandedAll(value: boolean): void;
    setGroupsExpanded(expand: boolean, groupIds?: string[]): void;
    private getExpandState;
    doSetSelectedAll(selectAllChecked: boolean): void;
    private getSelectionState;
    setFilterText(filterText: string): void;
    private markFilteredColumns;
    private notifyListeners;
    private fireGroupExpandedEvent;
    private fireSelectionChangedEvent;
}
