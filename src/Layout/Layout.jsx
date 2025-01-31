// /src/components/Layout/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


const Layout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
