import '../styles/globals.css';

import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@components/common/layout';
import { GlobalStyle } from 'styles/globalStyle';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const [innerHeights, setInnerHeights] = useState<number>(0);
  useEffect(() => {
    setInnerHeights(window.innerHeight);
  }, []);
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>Hollang</title>
        <style></style>
      </Head>
      <RecoilRoot>
        <QueryClientProvider client={client}>
          <Component {...pageProps} />
          <GlobalStyle height={innerHeights}></GlobalStyle>
        </QueryClientProvider>
      </RecoilRoot>
    </Layout>
  );
}
