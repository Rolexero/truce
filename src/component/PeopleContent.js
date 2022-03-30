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
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


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

export default function PeopleContent() {
    const [role, setRole] = React.useState('');
    const [tags, setTags] = React.useState('');

    const handleChangeRole = (event) => {
        setRole(event.target.value);
    };

    const handleChangeTags = (event) => {
        setTags(event.target.value);
    };

    return (
        <Container>
            <Box sx={{ flexGrow: 1, maxWidth: '998px', margin: 'auto', mt:5 }}>
                <Grid container spacing={0}>
                    <Grid item md={6} xs={12}>
                        <Item elevation={0}>
                        <FormHelperText>.</FormHelperText>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Find a user by name or email..."
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </Item>
                    </Grid>
                    <Grid item md={3} xs={6}>
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
                                        }}>Filter by tags</InputLabel>
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
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item md={3} xs={6}>
                        <Item
                            elevation={0}
                            sx={{
                                textAlign: 'end'
                            }}
                        >
                            <Box sx={{ minWidth: 120 }}>
                            <FormHelperText>LAST INCIDENT</FormHelperText>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"
                                        sx={{
                                            color: '#202223',
                                            fontSize:'13px'
                                        }}>Any base role</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={role}
                                        label="Any base role"
                                        onChange={handleChangeRole}
                                        sx={{
                                            background: 'white',
                                        }}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
