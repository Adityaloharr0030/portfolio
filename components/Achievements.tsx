import styles from "./Achievements.module.css";

const logs = [
  {
    hash: "a1b2c3d",
    date: "2024 — Present",
    message: "Built end-to-end full-stack web applications from scratch",
    branch: "main",
  },
  {
    hash: "e4f5g6h",
    date: "2024",
    message: "Active GitHub contributor with consistent commit activity",
    branch: "dev",
  },
  {
    hash: "i7j8k9l",
    date: "2024",
    message: "Integrated third-party APIs (Anilist, OpenAI) into production projects",
    branch: "feature/api",
  },
  {
    hash: "m0n1o2p",
    date: "2024",
    message: "Built AI-powered code editor with real-time collaboration features",
    branch: "feature/ai",
  },
  {
    hash: "q3r4s5t",
    date: "Ongoing",
    message: "Continuously learning modern frameworks and cloud technologies",
    branch: "main",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section section-alt">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">&gt; git log --oneline</span>
          <h2 className="section-title">
            Achievement <span className="gradient-text">Logs</span>
          </h2>
        </div>

        <div className={styles.logContainer} data-aos="fade-up">
          <div className={styles.logHeader}>
            <span className={styles.logFile}>~/achievements</span>
            <span className={styles.logBranch}>
              <i className="fa-solid fa-code-branch"></i> main
            </span>
          </div>
          <div className={styles.logBody}>
            {logs.map((log, i) => (
              <div className={styles.logEntry} key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className={styles.logLine}>
                  <span className={styles.logHash}>{log.hash}</span>
                  <span className={styles.logBranchTag}>{log.branch}</span>
                  <span className={styles.logMessage}>{log.message}</span>
                </div>
                <span className={styles.logDate}>{log.date}</span>
              </div>
            ))}
            <div className={styles.logPrompt}>
              <span className={styles.promptChar}>$</span>
              <span className={styles.blinkCursor}>▋</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
