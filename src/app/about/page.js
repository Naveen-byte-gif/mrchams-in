import Image from "next/image";
import Navbar from "@/app/components/NavBar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import AboutUs from "@/app/components/AboutUs/AboutUs";
import ServicesSection from "./ServicesSection";
import TeamSection from "./TeamSection";
import FounderClient from "@/app/founder/FounderClient";
import founderStyles from "@/app/founder/Founder.module.css";
import styles from "./About.module.css";

export const metadata = {
  title: "About Us | Mr Chams",
  description:
    "Mrchams is a full-service digital and software development company delivering high-performance, user-centric solutions.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className={styles.mainBelowNav}>
        <AboutUs />

        <section id="mission-vision" className={styles.sectionBlock}>
          <div className="container">
            <header className={styles.mvHeader}>
              <span className={styles.mvLabel}>Who We Are</span>
              <h2 className={styles.mvTitle}>Our Mission &amp; Vision</h2>
              <p className={styles.mvSubtitle}>
                We focus on outcomes — building reliable, user-first products
                that scale with your business.
              </p>
            </header>

            <div className={styles.mvGrid}>
              <article className={styles.mvCard}>
                <h3 className={styles.mvCardTitle}>Our Mission</h3>
                <p className={styles.mvCardText}>
                  To deliver high‑performance digital products through clean
                  engineering, thoughtful design, and clear communication —
                  helping startups and enterprises launch faster and grow
                  confidently.
                </p>
              </article>

              <article className={styles.mvCard}>
                <h3 className={styles.mvCardTitle}>Our Vision</h3>
                <p className={styles.mvCardText}>
                  To be a trusted technology partner known for building
                  future‑ready solutions that are scalable, secure, and
                  delightful to use.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="services" className={styles.sectionBlock}>
          <div className="container">
            <ServicesSection />
          </div>
        </section>
        <section id="founder" className={styles.sectionBlock}>
          <div className="container">
            <div className={`row align-items-center ${founderStyles.row}`}>
              <div
                className={`col-lg-6 col-xl-6 order-2 order-lg-1 ${founderStyles.contentCol}`}
              >
                <FounderClient />
              </div>
              <div
                className={`col-lg-6 col-xl-6 order-1 order-lg-2 ${founderStyles.imageCol}`}
              >
                <div className={founderStyles.imageWrap}>
                  <Image
                    src="/founder_image.png"
                    alt="Ranjith Soma - Founder of Mr.Chams"
                    width={520}
                    height={580}
                    className={founderStyles.founderImg}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className={styles.sectionBlock}>
          <div className="container">
            <TeamSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
