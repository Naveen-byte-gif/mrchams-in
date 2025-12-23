// components/Navbar.js
import Image from "next/image";
import Link from "next/link";
import "../../Styles/NavBar/Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom fixed-top px-4 py-2">
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image
             src="/mrChams-Logo.svg"
            alt="Logo"
            width={100}
            height={50}
            className="d-inline-block align-top"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="#about" className="nav-link">About us</Link>
            </li>
            <li className="nav-item">
              <Link href="#ourServices" className="nav-link">Our Services</Link>
            </li>
            <li className="nav-item">
              <Link href="#portfolio" className="nav-link">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link href="#contact" className="nav-link">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
