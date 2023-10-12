import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import React from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  indice: number;
}

const PieChart: React.FC<PieChartProps> = ({ indice }) => {
  const faltante = indice < 4 ? 4 - indice : 0;

  const data = {
    labels: ["Acumulado", "Faltante"],
    datasets: [
      {
        label: "Índice General",
        data: [indice, faltante],
        backgroundColor: ["#3d87ff", "#003791"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false, // Esto oculta la leyenda
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
