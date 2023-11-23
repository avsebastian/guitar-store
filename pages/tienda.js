import React from 'react'
import Layout from '../components/Layout'
import Guitarra from '../components/Guitarra'
import styles from '../styles/grid.module.css'


const Tienda = ({guitarras}) => {
  return (
    <Layout title={'Tienda Virtual'}
            description="Tienda virtual, venta de guitarras, Guitar-Store">
         <main className='contenedor'>
            <h1 className='heading'>Nuestra Colección</h1>
            <div className={styles.grid}>
              {guitarras?.map(guitarra =>(
                <Guitarra key={guitarra.id}
                          data={guitarra.attributes}
                />
              ))}
            </div>
         </main>
    </Layout>
  )
}
export default Tienda


//RENDER STATIC
// export async function getStaticProps() {
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
//   const {data: guitarras} = await respuesta.json();

//   return{
//     props: {
//       guitarras
//     }
//   }
// }

export async function getServerSideProps() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
    const {data: guitarras} = await respuesta.json();
  
    return{
      props: {
        guitarras
      }
    }
  }

