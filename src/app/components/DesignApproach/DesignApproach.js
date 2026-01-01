"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FiTrendingUp, 
  FiShield, 
  FiCheckCircle, 
  FiLock 
} from "react-icons/fi";
import { FaRocket } from "react-icons/fa";
import "./DesignApproach.css";

// Custom Code Brackets Icon Component
const CodeBracketsIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 6L4 12l4 6" />
    <path d="M16 6l4 6-4 6" />
  </svg>
);

const DesignApproach = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const cardAnimation = {
    initial: { opacity: 0, y: 40, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const cards = [
    {
      id: 1,
      icon: FaRocket,
      title: "UX-Driven Engineering",
      description: "We build with users in mind, turning insights and business goals into intuitive, high-impact experiences.",
      iconBgColor: "#000000",
      delay: 0.1,
    },
    {
      id: 2,
      icon: CodeBracketsIcon,
      title: "Developing Shared Understanding",
      description: "Cross-functional collaboration ensures clear alignment, faster execution, and predictable outcomes.",
      iconBgColor: "#60A5FA",
      delay: 0.2,
    },
    {
      id: 3,
      icon: FiTrendingUp,
      title: "Proven Experience and Expertise",
      description: "Industry-tested expertise and proven practices that deliver reliable, future-ready solutions.",
      iconBgColor: "#F472B6",
      delay: 0.3,
    },
    {
      id: 4,
      icon: FiShield,
      title: "Security & Intellectual Property (IP)",
      description: "End-to-end security and strict IP protection to safeguard your data and ideas.",
      iconBgColor: "#14B8A6",
      delay: 0.4,
      hasCheckmark: true,
    },
    {
      id: 5,
      icon: FiCheckCircle,
      title: "Code Reviews",
      description: "Clean, scalable code through structured reviews and best practices.",
      iconBgColor: "#F59E0B",
      delay: 0.5,
    },
    {
      id: 6,
      icon: FiLock,
      title: "Quality Assurance & Testing",
      description: "Comprehensive testing ensures stability, performance, and real-world reliability.",
      iconBgColor: "#8B5CF6",
      delay: 0.6,
    },
  ];

  return (
    <section id="design-approach" className="design-approach-section">
      <div className="container">
        {/* Title Section */}
        <motion.div className="design-approach-title-wrapper" {...fadeInUp}>
          <div className="title-accent-line"></div>
          <h2 className="design-approach-title">Our design and development approach</h2>
          <motion.p 
            className="design-approach-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            We follow a structured, user-centric process that blends design thinking, technical excellence, and quality assurance to deliver scalable, secure, and high-impact digital products.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="cards-grid">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                className="approach-card"
                {...cardAnimation}
                transition={{ ...cardAnimation.transition, delay: card.delay }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div 
                  className="card-icon-wrapper"
                  style={{ backgroundColor: card.iconBgColor }}
                >
                  <IconComponent className="card-icon" />
                  {card.hasCheckmark && (
                    <FiCheckCircle className="card-icon-checkmark" />
                  )}
                </div>
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DesignApproach;

