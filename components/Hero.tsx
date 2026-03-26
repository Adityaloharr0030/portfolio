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
    { cmd: "neo --init neural_protocol", out: "✓ Neural interface initialized", visible: true, typed: "" },
    { cmd: "sys --check --mode=stealth", out: "✓ Stealth mode active [0 detected]", visible: false, typed: "" },
    { cmd: "port --dev localhost:3000", out: "✓ Neural link established", visible: false, typed: "" },
    { cmd: "git push neural main", out: "✓ Repository synchronized 🚀", visible: false, typed: "" },
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
      return setTimeout(tick, deleting.current ? 30 : 60);
    };
    const t = tick();
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    let delay = 800;
    termLines.forEach((line, idx) => {
      timeouts.push(setTimeout(() => {
        setTermLines((prev) => prev.map((l, i) => i === idx ? { ...l, visible: true } : l));
      }, delay));
      for (let c = 0; c <= line.cmd.length; c++) {
        timeouts.push(setTimeout(() => {
          setTermLines((prev) =>
            prev.map((l, i) => i === idx ? { ...l, typed: line.cmd.slice(0, c) } : l)
          );
        }, delay + 100 + c * 40));
      }
      delay += line.cmd.length * 40 + 1000;
    });
    return () => timeouts.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className="grid-bg"></div>

      {/* Geometric corner accents */}
      <div className={styles.cornerAccentTL} aria-hidden="true"></div>
      <div className={styles.cornerAccentBR} aria-hidden="true"></div>

      <div className={`${styles.heroContent} container`}>
        <div className={styles.heroLeft} data-aos="fade-right">
          <div className={styles.systemStatus}>
            <span className="status-pulse"></span>
            <span>NEURAL_LINK: ACTIVE</span>
          </div>
          <p className={styles.heroGreeting}>
            <span className={styles.prompt}>&gt;_</span> protocol_handshake
          </p>
          <h1 className={styles.heroName}>
            <span className="glitch" data-text="ADITYA">ADITYA</span>{" "}
            <span className={styles.heroNameAccent}>LOHAR</span>
          </h1>
          <div className={styles.glowLine}></div>
          <div className={styles.heroRoles}>
            <span className={styles.rolePrefix}>guest@neural_net:~$ </span>
            <span className={styles.roleTyped}>{typedText}</span>
            <span className={styles.cursor}>▌</span>
          </div>
          <p className={styles.heroBio}>
            Crafting mathematically precise, high-performance web architectures. 
            B.Tech Computer Engineering (2027) focused on building the future 
            of the neural web through scalable JavaScript protocols.
          </p>
          <div className={styles.heroCtaGroup}>
            <a href="#projects" className="btn btn-primary">
              <i className="fa-solid fa-terminal"></i> Execute_Projects
            </a>
            <a href="/resume.pdf" target="_blank" download="Aditya_Lohar_Resume.pdf" className="btn btn-outline">
              <i className="fa-solid fa-download"></i> DL_Resume
            </a>
            <a href="#contact" className="btn btn-outline">
              <i className="fa-solid fa-satellite-dish"></i> Contact_Node
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
            <span className={styles.tTitle}>aditya@neural_interface ~/dev</span>
            <span className={styles.tLive}>● ENCRYPTED</span>
          </div>
          <div className={styles.terminalBody}>
            {termLines.map((line, idx) => (
              line.visible && (
                <div key={idx}>
                  <div className={styles.tLine}>
                    <span className={styles.tPrompt}>&gt;</span>
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
            <div className={styles.tCursor}>▌</div>
          </div>
          <div className={styles.terminalStackRow}>
            {["Next.js", "TypeScript", "Node.js", "MongoDB", "Cloud"].map((tech) => (
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
