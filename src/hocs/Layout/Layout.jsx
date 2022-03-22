import React from 'react';

import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Filters from "../../components/filters/Filters";
import Footer from "../../components/footer/Footer";

import "./Layout.css";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="content d-flex">
                <Sidebar/>
                <div className="content-wrapper">
                    <div className="content-filters">
                        <Filters/>
                    </div>
                    <div className="content-body">
                        {children}
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    );
};

export default Layout;
