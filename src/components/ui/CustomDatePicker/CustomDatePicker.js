"use client";

import React, { useId } from "react";
import styles from "./CustomDatePicker.module.scss";

export default function CustomDatePicker({
  label,
  error,
  fullWidth = false,
  className = "",
  id,
  ...props
}) {
  const generatedId = useId();
  const dateId = id || generatedId;

  const containerClasses = [
    styles.container,
    fullWidth ? styles.fullWidth : "",
    className
  ].filter(Boolean).join(" ");

  const inputWrapperClasses = [
    styles.inputWrapper,
    error ? styles.hasError : ""
  ].filter(Boolean).join(" ");

  return (
    <div className={containerClasses}>
      {label && <label htmlFor={dateId} className={styles.label}>{label}</label>}
      <div className={inputWrapperClasses}>
        <input
          id={dateId}
          type="date"
          className={styles.input}
          {...props}
        />
        {/* A custom calendar icon overlaying the native date picker indicator */}
        <div className={styles.icon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </div>
      </div>
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}
