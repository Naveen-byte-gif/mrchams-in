import Image from "next/image";
import Navbar from "@/app/components/NavBar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import FounderClient from "./FounderClient";
import styles from "./Founder.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Founder | Mr Chams",
  description: "Ranjith Soma - Founder of Mr.Chams. Delivering impactful digital solutions for businesses.",
};

export default function FounderPage() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main className={styles.main}>
        <div className="container">
          <div className={`row align-items-center ${styles.row}`}>
            {/* Left: Text content with animations */}
            <div className={`col-lg-6 col-xl-6 order-2 order-lg-1 ${styles.contentCol}`}>
              <FounderClient />
            </div>
            {/* Right: Image */}
            <div className={`col-lg-6 col-xl-6 order-1 order-lg-2 ${styles.imageCol}`}>
              <div className={styles.imageWrap}>
                <Image
                  src="/founder_image.png"
                  alt="Ranjith Soma - Founder of Mr.Chams"
                  width={520}
                  height={580}
                  className={styles.founderImg}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
