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
            <Link to="/data_analysis/meat_consumption" style={{ textDecoration: "none" }}>
              <li>Meat Consumption</li>
            </Link>

            {/* <Link to="/data_analysis/tweet_trend" style={{ textDecoration: "none" }}>
              <li>Tweet Trend</li>
            </Link> */}

            <Link to="/data_analysis/war_effect" style={{ textDecoration: "none" }}>
              <li>War Effect</li>
            </Link>
            <li></li>
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
            <Link to="/future_prediction/housing_price" style={{ textDecoration: "none" }}>
              <li>Housing Price</li>
            </Link>

            <Link to="/future_prediction/weather_forecast" style={{ textDecoration: "none" }}>
              <li>Weather</li>
            </Link>
          </ul>
        )}

        <li>About Us</li>
      </ul>
    </div>
  );
};

export default Sidebar;
