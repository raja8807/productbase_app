import React from "react";
import styles from "./CustomCard.module.scss";

const CustomCard = ({
  children,
  head,
  leftElement,
  rightElement,
  noPadding,
}) => {
  return (
    <div
      className={`${styles.CustomCard} ${noPadding ? styles.noPadding : ""}`}
      // data-aos='fade-up'
    >
      {head && (
        <div className={styles.topBar}>
          <div className={styles.left}>
            {head && <h2>{head}</h2>}
            {leftElement}
          </div>
          {rightElement}
        </div>
      )}
      <div className={`${styles.content} ${noPadding ? styles.noPadding : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default CustomCard;
