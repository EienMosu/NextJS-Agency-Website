import React from "react";
// SASS
import styles from "../styles/Navbar.module.scss";
// Router
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">AV0CAD0.</Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/products/design">DESING</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/development">DEVELOPMENT</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/production">PRODUCTION</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/photography">PHOTOGRAPHY</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
