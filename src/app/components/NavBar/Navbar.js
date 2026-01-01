"use client";

// components/Navbar.js
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import "../../Styles/NavBar/Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  // Navigation items based on HomeAllPages sections
  const navItems = [
    { name: "Home", href: "#home", section: "home" },
    { name: "About Us", href: "#about", section: "about" },
    { name: "Way of Building", href: "#way-of-building", section: "way-of-building" },
    { name: "Development Process", href: "#development-process", section: "development-process" },
    { name: "Design Approach", href: "#design-approach", section: "design-approach" },
    { name: "Projects", href: "#projects", section: "projects" },
    { name: "Hire", href: "#hire", section: "hire" },
  ];

  // Handle smooth scroll
  const handleNavClick = (e, href) => {
    e.preventDefault();
    closeMobileMenu();
    
    // Small delay to allow menu to close smoothly
    setTimeout(() => {
      if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const element = document.querySelector(href);
      if (element) {
        const offset = 110; // Navbar height + floating offset
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  // Handle mobile menu toggle
  const handleMobileMenuToggle = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    
    if (newState) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove("menu-open");
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Get all sections
      const sections = navItems.map((item) => {
        const element = document.querySelector(item.href);
        return { id: item.section, element, href: item.href };
      });

      // Check if we're at the top (home section) - within first 300px
      if (scrollPosition < 300) {
        setActiveSection("home");
        return;
      }

      // Check sections from bottom to top to find the active one
      const viewportOffset = 120; // Offset from top of viewport for navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          
          // Check if section is in viewport
          if (rect.top <= viewportOffset && rect.bottom >= viewportOffset) {
            setActiveSection(section.id);
            return;
          }
        }
      }

      // Fallback: if scrolled past all sections, activate the last one
      const lastSection = sections[sections.length - 1];
      if (lastSection && lastSection.element) {
        const rect = lastSection.element.getBoundingClientRect();
        if (rect.top < viewportOffset) {
          setActiveSection(lastSection.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle window resize to close mobile menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.classList.remove("menu-open");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only handle if mobile menu is open
      if (!isMobileMenuOpen) return;

      // Check if click is outside menu and toggle button
      if (
        menuRef.current &&
        toggleRef.current &&
        !menuRef.current.contains(event.target) &&
        !toggleRef.current.contains(event.target)
      ) {
        closeMobileMenu();
      }
    };

    // Add event listener when menu is open
    if (isMobileMenuOpen) {
      // Use setTimeout to avoid immediate trigger on menu open
      setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
      }, 100);
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, []);

  return (
    <nav className={`modern-navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link 
          href="/" 
          className="navbar-brand"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Image
            src="/mrChams-Logo.svg"
            alt="MrChams Logo"
            width={120}
            height={50}
            className="navbar-logo"
            priority
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          ref={toggleRef}
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={handleMobileMenuToggle}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <div 
          ref={menuRef}
          className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}
        >
          <ul className="navbar-nav">
            {navItems.map((item) => (
              <li key={item.section} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link ${
                    activeSection === item.section ? "active" : ""
                  }`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <span className="nav-link-text">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
          
          {/* Contact Us Button */}
          <a
            href="#footer"
            className="navbar-contact-btn"
            onClick={(e) => handleNavClick(e, "#footer")}
          >
            Contact us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
