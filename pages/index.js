import Link from 'next/link'
import Layout from '../components/Layout'


export default function Home() {
  return (
    <div>
      <Layout title='Inicio'
              description='Blog de música, ventas de guitarras y más'>
        <h1 className='heading'>
          Welcome to <Link href="/nosotros">Guitar Store!</Link>
        </h1>
      </Layout>

        
    </div>
  )
}
