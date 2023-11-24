import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { fechaFormateada } from '../../utils/helpers'
import styles from '../../styles/post.module.css';

export default function Post({post}) {


    const { Titulo, contenido, imagen, publishedAt } = post[0].attributes

    const router = useRouter();

    return (
        <Layout title={`${Titulo}`}>
             <article className={`${styles.post} ${styles['mt-3']}`}>
                <Image src={imagen.data.attributes.formats.medium.url} 
                        alt={`Imagen blog ${Titulo}`}
                        width={1000}
                        height={600}
                />
                <div className={styles.contenido}>
                <h3>
                    {Titulo}
                    </h3>
                <p className={styles.fecha}>{fechaFormateada(publishedAt)}</p>
                <p className={styles.resumen}>{contenido}</p>
       
      </div>
    </article>
        </Layout>
       
      )
}

export async function getServerSideProps({query: {url}}) {

    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`);
    const {data: post} = await respuesta.json();

    return {
        props: {
            post
        }
    }
}
