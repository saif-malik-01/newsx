import Head from 'next/head'
import HomeCom from '../components/home';


export default function Home() {
  return (
    <>
      <Head>
        <title>NewsX</title>
        <meta name="description" content="A light weight news web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeCom/>
      </main>
    </>
  )
}
