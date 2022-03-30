import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Data, Email, sMS, Phone, Push,Actions) {
  return { Data, Email, sMS, Phone, Push, Actions };
}

const rows = [
  createData('Mar 6, 2022', 0, 0, 0, 0, ''),
  createData('Mar 7, 2022', 0, 0, 0, 0, ''),
  createData('Mar 8, 2022', 0, 0, 0, 0, ''),
  createData('Mar 9, 2022', 0, 0, 0, 0, ''),
  createData('Mar 10, 2022', 0, 0, 0, 0, ''),
  createData('Mar 11, 2022', 0, 0, 0, 0, ''),
  createData('Mar 12, 2022', 0, 0, 0, 0, ''),
  createData('Mar 13, 2022', 0, 0, 0, 0, ''),
];

export default function AnalyticTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead
        sx={{
            backgroundColor:"#F1F2F3",
            color:'black'
        }}>
          <TableRow>
            <TableCell>Data Range</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">SMS</TableCell>
            <TableCell align="right">Phone.</TableCell>
            <TableCell align="right">Push</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableHead
         sx={{
            backgroundColor:"#F6F6F7",
            color:'black'
        }}
        >
          <TableRow>
            <TableCell>Summary for : {'Mar 6, 2022 to Mar 13, 2022'}</TableCell>
            <TableCell align="right">{0}</TableCell>
            <TableCell align="right">{0}</TableCell>
            <TableCell align="right">{0}</TableCell>
            <TableCell align="right">{0}</TableCell>
            <TableCell align="right">{''}</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Data}
              </TableCell>
              <TableCell align="right">{row.Email}</TableCell>
              <TableCell align="right">{row.sMS}</TableCell>
              <TableCell align="right">{row.Phone}</TableCell>
              <TableCell align="right">{row.Push}</TableCell>
              <TableCell align="right">{row.Actions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
