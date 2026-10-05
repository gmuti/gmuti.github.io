# gmuti.github.io

Portfolio de **Gédéon Mutikanga**, Software Engineer : https://gmuti.github.io

Site statique construit avec [Vite](https://vitejs.dev), [GSAP](https://gsap.com) (animations au scroll) et [Three.js](https://threejs.org) (objet 3D de l'accueil). Bilingue FR / EN.

## Développement

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # génère dist/
npm run preview   # sert dist/ en local
```

## Déploiement

- **Automatique** : chaque `git push` sur `main` lance le workflow `.github/workflows/deploy.yml`, qui construit le site et publie `dist/` sur la branche `gh-pages`.
- **Manuel** (si besoin) : `npm run deploy`.

## Structure

```
index.html        contenu de la page en français (attributs data-i18n)
src/i18n/en.js    traductions anglaises (même clé data-i18n)
src/main.js       animations GSAP, scène Three.js, menu mobile, boutons copier
src/style.css     styles
scripts/i18n.js   génère la page /en/ au build (et en dev) à partir de index.html + en.js
static/           fichiers copiés tels quels (images, logos, CV, favicon)
  assets/         captures des projets, logos entreprises / écoles
  assets/tech/    logos des technos (devicon, simple-icons)
  cv/             CV en PDF (le bouton « CV en anglais » apparaît dès que
                  cv/CV-Gedeon-Mutikanga-EN.pdf existe)
  robots.txt, sitemap.xml   référencement
```

Pour modifier un texte : le français est dans `index.html`, l'anglais dans `src/i18n/en.js` (même clé `data-i18n`). Les deux langues sont de vraies pages (`/` et `/en/`), indexables séparément par Google.

## CV

Les CV (FR, EN et versions ATS) sont générés à partir de `cv/data.js` :

```bash
npm run cv        # écrit les PDF dans static/cv/
```

- `cv/data.js` : contenu des CV (français et anglais)
- `cv/render.js` : mise en page (version design 1 page avec photo, version ATS sans image)
- `cv/build.js` : génération des PDF avec Edge ou Chrome déjà installés sur la machine

Après modification : `npm run cv`, vérifier les PDF, puis commit + `npm run deploy`.
