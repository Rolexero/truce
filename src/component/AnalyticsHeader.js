import * as React from 'react';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AnalyticsTabs from './AnalyticsTabs';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    border: 'none',
    backgroundColor: '#f6f6f6',
}));

export default function AnalyticsHeader() {
    const [tags, setTags] = React.useState('');

    const handleChangeTags = (event) => {
        setTags(event.target.value);
    };

    return (
        <Container maxWidth="xl">
            <Toolbar />
            <Box sx={{ flexGrow: 1, margin: 'auto', maxWidth: "1300px" }}>
                <Grid container spacing={2}>
                    <Grid item md={12} xs={12}>
                        <Item elevation={0}>
                            <Typography
                                variant='h6'
                                sx={{
                                    textAlign: "start",
                                    fontSize: '28px'
                                }}
                            >
                                Reports
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Item
                            elevation={0}
                            sx={{
                                textAlign: 'end'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'end',
                                }}
                            >
                                <ButtonGroup aria-label="outlined button group" sx={{ textTransform: 'none' }}>
                                    <Button
                                        sx={{ textTransform: 'none', color: 'black', border: '1px solid #c4c4c4',backgroundColor:'white' }}
                                    >Day</Button>
                                    <Button
                                        sx={{ textTransform: 'none', color: 'black', border: '1px solid #c4c4c4',backgroundColor:'white' }}
                                    >Week</Button>
                                    <Button
                                        sx={{ textTransform: 'none', color: 'black', border: '1px solid #c4c4c4', backgroundColor:'white'}}
                                    >Month</Button>
                                    <Box sx={{ minWidth: 170 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label"
                                                sx={{
                                                    color: '#202223',
                                                    fontSize: '13px'
                                                }}>Mar 6, 2022 - Mar 13, 2022</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={tags}
                                                label="Filter by tags"
                                                sx={{
                                                    background: 'white',
                                                }}
                                                onChange={handleChangeTags}
                                            >
                                                <MenuItem value={10}>Mar 6</MenuItem>
                                                <MenuItem value={20}>Mar 7</MenuItem>
                                                <MenuItem value={30}>Mar 8</MenuItem>
                                                <MenuItem value={30}>Mar 9</MenuItem>
                                                <MenuItem value={30}>Mar 10</MenuItem>
                                                <MenuItem value={30}>Mar 11</MenuItem>
                                                <MenuItem value={30}>Mar 12</MenuItem>
                                                <MenuItem value={30}>Mar 13</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </ButtonGroup>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
                <AnalyticsTabs />
            </Box>

        </Container>
    );
}
