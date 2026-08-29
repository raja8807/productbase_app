"use client";

import React from "react";
import styles from "./PageHead.module.scss";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const PageHead = ({ title, right, float, hasBackButton=false }) => {
  const router = useRouter();

  return (
    <div className={`${styles.PageHead} ${float ? styles.floating : ""}`}>
      <div className={styles.left}>
        {hasBackButton && <ChevronLeft onClick={router.back} />}
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.right}>{right}</div>
    </div>
  );
};

export default PageHead;
