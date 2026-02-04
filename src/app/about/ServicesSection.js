"use client";

import { servicesData } from "@/app/services/servicesData";
import styles from "@/app/services/Services.module.css";

export default function ServicesSection() {
  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.title}>Core IT & Software Services</h2>
        <p className={styles.subtitle}>Implementation Overview</p>
        <p className={styles.tagline}>
          We design and deliver scalable, secure, and user-centric digital solutions tailored to business needs.
        </p>
      </header>
      <div className={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <article
            key={service.id}
            className={styles.card}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.cardIcon}>
              <i className={`bi bi-${service.icon}`} aria-hidden />
            </div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>{service.description}</p>
          </article>
        ))}
      </div>
    </>
  );
}
