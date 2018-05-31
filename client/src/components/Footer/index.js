import React from "react";
import styles from "./styles.scss";

const Footer = (props, context) => (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles["list-item"]}>About Us</li>
            <li className={styles["list-item"]}>Support</li>
            <li className={styles["list-item"]}>Blog</li>
            <li className={styles["list-item"]}>Press</li>
            <li className={styles["list-item"]}>API</li>
            <li className={styles["list-item"]}>Jobs</li>
            <li className={styles["list-item"]}>Privacy</li>
            <li className={styles["list-item"]}>Terms</li>
            <li className={styles["list-item"]}>Directory</li>
            <li className={styles["list-item"]}>Language</li>
          </ul>
        </nav>
      </div>
      <div className={styles.column}>
        <span className={styles.copyright}>© 2018 pystagram</span>
      </div>
    </footer>
);

export default Footer;
