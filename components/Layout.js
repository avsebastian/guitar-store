import Head from 'next/head'
import Header from './Header'

const Layout = ({children, pagina}) => {
  return (
    <div>
       <Head>
        <title>Guitar-Store - {pagina}</title>
        <meta name="description" content="Guitar store app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      {children}
    </div>
  )
}

export default Layout 