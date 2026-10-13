# Portfolio redesign — September 2026

## Direction: the developer's workbench
An interactive system diagram is the signature element: visitors can explore how interface, API and data fit together. Real project explanations supply the content; no invented impact metrics, decorative dashboards implying customer results, or third-party tracking.

Palette: ocean #123c59, midnight #082d46, cloud #edf4f8, paper #ffffff, steel #a8bfd0, signal #ffd08a. Typography: locally hosted Manrope for headings/body, system monospace only for actual code. Large, left-aligned headings; generous whitespace; a compact sticky navigation. Hero pairs type with an interactive schematic. Work alternates a large featured case with two visual project studies, followed by a searchable archive and a compact career section.

Review: rejected the previous cream/serif/orbital direction and avoided replacing it with a neon-on-black SaaS card template. The visual should communicate building software, not a fictional creative-director identity. Keep the full name and JavaScript/MERN positioning.

References reviewed: [Dennis Snellenberg (Awwwards)](https://www.awwwards.com/sites/dennis-snellenberg), [Rauno Freiberg](https://rauno.me), [Niklas Peterson's Wall of Portfolios listing](https://www.wallofportfolios.in/portfolios/niklas-peterson/); [21st.dev card catalog](https://21st.dev/community/components/s/card). These inform hierarchy and responsive interaction, not copied artwork or code. The frontend-design skill from anthropics/skills was found through skills.sh and installed/read; Vercel's web-design-guidelines skill was used for the UI review.

Quality: native links/buttons/dialog, keyboard close and focus return, reduced motion, no scroll hijacking, no autoplay video, responsive 320–1920px, evidence-backed project details retained in app/projects.ts.

## Motion update — 13 October 2026

The signature interaction is a request travelling through the MERN stack. “Trace a request” plays one short, user-triggered sequence; choosing a layer interrupts it. A small SVG path draws toward the selected layer while the code explanation crossfades. There are no perpetual background loops.

Motion for React (formerly Framer Motion) supplies lazy-loaded animation features, spring pointer tilt, magnetic links, a shared filter indicator, archive position transitions, native-dialog entrance/exit, a reading-progress line, and a small scroll-linked illustration offset. The headline entrance uses full transform strings and keeps text visible in the initial HTML. React state is not updated on each pointer or scroll frame.

References: [Motion examples](https://motion.dev/examples?platform=react), [reduced motion](https://motion.dev/docs/react-accessibility), and [bundle-size guidance](https://motion.dev/docs/react-reduce-bundle-size). `find-skills` was installed and used to discover `emilkowalski/skills/animation-performance`; its transform/opacity and frame-budget guidance informed this implementation. Reduced-motion preferences disable tilt, parallax, spatial transitions and the timed trace. Native scrolling, keyboard controls and touch taps remain available.
