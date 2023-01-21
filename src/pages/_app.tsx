import '../styles/globals.css';

import { RecoilRoot } from 'recoil';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto flex h-5 w-full max-w-[375px] ">
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </div>
  );
}
