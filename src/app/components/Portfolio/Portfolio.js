import Image from "next/image";
import styles from "../../Styles/Portfolio/Portfolio.module.css";

export default function Portfolio() {
  const projects = [
    {
      img: "/zaanvarPic.svg",
      title: "Zaanvar",
      desc: "Zaanvar is your ultimate online destination for all things pets. It connects pet owners with essential resources, products, and services to enhance their pets’ lives.",
      link: "#",
    },
    {
      img: "/rconSpacePic.svg",
      title: "Rcon Space",
      desc: "RCON is a cutting-edge construction management platform. It streamlines operations, enhances collaboration, and provides essential tools for professionals.",
      link: "#",
    },
  ];

  return (
    <div className="container py-5 mb-5" id="portfolio">
      <h2 className="text-center text-danger fw-bold mb-5">Portfolio</h2>

      <div className="row g-4">
        {projects.map((p, index) => (
          <div key={index} className="col-md-6">
            <div className={`${styles.card} fade-up`}>
              <div className={`${styles.imgWrapper}`}>
                <Image
                  src={p.img}
                  alt={p.title}
                  width={180}
                  height={180}
                  className="img-fluid"
                />
              </div>

              <div className={styles.textContent}>
                <h5 className="fw-bold">{p.title}</h5>
                <p className="text-muted">{p.desc}</p>
                <a href={p.link} className={styles.linkBtn}>
                  Visit Project →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
