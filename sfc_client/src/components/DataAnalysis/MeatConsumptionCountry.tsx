import React, { useState, useEffect } from "react";
import Sidebar from "../SideBar";
import ScrollableDropdown from "../Common/ScrollableDropdown";
import RangeSlider from "../Common/RangeSlider";
import "../../assets/css/MeatConsumptionCountry.css";

interface MeatConsumptionDataType {
  beef_consumption: string;
  pig_consumption: string;
  poultry_consumption: string;
  sheep_consumption: string;
  country: string;
  start_year: number;
  end_year: number;
}

function MeatConsumptionCountry() {
  const options = [
    { key: "AUS", value: "Australia" },
    { key: "CAN", value: "Canada" },
    { key: "JPN", value: "Japan" },
    { key: "NZL", value: "New Zeland" },
    { key: "BGD", value: "Bangladesh" },
    { key: "MEX", value: "Mexico" },
    { key: "EU28", value: "Europe" },
  ];

  const [selectedOption, setSelectedOption] = useState<
    { key: string; value: string } | undefined
  >({ key: options[0].key, value: options[0].value });

  const handleSelect = (option: { key: string; value: string }) => {
    setSelectedOption(option);
  };

  const [selectedRange, setSelectedRange] = useState<[number, number]>([
    2000, 2023,
  ]);

  const handleRangeChange = (newRange: [number, number]) => {
    setSelectedRange(newRange);
  };

  const [meatConsumptionData, setMeatConsumptionData] =
    useState<MeatConsumptionDataType | null>(null);

  const handleGetStatButtonClick = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/data_analysis/meat_consumption/api_1/get_all_type_countrywise/?country=${selectedOption?.key}&start_year=${selectedRange[0]}&end_year=${selectedRange[1]}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      setMeatConsumptionData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <Sidebar />

      <div className="mainBody">
        <h5>Country-wise Meat Consumption Pattern</h5>

        <div className="inputSection">
          <div className="selectCountryDropdown">
            Country :
            <ScrollableDropdown options={options} onSelect={handleSelect} />
          </div>

          <div className="selectDurationSlider">
            <RangeSlider onRangeChange={handleRangeChange} />
          </div>

          <button
            onClick={handleGetStatButtonClick}
            className="btn btn-primary mccResultButton "
          >
            Get Statistics{" "}
          </button>
        </div>

        <div className="outputSection">
          {meatConsumptionData && (
            <p>
              {" "}
              pig : {meatConsumptionData.pig_consumption} country:{" "}
              {meatConsumptionData.country} end year:{" "}
              {meatConsumptionData.end_year}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MeatConsumptionCountry;
