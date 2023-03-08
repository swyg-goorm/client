import Head from 'next/head';

export default function MetaHead() {
  return (
    <Head>
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <title>Hollang</title>
      <meta name="theme-color" content="#000000" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no"
      />
      <meta name="og:description" content="홀랑에 홀랑 빠져봐!" />
      <meta property="og:title" content="홀랑:Hollang:" />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://user-images.githubusercontent.com/62178788/223585054-6d1c0b3a-1f2d-4f0b-b238-1c5b3c6a1292.png"
      />
      <meta
        property="og:image"
        content="https://user-images.githubusercontent.com/62178788/223585054-6d1c0b3a-1f2d-4f0b-b238-1c5b3c6a1292.png"
      />
      <meta property="og:article:author" content="홀랑에 홀랑 빠져봐!" />
    </Head>
  );
}
