export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <a href="#home" className="footer-logo">
            <span className="logo-bracket">&lt;</span>AL
            <span className="logo-bracket">/&gt;</span>
          </a>
          <p className="footer-copy">
            Designed &amp; Built with <i className="fa-solid fa-heart" style={{ color: "#ef4444" }}></i> by Aditya Sunil Lohar &copy; 2026
          </p>
          <div className="footer-social">
            <a href="https://github.com/Adityaloharr0030" target="_blank" rel="noopener" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/aditya-lohar" target="_blank" rel="noopener" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="mailto:lohar6987@gmail.com" aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
