import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head'
import Header from '../components/header/header'; 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rhyno Valve Co</title>
        <link rel="icon" type="image/png" href="/rhyno-icon.png"></link>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
