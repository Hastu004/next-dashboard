import { Header } from "../components/Header";
import RadarChart from "../components/RadarChart"

export default function Home() {

  return (
    <main>
      <Header />
      <div className="p-4 grid md:grid-cols-4 grid-cols-1 gap-4">
        <RadarChart/>
        <RadarChart/>
        <RadarChart/>
        <RadarChart/>
        <RadarChart/>
        <RadarChart/>
        <RadarChart/>
        <RadarChart/>
        <RadarChart/>
        <RadarChart/>
        <RadarChart/>
        <RadarChart/>
      </div>
    </main>
  );
}
