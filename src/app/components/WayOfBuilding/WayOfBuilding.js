"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "./WayOfBuilding.css";

const WayOfBuilding = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const imageAnimation = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const testimonialAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
  };

  const sections = [
    {
      id: 1,
      imagePosition: "right",
      image: "/way-of-building-1.png",
    },
    {
      id: 2,
      imagePosition: "left",
      image: "/way-of-building-2.png",
    },
    {
      id: 3,
      imagePosition: "right",
      image: "/way-of-building-3.png",
    },
  ];

  return (
    <section id="way-of-building" className="way-of-building-section">
      <div className="container">
        {/* Title Section */}
        <motion.div className="title-section text-center mb-5" {...fadeInUp}>
          <p className="way-of-building-subtitle">Way of building</p>
          <div className="title-divider"></div>
          <h1 className="way-of-building-title">Great Software</h1>
        </motion.div>

        {/* Content Sections */}
        {sections.map((section, index) => (
          <div key={section.id} className="content-section-wrapper">
            <div
              className={`row align-items-center ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              } mb-5 mb-md-5 mb-sm-2`}
            >
              {/* Text Content */}
              <motion.div
                className="col-lg-6 col-md-12 mb-4 mb-lg-0"
                {...(index % 2 === 0 ? fadeInLeft : fadeInRight)}
              >
                <motion.div
                  className="content-text"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <motion.h2
                    className="content-heading"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                  >
                    Build the right team to scale
                  </motion.h2>
                  <motion.p
                    className="content-paragraph"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Finding the right talent is not easy. We help you find the
                    talent that suits your needs, follows your processes, and
                    sticks with you long term (not the case with freelancers).
                  </motion.p>
                  <motion.p
                    className="content-paragraph"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Our delivery model helps you cut costs and deliver within
                    budget.
                  </motion.p>
                  <motion.div
                    className="testimonial-box"
                    {...testimonialAnimation}
                  >
                    <p className="testimonial-text">
                      "Sinfonia is quick to identify larger problems with the
                      Software so we decided to expand our scope to build new
                      modules."
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Image Content */}
              <motion.div
                className="col-lg-6 col-md-12"
                {...(index % 2 === 0 ? fadeInRight : fadeInLeft)}
              >
                <motion.div className="image-wrapper" {...imageAnimation}>
                  <motion.div
                    className="image-container"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={section.image}
                      alt={`Team collaboration ${section.id}`}
                      width={600}
                      height={400}
                      className="section-image"
                      priority={index === 0}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WayOfBuilding;
