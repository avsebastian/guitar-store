import Image from "next/image";
import styles from '../styles/guitarras.module.css';
import Link from "next/link";


const Guitarra = ({data}) => {

  const {descripcion, imagen, nombre, precio, url} = data;


  return (
    <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.formats.medium.url} 
             alt={`Imagen guitarra ${nombre}`}
             width={400}
             height={600}
      />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>{`$ ${precio}`}</p>
        <Link href={`/guitarras/${url}`}>
          <a className={styles.enlace}>
            Ver Producto
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Guitarra