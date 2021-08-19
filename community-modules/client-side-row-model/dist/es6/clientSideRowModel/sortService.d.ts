import { SortOption, ChangedPath, BeanStub } from "@ag-grid-community/core";
export declare class SortService extends BeanStub {
    private columnModel;
    private rowNodeSorter;
    private postSortFunc;
    init(): void;
    sort(sortOptions: SortOption[], sortActive: boolean, deltaSort: boolean, dirtyLeafNodes: {
        [nodeId: string]: boolean;
    } | null, changedPath: ChangedPath | undefined, noAggregations: boolean, sortContainsGroupColumns: boolean): void;
    private mapNodeToSortedNode;
    private doDeltaSort;
    private mergeSortedArrays;
    private updateChildIndexes;
    private updateGroupDataForHideOpenParents;
    private pullDownGroupDataForHideOpenParents;
}
