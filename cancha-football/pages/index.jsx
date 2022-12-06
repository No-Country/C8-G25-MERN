import Head from "next/head";
import axios from "axios";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Welcome from "../components/Home/index.js";
import TraerCanchas from "../components/TraerCanchas/TraerCanchas";

export default function Home({ canchas }) {
  return (
    <div className={styles.body}>
      <Head>
        <title>Canchas</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Welcome />

      <TraerCanchas canchas={canchas} />
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
 

  const {data} = await axios.get("http://localhost:3001/canchas");

  return {
    props: {
      canchas: data,
    },
  };
};
