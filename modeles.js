// ── MODELES POP-UP ────────────────────────────────────────
const modeles = {
    vitrine: {
      title: "Site Vitrine",
      html: `
        <div class="demo-browser">
          <div class="demo-bar"><span class="demo-dot r"></span><span class="demo-dot y"></span><span class="demo-dot g"></span><span class="demo-url">monsiteweb.dz</span></div>
          <div class="demo-body">
            <div class="demo-nav"><div class="demo-logo-mini">LOGO</div><div class="demo-links"><span>Accueil</span><span>Services</span><span>Contact</span></div></div>
            <div class="demo-hero-mini"><h2>Bienvenue chez <span style="color:var(--accent2)">Votre Business</span></h2><p>Une description courte et percutante de votre activité.</p><button class="demo-cta">Nous contacter</button></div>
            <div class="demo-cards-mini"><div class="demo-card-mini"><span>🎯</span><p>Service 1</p></div><div class="demo-card-mini"><span>💡</span><p>Service 2</p></div><div class="demo-card-mini"><span>⚡</span><p>Service 3</p></div></div>
          </div>
        </div>`
    },
    portfolio: {
      title: "Portfolio Professionnel",
      html: `
        <div class="demo-browser">
          <div class="demo-bar"><span class="demo-dot r"></span><span class="demo-dot y"></span><span class="demo-dot g"></span><span class="demo-url">votreportfolio.vercel.app</span></div>
          <div class="demo-body">
            <div class="demo-nav"><div class="demo-logo-mini">&lt;KS/&gt;</div><div class="demo-links"><span>About</span><span>Skills</span><span>Projects</span></div></div>
            <div class="demo-portfolio-hero">
              <div><p style="color:var(--accent);font-size:0.75rem;font-family:monospace">👋 Bonjour, je suis</p><h2 style="font-size:1.4rem">Votre <span style="color:var(--accent2)">Nom</span></h2><p style="color:var(--text2);font-size:0.8rem">Développeur Fullstack <span class="demo-cursor">|</span></p><div style="display:flex;gap:8px;margin-top:10px"><button class="demo-cta">Projets</button><button class="demo-cta-outline">Contact</button></div></div>
              <div class="demo-code-mini"><pre style="font-size:0.7rem;line-height:1.6"><span style="color:#c792ea">const</span> <span style="color:#82aaff">dev</span> = {
    name: <span style="color:#c3e88d">"Vous"</span>,
    stack: [<span style="color:#c3e88d">"JS"</span>, <span style="color:#c3e88d">"Python"</span>]
  };</pre></div>
            </div>
            <div class="demo-skills-mini"><span>HTML</span><span>CSS</span><span>JS</span><span>Python</span><span>Java</span><span>Git</span></div>
          </div>
        </div>`
    },
    landing: {
      title: "Landing Page",
      html: `
        <div class="demo-browser">
          <div class="demo-bar"><span class="demo-dot r"></span><span class="demo-dot y"></span><span class="demo-dot g"></span><span class="demo-url">votre-offre.dz</span></div>
          <div class="demo-body">
            <div class="demo-landing-hero">
              <div class="demo-badge-mini">🔥 Offre limitée</div>
              <h2 style="font-size:1.3rem;text-align:center;margin:10px 0">Transformez votre<br/><span style="color:var(--accent2)">Business en ligne</span></h2>
              <p style="color:var(--text2);font-size:0.8rem;text-align:center">La solution idéale pour booster vos ventes dès aujourd'hui.</p>
              <button class="demo-cta-big">🚀 Commencer maintenant</button>
              <div class="demo-trust"><span>⭐⭐⭐⭐⭐</span><span style="font-size:0.75rem;color:var(--text2)">+50 clients satisfaits</span></div>
            </div>
            <div class="demo-features"><div class="demo-feat"><span>✅</span><p>Résultat rapide</p></div><div class="demo-feat"><span>✅</span><p>Prix abordable</p></div><div class="demo-feat"><span>✅</span><p>Support inclus</p></div></div>
          </div>
        </div>`
    },
    logo: {
      title: "Logo & Identité Visuelle",
      html: `
        <div class="demo-logo-showcase">
          <p style="text-align:center;color:var(--text2);font-size:0.85rem;margin-bottom:1.5rem">3 propositions incluses dans chaque commande</p>
          <div class="demo-logos-grid">
            <div class="demo-logo-option">
              <div class="demo-logo-preview" style="background:linear-gradient(135deg,#7c6df0,#a594f9)"><span style="font-size:2rem;font-weight:700;color:white;font-family:serif">KS</span></div>
              <span>Option 1 — Moderne</span>
            </div>
            <div class="demo-logo-option">
              <div class="demo-logo-preview" style="background:#0f0f1c;border:2px solid #a594f9"><span style="font-size:1.5rem;font-weight:700;color:#a594f9;font-family:monospace">&lt;KS/&gt;</span></div>
              <span>Option 2 — Tech</span>
            </div>
            <div class="demo-logo-option">
              <div class="demo-logo-preview" style="background:linear-gradient(135deg,#f5c842,#e6a800)"><span style="font-size:2rem;font-weight:800;color:#000;font-family:Georgia,serif">KS</span></div>
              <span>Option 3 — Luxe</span>
            </div>
          </div>
          <div class="demo-charte"><p style="font-size:0.82rem;color:var(--text2);margin-bottom:0.8rem">Charte graphique incluse</p><div class="demo-colors"><div style="background:#7c6df0"></div><div style="background:#a594f9"></div><div style="background:#f5c842"></div><div style="background:#0f0f1c"></div><div style="background:#e8e8f4"></div></div></div>
        </div>`
    },
    boutique: {
      title: "Boutique en ligne",
      html: `
        <div class="demo-browser">
          <div class="demo-bar"><span class="demo-dot r"></span><span class="demo-dot y"></span><span class="demo-dot g"></span><span class="demo-url">votre-boutique.dz</span></div>
          <div class="demo-body">
            <div class="demo-nav"><div class="demo-logo-mini">🛍️ Ma Boutique</div><div class="demo-links"><span>Accueil</span><span>Produits</span><span>🛒 0</span></div></div>
            <div class="demo-shop-grid">
              <div class="demo-product"><div class="demo-product-img" style="background:linear-gradient(135deg,#2d1b69,#7c6df0)">👗</div><p>Robe d'été</p><div style="display:flex;justify-content:space-between;align-items:center"><strong style="color:var(--accent2)">2 500 DZD</strong><button class="demo-add">+ Panier</button></div></div>
              <div class="demo-product"><div class="demo-product-img" style="background:linear-gradient(135deg,#1b5669,#22c55e)">👟</div><p>Sneakers</p><div style="display:flex;justify-content:space-between;align-items:center"><strong style="color:var(--accent2)">4 800 DZD</strong><button class="demo-add">+ Panier</button></div></div>
              <div class="demo-product"><div class="demo-product-img" style="background:linear-gradient(135deg,#692d1b,#f5c842)">👜</div><p>Sac à main</p><div style="display:flex;justify-content:space-between;align-items:center"><strong style="color:var(--accent2)">3 200 DZD</strong><button class="demo-add">+ Panier</button></div></div>
            </div>
          </div>
        </div>`
    },
    maintenance: {
      title: "Maintenance & Support",
      html: `
        <div class="demo-dashboard">
          <p style="text-align:center;color:var(--text2);font-size:0.85rem;margin-bottom:1.2rem">Tableau de bord mensuel inclus</p>
          <div class="demo-stats-grid">
            <div class="demo-stat-card"><span class="demo-stat-icon">👁️</span><div><strong>1 240</strong><p>Visiteurs</p></div><span style="color:#22c55e;font-size:0.8rem">↑ +12%</span></div>
            <div class="demo-stat-card"><span class="demo-stat-icon">⚡</span><div><strong>98%</strong><p>Disponibilité</p></div><span style="color:#22c55e;font-size:0.8rem">✅ OK</span></div>
            <div class="demo-stat-card"><span class="demo-stat-icon">🔒</span><div><strong>Sécurisé</strong><p>SSL actif</p></div><span style="color:#22c55e;font-size:0.8rem">✅ OK</span></div>
            <div class="demo-stat-card"><span class="demo-stat-icon">💾</span><div><strong>Sauvegarde</strong><p>Dernière : aujourd'hui</p></div><span style="color:#22c55e;font-size:0.8rem">✅ OK</span></div>
          </div>
          <div class="demo-activity"><p style="font-size:0.82rem;color:var(--text2);margin-bottom:0.6rem">Activité récente</p><div class="demo-activity-item"><span>✅</span><p>Mise à jour contenu effectuée</p><span style="color:var(--text2);font-size:0.75rem">Il y a 2j</span></div><div class="demo-activity-item"><span>🔒</span><p>Certificat SSL renouvelé</p><span style="color:var(--text2);font-size:0.75rem">Il y a 5j</span></div></div>
        </div>`
    }
  };
  
  // ── POP-UP SYSTÈME ────────────────────────────────────────
  const overlay = document.createElement('div');
  overlay.id = 'modele-overlay';
  overlay.innerHTML = `
    <div id="modele-modal">
      <div id="modele-header">
        <h3 id="modele-title"></h3>
        <button id="modele-close">✕</button>
      </div>
      <div id="modele-content"></div>
      <a href="https://wa.me/213553490066" target="_blank" class="modele-wa-btn">💬 Commander ce service sur WhatsApp</a>
    </div>`;
  document.body.appendChild(overlay);
  
  document.getElementById('modele-close').addEventListener('click', () => overlay.classList.remove('show'));
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('show'); });
  
  function openModele(key) {
    const m = modeles[key];
    document.getElementById('modele-title').textContent = m.title;
    document.getElementById('modele-content').innerHTML = m.html;
    overlay.classList.add('show');
    animateDemoCursor();
  }
  
  function animateDemoCursor() {
    const cursor = document.querySelector('.demo-cursor');
    if (!cursor) return;
    setInterval(() => { cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0'; }, 500);
  }