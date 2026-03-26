"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);
      
      // Update dot position immediately
      dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
    };

    const animate = () => {
      // Smoother interpolation (0.2 for faster response)
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;
      
      ring.style.transform = `translate(${ringX - 22}px, ${ringY - 22}px)`;
      requestAnimationFrame(animate);
    };

    const onDown = () => {
      ring.style.transform = `translate(${ringX - 22}px, ${ringY - 22}px) scale(0.85)`;
      ring.style.borderColor = "var(--accent-2)";
    };
    
    const onUp = () => {
      ring.style.transform = `translate(${ringX - 22}px, ${ringY - 22}px) scale(1)`;
      ring.style.borderColor = "var(--accent)";
    };

    const onEnterLink = () => {
      ring.style.width = "60px";
      ring.style.height = "60px";
      ring.style.borderColor = "var(--accent-2)";
      ring.style.backgroundColor = "rgba(123, 47, 255, 0.05)";
      dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px) scale(0)`;
      dot.style.opacity = "0";
    };
    
    const onLeaveLink = () => {
      ring.style.width = "44px";
      ring.style.height = "44px";
      ring.style.borderColor = "var(--accent)";
      ring.style.backgroundColor = "transparent";
      dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px) scale(1)`;
      dot.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const refreshLinks = () => {
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", onEnterLink);
        el.addEventListener("mouseleave", onLeaveLink);
      });
    };

    refreshLinks();
    // Observe DOM changes to attach listeners to new links
    const observer = new MutationObserver(refreshLinks);
    observer.observe(document.body, { childList: true, subtree: true });

    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      observer.disconnect();
    };
  }, [isVisible]);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          background: "var(--accent)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          boxShadow: "0 0 10px var(--accent)",
          transition: "opacity 0.2s, transform 0.2s ease-out",
          opacity: isVisible ? 1 : 0,
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 44,
          height: 44,
          border: "1px solid var(--accent)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.3s cubic-bezier(0.23, 1, 0.32, 1), height 0.3s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.3s, background-color 0.3s, transform 0.1s ease-out",
          backgroundColor: "transparent",
          opacity: isVisible ? 0.5 : 0,
        }}
      />
    </>
  );
}
