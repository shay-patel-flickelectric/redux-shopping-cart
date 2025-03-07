import React from "react";
import { Link } from "react-router";
import { useAppSelector } from "../../app/hooks";
import { getNumItems, getMemoizedNumItems } from "./cartSlice";
import styles from "./CartLink.module.css";

export function CartLink() {
  const numItems = useAppSelector(getMemoizedNumItems);
  return (
    <Link className={styles.link} to="/cart">
      <span className={styles.text}>
        🛒&nbsp;&nbsp;{numItems ? numItems : "Cart"}
      </span>
    </Link>
  );
}
