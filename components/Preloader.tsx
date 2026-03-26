"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Preloader.module.css";

const bootLines = [
  { text: "> BIOS: Neural Protocol v2.7 initialized", delay: 0 },
  { text: "> MEMORY: 16GB allocated — status OK", delay: 200 },
  { text: "> GPU: RTX shader pipeline ready", delay: 350 },
  { text: "> NETWORK: Secured connection established", delay: 500 },
  { text: "> LOADING: Portfolio modules...", delay: 700 },
  { text: "> COMPILE: React 19 + Next.js 16 — 0 errors", delay: 900 },
  { text: "> DEPLOY: localhost:3000 — READY", delay: 1100 },
  { text: "> ACCESS: GRANTED ▌", delay: 1300 },
];

export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    // Animate boot lines
    bootLines.forEach((line, i) => {
      setTimeout(() => setVisibleLines(i + 1), line.delay);
    });

    // Animate progress bar
    intervalRef.current = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 12 + 3;
        return Math.min(next, 95);
      });
    }, 50);

    // Complete and fade out
    const timer = setTimeout(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setProgress(100);
      setTimeout(() => setFading(true), 300);
      setTimeout(() => setHidden(true), 800);
    }, 1800);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      clearTimeout(timer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`${styles.preloader} ${fading ? styles.fading : ""}`}>
      <div className={styles.preloaderInner}>
        {/* Logo */}
        <div className={styles.preloaderLogo}>
          <span className={styles.bracket}>&lt;</span>
          <span className={styles.logoText}>ADITYA.LOHAR</span>
          <span className={styles.bracket}>/&gt;</span>
        </div>

        {/* Boot terminal */}
        <div className={styles.bootTerminal}>
          {bootLines.slice(0, visibleLines).map((line, i) => (
            <div
              key={i}
              className={styles.bootLine}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {line.text}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className={styles.preloaderBar}>
          <div className={styles.preloaderFill} style={{ width: `${progress}%` }}></div>
        </div>
        <p className={styles.preloaderPct}>{Math.floor(progress)}%</p>
      </div>
    </div>
  );
}
