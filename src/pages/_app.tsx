import '../styles/globals.css';

import { RecoilRoot } from 'recoil';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </div>
  );
}
