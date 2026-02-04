"use client";

import Image from "next/image";
import teamData from "@/app/team/teamData.json";
import styles from "@/app/team/Team.module.css";

function getInitials(fullName) {
  return fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TeamSection() {
  return (
    <>
      <header className={styles.header}>
        <span className={styles.label}>Our Team</span>
        <h2 className={styles.title}>Meet Our Professionals</h2>
        <p className={styles.subtitle}>
          A dedicated team with role clarity, skills, and contact visibility – delivering impactful digital solutions.
        </p>
      </header>
      <div className={styles.teamGrid}>
        {teamData.map((member, index) => (
          <article
            key={member.id}
            className={styles.card}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className={styles.avatarWrap}>
              {member.avatar ? (
                <Image
                  src={member.avatar}
                  alt={member.fullName}
                  width={160}
                  height={160}
                  className={styles.avatar}
                />
              ) : (
                <span className={styles.avatarPlaceholder} aria-hidden>
                  {getInitials(member.fullName)}
                </span>
              )}
            </div>
            <h3 className={styles.name}>{member.fullName}</h3>
            <p className={styles.designation}>{member.designation}</p>
          </article>
        ))}
      </div>
    </>
  );
}
