import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Newsletter } from "../components/layout/Newsletter";
import { Showcase } from "../components/Shocase";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Showcase />
      </main>
    </div>
  );
};

export default Home;
