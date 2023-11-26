
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
            <nav className='navegacion'>
                <Link href="/">
                  <a className={router.pathname === '/' ? 'active' : ''}>
                    Inicio
                  </a>
                </Link>
                <Link href="/nosotros">
                  <a className={router.pathname === '/nosotros' ? 'active' : ''}>
                    Nosotros
                  </a>
                  </Link>
                  <Link href="/tienda">
                    <a className={router.pathname === '/tienda' ? 'active' : ''}>
                    Tienda
                    </a>
                  </Link>
                  <Link href="/blog">
                  <a className={router.pathname === '/blog' ? 'active' : ''}>
                    Blog
                  </a>
                </Link>
                <Link href="/carrito">
                  <a className={router.pathname === '/carrito' ? 'active' : ''}>
                      <Image width={30} 
                             height={25} 
                             src="/images/carrito.png" 
                             alt="img carritos"
                      />
                  </a>
                </Link>
                
            </nav>
        </div>
    </header>
  )
}

export default Header
