import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, pagina}) => {
  return (
    <div>
       <Head>
        <title>Guitar-Store - {pagina}</title>
      </Head>

      <Header />

      {children}
      <Footer/>
    </div>
  )
}

export default Layout 