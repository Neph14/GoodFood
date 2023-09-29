import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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

const labels = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

const randomData = Array.from({ length: labels.length }, () =>
  Math.floor(Math.random() * 10000000)
);
const randomData2 = Array.from({ length: labels.length }, () =>
  Math.floor(Math.random() * 10000000)
);

export const data = {
  labels,
  datasets: [
    {
      label: "Last 6 days",
      data: randomData,
      backgroundColor: "rgba(90, 106, 207, 1)",
    },
    {
      label: "Last Week",
      data: randomData2,
      backgroundColor: "rgba(230, 232, 236, 1)",
    },
  ],
};

export function Chart() {
  return (
    <div className="w-screen lg:w-full h-auto">
      <Bar options={options} data={data} />
    </div>
  );
}
