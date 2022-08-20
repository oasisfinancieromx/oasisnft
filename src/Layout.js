import React from "react";
import { Outlet } from "react-router-dom";

import PrimarySearchAppBar from './components/nav/';

export const Layout = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <Outlet />
    </>
  );
};
