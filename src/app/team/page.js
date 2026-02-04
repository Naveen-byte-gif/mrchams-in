import Image from "next/image";
import Navbar from "@/app/components/NavBar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import styles from "./Team.module.css";
import teamData from "./teamData.json";

export const metadata = {
  title: "Our Team | Mr Chams",
  description: "Meet the Mr.Chams team – professionals in software development, design, and digital solutions.",
};

function getInitials(fullName) {
  return fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TeamPage() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main className={styles.main}>
        <div className="container">
          <header className={styles.header}>
            <span className={styles.label}>Our Team</span>
            <h1 className={styles.title}>Meet Our Professionals</h1>
            <p className={styles.subtitle}>
              A dedicated team with role clarity, skills, and contact visibility – delivering impactful digital solutions.
            </p>
          </header>

          <section className={styles.teamGrid}>
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
                <h2 className={styles.name}>{member.fullName}</h2>
                <p className={styles.designation}>{member.designation}</p>
              </article>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
