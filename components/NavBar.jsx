// import Link from 'next/link'
import { ActiveLink } from './ActiveLink';
import styles from './NavBar.module.css';

export const NavBar = () => {
  return (
    // <nav className={styles['menu-nav']}>
    //     <Link href="/">Home</Link>
    //     <Link href="/about">About</Link>
    //     <Link href="/contact">Contact</Link>
    // </nav>

    <nav className={styles.menu_nav}>
        <ActiveLink text="Home" href="/" />
        <ActiveLink text="About" href="/about" />
        <ActiveLink text="Contact" href="/contact" />
    </nav>
  )
}
