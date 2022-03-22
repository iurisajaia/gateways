import React from 'react';

import EmptyContentImg from "../../assets/images/no-content.svg";

import "./Empty.css";

const Empty = () => {
    return (
        <div className="empty-content">
            <h2>No Reports</h2>
            <p>
                Currently you have no data for the reports to be generated.
                Once you start generating traffic through the Balance application
                the reports will be shown.
            </p>
            <img src={EmptyContentImg} alt="No Reports"/>
        </div>
    );
};

export default Empty;
