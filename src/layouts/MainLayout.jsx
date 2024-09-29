// import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  // block code for fetching and dispatch products data to redux store
  // -----
  // 
  return (
    < div className="bg-neutral-50">
      <Navbar />
      <div className="container mx-auto mt-20">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout;