import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';
import Sidebar from './SideBar';
import DashboardWidget from './DashBoardWidget';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Grid, Paper } from '@mui/material';
import Orders, { TableHeadProp } from './Orders';
import Util from 'src/service/Util';

const defaultTheme = createTheme();
const util = new Util();
export default function Dashboard() {
  const header: TableHeadProp[] = [
    { id: 1, field:'order_id',name: "Order ID", align: 'left' },
    { id: 2, field:'date',name: "Date", align: 'left' },
    { id: 3, field:'type',name: "Type", align: 'left' },
    { id: 4, field:'payment_method',name: "Payment Method", align: 'left' },
    { id: 5, field:'payment_status',name: "Payment Status", align: 'left' },
    { id: 5, field:'delivery_status',name: "Delivery Status", align: 'left' },
    { id: 6, field:'total_amount',name: "Total Amount", align: 'right' }
  ];

  const rows: any[] = util.generateRows(50);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Sidebar />

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <BrowserRouter>
              <Routes >
                <Route path="/" element={<DashboardWidget />}></Route>
                <Route path="/orders" element={<React.Fragment><Grid item xs={12}>
                  <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Orders tableHeader={header} rows={rows} title="Orders" />
                  </Paper></Grid></React.Fragment>}></Route>
              </Routes>
            </BrowserRouter>
          </Container>
        </Box>


      </Box>
    </ThemeProvider>
  );
}
