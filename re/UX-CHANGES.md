# UX refinement (2026-10-20)

The pixel-perfect clone is preserved at git tag `original-clone-v1` and branch `backup/original-clone`.
To restore it: `git checkout original-clone-v1`.

Same look, fonts, sections and content. No section was removed.

| Area | Problem | Change |
|---|---|---|
| Homepage intro | Video frames upscaled ~3× (soft), page behind blurred, ~10 s block on every visit, no way out | Frames cover the viewport at ~1.3×, solid crisp backdrop, "Skip intro" button, Esc or click skips, plays once per session, never with reduced motion, 12 s cap, fade-out. Animation fetched separately: homepage first-load JS 1.04 MB → 216 KB (`components/site/SplashLoader.tsx`) |
| Navigation | Desktop menu crammed into two lines at 768–1023 px; click-only dropdowns; no state for assistive tech; no current-page cue | Desktop menu from 1024 px, hamburger below; hover + click dropdowns, `aria-expanded`, Escape closes, rotating chevrons, current page and section highlighted, X icon and label when the mobile menu is open (`components/site/Navbar.tsx`) |
| Readability | Cyan #00C6F9 text and white-on-cyan buttons ≈ 2:1 contrast | Text and filled buttons use #0284C7 (≥ 4.5:1); hero bands and decoration keep #00C6F9 (`app/globals.css`) |
| Forms | Toasts called but never mounted: no confirmation after submit; labels not linked to inputs | Toast container mounted; labels linked; `aria-invalid`, `role="alert"` errors, red field state, autofill hints, busy/disabled submit (`M7743`, `M8261`, `components/site/Toasts.tsx`) |
| Before/after sliders | Drag area offset by half its height, so the top half could not be dragged; no label; no focus cue | Full-area drag, `aria-label`, visible handle focus ring, vertical scrolling preserved on touch (`M6851_*`) |
| Mobile conversion | No quick way to call or book while reading | Phone-only bottom bar (Call now / Free Estimate) after the first screen, hidden on the estimate page, safe-area aware (`components/site/MobileActionBar.tsx`) |
| Accessibility | No skip link, no main landmark, faint focus | Skip link, `<main>`, consistent 3 px focus outline, reduced-motion support |
| Icons | Emoji used as icons | Font Awesome icons in the same tiles (`M6776`, `M7473`) |
| Page titles | Every tab untitled | Title and description per route |
| Copy errors | Gum Removal heading said "Graffiti Removal"; Commercial Gutter Cleaning heading said "Commercial Pressure Washing" | Headings corrected |

Open items for the owner:
- Footer links to Privacy Policy, Terms of Service, Blogs and Quality Guarantee lead to 404 pages on the original too. They need real content.
- The Contact page lists contact@igotthepowerwasher.com while the footer lists igotthepowerwasher@gmail.com. Confirm which is correct.
- Large white hero headings on #00C6F9 are below 3:1. They keep the original look.

## Banner readability (2026-10-20)

| Banner | Before | After |
|---|---|---|
| Solid cyan (35 pages) | #00C6F9, white text 2.0:1 | #0099C9, 3.3:1 (passes for large headings) |
| Cyan-to-white gradient (about-us, annual-maintenance-program, the-clean-team) | #00C6F9 → white, heading area ≈ 1.5–2.0:1 | #008FBE → #00A8D8, ≥ 3.0:1 across the heading |
| Breadcrumb under the heading | 16px semibold (small text, needs 4.5:1) | 19px bold (large text, 3:1 applies) |
