import React from "react";
import { Sidebar } from "..";
import { Outlet, Route } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex bg-white dark:bg-dark-900 dark:text-white ">
      <div className="w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12"></div>
      <Sidebar />
      <div className="flex  w-8/12">
        <div className="flex columns-2 w-full md:w-10/12">
          <Outlet />
        </div>
        <div className="flex columns-3 w-full md:w-2/12">Hello</div>
      </div>
    </div>
  );
};

export default Layout;
