"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Hero.module.css";

const roles = [
  "Full-Stack Developer",
  "API Architect",
  "CS Student 2027",
  "React / Next.js Dev",
  "Open to Internships",
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const roleIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  const [termLines, setTermLines] = useState([
    { cmd: "npm run aditya --mode=build", out: "✓ Portfolio compiled — 0 errors", visible: true, typed: "" },
    { cmd: "mongod --port 27017", out: "✓ MongoDB connected on port 27017", visible: false, typed: "" },
    { cmd: "node server.js", out: "✓ Server running at localhost:3000", visible: false, typed: "" },
    { cmd: "git push origin main", out: "✓ Deployed to production 🚀", visible: false, typed: "" },
  ]);

  useEffect(() => {
    const tick = () => {
      const word = roles[roleIdx.current];
      if (!deleting.current) {
        charIdx.current++;
        setTypedText(word.slice(0, charIdx.current));
        if (charIdx.current === word.length) {
          deleting.current = true;
          return setTimeout(tick, 2000);
        }
      } else {
        charIdx.current--;
        setTypedText(word.slice(0, charIdx.current));
        if (charIdx.current === 0) {
          deleting.current = false;
          roleIdx.current = (roleIdx.current + 1) % roles.length;
        }
      }
      return setTimeout(tick, deleting.current ? 40 : 80);
    };
    const t = tick();
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    let delay = 600;
    termLines.forEach((line, idx) => {
      timeouts.push(setTimeout(() => {
        setTermLines((prev) => prev.map((l, i) => i === idx ? { ...l, visible: true } : l));
      }, delay));
      for (let c = 0; c <= line.cmd.length; c++) {
        timeouts.push(setTimeout(() => {
          setTermLines((prev) =>
            prev.map((l, i) => i === idx ? { ...l, typed: line.cmd.slice(0, c) } : l)
          );
        }, delay + 100 + c * 45));
      }
      delay += line.cmd.length * 45 + 800;
    });
    return () => timeouts.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className="grid-bg"></div>

      {/* Kanji decorative elements */}
      <span className="kanji-decor top-right" aria-hidden="true">電脳世界</span>
      <span className="kanji-decor bottom-left" aria-hidden="true">未来開発</span>


      {/* Geometric corner accents */}
      <div className={styles.cornerAccentTL} aria-hidden="true"></div>
      <div className={styles.cornerAccentBR} aria-hidden="true"></div>

      <div className={`${styles.heroContent} container`}>
        <div className={styles.heroLeft} data-aos="fade-right">
          <div className={styles.systemStatus}>
            <span className="status-pulse"></span>
            <span>SYSTEM_STATUS: ONLINE</span>
          </div>
          <p className={styles.heroGreeting}>
            <span className={styles.prompt}>&gt;_</span> Hello, World
          </p>
          <h1 className={styles.heroName}>
            <span className="glitch" data-text="ADITYA">ADITYA</span>{" "}
            <span className={styles.heroNameAccent}>LOHAR</span>
          </h1>
          <div className={styles.glowLine}></div>
          <div className={styles.heroRoles}>
            <span className={styles.rolePrefix}>root@portfolio:~$ </span>
            <span className={styles.roleTyped}>{typedText}</span>
            <span className={styles.cursor}>▌</span>
          </div>
          <p className={styles.heroBio}>
            B.Tech Computer Engineering student (2027) building performant,
            scalable web applications with modern JavaScript frameworks and
            cloud-ready backends.
          </p>
          <div className={styles.heroCtaGroup}>
            <a href="#projects" className="btn btn-primary">
              <i className="fa-solid fa-terminal"></i> View Projects
            </a>
            <a href="/resume.pdf" target="_blank" download="Aditya_Lohar_Resume.pdf" className="btn btn-outline">
              <i className="fa-solid fa-download"></i> Download Resume
            </a>
            <a href="#contact" className="btn btn-outline">
              <i className="fa-solid fa-satellite-dish"></i> Contact Me
            </a>
          </div>
          <div className={styles.heroSocial}>
            <a href="https://github.com/Adityaloharr0030" target="_blank" rel="noopener" aria-label="GitHub" className={styles.socialIcon}>
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/aditya-lohar-3037b32b9" target="_blank" rel="noopener" aria-label="LinkedIn" className={styles.socialIcon}>
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="mailto:adityalohar00030@gmail.com" aria-label="Email" className={styles.socialIcon}>
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Terminal Card */}
        <div className={`${styles.terminalCard} corner-brackets`} data-aos="fade-left">
          <div className={styles.terminalHeader}>
            <div className={styles.termDots}>
              <span className={styles.tRed}></span>
              <span className={styles.tYellow}></span>
              <span className={styles.tGreen}></span>
            </div>
            <span className={styles.tTitle}>aditya@portfolio ~/dev</span>
            <span className={styles.tLive}>● LIVE</span>
          </div>
          <div className={styles.terminalBody}>
            {termLines.map((line, idx) => (
              line.visible && (
                <div key={idx}>
                  <div className={styles.tLine}>
                    <span className={styles.tPrompt}>$</span>
                    <span className={styles.tCmd}>{line.typed}</span>
                  </div>
                  {line.typed.length === line.cmd.length && (
                    <div className={`${styles.tLine} ${styles.tOutput}`}>
                      <span className={styles.tSuccess}>{line.out}</span>
                    </div>
                  )}
                </div>
              )
            ))}
            <div className={styles.tCursor}>▋</div>
          </div>
          <div className={styles.terminalStackRow}>
            {["React", "Node.js", "MongoDB", "Next.js", "TypeScript"].map((tech) => (
              <span className={styles.tsPill} key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>SCROLL_DOWN</span>
        <div className={styles.scrollLine}><div className={styles.scrollDot}></div></div>
      </div>
    </section>
  );
}
