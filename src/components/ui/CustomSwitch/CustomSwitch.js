"use client";

import React, { useId } from "react";
import styles from "./CustomSwitch.module.scss";

export default function CustomSwitch({
  label,
  error,
  className = "",
  size = "md", // sm, md, lg
  id,
  ...props
}) {
  const generatedId = useId();
  const switchId = id || generatedId;

  const containerClasses = [
    styles.container,
    className
  ].filter(Boolean).join(" ");

  const wrapperClasses = [
    styles.switchWrapper,
    styles[size],
    error ? styles.hasError : ""
  ].filter(Boolean).join(" ");

  return (
    <div className={styles.wrapper}>
      <label htmlFor={switchId} className={containerClasses}>
        <div className={wrapperClasses}>
          <input
            id={switchId}
            type="checkbox"
            className={styles.input}
            {...props}
          />
          <div className={styles.track}>
            <div className={styles.thumb}></div>
          </div>
        </div>
        {label && <span className={styles.label}>{label}</span>}
      </label>
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}
