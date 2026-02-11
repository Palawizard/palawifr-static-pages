# palawi-pages-unified

Single Scalingo app serving 4 Vite pages:

- `/` -> home (`apps/page-daccueil`)
- `/portfolio/` -> portfolio (`apps/yboost-portfollio`)
- `/musiclinks/` -> music links (`apps/music`)
- `/streamlinks/` -> stream links (`apps/youtube`)

## Deploy

```bash
npm install
npm start
```

On Scalingo, deploy this repository as a Node app (`Procfile` uses `web: npm start`).

## Gateway nginx

Use `nginx/gateway-unified.conf.erb` on your gateway app and set:

- `PAGES_BACKEND=https://<your-new-unified-app>.osc-fr1.scalingo.io`
