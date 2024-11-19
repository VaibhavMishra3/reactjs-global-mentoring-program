import React from 'react';
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>React App</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App;
