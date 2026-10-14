# Binay Uppen Sharma — Portfolio

A JavaScript-led portfolio focused on applied AI, MERN and integrations, with an honest forward-deployed engineering development path. Includes theme-aware black-hole artwork, Manrope typography, heading-aligned section navigation, case studies and a curated monthly SRM work journey.

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
- `app/site-controls.tsx` contains persistent theme selection and section-aware navigation.
- `app/project-universe.tsx` and `app/project-universe.css` own the searchable, filtered project constellation and its intake/read/quasar-return loop. The collection uses the original SVG in `app/black-hole.tsx`; `app/social-icon.tsx` uses current-color brand icons.
- `app/experience.ts` contains sanitized monthly work chapters; `app/work-journey.tsx` renders their selectable detail and dated highlights. The raw tracker is not published.
- `app/motion-ui.tsx` contains the Motion for React primitives; `app/motion-features.ts` loads animation features separately. The analytics preview and animated case-study state are in `app/page.tsx`.
- `public/fonts` contains self-hosted Manrope fonts and the SIL Open Font License.
- `QUASAR-DESIGN.md` records the current interaction, spacing changes and verification boundaries. The older design notes are historical.
- `WORK-JOURNEY.md` records the current layout, theme and source boundaries; `SPACE-DESIGN.md`, `REVAMP.md` and `DESIGN.md` preserve earlier design notes. Project visuals are illustrative, not customer screenshots or production measurements.

Project descriptions were reviewed against public GitHub documentation and relevant source files in September 2026, with experience and education drawn from the owner's résumé. MySQL is the owner's confirmed database experience; the PostgreSQL entry in older records was incorrect. Course exercises and team contributions are identified separately. Entertainment recap projects are excluded.

The site is hosted at https://binay-uppen-sharma-portfolio.vercel.app/. Push source changes to GitHub and deploy the Next.js project to Vercel after checking the production build.
