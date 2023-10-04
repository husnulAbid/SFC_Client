import React from "react";
import { Line } from "react-chartjs-2";
import "../../assets/css/LineChart.css";

type LineChartProps = {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      fill: boolean;
    }[];
  };
  title: string;
};

const LineChart: React.FC<LineChartProps> = ({ data, title }) => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="line-chart-container">
      <h6>{title}</h6>

      <div className="line-chart">
        <Line data={data} options={options}/>
      </div>
    </div>
  );
};

export default LineChart;
