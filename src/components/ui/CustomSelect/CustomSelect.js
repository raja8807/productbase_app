"use client";

import React, { useId } from "react";
import styles from "./CustomSelect.module.scss";

export default function CustomSelect({
  label,
  error,
  options = [],
  fullWidth = false,
  className = "",
  id,
  placeholder = "Select an option",
  value,
  onSelect = () => {},
  ...props
}) {
  const generatedId = useId();
  const selectId = id || generatedId;

  const containerClasses = [
    styles.container,
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const selectWrapperClasses = [
    styles.selectWrapper,
    error ? styles.hasError : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClasses}>
      {label && (
        <label htmlFor={selectId} className={styles.label}>
          {label}
        </label>
      )}
      <div className={selectWrapperClasses}>
        <select
          id={selectId}
          className={styles.select}
          value={value}
          defaultValue={value}
          onChange={(e) => {
            const selectedOption = options.find(
              (o) => o.value === e.target.value,
            );

            onSelect(selectedOption, e.target.value, e);
          }}
          {...props}
        >
          {placeholder && (
            <option value="" disabled className={styles.placeholder}>
              {placeholder}
            </option>
          )}
          {options.map((opt, index) => (
            <option key={index} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className={styles.chevron}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}
