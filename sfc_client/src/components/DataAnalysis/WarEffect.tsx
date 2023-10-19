import { useState } from "react";

import Sidebar from "../SideBar";
import ScrollableDropdown from "../Common/ScrollableDropdown";
import LineChart from "../Common/LineChart";

import "../../assets/css/WarEffect.css";

const fetchWarEffectData = async (
  metric_name: string,
  year_duration: number
) => {
  const apiUrl = `http://127.0.0.1:5100/analysis/war_effect_data?metric_name=${metric_name}&year_duration=${year_duration}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const war_effect_data = await response.json();
    return war_effect_data;
  } catch (error: any) {
    throw new Error(`Error fetching data from the API: ${error.message}`);
  }
};

function WarEffect() {
  const optionsMetricType = [
    { key: "GDP", value: "GDP per capita (2010 US$)" },
    { key: "IVA", value: "Industry value added (2010 US$)" },
    { key: "MVA", value: "Manufacturing value added (2010 US$)" },
    { key: "EGS", value: "Exports of goods and services (US$)" },
    { key: "IGS", value: "Imports of goods and services (US$)" },
    { key: "GNE", value: "Gross national expenditure (constant LCU)" },
    { key: "GDI", value: "Gross domestic income (constant LCU)" },
  ];

  const [selectedMetricType, setSelectedMetricType] = useState<
    { key: string; value: string } | undefined
  >({ key: optionsMetricType[0].key, value: optionsMetricType[0].value });

  const [lineChartTitle, setLineChartTitle] = useState<string>("");
  const [lineChartYLabel, setLineChartYLabel] = useState<string>("");
  const [lineChartLegend, setLineChartLegend] = useState<string>("");
  const [lineChartLabel, setLineChartLabel] = useState<string[]>([]);
  const [lineChartData, setLineChartData] = useState<number[]>([]);

  const handleSelectedMetricType = async (optionsMetricType: {
    key: string;
    value: string;
  }) => {
    setSelectedMetricType(optionsMetricType);
  };

  const handleShowGraphButtonClick = async () => {
    try {
      const warEffectApiData = await fetchWarEffectData(String(selectedMetricType?.key), 15);
      const resultData = warEffectApiData["result_data"];
      const chartLabels = resultData.map((item: any) => item.Year);
      const chartDatas = resultData.map((item: any) => Number(item.Value));

      setLineChartLabel(chartLabels);
      setLineChartData(chartDatas);

      setLineChartTitle("Effects on " + String(selectedMetricType?.value).substring(0, String(selectedMetricType?.value).indexOf("(")));
      setLineChartYLabel(String(selectedMetricType?.value).substring(String(selectedMetricType?.value).indexOf("(") + 1, String(selectedMetricType?.value).indexOf(")")));
      setLineChartLegend(String(selectedMetricType?.key));

    } catch (error: any) {
      console.error(error.message);
    }
  };

  const chartData = {
    labels: lineChartLabel,
    datasets: [
      {
        label: lineChartLegend,
        data: lineChartData,
        borderColor: "#BCF5FF",
        fill: true,
      },
    ],
  };

  return (
    <div>
      <Sidebar />

      <div className="mainBody">
        <h5>War Effect on Bangladesh</h5>

        <div className="inputWarEffect">
          <div className="selectMetricTypeDropdown">
            Metric :
            <ScrollableDropdown
              options={optionsMetricType}
              onSelect={handleSelectedMetricType}
            />
          </div>

          <button
            onClick={handleShowGraphButtonClick}
            className="btn btn-primary weButton "
          >
            Show Graph{" "}
          </button>
        </div>

        <div className="outputWarEffectSection">
          <LineChart data={chartData} title={lineChartTitle} y_label={lineChartYLabel} />
        </div>
      </div>
    </div>
  );
}

export default WarEffect;
