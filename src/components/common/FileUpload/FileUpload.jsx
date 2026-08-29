"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./FileUpload.module.scss";

export default function FileUpload({ errorMessage, onFileSelect = () => {} }) {
  const inputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");



  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    const isExcel =
      selectedFile.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      selectedFile.name.toLowerCase().endsWith(".xlsx");

    if (!isExcel) {
      setError("Please upload an Excel (.xlsx) file.");
      return;
    }

    setError("");
    setFile(selectedFile);
    onFileSelect(selectedFile);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const droppedFile = event.dataTransfer.files?.[0];

    handleFile(droppedFile);
  };

  const handleBrowse = (event) => {
    const selectedFile = event.target.files?.[0];
    handleFile(selectedFile);
  };

  const removeFile = () => {
    setFile(null);
    setError("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className={styles.fileUpload}>
      <input
        ref={inputRef}
        type="file"
        accept=".xlsx"
        onChange={handleBrowse}
        hidden
      />

      <div
        className={`${styles.dropZone} ${isDragging ? styles.dragging : ""}`}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
      >
        <div className={styles.icon}>↑</div>

        <div className={styles.content}>
          <p className={styles.title}>Drop your Excel file here</p>

          <p className={styles.description}>
            or <span>browse from your computer</span>
          </p>

          <p className={styles.supported}>Supported format: .xlsx</p>
        </div>
      </div>

      {error && <p className={styles.error}>{error}</p>}
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
}
