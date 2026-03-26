import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.footerLogo}>
            <span className={styles.bracket}>&lt;</span>AL<span className={styles.bracket}>/&gt;</span>
          </div>

          <p className={styles.footerCopy}>
            &copy; {new Date().getFullYear()} Aditya Lohar.{" "}
            <span className={styles.muted}>All rights reserved.</span>
          </p>

          <div className={styles.footerSocial}>
            <a href="https://github.com/Adityaloharr0030" target="_blank" rel="noopener" title="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/aditya-lohar-3037b32b9" target="_blank" rel="noopener" title="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="mailto:lohar6987@gmail.com" title="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
