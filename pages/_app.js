import '../styles/globals.css'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@500&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
      <Footer/>
    </>
}

export default MyApp
