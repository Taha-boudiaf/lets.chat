import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import styles from './css/navbar.module.css'
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';

const pages = ["Home", "About", "Contact"];

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
              {/* <Link for='/'>
                Home
              </Link> */}
              <Typography variant="h6" component="div">
                About
              </Typography>
              <Typography variant="h6" component="div">
                Contact
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    </>
  )
}


export default Navbar