"use client";

import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Zaanvar",
      category: "PET TECH PLATFORM",
      subtitle: "Pet Adoption & Community Platform",
      image: "/emami-east-bengal.png",
    },
    {
      title: "Rconspace",
      category: "PROPTECH PLATFORM",
      subtitle: "Real Estate & Community Management System",
      image: "/parathought.png",
    },
    {
      title: "MilloraPay",
      category: "DIGITAL PAYMENTS",
      subtitle: "Secure Digital Payments Experience",
      image: "/stride-future.png",
    },
    {
      title: "Zaanvar App",
      category: "MOBILE DESIGN",
      subtitle: "Pet Care & Social Networking App",
      image: "/punjab-fc.png",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Header Section */}
        <div className="projects-header">
          <div className="projects-label">OUR FEATURED PROJECTS</div>
          <h2 className="projects-title">
            Engineering reliable, user-centric digital platforms{" "}
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {/* First Row - 2 Cards */}
          <div className="projects-row">
            {/* Card 1 - Emami East Bengal */}
            <div className="project-col project-col-6">
              <div className="project-card">
                <div className="project-content">
                  <span className="project-category">
                    {projects[0].category}
                  </span>
                  <h3 className="project-title">{projects[0].title}</h3>
                  <p className="project-subtitle">{projects[0].subtitle}</p>
                </div>
                <div className="project-image-wrapper">
                  <div className="project-image-container">
                    <img
                      src={projects[0].image}
                      alt={projects[0].title}
                      className="project-image"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div
                      className="project-image-placeholder"
                      style={{ display: "none" }}
                    >
                      <i className="bi bi-laptop"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Parathought */}
            <div className="project-col project-col-6">
              <div className="project-card">
                <div className="project-content">
                  <span className="project-category">
                    {projects[1].category}
                  </span>
                  <h3 className="project-title">{projects[1].title}</h3>
                  <p className="project-subtitle">{projects[1].subtitle}</p>
                </div>
                <div className="project-image-wrapper">
                  <div className="project-image-container">
                    <img
                      src={projects[1].image}
                      alt={projects[1].title}
                      className="project-image"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div
                      className="project-image-placeholder"
                      style={{ display: "none" }}
                    >
                      <i className="bi bi-laptop"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - 3 Cards */}
          <div className="projects-row">
            {/* Card 3 - Stride Future */}
            <div className="project-col project-col-4">
              <div className="project-card">
                <div className="project-content">
                  <span className="project-category">
                    {projects[2].category}
                  </span>
                  <h3 className="project-title">{projects[2].title}</h3>
                  <p className="project-subtitle">{projects[2].subtitle}</p>
                </div>
                <div className="project-image-wrapper">
                  <div className="project-image-container">
                    <img
                      src={projects[2].image}
                      alt={projects[2].title}
                      className="project-image"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div
                      className="project-image-placeholder"
                      style={{ display: "none" }}
                    >
                      <i className="bi bi-laptop"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Punjab FC Mobile */}
            <div className="project-col project-col-4">
              <div className="project-card">
                <div className="project-content">
                  <span className="project-category">
                    {projects[3].category}
                  </span>
                  <h3 className="project-title">{projects[3].title}</h3>
                  <p className="project-subtitle">{projects[3].subtitle}</p>
                </div>
                <div className="project-image-wrapper">
                  <div className="project-image-container">
                    <img
                      src={projects[3].image}
                      alt={projects[3].title}
                      className="project-image"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div
                      className="project-image-placeholder"
                      style={{ display: "none" }}
                    >
                      <i className="bi bi-phone"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 - CTA Card */}
            <div className="project-col project-col-4">
              <div className="project-card project-cta-card">
                <div className="project-cta-content">
                  <span className="project-cta-text">View all projects</span>
                  <div className="project-cta-icon">
                    <i className="bi bi-arrow-up-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
