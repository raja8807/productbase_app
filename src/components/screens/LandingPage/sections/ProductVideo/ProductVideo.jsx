"use client";

import React, { useEffect, useRef } from "react";
import styles from "./ProductVideo.module.scss";

const ProductVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.25,
      },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.productVideo}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span>SEE PRODUCTBASE IN ACTION</span>

          <h2>
            Everything you need to build
            <br />
            <strong>smarter product search.</strong>
          </h2>

          <p>
            From importing your catalog to searching and managing products, see
            how ProductBase simplifies the entire workflow.
          </p>
        </div>

        <div className={styles.videoWrapper}>
          <video
            ref={videoRef}
            controls
            muted
            playsInline
            preload="auto"
            width="100%"
          >
            <source src="/videos/ProductBase Intro.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default ProductVideo;
