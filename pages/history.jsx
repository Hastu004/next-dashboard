import { Header } from "../components/Header";
import BarChart from "../components/BarChart";

export default function Home() {

  return (
    <main>
      <Header />
      <div className="p-4 grid md:grid-cols-4 grid-cols-1 gap-4">
        <BarChart/>
        <BarChart/>
        <BarChart/>
        <BarChart/>
        <BarChart/>
        <BarChart/>
        <BarChart/>
        <BarChart/>
        <BarChart/>
        <BarChart/>
        <BarChart/>
        <BarChart/>
      </div>
    </main>
  );
}