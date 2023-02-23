import '../styles/globals.css';

import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@components/common/layout';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>Hollang</title>
      </Head>
      <RecoilRoot>
        <QueryClientProvider client={client}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </RecoilRoot>
    </Layout>
  );
}
