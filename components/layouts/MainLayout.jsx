import Head from "next/head";
import { NavBar } from "../NavBar";
import styles from "./MainLayout.module.css";

export const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Giancarlo</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="giancarlo, curso, next.js" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};