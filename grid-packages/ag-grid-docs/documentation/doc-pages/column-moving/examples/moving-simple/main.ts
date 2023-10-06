import { Grid, Column, GridOptions } from '@ag-grid-community/core'

const gridOptions: GridOptions<IOlympicData> = {
  columnDefs: [
    { field: 'athlete' },
    { field: 'age' },
    { field: 'country' },
    { field: 'year' },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ],
  defaultColDef: {
    width: 150,
  },
  suppressDragLeaveHidesColumns: true,
}

function onMedalsFirst() {
  gridOptions.api!.moveColumns(['gold', 'silver', 'bronze', 'total'], 0)
}

function onMedalsLast() {
  gridOptions.api!.moveColumns(['gold', 'silver', 'bronze', 'total'], 6)
}

function onCountryFirst() {
  gridOptions.api!.moveColumn('country', 0)
}

function onSwapFirstTwo() {
  gridOptions.api!.moveColumnByIndex(0, 1)
}

function onPrintColumns() {
  const cols = gridOptions.api!.getAllGridColumns()
  const colToNameFunc = (col: Column, index: number) => index + ' = ' + col.getId()
  const colNames = cols.map(colToNameFunc).join(', ')
  console.log('columns are: ' + colNames)
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', () => {
  const gridDiv = document.querySelector<HTMLElement>('#myGrid')!
  new Grid(gridDiv, gridOptions)

  fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    .then(response => response.json())
    .then((data: IOlympicData[]) => gridOptions.api!.setRowData(data))
})
