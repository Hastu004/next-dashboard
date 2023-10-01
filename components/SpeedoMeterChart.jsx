import React from "react";
import dynamic from "next/dynamic";

const ReactSpeedometer = dynamic(() => import("react-d3-speedometer"), {
  ssr: false,
});

function SpeedoMeterChart({ chart }) {
  return (
    <div className="w-full md:col-span-1 relative lg:h-[50vh] h-[30vh] m-auto p-4 border rounded-lg bg-black">
      <ReactSpeedometer
        value={chart.value}
        currentValueText={chart.title}
        customSegmentLabels={chart.customSegmentLabels}
        segments={chart.segments}
      />
      <p>{chart.description}</p>
    </div>
  );
}

export default SpeedoMeterChart;
