
import LineChart from "../components/LineChart";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SSRChart({ data, error }) {
  const [_, setLoading] = useState(true);
  const router = useRouter();
  const { startDate, endDate } = router.query;

  useEffect(() => {
    if (data) {
      process.nextTick(() => {
        setLoading(false);
      });
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <Link href={`/`}>
        <a className={styles.link}>Client Rendered Example</a>
      </Link>
      <h1>SSR Charts Example</h1>


      <h3>📈 Order count timeseries</h3>
      <LineChart data={data} />

    </div>
  );
}

export async function getServerSideProps({ query }) {
  try {
    const response = await fetch('https://dummyjson.com/products/category/smartphones');
    const data = response.json()
    console.log(data)
    return {
      props: {
        data
      },
    };
  } catch (error) {
    return {
      props: {
        error,
      },
    };
  }
}
