import '../styles/globals.css';
import Layout from '@components/common/layout';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Suspense, useEffect, useState } from 'react';
import { Router } from 'next/router';
import type { AppProps } from 'next/app';
import Loader from '@components/common/Loader';
import MetaHead from '@components/MetaHead';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
      useErrorBoundary: true,
    },
    mutations: { retry: 0, useErrorBoundary: true },
  },
});
declare global {
  interface Window {
    kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <Layout>
      <MetaHead />
      <Suspense fallback={<Loader />}>
        <RecoilRoot>
          <QueryClientProvider client={client}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </RecoilRoot>
      </Suspense>
    </Layout>
  );
}
