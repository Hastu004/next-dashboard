import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Speedometer = () => {
  const data = {
    labels: ["Low", "Medium", "High"],
    datasets: [
      {
        label: "",
        data: [1,1,1],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        circumference: 180,
        rotation: 270,
        cutout: 95,
        borderRadius: 5,
      },
    ],
  };
  return (
    <>
      <div className="w-full md:col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
        <Doughnut data={data} />;
      </div>
    </>
  );
};

export default Speedometer;
