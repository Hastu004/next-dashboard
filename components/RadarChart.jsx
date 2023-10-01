import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = () => {

    const RadarData = {
        labels: ["Mental", "Constantes vitales", "Fisológico", "Físico", "General"],
        datasets: [
          {
            label: "Puntuación general",
            backgroundColor: "rgba(34, 202, 236, .2)",
            borderColor: "rgba(34, 202, 236, 1)",
            pointBackgroundColor: "rgba(34, 202, 236, 1)",
            poingBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(34, 202, 236, 1)",
            data: [8, 10, 12, 9, 7.5]
          }
        ]
      };
      const RadarOptions = {
        scale: {
          ticks: {
            min: 0,
            max: 16,
            stepSize: 2,
            showLabelBackdrop: false,
            backdropColor: "rgba(203, 197, 11, 1)"
          },
          angleLines: {
            color: "rgba(255, 255, 255, .3)",
            lineWidth: 1
          },
          gridLines: {
            color: "rgba(255, 255, 255, .3)",
            circular: true
          }
        },
        
      };
      

  return (
    <>
      <div className="w-full md:col-span-1 relative lg:h-[51vh] h-[40vh] m-auto p-4 border rounded-lg bg-green-100">
      <Radar data={RadarData} options={RadarOptions} />
      </div>
    </>
  );
};

export default RadarChart;
