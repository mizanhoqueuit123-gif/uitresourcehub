# UIT Resource Hub

Academic resource platform for University Institute of Technology, The University of Burdwan.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- Supabase Auth / PostgreSQL / Storage
- Cloudflare Workers via OpenNext

## Environment
`NEXT_PUBLIC_SUPABASE_URL`
`NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
`SUPABASE_SERVICE_ROLE_KEY` (server-only, never expose to the browser)

## Development
```bash
npm install
npm run dev
```

## Deployment
Pushes to `main` are intended for Cloudflare deployment through GitHub Actions.
