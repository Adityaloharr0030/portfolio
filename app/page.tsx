"use client";

import { useEffect } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

export default function Home() {
  useEffect(() => {
    /* ---- Scroll Progress Bar ---- */
    const scrollBar = document.getElementById("scroll-progress");
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pctScroll = total > 0 ? (window.scrollY / total) * 100 : 0;
      if (scrollBar) scrollBar.style.width = pctScroll + "%";
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    /* ---- Intersection Observer – AOS ---- */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll("[data-aos]").forEach((el) => observer.observe(el));

    /* ---- AOS delay ---- */
    document.querySelectorAll("[data-aos-delay]").forEach((el: any) => {
      el.style.transitionDelay = el.dataset.aosDelay + "ms";
    });

    /* ---- Smooth scroll for anchor links ---- */
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (!href) return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Scroll Progress */}
      <div id="scroll-progress"></div>

      <Preloader />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Certificates />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
