# Lakhdata Computer Care — Animated Single-Page Mockup

Premium, single-page marketing site for **Lakhdata Computer Care** (laptop & desktop
repair, Zirakpur, Punjab). The hero is a **scroll-driven 3D laptop that assembles
part-by-part** — and each part that snaps into place reveals the matching repair
service. Built with **Astro** + a **React Three Fiber** island.

## Stack

| Concern | Choice |
|---|---|
| Shell / pages | Astro 5 (ships ~0 JS by default) |
| 3D | React Three Fiber + drei + three (primitive part stand-ins) |
| Scroll | Lenis smooth-scroll + GSAP/ScrollTrigger reveals |
| Styling | Plain CSS + design tokens (`src/styles/tokens.css`) |
| Forms | React island with client-side validation → Formspree placeholder |

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
npm run preview  # serve the built site
```

## How the 3D assembly works

- `src/components/sections/Hero.astro` renders a tall `#assembly` driver with a
  sticky 100vh stage holding the `<LaptopScene>` canvas (client-only island).
- `LaptopScene.tsx` reads the driver's scroll progress (0→1) each frame and stores it
  in a ref. No GSAP coupling for the 3D — robust and self-contained.
- `useAssemblyTimeline.ts` maps progress → each part's interpolated pose, model spin,
  camera dolly (CPU zoom-in beat) and screen glow.
- `partPoses.ts` holds the exploded-start / assembled-end transform per part. **Swap
  the primitive boxes for a DRACO `.glb` later without touching the scroll logic.**
- Captions come from `src/data/services.ts`, the single source shared with the
  Services grid — the 3D narrative *is* the services list.

## Re-theming

All brand values live in `src/styles/tokens.css` (orange `#F26F21` + black on white,
sampled from the logo). The 3D scene accent is passed via the `accent` prop in
`Hero.astro`. Change the hex in one place to re-theme the whole site.

## Accessibility / performance

- `prefers-reduced-motion`: no pin, no scrub — the laptop shows fully assembled and
  sections stack normally.
- The 3D island is `client:only` — heavy three.js JS loads only on the client; hero
  copy is server-rendered Astro for SEO/LCP.
- Semantic landmarks, skip-link, labelled nav/socials, focus-visible styles, form
  labels + inline errors.

## Pending from client (non-blocking)

- Vector **SVG** of the real logo (current `public/logo.svg` is a faithful placeholder).
- Social profile **URLs** (`src/data/site.ts` → `socials`, currently `#`).
- Contact-form **backend** (`site.formEndpoint`, currently a Formspree placeholder).
- Optional: a real laptop **`.glb`** with named meshes (`chassis`, `motherboard`,
  `cpu`, `ram`, `storage`, `keyboard`, `screen`) to replace the primitive stand-ins.
- Real raster **OG image** (`og:image` currently points at the logo).
