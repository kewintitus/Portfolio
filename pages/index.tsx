import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kewin's Portfolio</title>
        <meta name="description" content="Portfolio website of kewin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
    </div>
  );
};

export default Home;
