import React from "react";
import Sidebar from "../SideBar";

import "../../assets/css/WarEffect.css"


const fetchWarEffectData = async (metric_name: string, year_duration: number) => {
  const apiUrl = `http://127.0.0.1:5000/analysis/war_effect_data?metric_name=${metric_name}&year_duration=${year_duration}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const war_effect_data = await response.json();
    return war_effect_data
  } catch (error: any) {
    throw new Error(`Error fetching data from the API: ${error.message}`);
  }
};


function WarEffect() {

  const handleShowGraphButtonClick = async () => {
    try {
      const warEffectApiData = await fetchWarEffectData('GDP', 10);
      console.log(warEffectApiData)

    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <Sidebar />

      <div className="mainBody">
        <h5>War Effect on Bangladesh</h5>


        <button
            onClick={handleShowGraphButtonClick}
            className="btn btn-primary weButton "
          >
            Show Graph{" "}
          </button>
      </div>
    </div>
  );
}

export default WarEffect;