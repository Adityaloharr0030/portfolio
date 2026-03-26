import styles from "./Certificates.module.css";

const certificates = [
  {
    title: "Introduction to Cyber Security",
    issuer: "Simplilearn SkillUp",
    date: "Mar 2026",
    credentialId: "9953442",
    icon: "fa-solid fa-shield-halved",
    skills: ["Cyber Security", "Network Security", "Threat Analysis"],
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI5OTUzNDQyIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvNDU0NTg1NV8xNzEwMzI0ODAwLnBuZyIsInVzZXJuYW1lIjoiQWRpdHlhIFN1bmlsIExvaGFyIn0%3D",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "Mar 2026",
    credentialId: "dg5r8pnsfng7",
    icon: "fa-solid fa-code",
    skills: ["Claude API", "AI Coding", "Automation", "Agentic Tools"],
    link: "http://verify.skilljar.com/c/dg5r8pnsfng7",
  },
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    date: "Mar 2026",
    credentialId: "5n9y9eoh5atx",
    icon: "fa-solid fa-brain",
    skills: ["AI Fundamentals", "LLM Frameworks", "Prompt Engineering"],
    link: "http://verify.skilljar.com/c/5n9y9eoh5atx",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    date: "Mar 2026",
    credentialId: "6eswzhtmfk7y",
    icon: "fa-solid fa-robot",
    skills: ["Claude AI", "Conversational AI", "AI Safety"],
    link: "http://verify.skilljar.com/c/6eswzhtmfk7y",
  },
  {
    title: "Introduction to Claude Cowork",
    issuer: "Anthropic",
    date: "Mar 2026",
    credentialId: "3gc8kxck8h74",
    icon: "fa-solid fa-users-gear",
    skills: ["Claude Cowork", "AI Collaboration", "Workflow Automation"],
    link: "http://verify.skilljar.com/c/3gc8kxck8h74",
  },
  {
    title: "Quora System Design Course",
    issuer: "Scaler Topics",
    date: "Mar 2026",
    credentialId: "SCALER-SYS-2026",
    icon: "fa-solid fa-diagram-project",
    skills: ["System Design", "Scalability", "Architecture"],
    link: "#",
  },
  {
    title: "Free DevOps Course Certification",
    issuer: "Intellipaat Academy",
    date: "Mar 2026",
    credentialId: "31679-1655-335639",
    icon: "fa-solid fa-gears",
    skills: ["DevOps", "CI/CD", "Docker", "Kubernetes"],
    link: "#",
  },
  {
    title: "Free Online AI Course",
    issuer: "Intellipaat Academy",
    date: "Mar 2026",
    credentialId: "31679-1827-335639",
    icon: "fa-solid fa-microchip",
    skills: ["Artificial Intelligence", "Machine Learning", "Neural Networks"],
    link: "#",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <div className="container">
        {/* Kanji decoration */}
        <span className="kanji-decor top-right" aria-hidden="true">証明書</span>

        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">
            <span className="status-pulse"></span>
            &gt; verify --credentials
          </span>
          <h2 className="section-title">
            <span className="glitch" data-text="CERTIFICATIONS">CERTIFICATIONS</span>
          </h2>
          <p className="section-sub">Verified credentials and completed training programs.</p>
        </div>

        <div className={styles.certsGrid}>
          {certificates.map((cert, i) => (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.certCard} corner-brackets`}
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Animated border glow */}
              <div className={styles.cardGlow}></div>

              <div className={styles.cardInner}>
                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}>
                    <i className={cert.icon}></i>
                  </div>
                  <span className={styles.cardDate}>{cert.date}</span>
                </div>

                <h3 className={styles.cardTitle}>{cert.title}</h3>
                <p className={styles.cardIssuer}>{cert.issuer}</p>

                <div className={styles.credentialRow}>
                  <span className={styles.credentialLabel}>CREDENTIAL_ID:</span>
                  <span className={styles.credentialValue}>{cert.credentialId}</span>
                </div>

                <div className={styles.skillTags}>
                  {cert.skills.map((skill, j) => (
                    <span className="chip-clipped" key={j}>{skill}</span>
                  ))}
                </div>

                <div className={styles.verifyBtn}>
                  <i className="fa-solid fa-shield-halved"></i>
                  <span>VERIFY_CREDENTIAL</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
