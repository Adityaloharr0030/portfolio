"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width: 24, height: 24, margin: "0 10px" }} />; 
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="theme-toggle nav-link"
      aria-label="Toggle theme"
      style={{
        background: "transparent",
        border: "none",
        color: "inherit",
        cursor: "pointer",
        fontSize: "1.2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.5rem",
        margin: "0 10px"
      }}
    >
      {theme === "dark" ? (
        <i className="fa-solid fa-sun" style={{ color: "#ffd700" }}></i>
      ) : (
        <i className="fa-solid fa-moon"></i>
      )}
    </button>
  );
}
