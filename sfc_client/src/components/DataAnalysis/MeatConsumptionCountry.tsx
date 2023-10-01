import React, { useState } from "react";
import Sidebar from "../SideBar";
import ScrollableDropdown from "../Common/ScrollableDropdown";
import RangeSlider from "../Common/RangeSlider";
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
  >({ key: options[0].key, value: options[0].value });

  const handleSelect = (option: { key: string; value: string }) => {
    setSelectedOption(option);
  };

  const [selectedRange, setSelectedRange] = useState<[number, number]>([2000, 2023]);

  const handleRangeChange = (newRange: [number, number]) => {
    setSelectedRange(newRange);
  };

  const [result, setResult] = useState<string | null>(null);
  const handleButtonClick = () => {
    setResult('Country: ' + selectedOption?.key + ' & Range: ' + selectedRange[0] + ' - ' + selectedRange[1]);
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
          </div>
          
          <div className="selectDurationSlider">
          <RangeSlider onRangeChange={handleRangeChange}/>
          </div>
          
          <button onClick={handleButtonClick} className="btn btn-primary mccResultButton ">Get Statistics </button>
        </div>

        <div className="outputSection">
          {result && <p>{result}</p>}
        </div>

      </div>
    </div>
  );
}

export default MeatConsumptionCountry;
