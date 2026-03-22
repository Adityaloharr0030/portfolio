"use client";

import { useEffect } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    /* ---- Preloader ---- */
    const preloader = document.getElementById("preloader");
    const fill = document.getElementById("preloader-fill");
    if (preloader && fill) {
      let pct = 0;
      const interval = setInterval(() => {
        pct = Math.min(pct + Math.random() * 18, 95);
        fill.style.width = pct + "%";
      }, 80);

      const handleLoad = () => {
        clearInterval(interval);
        fill.style.width = "100%";
        setTimeout(() => {
          preloader.classList.add("hidden");
        }, 400);
      };

      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad);
      }

      // Safety fallback
      setTimeout(() => {
        preloader.classList.add("hidden");
      }, 3000);
    }

    /* ---- Scroll Progress Bar ---- */
    const scrollBar = document.getElementById("scroll-progress");
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pctScroll = total > 0 ? (window.scrollY / total) * 100 : 0;
      if (scrollBar) scrollBar.style.width = pctScroll + "%";
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    /* ---- Terminal Typing Sequence ---- */
    const cmds = [
      { cmdId: "t-cmd-1", outId: "t-out-1", lineId: null, text: "npm run dev" },
      { cmdId: "t-cmd-2", outId: "t-out-2", lineId: "t-line-2", text: "mongod --port 27017" },
      { cmdId: "t-cmd-3", outId: "t-out-3", lineId: "t-line-3", text: "node server.js" },
      { cmdId: "t-cmd-4", outId: "t-out-4", lineId: "t-line-4", text: "git push origin main" },
    ];

    const terminalTimeouts = [];
    let termDelay = 800;
    cmds.forEach((cmd) => {
      const tid = setTimeout(() => {
        if (cmd.lineId) {
          const lineEl = document.getElementById(cmd.lineId);
          if (lineEl) lineEl.style.display = "flex";
        }
        const el = document.getElementById(cmd.cmdId);
        if (!el) return;
        let j = 0;
        const typing = setInterval(() => {
          el.textContent += cmd.text[j++];
          if (j >= cmd.text.length) {
            clearInterval(typing);
            setTimeout(() => {
              const out = document.getElementById(cmd.outId);
              if (out) out.style.display = "flex";
            }, 300);
          }
        }, 55);
      }, termDelay);
      terminalTimeouts.push(tid);
      termDelay += cmd.text.length * 55 + 800;
    });

    /* ---- Custom Cursor ---- */
    const cursor = document.getElementById("cursor");
    const cursorFollower = document.getElementById("cursor-follower");
    let cursorRaf;
    if (window.matchMedia("(hover:hover)").matches && cursor && cursorFollower) {
      let mx = 0, my = 0, fx = 0, fy = 0;

      const onMouseMove = (e) => {
        mx = e.clientX;
        my = e.clientY;
        cursor.style.left = mx + "px";
        cursor.style.top = my + "px";
      };
      document.addEventListener("mousemove", onMouseMove);

      const animateCursor = () => {
        fx += (mx - fx) * 0.12;
        fy += (my - fy) * 0.12;
        cursorFollower.style.left = fx + "px";
        cursorFollower.style.top = fy + "px";
        cursorRaf = requestAnimationFrame(animateCursor);
      }
      animateCursor();

      document.querySelectorAll("a, button, .project-card, .contact-card").forEach((el) => {
        el.addEventListener("mouseenter", () => {
          cursor.style.transform = "translate(-50%,-50%) scale(1.8)";
          cursorFollower.style.transform = "translate(-50%,-50%) scale(1.5)";
          cursorFollower.style.borderColor = "rgba(108,99,255,0.8)";
        });
        el.addEventListener("mouseleave", () => {
          cursor.style.transform = "translate(-50%,-50%) scale(1)";
          cursorFollower.style.transform = "translate(-50%,-50%) scale(1)";
          cursorFollower.style.borderColor = "rgba(108,99,255,0.5)";
        });
      });
    }

    /* ---- Particles Canvas ---- */
    const canvas = document.getElementById("particles-canvas") as HTMLCanvasElement | null;
    let particlesRaf: number;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      let W: number, H: number, particles: Particle[];

      const resize = () => {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
      };

      class Particle {
        x!: number; y!: number; r!: number; vx!: number; vy!: number; alpha!: number; color!: string;
        constructor() { this.reset(true); }
        reset(init) {
          this.x = Math.random() * W;
          this.y = init ? Math.random() * H : H + 10;
          this.r = Math.random() * 1.8 + 0.4;
          this.vx = (Math.random() - 0.5) * 0.3;
          this.vy = -(Math.random() * 0.4 + 0.15);
          this.alpha = Math.random() * 0.6 + 0.2;
          this.color =
            Math.random() > 0.5
              ? `rgba(108,99,255,${this.alpha})`
              : `rgba(0,212,255,${this.alpha})`;
        }
        update() {
          this.x += this.vx;
          this.y += this.vy;
          if (this.y < -10) this.reset(false);
        }
        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        }
      }

      resize();
      particles = Array.from({ length: 80 }, () => new Particle());

      const loop = () => {
        ctx!.clearRect(0, 0, W, H);
        particles.forEach((p) => { p.update(); p.draw(); });
        particlesRaf = requestAnimationFrame(loop);
      }

      window.addEventListener("resize", resize);
      loop();
    }

    /* ---- Typed Text Effect ---- */
    const typedEl = document.getElementById("typed-text");
    let typedTimeout;
    if (typedEl) {
      const roles = [
        "Full-Stack Developer",
        "React / Next.js Dev",
        "Node.js Engineer",
        "Problem Solver",
        "Open to Internships",
      ];
      let rIdx = 0, cIdx = 0, deleting = false;

      const tick = () => {
        const word = roles[rIdx];
        if (!deleting) {
          typedEl.textContent = word.slice(0, ++cIdx);
          if (cIdx === word.length) {
            deleting = true;
            typedTimeout = setTimeout(tick, 2000);
            return;
          }
        } else {
          typedEl.textContent = word.slice(0, --cIdx);
          if (cIdx === 0) {
            deleting = false;
            rIdx = (rIdx + 1) % roles.length;
          }
        }
        typedTimeout = setTimeout(tick, deleting ? 55 : 90);
      }
      tick();
    }

    /* ---- Nav scroll effect + active link ---- */
    const header = document.getElementById("header");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section[id]");
    const backTopBtn = document.getElementById("back-top");

    const handleNavScroll = () => {
      if (header) header.classList.toggle("scrolled", window.scrollY > 40);

      let current = "";
      sections.forEach((sec) => {
        const el = sec as HTMLElement;
        if (window.scrollY >= el.offsetTop - 120) current = el.getAttribute("id") || "";
      });
      navLinks.forEach((link) => {
        const el = link as HTMLElement;
        el.classList.toggle("active", el.dataset.section === current);
      });

      if (backTopBtn) backTopBtn.classList.toggle("visible", window.scrollY > 400);
    };
    window.addEventListener("scroll", handleNavScroll);

    /* ---- Mobile hamburger ---- */
    const hamburger = document.getElementById("hamburger");
    const navList = document.getElementById("nav-links");
    if (hamburger && navList) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        navList.classList.toggle("open");
      });
      navList.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("open");
          navList.classList.remove("open");
        });
      });
    }

    /* ---- Back to top ---- */
    if (backTopBtn) {
      backTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    /* ---- Intersection Observer – AOS + skill bars ---- */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
            entry.target.querySelectorAll &&
              entry.target.querySelectorAll(".js-skill-bar-fill").forEach((bar: any) => {
                bar.style.width = bar.dataset.width + "%";
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll("[data-aos]").forEach((el) => observer.observe(el));

    /* Observe skills bars */
    const skillsSection = document.querySelector(".js-skills-bars");
    let barsObserver;
    if (skillsSection) {
      barsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.querySelectorAll(".js-skill-bar-fill").forEach((bar: any, i) => {
                setTimeout(() => {
                  bar.style.width = bar.dataset.width + "%";
                }, i * 120);
              });
              barsObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );
      barsObserver.observe(skillsSection);
    }

    /* ---- AOS delay ---- */
    document.querySelectorAll("[data-aos-delay]").forEach((el: any) => {
      el.style.transitionDelay = el.dataset.aosDelay + "ms";
    });

    /* ---- Smooth scroll for anchor links ---- */
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    /* ---- Stat counter animation ---- */
    function animateCounter(el, target, duration = 1500) {
      let start = 0;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const pctVal = Math.min(progress / duration, 1);
        el.textContent = Math.floor(pctVal * target) + (el.dataset.suffix || "+");
        if (pctVal < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".stat-number").forEach((numEl) => {
              const raw = parseInt(numEl.textContent);
              if (!isNaN(raw)) animateCounter(numEl, raw);
            });
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    const statsSection = document.querySelector(".about-stats-row");
    if (statsSection) statsObserver.observe(statsSection);

    /* ---- Cleanup ---- */
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleNavScroll);
      terminalTimeouts.forEach(clearTimeout);
      if (typedTimeout) clearTimeout(typedTimeout);
      if (cursorRaf) cancelAnimationFrame(cursorRaf);
      if (particlesRaf) cancelAnimationFrame(particlesRaf);
      observer.disconnect();
      if (barsObserver) barsObserver.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Scroll Progress */}
      <div id="scroll-progress"></div>

      {/* Particles Canvas */}
      <canvas id="particles-canvas"></canvas>

      <Preloader />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      {/* Back to top */}
      <button id="back-top" className="back-top" aria-label="Back to top">
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </>
  );
}
