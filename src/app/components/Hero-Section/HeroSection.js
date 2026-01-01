"use client";

import React from "react";
import "../../Styles/HeroSection/HeroSection.css";

const HeroSection = () => {
  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Effects */}
      <div className="hero-background-effects">
        <div className="hero-particle hero-particle-1"></div>
        <div className="hero-particle hero-particle-2"></div>
        <div className="hero-particle hero-particle-3"></div>
        <div className="hero-particle hero-particle-4"></div>
        <div className="hero-particle hero-particle-5"></div>
        <div className="hero-particle hero-particle-6"></div>
        <div className="hero-particle hero-particle-7"></div>
        <div className="hero-particle hero-particle-8"></div>
        <div className="hero-gradient-orb hero-gradient-orb-1"></div>
        <div className="hero-gradient-orb hero-gradient-orb-2"></div>
        <div className="hero-gradient-orb hero-gradient-orb-3"></div>
        <div className="hero-gradient-orb hero-gradient-orb-4"></div>
        {/* Floating Geometric Shapes */}
        <div className="hero-geometric-shape hero-shape-square hero-shape-1"></div>
        <div className="hero-geometric-shape hero-shape-triangle hero-shape-2"></div>
        <div className="hero-geometric-shape hero-shape-circle hero-shape-3"></div>
        <div className="hero-geometric-shape hero-shape-square hero-shape-4"></div>
        <div className="hero-geometric-shape hero-shape-triangle hero-shape-5"></div>
        <div className="hero-geometric-shape hero-shape-circle hero-shape-6"></div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Text Content */}
          <div className="col-lg-6 col-md-12 hero-content-wrapper">
            <div className="hero-text-content">
              <h1 className="hero-headline">
                Great <span className="highlight-purple">Product</span> is built
                by great <span className="highlight-purple">teams</span>
              </h1>
              <p className="hero-subheadline">
                We help build and manage a team of world-class developers to
                bring your vision to life
              </p>
              <button 
                className="btn hero-cta-button"
                onClick={scrollToFooter}
              >
                Let's get started!
              </button>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="col-lg-6 col-md-12 hero-illustration-wrapper">
            <div className="hero-illustration">
              <img
                src={"/Hero-Wrapper.png"}
                alt="Team collaboration illustration"
                className="img-fluid hero-illustration-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
