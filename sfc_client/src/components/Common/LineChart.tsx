import React from 'react';
import { Line } from 'react-chartjs-2';
import "../../assets/css/LineChart.css"


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
};

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  return (
    <div className="line-chart-container">
        <div className="line-chart">
        <Line data={data} />
        </div>
    </div>
)};

export default LineChart;
