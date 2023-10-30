import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { useState } from "react";

const Root = () => {

  return (
    // <div className="bg-[var(--theme)]">
      <div className="max-w-[1250px] mx-auto w-full">
        <Navbar />
        <Outlet />
      </div>
    // </div>
  );
};

export default Root;
