'use client'

import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  CloudUpload,
  Database,
  KeyRound,
  Search,
  Sparkles,
} from "lucide-react";
import styles from "./Hero.module.scss";
import { Image } from "react-bootstrap";
import LoadingScreen from "@/components/common/LoadingScreen/LoadingScreen";

const products = [
  ["Wireless Headphones", "Electronics", "$59.99"],
  ["Running Shoes", "Footwear", "$89.99"],
  ["Smart Watch", "Electronics", "$129.99"],
  ["Backpack", "Accessories", "$49.99"],
  ["Sunglasses", "Accessories", "$29.99"],
];



export const ProductVideo = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoadingScreen/>
      )}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        width="100%"
        onCanPlay={() => setIsLoading(false)}
      >
        <source
          src="/videos/demo.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <Sparkles size={13} /> AI-POWERED PRODUCT SEARCH
          </div>
          <h1>
            Smarter Product Search for <span>Modern Applications.</span>
          </h1>
          <p>
            ProductBase helps you add intelligent product search to your
            applications. Upload your product catalog, get an API key, and start
            delivering relevant results with AI-powered search.
          </p>
          <div className={styles.actions}>
            <a href="/auth" className={styles.primary}>
              Get Started Free <ArrowRight size={16} />
            </a>
            <a href="#docs" className={styles.secondary}>
              View Documentation
            </a>
          </div>
          <div className={styles.points}>
            <span>
              <Check size={14} /> No credit card required
            </span>
            <span>
              <Check size={14} /> Setup in minutes
            </span>
            <span>
              <Check size={14} /> Developer friendly
            </span>
          </div>
        </div>
        <div className={styles.dashboard}>
         {/* <Image src={'/images/screen.png'} alt="dashboard" fluid /> */}
         <ProductVideo/>
        </div>
      </div>
    </section>
  );
}
