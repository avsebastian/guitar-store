
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import { useRouter } from 'next/router'


const Header = () => {

  const router = useRouter();

  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
            <Link href={'/'}>
              <a>
                <Image width={300} 
                       height={100} 
                       src="/images/logo-guitar.svg" 
                       alt="logo-guitar"
                />
              </a>
            </Link>
            <nav className={styles.navegacion}>
                <Link href="/">
                  <a className={router.pathname === '/' ? styles.active : ''}>
                    Inicio
                  </a>
                </Link>
                <Link href="/nosotros">
                  <a className={router.pathname === '/nosotros' ? styles.active : ''}>
                    Nosotros
                  </a>
                  </Link>
                <Link href="/blog">
                <a className={router.pathname === '/blog' ? styles.active : ''}>
                    blog
                  </a>
                  </Link>
                <Link href="/tienda">
                  <a className={router.pathname === '/tienda' ? styles.active : ''}>
                  Tienda
                  </a>
                </Link>
            </nav>
        </div>
    </header>
  )
}

export default Header
