export function addCellRange({ gridOptions, rowStartIndex, rowEndIndex, columnStartIndex, columnEndIndex }) {
    const allColumns = gridOptions.api!.getColumns();
    const columnStart = allColumns[columnStartIndex];
    const columnEnd = allColumns[columnEndIndex];

    if (!columnStart || !columnEnd) {
        return;
    }

    gridOptions.api?.addCellRange({
        rowStartIndex,
        rowEndIndex,
        columnStart,
        columnEnd,
    });
}
