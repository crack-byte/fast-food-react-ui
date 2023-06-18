import * as React from 'react';
import { DataGrid, GridAlignment, GridColDef } from '@mui/x-data-grid';
import Title from './Title';
 interface TableProp {
  tableHeader: TableHeadProp[];
  rows:any[];
  title:string;
}
export interface TableHeadProp {
  name: string;
  id:number;
  field:string;
  align?: GridAlignment;
}
export interface TableRowProp {
  order_id:number,
  date:string,
  type:string,
  payment_method:string,
  payment_status:string,
  delivery_status:string,
  total_amount:number
}

export default function Orders(props:TableProp) {
  const {tableHeader,rows,title} = props;
  const columns: GridColDef[] = tableHeader.map((item) => ({
    field: item.field,
    headerName: item.name,
    align: item.align,
    flex:1,
    type: 'singleSelect'
  }));
  console.log(rows)
  return (
    <React.Fragment>
      <Title>{title}</Title>
      <div style={{ minHeight: 400, maxHeight:700,width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </React.Fragment>
  );
}
