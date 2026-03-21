import GitHubStats from "./GitHubStats";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">Get to know me</span>
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        </div>

        <div className="about-content">
          <div className="about-text-content" data-aos="fade-up">
            <h3 className="about-subtitle">B.Tech Computer Engineering Student &amp; Full-Stack Developer</h3>
            <p className="about-text">
              I&apos;m <strong>Aditya Sunil Lohar</strong>, a 3rd-year Computer Engineering student at{" "}
              <strong>College of Engineering and Technology, North Maharashtra Knowledge City, Jalgaon</strong>.
              I specialise in building end-to-end web applications with a strong focus on
              clean architecture, performance, and great user experiences.
            </p>
            <p className="about-text">
              My philosophy: <em>&quot;Write code that solves real problems — fast, clean, and scalable.&quot;</em>{" "}
              I enjoy tackling tough integration challenges, and I love turning complex data
              into smooth user experiences.
            </p>
          </div>

          {/* Stats row */}
          <div className="about-stats-row" data-aos="fade-up" data-aos-delay="100">
            <div className="stat-card">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Coding</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">2+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">10+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>

          <GitHubStats />

          <div className="about-details-row" data-aos="fade-up" data-aos-delay="200">
            {/* Education timeline */}
            <div className="edu-timeline">
              <div className="edu-item">
                <div className="edu-dot"></div>
                <div className="edu-content">
                  <h4>B.Tech in Computer Engineering</h4>
                  <p>College of Engineering and Technology, NMKC, Jalgaon</p>
                  <span className="edu-year">2023 – 2027 (Expected)</span>
                  <div className="edu-courses">DSA · DBMS · OS · CN · Web Development</div>
                </div>
              </div>
            </div>

            {/* Info chips & buttons */}
            <div className="about-info-col">
              <div className="about-info-grid">
                <div className="info-chip"><i className="fa-solid fa-graduation-cap"></i> 3rd Year, B.Tech</div>
              </div>
              <div className="about-actions mt-20">
                <span className="status-pill open-status">
                  <span className="status-dot"></span> Open to Internships
                </span>
                <a href="/resume.pdf" target="_blank" download="Aditya_Lohar_Resume.pdf" className="btn btn-primary">
                  <i className="fa-solid fa-download"></i> Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
