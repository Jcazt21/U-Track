import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false, // Esto oculta la leyenda
    },
  },
};

const data = {
  labels: ["Acumulado", "Faltante"],
  datasets: [
    {
      label: "indice General",
      data: [3.67, 0.33],
      backgroundColor: ["#3d87ff", "#003791"],
    },
  ],
};

const PieChart: React.FC = () => {
  return <Pie data={data} options={options} />;
};

export default PieChart;
