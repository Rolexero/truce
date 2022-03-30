import * as React from 'react';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';



const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  border:'none',
  backgroundColor:'#f6f6f6',
}));

export default function Header() {
  return (
    <Container>
    <Toolbar/>
    <Box sx={{ flexGrow: 1, maxWidth:'998px', margin:'auto'}}>
      <Grid container spacing={2}>
        <Grid item md={8} xs={6}>
          <Item elevation={0}>
              <Typography
              variant='h6'
              sx={{
                textAlign:"start",
                fontSize:'28px'
              }}
              >
                  Users
              </Typography>
          </Item>
        </Grid>
        <Grid item md={4} xs={6}>
          <Item
          elevation={0}
          sx={{
            textAlign:'end'
          }}
          ><Button variant="contained" sx={{ textTransform:"none"}}><AddIcon/> Add Users </Button></Item>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}
