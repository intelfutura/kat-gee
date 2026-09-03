# Kat Gee

Personal portfolio for Kat Gee — designer and developer of smart business websites.

```bash
npm install
npm run dev
```

```bash
npm run build
npm test
npm run lint
```

## Vercel

This is a standard Next.js 15 app. Import the GitHub repo in [Vercel](https://vercel.com/new) — the Next.js preset is detected automatically.

Deploy the `cursor/kat-gee-portfolio-da59` branch until the PR is merged, or merge to `main` and deploy that.

Suggested environment variables:

| Name | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical URL for sitemap, Open Graph, and metadata. Example: `https://your-project.vercel.app` |
| `INQUIRY_WEBHOOK_URL` | For real inquiries | Forwards each project inquiry as JSON. Local file storage does not persist on Vercel. |

Inquiry submissions are stored as JSON lines in `data/inquiries/` when you run locally. On Vercel they are logged (`[inquiry]`) and sent to the webhook if set.
