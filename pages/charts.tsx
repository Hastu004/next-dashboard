import SpeedoMeterChart from "../components/SpeedoMeterChart";
import { Header } from "../components/Header";
import { Key } from "react";

function ChartList({ charts }: any) {
  return (
    <main>
      <Header />
      <div className="p-4 grid md:grid-cols-4 grid-cols-1 gap-4">
        {charts.map((chart: { id: Key | null | undefined }) => {
          return (
            <div key={chart.id}>
              <SpeedoMeterChart chart={chart} />
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default ChartList;

export async function getStaticProps() {
  console.log("SERVER SIDE RENDERING");
  const response = await fetch("http://localhost:4000/charts");
  const data = await response.json();

  return {
    props: {
      charts: data,
    },
  };
}
