import Layout from '../components/Layout'
import styles from '../styles/carrito.module.css'


const Carrito = () => {
  return (
    <Layout title={'Carrito de compras'}
            description="Carrito de compras, Guitar-Store, tienda de música">
         <main className='contenedor'>
            <h1 className='heading'>Carrito</h1>

            <div>
              <div>
                <h2>Artículo</h2>
              </div>
            </div>

            <aside>
              <h3>Resumen del pedido</h3>
              <p>Total a pagar:</p>
            </aside>
            
         </main>
    </Layout>
  )
}

export default Carrito

