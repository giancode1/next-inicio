import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { NavBar } from '../../components/NavBar'

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact - Giancarlo</title>
        <meta name="description" content="Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>

        <h1>Contact Page</h1>

        <h1 className={styles.title}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/contact/index.jsx</code>
        </p>

        
      </main>


    </div>
  )
}
