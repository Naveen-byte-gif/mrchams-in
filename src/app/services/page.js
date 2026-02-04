import Navbar from "@/app/components/NavBar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import styles from "./Services.module.css";
import { servicesData } from "./servicesData";

export const metadata = {
  title: "Services | Mr Chams",
  description: "Core IT & Software Services – Custom development, web, mobile, UI/UX, and digital marketing.",
};

export default function ServicesPage() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main className={styles.main}>
        <div className="container">
          <header className={styles.header}>
            <h1 className={styles.title}>
              Core IT & Software Services
            </h1>
            <p className={styles.subtitle}>
              Implementation Overview
            </p>
            <p className={styles.tagline}>
              We design and deliver scalable, secure, and user-centric digital solutions tailored to business needs.
            </p>
          </header>

          <section className={styles.servicesGrid}>
            {servicesData.map((service, index) => (
              <article
                key={service.id}
                className={styles.card}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.cardAccent} />
                <div className={styles.cardIcon}>
                  <i className={`bi bi-${service.icon}`} aria-hidden />
                </div>
                <h2 className={styles.cardTitle}>{service.title}</h2>
                <p className={styles.cardDescription}>{service.description}</p>
              </article>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
