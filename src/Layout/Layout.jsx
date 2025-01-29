// /src/components/Layout/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

import Home from "../Home/Home";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
