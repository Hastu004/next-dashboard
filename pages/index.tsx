import { Header } from "../components/Header";
import GaugeChart from "../components/GaugeChart";


export default function Home() {

  return (
    <main>
      <Header />
      <div className="p-4 grid md:grid-cols-4 grid-cols-1 gap-4">
        <GaugeChart/>
        <GaugeChart/>
        <GaugeChart/>
        <GaugeChart/>
        <GaugeChart/>
        <GaugeChart/>
        <GaugeChart/>
        <GaugeChart/>
        <GaugeChart/>
        <GaugeChart/>
        <GaugeChart/>
        <GaugeChart/>
      </div>
    </main>
  );
}
