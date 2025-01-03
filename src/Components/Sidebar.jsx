// src/components/Sidebar.jsx
import React, { useState } from "react";
import { Box, List, ListItem, ListItemText, Drawer, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  return (
    <>
      <Drawer
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
            backgroundColor: "#f4f4f4",
          },
        }}
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <List>
          <ListItem button component={Link} to="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/customers">
            <ListItemText primary="Customers" />
          </ListItem>
          <ListItem button component={Link} to="/orders">
            <ListItemText primary="Orders" />
          </ListItem>
          <ListItem button component={Link} to="/sales">
            <ListItemText primary="Sales" />
          </ListItem>
          <ListItem button component={Link} to="/categories">
            <ListItemText primary="Categories" />
          </ListItem>
          <ListItem button component={Link} to="/settings">
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>

      <IconButton onClick={toggleDrawer(true)} sx={{ display: { sm: "none" } }}>
        <MenuIcon />
      </IconButton>

      <Box sx={{ width: 250, height: "100vh", backgroundColor: "#f4f4f4", display: { xs: "none", sm: "block" } }}>
        <List>
          <ListItem button component={Link} to="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/customers">
            <ListItemText primary="Customers" />
          </ListItem>
          <ListItem button component={Link} to="/orders">
            <ListItemText primary="Orders" />
          </ListItem>
          <ListItem button component={Link} to="/sales">
            <ListItemText primary="Sales" />
          </ListItem>
          <ListItem button component={Link} to="/categories">
            <ListItemText primary="Categories" />
          </ListItem>
          <ListItem button component={Link} to="/settings">
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default Sidebar;


