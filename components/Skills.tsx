"use client";

import styles from "./Skills.module.css";

const categories = [
  {
    title: "Languages",
    icon: "fa-solid fa-code",
    pills: [
      { icon: "fa-brands fa-js", label: "JavaScript (ES6+)" },
      { icon: "fa-brands fa-python", label: "Python" },
      { icon: "fa-brands fa-java", label: "Java" },
    ],
  },
  {
    title: "Frontend",
    icon: "fa-solid fa-desktop",
    pills: [
      { icon: "fa-brands fa-react", label: "React" },
      { emoji: "⚡", label: "Next.js" },
      { icon: "fa-brands fa-html5", label: "HTML5" },
      { icon: "fa-brands fa-css3-alt", label: "CSS3" },
      { icon: "fa-brands fa-bootstrap", label: "Bootstrap" },
    ],
  },
  {
    title: "Backend",
    icon: "fa-solid fa-server",
    pills: [
      { icon: "fa-brands fa-node-js", label: "Node.js" },
      { emoji: "🚀", label: "Express.js" },
      { emoji: "🔗", label: "REST APIs" },
    ],
  },
  {
    title: "Databases",
    icon: "fa-solid fa-database",
    pills: [
      { emoji: "🍃", label: "MongoDB" },
      { emoji: "🐬", label: "MySQL" },
    ],
  },
  {
    title: "Dev Tools",
    icon: "fa-solid fa-toolbox",
    pills: [
      { icon: "fa-brands fa-git-alt", label: "Git" },
      { icon: "fa-brands fa-github", label: "GitHub" },
      { emoji: "💻", label: "VS Code" },
      { emoji: "📮", label: "Postman" },
      { icon: "fa-brands fa-docker", label: "Docker" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">&gt; tech_stack</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-sub">Technologies and tools I use to bring ideas to life.</p>
        </div>


        <div className={styles.skillsGrid}>
          {categories.map((cat, i) => (
            <div
              className={styles.skillCategory}
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className={styles.catHeader}>
                <div className={styles.catIcon}>
                  <i className={cat.icon}></i>
                </div>
                <h3 className={styles.catTitle}>{cat.title}</h3>
              </div>
              <div className={styles.pillsWrap}>
                {cat.pills.map((pill, j) => (
                  <span className={styles.pill} key={j}>
                    {pill.icon ? <i className={pill.icon}></i> : pill.emoji}{" "}
                    {pill.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
