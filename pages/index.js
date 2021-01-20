import Head from 'next/head'
import Header from '@components/header'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1 >
          Bem vindo  <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}
