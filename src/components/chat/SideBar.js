import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { Typography } from "@mui/material";
import Users from "../chat/Users";
import Logo from "../../assets/logo/Logo.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../../context/ChatContext";
import { Navigate } from "react-router-dom";

const drawerWidth = 240;

const SideBar = ({ window, users, selectUser, chat, user1 }) => {
  const { Signout, user } = useAuth();
  const handleLogOut = async () => {
    await updateDoc(doc(db, "users", user.uid), {
      isOnline: false,
    });
    await Signout();
    Navigate("/");
  };
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
        {user1.firstName} {user1.lastName}
      </h2>
      <Typography style={conversation}>Conversation</Typography>
      <Divider />
      <List>
        {users.map((user) => (
          <>
            <Users
              key={user.uid}
              user={user}
              user1={user1}
              chat={chat}
              selectUser={selectUser}
            />
            <Divider />
          </>
        ))}
      </List>
      <div style={list}>
        <div style={iconsRight}>
          <a href="/profile" className="menu">
            <AccountCircleOutlinedIcon />
          </a>
        </div>
        <div style={iconsLeft}>
          <button className="menu" onClick={handleLogOut}>
            <LogoutOutlinedIcon />
          </button>
        </div>
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
  position: "fixed",
  bottom: "0",
  display: "flex",
  background: "#7C8396",
  padding: "35px 120px",
  // marginTop: "65%",
  justifyContent: "space-around",
  alignItems: "center",
};
const iconsLeft = {
  position: "absolute",
  marginLeft: "170px",
};
const iconsRight = {
  position: "absolute",
  marginRight: "185px",
};
export default SideBar;
