import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import ServicesTable from './ServicesTable';




const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    border: 'none',
    backgroundColor: '#f6f6f6',
}));

export default function ToltalService() {
   
    return ( 
        <Box sx={{ flexGrow: 1, margin: 'auto', mt:'48px' }}>
                <Grid container spacing={0}>
                    
                    <Grid item md={2.25} xs={7.5}>
                        <Item
                            elevation={0}
                            sx={{
                                textAlign: 'start',
                                fontSize:'15px'
                            }}
                        >
                           <Typography>
                              Total services (1)
                           </Typography>
                           <ServicesTable />
                        </Item>
                    </Grid>
                </Grid>
            </Box>
    );
}
