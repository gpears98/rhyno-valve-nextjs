import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { useRef, MutableRefObject } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const placeholderRef = useRef(null);

  return (
    <>
      <Head>
        <title>Rhyno Valve Co</title>
        <link rel="icon" type="image/png" href="/rhyno-icon.png"></link>
      </Head>
      <Header placeholderRef={placeholderRef} />
      <div ref={placeholderRef} className="placeholder"></div>
      <div className="contentWrapper">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
