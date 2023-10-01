import React, { useState } from "react";
import Sidebar from "../SideBar";
import ScrollableDropdown from "../Common/ScrollableDropdown";
import "../../assets/css/MeatConsumptionCountry.css";

function MeatConsumptionCountry() {
  const options = [
    { key: "AUS", value: "Australia" },
    { key: "BGD", value: "Bangladesh" },
    { key: "JPN", value: "Japan" },
    { key: "NZL", value: "New Zeland" },
  ];

  const [selectedOption, setSelectedOption] = useState<
    { key: string; value: string } | undefined
  >(undefined);

  const handleSelect = (option: { key: string; value: string }) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Sidebar />

      <div className="mainBody">
        <h5>Meat Consumption Country</h5>

        <div className="inputSection">

          <div className="selectCountryDropdown">
            Country :
            <ScrollableDropdown options={options} onSelect={handleSelect} />
            <p>Selected Option: {selectedOption?.key}</p>
          </div>
          
        </div>

      </div>
    </div>
  );
}

export default MeatConsumptionCountry;
