import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
 interface TableProp {
  tableHeader: TableHeadProp[];
  rows?:TableRowProp[];
  title:string;
}
export interface TableHeadProp {
  name: string;
  id:number;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
}
export interface TableRowProp {
  id: number;
  date: string;
  name: string;
  shipTo: string;
  paymentMethod: string;
  amount: number;
}




function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders(props:TableProp) {
  const {tableHeader,rows,title} = props;
  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {tableHeader.map((head) => (<TableCell key={head.id} align={head.align}>{head.name}</TableCell>))}

          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
