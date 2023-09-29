import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const randomData = Array.from({ length: labels.length }, () =>
  Math.floor(Math.random() * 5000)
);

const randomData2 = Array.from({ length: labels.length }, () =>
  Math.floor(Math.random() * 5000)
);

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: randomData,
      borderColor: "rgba(90, 106, 207, 1)",
      backgroundColor: "rgba(90, 106, 207, 1)",
    },
    {
      label: "Dataset 2",
      data: randomData2,
      borderColor: "rgba(199, 206, 255, 1)",
      backgroundColor: "rgba(199, 206, 255, 1)",
    },
  ],
};

export function Chart() {
  return <Line options={options} data={data} />;
}
