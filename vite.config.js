import fs from 'node:fs'
import { defineConfig } from 'vite'
import { renderPage } from './scripts/i18n.js'

// Pages FR (/) et EN (/en/) générées à partir du même index.html
const i18nPages = () => ({
  name: 'i18n-pages',
  transformIndexHtml: { order: 'post', handler: (html, ctx) => renderPage(html, ctx.path.startsWith('/en') ? 'en' : 'fr') },
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (!/^\/en\/?(\?.*)?$/.test(req.url)) return next()
      const html = await server.transformIndexHtml('/en/', fs.readFileSync('index.html', 'utf8'))
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      res.end(html)
    })
  },
  closeBundle() {
    const html = fs.readFileSync('dist/index.html', 'utf8')
    fs.mkdirSync('dist/en', { recursive: true })
    fs.writeFileSync('dist/en/index.html', renderPage(html, 'en'))
  },
})

// Site statique publié sur https://gmuti.github.io (branche gh-pages)
export default defineConfig({
  base: '/',
  publicDir: 'static',
  plugins: [i18nPages()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 0,
  },
})
