import '../styles/globals.css';

import { RecoilRoot } from 'recoil';

import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head> 
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>Hollang</title>
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </div>
  );
}
