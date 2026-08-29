"use client";

import React, { useId } from "react";
import styles from "./CustomTextArea.module.scss";

export default function CustomTextArea({
  label,
  error,
  fullWidth = false,
  className = "",
  rows = 4,
  id,
  ...props
}) {
  const generatedId = useId();
  const textAreaId = id || generatedId;

  const containerClasses = [
    styles.container,
    fullWidth ? styles.fullWidth : "",
    className
  ].filter(Boolean).join(" ");

  const textAreaClasses = [
    styles.textarea,
    error ? styles.hasError : ""
  ].filter(Boolean).join(" ");

  return (
    <div className={containerClasses}>
      {label && <label htmlFor={textAreaId} className={styles.label}>{label}</label>}
      <textarea
        id={textAreaId}
        className={textAreaClasses}
        rows={rows}
        {...props}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}
