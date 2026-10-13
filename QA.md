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

## Motion update — 13 October 2026

- Production build, TypeScript and targeted ESLint checks pass with Motion for React 14.1.1.
- Browser suite runs with normal motion and with `prefers-reduced-motion: reduce`.
- Normal pointer hover changes the workbench transform; reduced-motion hover does not. The timed request trace completes and returns control to the visitor.
- Layer explanations, category transitions, search, no-results state and all 12 case-study dialogs work in both modes. Animated dialog dismissal preserves Escape handling, background inertness and focus return.
- No browser errors, no detected WCAG 2/2.1 A/AA violations in desktop/mobile/dialog scans, and no page-level overflow across the eight tested widths from 320 to 1920px.
- Desktop/mobile screenshots and case-study layout visually reviewed. Physical-device GPU/frame-rate behavior has not been measured.
- Local mobile Lighthouse run: Performance 91, Accessibility 100, Best Practices 100, SEO 100; LCP 3.1s, TBT 120ms, CLS 0. Scores are a lab snapshot of the animated build.
