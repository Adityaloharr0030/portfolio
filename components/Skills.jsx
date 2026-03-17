const categories = [
  {
    icon: "fa-solid fa-code",
    title: "Languages",
    pills: [
      { icon: "fa-brands fa-js", label: "JavaScript (ES6+)" },
      { icon: "fa-brands fa-python", label: "Python" },
      { icon: "fa-brands fa-java", label: "Java" },
    ],
    delay: 0,
  },
  {
    icon: "fa-solid fa-desktop",
    title: "Frontend",
    pills: [
      { icon: "fa-brands fa-react", label: "React" },
      { emoji: "⚡", label: "Next.js" },
      { icon: "fa-brands fa-html5", label: "HTML5" },
      { icon: "fa-brands fa-css3-alt", label: "CSS3" },
      { icon: "fa-brands fa-bootstrap", label: "Bootstrap" },
    ],
    delay: 80,
  },
  {
    icon: "fa-solid fa-server",
    title: "Backend",
    pills: [
      { icon: "fa-brands fa-node-js", label: "Node.js" },
      { emoji: "🚀", label: "Express.js" },
      { emoji: "🔗", label: "RESTful APIs" },
    ],
    delay: 160,
  },
  {
    icon: "fa-solid fa-database",
    title: "Databases",
    pills: [
      { emoji: "🍃", label: "MongoDB" },
      { emoji: "🐬", label: "MySQL" },
    ],
    delay: 240,
  },
  {
    icon: "fa-solid fa-toolbox",
    title: "Dev Tools",
    pills: [
      { icon: "fa-brands fa-git-alt", label: "Git" },
      { icon: "fa-brands fa-github", label: "GitHub" },
      { emoji: "🐳", label: "Docker" },
      { emoji: "📮", label: "Postman" },
      { emoji: "💻", label: "VS Code" },
    ],
    delay: 320,
  },
];

const bars = [
  { label: "JavaScript / ES6+", width: 90 },
  { label: "React / Next.js", width: 85 },
  { label: "Node.js / Express", width: 82 },
  { label: "MongoDB / MySQL", width: 75 },
  { label: "Git / GitHub", width: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">What I work with</span>
          <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
        </div>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div className="skill-category" key={i} data-aos="fade-up" data-aos-delay={cat.delay}>
              <div className="skill-cat-icon"><i className={cat.icon}></i></div>
              <h3 className="skill-cat-title">{cat.title}</h3>
              <div className="skill-pills">
                {cat.pills.map((pill, j) => (
                  <span className="skill-pill" key={j}>
                    {pill.icon ? <i className={pill.icon}></i> : pill.emoji} {pill.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Progress bars */}
        <div className="skills-bars" data-aos="fade-up">
          <h3 className="skills-bars-title">Proficiency</h3>
          {bars.map((bar, i) => (
            <div className="skill-bar-item" key={i}>
              <div className="skill-bar-label"><span>{bar.label}</span><span>{bar.width}%</span></div>
              <div className="skill-bar-track">
                <div className="skill-bar-fill" data-width={bar.width}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
