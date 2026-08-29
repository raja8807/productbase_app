"use client";

import ProcessingData from "@/components/common/ProcessingDataScreen/ProcessingData";
import { useJob } from "@/context/JobContext";
import React, { useEffect, useState } from "react";
import styles from "./PoroductsListSaveLoading.module.scss";
import { useRouter } from "next/navigation";

const stages = [
  "Reading product catalog",
  "Validating products",
  "Preparing product data",
  "Generating embeddings",
  //   "Building search index",
];

const PoroductsListSaveLoading = () => {
  const { activeJob } = useJob();
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!activeJob) {
      router.push("/productbase");
    }
  }, [activeJob, router]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = prev < 40 ? 3 : prev < 70 ? 2 : 1;
        return Math.min(prev + increment, 95);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const currentStage =
    progress < 20
      ? 0
      : progress < 40
        ? 1
        : progress < 55
          ? 2
          : progress < 85
            ? 3
            : 4;

  return (
    <div className={styles.processing}>
      <div className={styles.content}>
        {/* Animated Icon */}
        <div className={styles.visual}>
          <div className={styles.orbit}>
            <div className={styles.dot} />
          </div>

          <div className={styles.icon}>
            <span>◆</span>
          </div>
        </div>

        {/* Heading */}
        <h2>Processing your data</h2>

        <p className={styles.description}>
          We&apos;re generating embeddings and building
          <br />
          the search index for your products.
        </p>

        {/* Progress */}
        <div className={styles.progressWrapper}>
          <div className={styles.progress}>
            <div
              className={styles.progressBar}
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <span className={styles.progressValue}>{progress}%</span>
        </div>

        {/* Stages */}
        <div className={styles.stages}>
          {stages.map((stage, index) => {
            const completed = index < currentStage;
            const active = index === currentStage;

            return (
              <div
                className={`${styles.stage} ${
                  completed ? styles.completed : active ? styles.active : ""
                }`}
                key={stage}
              >
                <div className={styles.stageIcon}>
                  {completed ? (
                    "✓"
                  ) : active ? (
                    <span className={styles.loader} />
                  ) : (
                    ""
                  )}
                </div>

                <div className={styles.stageText}>
                  <span>{stage}</span>

                  <small>
                    {completed
                      ? "Completed"
                      : active
                        ? "In progress"
                        : "Pending"}
                  </small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PoroductsListSaveLoading;
