"use client";

import React from "react";
import HeroSection from "@/app/components/Hero-Section/HeroSection";
import { SparklesCore } from "../Hero-Section/SparklesCore";
import styles from "@/app/Styles/HeroSection/HeroWithSparkles.module.css";

const HeroWithSparkles = () => {
  return (
    <div className={styles.wrapper}>
      <SparklesCore
        className={styles.sparklesCanvas}
        particleColor="#ffffff"
        particleDensity={140}
        minSize={1}
        maxSize={3}
        speed={2}
      />

      {/* Hero Content */}
      <div className={styles.content}>
        <HeroSection />
      </div>
    </div>
  );
};

export default HeroWithSparkles;
