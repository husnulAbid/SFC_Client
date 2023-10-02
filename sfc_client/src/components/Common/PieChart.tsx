// PieChart.tsx
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'
import "../../assets/css/PieChart.css"


interface PieChartProps {
  data: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
    }[];
  };
  title: string;
}


const PieChart: React.FC<PieChartProps> = ({ data, title }) => {

  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div>
      <h2>{title}</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;


