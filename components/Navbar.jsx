export default function Navbar() {
  return (
    <header id="header">
      <nav className="nav-container">
        <a href="#home" className="nav-logo">
          <span className="logo-bracket">&lt;</span>AL
          <span className="logo-bracket">/&gt;</span>
        </a>
        <ul className="nav-links" id="nav-links">
          <li><a href="#home" className="nav-link active" data-section="home">Home</a></li>
          <li><a href="#about" className="nav-link" data-section="about">About</a></li>
          <li><a href="#skills" className="nav-link" data-section="skills">Skills</a></li>
          <li><a href="#projects" className="nav-link" data-section="projects">Projects</a></li>
          <li><a href="#contact" className="nav-link" data-section="contact">Contact</a></li>
        </ul>
        <a href="/resume.pdf" target="_blank" download="Aditya_Lohar_Resume.pdf" className="btn btn-nav" id="resume-btn-nav">
          <i className="fa-solid fa-download"></i> Resume
        </a>
        <button className="hamburger" id="hamburger" aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </header>
  );
}
