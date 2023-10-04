import React from "react";
import { Line } from "react-chartjs-2";
import "../../assets/css/LineChart.css";

import { Chart } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);

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
      annotation: {
        annotations: [
          {
            type: "line" as const,
            mode: "vertical",
            scaleID: "x",
            value: "1971", // Specify the label where you want the line
            borderColor: "red", // Color of the vertical line
            borderWidth: 2, // Line width
          },
        ],
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
