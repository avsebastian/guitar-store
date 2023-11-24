import Image from "next/image";
import Link from 'next/link';
import styles from '../styles/post.module.css';
import { fechaFormateada } from '../utils/helpers';


const Post = ({post}) => {

  const {contenido, imagen, Titulo, url, publishedAt } = post;

  return (
    <article >
      <Image src={imagen.data.attributes.formats.medium.url} 
             alt={`Imagen blog ${Titulo}`}
             width={600}
             height={400}
      />
      <div className={styles.contenido}>
        <h3>
          {Titulo}
        </h3>
        <p className={styles.fecha}>{fechaFormateada(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>
        <Link href={`/blog/${url}`}>
          <a className={styles.enlace}>
            Leer Post
          </a>
        </Link>
      </div>
    </article>
  )
}

export default Post
