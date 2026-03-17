/* ============================================
   ADITYA LOHAR PORTFOLIO – script.js
   ============================================ */

'use strict';

/* ---- Preloader ---- */
(function initPreloader() {
  const preloader = document.getElementById('preloader');
  const fill      = document.getElementById('preloader-fill');
  if (!preloader) return;

  let pct = 0;
  const interval = setInterval(() => {
    pct = Math.min(pct + Math.random() * 18, 95);
    fill.style.width = pct + '%';
  }, 80);

  window.addEventListener('load', () => {
    clearInterval(interval);
    fill.style.width = '100%';
    setTimeout(() => {
      preloader.classList.add('hidden');
    }, 400);
  });

  // Safety fallback
  setTimeout(() => {
    preloader.classList.add('hidden');
  }, 3000);
})();

/* ---- Scroll Progress Bar ---- */
const scrollBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const pct   = total > 0 ? (window.scrollY / total) * 100 : 0;
  if (scrollBar) scrollBar.style.width = pct + '%';
}, { passive: true });

/* ---- Terminal Typing Sequence ---- */
(function initTerminal() {
  const cmds = [
    { cmdId: 't-cmd-1', outId: 't-out-1', lineId: null,       text: 'npm run dev' },
    { cmdId: 't-cmd-2', outId: 't-out-2', lineId: 't-line-2', text: 'mongod --port 27017' },
    { cmdId: 't-cmd-3', outId: 't-out-3', lineId: 't-line-3', text: 'node server.js' },
    { cmdId: 't-cmd-4', outId: 't-out-4', lineId: 't-line-4', text: 'git push origin main' },
  ];

  let delay = 800;

  cmds.forEach((cmd, i) => {
    // show line and type command
    setTimeout(() => {
      if (cmd.lineId) document.getElementById(cmd.lineId).style.display = 'flex';
      const el = document.getElementById(cmd.cmdId);
      if (!el) return;
      let j = 0;
      const cursor = document.getElementById('t-cursor');
      const typing = setInterval(() => {
        el.textContent += cmd.text[j++];
        if (j >= cmd.text.length) {
          clearInterval(typing);
          // show output after typing
          setTimeout(() => {
            const out = document.getElementById(cmd.outId);
            if (out) out.style.display = 'flex';
            if (cursor) el.parentElement.after(out);
          }, 300);
        }
      }, 55);
    }, delay);

    delay += cmd.text.length * 55 + 800;
  });
})();


/* ---- Custom Cursor ---- */
const cursor         = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');

if (window.matchMedia('(hover:hover)').matches) {
  let mx = 0, my = 0, fx = 0, fy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  (function animateCursor() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    cursorFollower.style.left = fx + 'px';
    cursorFollower.style.top  = fy + 'px';
    requestAnimationFrame(animateCursor);
  })();

  document.querySelectorAll('a, button, .project-card, .contact-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1.8)';
      cursorFollower.style.transform = 'translate(-50%,-50%) scale(1.5)';
      cursorFollower.style.borderColor = 'rgba(108,99,255,0.8)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      cursorFollower.style.transform = 'translate(-50%,-50%) scale(1)';
      cursorFollower.style.borderColor = 'rgba(108,99,255,0.5)';
    });
  });
}

/* ---- Particles Canvas ---- */
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx    = canvas.getContext('2d');

  let W, H, particles;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() { this.reset(true); }
    reset(init) {
      this.x  = Math.random() * W;
      this.y  = init ? Math.random() * H : H + 10;
      this.r  = Math.random() * 1.8 + 0.4;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = -(Math.random() * 0.4 + 0.15);
      this.alpha = Math.random() * 0.6 + 0.2;
      this.color = Math.random() > 0.5
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

  function init() {
    resize();
    particles = Array.from({ length: 80 }, () => new Particle());
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }

  window.addEventListener('resize', resize);
  init();
  loop();
})();

/* ---- Typed Text Effect ---- */
(function typed() {
  const el     = document.getElementById('typed-text');
  const roles  = [
    'Full-Stack Developer',
    'React / Next.js Dev',
    'Node.js Engineer',
    'Problem Solver',
    'Open to Internships'
  ];
  let rIdx = 0, cIdx = 0, deleting = false;

  function tick() {
    const word = roles[rIdx];
    if (!deleting) {
      el.textContent = word.slice(0, ++cIdx);
      if (cIdx === word.length) {
        deleting = true;
        setTimeout(tick, 2000);
        return;
      }
    } else {
      el.textContent = word.slice(0, --cIdx);
      if (cIdx === 0) {
        deleting = false;
        rIdx = (rIdx + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 55 : 90);
  }
  tick();
})();

/* ---- Nav scroll effect + active link ---- */
const header   = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  /* header glass effect */
  header.classList.toggle('scrolled', window.scrollY > 40);

  /* active nav link */
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120)
      current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.section === current);
  });

  /* back-to-top */
  document.getElementById('back-top').classList.toggle('visible', window.scrollY > 400);
});

/* ---- Mobile hamburger ---- */
const hamburger = document.getElementById('hamburger');
const navList   = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navList.classList.toggle('open');
});

navList.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navList.classList.remove('open');
  });
});

/* ---- Back to top ---- */
document.getElementById('back-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ---- Intersection Observer – AOS + skill bars ---- */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aos-animate');

      /* animate skill bars when in view */
      entry.target.querySelectorAll && entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });

      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

/* Observe skills section independently for bars */
const skillsSection = document.querySelector('.skills-bars');
if (skillsSection) {
  const barsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar-fill').forEach((bar, i) => {
          setTimeout(() => {
            bar.style.width = bar.dataset.width + '%';
          }, i * 120);
        });
        barsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  barsObserver.observe(skillsSection);
}

/* ---- AOS delay from data-aos-delay ---- */
document.querySelectorAll('[data-aos-delay]').forEach(el => {
  el.style.transitionDelay = el.dataset.aosDelay + 'ms';
});

/* ---- Contact form – EmailJS (emails go to your Gmail inbox) ---- */
// ⚙️  SETUP (one-time, free):
//   1. Sign up at https://www.emailjs.com  (free – 200 emails/month)
//   2. Add a Gmail service  →  copy the Service ID
//   3. Create an email template →  copy the Template ID
//   4. Go to Account → API Keys  →  copy the Public Key
//   5. Replace the 3 placeholders below and in index.html <head>
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz456'

// The form submits directly right now using a simulation timeout. 
// When you have your EmailJS keys, uncomment the EmailJS code below.
// Public Key is already set in index.html <head> emailjs.init(...)

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) return;

    // Basic validation
    let valid = true;
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      if (!input.value.trim()) valid = false;
    });

    if (!valid) {
      alert('Please fill out all fields before sending.');
      return;
    }

    // UI Loading state
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline-block';
    submitBtn.disabled = true;

    // SIMULATED EMAIL SEND (Replace this entire block with EmailJS later)
    setTimeout(() => {
      // Success
      btnText.style.display = 'inline-block';
      btnLoader.style.display = 'none';
      submitBtn.disabled = false;
      contactForm.reset();
      
      formSuccess.style.display = 'block';
      setTimeout(() => { formSuccess.style.display = 'none'; }, 5000);
      
    }, 1500); // Simulate 1.5s network request

    /* 
    // REAL EMAILJS CODE (Uncomment when you have your keys)
    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this)
      .then(() => {
        btnText.style.display = 'inline-block';
        btnLoader.style.display = 'none';
        submitBtn.disabled = false;
        contactForm.reset();
        
        formSuccess.style.display = 'block';
        setTimeout(() => { formSuccess.style.display = 'none'; }, 5000);
      }, (error) => {
        btnText.style.display = 'inline-block';
        btnLoader.style.display = 'none';
        submitBtn.disabled = false;
        console.error('EmailJS Error:', error);
        alert('Oops! Something went wrong. Please try again or email me directly.');
      });
    */
  });
}

/* ---- Smooth scroll for anchor links ---- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ---- Stat counter animation ---- */
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const pct = Math.min(progress / duration, 1);
    el.textContent = Math.floor(pct * target) + (el.dataset.suffix || '+');
    if (pct < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-number').forEach(numEl => {
        const raw = parseInt(numEl.textContent);
        if (!isNaN(raw)) animateCounter(numEl, raw);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

const statsSection = document.querySelector('.about-stats');
if (statsSection) statsObserver.observe(statsSection);


