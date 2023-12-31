import { Header } from "../components/Header";
import { List, ListItem, Card } from "@material-tailwind/react";


function ChartList({ charts }: any) {
  return (
    <main>
      <Header />
      <div className="p-10 grid md:grid-cols-5 grid-cols-1">
        {charts.map((chart:any) => {
          return (
             <Card className="w-96">
             <List>
               <ListItem className="bg-purple-800">{chart.id}</ListItem>
               <ListItem>{chart.title}</ListItem>
               <ListItem>{chart.description}</ListItem>
             </List>
           </Card>
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
