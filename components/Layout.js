import React from "react";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="bg-purple-500 flex-1 p-4 text-white border-1 border-dashed">
        Dashboard
      </div>
    </div>
  );
};

export default Layout;