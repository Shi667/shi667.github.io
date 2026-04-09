/* ============================================
   PORTFOLIO — HAMMOUCHE MEROUANE
   Interactions, Animations & i18n
   ============================================ */

// ===================== i18n TRANSLATIONS =====================
const translations = {
  fr: {
    'nav.about': 'À propos',
    'nav.skills': 'Skills',
    'nav.projects': 'Projets',
    'nav.experience': 'Expérience',
    'nav.contact': 'Contact',

    'hero.available': 'Disponible pour des opportunités',
    'hero.desc': 'Étudiant en Master SII à l\'USTHB · Spécialiste IA & NLP · Passionné par les LLMs, le RAG et l\'optimisation algorithmique.',
    'hero.cta1': 'Voir mes projets',
    'hero.cta2': 'Me contacter',

    'about.label': '01 — À propos',
    'about.title': 'Ingénieur logiciel <em>orienté IA</em>',
    'about.p1': 'Je suis étudiant en Master Systèmes Informatiques Intelligents à l\'USTHB (Alger), actuellement stagiaire en recherche au <strong>Laboratoire LRIA</strong>. Mon mémoire porte sur un système intelligent de gestion de documents juridiques exploitant les LLMs et la technique RAG.',
    'about.p2': 'Je m\'intéresse particulièrement aux méthodes d\'optimisation, au raisonnement automatique et à l\'apprentissage automatique. Je vise à contribuer à des projets à forte valeur technologique et scientifique.',
    'about.stat1': 'Projets réalisés',
    'about.stat2': 'Langues maîtrisées',
    'about.stat3': 'Niveau actuel',
    'about.loc': 'Localisation',
    'about.univ': 'Université',
    'about.spec': 'Spécialité',
    'about.lab': 'Labo',
    'about.langFr': 'Français',
    'about.langEn': 'Anglais',
    'about.langAr': 'Arabe',

    'skills.label': '02 — Compétences',
    'skills.title': 'Stack <em>technique</em>',
    'skills.ai': 'IA & Machine Learning',
    'skills.langs': 'Langages',
    'skills.web': 'Développement Web',
    'skills.mobile': 'Mobile & Data',
    'skills.algo': 'Algorithmique',
    'skills.algo.opt': 'Optimisation',
    'skills.soft': 'Soft Skills',
    'skills.soft.pm': 'Gestion de projet',
    'skills.soft.lead': 'Leadership',
    'skills.soft.team': 'Travail d\'équipe',
    'skills.soft.crit': 'Pensée critique',

    'projects.label': '03 — Projets',
    'projects.title': 'Ce que j\'ai <em>construit</em>',
    'projects.p1.badge': 'En cours · Mémoire PFE',
    'projects.p1.title': 'Système Intelligent d\'Analyse de Documents Juridiques',
    'projects.p1.desc': 'Prototype RAG exploitant les LLMs pour extraire les informations clés, retrouver les dispositions légales pertinentes et générer des résumés concis à partir de corpus juridiques publics algériens.',
    'projects.p2.title': 'Job Shop Scheduling × PSO',
    'projects.p2.desc': 'Optimisation du temps de production via un algorithme PSO amélioré avec opérateurs de mutation et gestion de stagnation. Évalué sur les benchmarks Taillard.',
    'projects.p3.title': 'Application Mobile de Gestion de Présence',
    'projects.p3.desc': 'Application Flutter + Firebase avec suivi en temps réel et partage de fichiers P2P via Wi-Fi direct, sans connexion Internet.',
    'projects.p4.title': 'Modélisation des Risques d\'Incendies de Forêts',
    'projects.p4.desc': 'Analyse multi-sources (sol, climat, élévation) pour identifier les zones à risque en Algérie et Tunisie, combinant approches supervisées et non supervisées.',
    'projects.p5.title': 'Classification de Parfums par Genre',
    'projects.p5.desc': 'Comparaison de modèles ML (Logistic Regression, KNN, Decision Tree, Random Forest, SVC, XGBoost) pour classifier les parfums selon leurs notes olfactives.',
    'projects.p6.title': 'Site Vitrine SARL REMY',
    'projects.p6.desc': 'Solution web full-stack MERN avec catalogue produits, formulaire de contact et dashboard administrateur, optimisée SEO.',

    'exp.label': '04 — Parcours',
    'exp.title': 'Formation & <em>Expérience</em>',
    'exp.edu': 'Formation',
    'exp.work': 'Travail',
    'exp.research': 'Recherche',
    'exp.e1.date': '2024 — Aujourd\'hui',
    'exp.e1.title': 'Master en Systèmes Informatiques Intelligents',
    'exp.e1.desc': 'USTHB, Alger · Spécialisation IA, NLP, Optimisation · Mémoire sur les LLMs et RAG',
    'exp.e2.date': 'Sept. 2025 — Aujourd\'hui',
    'exp.e2.title': 'Stagiaire en Recherche — Laboratoire LRIA',
    'exp.e2.desc': 'USTHB · Développement d\'un système intelligent d\'analyse de documents juridiques algériens (LLMs, RAG, NLP)',
    'exp.e3.title': 'Licence en Informatique',
    'exp.e4.date': 'Juil. 2023 — Sept. 2025',
    'exp.e4.title': 'Vendeur / Caissier — Le Monde du Chocolat',
    'exp.e4.desc': 'Gestion de la caisse, service client, travail en équipe',
    'exp.e5.title': 'Baccalauréat Scientifique — Option Mathématiques',
    'exp.e5.desc': 'Lycée Said-Hamdin, Hydra, Alger',

    'contact.label': '05 — Contact',
    'contact.title': 'Travaillons <em>ensemble</em>',
    'contact.desc': 'Je suis ouvert aux opportunités de stage, collaboration sur des projets IA/NLP, ou simplement discuter de tech. N\'hésitez pas à me contacter !',
    'contact.available': 'Disponible pour des missions',
    'contact.d1': 'Projets IA / NLP / LLMs',
    'contact.d2': 'Développement logiciel',
    'contact.d3': 'Recherche académique',
    'contact.d4': 'Stages & Alternances',
  },
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',

    'hero.available': 'Open to opportunities',
    'hero.desc': 'Master\'s student in Intelligent Computer Systems at USTHB · AI & NLP Specialist · Passionate about LLMs, RAG and algorithmic optimization.',
    'hero.cta1': 'View my projects',
    'hero.cta2': 'Get in touch',

    'about.label': '01 — About',
    'about.title': 'Software engineer <em>focused on AI</em>',
    'about.p1': 'I am a Master\'s student in Intelligent Computer Systems at USTHB (Algiers), currently a research intern at the <strong>LRIA Laboratory</strong>. My thesis focuses on an intelligent legal document management system leveraging LLMs and the RAG technique.',
    'about.p2': 'I am particularly interested in optimization methods, automated reasoning and machine learning. I aim to contribute to projects with high technological and scientific value.',
    'about.stat1': 'Projects completed',
    'about.stat2': 'Languages spoken',
    'about.stat3': 'Current level',
    'about.loc': 'Location',
    'about.univ': 'University',
    'about.spec': 'Major',
    'about.lab': 'Lab',
    'about.langFr': 'French',
    'about.langEn': 'English',
    'about.langAr': 'Arabic',

    'skills.label': '02 — Skills',
    'skills.title': 'Technical <em>stack</em>',
    'skills.ai': 'AI & Machine Learning',
    'skills.langs': 'Languages',
    'skills.web': 'Web Development',
    'skills.mobile': 'Mobile & Data',
    'skills.algo': 'Algorithms',
    'skills.algo.opt': 'Optimization',
    'skills.soft': 'Soft Skills',
    'skills.soft.pm': 'Project management',
    'skills.soft.lead': 'Leadership',
    'skills.soft.team': 'Teamwork',
    'skills.soft.crit': 'Critical thinking',

    'projects.label': '03 — Projects',
    'projects.title': 'What I\'ve <em>built</em>',
    'projects.p1.badge': 'In progress · Master\'s thesis',
    'projects.p1.title': 'Intelligent Legal Document Analysis System',
    'projects.p1.desc': 'RAG prototype leveraging LLMs to extract key information, retrieve relevant legal provisions and generate concise summaries from Algerian public legal corpora.',
    'projects.p2.title': 'Job Shop Scheduling × PSO',
    'projects.p2.desc': 'Production time optimization via an enhanced PSO algorithm with mutation operators and stagnation management. Evaluated on Taillard benchmark instances.',
    'projects.p3.title': 'Mobile Attendance Management App',
    'projects.p3.desc': 'Flutter + Firebase application with real-time tracking and P2P file sharing via Wi-Fi Direct, without Internet connection.',
    'projects.p4.title': 'Forest Fire Risk Modeling',
    'projects.p4.desc': 'Multi-source analysis (soil, climate, elevation) to identify high-risk zones in Algeria and Tunisia, combining supervised and unsupervised approaches.',
    'projects.p5.title': 'Fragrance Gender Classification',
    'projects.p5.desc': 'Comparison of ML models (Logistic Regression, KNN, Decision Tree, Random Forest, SVC, XGBoost) to classify fragrances by gender based on olfactory notes.',
    'projects.p6.title': 'SARL REMY Showcase Website',
    'projects.p6.desc': 'Full-stack MERN web solution with product catalog, contact form and admin dashboard, SEO-optimized.',

    'exp.label': '04 — Journey',
    'exp.title': 'Education & <em>Experience</em>',
    'exp.edu': 'Education',
    'exp.work': 'Work',
    'exp.research': 'Research',
    'exp.e1.date': '2024 — Present',
    'exp.e1.title': 'Master\'s in Intelligent Computer Systems',
    'exp.e1.desc': 'USTHB, Algiers · Specialization in AI, NLP, Optimization · Thesis on LLMs and RAG',
    'exp.e2.date': 'Sep. 2025 — Present',
    'exp.e2.title': 'Research Intern — LRIA Laboratory',
    'exp.e2.desc': 'USTHB · Development of an intelligent Algerian legal document analysis system (LLMs, RAG, NLP)',
    'exp.e3.title': 'Bachelor\'s Degree in Computer Science',
    'exp.e4.date': 'Jul. 2023 — Sep. 2025',
    'exp.e4.title': 'Sales Associate / Cashier — Le Monde du Chocolat',
    'exp.e4.desc': 'Cash register management, customer service, teamwork',
    'exp.e5.title': 'Scientific Baccalaureate — Mathematics',
    'exp.e5.desc': 'Lycée Said-Hamdin, Hydra, Algiers',

    'contact.label': '05 — Contact',
    'contact.title': 'Let\'s work <em>together</em>',
    'contact.desc': 'I\'m open to internship opportunities, collaboration on AI/NLP projects, or simply talking tech. Feel free to reach out!',
    'contact.available': 'Available for opportunities',
    'contact.d1': 'AI / NLP / LLMs Projects',
    'contact.d2': 'Software development',
    'contact.d3': 'Academic research',
    'contact.d4': 'Internships & Apprenticeships',
  }
};

// ===================== LANG SWITCH =====================
let currentLang = localStorage.getItem('portfolio-lang') || 'fr';

const typedPhrases = {
  fr: ['Master SII @ USTHB', 'Spécialiste IA & NLP', 'Expert LLMs & RAG', 'Développeur Full-Stack', 'Stagiaire Chercheur @ LRIA'],
  en: ['Master SII @ USTHB', 'AI & NLP Specialist', 'LLMs & RAG Expert', 'Full-Stack Developer', 'Research Intern @ LRIA']
};

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);

  // Update active button
  document.getElementById('langFr').classList.toggle('active', lang === 'fr');
  document.getElementById('langEn').classList.toggle('active', lang === 'en');

  // Fade out
  document.body.style.opacity = '0.6';
  document.body.style.transition = 'opacity 0.18s ease';

  setTimeout(() => {
    // Translate all elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key] !== undefined) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Reset typed text phrases
    phraseIdx = 0; charIdx = 0; deleting = false;
    const typedEl = document.getElementById('typedText');
    if (typedEl) typedEl.textContent = '';

    document.body.style.opacity = '1';
  }, 180);
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'fr' ? 'en' : 'fr');
});

// Init lang on load
applyLang(currentLang);

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
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ===================== MOBILE MENU =====================
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

navToggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileLinks.forEach(link => link.addEventListener('click', () => mobileMenu.classList.remove('open')));

// ===================== TYPED TEXT =====================
let phraseIdx = 0, charIdx = 0, deleting = false;

function typeLoop() {
  const typedEl = document.getElementById('typedText');
  if (!typedEl) return;
  const phrases = typedPhrases[currentLang];
  const current = phrases[phraseIdx % phrases.length];
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
setTimeout(typeLoop, 900);

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
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in, .fade-in-left').forEach(el => observer.observe(el));

document.querySelectorAll('.skill-card').forEach((el, i) => { el.style.transitionDelay = (i * 80) + 'ms'; });
document.querySelectorAll('.timeline-item').forEach((el, i) => { el.style.transitionDelay = (i * 100) + 'ms'; });

// ===================== ACTIVE NAV LINK =====================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) link.style.color = 'var(--text)';
  });
});

// ===================== SMOOTH SCROLL =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
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

