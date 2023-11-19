import Head from 'next/head'
import Header from './Header'

const Layout = ({children, pagina}) => {
  return (
    <div>
       <Head>
        <title>Guitar-Store - {pagina}</title>
      </Head>

      <Header />

      {children}
    </div>
  )
}

export default Layout 