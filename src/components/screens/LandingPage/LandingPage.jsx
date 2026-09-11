"use client";
import React from "react";
import Navbar from "./sections/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Features from "./sections/Features/Features";
import HowItWorks from "./sections/HowItWorks/HowItWorks";
import SearchDemo from "./sections/SearchDemo/SearchDemo";
import Developer from "./sections/Developer/Developer";
import CTA from "./sections/CTA/CTA";
import Footer from "./sections/Footer/Footer";
import styles from "./LandingPage.module.scss";
import ProductVideo from "./sections/ProductVideo/ProductVideo";
export default function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <Navbar />
      <main>
        <Hero />
        <ProductVideo/>
        <Features />
        <HowItWorks />
        <SearchDemo />
        <Developer />
        <CTA />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
