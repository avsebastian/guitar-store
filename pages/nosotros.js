import React from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/nosotros.module.css'


const Nosotros = () => {
  return (
    <Layout title={'Nosotros'}
            description="Sobre nosotros, Guitar-Store, tienda de música">
         <main className='contenedor'>
            <h2 className='heading'>Nosotros</h2>
            <div className={styles.contenido}>
                <Image alt="Imagen sobre nosotros"  
                      src="/images/nosotros.jpg" 
                      width={1000} 
                      height={800}/>

              <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non lectus vel ante tristique sodales. Nullam placerat iaculis leo. Maecenas nec libero feugiat, scelerisque elit nec, suscipit magna. Suspendisse rutrum, nulla iaculis condimentum ultrices, erat quam eleifend nisi, eget consequat leo orci vitae augue. Praesent id vulputate ex. Nunc condimentum metus ultricies leo porttitor elementum. Nulla aliquam volutpat diam, non aliquam ante convallis at.</p>
                <p>

                Sed accumsan viverra porta. Pellentesque hendrerit dapibus augue, non eleifend lorem scelerisque vitae. Maecenas convallis ex tellus, sit amet imperdiet enim vestibulum eu. In ornare diam nisi, quis dapibus ante consequat nec. Suspendisse et nisl erat. Vivamus quis mi interdum sem maximus faucibus. Nulla et aliquet nisi. Integer diam lorem, ultricies eu tortor quis, feugiat tempus quam. Nulla pretium felis dolor, eu gravida urna eleifend efficitur. Integer convallis cursus diam, sit amet pulvinar ex auctor vitae. Etiam massa justo, ultrices vel felis a, commodo pretium arcu.
                </p>
              </div>

            </div>
         </main>
    </Layout>
  )
}

export default Nosotros

