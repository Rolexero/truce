import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Toolbar from '@mui/material/Toolbar';

import CardHeader from '@mui/material/CardHeader';
import { Box } from '@mui/material';


function createData(Profile, User, Email, Teams, Tags, Role, Actions) {
    return { Profile, User, Email, Teams, Tags, Role, Actions };
}

const rows = [
    createData(<AccountCircleIcon />, 'Oluwatobi Akindunjoye', 'Tobi@busha.co', '', '', 'Account owner', '')
];

export default function PeopleTable() {
    return (
        <Box sx={{ maxWidth: '998px', margin: 'auto' }}>
            <Toolbar />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead 
                    sx={{
                        backgroundColor:'#F1F2F3'
                    }}
                    >
                        <TableRow>
                            <TableCell>Users ({rows.length} total)</TableCell>
                            <TableCell align="start">Teams </TableCell>
                            <TableCell align="start">Tags</TableCell>
                            <TableCell align="start">Role</TableCell>
                            <TableCell align="start">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <CardHeader
                                        avatar={
                                            row.Profile
                                        }

                                        title={row.User}
                                        subheader={row.Email}
                                    />
                                    {row.name}
                                </TableCell>
                                <TableCell align="start">{row.Teams}</TableCell>
                                <TableCell align="start">{row.Tags}</TableCell>
                                <TableCell align="start">{row.Role}</TableCell>
                                <TableCell align="start">{row.Actions}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
