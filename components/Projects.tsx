"use client";

import styles from "./Projects.module.css";

const projects = [
  {
    icon: "fa-solid fa-code",
    title: "Ani Editor",
    subtitle: "AI-Powered Web Code Editor",
    category: "Web IDE",
    description:
      "A full-featured, browser-based IDE delivering a desktop-class coding experience. Combines a smart CodeMirror editor with an integrated OpenAI-powered AI assistant, live HTML/CSS/JS preview, SQL playground with in-memory SQLite, and a security-first Node.js backend.",
    features: [
      "AI code generation, bug fixing & optimization via OpenAI",
      "Multi-file editor with tab management & auto-save",
      "Live sandboxed preview rendering HTML/CSS/JS in real time",
      "Security-first: rate limiting, XSS protection, CSP via Helmet.js",
    ],
    techStack: ["React.js", "Vite", "CodeMirror", "Node.js", "Express.js", "OpenAI API", "SQLite", "Helmet.js"],
    github: "https://github.com/Adityaloharr0030/Ani_page",
    live: null,
  },
  {
    icon: "fa-solid fa-building-columns",
    title: "Bank Management System",
    subtitle: "Enterprise Java Desktop Application",
    category: "Desktop App",
    description:
      "A comprehensive enterprise-style banking application demonstrating real-world software architecture with a full Swing GUI, MySQL integration, custom connection pooling, and proper layered design patterns — built entirely in Java.",
    features: [
      "Secure authentication with password hashing & access control",
      "Full CRUD for customer records & multiple account types",
      "ACID transactions: deposits, withdrawals & fund transfers",
      "Custom connection pooling without third-party libraries",
    ],
    techStack: ["Java", "Swing", "MySQL", "JDBC", "MVC", "DAO Pattern", "MD5 Hashing"],
    github: "https://github.com/Adityaloharr0030/Bank-management-system",
    live: null,
  },
  {
    icon: "fa-solid fa-check-to-slot",
    title: "Digital Voting System",
    subtitle: "Secure Web Voting Platform",
    category: "Web App",
    description:
      "A clean, accessible web interface for a digital voting platform. Provides a seamless experience for identity verification and secure vote casting, with responsive design and accessible form validation.",
    features: [
      "Responsive UI optimized for all device sizes",
      "Accessible form validation with real-time feedback",
      "Secure identity verification workflow",
      "Modern semantic HTML5 & CSS3 layout",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "UI/UX", "Responsive Design"],
    github: "https://github.com/Adityaloharr0030/voting-system",
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">&gt; deployments</span>
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-sub">
            From AI-powered editors to enterprise banking — highlights from my portfolio.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((p, i) => (
            <div
              className={styles.projectCard}
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Card glow border */}
              <div className={styles.cardGlow}></div>

              <div className={styles.cardInner}>
                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}>
                    <i className={p.icon}></i>
                  </div>
                  <div className={styles.cardLinks}>
                    <a href={p.github} target="_blank" rel="noopener" className={styles.cardLink} title="Source Code">
                      <i className="fa-brands fa-github"></i>
                    </a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener" className={`${styles.cardLink} ${styles.cardLinkLive}`} title="Live Demo">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    )}
                  </div>
                </div>

                <span className={styles.cardCategory}>{p.category}</span>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardSubtitle}>{p.subtitle}</p>
                <p className={styles.cardDesc}>{p.description}</p>

                <div className={styles.cardFeatures}>
                  {p.features.map((f, j) => (
                    <div className={styles.feature} key={j}>
                      <span className={styles.featurePrompt}>&gt;</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.cardTechStack}>
                  {p.techStack.map((t, j) => (
                    <span className={styles.techTag} key={j}>{t}</span>
                  ))}
                </div>

                <a href={p.github} target="_blank" rel="noopener" className={styles.cardViewBtn}>
                  <span>View on GitHub</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.projectsCta} data-aos="fade-up">
          <p>Want to see more of my work?</p>
          <a href="https://github.com/Adityaloharr0030" target="_blank" rel="noopener" className="btn btn-outline">
            <i className="fa-brands fa-github"></i> View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
