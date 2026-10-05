// Génère les pages FR et EN à partir de index.html (FR) et src/i18n/en.js.
// Utilisé par vite.config.js : en dev (middleware /en/) et au build (dist/en/index.html).
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parse } from 'node-html-parser'
import EN from '../src/i18n/en.js'

const SITE = 'https://gmuti.github.io'
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const CV_EN = 'cv/CV-Gedeon-Mutikanga-EN.pdf'
const CV_FR = 'cv/CV-Gedeon-Mutikanga-FR.pdf'

const hasEnCv = () => fs.existsSync(path.join(ROOT, 'static', CV_EN))

export function renderPage(html, lang) {
  const root = parse(html, { comment: true })
  const enCv = hasEnCv()

  // Bouton « CV en anglais » visible seulement si le PDF existe
  const cvEnBtn = root.querySelector('[data-i18n="c.cven"]')
  if (cvEnBtn && enCv) cvEnBtn.removeAttribute('hidden')

  if (lang === 'en') {
    root.querySelector('html')?.setAttribute('lang', 'en')
    for (const el of root.querySelectorAll('[data-i18n]')) {
      const t = EN[el.getAttribute('data-i18n')]
      if (t !== undefined) el.set_content(t)
    }
    for (const el of root.querySelectorAll('[data-i18n-attr]')) {
      const t = EN[el.getAttribute('data-i18n-attr')]
      if (t !== undefined) el.setAttribute('content', t)
    }
    root.querySelector('link[rel="canonical"]')?.setAttribute('href', `${SITE}/en/`)
    root.querySelector('meta[property="og:url"]')?.setAttribute('content', `${SITE}/en/`)
    root.querySelector('meta[property="og:locale"]')?.setAttribute('content', 'en_GB')
    root.querySelector('meta[property="og:locale:alternate"]')?.setAttribute('content', 'fr_FR')
    const ld = root.querySelector('script[type="application/ld+json"]')
    if (ld) ld.set_content(ld.innerHTML.replace(
      /("@type": "ProfilePage",[\s\S]*?"url": "https:\/\/gmuti\.github\.io\/)("[\s\S]*?"inLanguage": ")fr"/,
      '$1en/$2en"'))
    for (const a of root.querySelectorAll('.lang a')) {
      if (a.getAttribute('hreflang') === 'en') a.setAttribute('aria-current', 'page')
      else a.removeAttribute('aria-current')
    }
    const heroCv = root.querySelector('[data-cv]')
    if (heroCv && enCv) heroCv.setAttribute('href', '/' + CV_EN)
  }
  return root.toString()
}

export { CV_FR, CV_EN }
