import React from "react";
import "../assets/css/MainBody.css";

import Sidebar from "./SideBar";

function Dashboard() {
  return (
    <div>
      <Sidebar />

      <div className="mainBody">
        <h5>Dashboard</h5>
      </div>
    </div>
  );
}

export default Dashboard;
