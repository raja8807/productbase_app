"use client";
import React from "react";
import { Check, Search } from "lucide-react";
import styles from "./SearchDemo.module.scss";





export const ProductVideo = () => {
  return (
     <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      width="100%"
    >
      <source
        src="/videos/demo.mp4"
        type="video/mp4"
      />
    </video>
  );
};


export default function SearchDemo() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <small>SEE IT IN ACTION</small>
          <h2>
            Search That <span>Understands</span>
          </h2>
          <p>
            Go beyond keyword matching. ProductBase uses hybrid semantic search
            to understand context and return the most relevant products.
          </p>
          <div className={styles.checks}>
            <div>
              <Check size={15} /> Semantic search with AI
            </div>
            <div>
              <Check size={15} /> Handles natural language queries
            </div>
            <div>
              <Check size={15} /> Relevant results every time
            </div>
          </div>
        </div>
        <div className={styles.demo}>
         <ProductVideo/>
        </div>
      </div>
    </section>
  );
}
