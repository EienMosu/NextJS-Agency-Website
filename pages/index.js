import Head from "next/head";
// Components
import Intro from "../components/Intro";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import { data, users } from "../data";
// SASS
import styles from "../styles/Home.module.scss";

export default function Home({ services, userData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Agency NextJS Example</title>
        <meta name="description" content="First NextJS Project - Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <Services services={services} />
      <Testimonials users={userData} />
    </div>
  );
}

// Fetching data before rendering Pages or Components!!!
export const getStaticProps = async () => {
  // const response = await axios.post("url", data, {headers:{token: "xyz"}})
  const services = data;
  const userData = users;

  return {
    props: { services, userData },
  };
};
