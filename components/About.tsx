"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./About.module.css";

function StatCard({ number, label, suffix = "+" }: { number: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 1500;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * number));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [number]);

  return (
    <div className={styles.statCard} ref={ref}>
      <span className={styles.statNumber}>{count}{suffix}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

export default function About() {
  const systemData = {
    name: "Aditya Sunil Lohar",
    location: "Jalgaon, Maharashtra, India",
    status: "Open to Internships",
    education: "B.Tech Computer Engineering",
    institution: "COET, NMKC Jalgaon",
    graduation: "2027 (Expected)",
    languages: ["English", "Hindi", "Marathi"],
    philosophy: "Write code that solves real problems — fast, clean, and scalable."
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">&gt; system.info</span>
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        </div>

        <div className={styles.aboutGrid}>
          {/* JSON-style data display */}
          <div className={styles.jsonCard} data-aos="fade-right">
            <div className={styles.jsonHeader}>
              <span className={styles.jsonFile}>developer.json</span>
              <div className={styles.jsonDots}>
                <span></span><span></span><span></span>
              </div>
            </div>
            <div className={styles.jsonBody}>
              <code className={styles.jsonCode}>
                <span className={styles.jsonBrace}>{"{"}</span>
                <br />
                {Object.entries(systemData).map(([key, value], i) => (
                  <div key={key} className={styles.jsonLine}>
                    <span className={styles.jsonKey}>&quot;{key}&quot;</span>
                    <span className={styles.jsonColon}>: </span>
                    {Array.isArray(value) ? (
                      <span className={styles.jsonValue}>[{value.map((v, j) => (
                        <span key={j}>&quot;{v}&quot;{j < value.length - 1 ? ", " : ""}</span>
                      ))}]</span>
                    ) : (
                      <span className={styles.jsonString}>&quot;{value}&quot;</span>
                    )}
                    {i < Object.entries(systemData).length - 1 && <span className={styles.jsonComma}>,</span>}
                  </div>
                ))}
                <span className={styles.jsonBrace}>{"}"}</span>
              </code>
            </div>
          </div>

          {/* Right side: Stats + Info */}
          <div className={styles.aboutRight} data-aos="fade-left">
            <div className={styles.statsGrid}>
              <StatCard number={3} label="Years Coding" />
              <StatCard number={3} label="Projects Built" />
              <StatCard number={10} label="Technologies" />
              <StatCard number={200} label="GitHub Commits" />
            </div>

            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <i className="fa-solid fa-graduation-cap"></i>
                <div>
                  <h4>Education</h4>
                  <p>B.Tech CE — COET, NMKC Jalgaon</p>
                  <span>2023 – 2027</span>
                </div>
              </div>
              <div className={styles.infoCard}>
                <i className="fa-solid fa-code-branch"></i>
                <div>
                  <h4>Coursework</h4>
                  <p>DSA · DBMS · OS · CN · Web Dev</p>
                </div>
              </div>
            </div>

            <div className={styles.aboutActions}>
              <span className={styles.statusPill}>
                <span className={styles.statusDot}></span> Open to Internships
              </span>
              <a href="/resume.pdf" target="_blank" download="Aditya_Lohar_Resume.pdf" className="btn btn-primary">
                <i className="fa-solid fa-download"></i> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
