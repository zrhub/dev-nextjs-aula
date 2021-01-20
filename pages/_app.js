import  { AppProps } from 'next/app';

import '@styles/globals.css';

/*
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
*/

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
