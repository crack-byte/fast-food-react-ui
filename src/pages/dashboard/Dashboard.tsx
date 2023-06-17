import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';
import Sidebar from './SideBar';
import DashboardWidget from './DashBoardWidget';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Chart from './Chart';
import { Grid, Paper } from '@mui/material';
import Orders, { TableHeadProp, TableRowProp } from './Orders';

const defaultTheme = createTheme();

export default function Dashboard() {
  const header: TableHeadProp[] = [
    { id: 1, name: "Name", align: 'inherit' },
    { id: 2, name: "Date", align: 'inherit' },
    { id: 3, name: "Ship To", align: 'inherit' },
    { id: 4, name: "Payment Method", align: 'inherit' },
    { id: 5, name: "Sale Amount", align: 'right' }
  ];
  function createData(
    id: number,
    date: string,
    name: string,
    shipTo: string,
    paymentMethod: string,
    amount: number,
  ) {
    const row: TableRowProp = { id, date, name, shipTo, paymentMethod, amount };
    return row;
  }

  const rows = [
    createData(
      0,
      '16 Mar, 2019',
      'Elvis Presley',
      'Tupelo, MS',
      'VISA ⠀•••• 3719',
      312.44,
    ),
    createData(
      1,
      '16 Mar, 2019',
      'Paul McCartney',
      'London, UK',
      'VISA ⠀•••• 2574',
      866.99,
    ),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
    createData(
      3,
      '16 Mar, 2019',
      'Michael Jackson',
      'Gary, IN',
      'AMEX ⠀•••• 2000',
      654.39,
    ),
    createData(
      4,
      '15 Mar, 2019',
      'Bruce Springsteen',
      'Long Branch, NJ',
      'VISA ⠀•••• 5919',
      212.79,
    ),
  ];
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
