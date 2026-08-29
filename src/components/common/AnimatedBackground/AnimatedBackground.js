"use client";

import React, { useEffect, useRef } from "react";
import styles from "./AnimatedBackground.module.scss";

export default function AnimatedBackground({ children, className = "" }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      sectionRef.current.style.setProperty("--mouse-x", x);
      sectionRef.current.style.setProperty("--mouse-y", y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={`${styles.animatedBackground} ${className}`} ref={sectionRef}>
      <div className={`${styles.parallaxWrapper} ${styles.wrapper1}`}>
        <div className={`${styles.bgCircle} ${styles.circle1}`}></div>
      </div>
      <div className={`${styles.parallaxWrapper} ${styles.wrapper2}`}>
        <div className={`${styles.bgCircle} ${styles.circle2}`}></div>
      </div>
      <div className={`${styles.parallaxWrapper} ${styles.wrapper3}`}>
        <div className={`${styles.bgCircle} ${styles.circle3}`}></div>
      </div>
      <div className={`${styles.parallaxWrapper} ${styles.wrapper4}`}>
        <div className={`${styles.bgCircle} ${styles.circle4}`}></div>
      </div>
      <div className={`${styles.parallaxWrapper} ${styles.wrapper5}`}>
        <div className={`${styles.bgCircle} ${styles.circle5}`}></div>
      </div>
      <div className={styles.contentLayer}>
        {children}
      </div>
    </div>
  );
}
