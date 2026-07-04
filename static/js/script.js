/* ══════════════════════════════════════════════════════
   OSCAR HEYTON PORTFOLIO — SCRIPT.JS AAA
   Autor: Oscar Heyton Sanchez Arias
══════════════════════════════════════════════════════ */

// ── LOADER ───────────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
  }, 2400);
});

// ── CURSOR PERSONALIZADO ─────────────────────────────────
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');

document.addEventListener('mousemove', e => {
  if (cursor) { cursor.style.left = e.clientX + 'px'; cursor.style.top = e.clientY + 'px'; }
  if (cursorFollower) {
    setTimeout(() => {
      cursorFollower.style.left = e.clientX + 'px';
      cursorFollower.style.top = e.clientY + 'px';
    }, 80);
  }
});

document.querySelectorAll('a, button, .skill-card, .project-card, .gallery-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    if (cursor) { cursor.style.width = '20px'; cursor.style.height = '20px'; cursor.style.background = 'var(--neon-purple)'; }
    if (cursorFollower) cursorFollower.style.transform = 'translate(-50%,-50%) scale(1.5)';
  });
  el.addEventListener('mouseleave', () => {
    if (cursor) { cursor.style.width = '12px'; cursor.style.height = '12px'; cursor.style.background = 'var(--neon-blue)'; }
    if (cursorFollower) cursorFollower.style.transform = 'translate(-50%,-50%) scale(1)';
  });
});

// ── NAVBAR ───────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }
  // Scroll top button
  const scrollBtn = document.getElementById('scrollTop');
  if (scrollBtn) scrollBtn.classList.toggle('visible', window.scrollY > 400);
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    if (navLinks.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
}

// Active nav link
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPath || (currentPath === '/' && href === '/#inicio')) {
    link.classList.add('active');
  } else if (href && href !== '/' && currentPath.startsWith(href.replace('/#inicio',''))) {
    link.classList.add('active');
  }
});

// Smooth scroll para anclas internas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll top button
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── SNOW SYSTEM ──────────────────────────────────────────
function createSnow() {
  const container = document.getElementById('snow-container');
  if (!container) return;
  const count = window.innerWidth < 768 ? 40 : 80;

  for (let i = 0; i < count; i++) {
    const flake = document.createElement('div');
    flake.className = 'snowflake';
    const size = Math.random() * 4 + 1;
    const drift = (Math.random() - 0.5) * 100;
    const duration = Math.random() * 8 + 6;
    const delay = Math.random() * 10;
    const opacity = Math.random() * 0.6 + 0.3;
    const blur = Math.random() * 2;

    flake.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size}px;
      opacity: ${opacity};
      filter: blur(${blur}px) drop-shadow(0 0 ${size * 2}px rgba(255,255,255,0.8));
      --drift: ${drift}px;
      animation-duration: ${duration}s;
      animation-delay: -${delay}s;
    `;
    container.appendChild(flake);
  }
}
createSnow();

// ── HEARTS SYSTEM ────────────────────────────────────────
function createHearts() {
  const container = document.getElementById('heartsContainer');
  if (!container || container.style.display === 'none') return;
  const emojis = ['❤️','💖','💕','💗','💝','🌸','✨','💫'];
  setInterval(() => {
    if (Math.random() > 0.6) return;
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 1.5 + 0.8) + 'rem';
    heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
    heart.style.animationDelay = '0s';
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 9000);
  }, 800);
}
createHearts();

// ── AOS INIT ─────────────────────────────────────────────
if (typeof AOS !== 'undefined') {
  AOS.init({ duration: 700, once: true, offset: 80, easing: 'ease-out-cubic' });
}

// ── SKILL BARS ANIMATION ─────────────────────────────────
function animateSkillBars() {
  const bars = document.querySelectorAll('.skill-fill[data-width]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        setTimeout(() => {
          bar.style.width = bar.dataset.width + '%';
        }, 200);
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(bar => observer.observe(bar));
}
animateSkillBars();

// ── COUNTER ANIMATION ────────────────────────────────────
function animateCounters() {
  const counters = document.querySelectorAll('.counter-anim[data-target]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = Math.floor(current);
        }, 20);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => observer.observe(el));
}
animateCounters();

// ── REVEAL ANIMATIONS ────────────────────────────────────
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('revealed'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));
}
initReveal();

// ── MODAL ─────────────────────────────────────────────────
const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const modalClose = document.getElementById('modalClose');

function openModal(el) {
  const img = el.querySelector('img');
  if (img && modal && modalImg) {
    modalImg.src = img.src;
    modal.classList.add('open');
  }
}

if (modalClose) modalClose.addEventListener('click', () => modal.classList.remove('open'));
if (modal) modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal) modal.classList.remove('open'); });
