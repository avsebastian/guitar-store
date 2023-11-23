import Layout from "../components/Layout"
import Link from "next/link"

const Pagina404 = () => {
  return (
    <Layout title="Página no encontrada">
        <p className="error">Página no encontrada</p>
        <Link href='/'>
            <a className="error-enlace">
                Ir a inicio
            </a>
        </Link>
    </Layout>
    
  )
}


export default Pagina404
