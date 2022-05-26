import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { ListItem, ListItemText, Typography } from "@mui/material";
import Users from "../chat/Users";
import Logo from "../../assets/logo/Logo.png";
import Img from "../../assets/svg/user.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const drawerWidth = 240;

const SideBar = ({ window, users, selectUser, user }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <Typography
        component="div"
        sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
        style={logo}
      >
        <a href="/">
          <img
            src={Logo}
            alt="logo"
            width="70px"
            style={{ marginTop: "12px" }}
          />
        </a>
      </Typography>

      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <Typography style={conversation}>Conversation</Typography>
      <Divider />
      <List>
        {users.map((user) => (
          <>
            <Users key={user.uid} user={user} selectUser={selectUser} />
            <Divider />
          </>
        ))}
      </List>
      <div style={list}>
        <a href="/profile" className="menu">
          <AccountCircleOutlinedIcon />
        </a>
        <a href="/" className="menu">
          <LogoutOutlinedIcon />
        </a>
      </div>
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
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </div>
  );
};
const conversation = {
  display: "flex",
  justifyContent: "left",
  marginLeft: "13px",
  fontSize: "24",
  fontWeight: "600",
};
const logo = {
  marginLeft: "5%",
  marginBottom: " 40%",
};
const list = {
  position: "relative",
  display: "flex",
  background: "#7C8396",
  padding: "19px 10px",
  marginTop: "65%",
  justifyContent: "space-between",
};
export default SideBar;
