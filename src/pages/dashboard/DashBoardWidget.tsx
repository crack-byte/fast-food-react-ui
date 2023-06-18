import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders, { TableHeadProp, TableRowProp } from './Orders';
import Link from '@mui/material/Link';
import Util from 'src/service/Util';

// Helper function to generate a random date within a range
const util = new Util();

export default function DashboardWidget() {
  const header: TableHeadProp[] = [
    { id: 1, field:'order_id',name: "Order ID", align: 'left' },
    { id: 2, field:'date',name: "Date", align: 'left' },
    { id: 3, field:'type',name: "Type", align: 'left' },
    { id: 4, field:'payment_method',name: "Payment Method", align: 'left' },
    { id: 5, field:'payment_status',name: "Payment Status", align: 'left' },
    { id: 5, field:'delivery_status',name: "Delivery Status", align: 'left' },
    { id: 6, field:'total_amount',name: "Total Amount", align: 'right' }
  ];

 const rows:TableRowProp[]=util.generateRows(50);
  function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
  }
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Chart />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Deposits />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Orders tableHeader={header} rows={rows} title="Recent Orders" />
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
              See more orders
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}