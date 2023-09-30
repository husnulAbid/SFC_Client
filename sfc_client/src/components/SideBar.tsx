import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../assets/css/SideBar.css";

const Sidebar: any = () => {
  const [isItemOpen_1, setIsItemOpen_1] = useState(true);
  const [isItemOpen_2, setIsItemOpen_2] = useState(false);

  const toggleItem_1 = () => {
    setIsItemOpen_1(!isItemOpen_1);
  };

  const toggleItem_2 = () => {
    setIsItemOpen_2(!isItemOpen_2);
  };

  return (
    <div className="sidebar open">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="sidebar-header">
          <h2>SFC Tool</h2>
        </div>
      </Link>

      <ul className="sidebar-main-menu">

        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <li>Dashboard</li>
        </Link>

        <li onClick={toggleItem_1}>
          Data Analysis
          <span
            className={`arrow ${isItemOpen_1 ? "arrow-closed" : "arrow-open"}`}
          >
            &#9654;
          </span>
        </li>

        {isItemOpen_1 && (
          <ul className="sub-menu">
            <Link to="/meat_consumption" style={{ textDecoration: "none" }}>
              <li>Meat Consumption</li>
            </Link>

            <li>War Effect</li>
            <li>Tweet Trend</li>
          </ul>
        )}

        <li onClick={toggleItem_2}>
          Future Prediction
          <span
            className={`arrow ${isItemOpen_2 ? "arrow-closed" : "arrow-open"}`}
          >
            &#9654;
          </span>
        </li>

        {isItemOpen_2 && (
          <ul className="sub-menu">
            <li>Housing Price</li>
            <li>Weather</li>
          </ul>
        )}

        <li>About Us</li>
      </ul>
    </div>
  );
};

export default Sidebar;
