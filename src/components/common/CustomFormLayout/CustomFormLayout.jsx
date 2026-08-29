import React from "react";
import styles from "./CustomFormLayout.module.scss";

const CustomFormLayout = ({ children }) => {
  return <div className={styles.CustomFormLayout}>{children}</div>;
};

export default CustomFormLayout;
