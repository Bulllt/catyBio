import React from "react";
import Navbar from "../components/navbar/index";
import ScrollToTop from "../components/scrollToTop/index";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <main>
        <Outlet />
      </main>
    </>
  );
}
