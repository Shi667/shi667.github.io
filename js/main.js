/* ============================================
   PORTFOLIO — HAMMOUCHE MEROUANE
   Interactions & Animations
   ============================================ */

// ===================== CURSOR =====================
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursorTrail');

if (cursor && trail) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    setTimeout(() => {
      trail.style.left = e.clientX + 'px';
      trail.style.top = e.clientY + 'px';
    }, 80);
  });
}

// ===================== NAV SCROLL =====================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ===================== MOBILE MENU =====================
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// ===================== TYPED TEXT =====================
const phrases = [
  'Master SII @ USTHB',
  'AI & NLP Engineer',
  'LLMs & RAG Specialist',
  'Full-Stack Developer',
  'Research Intern @ LRIA'
];
let phraseIdx = 0, charIdx = 0, deleting = false;
const typedEl = document.getElementById('typedText');

function typeLoop() {
  if (!typedEl) return;
  const current = phrases[phraseIdx];
  if (!deleting) {
    typedEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, deleting ? 45 : 85);
}
setTimeout(typeLoop, 700);

// ===================== SCROLL ANIMATIONS =====================
function addScrollAnimClass(selector, cls) {
  document.querySelectorAll(selector).forEach(el => el.classList.add(cls));
}

addScrollAnimClass('.skill-card', 'fade-in');
addScrollAnimClass('.project-item', 'fade-in');
addScrollAnimClass('.timeline-item', 'fade-in');
addScrollAnimClass('.about-card', 'fade-in');
addScrollAnimClass('.about-text', 'fade-in-left');
addScrollAnimClass('.contact-left', 'fade-in-left');
addScrollAnimClass('.contact-right', 'fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in, .fade-in-left').forEach(el => observer.observe(el));

// Stagger skill cards by group
document.querySelectorAll('.skill-card').forEach((el, i) => {
  el.style.transitionDelay = (i * 80) + 'ms';
});
document.querySelectorAll('.timeline-item').forEach((el, i) => {
  el.style.transitionDelay = (i * 100) + 'ms';
});

// ===================== ACTIVE NAV LINK =====================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--text)';
    }
  });
});

// ===================== SMOOTH SCROLL =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===================== PARALLAX GLOW =====================
document.addEventListener('mousemove', (e) => {
  const glow1 = document.querySelector('.glow-1');
  const glow2 = document.querySelector('.glow-2');
  if (!glow1 || !glow2) return;
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  glow1.style.transform = `translate(${x * 30}px, ${y * 20}px)`;
  glow2.style.transform = `translate(${-x * 20}px, ${-y * 15}px)`;
});

// ===================== CONSOLE EASTER EGG =====================
console.log(
  '%c Hammouche Merouane 🤖 %c AI/NLP Engineer · USTHB · Alger ',
  'background:#4fffb0;color:#090c10;font-weight:800;padding:4px 8px;border-radius:4px 0 0 4px;font-size:14px',
  'background:#12171f;color:#4fffb0;padding:4px 8px;border-radius:0 4px 4px 0;font-size:14px;border:1px solid #4fffb0'
);
console.log('%c📧 merouane.hammouche667@gmail.com', 'color:#3de8fc;font-family:monospace');
