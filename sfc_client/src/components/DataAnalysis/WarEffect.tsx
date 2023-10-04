import React from "react";
import Sidebar from "../SideBar";

import "../../assets/css/WarEffect.css"


function WarEffect() {

  const handleGetStatButtonClick_1 = async () => {
    try {
      const response_1 = await fetch(
        `http://127.0.0.1:5000/analysis/war_effect_data?metric_name=GDP&year_duration=15`,
        {
          method: "GET",
        }
      );

      const data_1 = await response_1.json();
      console.log(data_1)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <Sidebar />

      <div className="mainBody">
        <h5>War Effect on Bangladesh</h5>


        <button
            onClick={handleGetStatButtonClick_1}
            className="btn btn-primary weButton "
          >
            Get Data{" "}
          </button>
      </div>
    </div>
  );
}

export default WarEffect;
