import React from "react";
import DataTable from "react-data-table-component";

const CustomTable = ({data, columns}) => {
  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
//        progressPending={pending}
        pagination
        paginationRowsPerPageOptions={[10, 25, 50, 100, 500]}
        highlightOnHover
        striped
        dense
        noDataComponent="No hay órdenes disponibles"
      />
    </div>
  );
};

export default CustomTable;
