import Image from "next/image";
import styles from "./page.module.css";
import HomeAllPages from "./Pages/Home/Home-All-Pages";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <HomeAllPages />
      </div>
    </>
  );
}
