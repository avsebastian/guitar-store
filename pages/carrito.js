import Layout from '../components/Layout'
import styles from '../styles/carrito.module.css'


const Carrito = () => {
  return (
    <Layout title={'Carrito de compras'}
            description="Carrito de compras, Guitar-Store, tienda de música">
         <main className='contenedor'>
            <h1 className='heading'>Carrito</h1>

            <div className={styles.contenido}>
              <div className={styles.carrito}>
                <h2>Artículo</h2>
              </div>
              
              <aside className={styles.resumen}>
              <h3>Resumen del pedido</h3>
              <p>Total a pagar:</p>
            </aside>

          </div>
         </main>
    </Layout>
  )
}

export default Carrito

