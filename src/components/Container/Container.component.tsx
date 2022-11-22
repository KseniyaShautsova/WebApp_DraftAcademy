import React from "react";
import styles from "./Container.module.css";

const Container = ({ children }: React.PropsWithChildren) => (
  <div className={styles.root}>
    {children}
  </div>
)

export default Container;