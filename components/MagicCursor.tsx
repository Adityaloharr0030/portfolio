"use client";

import { useEffect, useRef } from "react";
import styles from "./MagicCursor.module.css";

export default function MagicCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    if (!window.matchMedia("(pointer: fine)").matches) return;

    let mx = 0, my = 0, fx = 0, fy = 0;
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = `${mx}px`;
      cursor.style.top = `${my}px`;
    };

    const animate = () => {
      fx += (mx - fx) * 0.12;
      fy += (my - fy) * 0.12;
      follower.style.left = `${fx}px`;
      follower.style.top = `${fy}px`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    animate();

    // Scale up on interactive elements
    const interactives = document.querySelectorAll("a, button, .project-card, .contact-card, input, textarea");
    const onEnter = () => {
      cursor.style.transform = "translate(-50%,-50%) scale(2)";
      follower.style.transform = "translate(-50%,-50%) scale(1.6)";
      follower.style.borderColor = "rgba(0,240,255,0.8)";
    };
    const onLeave = () => {
      cursor.style.transform = "translate(-50%,-50%) scale(1)";
      follower.style.transform = "translate(-50%,-50%) scale(1)";
      follower.style.borderColor = "rgba(0,240,255,0.4)";
    };

    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div className={styles.cursor} ref={cursorRef} />
      <div className={styles.cursorFollower} ref={followerRef} />
    </>
  );
}
