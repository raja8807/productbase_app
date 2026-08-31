"use client";

import React, { memo } from "react";
import styles from "./CustomTabs.module.scss";

const CustomTabs = memo(function CustomTabs({
  tabs = [],
  setActiveTabIndex,
  activeTabIndex,
  onTabChange,
}) {
  if (!tabs || tabs.length === 0) return null;

  return (
    <div className={styles.tabsBar}>
      {tabs.map((tab, tIdx) => (
        <button
          key={tab.title}
          className={`${styles.tabBtn} ${activeTabIndex === tIdx ? styles.activeTab : ""}`}
          onClick={() => {
            if (onTabChange) onTabChange(tab);
            setActiveTabIndex(tIdx);
          }}
        >
          {tab?.title}
        </button>
      ))}
    </div>
  );
});

export default CustomTabs;
