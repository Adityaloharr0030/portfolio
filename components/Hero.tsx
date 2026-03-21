import dynamic from "next/dynamic";
const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function Hero() {
  return (
    <section id="home" className="hero">
      <Hero3D />
      <div className="hero-content">
        <div className="hero-text" data-aos="fade-right">
          <p className="hero-greeting">👋 Hello, I&apos;m</p>
          <h1 className="hero-name">
            Aditya <span className="gradient-text">Lohar</span>
          </h1>
          <div className="hero-roles">
            <span className="role-static">I&apos;m a&nbsp;</span>
            <span id="typed-text" className="role-typed"></span>
            <span className="cursor-blink">|</span>
          </div>
          <p className="hero-bio">
            Ambitious B.Tech Computer Engineering student (3rd year) at COET Jalgaon,
            passionate about building performant, scalable web applications with modern
            JavaScript frameworks and cloud-ready backends.
          </p>
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <i className="fa-solid fa-rocket"></i> View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              <i className="fa-solid fa-paper-plane"></i> Let&apos;s Talk
            </a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/Adityaloharr0030" target="_blank" rel="noopener" className="social-icon" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/aditya-lohar-3037b32b9" target="_blank" rel="noopener" className="social-icon" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="mailto:adityalohar00030@gmail.com" className="social-icon" aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Terminal card */}
        <div className="terminal-card" data-aos="fade-left">
          <div className="terminal-header">
            <span className="t-dot t-red"></span>
            <span className="t-dot t-yellow"></span>
            <span className="t-dot t-green"></span>
            <span className="t-title">aditya@portfolio ~ </span>
          </div>
          <div className="terminal-body">
            <div className="t-line"><span className="t-prompt">$</span> <span className="t-cmd" id="t-cmd-1"></span></div>
            <div className="t-line t-output" id="t-out-1" style={{ display: "none" }}><span className="t-success">✓</span> Next.js app compiled in 1.2s</div>
            <div className="t-line" id="t-line-2" style={{ display: "none" }}><span className="t-prompt">$</span> <span className="t-cmd" id="t-cmd-2"></span></div>
            <div className="t-line t-output" id="t-out-2" style={{ display: "none" }}><span className="t-success">✓</span> MongoDB connected on port 27017</div>
            <div className="t-line" id="t-line-3" style={{ display: "none" }}><span className="t-prompt">$</span> <span className="t-cmd" id="t-cmd-3"></span></div>
            <div className="t-line t-output" id="t-out-3" style={{ display: "none" }}><span className="t-success">✓</span> Server running at localhost:3000</div>
            <div className="t-line" id="t-line-4" style={{ display: "none" }}><span className="t-prompt">$</span> <span className="t-cmd" id="t-cmd-4"></span></div>
            <div className="t-line t-output" id="t-out-4" style={{ display: "none" }}><span className="t-success">✓</span> Deployed to production 🚀</div>
            <div className="t-cursor" id="t-cursor">▋</div>
          </div>
          <div className="terminal-stack-row">
            <span className="ts-pill"><i className="fa-brands fa-react"></i> React</span>
            <span className="ts-pill"><i className="fa-brands fa-node-js"></i> Node</span>
            <span className="ts-pill">🍃 MongoDB</span>
            <span className="ts-pill">⚡ Next.js</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" id="scroll-indicator">
        <span>Scroll down</span>
        <div className="scroll-line"><div className="scroll-dot"></div></div>
      </div>
    </section>
  );
}
