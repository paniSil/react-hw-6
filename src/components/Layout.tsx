import React from "react";
import Menu from "./Menu";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default Layout;
