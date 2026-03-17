const projects = [
  {
    icon: "fa-solid fa-tv",
    title: "Crazyxani",
    role: "Full-Stack Developer",
    roleAlt: false,
    description:
      "An anime streaming aggregator that integrates the AniList API to power search, streaming discovery, and personal watchlist management — all with server-side rendering for blazing-fast load times and superior SEO.",
    highlights: [
      "Multi-API integration (AniList) for rich anime data",
      "SSR with Next.js for performance & SEO boost",
      "MongoDB-backed watchlists & user metadata",
    ],
    tech: ["Next.js", "React", "Node.js", "MongoDB", "AniList API", "SSR"],
    github: "https://github.com/Adityaloharr0030/Ani_page",
    live: "#",
    delay: 0,
  },
  {
    icon: "fa-solid fa-boxes-stacked",
    title: "Inventory Management API",
    role: "Backend Developer",
    roleAlt: true,
    description:
      "A production-ready RESTful backend service for structured inventory management. Built with JWT authentication, full CRUD operations, and a well-normalised MySQL schema — thoroughly documented and tested via Postman.",
    highlights: [
      "JWT-based secure authentication system",
      "Fully normalised MySQL relational schema",
      "Complete CRUD endpoints with Postman docs",
    ],
    tech: ["Node.js", "Express.js", "MySQL", "JWT Auth", "REST API", "Postman"],
    github: "https://github.com/Adityaloharr0030",
    live: null,
    delay: 120,
  },
  {
    icon: "fa-solid fa-building-columns",
    title: "Bank Management System",
    role: "Java Developer",
    roleAlt: false,
    description:
      "A robust desktop application simulating core banking operations. Built with Java and Swing for the user interface, utilizing a relational database to securely manage customer accounts, transactions, and balances.",
    highlights: [
      "Secure user authentication and account creation",
      "Real-time deposit, withdrawal, and transfer logic",
      "Interactive GUI built with Java Swing",
    ],
    tech: ["Java", "Swing (GUI)", "SQL", "JDBC", "OOP"],
    github: "https://github.com/Adityaloharr0030/Bank-management-system",
    live: null,
    delay: 100,
  },
  {
    icon: "fa-solid fa-check-to-slot",
    title: "Digital Voting System",
    role: "Frontend Developer",
    roleAlt: true,
    description:
      "A clean, accessible web interface for a digital voting platform. Designed to provide a seamless user experience for verifying identity and securely casting votes, built with core web technologies.",
    highlights: [
      "Responsive UI optimized for mobile devices",
      "Accessible form validation and feedback",
      "Modern layout using semantic HTML5 and CSS3",
    ],
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
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i} data-aos="fade-up" data-aos-delay={p.delay}>
              <div className="project-card-header">
                <div className="project-icon"><i className={p.icon}></i></div>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noopener" className="p-link" title="GitHub">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  {p.live && (
                    <a href={p.live} className="p-link" title="Live Demo">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{p.title}</h3>
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

              <div className="project-tech-stack">
                {p.tech.map((t, j) => (
                  <span className="tech-tag" key={j}>{t}</span>
                ))}
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
