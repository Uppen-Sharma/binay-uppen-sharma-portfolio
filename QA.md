# Redesign verification — 16 September 2026

- Next.js production build and targeted ESLint checks pass.
- Edge/Playwright: no page-level horizontal overflow at 320, 390, 540, 768, 820, 1024, 1440 and 1920 CSS pixels.
- Interface/Logic/Data controls change the illustrative code and explanation, including accessible pressed state and live announcement.
- All 12 project dialogs open the expected project; Escape and close-button behavior verified. Focus returns to the invoking button.
- Archive expansion, all category counts, text search, no-results state and clearing search verified.
- axe-core WCAG 2/2.1 A/AA scans: no detected violations on desktop, mobile and the open dialog after correcting career-label contrast.
- No browser page errors during the interaction suite.
- Reduced-motion mode disables animation and smooth scrolling. The decorative line animation otherwise runs once for four seconds.
- Fonts are self-hosted with their license and preloaded. No added tracking, runtime font CDN, autoplay video or WebGL dependency.
- Local mobile Lighthouse lab run: Performance 95, Accessibility 100, Best Practices 100, SEO 100. FCP 0.9s, LCP 2.8s, TBT 130ms, CLS 0. The audit report completed; the launcher subsequently reported a Windows temporary-profile cleanup permission error. These scores describe this run, not real-user field performance.
- Illustrative project previews are identified; factual case-study content retained from the verified project data.

These are bounded automated and visual checks, not a guarantee across every browser, device or assistive technology. Re-run after future content or layout changes.
