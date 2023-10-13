
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'


const Header = () => {
  return (
    <header className={styles.header}>
        <div className="contenedor">
            <div>
                <Image width={300} 
                    height={100} 
                    src="/images/logo-guitar.svg" 
                    alt="logo-guitar"/>
            </div>
            <nav>
                <Link href="/">Inicio</Link>
                <Link href="/nosotros">Nosotros</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/tienda">Tienda</Link>
            </nav>

        </div>
    </header>
  )
}

export default Header
