"use client";

import styles from "./Founder.module.css";

export default function FounderClient() {
  return (
    <div className={styles.card}>
      <p className={styles.label}>Founder</p>
      <h1 className={styles.name}>Ranjith Soma</h1>
      <p className={styles.role}>
        Founder of <span className={styles.company}>Mr.Chams</span>
      </p>
      <div className={styles.divider} />
      <div className={styles.bio}>
        <p>
          Hello, I&apos;m Ranjith, the Founder of Mr.Chams. With a deep passion for
          technology and innovation, I started Mr.Chams with the vision of
          building a company that delivers impactful digital solutions for
          businesses across industries.
        </p>
        <p>
          My goal has always been to create a culture that blends creativity,
          precision, and reliability — values that guide every project we
          undertake. Under my leadership, Mr.Chams has grown into a trusted
          partner for clients seeking web development, AI/ML integration,
          mobile applications, and cutting-edge UI/UX design.
        </p>
        <p>
          I believe in empowering businesses through smart, scalable, and
          future-ready software solutions that truly make a difference.
        </p>
      </div>
    </div>
  );
}
