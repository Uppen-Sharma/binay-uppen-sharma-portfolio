# Project constellation and quasar return

14 October 2026. Retains the owner's existing GitHub repository and Vercel hosting.

## Design direction

The black hole is the project browser, not a second decorative hero. All 12 existing, source-reviewed projects become labelled, keyboard-operable objects. The previous three featured cards and separate archive are replaced by one filtered, searchable collection. No claims or confidential project material are added.

Palette: midnight #090e1c, lunar #f4f8fc, text #edf2fb, slate #3e5471, gravity orange #f39a50 in dark mode and blue #2369be in light mode. Manrope remains the single self-hosted type family.

Desktop composition: project objects / black hole / project objects. Mobile: portal above a compact two-column object set. If a selected object has scrolled beyond the main portal, a small viewport-local portal joins the transition; the page is not forcibly scrolled.

The design concentrates motion in one visitor-driven interaction rather than decorative autoplay. The header divider and redundant project/journey/top navigation links are removed; the section rail remains.

## Interaction

Select → icon intake → native dialog case study → close/Escape → quasar streak and icon return → original project focus.

Intake is 620 ms; return is 700 ms. Motion uses full transform strings and opacity, with no per-frame React state updates, animated layout sizes or animated inherited CSS variables. State completion uses cleaned-up bounded timers independently of animation-frame callbacks. The native dialog has an additional bounded close path.

The OS reduced-motion preference and the collection's “Read without motion” control skip portal travel and reader entrance motion. All project content remains available. There is no perpetual animation. Real-device GPU/frame-time testing has not been performed.

## Content and spacing

- JavaScript stays primary; React, Vite, Node.js, Redux Toolkit, Express, MySQL, RAG, Vitest and AI-assisted tooling are visible in the working toolkit.
- TypeScript stays identified as AI-assisted implementation; TanStack Query and TypeORM/MySQL remain learning rather than unsupported production claims.
- Methods include existing semantic retrieval/SQL validation, JWT/RBAC, producer/evaluator feedback and current Repository/QueryBuilder learning.
- The hero is shorter, the career timeline fills the previous empty profile column, and section padding is tighter.
- Contact no longer forces a viewport height. The native end-of-page anchor can stop at the scroll limit; the rail correctly marks Contact at the bottom without adding blank space.
- Accelerator, document and TaskFlows concept previews remain inside their readers; fictional data and confidentiality labels stay explicit.

## Verification

- Final production build and targeted ESLint pass. The motion feature bundle now uses animation/gestures only; unused drag/layout support is not loaded.
- All 12 production case studies passed open/read/Escape/return checks with restored focus and no remaining hidden objects. Inline intake, quasar release and the mobile floating portal were observed separately. The no-motion option opens the reader without a flight layer.
- Search, category filtering and reset pass. No-results uses a compact 115-pixel state instead of overlapping the portal instructions.
- Responsive checks covered 320, 390, 760, 1280, 1920 and 3840 pixel effective widths without horizontal overflow. The desktop Contact section is approximately 307 pixels high, rather than a forced screen height.
- The Projects heading block lands 24 pixels below the fixed header, whose divider is removed. Contact uses the natural page-bottom limit.
- The final local production tab reported no browser warnings or errors.
- Local mobile Lighthouse: performance 85, accessibility 100, best practices 100, SEO 100; LCP 2.0 seconds, TBT 560 ms, CLS 0. These are machine-dependent lab results, not field guarantees.

The private tracker, résumé, credentials and internal screenshots remain outside Git and public assets.
