import React from "react";
import { Outlet } from "react-router-dom";
import NavHero from "./header";
import Footer from "./footer";

export function Layout() {
  return (
    <React.Fragment>
      <NavHero />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}
