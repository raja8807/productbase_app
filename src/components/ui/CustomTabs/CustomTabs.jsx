"use client";

import React from "react";
import styles from "./CustomTabs.module.scss";

export default function CustomTabs({ tabs = [], activeTab, onTabChange }) {
  if (!tabs || tabs.length === 0) return null;

  return (
    <div className={styles.tabsBar}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`${styles.tabBtn} ${activeTab === tab ? styles.activeTab : ""}`}
          onClick={() => {
            if (onTabChange) onTabChange(tab);
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
