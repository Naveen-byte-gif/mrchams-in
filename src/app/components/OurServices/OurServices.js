"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "../../Styles/OurServices/OurServices.css";

const services = [
  {
    title: "UI / UX Design",
    description:
      "We craft intuitive and engaging digital experiences tailored to your audience.",
    img: "/uxui.svg",
  },
  {
    title: "Mobile Development",
    description:
      "Developing robust mobile applications for Android and iOS platforms.",
    img: "/mobileDevelopment.svg",
  },
  {
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications.",
    img: "/webDevelopment.svg",
  },
  {
    title: "AI ML",
    description:
      "We deliver AI/ML solutions for predictive analytics, automation, and growth, empowering businesses with data-driven insights and efficiency.",
    img: "/mobileDevelopment.svg",
  },
  {
    title: "Cloud Services",
    description:
      "Cloud-based infrastructure, DevOps, and deployment solutions.",
    img: "/mobileDevelopment.svg",
  },
];

const OurServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // Default to desktop layout

  // Determine screen size only on client
  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(window.innerWidth < 768 ? 1 : 3);
    };

    updateVisibleCards(); // initial check
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? services.length - visibleCards : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + visibleCards >= services.length ? 0 : prev + 1
    );
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [visibleCards]); // include visibleCards to avoid mismatch on auto-scroll

  return (
    <section className="services-section py-5" id="ourServices">
      <div className="container">
        <h2 className="text-center section-title mb-5">Our Services</h2>
        <div className="position-relative">
          <div className="row justify-content-center">
            {services
              .slice(currentIndex, currentIndex + visibleCards)
              .map((service, index) => (
                <div key={index} className="col-md-4 service-card px-3">
                  <div className="card shadow-sm h-100 border-0">
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={400}
                      height={200}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{service.title}</h5>
                      <p className="card-text">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <button className="carousel-control-prev" onClick={handlePrev}>
            ‹
          </button>
          <button className="carousel-control-next" onClick={handleNext}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
