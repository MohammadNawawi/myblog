import React from "react";

const Sidebar = () => {
  return (
    <div className="h-screen px-4 pt-8 pb-4 bg-red-200 flex text-center items-center justify-center flex-col w-40">
      <div className="row-auto justify-between">
        <div className="rounded-full bg-black w-[52px] h-[52px] ">
          <h1 className="items-center">1</h1>
        </div>
        <div className="rounded-full bg-black w-[52px] h-[52px] mt-4">
          <h1 className="items-center">1</h1>
        </div>
        <div className="rounded-full bg-black w-[52px] h-[52px] mt-4">
          <h1 className="items-center">1</h1>
        </div>
        <div className="rounded-full bg-black w-[52px] h-[52px] mt-4">
          <h1 className="items-center">1</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
