import React from "react";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className=" flex-1 p-4 text-white border-1 border-separate border">
        {/* Card Content */}
        <h1 className="dark:text-black">HELLO</h1>
      </div>
    </div>
  );
};

export default Layout;
