# AzurEscape UI/UX Audit
**Date:** 2026-06-05  
**Scope:** Full codebase — `src/` components, pages, Tailwind config, `public/` assets  
**Methodology:** Static analysis of all JSX, CSS, and config files  

---

## Priority: HIGH

### Pillar 1 — Visual Hierarchy & Typography

#### H-VH-01 · Hero heading type scale gap
**File:** `src/components/Hero.js:29`  
`text-4xl sm:text-5xl md:text-7xl` — skips an entire size step between `sm` (48px) and `md` (72px). At iPad width (768px) the h1 renders at 72px which is overpowering relative to the subtitle. The jump is visually jarring when resizing through tablet widths.  
**Fix:** Add an intermediate step: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`.

#### H-VH-02 · Data inconsistency — traveler count
**Files:** `src/components/Hero.js:67`, `src/components/AboutPreviewSection.js` (stat card)  
Hero shows **"200+ Happy Travelers"**; the About section shows **"500+ Happy Travelers"**. One of these numbers is wrong. Skeptical visitors will notice.  
**Fix:** Align on a single canonical number and apply it consistently (and translate it via `t()`).

#### H-VH-03 · Hero stats hardcoded English
**File:** `src/components/Hero.js:69,72,75`  
"Happy Travelers", "Historic Villages", "Languages Spoken" are hardcoded strings that do not call `t()`. They remain English when the site is switched to French.  
**Fix:** Add keys to `translations.js` under `hero.stats.*` and use `t()`.

---

### Pillar 2 — Mobile Responsiveness & Touch Targets

#### H-MT-01 · Social icon touch targets below WCAG minimum
**File:** `src/components/Contact.js`  
Social icon buttons are `w-8 h-8` (32×32px) on mobile. WCAG 2.1 SC 2.5.5 requires a minimum 44×44px click target. With no padding wrapper, the interactive area is only 32px — a 27% shortfall.  
**Fix:** Wrap each icon in a `<a>` with `p-3` (resulting in 56×56px target) or set the icon size to `w-11 h-11`.

#### H-MT-02 · Hero stats stacked on mobile
**File:** `src/components/Hero.js:64`  
`grid-cols-1 md:grid-cols-3` stacks all three stats vertically on every screen below 768px (including tablets at 600–767px). This pushes the scroll indicator far out of view above the fold.  
**Fix:** Change to `grid-cols-3` (always 3 columns) — stat numbers are short enough to fit at any mobile width. Add `gap-4` for breathing room.

---

### Pillar 3 — Interaction Design & Booking Flow Friction

#### H-BF-01 · Broken "Testimonials" route (critical navigation bug)
**Files:** `src/components/AboutPreviewSection.js:255`, `src/components/Footer.js:97`, `src/components/Navbar.js:134`  
All three files navigate to **`/clients`**. The actual route defined in `App.js:65` is **`/testimonials`**. Clicking "Meet Our Clients" in the About section, the "Testimonials" footer link, or the navbar Testimonials item navigates to an unmatched route and renders nothing (React Router falls through without a 404 component).  
**Fix:** Change all three call sites to `/testimonials`. This is the single highest-impact bug — it silently breaks a primary navigation path.

#### H-BF-02 · Booking sidebar inaccessible on mobile
**File:** `src/components/tour/BookingSidebar.js:21`  
`sticky top-6` only applies within a `lg:col-span-1` grid column. On screens < 1024px, the grid collapses to a single column and the sidebar renders at the bottom of the page after all tour content. The group-size selector (primary price interaction) requires significant scrolling to reach on mobile, where most bookings originate.  
**Fix:** On mobile, surface a condensed booking strip at the bottom of the viewport (fixed/sticky bottom bar), or move the group-size selector above the highlights section in the mobile layout using `order-` utilities.

---

### Pillar 4 — Tailwind CSS Code Smells

*(No High-priority Tailwind smells — see Medium below)*

---

## Priority: MEDIUM

### Pillar 1 — Visual Hierarchy & Typography

#### M-VH-01 · PrivateTourBenefits uses indigo; booking uses blue
**File:** `src/components/EnhancedTourDetails.js:43`  
`PrivateTourBenefits` card uses `indigo` for its border, background, and text. `BookingSidebar` uses `blue-600`. Both appear on the same tour detail page, creating an inconsistent accent palette within a single user flow.  
**Fix:** Switch `PrivateTourBenefits` to `blue` to match the booking sidebar, or adopt `riviera-blue` custom token (`#0077BE`) for both.

#### M-VH-02 · ErrorBoundary messages not translated
**File:** `src/components/ErrorBoundary.jsx:22-34`  
"Something went wrong", "We encountered an unexpected error", "Try again", "Go home" are hardcoded English. The error boundary may show for French-language users.  
**Fix:** Since `ErrorBoundary` is a class component, it cannot call `useLanguage()`. Pass translated strings as props from the parent `App.js`, or store a static copy of the two error strings in `localStorage` that `ErrorBoundary` reads directly.

#### M-VH-03 · Trust features in AboutPreviewSection not translated
**File:** `src/components/AboutPreviewSection.js:22-44`  
`trustFeatures` array ("Licensed & Insured", "Small Groups Only", etc.) is hardcoded English with no `t()` calls.  
**Fix:** Move the strings to `translations.js` under `about.trustFeatures.*`.

---

### Pillar 2 — Mobile Responsiveness & Touch Targets

#### M-MT-01 · Floating stat card may overflow on small screens
**File:** `src/components/AboutPreviewSection.js`  
The stat card positioned `absolute -bottom-6 -left-6` hangs outside its image container. On screens under ~380px, this element overflows the section viewport boundary. The parent container lacks `overflow-hidden`.  
**Fix:** Add `overflow-hidden` to the parent container, or switch to a `relative` flow position instead of the absolute offset.

#### M-MT-02 · CookieConsent "Accept Necessary Only" button text overflow
**File:** `src/components/CookieConsent.js:157`  
The "Accept Necessary Only" label (26 characters) sits in a `flex-col sm:flex-row` button group. On xs screens (320–474px) the button row goes full-width but the text may truncate or cause a reflow.  
**Fix:** Shorten the label to "Necessary Only" or add `whitespace-nowrap` + `text-xs` on xs breakpoint.

#### M-MT-03 · FAQ accordion items have no visible focus ring
**File:** `src/pages/FAQ.js`  
The accordion toggle buttons have no `focus-visible:ring` class. Keyboard users tab through the FAQ without a visible focus indicator — a WCAG 2.1 SC 2.4.7 failure.  
**Fix:** Add `focus-visible:ring-2 focus-visible:ring-riviera-blue focus-visible:outline-none` to each accordion button.

---

### Pillar 3 — Interaction Design & Booking Flow Friction

#### M-BF-01 · FAQ and CookieConsent bypass centralized i18n
**Files:** `src/pages/FAQ.js:19`, `src/components/CookieConsent.js:59`  
Both components define local translation objects (`faqs.en/fr`, `translations.en/fr`) instead of using `translations.js` + `useLanguage()`. Sprint 4 migrated 50 ternaries to the central system; these two components remain outliers. Future copy changes require edits in multiple files.  
**Fix:** Move FAQ questions/answers to `translations.js` and consume via `t()`. Same for CookieConsent strings.

#### M-BF-02 · Privacy Policy links point to undefined routes
**File:** `src/components/CookieConsent.js:176`  
Links to `/privacy-policy` (EN) and `/privacy-policy-fr` (FR). Neither route exists in `App.js`. Clicking causes a silent React Router miss (blank page).  
**Fix:** Either add `<Route path="/privacy-policy" element={<PrivacyPolicy />} />` to `App.js`, or link to an external URL, or remove the link if the page doesn't exist yet.

#### M-BF-03 · Testimonials external Unsplash images — no dimensions
**File:** `src/pages/Testimonials.js:20-98`  
All testimonial avatar `<img>` elements load from Unsplash CDN URLs without `width`, `height`, or `loading="lazy"` attributes. This causes Cumulative Layout Shift (CLS) and unnecessary early network requests.  
**Fix:** Add `loading="lazy"` to all testimonial `<img>` tags. Specify `width` and `height` attributes matching the rendered size to prevent CLS.

---

### Pillar 4 — Tailwind CSS Code Smells

#### M-TC-01 · Redundant `@tailwindcss/line-clamp` plugin
**File:** `tailwind.config.js:78`  
`require("@tailwindcss/line-clamp")` is listed as a plugin. The `line-clamp` utilities have been included in Tailwind CSS core since v3.3. The plugin is redundant and may create specificity conflicts with the built-in utilities.  
**Fix:** Remove `require("@tailwindcss/line-clamp")` from the `plugins` array. Verify the build still works (it will).

#### M-TC-02 · `manifest.json` and `index.html` `theme-color` mismatch brand
**Files:** `public/manifest.json:26` *(now fixed to `#0077BE`)*, `public/index.html:7` *(now fixed)*  
Previously `manifest.json` had `theme_color: "#FF6B35"` (sunset-orange) and `index.html` had `#000000`. Both have been corrected to `#0077BE` (riviera-blue) as part of this audit's favicon fix task.

---

## Priority: LOW

### Pillar 1 — Visual Hierarchy & Typography

#### L-VH-01 · "COVID-19 Safety Protocols" trust badge potentially outdated
**File:** `src/components/Contact.js`  
A trust badge mentioning "COVID-19 Safety Protocols" is a 2020-era signal that may feel dated to 2025+ visitors and could undermine the premium positioning.  
**Fix:** Replace with a current differentiator ("Climate-Conscious Transport", "5-Star Rated", etc.).

#### L-VH-02 · All testimonials are 5-star
**File:** `src/pages/Testimonials.js`, `src/data/testimonialsData.js`  
Every testimonial shows a perfect 5/5 star rating. Homogeneous perfect ratings often read as inauthentic. Consider including one 4-star review with a specific positive comment to increase perceived credibility.

---

### Pillar 2 — Mobile Responsiveness & Touch Targets

#### L-MT-01 · AboutPreviewSection images missing `loading="lazy"`
**File:** `src/components/AboutPreviewSection.js:143`  
Two `<img>` elements (alt="Happy clients at Eze Village" and the second image) load eagerly. As an above-fold section, the first image should be eager; secondary images should be lazy.  
**Fix:** Add `loading="lazy"` to the second/third image in the section.

#### L-MT-02 · Hero background — external CDN dependency with no fallback
**File:** `src/components/Hero.js:19-20`  
The hero background is a Pexels CDN URL injected via `style={{ backgroundImage: "url(...)" }}`. If the CDN is unreachable, the hero renders with no background — a completely broken first impression.  
**Fix:** Download the image to `public/images/`, reference it locally, and add a CSS `background-color` fallback as a solid fallback color.

---

### Pillar 3 — Interaction Design & Booking Flow Friction

#### L-BF-01 · `LoadingAnimations` invisible if CSS animations are blocked
**File:** `src/components/LoadingAnimations.js:9`  
`FadeIn` and `SlideIn` wrappers set `opacity: 0` via inline style plus `animationFillMode: "forwards"`. If the animation keyframe never fires (blocked by `prefers-reduced-motion`, test environment, or CSS load failure), the wrapper's initial `opacity: 0` persists indefinitely — content is invisible.  
**Fix:** Guard inline style with a `prefers-reduced-motion` media query check, or set `opacity: 0` only via the Tailwind animation class (which is removed when the animation is suppressed).

#### L-BF-02 · No `prefers-reduced-motion` support
**Files:** `src/App.css`, `tailwind.config.js`, `src/index.css`  
None of the global styles include a `@media (prefers-reduced-motion: reduce)` block. All custom keyframe animations (fadeIn, slideInUp, wiggle, bounce-gentle, shimmer) will play for users with vestibular disorders who have set this OS preference. WCAG 2.3.3 (Level AAA) and widely expected best practice.  
**Fix:** Add to `src/App.css`:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

#### L-BF-03 · Navbar height magic number in `App.css`
**File:** `src/App.css`  
`main { padding-top: 80px }` and `section[id] { scroll-margin-top: 96px }` are hardcoded to the current navbar height. If the navbar height is ever changed, these two values must be manually hunted down.  
**Fix:** Define `--navbar-height: 80px` as a CSS custom property on `:root` and reference it: `padding-top: var(--navbar-height)`.

---

### Pillar 4 — Tailwind CSS Code Smells

#### L-TC-01 · Non-standard height values `h-70`, `h-66`
**File:** `src/components/AboutPreviewSection.js`  
Tailwind's default spacing scale includes `h-64` (256px) and `h-72` (288px) but not `h-70` (280px) or `h-66` (264px). JIT generates these on demand, but they are non-obvious to future developers and cannot be found in Tailwind's documented scale.  
**Fix:** Replace `h-70` with `h-72` (288px) and `h-66` with `h-64` (256px), adjusting layout as needed.

#### L-TC-02 · Potentially unused custom animation keyframes
**File:** `tailwind.config.js:23-28`  
`wiggle` and `bounce-gentle` are defined in `keyframes` but no component in `src/` was observed using `animate-wiggle` or `animate-bounce-gentle`. These inflate the generated CSS if Tailwind's purge pass doesn't catch them.  
**Fix:** Grep the codebase for `animate-wiggle` and `animate-bounce-gentle`. If unused, remove from `tailwind.config.js`.

#### L-TC-03 · Custom breakpoints `xs` and `3xl` underutilized
**File:** `tailwind.config.js:60-63`  
Custom breakpoints `xs: "475px"` and `3xl: "1600px"` are defined but most responsive classes in the codebase use only `sm`, `md`, and `lg`. The `xs` breakpoint is particularly useful for button layout on 375px phones but is rarely referenced.  
**Fix:** Either apply `xs:` breakpoints consistently in components that need 375–475px adjustments (e.g., CookieConsent button row, Hero stats), or remove the unused breakpoints.

---

## Asset Issues (separate from pillars)

| File | Status | Impact |
|------|--------|--------|
| `public/favicon.ico` | Missing — **fixed** via `favicon.svg` | Browser tab blank |
| `public/logo192.png` | Missing — **fixed** (removed from manifest) | PWA install icon |
| `public/logo512.png` | Missing — **fixed** (removed from manifest) | PWA splash screen |
| `public/manifest.json` `theme_color` | Was `#FF6B35` — **fixed** to `#0077BE` | PWA chrome colour |
| `public/index.html` `theme-color` | Was `#000000` — **fixed** to `#0077BE` | Mobile browser chrome |

---

## Summary by Pillar

| Pillar | High | Medium | Low |
|--------|------|--------|-----|
| Visual Hierarchy & Typography | 3 | 3 | 2 |
| Mobile Responsiveness & Touch Targets | 2 | 3 | 2 |
| Interaction Design & Booking Flow Friction | 2 | 3 | 3 |
| Tailwind CSS Code Smells | 0 | 2 | 3 |
| **Total** | **7** | **11** | **10** |
