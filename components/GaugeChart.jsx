import React from "react";
import dynamic from "next/dynamic";

const ReactSpeedometer = dynamic(() => import("react-d3-speedometer"), {
  ssr: false,
});

const GaugeChart = () => {
  return (
    <>
      <div className="w-full md:col-span-1 relative lg:h-[50vh] h-[30vh] m-auto p-4 border rounded-lg bg-white">
        <ReactSpeedometer
          value={777}
          currentValueText="Happiness Level"
          customSegmentLabels={[
            {
              text: "Very Bad",
              position: "INSIDE",
              color: "#555",
            },
            {
              text: "Bad",
              position: "INSIDE",
              color: "#555",
            },
            {
              text: "Ok",
              position: "INSIDE",
              color: "#555",
              fontSize: "19px",
            },
            {
              text: "Good",
              position: "INSIDE",
              color: "#555",
            },
            {
              text: "Very Good",
              position: "INSIDE",
              color: "#555",
            },
          ]}
        />
      </div>
    </>
  );
};

export default GaugeChart;
