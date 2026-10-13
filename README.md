# Binay Uppen Sharma — Portfolio

A JavaScript-first MERN portfolio with an interactive workbench, visual project studies and a searchable project archive.

The public case-study copy is intentionally sanitized: it documents engineering themes and dated personal work milestones without exposing customer data, credentials, internal identifiers, or proprietary source code.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Updating the portfolio

- `app/projects.ts` contains the project summaries, expanded notes, categories, repository links, and implementation references. The first three entries are the featured projects; the rest appear in the filterable collection.
- `app/page.tsx` contains the page layout, illustrative previews, experience, and full-name branding.
- `app/globals.css` contains the responsive design and reduced-motion support.
- `app/motion-ui.tsx` contains the Motion for React primitives; `app/motion-features.ts` loads animation features separately. The request trace and animated case-study state are in `app/page.tsx`.
- `public/fonts` contains self-hosted Manrope fonts and the SIL Open Font License.
- `DESIGN.md` records the design direction and inspiration sources. Project visuals are illustrative, not customer screenshots or production measurements.

Project descriptions were reviewed against public GitHub documentation and relevant source files in September 2026, with experience and education drawn from the owner's résumé. MySQL is the owner's confirmed database experience; the PostgreSQL entry in older records was incorrect. Course exercises and team contributions are identified separately. Entertainment recap projects are excluded.

The site is hosted at https://binay-uppen-sharma-portfolio.vercel.app/. Push source changes to GitHub and deploy the Next.js project to Vercel after checking the production build.
