"use client";

import { useEffect, useState } from "react";
import styles from "./BackToTop.module.css";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button 
      className={`${styles.backTop} ${visible ? styles.visible : ""}`} 
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}
