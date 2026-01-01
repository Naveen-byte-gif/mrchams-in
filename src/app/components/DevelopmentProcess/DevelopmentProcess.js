"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./DevelopmentProcess.module.css";

const DevelopmentProcess = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(`.${styles.developmentProcessSection}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const steps = [
    {
      id: 1,
      number: "1",
      title: "Assemble the right team",
      description:
        "We vet and choose the right team for you.",
      position: "top",
    },
    {
      id: 2,
      number: "2",
      title: "Sprint planning",
      description:
        "Team collaborates to clarify tasks and ensure shared understanding.",
      position: "bottom",
    },
    {
      id: 3,
      number: "3",
      title: "Tech architecture",
      description:
        "Break monolithic apps into microservices for faster, independent development.",
      position: "top",
    },
    {
      id: 4,
      number: "4",
      title: "Standups & weekly demos",
      description:
        "Keep everyone aligned and able to raise concerns.",
      position: "bottom",
    },
    {
      id: 5,
      number: "5",
      title: "Code reviews",
      description:
        "Detect performance issues and code problems before release.",
      position: "top",
    },
    {
      id: 6,
      number: "6",
      title: "Iterative delivery",
      description:
        "Implement in checkpoints instead of a single deadline.",
      position: "bottom",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const timelineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="development-process" className={styles.developmentProcessSection}>
      {/* Background Curves */}
      <div className={styles.backgroundCurves}>
        <svg
          className={styles.curveTop}
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 200C360 150 720 100 1080 120C1260 130 1380 140 1440 145V0H0V200Z"
            fill="url(#gradientTop)"
            opacity="0.05"
          />
          <defs>
            <linearGradient id="gradientTop" x1="0" y1="0" x2="1440" y2="200">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className={styles.curveBottom}
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0C360 50 720 100 1080 80C1260 70 1380 60 1440 55V200H0V0Z"
            fill="url(#gradientBottom)"
            opacity="0.05"
          />
          <defs>
            <linearGradient id="gradientBottom" x1="0" y1="0" x2="1440" y2="200">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className={styles.container}>
        {/* Title Section */}
        <motion.div
          className={styles.titleSection}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.titleDivider}></div>
          <h1 className={styles.mainTitle}>
            How development through Alcaline works
          </h1>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          className={styles.timelineContainer}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Steps */}
          <div className={styles.stepsContainer}>
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`${styles.stepWrapper} ${
                  step.position === "top" ? styles.stepTop : styles.stepBottom
                }`}
                variants={stepVariants}
              >
                {/* Connection Line */}
                <div
                  className={`${styles.connectionLine} ${
                    step.position === "top"
                      ? styles.connectionLineTop
                      : styles.connectionLineBottom
                  }`}
                />

                {/* Step Box */}
                <motion.div className={styles.stepBox}>
                  <div className={styles.stepNumber}>{step.number}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Timeline Line */}
          <div className={styles.timelineWrapper}>
            <motion.div
              className={styles.timelineLine}
              variants={timelineVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              style={{ transformOrigin: "left" }}
            />
            {/* Trophy Icon at the end */}
            <motion.div
              className={styles.trophyIcon}
              initial={{ opacity: 0, scale: 0 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              🏆
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;

