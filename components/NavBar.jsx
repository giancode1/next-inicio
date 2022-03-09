// import Link from 'next/link'
import { ActiveLink } from './ActiveLink';
import styles from './NavBar.module.css';

//Usar ese arreglo para construir el menú de forma semi-dinámica
const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const NavBar = () => {
  return (
    <nav className={styles.menu_nav}>
      {
        menuItems.map( ({ text, href }) => (
          <ActiveLink text={text} href={href} key={href} />
        ))
      
      }
        {/* <ActiveLink text="Home" href="/" />
        <ActiveLink text="About" href="/about" />
        <ActiveLink text="Contact" href="/contact" />
        <ActiveLink text="Pricing" href="/pricing" /> */}
    </nav>
  )
}
