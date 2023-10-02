import { useState } from "react";
import Sidebar from "../SideBar";
import ScrollableDropdown from "../Common/ScrollableDropdown";
import RangeSlider from "../Common/RangeSlider";
import PieChart from "../Common/PieChart";
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
    { key: "BGD", value: "Bangladesh" },
    { key: "BRA", value: "Brazil" },
    { key: "CAN", value: "Canada" },
    { key: "ETH", value: "Ethiopia" },
    { key: "EGY", value: "Egypt" },
    { key: "EU28", value: "Europe" },
    { key: "GHA", value: "Ghana" },
    { key: "IND", value: "India" },
    { key: "JPN", value: "Japan" },
    { key: "KOR", value: "Korea" },
    { key: "MEX", value: "Mexico" },
    { key: "NZL", value: "New Zeland" },
    { key: "USA", value: "USA" },
  ];

  // ---------------------------- 1st Pie Chart --------------------------------

  const [pieChartTitle_1, setPieChartTitle_1] = useState<string>("");

  const [selectedOption_1, setSelectedOption_1] = useState<
    { key: string; value: string } | undefined
  >({ key: options[0].key, value: options[0].value });

  const handleSelect_1 = (option: { key: string; value: string }) => {
    setSelectedOption_1(option);
  };

  const [selectedRange_1, setSelectedRange_1] = useState<[number, number]>([
    2000, 2023,
  ]);

  const handleRangeChange_1 = (newRange: [number, number]) => {
    setSelectedRange_1(newRange);
  };

  const [meatConsumptionData_1, setMeatConsumptionData_1] =
    useState<MeatConsumptionDataType | null>(null);

  const handleGetStatButtonClick_1 = async () => {
    try {
      const response_1 = await fetch(
        `http://127.0.0.1:8000/data_analysis/meat_consumption/api_1/get_all_type_countrywise/?country=${selectedOption_1?.key}&start_year=${selectedRange_1[0]}&end_year=${selectedRange_1[1]}`,
        {
          method: "GET",
        }
      );

      const data_1 = await response_1.json();
      setMeatConsumptionData_1(data_1);
      setPieChartTitle_1(
        `Consumption at ${data_1?.country} (${data_1?.start_year} - ${data_1?.end_year})`
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const pieChartData_1 = {
    labels: ["Beef", "Poultry", "Sheep", "Pork"],
    datasets: [
      {
        data: [
          Number(meatConsumptionData_1?.beef_consumption),
          Number(meatConsumptionData_1?.poultry_consumption),
          Number(meatConsumptionData_1?.sheep_consumption),
          Number(meatConsumptionData_1?.pig_consumption),
        ],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#ff6347"],
      },
    ],
  };

  // ---------------------------- 2nd Pie Chart --------------------------------

  const [pieChartTitle_2, setPieChartTitle_2] = useState<string>("");

  const [selectedOption_2, setSelectedOption_2] = useState<
    { key: string; value: string } | undefined
  >({ key: options[0].key, value: options[0].value });

  const handleSelect_2 = (option: { key: string; value: string }) => {
    setSelectedOption_2(option);
  };

  const [selectedRange_2, setSelectedRange_2] = useState<[number, number]>([
    2000, 2023,
  ]);

  const handleRangeChange_2 = (newRange: [number, number]) => {
    setSelectedRange_2(newRange);
  };

  const [meatConsumptionData_2, setMeatConsumptionData_2] =
    useState<MeatConsumptionDataType | null>(null);

  const handleGetStatButtonClick_2 = async () => {
    try {
      const response_2 = await fetch(
        `http://127.0.0.1:8000/data_analysis/meat_consumption/api_1/get_all_type_countrywise/?country=${selectedOption_2?.key}&start_year=${selectedRange_2[0]}&end_year=${selectedRange_2[1]}`,
        {
          method: "GET",
        }
      );

      const data_2 = await response_2.json();
      setMeatConsumptionData_2(data_2);
      setPieChartTitle_2(
        `Consumption at ${data_2?.country} (${data_2?.start_year} - ${data_2?.end_year})`
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    try {
      const response_1 = await fetch(
        `http://127.0.0.1:8000/data_analysis/meat_consumption/api_1/get_all_type_countrywise/?country=${selectedOption_1?.key}&start_year=${selectedRange_1[0]}&end_year=${selectedRange_1[1]}`,
        {
          method: "GET",
        }
      );

      const data_1 = await response_1.json();
      setMeatConsumptionData_1(data_1);
      setPieChartTitle_1(
        `Consumption at ${data_1?.country} (${data_1?.start_year} - ${data_1?.end_year})`
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const pieChartData_2 = {
    labels: ["Beef", "Poultry", "Sheep", "Pork"],
    datasets: [
      {
        data: [
          Number(meatConsumptionData_2?.beef_consumption),
          Number(meatConsumptionData_2?.poultry_consumption),
          Number(meatConsumptionData_2?.sheep_consumption),
          Number(meatConsumptionData_2?.pig_consumption),
        ],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#ff6347"],
      },
    ],
  };

  // ------------------------------------------------------------

  return (
    <div>
      <Sidebar />

      <div className="mainBody">
        <h5>Country-wise Meat Consumption Pattern</h5>

        {/* ---------------------------- 1st Pie Chart -------------------------------- */}

        <div className="inputSection">
          <div className="selectCountryDropdown">
            Country :
            <ScrollableDropdown options={options} onSelect={handleSelect_1} />
          </div>

          <div className="selectDurationSlider">
            <RangeSlider onRangeChange={handleRangeChange_1} />
          </div>

          <button
            onClick={handleGetStatButtonClick_1}
            className="btn btn-primary mccResultButton "
          >
            Get Statistics{" "}
          </button>
        </div>

        {/* ---------------------------- 2nd Pie Chart -------------------------------- */}

        {meatConsumptionData_1 && (
          <div className="inputSection_2">
            <div className="selectCountryDropdown">
              Country :
              <ScrollableDropdown options={options} onSelect={handleSelect_2} />
            </div>

            <div className="selectDurationSlider">
              <RangeSlider onRangeChange={handleRangeChange_2} />
            </div>

            <button
              onClick={handleGetStatButtonClick_2}
              className="btn btn-primary mccResultButton "
            >
              Compare Stat{" "}
            </button>
          </div>
        )}

        {/* --------------------------------------------------------- */}

        <div className="outputSection">
          {meatConsumptionData_1 && (
            <PieChart data={pieChartData_1} title={pieChartTitle_1} />
          )}

          {meatConsumptionData_2 && (
            <PieChart data={pieChartData_2} title={pieChartTitle_2} />
          )}
        </div>
      </div>
    </div>
  );
}

export default MeatConsumptionCountry;
