# authorizer.dev

Marketing site for [Authorizer](https://github.com/authorizerdev/authorizer): open-source, self-hosted authentication (OAuth2 / OpenID Connect).

## Requirements

- **Node.js** 18.18+ (see `.nvmrc` for a recommended version)

## Setup

```bash
npm install
cp .env.example .env.local   # only `.env.local` is used locally; it is gitignored
# Edit `.env.local`: set NEXT_PUBLIC_* for the demo widget, optional analytics / SITE_URL
npm run dev
```

If you still have a root `.env` file, move it once so everything lives in one place: `mv .env .env.local` (merge keys by hand if both exist).

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build && npm start
```

Build succeeds without `.env.local` thanks to safe fallbacks in `constants/authorizer.ts`; set env vars in production (e.g. Vercel) for a working embedded login demo.

## SEO

- Meta tags, canonical URL, Open Graph, and Twitter cards are set in `components/Layout.tsx`.
- Structured data (Organization, WebSite, SoftwareApplication, FAQPage) is in `components/SeoJsonLd.tsx`.
- `public/robots.txt` and `public/sitemap.xml` reference `https://authorizer.dev`. Override with `NEXT_PUBLIC_SITE_URL` for previews.
