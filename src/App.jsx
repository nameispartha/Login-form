// src/App.js
import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Import BrowserRouter
import Login from "./Page/Login";
import Dashboard from "./Page/Dashboard";
import Customers from "./Page/Customers";
import Orders from "./Page/Orders";
import Sales from "./Page/Sales";
import Categories from "./Page/Categories";
import Settings from "./Page/Settings";
import Layout from "./Components/Layout";

const App = () => {
  return (
    <Router> {/* Ensure Router is wrapping everything */}
      <Routes>
        <Route path="/" element={<Login />} />

      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/settings" element={<Settings />} />
      </Route>  
      </Routes>
    </Router>
  );
};

export default App;

