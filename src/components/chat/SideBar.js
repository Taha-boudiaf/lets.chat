import React from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { ChatItem } from "react-chat-elements";
import { Avatar } from "react-chat-elements";

import "react-chat-elements/dist/main.css"; 




const drawerWidth = 240;

const SideBar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const container = window !== undefined ? () => window().document.body : undefined;

    const drawer = (
        <div>
          <Avatar
              src={"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"}
              alt={"logo"}
              size="large"
              type="circle flexible"
          />
          <Toolbar />
          <Divider />
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
             
                <ChatItem
                    key={text}
                    avatar={"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"}
                    alt={"Reactjs"}
                    title={text}
                    subtitle={"What are you doing?"}
                    date={new Date()}
                    unread={index}
                />
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );
      const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };
  return (
    <div>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
    </div>
  )
}

export default SideBar