import React, { useState } from "react";

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
      <div className="sidebar-header">
        <h2>Dashboard</h2>
      </div>

      <ul className="sidebar-main-menu">
        
      <li onClick={toggleItem_1}>
            Data Analysis
            {!isItemOpen_1 && (
                <span className="arrow-closed">&#9654;</span>
            )}
            {isItemOpen_1 && (
                <span className="arrow-open">&#9654;</span>
            )}
            
        </li>

        {isItemOpen_1 && (
          <ul className="sub-menu">
            <li>Meat Consumption</li>
            <li>War Effect</li>
            <li>Tweet Trend</li>
          </ul>
        )}

        <li onClick={toggleItem_2}>
            Future Prediction
            {!isItemOpen_2 && (
                <span className="arrow-closed">&#9654;</span>
            )}
            {isItemOpen_2 && (
                <span className="arrow-open">&#9654;</span>
            )}
            
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
