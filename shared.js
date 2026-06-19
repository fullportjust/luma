/* Lumi Nuru — shared chrome */
const LN_LOGO = (cls="") => `
<svg class="${cls}" viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Lumi Nuru">
  <defs><linearGradient id="lng" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f6dd92"/><stop offset="1" stop-color="#b8923c"/></linearGradient></defs>
  <g stroke="url(#lng)" stroke-width="14" stroke-linecap="round" fill="none">
    <path d="M58 78 A42 42 0 0 1 142 78"/><path d="M58 78 L58 64 M142 78 L142 64"/></g>
  <g fill="url(#lng)">
    <path d="M52 92 h22 v74 h40 v20 H52 Z"/>
    <path d="M112 92 h20 l24 46 V92 h20 v94 h-20 l-24 -46 v46 h-20 Z"/></g>
</svg>`;

const PHONE="+66 082 894 3665", PHONE_TEL="tel:+660828943665", LINE_ID="@luminuru", LINE_DEEP="line://ti/p/@luminuru", WA_URL="https://wa.me/660828943665", ADDR="Bangkok, Thailand", MAPS_URL="https://maps.app.goo.gl/rcKXQsdLzDWAYKzQA";

function buildNav(active){
  const link=(h,l,e="",key="")=>`<a href="${h}" class="${active===h?'active':''} ${e}"${key?` data-i18n="${key}"`:''}>${l}</a>`;
  return `<header class="nav"><div class="nav-inner">
    <a class="brand" href="index.html">${LN_LOGO('mark')}<span class="name">Lumi&nbsp;Nuru</span></a>
    <button class="burger" aria-label="Menu" onclick="document.getElementById('navlinks').classList.toggle('open')">☰</button>
    <nav class="links" id="navlinks">
      ${link('index.html','Home','','nav.home')}${link('menu.html','Menu','','nav.menu')}${link('lineup.html','Lineup','','nav.lineup')}${link('faq.html','FAQ','','nav.faq')}${link('book.html','Book','book-btn','nav.book')}
      ${langSwitcherHTML()}
    </nav></div></header>`;
}
function buildFooter(){
  return `<footer><div class="wrap">
    <div class="foot-grid">
      <div>
        <h4>Lumi Nuru</h4>
        <p style="color:var(--muted);font-size:.9rem;max-width:32ch;line-height:1.6" data-i18n="foot.tag">Private KTV &amp; massage lounge — karaoke rooms and a full spa menu.</p>
        <p style="color:var(--muted);font-size:.84rem;margin-top:.5rem" data-i18n="foot.open">Open daily · 6pm – late</p>
      </div>
      <div>
        <h4 data-i18n="foot.visit">Visit</h4>
        <a href="${MAPS_URL}" target="_blank" rel="noopener" style="display:flex;align-items:flex-start;gap:.4rem;margin-bottom:.5rem;color:var(--muted);font-size:.88rem;text-decoration:none">
          <span>📍</span><span>Lumi Nuru Massage &amp; KTV<br>[Street Address — update me]<br>Bangkok, Thailand</span>
        </a>
        <a href="${PHONE_TEL}" style="color:var(--muted);font-size:.88rem;text-decoration:none;display:block;margin-bottom:.3rem">📞 ${PHONE}</a>
        <p style="color:var(--muted);font-size:.84rem;margin-bottom:.3rem">🚇 BTS: <b style="color:var(--ink)">[Nearest Station, Exit X]</b></p>
        <a href="${MAPS_URL}" target="_blank" rel="noopener" style="font-size:.82rem;color:var(--gold-bright);text-decoration:none" data-i18n="foot.directions">Get directions →</a>
      </div>
      <div>
        <h4 data-i18n="foot.payment">Payment</h4>
        <div style="display:flex;flex-direction:column;gap:.3rem">
          <span style="color:var(--ink);font-size:.88rem">💳 Credit Card</span>
          <span style="color:var(--ink);font-size:.88rem">💵 Cash (Thai Baht)</span>
          <span style="color:var(--ink);font-size:.88rem">📱 QR Scan (PromptPay)</span>
        </div>
      </div>
      <div>
        <h4 data-i18n="foot.connect">Connect</h4>
        <div style="display:flex;flex-direction:column;gap:.3rem">
          <a href="${LINE_DEEP}" style="color:var(--ink);font-size:.88rem;text-decoration:none">💚 LINE: @luminuru</a>
          <a href="${WA_URL}" style="color:var(--ink);font-size:.88rem;text-decoration:none">💬 WhatsApp: ${PHONE}</a>
          <a href="#" style="color:var(--ink);font-size:.88rem;text-decoration:none">🟢 WeChat: luminuru</a>
          <a href="#" style="color:var(--ink);font-size:.88rem;text-decoration:none">📷 Instagram: @luminuru</a>
          <a href="#" style="color:var(--ink);font-size:.88rem;text-decoration:none">✖ X: @luminuru</a>
        </div>
      </div>
      <div>
        <h4 data-i18n="foot.pages">Pages</h4>
        <a href="index.html" data-i18n="nav.home">Home</a>
        <a href="menu.html" data-i18n="nav.menu">Menu</a>
        <a href="lineup.html" data-i18n="nav.lineup">Lineup</a>
        <a href="faq.html" data-i18n="nav.faq">FAQ</a>
        <a href="book.html" data-i18n="nav.book">Book</a>
      </div>
    </div>
    <div class="foot-divider"></div>
    <div class="foot-bottom">© ${new Date().getFullYear()} Lumi Nuru · Service charge &amp; VAT included in all prices.</div>
    <p class="disclaimer" data-i18n="foot.legal">Strictly 20+. Please drink responsibly. Prices in Thai Baht (฿) and subject to change.</p>
  </div></footer>`;
}
function mountChrome(active){
  document.getElementById('nav-mount').innerHTML=buildNav(active);
  document.getElementById('footer-mount').innerHTML=buildFooter();
  if(typeof applyI18n === 'function') applyI18n();
  injectContactWidgets();
}

/* ── Contact widgets (floating button, modal, QR modal, mobile bar) ── */
function injectContactWidgets(){
  if(document.getElementById('float-contact-btn')) return; // already injected

  // Floating contact button
  const fab = document.createElement('button');
  fab.id = 'float-contact-btn';
  fab.className = 'float-contact-btn';
  fab.innerHTML = '💬';
  fab.setAttribute('aria-label', 'Contact us');
  fab.onclick = openContactModal;
  document.body.appendChild(fab);

  // Contact modal
  const overlay = document.createElement('div');
  overlay.id = 'contact-modal-overlay';
  overlay.className = 'contact-modal-overlay';
  overlay.innerHTML = `
    <div class="contact-modal">
      <div class="cm-handle"></div>
      <h3>Contact Us</h3>
      <a href="line://ti/p/@luminuru" class="cm-btn cm-line">
        <span class="cm-icon" style="background:rgba(6,199,85,.15)">💚</span>
        <span class="cm-label">Open in LINE<small>@luminuru</small></span>
      </a>
      <a href="https://wa.me/660828943665" target="_blank" rel="noopener" class="cm-btn cm-whatsapp">
        <span class="cm-icon" style="background:rgba(37,211,102,.15)">💬</span>
        <span class="cm-label">Open in WhatsApp<small>+66 082 894 3665</small></span>
      </a>
      <a href="tel:+660828943665" class="cm-btn cm-call">
        <span class="cm-icon" style="background:rgba(232,195,100,.15)">📞</span>
        <span class="cm-label">Call Now<small>+66 082 894 3665</small></span>
      </a>
      <a href="https://maps.app.goo.gl/rcKXQsdLzDWAYKzQA" target="_blank" rel="noopener" class="cm-btn cm-maps">
        <span class="cm-icon" style="background:rgba(66,133,244,.15)">📍</span>
        <span class="cm-label">Get Directions<small>Open in Google Maps</small></span>
      </a>
    </div>`;
  overlay.onclick = e => { if(e.target === overlay) closeContactModal(); };
  document.body.appendChild(overlay);

  // QR modal
  const qrOverlay = document.createElement('div');
  qrOverlay.id = 'qr-modal-overlay';
  qrOverlay.className = 'qr-modal-overlay';
  qrOverlay.innerHTML = `<div class="qr-modal" style="position:relative">
    <button class="close-modal" onclick="closeQRModal()" aria-label="Close">✕</button>
    <img id="qr-modal-img" src="" alt="QR Code">
    <h4 id="qr-modal-title"></h4>
    <p class="qr-sub" id="qr-modal-sub"></p>
    <span class="qr-scan-label">Scan with your phone</span>
    <button class="copy-btn" id="qr-copy-btn" onclick="copyQRHandle()">📋 Copy LINE ID: @luminuru</button>
  </div>`;
  qrOverlay.onclick = e => { if(e.target === qrOverlay) closeQRModal(); };
  document.body.appendChild(qrOverlay);

  // Mobile bottom bar
  const bar = document.createElement('div');
  bar.className = 'mobile-bottom-bar';
  bar.innerHTML = `
    <a href="tel:+660828943665" class="mbb-btn"><span class="mbb-icon">📞</span><span class="mbb-label">Call</span></a>
    <a href="line://ti/p/@luminuru" class="mbb-btn"><span class="mbb-icon">💬</span><span class="mbb-label">LINE</span></a>
    <a href="book.html" class="mbb-btn"><span class="mbb-icon">📅</span><span class="mbb-label">Book</span></a>`;
  document.body.appendChild(bar);
}

function openContactModal(){
  document.getElementById('contact-modal-overlay').classList.add('open');
}
function closeContactModal(){
  document.getElementById('contact-modal-overlay').classList.remove('open');
}
function openQRModal(src, title, sub, handle){
  document.getElementById('qr-modal-img').src = src;
  document.getElementById('qr-modal-title').textContent = title;
  document.getElementById('qr-modal-sub').textContent = sub;
  const copyBtn = document.getElementById('qr-copy-btn');
  copyBtn.textContent = '📋 Copy LINE ID: @luminuru';
  document.getElementById('qr-modal-overlay').classList.add('open');
}
function closeQRModal(){
  document.getElementById('qr-modal-overlay').classList.remove('open');
}
function copyQRHandle(){
  navigator.clipboard.writeText('@luminuru').then(()=>{
    document.getElementById('qr-copy-btn').textContent = '✅ Copied!';
    setTimeout(()=>{ document.getElementById('qr-copy-btn').textContent = '📋 Copy LINE ID: @luminuru'; }, 2000);
  }).catch(()=>{
    document.getElementById('qr-copy-btn').textContent = '📋 Copy LINE ID: @luminuru';
  });
}
