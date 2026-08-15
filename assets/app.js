/* NERDs Lab — rendering, tab routing & interactions */
(function () {
  const $ = (s, r) => (r || document).querySelector(s);
  const esc = (s) => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const initials = (n) => n.replace(/,.*/,'').split(/\s+/).map(w=>w[0]).slice(0,2).join('').toUpperCase();

  /* ---------------- shared bits ---------------- */
  $('#heroIntro').textContent = SITE.intro;
  $('#cAddr').innerHTML = SITE.contact.address;
  const EMAIL = SITE.contact.emailUser + String.fromCharCode(64) + SITE.contact.emailDomain;
  $('#cMail').textContent = EMAIL;
  $('#cMail').href = 'mailto:' + EMAIL;
  $('#cPhone').textContent = SITE.contact.phone;
  $('#joinMail').href = 'mailto:' + EMAIL + '?subject=Prospective%20student%20inquiry';
  $('#yr').textContent = new Date().getFullYear();

  /* ---------------- home: research cards ---------------- */
  $('#homeCards').innerHTML = RESEARCH.map(r => `
    <a class="card" href="#/research">
      <div class="thumb"><img src="${r.img}" alt="${esc(r.alt)}" loading="lazy"></div>
      <div class="cbody">
        <div class="cnum">${r.num}</div>
        <h3>${esc(r.title)}</h3>
        <p>${esc(r.lead)}</p>
      </div>
    </a>`).join('');

  /* ---------------- research page ---------------- */
  $('#researchBlocks').innerHTML = RESEARCH.map(r => `
    <div class="rblock" id="${r.id}">
      <div class="rtext">
        <div class="rnum">${r.num}</div>
        <h3>${esc(r.title)}</h3>
        <p class="rlead">${esc(r.lead)}</p>
        <p>${esc(r.body)}</p>
        <ul class="tags">${r.tags.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>
      </div>
      <figure class="rfig"><img src="${r.img}" alt="${esc(r.alt)}" loading="lazy"></figure>
    </div>`).join('');

  /* ---------------- funding ---------------- */
  if (typeof FUNDING !== 'undefined' && $('#fundList')) {
    const ykey = (f) => String(f.years).slice(0, 4);
    const list = FUNDING.slice().sort((a, b) => ykey(b).localeCompare(ykey(a)));
    $('#fundList').innerHTML = list.map(f => `
      <li>
        <div class="yrs">${esc(f.years)}</div>
        <div>
          <div class="prog">${esc(f.program)} <span>· ${esc(f.from)}</span></div>
          <p class="ftitle">${esc(f.title)}</p>
        </div>
      </li>`).join('');
  }

  /* ---------------- people ---------------- */
  $('#piBlock').innerHTML = `
    <div class="pi">
      <div class="pi-photo">${PI.photo ? `<img src="${PI.photo}" alt="${esc(PI.name)}">`
        : `<div class="mono">${initials(PI.name)}</div>`}</div>
      <div>
        <div class="role">${esc(PI.role)}</div>
        <h3>${esc(PI.name)}</h3>
        <div class="title">${esc(PI.title)}</div>
        ${PI.bio.map(p=>`<p>${esc(p)}</p>`).join('')}
        <div class="pi-links">${PI.links.map(l=>`<a href="${l.mail ? 'mailto:'+EMAIL : l.href}"${l.mail?'':' target="_blank" rel="noopener"'}>${esc(l.mail ? EMAIL : l.label)} &rarr;</a>`).join('')}</div>
      </div>
    </div>`;

  const card = (m) => `
    <div class="pcard">
      <div class="ph">${m.photo ? `<img src="${m.photo}" alt="${esc(m.name)}" loading="lazy">` : ''}</div>
      <b>${esc(m.name)}</b><span>${esc(m.role)}</span>
    </div>`;
  $('#memberGrid').innerHTML = MEMBERS.map(card).join('');
  $('#alumniGrid').innerHTML = ALUMNI.map(card).join('');

  /* ---------------- news ---------------- */
  /* newest first, by date ("YYYY.MM") */
  NEWS.sort((a, b) => String(b.date).localeCompare(String(a.date)));
  const newsItem = (n) => `<li><time>${esc(n.date)}</time><p>${n.text}</p></li>`;
  $('#newsList').innerHTML = NEWS.map(newsItem).join('');
  $('#homeNews').innerHTML = NEWS.slice(0, 3).map(newsItem).join('');

  /* ---------------- publications ---------------- */
  const years = [...new Set(PUBS.map(p => p.y))].sort((a,b)=>b-a);
  let activeYear = 'all', q = '';
  $('#years').innerHTML = `<button class="ychip on" data-y="all">All</button>` +
    years.map(y=>`<button class="ychip" data-y="${y}">${y}</button>`).join('');

  /* journal helpers: name → abbreviation, impact factor, tile colour */
  const TILE = ['#14395c','#2a7fb8','#3f6d8c','#1f5f7a','#4a5d75','#2d6a6a','#5b6f9c','#356b93'];
  const jname = (p) => p.j.split(',')[0].trim();
  const jmeta = (p) => (typeof JOURNALS !== 'undefined' && JOURNALS[jname(p)]) || null;
  function jcolor(name) {
    let h = 0;
    for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    return TILE[h % TILE.length];
  }
  function autoAbbr(name) {
    const w = name.replace(/[^A-Za-z ]/g, ' ').split(/\s+/).filter(x => x.length > 2);
    return (w.map(x => x[0]).join('') || name.slice(0, 4)).toUpperCase().slice(0, 5);
  }
  function thumb(p) {
    if (p.img) return `<div class="pthumb fig"><img src="${p.img}" alt="" loading="lazy"></div>`;
    const name = jname(p), m = jmeta(p);
    return `<div class="pthumb" style="background:${jcolor(name)}" title="${esc(name)}">${esc(m ? m.abbr : autoAbbr(name))}</div>`;
  }

  function renderPubs() {
    const term = q.trim().toLowerCase();
    const list = PUBS.filter(p =>
      (activeYear === 'all' || p.y === +activeYear) &&
      (!term || (p.t + ' ' + p.a + ' ' + p.j).toLowerCase().includes(term)));
    $('#pubCount').textContent = list.length + (list.length === 1 ? ' publication' : ' publications');
    if (!list.length) { $('#pubList').innerHTML = `<p class="nores">No publications match that search.</p>`; return; }
    let html = '', last = null;
    list.forEach(p => {
      if (p.y !== last) { html += `<div class="pubyear">${p.y}</div>`; last = p.y; }
      const m = jmeta(p);
      const badge = m && m.if ? `<span class="ifbadge">IF ${m.if.toFixed(1)}</span>` : '';
      const href = p.d ? `https://doi.org/${p.d}` : '';
      const tag = href ? 'a' : 'div';
      const attrs = href ? ` href="${href}" target="_blank" rel="noopener"` : '';
      html += `<${tag} class="pub"${attrs}>
        ${thumb(p)}
        <div>
          <span class="t">${esc(p.t)}</span>
          <span class="a">${esc(p.a)}</span>
          <div class="jrow">
            <span class="j">${esc(p.j)}</span>${badge}
            ${href ? '<span class="ext">View paper &rarr;</span>' : ''}
          </div>
        </div>
      </${tag}>`;
    });
    html += `<p class="ifnote">Impact factors are shown for reference only and may not reflect the most recent JCR release.</p>`;
    $('#pubList').innerHTML = html;
  }
  $('#years').addEventListener('click', e => {
    const b = e.target.closest('.ychip'); if (!b) return;
    $('#years').querySelectorAll('.ychip').forEach(c=>c.classList.remove('on'));
    b.classList.add('on'); activeYear = b.dataset.y; renderPubs();
  });
  $('#pubSearch').addEventListener('input', e => { q = e.target.value; renderPubs(); });
  renderPubs();

  /* ---------------- gallery + lightbox ---------------- */
  /* newest first, by date */
  GALLERY.sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
  const gdate = (d) => d ? d.replace('-', '.') : '';
  $('#galGrid').innerHTML = GALLERY.map((g,i) => `
    <div class="gitem" data-i="${i}">
      <img src="${g.src}" alt="${esc(g.caption)}" loading="lazy">
      <div class="gcap">${g.date ? `<em>${gdate(g.date)}</em>` : ''}${esc(g.caption)}</div>
    </div>`).join('');

  const lb = $('#lb'); let idx = 0;
  function show(i) {
    idx = (i + GALLERY.length) % GALLERY.length;
    $('#lbImg').src = GALLERY[idx].src;
    $('#lbCap').textContent = (GALLERY[idx].date ? gdate(GALLERY[idx].date) + '  ·  ' : '') + GALLERY[idx].caption;
    lb.classList.add('on'); document.body.style.overflow = 'hidden';
  }
  function closeLb() { lb.classList.remove('on'); document.body.style.overflow = ''; }
  $('#galGrid').addEventListener('click', e => {
    const it = e.target.closest('.gitem'); if (it) show(+it.dataset.i);
  });
  $('#lbX').onclick = closeLb;
  $('#lbP').onclick = e => { e.stopPropagation(); show(idx - 1); };
  $('#lbN').onclick = e => { e.stopPropagation(); show(idx + 1); };
  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('on')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });

  /* ---------------- tab router ---------------- */
  const PAGES = ['home','research','people','publications','news','gallery','contact'];
  const TITLES = {
    home:'NERDs Lab — Neural Data Science Lab, Hanyang University',
    research:'Research · NERDs Lab', people:'People · NERDs Lab',
    publications:'Publications · NERDs Lab', news:'News · NERDs Lab',
    gallery:'Gallery · NERDs Lab', contact:'Contact · NERDs Lab'
  };
  const tabs = $('#tabs');

  function route() {
    let name = (location.hash || '').replace(/^#\/?/, '').split('?')[0];
    if (!PAGES.includes(name)) name = 'home';
    PAGES.forEach(p => $('#page-' + p).classList.toggle('on', p === name));
    tabs.querySelectorAll('a').forEach(a =>
      a.classList.toggle('active', a.getAttribute('href') === '#/' + name));
    document.title = TITLES[name];
    tabs.classList.remove('open');
    if (lb.classList.contains('on')) closeLb();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
  window.addEventListener('hashchange', route);
  if (!location.hash) location.replace('#/home');
  route();

  $('#burger').onclick = () => tabs.classList.toggle('open');
})();
