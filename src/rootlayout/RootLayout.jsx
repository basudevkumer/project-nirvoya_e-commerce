
import Footer from "@/component/commonComponent/FooterTop";
import Navbar from "@/component/commonComponent/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
