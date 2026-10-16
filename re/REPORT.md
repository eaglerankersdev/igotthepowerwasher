# igtpw.com/pressure-washing — Reverse-Engineering Report and Reconstruction Plan

Date: 2026-10-16. Target: https://www.igtpw.com/pressure-washing (live, HTTP 200).

Legend: **[C]** confirmed by inspected code, DOM, or runtime capture. **[A]** approximation or inference. **[U]** unknown / open.

## 0. Evidence index

| Evidence | Location |
|---|---|
| Server HTML | `re/raw/page.html` (31,363 bytes), DOM outline `re/raw/outline.txt` |
| Next.js chunks (13 static + 4 dynamic) | `re/raw/_next/static/chunks/**`, pretty-printed `re/raw/pretty/{layout,page}.js` |
| Stylesheet | `re/raw/_next/static/css/41db7881dd6f82c1.css` |
| Lottie JSON (extracted from chunks) | `re/raw/lottie/layout_bubbles_09.json`, `re/raw/lottie/page_Comp_15.json` |
| Image assets (reference copies) | `re/raw/images/*` |
| Reference screenshots 1440/1024/768/390 | `re/shots/orig-{w}.png` (full page), nav/footer/Lottie frames, dropdown and mobile menu states |
| Computed-style measurements | `re/measure/orig-{w}.json` |
| REA browser scenario (menus, final DOM, a11y, step screenshots) | `re/rea/capture.json`, evidence `ev_54cae716…e91d7154`, screenshots `re/rea/rea-step*.png`, `re/rea/rea-final-dom.html` |
| REA browser scenario (network + console) | `re/rea/capture-network.json`, evidence `ev_ff222e4f…357e16c` |

REA MCP tools were not attached to the running session, so REA was driven through its CLI (`rea-agents@6.5.0 capture-browser-scenario`, launch mode, Google Chrome). Both captures report `completeness.status: complete`.

## 1. Stack identification [C]

| Item | Finding | Evidence |
|---|---|---|
| Framework | Next.js **15.2.2**, App Router (`app/layout`, `app/pressure-washing/page` chunks), React **19.1.0** | version strings in chunks 1684 / 4bd1b696 |
| Styling | Tailwind CSS **v4** (oklch color vars, `--spacing`, `@property` rules) plus a small global stylesheet | CSS file |
| Fonts declared | `next/font` Geist + Geist Mono (woff2 loaded, but **not used** by any visible element); `body{font-family:Arial,Helvetica,sans-serif}`; `h1..h6{font-family:Space Grotesk,sans-serif!important}`; `p{font-family:Barlow,sans-serif!important}`; `.font_barlow`, `.font_space_grotesk` | CSS; network shows only the two Geist woff2 files |
| Fonts actually rendered | **Space Grotesk and Barlow are never loaded** (no `@font-face`, no Google Fonts link, no network request). Headings/paragraphs fall back to the platform `sans-serif` (Helvetica on macOS, Arial on Windows). Everything else is Arial/Helvetica. | network capture (REA + Playwright), `document.fonts` |
| Motion | framer-motion (chunk 1741: `whileInView`, `MotionConfig`), used as `motion.div/section/h1/span` | page chunk |
| Lottie | `lottie-react` (chunk 3770, UMD wrapper) on top of `lottie-web` SVG renderer (chunk 9066, `bm_rt` markers). Both loaded via `next/dynamic` with `ssr:false`. | layout + page chunks, webpack map |
| Icons | react-icons Font Awesome paths (bars, chevron-down, chevron-right, arrow-right, facebook, instagram, tiktok, phone, envelope, location-arrow) | SVG path data in DOM |
| Other chunks present but unused on this route | `@lottiefiles/react-lottie-player` (chunk 3078), EmailJS 4.4.1 (chunk 5518) | webpack chunk map |
| Hero background | `/images/pages-bg.jpg` is referenced at opacity 0.26 but the server returns **404** (console error captured by REA). The hero renders as flat `#00C6F9`. | REA network capture, console event |

## 2. Page structure [C]

```
<body class="antialiased">            font: Arial/Helvetica, color #171717, bg #fff
 <nav class="bg-white relative">
   <div absolute inset-0 z-0 opacity-50 overflow-hidden>   ← Lottie "bubbles 09" (2 variants, see §4)
   <div relative z-10 flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4>
     <div w-32><img /images/uft.png (308×365 → 128×151.7)>
     <div flex items-center md:order-2 space-x-1 md:space-x-2>
        <a /get-estimate "Free Estimate"  bg #00C6F9 hover:bg-blue-500 rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 font-medium>
        <button md:hidden w-10 h-10 text-sky-400 hover:bg-gray-800>  FaBars w-5 h-5
     <div {open?block:hidden} w-full md:flex md:w-auto md:order-1>
        <ul flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8>
          Home | About Us ▾ | Residential ▾ | Commercial ▾ (nested Stain Removal ▸, Parking Lot Maintenance ▸) | Gallery ▾ | Seal Solutions
 <div>  (page)
   HERO  div.relative flex items-center justify-center min-h-[60vh] bg-[#00C6F9] z-0
         div.absolute inset-0 bg-[url('/images/pages-bg.jpg')] opacity-[0.26]   (404)
         div.relative z-10 text-center
            motion.h1  text-white text-5xl font-bold mb-4
            motion.div flex justify-center text-white text-md font_barlow font-semibold text-opacity-85
               "Residential" <motion.span><FaArrowRight text-lg text-sky-300></motion.span> "Pressure Washing"
   INTRO div.bg-gradient-to-b from-gray-50 to-white > div.max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16
         motion.div text-center mb-16  (h2 gradient text, p text-xl max-w-3xl, Lottie "Comp 15" w-64 h-64 sm:w-80 sm:h-80)
         motion.section mb-20  card "Best Cincinnati Pressure Washing Company - Our Vision" (2-col grid gap-12, 2 images)
         motion.section mb-20  card "Comprehensive Pressure Washing Services" (2-col grid gap-8; columns-2 checklist; Service Areas grid-cols-2)
         motion.section mb-20  card "Advanced Cleaning Technology" (2-col grid gap-8; emoji tiles; image)
         motion.section        gradient quote block (from-[#00C6F9] to-blue-600, p-8, rounded-2xl)
   SLIDERS section.p-8.bg-white > div.grid grid-cols-1 sm:grid-cols-2 gap-6 > 2 × BeforeAfterSlider
 <footer class="bg-sky-200 text-[black] py-8 px-4 relative overflow-hidden min-h-[500px] md:min-h-[400px] mt-3">
   <div absolute inset-0 z-0 opacity-75>  ← Lottie "bubbles 09" (speed 0.8, scale 1.5, slice)
   <div relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6>  brand | Residential | Commercial | Quick Links | Contact
   <div max-w-7xl mx-auto mt-6 pt-4 border-t border-[#00C6F9]/30 text-center>  © {year} … | Privacy Policy | Terms of Service
```

Full class strings, copy, link hrefs and menu contents are in `re/raw/pretty/layout.js` (nav module `9501`, footer module `5352`) and `re/raw/pretty/page.js` (page module `6776`, slider module `6851`). All copy text and hrefs are to be reproduced verbatim from those modules.

## 3. Design tokens [C]

| Token | Value |
|---|---|
| Brand cyan | `#00C6F9` = rgb(0,198,249) (buttons, nav links, badges, bullets, borders) |
| Nav link hover (Home only) | `#80a2d4` |
| Button hover | Tailwind `blue-500` = oklch(.623 .214 259.815) |
| Gradient text / quote | `linear-gradient(to right, #00C6F9, blue-600 oklch(.546 .245 262.881))` |
| Footer bg | Tailwind `sky-200` = oklch(.901 .058 230.902) |
| Dropdown border | `sky-300` = oklch(.828 .111 230.318), radius 8px, shadow-md |
| Body text | `#171717`; card text `gray-700/800`; footer text `#000` |
| Card | bg #fff, `p-8` (32px), `rounded-2xl` (16px), `shadow-lg`, `border border-gray-100` |
| Section rhythm | cards `mb-20` (80px); container `max-w-7xl` (1280px) `py-16` |
| Type scale (Tailwind v4 defaults) | h1 48/48 700; intro h2 36/40 700; card h2/h3 30/36; h4 24/32 600; intro p 20/32.5; card p 18/29.25; body 16/24; footer h4 14/20 700 uppercase; footer links 12/16; badges 12px |

## 4. Lottie animations [C]

### 4.1 "bubbles 09" (`re/raw/lottie/layout_bubbles_09.json`, 9,585 bytes, inlined in the layout chunk as `JSON.parse(...)`, exported by Lottie Files toolkit 0.33.2)

| Property | Value |
|---|---|
| Canvas | 1080 × 1080, **24 fps**, `ip 0`, `op 93` → one loop = **3.875 s** |
| Structure | 5 precomp layers `wa` all referencing `comp_0`, staggered start times `st = 0, 5, 10, 19, 28` frames at positions (516,540) (436,620) (596,700) (476,700) (556,700) |
| `comp_0` | 3 shape layers (circles with highlight): fill `#2dc6f8`, white `#ffffff` highlight, 1px-ish black stroke `#000000`; each bubble rises ~1200 → ~70 px in y over 52 frames with ease in/out `(0.167,0.167)/(0.833,0.833)` (After Effects "easy ease") and opacity 100 → 0 at frame 52 |
| Visual result | Pale cyan bubbles with white highlights drifting upward and fading out; because `op` is 93 only the first 93 frames of the 404-frame comp play before looping |

Mount points (all through `next/dynamic(() => import('lottie-react'), { ssr:false })`):

| Where | Props | Effect |
|---|---|---|
| Nav, desktop (`hidden md:block`) | `loop`, `speed: 0.1`, `style{width:100%,height:100%,transform:scale(2)}`, `rendererSettings{preserveAspectRatio:'xMidYMid slice'}` | 1 loop ≈ **38.75 s**; SVG fills the 183.7px-tall nav and is scaled 2× (measured SVG box at 1440: 2880 × 367 px, offset −720/−92); parent at `opacity-50` |
| Nav, mobile (`md:hidden`) | `loop`, **no speed** (1×), same scale(2) style, **no rendererSettings** → default `xMidYMid meet` | 1 loop = 3.875 s; SVG box at 390: 780 × 367 px (meet keeps 1:1, so bubbles are confined to a centered square and clipped by `overflow-hidden`) |
| Footer | `loop`, `speed: 0.8`, `className w-full h-full`, `rendererSettings{preserveAspectRatio:'xMidYMid slice', transparent:true}`, `style{transform:scale(1.5), overflow:visible}` | 1 loop ≈ 4.84 s; SVG 2160 × 600 at 1440 (offset −360); parent `opacity-75`. Bubbles only cross the visible slice band briefly (visible in `re/shots/footer-2.png`, absent in `footer-0.png`) |

`autoplay` is lottie-react's default (`true`). No `initialSegment`, no interactivity, no `onComplete` handling.

**`speed` is a no-op [C].** lottie-react's consumed prop list (chunk 3770: `animationData, loop, autoplay, initialSegment, on*, lottieRef, renderer, name, assetsPath, rendererSettings`) does not include `speed`; the value is spread onto the wrapper `<div>` as a plain attribute and `setSpeed` is only reachable through `lottieRef`. Consequently **all three bubbles mounts play at 1× (3.875 s per loop)**, which matches the frame captures (`re/shots/nav-frame-0..3.png` show large bubble travel over 3 s, impossible at 0.1×). The clone passes the same prop so the DOM and behaviour are identical.

### 4.2 "Comp 15" (`re/raw/lottie/page_Comp_15.json`, 236,996 bytes, inlined in the page chunk)

| Property | Value |
|---|---|
| Canvas | 512 × 512, **25 fps**, `ip 0`, `op 81` → one loop = **3.24 s** |
| Content | Technician character holding a pressure-washer wand (fills `#00c5f9` shirt/shoes, skin `#f7ac76`/`#ffd9b2`, trousers `#43334e`/`#5b4b68`, navy hair `#203881`); 7 shape layers. Layers 2/7/8 are children of layer 7 and are sequential bursts (`ip/op` 4–24, 24–44, 44–64) = the spray; `Layer 6` shows frames 18–51; `Layer 3` has an animated scale. |
| Mount | Intro block only: `<Lottie animationData loop autoplay className="w-64 h-64 sm:w-80 sm:h-80" />` → 256 px square below 640px, **320 px square** from `sm` up; default renderer (`xMidYMid meet`), speed 1. Measured at 1440: 320 × 320 at x=560, y=949. |

### 4.3 Page loader [C]

**There is no separate page loader.** Evidence: no `app/loading` chunk or `<!--$?-->` streaming boundary in the HTML (the only Suspense markers are the four `<!--$!-->` client-only Lottie placeholders); "Comp 15" exists only in the page chunk and is referenced once, in the intro section; the homepage HTML (`re/raw/home.html`) references neither "Comp 15" nor the unused `@lottiefiles/react-lottie-player` chunk. First paint shows the SSR HTML with the Lottie slots empty until the two dynamic chunks (305 KB lottie-web + 9 KB lottie-react) load, then the SVGs mount.

## 5. framer-motion behaviour [C]

| Element | initial | target | transition | viewport |
|---|---|---|---|---|
| Hero `h1` | `{opacity:0, y:-50}` | `{opacity:1, y:0}` | `duration 1, ease 'easeOut'` | `once:true` |
| Breadcrumb row | `{opacity:0, y:50}` | same | `duration 1, easeOut, delay 0.5` | once |
| Arrow icon `span` | `{opacity:0, y:50}` | same | `duration 1, easeOut, delay 0.8` | once |
| Intro `motion.div` (h2 + p + Comp 15) | `initial:"offscreen" whileInView:"onscreen" viewport{once, amount:.5}` **but no `variants` prop** → renders visible immediately, no animation (SSR HTML has no inline style on it) | | | |
| 4 × `motion.section` | variants `offscreen {opacity:0,y:50}` → `onscreen {opacity:1,y:0, transition{duration:.6}}` (default ease) | | | `once:true` (default amount "some") |

SSR inline styles (`opacity:0;transform:translateY(50px)`) are present on the sections, so the sections are invisible until hydration + in-view.

## 6. Interactions [C]

- **Dropdowns**: click toggles (`openMenu === key ? null : key`), not hover. A document `click` listener closes everything when the click target is outside `nav`. Only one top-level menu open at a time; one nested submenu (`stainRemoval` / `parking`) at a time. Menus are `absolute z-10 bg-white border border-sky-300 rounded-lg shadow-md`, inner `ul p-4 space-y-4 text-sm text-[#00C6F9]` (measured 148 × 234 px for Residential at 1440; Commercial `min-w-[200px]`; nested `left-full top-0 min-w-[220px]`). Parent `li` elements are **not** `relative` (except nested ones), so the dropdown is positioned relative to `nav` and appears directly under the button text (left edge at the button's left edge).
- **"About Us", "Stain Removal", "Parking Lot Maintenance"** are a `<button>` wrapping an `<a>`: the text navigates, the chevron area toggles.
- **Mobile menu**: hamburger toggles `block/hidden` on the links wrapper; it stacks under the logo row (`w-full`, `ul flex-col mt-4`, items `py-2 px-3`). Measured open nav height at 390: 439.7 px.
- **Before/After slider** (module 6851): `<input type=range min 0 max 100>` stretched over the card at `opacity-0 cursor-ew-resize`; state `position` (default 50) drives `width:${p}%` on the before-image clip, the 4px white divider (`left:p%`, `translateX(-50%)`, `box-shadow 0 2px 8px rgba(0,0,0,.2)`) and the 32px white handle with "↔" at 18px. Card height is computed from the **after** image's aspect ratio (`naturalWidth/naturalHeight`) against `offsetWidth` via a `ResizeObserver`, initial 400px, with `transition-all duration-300`. Badges "Before"/"After" `top-2 left-2 / right-2`, `text-xs px-2 py-1 rounded`. Measured at 1440: two 676 × 728 px cards; the second card is 727.8 px (different image ratio).
- **Hover states**: Free Estimate `hover:bg-blue-500`; Home `hover:text-[#80a2d4]`; other nav links hover to the same cyan (no visible change); images in cards `hover:shadow-xl transition-shadow`; footer logo `hover:opacity-80`; BBB badge `hover:scale-105`; footer links `hover:underline`; social icons hover to brand colors (#1877F2, #E4405F, black).
- **Focus**: Free Estimate `focus:ring-4 focus:ring-blue-300`; hamburger `focus:ring-2 focus:ring-gray-600`.

## 7. Measurements by viewport (Playwright, Chromium, DPR 1) [C]

| Metric | 1440 | 1024 | 768 | 390 |
|---|---|---|---|---|
| Page height | 5092 | 4740 | 4680 | 7417 |
| Nav height | 183.7 | 223.7 | 287.7 | 183.7 (closed) / 439.7 (open) |
| Nav inner box | x 80, w 1280, p-4 | full width | full width | full width |
| Logo | 128 × 151.7 at (96,16) | (16,16) | (16,16) | (16,16) |
| Nav links row | ul x 303, w 826, h 40; links 16px/500, `py-2 px-3`, `space-x-8` | wraps: Free Estimate drops to y 167 | ul wraps to 2 lines (About Us breaks) and Free Estimate drops to y 231 | hidden |
| Hero | 540 tall (60 vh of 900), flat #00C6F9 | 540 | 540 | 540 |
| h1 | 48/48, 1 line, w 1342 | 2 lines (96) | 2 lines | 5 lines (240) |
| Intro h2 | 36/40 gradient text | 1 line | 2 lines | 3 lines |
| Cards | w 1216, p 32, heights 821 / 378 / 879 | w 960 | w 720 | w 358 |
| Card images | 551 × 368 (2-col) | 423 × 282 | 303 × 202 | 292 × 195 (stacked) |
| Sliders | 2 × 676 × 728 | 2 × 468 × 504 | 2 × 340 × 366 | 1 × 326 × 351 stacked |
| Footer | 400 tall, 5 cols × 236.8, gap 24 | 407.5 | 430 (h4s wrap) | 1205 tall, stacked |
| Nav Lottie SVG box | 2880 × 367 (slice) | 2048 × 447 | 1536 × 575 | 780 × 367 (meet) |

Breakpoints are Tailwind defaults only: `sm 640`, `md 768`, `lg 1024`, `xl 1280`. At exactly 768 the desktop nav is already active and visibly cramped (see `re/shots/nav-768.png`); this is the original's behaviour.

## 8. Assets

| Asset | Natural size | Use |
|---|---|---|
| `/images/uft.png` | 308 × 365 | nav logo (`<img>`), footer logo (`next/image` 128×48 declared, rendered `w-32 h-auto`) |
| `/images/305.png` | 1313 × 876 | card 1 left image |
| `/images/299-1024x683-1.png` | 1024 × 683 | card 1 right image |
| `/images/effff.jpg` | 1200 × 1600 | card 3 image |
| `/images/1.jpeg` / `2.jpeg` | 1201 × 1293 / 1149 × 1238 | slider 1 before / after |
| `/images/3.jpeg` / `4.jpeg` | 898 × 971 / 875 × 942 | slider 2 before / after |
| `/images/footer-image.png` | 1536 × 553 | BBB badge (`next/image` 100×100 declared, renders 100 × 36) |
| `/images/pages-bg.jpg` | **404** | hero background (missing on live site) |
| `/favicon.ico` | | |

Licensing [U]: logos, photos and the BBB badge belong to the site owner / BBB. Reference copies are in `re/raw/images` for comparison only. The reconstruction will reference them from `public/images` only if you confirm you are authorized to use them; otherwise placeholders of identical dimensions will be used.

## 9. Confirmed vs approximate

Confirmed: everything in §1–§8 marked [C], including exact Tailwind classes, copy, hrefs, Lottie JSON, Lottie props, framer-motion props, slider logic, measured boxes.

Approximate / platform-dependent [A]:
- Heading and paragraph glyph rendering depends on the viewer's platform `sans-serif` fallback because Space Grotesk / Barlow are not loaded. Comparisons will be made on this Mac (Helvetica).
- Lottie frames are time-dependent; pixel comparison will mask the Lottie regions or compare at matched frames.
- `whileInView` sections are compared after scrolling them into view and waiting for the 0.6 s transition.

Unknown [U]:
- Exact framer-motion and lottie-react versions (no version strings in the minified chunks). Behaviourally identical APIs are used; latest versions will be pinned.
- Whether the missing `pages-bg.jpg` and unloaded fonts are intentional. Both are reproduced as-is unless you decide otherwise (see decisions).

## 10. Implementation plan

Target: new Next.js 15 (App Router) project in `/Users/mac/Documents/pressure-washer`, TypeScript, Tailwind v4, `framer-motion`, `lottie-react`, `react-icons`. No backend, no EmailJS.

Files:

```
app/layout.tsx                 Geist via next/font (to match SSR class names/line metrics), <Navbar/>, children, <Footer/>
app/globals.css                Tailwind v4 import + the 5 global rules from §1 (body Arial, h1-h6 Space Grotesk, p Barlow, .font_barlow, .font_space_grotesk)
app/pressure-washing/page.tsx  Hero + PressureWashingContent + BeforeAfterGallery
app/page.tsx                   redirect → /pressure-washing (keeps "/" links working)
components/Navbar.tsx          exact JSX from module 9501 (menus, click-outside, mobile toggle)
components/Footer.tsx          exact JSX from module 5352
components/LottieBackground.tsx thin client wrapper around lottie-react (dynamic, ssr:false) accepting the same props
components/BeforeAfterSlider.tsx + BeforeAfterGallery.tsx  from module 6851
components/MotionSection.tsx   motion.section with the shared offscreen/onscreen variants
public/lottie/bubbles-09.json, public/lottie/comp-15.json  (imported as JSON modules, inlined like the original)
public/images/*                assets (see §8 decision)
```

Steps:
1. Scaffold with `create-next-app@15` (TS, Tailwind, App Router, no src dir), pin `framer-motion`, `lottie-react`, `react-icons`.
2. Port global CSS and layout; verify body font stack and the `antialiased` class.
3. Port Navbar and Footer verbatim, including both bubbles mounts with their exact props.
4. Port the page: hero (with the `pages-bg.jpg` reference), intro with Comp 15, the four motion sections, the slider gallery.
5. Run the clone on `localhost:3000` and the comparison script (`re/compare.mjs`): for each of 1440/1024/768/390, full-page screenshots of original vs clone after the same scroll sequence, `pixelmatch` diff and 50% overlay PNGs into `re/diff/`, plus per-section bounding-box diffs from `getBoundingClientRect` (nav, hero, h1, cards, sliders, footer).
6. Fix any box deltas > 1 px and re-run until the only remaining differences are inside the masked Lottie regions and time-dependent image fades.
7. Interaction tests (Playwright): dropdown open/close/click-outside, nested submenu, mobile menu, slider drag via range input, hover colors, hero/section animations present, Lottie SVG roots mounted with the expected `preserveAspectRatio`.

Acceptance: a diff report per viewport listing matched boxes and residual pixel-difference percentage with masks explained, screenshots side by side. "Pixel-perfect" will only be claimed for regions where the diff is zero on this machine.
