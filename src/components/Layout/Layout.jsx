import React from "react";

import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";

import "./Layout.css";

const Layout = ({ user, children }) => {
  return (
    <>
      <Header user={user} />
      <div className="content d-flex">
        <Sidebar />
        <div className="content-wrapper">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
