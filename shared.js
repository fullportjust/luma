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

const PHONE="+66 082 894 3665", PHONE_TEL="tel:+660828943665", LINE_ID="@370nwatk", LINE_DEEP="https://line.me/R/home/public/profile?id=370nwatk#~", WA_URL="https://wa.me/660828943665", WA_QR="https://wa.me/qr/TH2MCJADMW2XI1", ADDR="Bangkok, Thailand", MAPS_URL="https://maps.app.goo.gl/rcKXQsdLzDWAYKzQA";

function buildNav(active){
  const link=(h,l,e="",key="")=>`<a href="${h}" class="${active===h?'active':''} ${e}"${key?` data-i18n="${key}"`:''}>${l}</a>`;
  return `<header class="nav"><div class="nav-inner">
    <a class="brand" href="index.html">${LN_LOGO('mark')}<span class="name">Lumi&nbsp;Nuru</span></a>
    <div class="nav-right">
      ${langSwitcherHTML()}
      <button class="burger" aria-label="Menu" onclick="document.getElementById('navlinks').classList.toggle('open')">☰</button>
    </div>
    <nav class="links" id="navlinks">
      ${link('index.html','Home','','nav.home')}${link('menu.html','Menu','','nav.menu')}${link('faq.html','FAQ','','nav.faq')}
      <a href="https://line.me/R/home/public/profile?id=370nwatk#~" class="nav-icon" title="LINE" aria-label="LINE"><svg viewBox="0 0 24 24" width="18" height="18" fill="#06c755"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.271.173-.508.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg></a>
      <a href="https://wa.me/660828943665" target="_blank" rel="noopener" class="nav-icon" title="WhatsApp" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="18" height="18" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
      <a href="javascript:void(0)" onclick="openQRModal(LN_IMG.wechat_qr,'WeChat',t('qr.scan.modal.sub'),'JazzyBKK','wechat')" class="nav-icon" title="WeChat" aria-label="WeChat"><svg viewBox="0 0 24 24" width="18" height="18" fill="#07C160"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm3.165 4.12c-1.58-.018-3.268.432-4.666 1.446-1.495 1.086-2.43 2.62-2.617 4.278-.14 1.233.213 2.393.92 3.328a6.077 6.077 0 002.368 1.968 7.83 7.83 0 002.938.56c.72 0 1.42-.1 2.086-.303a5.557 5.557 0 001.79-.92l1.467-.858a.396.396 0 01.166-.053c.112 0 .204.093.204.207 0 .05-.02.098-.038.145l-.305 1.16a.434.434 0 00-.035.155c0 .12.097.218.217.218a.242.242 0 00.122-.04l1.467-.859c.946-.554 1.762-1.277 2.388-2.128C23.06 17.2 24 15.667 24 13.95c0-3.26-3.095-5.9-7.237-5.838zm-2.17 2.778c.497 0 .899.408.899.912a.906.906 0 01-.899.911.906.906 0 01-.898-.911c0-.504.401-.912.899-.912zm4.34 0c.497 0 .898.408.898.912a.906.906 0 01-.899.911.906.906 0 01-.898-.911c0-.504.401-.912.899-.912z"/></svg></a>
      <a href="https://maps.app.goo.gl/rcKXQsdLzDWAYKzQA" target="_blank" rel="noopener" class="nav-icon" title="Directions" aria-label="Directions"><svg viewBox="0 0 24 24" width="18" height="18" fill="#4285f4"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></a>
    </nav></div></header>`;
}
function buildFooter(){
  return `<footer><div class="wrap">
    <div class="foot-grid">
      <div>
        <h4>Lumi Nuru</h4>
        <p style="color:var(--muted);font-size:.9rem;max-width:32ch;line-height:1.6" data-i18n="foot.tag">Private KTV &amp; massage lounge — karaoke rooms and a full spa menu.</p>
        <p style="color:var(--muted);font-size:.84rem;margin-top:.5rem" data-i18n="foot.open">Open daily · 11am – 3am</p>
      </div>
      <div>
        <h4 data-i18n="foot.visit">Visit</h4>
        <a href="${MAPS_URL}" target="_blank" rel="noopener" style="display:flex;align-items:flex-start;gap:.4rem;margin-bottom:.5rem;color:var(--muted);font-size:.88rem;text-decoration:none">
          <span>📍</span><span>1/34 Sukhumvit 26<br>Khlong Tan Nuea, Watthana<br>Bangkok 10110</span>
        </a>
        <p style="color:var(--muted);font-size:.84rem;margin-bottom:.3rem">🚇 BTS Phrom Phong · 5 min walk</p>
        <a href="${MAPS_URL}" target="_blank" rel="noopener" style="font-size:.82rem;color:var(--gold-bright);text-decoration:none" data-i18n="foot.directions">Get directions →</a>
      </div>
      <div>
        <h4 data-i18n="foot.connect">Connect</h4>
        <div style="display:flex;flex-direction:column;gap:.4rem">
          <a href="${PHONE_TEL}" style="color:var(--muted);font-size:.88rem;text-decoration:none">📞 ${PHONE}</a>
          <a href="${LINE_DEEP}" style="color:var(--muted);font-size:.88rem;text-decoration:none">💚 LINE: @370nwatk</a>
          <a href="${WA_URL}" style="color:var(--muted);font-size:.88rem;text-decoration:none">💬 WhatsApp: ${PHONE}</a>
          <a href="javascript:void(0)" onclick="openQRModal(LN_IMG.wechat_qr,'WeChat',t('qr.scan.modal.sub'),'JazzyBKK','wechat')" style="color:var(--muted);font-size:.88rem;text-decoration:none">💚 WeChat: JazzyBKK</a>
        </div>
      </div>
      <div>
        <h4 data-i18n="foot.payment">Payment</h4>
        <div style="display:flex;flex-direction:column;gap:.3rem">
          <span style="color:var(--ink);font-size:.88rem">💳 Credit Card</span>
          <span style="color:var(--ink);font-size:.88rem">💵 Cash (Thai Baht)</span>
          <span style="color:var(--ink);font-size:.88rem">📱 QR Scan (PromptPay)</span>
        </div>
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
  injectContactWidgets();
  if(typeof applyI18n === 'function') applyI18n();
}

/* ── Contact widgets (floating button, modal, QR modal, mobile bar) ── */
function injectContactWidgets(){
  if(document.getElementById('float-contact-btn')) return; // already injected

  // Floating contact button
  const fab = document.createElement('button');
  fab.id = 'float-contact-btn';
  fab.className = 'float-contact-btn';
  fab.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" fill="#1b0f3a"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>';
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
      <a href="https://line.me/R/home/public/profile?id=370nwatk#~" class="cm-btn cm-line">
        <span class="cm-icon" style="background:rgba(6,199,85,.15)"><svg viewBox="0 0 24 24" width="20" height="20" fill="#06c755"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.271.173-.508.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg></span>
        <span class="cm-label"><span data-i18n="btn.open.line">Open in LINE</span><small>@370nwatk</small></span>
      </a>
      <a href="https://wa.me/660828943665" target="_blank" rel="noopener" class="cm-btn cm-whatsapp">
        <span class="cm-icon" style="background:rgba(37,211,102,.15)"><svg viewBox="0 0 24 24" width="20" height="20" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></span>
        <span class="cm-label"><span data-i18n="btn.open.whatsapp">Open in WhatsApp</span><small>+66 082 894 3665</small></span>
      </a>
      <a href="javascript:void(0)" onclick="openQRModal(LN_IMG.wechat_qr,'WeChat',t('qr.scan.modal.sub'),'JazzyBKK','wechat')" class="cm-btn cm-wechat">
        <span class="cm-icon" style="background:rgba(7,193,96,.15)"><svg viewBox="0 0 24 24" width="20" height="20" fill="#07C160"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm3.165 4.12c-1.58-.018-3.268.432-4.666 1.446-1.495 1.086-2.43 2.62-2.617 4.278-.14 1.233.213 2.393.92 3.328a6.077 6.077 0 002.368 1.968 7.83 7.83 0 002.938.56c.72 0 1.42-.1 2.086-.303a5.557 5.557 0 001.79-.92l1.467-.858a.396.396 0 01.166-.053c.112 0 .204.093.204.207 0 .05-.02.098-.038.145l-.305 1.16a.434.434 0 00-.035.155c0 .12.097.218.217.218a.242.242 0 00.122-.04l1.467-.859c.946-.554 1.762-1.277 2.388-2.128C23.06 17.2 24 15.667 24 13.95c0-3.26-3.095-5.9-7.237-5.838zm-2.17 2.778c.497 0 .899.408.899.912a.906.906 0 01-.899.911.906.906 0 01-.898-.911c0-.504.401-.912.899-.912zm4.34 0c.497 0 .898.408.898.912a.906.906 0 01-.899.911.906.906 0 01-.898-.911c0-.504.401-.912.899-.912z"/></svg></span>
        <span class="cm-label"><span data-i18n="btn.open.wechat">Open WeChat</span><small>JazzyBKK</small></span>
      </a>
      <a href="https://maps.app.goo.gl/rcKXQsdLzDWAYKzQA" target="_blank" rel="noopener" class="cm-btn cm-maps">
        <span class="cm-icon" style="background:rgba(66,133,244,.15)"><svg viewBox="0 0 24 24" width="20" height="20" fill="#4285f4"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></span>
        <span class="cm-label"><span data-i18n="btn.get.directions">Get Directions</span><small data-i18n="btn.open.maps">Open in Google Maps</small></span>
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
    <span class="qr-scan-label" data-i18n="qr.scan.phone">Scan with your phone</span>
    <button class="copy-btn" id="qr-copy-btn" onclick="copyQRHandle()" data-i18n="qr.copy.lineid">📋 Copy LINE ID: @370nwatk</button>
  </div>`;
  qrOverlay.onclick = e => { if(e.target === qrOverlay) closeQRModal(); };
  document.body.appendChild(qrOverlay);

  // Mobile bottom bar
  const bar = document.createElement('div');
  bar.className = 'mobile-bottom-bar';
  bar.innerHTML = `
    <a href="https://line.me/R/home/public/profile?id=370nwatk#~" class="mbb-btn"><span class="mbb-icon"><svg viewBox="0 0 24 24" width="22" height="22" fill="#06c755"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.271.173-.508.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg></span><span class="mbb-label">LINE</span></a>
    <a href="https://wa.me/660828943665" target="_blank" rel="noopener" class="mbb-btn"><span class="mbb-icon"><svg viewBox="0 0 24 24" width="22" height="22" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></span><span class="mbb-label">WhatsApp</span></a>
    <a href="javascript:void(0)" onclick="openQRModal(LN_IMG.wechat_qr,'WeChat',t('qr.scan.modal.sub'),'JazzyBKK','wechat')" class="mbb-btn"><span class="mbb-icon"><svg viewBox="0 0 24 24" width="22" height="22" fill="#07C160"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm3.165 4.12c-1.58-.018-3.268.432-4.666 1.446-1.495 1.086-2.43 2.62-2.617 4.278-.14 1.233.213 2.393.92 3.328a6.077 6.077 0 002.368 1.968 7.83 7.83 0 002.938.56c.72 0 1.42-.1 2.086-.303a5.557 5.557 0 001.79-.92l1.467-.858a.396.396 0 01.166-.053c.112 0 .204.093.204.207 0 .05-.02.098-.038.145l-.305 1.16a.434.434 0 00-.035.155c0 .12.097.218.217.218a.242.242 0 00.122-.04l1.467-.859c.946-.554 1.762-1.277 2.388-2.128C23.06 17.2 24 15.667 24 13.95c0-3.26-3.095-5.9-7.237-5.838zm-2.17 2.778c.497 0 .899.408.899.912a.906.906 0 01-.899.911.906.906 0 01-.898-.911c0-.504.401-.912.899-.912zm4.34 0c.497 0 .898.408.898.912a.906.906 0 01-.899.911.906.906 0 01-.898-.911c0-.504.401-.912.899-.912z"/></svg></span><span class="mbb-label">WeChat</span></a>
    <a href="https://maps.app.goo.gl/rcKXQsdLzDWAYKzQA" target="_blank" rel="noopener" class="mbb-btn"><span class="mbb-icon"><svg viewBox="0 0 24 24" width="22" height="22" fill="#4285f4"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></span><span class="mbb-label">Directions</span></a>`;
  document.body.appendChild(bar);
}

function openContactModal(){
  document.getElementById('contact-modal-overlay').classList.add('open');
}
function closeContactModal(){
  document.getElementById('contact-modal-overlay').classList.remove('open');
}
let _qrPlatform = 'line';
function openQRModal(src, title, sub, handle, platform){
  _qrPlatform = platform || 'line';
  document.getElementById('qr-modal-img').src = src;
  document.getElementById('qr-modal-title').textContent = title;
  document.getElementById('qr-modal-sub').textContent = sub;
  if(_qrPlatform === 'wechat'){
    document.getElementById('qr-copy-btn').textContent = '📋 Copy WeChat ID: ' + handle;
  } else {
    document.getElementById('qr-copy-btn').textContent = t('qr.copy.lineid');
  }
  document.getElementById('qr-modal-overlay').classList.add('open');
}
function closeQRModal(){
  document.getElementById('qr-modal-overlay').classList.remove('open');
}
function copyQRHandle(){
  const text = _qrPlatform === 'wechat' ? 'JazzyBKK' : '@370nwatk';
  navigator.clipboard.writeText(text).then(()=>{
    document.getElementById('qr-copy-btn').textContent = t('qr.copied');
    setTimeout(()=>{
      if(_qrPlatform === 'wechat'){
        document.getElementById('qr-copy-btn').textContent = '📋 Copy WeChat ID: JazzyBKK';
      } else {
        document.getElementById('qr-copy-btn').textContent = t('qr.copy.lineid');
      }
    }, 2000);
  }).catch(()=>{
    if(_qrPlatform === 'wechat'){
      document.getElementById('qr-copy-btn').textContent = '📋 Copy WeChat ID: JazzyBKK';
    } else {
      document.getElementById('qr-copy-btn').textContent = t('qr.copy.lineid');
    }
  });
}
