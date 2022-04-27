import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import styles from './css/navbar.module.css'
import { Button, Container, IconButton, Menu } from '@mui/material';
import Logo from '../../assets/logo/Logo.png'
import { Box } from '@mui/system';
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

// pages
const pages = ["Home", "About", "Contact"];
// path of pages
const path = ['/','/about','/contact']

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  // open and close menu bar 
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <CssBaseline />
        <AppBar className={styles.app__bar}>
          <Container maxWidth="xl">
            <Toolbar>
              <Typography component="div" sx={{ mr: 2, display: { xs: "none", md: "flex" } }}> 
                <a href='/'>
                  <img src={Logo} alt='logo' width='80px' style={{marginTop:'12px'}}/>
                </a> 
              </Typography>
              
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                    vertical: "bottom",
                    horizontal: "left"
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left"
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" }
                  }}
                >
                  {pages.map((page,i) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center"><a href={path[i]}>{page}</a></Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                noWrap
                component="div"
                sx={{ ml: 22,flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                 <a href='/'>
                  <img src={Logo} alt='logo' width='80px' style={{marginTop:'12px'}}/>
                </a> 
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page,i) => (
                  <a
                    href={path[i]}
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </a>
                ))}
                <a>
                  Join us 
                </a>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
    </>
  )
}


export default Navbar