import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useAuth } from '../context/ChatContext';
import { Button } from '@mui/material';
import SideBar from '../components/chat/SideBar';
import MessageForm from '../components/chat/MessageForm';



const drawerWidth = 240;

function ResponsiveDrawer(props) {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {Signout} = useAuth()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleSignout= () =>{
    Signout()
  }
  


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <SideBar/>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem 
        </Typography>
        <Typography paragraph>
          Consequat 
        </Typography>
        <Button onClick={handleSignout}> Signout</Button>
        <a href='/profile'>profile</a>
      </Box>
      <MessageForm
                // handleSubmit= {handleSubmit}
                // text={text}
                // setText={setText}
                // setImg={setImg}
       />
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
