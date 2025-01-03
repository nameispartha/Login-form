// src/pages/Dashboard.jsx
import React from "react";
import { Container, Box } from "@mui/material";  // Material UI components
// import Sidebar from "../components/Sidebar";  // Import Sidebar component

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      {/* <Sidebar /> */}
      
      {/* Main content */}
      <Container sx={{ flexGrow: 1, paddingTop: { xs: "80px", sm: "20px" } }}>
        <h2>Welcome to the Parthasarathi's Dashboard</h2>
    {/* Add more content as needed */}
      </Container>
    </Box>
  );
};

export default Dashboard;


