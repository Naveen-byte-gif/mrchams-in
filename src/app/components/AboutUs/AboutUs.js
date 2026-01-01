"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "./AboutUs.css";

const AboutUs = () => {
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

  const imageAnimation = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <section className="about-us-section" id="about">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content - First on Mobile, Second on Desktop */}
          <motion.div className="col-lg-6 col-md-12 order-1 order-lg-2" {...fadeInRight}>
            <div className="about-content-wrapper">
              <motion.h2
                className="about-heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                About US
              </motion.h2>
              <motion.p
                className="about-description"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Mrchams is a full-service digital and software development
                company delivering high-performance, user-centric solutions for
                startups and enterprises.
              </motion.p>
            </div>
          </motion.div>

          {/* Images - Second on Mobile, First on Desktop */}
          <motion.div
            className="col-lg-6 col-md-12 mb-4 mb-lg-0 order-2 order-lg-1"
            {...fadeInLeft}
          >
            <div className="about-images-wrapper">
              {/* Background Image (partially visible) - Meeting room with sticky notes */}
              <motion.div className="about-image-back" {...imageAnimation}>
                <Image
                  src="/way-of-building-3.png"
                  alt="Team collaboration with sticky notes"
                  width={500}
                  height={400}
                  className="about-image about-back-image"
                  priority
                />
              </motion.div>

              {/* Foreground Image (overlapping) - Team meeting */}
              <motion.div
                className="about-image-front"
                {...imageAnimation}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              >
                <Image
                  src="/way-of-building-1.png"
                  alt="Team meeting and collaboration"
                  width={500}
                  height={400}
                  className="about-image about-front-image"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Abstract Graphic Elements */}
      <div className="about-graphics">
        {/* Top Left Green Shape */}
        <div className="about-graphic about-graphic-green-1"></div>

        {/* Top Right Blue Circles with Grid */}
        <div className="about-graphic about-graphic-blue-circles">
          <div className="blue-circle blue-circle-1"></div>
          <div className="blue-circle blue-circle-2"></div>
          <div className="blue-grid"></div>
        </div>

        {/* Mid Top Right Green Shape */}
        <div className="about-graphic about-graphic-green-2"></div>

        {/* Bottom Left Green Circle with Star */}
        <div className="about-graphic about-graphic-green-circle">
          <div className="green-circle-dotted"></div>
          <div className="green-star"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
