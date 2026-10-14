# Readable themes and an evidence-backed work journey

Updated 14 October 2026; work-log coverage remains through 13 October.

The later project-browser refinement is documented in `QUASAR-DESIGN.md`. It replaces the decorative replay scene, featured-card/archive layout and forced viewport-height contact ending described below. Employment, work-log chapters, source boundaries and case-study content remain intact.

## Visual system

The space illustration remains the memorable visual. All titles now use the self-hosted Manrope family with normal-width letterforms, less extreme tracking and a restrained type scale. The page has a segmented left section index on desktop and labelled bottom navigation on smaller screens. The header stays accessible while scrolling, including the theme control.

Dark: midnight #090e1c, slate #16243a, ice #b9e4f1, text #edf2fb.
Light: lunar #f4f8fc, white #ffffff, blue #245f7f, text #18263b.
Shared structural tokens drive surfaces, text, borders and states. Initial appearance follows the device preference unless an explicit local theme choice exists. The toggle remembers only the theme preference, not application or work-log data. Browser theme color and native color-scheme follow it.

Navigation uses ordinary anchors on heading blocks with a shared responsive header offset. Active-section tracking uses those same targets. The fixed header contains only the full name and theme toggle; the rail remains the sole section navigation. On wide screens the rail stays beside the bounded content column.

The original SVG black hole uses warm orange in dark mode and blue in light mode, with contrasting stars in both. Theme-specific code/workflow or document/chart glyphs spiral inward using only transform and opacity, for a maximum of 4.8 seconds. A labelled replay control is available; reduced motion disables the animation. No perpetual decorative animation or added graphics dependency.

The owner describes an FDE skills direction, not a current FDE employment title. Copy reflects a path toward forward-deployed engineering while keeping Programmer Analyst Trainee unchanged. The capability groups distinguish SRM project tools from current TanStack Query and TypeORM/MySQL learning. TypeScript remains AI-assisted.

The same licensed Manrope font files are compressed to WOFF2 for delivery: 60,936 bytes combined instead of 189,900 bytes of TTF (about 68% less). Both used weights are preloaded. Original font assets and licenses remain available in the repository.

## 14 October verification

- Production build and targeted ESLint checks pass.
- Tested effective viewport widths 320, 640, 820, 1280, 1440, 1920 and 3840 pixels; no horizontal page overflow. These are viewport checks, not a claim of exhaustive browser-zoom testing.
- Projects, journey, About and Contact anchor blocks settle 24 pixels below the fixed header on tested mobile/desktop layouts; active navigation follows the same blocks.
- Tested persistent themes, matching external-icon colors, result-view tabs, live-streaming project search, native modal dismissal and focus return. No browser warnings/errors in the final local production check.
- Local mobile Lighthouse after font compression: performance 88, accessibility 100, best practices 100, SEO 100; LCP 2.8 seconds, TBT 340 ms, CLS 0. Lab measurements vary with machine load and do not guarantee field performance.

## Source boundaries

- The owner's current résumé confirms the full name, JavaScript/MERN focus, employment progression and Fimo project distinction.
- The supplied daily tracker supports 14 monthly chapters, September 2025 through 13 October 2026. Future blank rows are excluded. The role moves from a seven-month internship to Programmer Analyst Trainee in April 2026.
- Each chapter is a manually curated summary with work highlights, technologies and selected dated work periods. It is not a time sheet, performance measurement, automatic feed or claim of sole ownership. Learning and evaluation remain identified as such.
- MySQL follows the owner's explicit correction to an older tracker entry. TypeScript remains identified as AI-assisted implementation where relevant.
- The raw workbook, résumé, ancillary notes, credentials, customer names, live values, internal source identifiers and internal size figures are not bundled or committed.
- Some older POC cards were generically labelled internship work. Document extraction and BI migration are now labelled SRM POCs without assigning an unsupported internship date.

## Accelerator AI reference

Only the visible high-level interface at the owner's local application was reviewed, through their existing Brave session: question composer, suggested prompts, compact navigation and pinned results with chart/data/SQL views. No question was submitted and no settings or data were changed. The portfolio reconstructs these patterns using fictional examples; it does not publish the internal screenshot, branding or customer data.

All 12 case studies have implementation walkthroughs and engineering considerations grounded in their existing source-reviewed descriptions. The Accelerator AI case study adds the observed interface patterns and the latest curated widget work. Team scope and confidentiality notes remain explicit.

## Updating

Edit `app/experience.ts` to add a reviewed chapter or update the current one. Verify the actual date and work in the private tracker, omit sensitive details, and update the as-of date in `app/work-journey.tsx`. Keep related-project indexes aligned with `app/projects.ts`. Do not upload the original workbook or résumé to the public assets directory.

The frontend-design guidance shaped hierarchy and typography; the web-design-guidelines review informed keyboard, naming, safe-area, theme and contrast corrections. Existing motion stays bounded and respects reduced-motion preferences.
