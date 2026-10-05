// Génère le HTML des CV à partir de cv/data.js.
// design : A4, 1 page, photo, 2 colonnes, police Geist, accent bleu du portfolio
// ats    : A4, 1 colonne, texte simple, sans image (lisible par les logiciels de tri)
import { contact } from './data.js'

const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const fonts = (fontDir) => `
@font-face{font-family:"Geist";font-weight:400;src:url("${fontDir}/geist-sans/files/geist-sans-latin-400-normal.woff2") format("woff2")}
@font-face{font-family:"Geist";font-weight:500;src:url("${fontDir}/geist-sans/files/geist-sans-latin-500-normal.woff2") format("woff2")}
@font-face{font-family:"Geist";font-weight:600;src:url("${fontDir}/geist-sans/files/geist-sans-latin-600-normal.woff2") format("woff2")}
@font-face{font-family:"Geist";font-weight:700;src:url("${fontDir}/geist-sans/files/geist-sans-latin-700-normal.woff2") format("woff2")}`

export function renderDesign(d, { assets, fontDir, qr = '' }) {
  const h = d.headings
  const exp = d.experience.map(e => `
    <article class="job">
      <div class="logo">${e.logo ? `<img src="${assets}/${e.logo}" alt="${esc(e.org)}">` : ''}</div>
      <div>
        <div class="row"><h3>${esc(e.role)}</h3><span class="date">${esc(e.dates)}</span></div>
        <div class="row sub"><span><b>${esc(e.org)}</b>${e.client ? `, ${esc(e.client)}` : ''}</span><span>${esc(e.place)}</span></div>
        <ul>${e.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul>
        ${e.env ? `<p class="env"><span>${h.env}</span> ${esc(e.env)}</p>` : ''}
      </div>
    </article>`).join('')
  return `<!doctype html><html lang="${d.lang}"><head><meta charset="utf-8"><title>CV ${esc(contact.name)}</title><style>
${fonts(fontDir)}
@page{size:A4;margin:0}
:root{--ink:#111827;--text:#2f3647;--muted:#6b7385;--line:#dfe3ea;--accent:#1f4dff;--accent-ink:#1a3fd1}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:210mm;height:297mm}
body{font-family:"Geist",Arial,sans-serif;color:var(--text);font-size:8.6pt;line-height:1.4;font-variant-numeric:tabular-nums;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.page{width:210mm;height:297mm;padding:13mm 14mm 10mm;display:flex;flex-direction:column;overflow:hidden}
header{display:grid;grid-template-columns:24mm 1fr 54mm;gap:0 6mm;align-items:center;padding-bottom:6mm;border-bottom:1.4px solid var(--ink)}
header img{width:24mm;height:24mm;border-radius:2.5mm;object-fit:cover;background:#eef1f7}
h1{font-size:23pt;line-height:1.05;letter-spacing:-.025em;font-weight:600;color:var(--ink)}
.title{margin-top:1.4mm;font-size:10.5pt;white-space:nowrap;font-weight:500;color:var(--accent)}
.title span{color:var(--muted);font-weight:400}
.search{margin-top:1.2mm;font-size:8.6pt;color:var(--text)}
.contact{display:flex;flex-direction:column;gap:.7mm;font-size:8.1pt;padding-left:3mm;margin-left:-3mm;border-left:1px solid var(--line)}
.contact a{color:var(--text);text-decoration:none}
.contact .lnk{color:var(--accent-ink);font-weight:500}
.contact .lnk i{font-style:normal;font-weight:400;color:var(--muted);display:inline-block;width:14mm}
.cols{display:grid;grid-template-columns:1fr 54mm;gap:6mm;padding-top:5mm;flex:1;min-height:0}
section{margin-bottom:4.2mm}
h2{font-size:7.8pt;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--ink);padding-bottom:1.4mm;margin-bottom:2.6mm;border-bottom:1px solid var(--line)}
.profile{font-size:8.9pt;line-height:1.45}
.job{display:grid;grid-template-columns:16mm 1fr;gap:3mm;margin-bottom:3mm;break-inside:avoid}
.logo{display:flex;align-items:flex-start;padding-top:.5mm}
.logo img{max-width:16mm;max-height:6.5mm;object-fit:contain;object-position:left top}
.logo span{width:7mm;height:7mm;border-radius:1.6mm;background:#eef1f7;color:var(--muted);display:grid;place-items:center;font-weight:600;font-size:9pt}
.edu{display:grid;grid-template-columns:16mm 1fr;gap:3mm;align-items:center;margin-bottom:2.4mm}
.edu .logo img{max-height:7mm}
.edu b{font-weight:600;color:var(--ink)}
.edu b{display:block}
.edu .school{display:block;color:var(--muted);font-size:8.3pt}
.row{display:flex;justify-content:space-between;align-items:baseline;gap:4mm}
.job h3{font-size:9.8pt;font-weight:600;color:var(--ink)}
.date{font-size:8.2pt;color:var(--muted);white-space:nowrap}
.sub{margin-top:.3mm;font-size:8.6pt;color:var(--muted)}
.sub b{font-weight:600;color:var(--accent-ink)}
.job ul{margin:1mm 0 0 3.4mm}
.job li{margin:.4mm 0;padding-left:.6mm}
.job li::marker{color:var(--muted);font-size:.85em}
.env{margin-top:1.2mm;font-size:7.9pt;color:var(--muted)}
.env span{font-weight:600;color:var(--text)}
.side{display:flex;flex-direction:column}
.side .item{margin-bottom:2.6mm}
.qr{margin-top:auto;display:flex;align-items:center;gap:3mm;padding-top:3mm;border-top:1px solid var(--line);text-decoration:none;color:var(--muted);font-size:7.8pt;line-height:1.35}
.qr svg{width:19mm;height:19mm;flex:none}
.qr b{display:block;color:var(--accent-ink);font-weight:600;font-size:8.3pt}
.side b{display:block;font-weight:600;color:var(--ink);font-size:8.5pt}
.side p,.side span{font-size:8.3pt}
.side .muted{color:var(--muted)}
.lang{display:flex;justify-content:space-between;margin-bottom:1mm;font-size:8.5pt}
.lang b{display:inline;font-weight:600;color:var(--ink)}
</style></head><body><div class="page">
<header>
  <img src="${assets}/photo.webp" alt="">
  <div>
    <h1>${esc(contact.name)}</h1>
    <div class="title">${esc(d.title)} <span>| ${esc(d.years)}</span></div>
    <div class="search">${esc(d.search)}</div>
  </div>
  <div class="contact">
    <a href="tel:${contact.phone.replace(/\s/g, '')}">${esc(contact.phone)}</a>
    <a href="mailto:${contact.email}">${esc(contact.email)}</a>
    <a class="lnk" href="${contact.siteUrl}"><i>Portfolio</i>${esc(contact.site)} ↗</a>
    <a class="lnk" href="${contact.linkedinUrl}"><i>LinkedIn</i>Gédéon Mutikanga ↗</a>
    <a class="lnk" href="${contact.githubUrl}"><i>GitHub</i>gmuti ↗</a>
  </div>
</header>
<div class="cols">
  <main>
    <section><h2>${h.profile}</h2><p class="profile">${esc(d.profile)}</p></section>
    <section><h2>${h.experience}</h2>${exp}</section>
    <section><h2>${h.education}</h2>${d.education.map(e => `
      <div class="edu"><div class="logo"><img src="${assets}/${e.logo}" alt=""></div>
        <div class="row"><span><b>${esc(e.t)}</b><span class="school">${esc(e.s)}</span></span><span class="date">${esc(e.d)}</span></div></div>`).join('')}</section>
  </main>
  <aside class="side">
    <section><h2>${h.skills}</h2>${d.skills.map(([k, v]) => `<div class="item"><b>${esc(k)}</b><p>${esc(v)}</p></div>`).join('')}</section>
    <section><h2>${h.languages}</h2>${d.languages.map(([l, n]) => `<div class="lang"><b>${esc(l)}</b><span>${esc(n)}</span></div>`).join('')}</section>
    <section><h2>${h.projects}</h2><p>${esc(d.projects)}</p></section>
    <section><h2>${h.soft}</h2><p>${esc(d.soft)}</p></section>
    <section><h2>${h.interests}</h2><p>${esc(d.interests)}</p></section>
    <a class="qr" href="${contact.siteUrl}">${qr}<span>${esc(d.qr)}<b>${esc(contact.site)}</b></span></a>
  </aside>
</div>
</div></body></html>`
}

export function renderAts(d) {
  const h = d.headings
  const c = d.lang === 'fr' ? ' :' : ':'
  return `<!doctype html><html lang="${d.lang}"><head><meta charset="utf-8"><title>CV ${esc(contact.name)}</title><style>
@page{size:A4;margin:10mm 14mm}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Arial,Helvetica,"Liberation Sans",sans-serif;color:#111;font-size:9pt;line-height:1.27}
h1{font-size:16pt;margin-bottom:.6mm}
.sub{font-size:11pt;font-weight:bold}
.line{margin-top:1mm}
h2{font-size:10pt;text-transform:uppercase;border-bottom:1px solid #333;margin:2.8mm 0 1.2mm;padding-bottom:.6mm;break-after:avoid}
h3{font-size:9.6pt}
.job{margin-bottom:2mm;break-inside:avoid}
.meta{color:#333}
ul{margin:1mm 0 0 5mm}
li{margin:.2mm 0}
p{margin:.4mm 0}
a{color:#1a3fd1;text-decoration:underline;text-underline-offset:1.5px}
</style></head><body>
<h1>${esc(contact.name)}</h1>
<div class="sub">${esc(d.title)}, ${esc(d.years)}</div>
<div class="line">${esc(d.search)}</div>
<div class="line"><a href="tel:${contact.phone.replace(/\s/g, '')}">${esc(contact.phone)}</a> | <a href="mailto:${contact.email}">${esc(contact.email)}</a></div>
<div class="line">Portfolio${c} <a href="${contact.siteUrl}">${esc(contact.site)}</a> | LinkedIn${c} <a href="${contact.linkedinUrl}">${esc(contact.linkedin)}</a> | GitHub${c} <a href="${contact.githubUrl}">${esc(contact.github)}</a></div>
<h2>${h.profile}</h2><p>${esc(d.profile)}</p>
<h2>${h.experience}</h2>
${d.experience.map(e => `<div class="job"><h3>${esc(e.role)}, ${esc(e.org)}${e.client ? ` (${esc(e.client)})` : ''}</h3>
<div class="meta">${esc(e.dates)}${e.place ? ` | ${esc(e.place)}` : ''}</div>
<ul>${e.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul>
${e.env ? `<p>${h.env}${c} ${esc(e.env)}</p>` : ''}</div>`).join('')}
<h2>${h.projects}</h2>
<p>${esc(d.projects)}</p>
<h2>${h.skills}</h2>
${d.skills.map(([k, v]) => `<p><b>${esc(k)}${c}</b> ${esc(v)}</p>`).join('')}
<h2>${h.education}</h2>
${d.education.map(e => `<p><b>${esc(e.t)}</b>, ${esc(e.s)} | ${esc(e.d)}</p>`).join('')}
<p><b>${h.languages}${c}</b> ${d.languages.map(([l, n]) => `${esc(l)} (${esc(n)})`).join(', ')}</p>
<p><b>${h.interests}${c}</b> ${esc(d.interests)}</p>
</body></html>`
}
