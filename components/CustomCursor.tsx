"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      requestAnimationFrame(animate);
    };

    const onDown = () => {
      ring.style.width = "30px";
      ring.style.height = "30px";
      ring.style.borderColor = "#7b2fff";
    };
    const onUp = () => {
      ring.style.width = "40px";
      ring.style.height = "40px";
      ring.style.borderColor = "#00f0ff";
    };

    const onEnterLink = () => {
      ring.style.width = "56px";
      ring.style.height = "56px";
      ring.style.borderColor = "#7b2fff";
      ring.style.backgroundColor = "rgba(123,47,255,0.08)";
      dot.style.opacity = "0";
    };
    const onLeaveLink = () => {
      ring.style.width = "40px";
      ring.style.height = "40px";
      ring.style.borderColor = "#00f0ff";
      ring.style.backgroundColor = "transparent";
      dot.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    document.querySelectorAll("a, button, [role='button']").forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          background: "#00f0ff",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          boxShadow: "0 0 12px #00f0ff, 0 0 30px rgba(0,240,255,0.3)",
          transition: "opacity 0.2s",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          border: "1.5px solid #00f0ff",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.25s, height 0.25s, border-color 0.25s, background-color 0.25s",
          backgroundColor: "transparent",
        }}
      />
    </>
  );
}
