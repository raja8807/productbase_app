"use client";

import React, { useId } from "react";
import styles from "./CustomRadio.module.scss";

export default function CustomRadio({
  label,
  error,
  className = "",
  id,
  ...props
}) {
  const generatedId = useId();
  const radioId = id || generatedId;

  const containerClasses = [
    styles.container,
    className
  ].filter(Boolean).join(" ");

  return (
    <div className={styles.wrapper}>
      <label htmlFor={radioId} className={containerClasses}>
        <div className={styles.radioWrapper}>
          <input
            id={radioId}
            type="radio"
            className={styles.input}
            {...props}
          />
          <div className={`${styles.circle} ${error ? styles.hasError : ""}`}>
            <div className={styles.dot}></div>
          </div>
        </div>
        {label && <span className={styles.label}>{label}</span>}
      </label>
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}
