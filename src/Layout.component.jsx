import React from "react";
import { Bottombar, LeftSidebar, Topbar } from "./components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <Bottombar />
    </div>
  );
};

export default Layout;
