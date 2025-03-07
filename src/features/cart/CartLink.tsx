import React from "react";
import { Link } from "react-router";
import styles from "./CartLink.module.css";

export function CartLink() {
  return (
    <Link to="/cart" className={styles.link}>
      <span className={styles.text}>🛒&nbsp;&nbsp;Cart</span>
    </Link>
  );
}
