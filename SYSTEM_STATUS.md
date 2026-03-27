# SYSTEM_STATUS: Neural Protocol Architecture

This document provides a technical readout of the portfolio's internal structure, connectivity, and operational logic.

## 📡 01: System Inventory (What's in it)

The portfolio is architected as a modular, high-performance **Next.js 16 (Turbopack)** application.

### Core Directory Structure
*   **`/app`**: The central nervous system.
    *   `layout.tsx`: Root shell containing global providers (Custom Cursor, Preloader, Navbar, Footer).
    *   `globals.css`: The "Source of Truth" for all Neural Protocol design tokens.
*   **`/components`**: Autonomous UI modules.
    *   Each component (e.g., `Hero.tsx`, `About.tsx`) is paired with a scoped `.module.css` to prevent style leakage.
*   **`/public`**: Static data storage (Resumes, iconography, and binary assets).
*   **`/assets`**: Project-specific media and tech-stack icons.

---

## 🔗 02: Neural Connectivity (How it's connected)

The system uses a "Token-First" connectivity model to ensure visual harmony across all 8000+ pixels.

### The Design Token Pipeline
1.  **Central Initialization**: `globals.css` defines the 8px spacing scale (`--space-1` to `--space-12`) and the color palette.
2.  **Modular Consumption**: Component-level CSS Modules (e.g., `Projects.module.css`) import these tokens. This means changing a single variable in `globals.css` updates the entire system instantaneously.
3.  **Global UI Layers**: 
    *   `Preloader` blocks initial rendering until the boot sequence completes.
    *   `CustomCursor` operates on a top-level z-index layer, listening to mouse events across all components.
    *   `Navbar` uses an `IntersectionObserver` to track the user's scan-position and highlight active sections.

---

## ⚙️ 03: Operational Logic (How it works)

### Cinematic Rendering
*   **Terminal Logic**: The Hero section uses a sequential string-buffer system to simulate a high-speed boot sequence with randomized "tech-chatter."
*   **3D Parallax**: High-fidelity cards (Projects, Hero) use CSS `transform: perspective()` and `rotateX/Y` mapped to mouse coordinates for tangible depth.
*   **Shimmer Effects**: Premium cards utilize a `linear-gradient` mask that translates on the X-axis during hover, creating a "scanning" light effect.

### Interactive Protocols
*   **Secure Form (Contact)**: Communicates via a serverless handshake with **EmailJS**. It handles state verification (Sending/Success/Error) locally to ensure 0-latency UI feedback.
*   **Smooth Scroll**: Managed by native CSS `scroll-behavior: smooth` combined with JS-based offsets for precise navigation.

**System Status: OPTIMAL. 0 Errors Detected.**
