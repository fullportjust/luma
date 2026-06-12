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

const PHONE="+66 2 000 0000", LINE_ID="@luminuru", ADDR="Sukhumvit, Bangkok";

function buildNav(active){
  const link=(h,l,e="",key="")=>`<a href="${h}" class="${active===h?'active':''} ${e}"${key?` data-i18n="${key}"`:''}>${l}</a>`;
  return `<header class="nav"><div class="nav-inner">
    <a class="brand" href="index.html">${LN_LOGO('mark')}<span class="name">Lumi&nbsp;Nuru</span></a>
    <button class="burger" aria-label="Menu" onclick="document.getElementById('navlinks').classList.toggle('open')">☰</button>
    <nav class="links" id="navlinks">
      ${link('index.html','Home','','nav.home')}${link('menu.html','Menu','','nav.menu')}${link('book.html','Book','book-btn','nav.book')}
      ${langSwitcherHTML()}
    </nav></div></header>`;
}
function buildFooter(){
  return `<footer><div class="wrap foot-grid">
    <div><h4>Lumi Nuru</h4><p style="color:var(--muted);font-size:.92rem;max-width:36ch" data-i18n="foot.tag">
      Private KTV &amp; massage lounge — karaoke rooms, drink buffets and a full spa menu.</p>
      <p style="color:var(--muted);font-size:.86rem;margin-top:.6rem" data-i18n="foot.open">Open daily · 6pm–late</p></div>
    <div><h4 data-i18n="foot.visit">Visit</h4><a href="#">${ADDR}</a><a href="tel:+6620000000">${PHONE}</a><a href="#">LINE ${LINE_ID}</a></div>
    <div><h4 data-i18n="foot.pages">Pages</h4>
      <a href="index.html" data-i18n="nav.home">Home</a><a href="menu.html" data-i18n="nav.menu">Menu</a><a href="book.html" data-i18n="nav.book">Book</a></div>
  </div>
  <div class="foot-bottom">© ${new Date().getFullYear()} Lumi Nuru · Service charge &amp; VAT included.</div>
  <p class="disclaimer" data-i18n="foot.legal">Strictly 20+. Please drink responsibly. Prices in Thai Baht (฿) and subject to change. Demonstration website.</p>
  </footer>`;
}
function mountChrome(active){
  document.getElementById('nav-mount').innerHTML=buildNav(active);
  document.getElementById('footer-mount').innerHTML=buildFooter();
  if(typeof applyI18n === 'function') applyI18n();
}
