import '../styles/globals.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Avior</title>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp