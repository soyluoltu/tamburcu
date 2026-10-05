# Tambur Cloudflare Worker

Engineering site for `tambur.canliol.com`.

## Development

```bash
cd worker
npm install
npx wrangler dev
```

## Deployment

```bash
npm run deploy
```

Production deployment is intended to run from GitHub Actions. The Worker uses Cloudflare Workers Static Assets and keeps the application entrypoint in `src/index.js`.
