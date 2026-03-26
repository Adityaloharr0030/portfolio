import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((sec) => {
        const el = sec as HTMLElement;
        if (window.scrollY >= el.offsetTop - 120) {
          current = el.getAttribute("id") || "home";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "System.info" },
    { id: "skills", label: "Tech_Stack" },
    { id: "projects", label: "Deployments" },
    { id: "achievements", label: "Logs" },
    { id: "certificates", label: "Certs" },
    { id: "contact", label: "Ping_Me" },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.navContainer}>
        <a href="#home" className={styles.navLogo} onClick={closeMenu}>
          <span className={styles.logoBracket}>{"<"}</span>
          <span className={styles.logoText}>AL</span>
          <span className={styles.logoBracket}>{"/>"}</span>
        </a>

        <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`${styles.navLink} ${activeSection === item.id ? styles.active : ""}`}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.navRight}>
          <a href="/resume.pdf" target="_blank" download="Aditya_Lohar_Resume.pdf" className="btn btn-nav">
            <i className="fa-solid fa-download"></i> Resume
          </a>
          <button
            className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
