import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    border:'1px solid #c4c4c4',
    height:'55px',
    '&:hover':{
        border:'1px solid black',
    }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        transition: theme.transitions.create('width'),
       width: '100%',
    },
}));

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    border: 'none',
    backgroundColor: '#f6f6f6',
}));

export default function ServiceContent() {
    const [time, setTime] = React.useState('');
    const [services, setServices] = React.useState('');
    const [serviceName, setServiceName] = React.useState('');

    const handleChangeTime = (event) => {
        setTime(event.target.value);
    };

    const handleChangeServices = (event) => {
        setServices(event.target.value);
    };
    const handleChangeServiceName = (event) => {
        setServiceName(event.target.value);
    };

    return (
        
            <Box sx={{ flexGrow: 1, margin: 'auto', marginTop:'32px' }}>
                <Grid container spacing={0}>
                    <Grid item md={6} xs={12}>
                        <Item elevation={0}>
                        <FormHelperText>.</FormHelperText>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </Item>
                    </Grid>
                    <Grid item md={2.25} xs={12}>
                        <Item
                            elevation={0}
                            sx={{
                                textAlign: 'end'
                            }}
                        >
                            <Box sx={{ minWidth: 120 }}>
                            <FormHelperText>BUSINESS SERVICES</FormHelperText>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"
                                        sx={{
                                            color: '#202223',
                                            fontSize:'13px'
                                        }}><HomeRepairServiceIcon/> Any business services</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={services}
                                        label="Filter by services"
                                        sx={{
                                            background: 'white',
                                        }}
                                        onChange={handleChangeServices}
                                    >
                                        <MenuItem value={10}>FrontEnd</MenuItem>
                                        <MenuItem value={20}>BackEnd</MenuItem>
                                        <MenuItem value={30}>Ui/Ux</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Item>
                    </Grid>

                    <Grid item md={1.5} xs={4.5}>
                        <Item
                            elevation={0}
                            sx={{
                                textAlign: 'end'
                            }}
                        >
                            <Box>
                            <FormHelperText>LAST INCIDENT</FormHelperText>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"
                                        sx={{
                                            color: '#202223',
                                            fontSize:'13px'
                                        }}><AccessTimeFilledIcon/> Any time</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={time}
                                        label="Any base Time"
                                        onChange={handleChangeTime}
                                        sx={{
                                            background: 'white',
                                        }}
                                    >
                                        <MenuItem value={10}>10:00</MenuItem>
                                        <MenuItem value={20}>11:00</MenuItem>
                                        <MenuItem value={30}>12:00</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Item>
                    </Grid>

                    <Grid item md={2.25} xs={7.5}>
                        <Item
                            elevation={0}
                            sx={{
                                textAlign: 'end'
                            }}
                        >
                            <Box sx={{ minWidth: 120 }}>
                            <FormHelperText>SORT BY</FormHelperText>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"
                                        sx={{
                                            color: '#202223',
                                            fontSize:'13px'
                                        }}><ArrowDownwardIcon/> Service name (A-Z)</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={serviceName}
                                        label="Any base Time"
                                        onChange={handleChangeServiceName}
                                        sx={{
                                            background: 'white',
                                        }}
                                    >
                                        <MenuItem value={10}>A</MenuItem>
                                        <MenuItem value={20}>B</MenuItem>
                                        <MenuItem value={30}>C</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
    );
}
