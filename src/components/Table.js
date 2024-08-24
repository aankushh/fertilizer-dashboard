import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './Table.css'; // Assuming you create a Table.css for custom styles

const Table = ({ rowData }) => {
  const columnDefs = [
    { headerName: 'Year', field: '_year', sortable: true, filter: true },
    { headerName: 'Month', field: 'month', sortable: true, filter: true },
    { headerName: 'Product', field: 'product', sortable: true, filter: true },
    { headerName: 'State', field: 'state', sortable: true, filter: true },
    { headerName: 'Requirement (MT)', field: 'requirement_in_mt_', sortable: true, filter: true },
    { headerName: 'Availability (MT)', field: 'availability_in_mt_', sortable: true, filter: true },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={true}
        paginationPageSize={20}
      />
    </div>
  );
};

export default Table;
