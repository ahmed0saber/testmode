import '../styles/globals.css'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
      <Head>
        <meta charset="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="theme-color" content="#F8F9FA"/>
        <meta name="msapplication-navbutton-color" content="#F8F9FA"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="#F8F9FA"/>
        <meta name="description" content="TestMode is where you can test your skills and get certified."/>
        <meta name="keywords" content="testmode, test, skill test, coding, programming, design, c++, cpp, html, css, js, javascript, certificate, leaderboard, ahmed0saber, Ahmed Saber"/>
        <meta name="author" content="Ahmed Saber, ahmed0saber, ahmed0saber33@gmail.com"/>
        <meta name="og:title" content="TestMode"/>
        <meta name="og:description" content="TestMode is where you can test your skills and get certified."/>
        <meta property="og:image" content="https://drive.google.com/u/0/uc?id=1BUNKEX4ivBy4ZQX55XnouVAJpwTvRrMi&export=download"/>
        <link rel="icon" href="https://drive.google.com/u/0/uc?id=1BUNKEX4ivBy4ZQX55XnouVAJpwTvRrMi&export=download" type="image/x-icon"/>
        <title>TestMode</title>
        <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@500&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
      <Footer/>
    </>
}

export default MyApp
