// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom"; // This renders the current page component
import Sidebar from "./Sidebar"; // Sidebar component

const Layout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar /> {/* Sidebar will always be visible */}
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet /> {/* This will render the page content dynamically */}
      </div>
    </div>
  );
};

export default Layout;
