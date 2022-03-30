import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import RedeemIcon from '@mui/icons-material/Redeem';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#f6f6f6',
    marginLeft: 0,
    width: '100%',
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
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
    },
  }));

const pages = [
  {
    text:'People', 
    path:'/'
  }, 
  {
    text:'Analytics',
    path:'/Analytics'
  }, 
  { 
    text:'Services', 
    path:'/Services' 
  }, 
  {
    text:'Automation', 
    path:'/Automation'
  }, 
  { 
    text:'Incidents',
    path:'/Incidents'
  }, 
  {
    text:'Integrations', 
    path:'/Integrations'
  }
];

const MainAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  


  return (
    <AppBar position="static" elevation={0} sx={{backgroundColor:'white', color:'black'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{ mr: 10, display: { xs: 'none', md: 'flex' } }}
          >
            PagerDuty
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', color:'black' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                color:'black',
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.text} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center" sx={{cursor:'pointer'}} ><Link to={page.path}
                  style={{ my: 2, color: 'black', display: 'block',cursor:'pointer', textDecoration:'none' }}
                  >{page.text}</Link></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, fontSize:'16px', mr:2}}
          >
            PagerDuty
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', color:'black', } }}>
            {pages.map((page) => (
              <Typography
                variant="caption"
                key={page.text}
                onClick={handleCloseNavMenu}
              >
                <Link to={page.path}
                 style={{ my: 2, color: 'black', display: 'block',cursor:'pointer', marginLeft:'10px', textDecoration:'none' }}
                >{page.text}</Link>
              </Typography>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Search>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
          </Box>

          <Box sx={{ flexGrow: 0, mr:2, ml:2 }}>
              <RedeemIcon />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open profile">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Xemy Aharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MainAppBar;
