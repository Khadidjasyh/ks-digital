// ── Cursor glow ──────────────────────────────────────────
const glow = document.createElement('div');
glow.id = 'cursor-glow';
document.body.appendChild(glow);
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// ── Scroll progress bar ───────────────────────────────────
const progressBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = pct + '%';
});

// ── Back to top ───────────────────────────────────────────
const backTop = document.getElementById('back-top');
window.addEventListener('scroll', () => {
  backTop.classList.toggle('visible', window.scrollY > 400);
});
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── Popup devis après 12s ─────────────────────────────────
setTimeout(() => {
  document.getElementById('popup-overlay').classList.add('show');
}, 12000);
document.getElementById('popup-close').addEventListener('click', () => {
  document.getElementById('popup-overlay').classList.remove('show');
});
document.getElementById('popup-overlay').addEventListener('click', function(e) {
  if (e.target === this) this.classList.remove('show');
});

// ── Theme toggle ──────────────────────────────────────────
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeBtn.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
});

// ── Particles ─────────────────────────────────────────────
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
resize(); window.addEventListener('resize', resize);
const pts = Array.from({ length: 65 }, () => ({
  x: Math.random() * canvas.width, y: Math.random() * canvas.height,
  r: Math.random() * 1.5 + 0.3,
  dx: (Math.random() - 0.5) * 0.3, dy: (Math.random() - 0.5) * 0.3,
  a: Math.random() * 0.35 + 0.1
}));
(function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pts.forEach(p => {
    ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(165,148,249,${p.a})`; ctx.fill();
    p.x += p.dx; p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
    const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
    if (d < 120) {
      ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
      ctx.strokeStyle = `rgba(124,109,240,${0.1 * (1 - d / 120)})`; ctx.lineWidth = 0.5; ctx.stroke();
    }
  }
  requestAnimationFrame(draw);
})();

// ── Scroll reveal ─────────────────────────────────────────
const revealObs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) { setTimeout(() => e.target.classList.add('visible'), i * 80); revealObs.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ── Smooth scroll ─────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a =>
  a.addEventListener('click', e => { e.preventDefault(); document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' }); })
);

// ── Nav active ────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
  document.querySelectorAll('nav ul a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
});

// ── Counter animation ─────────────────────────────────────
function animateCount(el, target) {
  let start = null;
  const step = ts => {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / 1500, 1);
    el.textContent = Math.floor(progress * target) + '+';
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
const countObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { animateCount(e.target, parseInt(e.target.dataset.target)); countObs.unobserve(e.target); }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.counter').forEach(el => countObs.observe(el));

// ── Calculateur de prix ───────────────────────────────────
let basePrice = 8000;
const totalEl = document.getElementById('calc-total');
function updateTotal() {
  let total = basePrice;
  document.querySelectorAll('.calc-checks input:checked').forEach(cb => total += parseInt(cb.dataset.price));
  totalEl.textContent = total.toLocaleString('fr-DZ') + ' DZD';
}
document.querySelectorAll('.calc-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.calc-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    basePrice = parseInt(btn.dataset.price);
    updateTotal();
  });
});
document.querySelectorAll('.calc-checks input').forEach(cb => cb.addEventListener('change', updateTotal));

// ── Filtre portfolio ──────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.portfolio-card').forEach(card => {
      const show = filter === 'all' || card.dataset.cat === filter;
      card.classList.toggle('hidden', !show);
      if (show) { card.style.animation = 'fadeUp 0.4s ease both'; }
    });
  });
});

// ── Carrousel avis ────────────────────────────────────────
const track = document.getElementById('avis-track');
const cards = track.querySelectorAll('.avis-card');
const dotsContainer = document.getElementById('avis-dots');
let current = 0;

cards.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.className = 'avis-dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goTo(i));
  dotsContainer.appendChild(dot);
});

function goTo(n) {
  current = (n + cards.length) % cards.length;
  track.style.transform = `translateX(-${current * 100}%)`;
  document.querySelectorAll('.avis-dot').forEach((d, i) => d.classList.toggle('active', i === current));
}
document.getElementById('prev-avis').addEventListener('click', () => goTo(current - 1));
document.getElementById('next-avis').addEventListener('click', () => goTo(current + 1));
setInterval(() => goTo(current + 1), 5000);

// ── FAQ accordéon ─────────────────────────────────────────
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const answer = item.querySelector('.faq-answer');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-answer').style.maxHeight = '0';
    });
    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// ── Formulaire contact ────────────────────────────────────
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const success = document.getElementById('form-success');
  success.classList.add('show');
  this.reset();
  setTimeout(() => success.classList.remove('show'), 5000);
});

// ── Tilt 3D cards ─────────────────────────────────────────
document.querySelectorAll('.prix-card, .service-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => card.style.transform = '');
});