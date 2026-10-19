# igtpw.com — Full-Site Reverse-Engineering Report

Date: 2026-10-16. Target: https://www.igtpw.com/ (all routes). Companion to `re/REPORT.md`, which covers `/pressure-washing` in depth.

Legend: **[C]** confirmed from inspected code, DOM or runtime capture. **[A]** approximation. **[U]** unknown.

## 1. Route inventory [C]

No `sitemap.xml` or `robots.txt` exists (both return the Next.js 404 page). Routes were discovered by crawling every internal link from `/`, then adding links that only appear inside the dropdown menus.

| Status | Count | Routes |
|---|---|---|
| 200 | 39 | `/`, `/about-us`, `/annual-maintenance-program`, `/building-wash`, `/career`, `/commercial-gallery`, `/commercial-gutter-cleaning`, `/commercial-pressure-washing`, `/commercial-window-cleaning`, `/concrete-pressure-washing`, `/concrete-sealing`, `/contact-us`, `/efflorescence-removal`, `/fence-washing`, `/gallery`, `/gas-station`, `/get-estimate`, `/graffiti-removal`, `/grease-removal`, `/gum-removal`, `/gutter-cleaning`, `/house-washing`, `/oil-removal`, `/parking-lot-maintenance`, `/parking-lot-washing`, `/post-construction-clean-up`, `/pressure-washing`, `/residential-gallery`, `/restaurant`, `/reviews`, `/roof-washing`, `/rust-removal`, `/satisfaction-guarantee-policy`, `/seal-solutions`, `/services`, `/stain-removal`, `/sweeping-cleaning`, `/the-clean-team`, `/window-cleaning-cincinnati` |
| 404 on the original | 4 | `/quality-guarantee`, `/blogs`, `/privacy-policy`, `/terms-of-service` (linked from the footer but not built) |

Evidence: `re/site/routes.json`, `re/site/inventory.json`, raw HTML in `re/site/html/`.

No route sets a `<title>` or meta description. The clone matches that.

## 2. Page loader [C]

The loader exists **only on the homepage** (`/`). It is not a route-transition loader and does not appear on any other page.

| Property | Value | Evidence |
|---|---|---|
| Component | `AE` (page) → `Ai` (loader) in module `2420`, chunk `app/page-c32512ff13036244.js` | `components/m/M2420.tsx` |
| Animation | Lottie `lfvideo2lottie`, exported by LottieFiles "video to Lottie": **235 full-frame WebP images** (one image layer per frame), 1080×1080, **24 fps, frames 0–235 = 9.79 s**, 1.9 MB inline JSON | `lib/lottie/m/M2420-lfvideo2lottie.json` |
| Content | A cyan water drop falls onto the page and bursts into a full-screen splash | REA step screenshots `re/rea/home-loader-*.png` |
| Overlay | `fixed inset-0 z-50 bg-white/90 backdrop-blur-sm` containing `fixed inset-0 flex items-center justify-center w-screen h-screen bg-transparent` | M2420 |
| Player props | `loop: false`, `onComplete: onFinish`, `lottieRef`, style `width:150vw; height:150vh; position:absolute; top:50%; left:50%; transform: translate(-50%,-50%) scale(1.5)` (scale **1.25** when `window.innerWidth <= 768`, updated on resize), `className: overflow-visible` | M2420 |
| Fallback while lottie chunks load | `w-24 h-24 bg-gray-200 rounded-full animate-pulse` (also present in the server HTML) | original `re/site/html/home.html` |
| Page behind | wrapped in `transition-all duration-500 blur-sm` until `onComplete`, then `blur-none` (500 ms transition) | M2420 |
| Lifecycle (REA, 1440×900, headless Chrome) | 1 s: white blurred overlay, pulse/drop. 6 s: splash fills screen. 12 s: overlay removed, content sharp | REA evidence `ev_a316ca5d…f4000e`, `re/rea/capture-home-loader.json` |

`house-washing` uses a second, smaller video-to-Lottie (`lfvideo2lottie`, 680×680, 48 frames, 2 s) as an in-page animation, not a loader.

## 3. Lottie inventory [C]

| Name | Used on | Size / timing | File |
|---|---|---|---|
| bubbles 09 | header (desktop + mobile mounts) and footer, every page | 1080², 24 fps, 3.875 s loop | `lib/lottie/m/M7842-bubbles-09.json` |
| lfvideo2lottie (loader) | `/` loader | 1080², 24 fps, 9.79 s, play once | `lib/lottie/m/M2420-lfvideo2lottie.json` |
| Comp 15 | `/pressure-washing` intro | 512², 25 fps, 3.24 s loop | `lib/lottie/m/M6776-comp-15.json` |
| Animation 04 | `/about-us` | 1920×1080, 30 fps, 4.03 s loop | `lib/lottie/m/M5434-animation-04.json` |
| Comp 5 | `/window-cleaning-cincinnati` | 256², 25 fps, 3.24 s loop | `lib/lottie/m/M5018-comp-5.json` |
| lfvideo2lottie (680) | `/house-washing` | 680², 24 fps, 2 s | `lib/lottie/m/M5674-lfvideo2lottie.json` |

All are rendered by `lottie-react` loaded through `next/dynamic` with `ssr:false`. The `speed` prop passed on two bubbles mounts is ignored by lottie-react (see `re/REPORT.md` §4).

## 4. Stack and libraries [C]

Next.js 15.2.2 App Router, React 19, Tailwind v4, framer-motion (`motion`, `AnimatePresence`, `useAnimation`), lottie-react on lottie-web, react-icons (`fa` and `fi` sets, 31 icons resolved by SVG matching, `re/site/icon-map.json`), react-hook-form (estimate and career forms), react-toastify (form toasts), styled-components (homepage service cards), styled-jsx (homepage), EmailJS (form delivery), YouTube embed on `/house-washing`.

CSS Modules: `roofwashing` (11 routes), `team` (`/the-clean-team`), `windowCleaning` (`/window-cleaning-cincinnati`). Rebuilt with original local class names in `styles/*.module.css`.

Assets: 122 files under `/images`, 12 statically imported images (now `/media`), 3 referenced images that 404 on the original (`pages-bg.jpg`, `After_fence.jpg`, `thumbnail.jpg`).

## 5. Reconstruction method

Instead of hand-retyping 39 pages, the original production chunks were **unbundled** (`re/unbundle.mjs`):

1. Every webpack module factory is loaded from all chunks.
2. Starting from each page's entry module, every reachable app module is converted to `components/m/M<id>.tsx`.
3. `jsx()/jsxs()` calls are converted back to JSX. Library references are rewritten to real imports (framer-motion, next/image, next/link, next/dynamic, react-icons by name, react-hook-form, react-toastify, styled-components, CSS Modules, lottie-react).
4. Inline Lottie JSON is extracted to `lib/lottie/m/*.json`.
5. `app/<route>/page.tsx` renders the entry module. The layout renders the original nav (module 9501) and footer (module 5352).

This preserves every class string, copy text, prop value, animation setting and interaction handler exactly as shipped. The trade-off is that local variable names are the minified ones from the original build.

## 6. Deviations from the original (deliberate)

| Item | Original | Clone | Reason |
|---|---|---|---|
| Homepage loader state init | `useState(() => window.innerWidth <= 768)` | adds `typeof window !== "undefined" &&` | Static prerender crashes without it. Server HTML and client behaviour are unchanged. |
| Form delivery | EmailJS sends to the business's account | `lib/emailjs.ts` resolves like a successful send unless `NEXT_PUBLIC_EMAILJS_ENABLED=true` | Prevents the clone from emailing the real business. UI, validation and toasts are identical. |
| Fonts, `pages-bg.jpg` | declared but not loaded / 404 | same | Reproduced as-is by user decision. |

## 7. Verification

See `re/diff-site/summary.json` and the verification section appended below after each run.

## 8. Verification results (2026-10-19)

Original vs clone, Playwright Chromium, DPR 1, after an identical scroll pass. Lottie SVGs, video and iframes are hidden in both captures, and the homepage logo marquee animation is frozen in both.

| Result | Routes × widths (1440, 1024, 768, 390) |
|---|---|
| 0 differing pixels, identical height, all element boxes within 1 px | 38 routes plus the 404 page |
| `/gallery` 1440 and 1024 | 1 px vertical shift of the footer bottom line from sub-pixel page height (0.03% and 0.2% of pixels). 768 and 390 are identical. |
| `/house-washing` 768 | 2 differing pixels |

Homepage element boxes inside the marquee differ because they are measured while moving. Its pixels match after freezing.

Behaviour: loader timeline, overlay, blur and Lottie sizing at 1440 and 390 match; empty-submit validation on all four forms matches; 25/25 nav, dropdown, mobile menu, slider and hover checks match on `/pressure-washing`.

Fixes found by verification: missing assets with parentheses in their names (Google review avatars), conflicting module variants across deploys, server-rendered heroes on `/about-us` and `/career` recovered from the RSC payload, and the `@lottiefiles/react-lottie-player` and EmailJS dynamic imports.
