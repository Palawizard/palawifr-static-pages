import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = Number.parseInt(process.env.PORT || '3000', 10)

const homeDist = path.join(__dirname, 'apps/page-daccueil/dist')
const portfolioDist = path.join(__dirname, 'apps/yboost-portfollio/dist')
const musicDist = path.join(__dirname, 'apps/music/dist')
const streamDist = path.join(__dirname, 'apps/youtube/dist')

const prefixedRoutes = [
  { base: '/portfolio', dist: portfolioDist },
  { base: '/musiclinks', dist: musicDist },
  { base: '/streamlinks', dist: streamDist }
]

app.disable('x-powered-by')

// Canonical URL for sub-apps.
app.use((req, res, next) => {
  for (const { base } of prefixedRoutes) {
    if (req.path === base) {
      const suffix = req.url.slice(req.path.length)
      return res.redirect(308, `${base}/${suffix}`)
    }
  }
  return next()
})

for (const { base, dist } of prefixedRoutes) {
  app.use(base, express.static(dist, { index: false }))
  app.get(`${base}/*`, (req, res) => {
    res.sendFile(path.join(dist, 'index.html'))
  })
}

app.get('/health', (_req, res) => {
  res.status(200).json({ ok: true })
})

app.use(express.static(homeDist, { index: false }))
app.get('*', (_req, res) => {
  res.sendFile(path.join(homeDist, 'index.html'))
})

app.listen(port, '0.0.0.0', () => {
  console.log(`palawi-pages-unified listening on ${port}`)
})
