"use client";

import React, { useId } from "react";
import styles from "./CustomCheckbox.module.scss";

export default function CustomCheckbox({
  label,
  error,
  className = "",
  id,
  ...props
}) {
  const generatedId = useId();
  const checkboxId = id || generatedId;

  const containerClasses = [
    styles.container,
    className
  ].filter(Boolean).join(" ");

  return (
    <div className={styles.wrapper}>
      <label htmlFor={checkboxId} className={containerClasses}>
        <div className={styles.checkboxWrapper}>
          <input
            id={checkboxId}
            type="checkbox"
            className={styles.input}
            {...props}
          />
          <div className={`${styles.box} ${error ? styles.hasError : ""}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>
        {label && <span className={styles.label}>{label}</span>}
      </label>
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}
