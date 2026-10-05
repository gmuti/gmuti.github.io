// Génère les CV PDF dans static/cv/ : `npm run cv`
// Utilise Microsoft Edge ou Google Chrome déjà installés (pas de téléchargement de navigateur).
// Pour forcer un navigateur : CV_BROWSER="C:\chemin\vers\chrome.exe" npm run cv
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { chromium } from 'playwright-core'
import { cv } from './data.js'
import { renderDesign, renderAts } from './render.js'
import QRCode from 'qrcode'
import { contact } from './data.js'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'static', 'cv')
const TMP = path.join(ROOT, 'cv', '.build')
const url = (p) => pathToFileURL(p).href
const assets = url(path.join(ROOT, 'static', 'assets'))
const fontDir = url(path.join(ROOT, 'node_modules', '@fontsource'))

async function launch() {
  if (process.env.CV_BROWSER) return chromium.launch({ executablePath: process.env.CV_BROWSER })
  for (const channel of ['msedge', 'chrome']) {
    try { return await chromium.launch({ channel }) } catch { /* essai suivant */ }
  }
  throw new Error('Aucun navigateur trouvé : installez Edge ou Chrome, ou définissez CV_BROWSER.')
}

const qr = await QRCode.toString(contact.siteUrl, { type: 'svg', margin: 0, errorCorrectionLevel: 'M', color: { dark: '#111827', light: '#0000' } })

const jobs = [
  ['CV-Gedeon-Mutikanga-FR', renderDesign(cv.fr, { assets, fontDir, qr })],
  ['CV-Gedeon-Mutikanga-EN', renderDesign(cv.en, { assets, fontDir, qr })],
  ['CV-Gedeon-Mutikanga-FR-ATS', renderAts(cv.fr)],
  ['CV-Gedeon-Mutikanga-EN-ATS', renderAts(cv.en)],
]

fs.mkdirSync(OUT, { recursive: true })
fs.mkdirSync(TMP, { recursive: true })
const browser = await launch()
const page = await browser.newPage()
for (const [name, html] of jobs) {
  const file = path.join(TMP, name + '.html')
  fs.writeFileSync(file, html)
  await page.goto(url(file), { waitUntil: 'load' })
  await page.evaluate(() => document.fonts.ready)
  // Contrôle : la version design doit tenir sur une page
  const overflow = await page.evaluate(() => {
    const m = document.querySelector('.page')
    if (!m) return 0
    return [...m.children].reduce((a, c) => Math.max(a, c.scrollHeight - c.clientHeight), 0)
  })
  if (overflow > 0) console.warn(`⚠ ${name} : le contenu dépasse d'environ ${overflow}px, raccourcir le texte dans cv/data.js`)
  await page.pdf({ path: path.join(OUT, name + '.pdf'), format: 'A4', printBackground: true, preferCSSPageSize: true })
  console.log('✓', path.relative(ROOT, path.join(OUT, name + '.pdf')))
}
await browser.close()
