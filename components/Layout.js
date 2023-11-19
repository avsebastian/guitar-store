import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, title = '', description = ''}) => {
  return (
    <div>
       <Head>
        <title>{`Guitar-Store - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>

      <Header />

      {children}
      <Footer/>
    </div>
  )
}

export default Layout 