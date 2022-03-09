import Head from 'next/head'
import Link from 'next/link'
import { NavBar } from '../components/NavBar'
import styles from '../styles/Home.module.css'

//obligatoriamente las páginas deben tener la exportación por defecto
export default function HomePage() { //puede tener cualquier nombre no afecta
  return (
    <div className={styles.container}>

      <Head>
        <title>Home - Giancarlo</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="giancarlo, curso, next.js" />
      </Head>

      <NavBar/>


      <main className={styles.main}>
      
        <h1>Home Page</h1>

        <h1 className={styles.title}>
          {/* Ir a <a href="/about">About</a> */}
          Ir a <Link href="/about">About</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        
      </main>


    </div>
  )
}
