const projects = [
  {
    icon: "fa-solid fa-code",
    title: "Ani Editor",
    subtitle: "AI-Powered Web Code Editor",
    role: "Full-Stack Developer",
    roleAlt: false,
    featured: true,
    category: "Web IDE",
    description:
      "A full-featured, browser-based IDE delivering a desktop-class coding experience. Combines a smart CodeMirror editor with an integrated OpenAI-powered AI assistant, live HTML/CSS/JS preview, SQL playground with in-memory SQLite, and a security-first Node.js backend — all accessible from any browser.",
    highlights: [
      "AI Assistant — Code generation, bug fixing, optimization & full code reviews via OpenAI",
      "Multi-File Editor with tab management, syntax highlighting & auto-save",
      "Live Preview — Sandboxed iframe rendering HTML/CSS/JS changes in real time",
      "Security-First — Rate limiting, input sanitization, XSS protection, CSP via Helmet.js",
    ],
    techLayers: [
      { layer: "Frontend", items: ["React.js", "Vite", "CodeMirror"] },
      { layer: "Backend", items: ["Node.js", "Express.js", "WebSocket"] },
      { layer: "AI", items: ["OpenAI API", "Perplexity API"] },
      { layer: "Security", items: ["Helmet.js", "Rate Limiting", "CSP"] },
    ],
    tech: ["React.js", "Vite", "CodeMirror", "Node.js", "Express.js", "OpenAI API", "SQLite", "Helmet.js"],
    github: "https://github.com/Adityaloharr0030/Ani_page",
    live: null,
    delay: 0,
  },
  {
    icon: "fa-solid fa-building-columns",
    title: "Bank Management System",
    subtitle: "Enterprise Java Desktop Application",
    role: "Java Developer",
    roleAlt: false,
    featured: true,
    category: "Desktop App",
    description:
      "A comprehensive, enterprise-style banking application demonstrating real-world software architecture with a full Swing GUI, MySQL integration, custom connection pooling, and proper layered design patterns — built entirely in Java.",
    highlights: [
      "Secure Authentication — Admin login with password hashing & access control",
      "Full CRUD — Customer records & multiple account types (Savings & Current)",
      "ACID Transactions — Deposits, withdrawals & fund transfers with auto-rollback",
      "Custom Connection Pooling — Hand-built BasicConnectionPool without third-party libs",
    ],
    techLayers: [
      { layer: "Language", items: ["Java (JDK 8+)"] },
      { layer: "GUI", items: ["Java Swing"] },
      { layer: "Database", items: ["MySQL", "JDBC"] },
      { layer: "Architecture", items: ["MVC", "DAO", "Service Layer"] },
    ],
    tech: ["Java", "Swing", "MySQL", "JDBC", "MVC", "DAO Pattern", "MD5 Hashing"],
    github: "https://github.com/Adityaloharr0030/Bank-management-system",
    live: null,
    delay: 100,
  },
  {
    icon: "fa-solid fa-boxes-stacked",
    title: "Inventory Management API",
    subtitle: "RESTful Backend Service",
    role: "Backend Developer",
    roleAlt: true,
    featured: false,
    category: "REST API",
    description:
      "A production-ready RESTful backend service for structured inventory management. Built with JWT authentication, full CRUD operations, and a well-normalised MySQL schema — thoroughly documented and tested via Postman.",
    highlights: [
      "JWT-based secure authentication & authorization system",
      "Fully normalised MySQL relational schema design",
      "Complete CRUD endpoints with comprehensive Postman documentation",
      "Production-ready error handling & input validation patterns",
    ],
    techLayers: null,
    tech: ["Node.js", "Express.js", "MySQL", "JWT Auth", "REST API", "Postman"],
    github: "https://github.com/Adityaloharr0030",
    live: null,
    delay: 120,
  },
  {
    icon: "fa-solid fa-check-to-slot",
    title: "Digital Voting System",
    subtitle: "Secure Web Voting Platform",
    role: "Frontend Developer",
    roleAlt: true,
    featured: false,
    category: "Web App",
    description:
      "A clean, accessible web interface for a digital voting platform. Provides a seamless experience for identity verification and secure vote casting, with responsive design and accessible form validation.",
    highlights: [
      "Responsive UI optimized for all device sizes",
      "Accessible form validation with real-time user feedback",
      "Secure identity verification workflow before vote casting",
      "Modern semantic HTML5 & CSS3 layout with clean UX patterns",
    ],
    techLayers: null,
    tech: ["HTML5", "CSS3", "JavaScript", "UI/UX", "Responsive Design"],
    github: "https://github.com/Adityaloharr0030/voting-system",
    live: null,
    delay: 150,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">What I&apos;ve built</span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-sub">From AI-powered editors to enterprise banking — here are some highlights from my portfolio.</p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className={`project-card${p.featured ? " project-card-featured" : ""}`} key={i} data-aos="fade-up" data-aos-delay={p.delay}>
              {p.featured && (
                <div className="featured-badge">
                  <i className="fa-solid fa-star"></i> Featured
                </div>
              )}

              <div className="project-card-header">
                <div className="project-icon"><i className={p.icon}></i></div>
                <div className="project-header-right">
                  <span className="project-category">{p.category}</span>
                  <div className="project-links">
                    <a href={p.github} target="_blank" rel="noopener" className="p-link" title="View Source Code">
                      <i className="fa-brands fa-github"></i>
                    </a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener" className="p-link p-link-live" title="Live Demo">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <h3 className="project-title">{p.title}</h3>
              <p className="project-subtitle">{p.subtitle}</p>
              <p className="project-role">
                <span className={`role-badge${p.roleAlt ? " role-badge-alt" : ""}`}>{p.role}</span>
              </p>
              <p className="project-description">{p.description}</p>

              <div className="project-highlights">
                {p.highlights.map((h, j) => (
                  <div className="highlight-item" key={j}>
                    <i className="fa-solid fa-circle-check"></i>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {p.techLayers && (
                <div className="project-tech-layers">
                  {p.techLayers.map((tl, k) => (
                    <div className="tech-layer-row" key={k}>
                      <span className="tech-layer-label">{tl.layer}</span>
                      <div className="tech-layer-items">
                        {tl.items.map((item, m) => (
                          <span className="tech-tag tech-tag-accent" key={m}>{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {!p.techLayers && (
                <div className="project-tech-stack">
                  {p.tech.map((t, j) => (
                    <span className="tech-tag" key={j}>{t}</span>
                  ))}
                </div>
              )}

              <div className="project-card-footer">
                <a href={p.github} target="_blank" rel="noopener" className="project-view-btn">
                  <span>View on GitHub</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta" data-aos="fade-up">
          <p>Want to see more of my work?</p>
          <a href="https://github.com/Adityaloharr0030" target="_blank" rel="noopener" className="btn btn-outline">
            <i className="fa-brands fa-github"></i> View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
