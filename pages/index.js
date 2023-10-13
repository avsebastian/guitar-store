import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guitar-Store</title>
        <meta name="description" content="Guitar store app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

        <h1 className="heading">
          Welcome to <a href="https://google.com">Guitar Store!</a>
        </h1>
    </div>
  )
}
