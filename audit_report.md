# AzurEscape — Technical Audit Report

**Date:** 2026-06-05  
**Codebase:** `Riviera-Trails/` — React 18 SPA (Create React App + Tailwind CSS + React Router v6)  
**Scope:** All source files in `src/`, `public/index.html`, `package.json`, `.env`

---

## Executive Summary

The codebase is functional and ships a clean UI with a good SEO foundation. The most pressing issues are **accessibility gaps that block screen-reader users**, **cascading re-render problems** from an unoptimised language context, and a **DRY deficit** (phone number hardcoded in 10+ places, 50+ inline bilingual ternaries). No critical security vulnerabilities were found.

| Priority | Issues Found |
|----------|-------------|
| 🔴 High   | 13          |
| 🟡 Medium | 15          |
| 🟢 Low    | 9           |
| **Total** | **37**      |

---

## 🔴 HIGH PRIORITY

### H-01 — No `<main>` landmark element
**Category:** Accessibility  
**Files:** `src/App.js`, all page components  

The page content is wrapped in `<div className="App">` with no `<main>` element. Screen-reader users cannot jump directly to page content; navigation landmarks (`<nav>`, `<main>`, `<footer>`) are required by WCAG 2.1 SC 1.3.1.

**Fix:** Wrap the `<Routes>` output in `<main id="main-content">` inside `App.js`.

```jsx
// App.js
<div className="App">
  <Navbar />
  <main id="main-content">
    <Routes>…</Routes>
  </main>
  <Footer />
</div>
```

---

### H-02 — No skip-navigation link
**Category:** Accessibility  
**Files:** `src/App.js`  

Keyboard users must tab through the entire Navbar on every page. WCAG 2.4.1 requires a mechanism to bypass repeated blocks.

**Fix:** Add a visually hidden skip link as the very first element in `App.js`:

```jsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] focus:bg-white focus:px-4 focus:py-2 focus:rounded"
>
  Skip to main content
</a>
```

---

### H-03 — Icon-only buttons missing `aria-label`
**Category:** Accessibility  
**Files:** `src/components/Navbar.js` (line ~222), `src/components/Footer.js` (social icon links)  

The mobile menu toggle renders only `<FiMenu>` / `<FiX>` with no accessible name. Footer social links are icon-only anchors. Screen readers announce these as empty or unlabelled controls.

**Fix — Navbar mobile toggle:**
```jsx
<button
  aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
  aria-expanded={isOpen}
  aria-controls="mobile-menu"
  onClick={() => setIsOpen(!isOpen)}
>
```

**Fix — Footer social links:** add `aria-label="Follow us on Instagram"`, etc.

---

### H-04 — `<html lang>` is static; French content is never announced correctly
**Category:** Accessibility  
**Files:** `public/index.html` (line 2), `src/context/LanguageContext.js`  

`<html lang="en">` never changes when the user switches to French. Screen readers use this attribute to select the correct pronunciation engine and voice.

**Fix:** Update `document.documentElement.lang` inside `LanguageContext.js` when language changes:

```js
useEffect(() => {
  document.documentElement.lang = language; // "en" or "fr"
}, [language]);
```

---

### H-05 — LanguageContext causes full-tree re-renders on language switch
**Category:** Performance  
**Files:** `src/context/LanguageContext.js`  

Every component that calls `useLanguage()` re-renders when the context value changes. Because the context value object is recreated on each render, this cascades to `Hero`, `EnhancedTours`, `Navbar`, `Footer`, and more simultaneously.

**Fix:** Memoize the context value and stabilise the `t()` function:

```js
const value = useMemo(() => ({ language, setLanguage, t }), [language]);
// and inside the context: useCallback for t()
```

For a deeper fix, split into two contexts — `LanguageStateContext` (language string) and `TranslationContext` (the `t()` function) — so components that only need `t()` don't re-render when `language` changes.

---

### H-06 — No code-splitting; entire app ships in one bundle
**Category:** Performance  
**Files:** `src/App.js` (lines 11–16)  

`Testimonials`, `FAQ`, `PrivacyPolicy`, `PrivacyPolicyFr`, and `EnhancedTourDetails` are all eagerly imported. A user on the home page downloads code for every other route.

**Fix:** Lazy-load all route components:

```jsx
const EnhancedTourDetails = React.lazy(() => import('./components/EnhancedTourDetails'));
const Testimonials        = React.lazy(() => import('./pages/Testimonials'));
const FAQ                 = React.lazy(() => import('./pages/FAQ'));
// …etc

// Wrap Routes in Suspense:
<Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin …" /></div>}>
  <Routes>…</Routes>
</Suspense>
```

---

### H-07 — Tour card list causes O(n) re-renders on every hover
**Category:** Performance  
**Files:** `src/components/EnhancedTours.js` (lines ~69–252)  

`hoveredTour` state lives in the parent. When any card is hovered, every sibling card re-renders because they are inlined inside `.map()` without memoisation.

**Fix:** Extract an inline `TourCard` component and wrap it with `React.memo`. Move the hover handler to `useCallback`:

```jsx
const handleHover  = useCallback((id) => setHoveredTour(id), []);
const handleUnhover = useCallback(() => setHoveredTour(null), []);

const TourCard = React.memo(({ tour, isHovered, onHover, onUnhover, … }) => { … });
```

---

### H-08 — Navbar runs expensive DOM operations on every scroll tick
**Category:** Performance  
**Files:** `src/components/Navbar.js` (lines ~52–98)  

`getComputedStyle()` and `getBoundingClientRect()` are called inside the scroll listener without throttling. These force synchronous layout and can cause 60+ executions per second.

**Fix:** Wrap the scroll handler body in a `requestAnimationFrame` call or use a throttle utility (e.g. `lodash.throttle` at 100 ms):

```js
let ticking = false;
const handleScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => { detectBackground(); ticking = false; });
    ticking = true;
  }
};
```

---

### H-09 — WhatsApp phone number hardcoded in 10+ files
**Category:** Maintainability / DRY  
**Files:** `Navbar.js`, `Hero.js`, `EnhancedTours.js`, `EnhancedTourDetails.js`, `Contact.js`, `Footer.js`, `AboutPreviewSection.js`, `WhatsAppWidget.js`, `FAQ.js`, `Testimonials.js`, `SEOHead.js`, `StructuredData.js`  

The phone number `33758781678` appears at least 12 times in source. Any change (new number, different country prefix) requires finding and editing every file.

**Fix:** Create `src/config/constants.js`:

```js
export const PHONE_NUMBER  = "33758781678";
export const EMAIL_ADDRESS = "info@azurescape.fr";
export const SITE_URL      = "https://www.azurescape.fr";

export const getWhatsAppUrl = (message = "") =>
  `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
```

Then import from this single file everywhere.

---

### H-10 — 50+ inline bilingual ternaries instead of a translation system
**Category:** Maintainability / DRY  
**Files:** `EnhancedTours.js`, `EnhancedTourDetails.js`, `FAQ.js`, `Navbar.js`, `CookieConsent.js`, and others  

Pattern repeated throughout:
```jsx
{language === "en" ? "Discover Our Tours" : "Découvrez Nos Circuits"}
```

This scatters translation strings across the codebase, makes it impossible to add a third language without touching every file, and prevents external translation tooling.

**Fix:** The project already has `src/data/translations.js`. Consolidate ALL user-facing strings there and use only the existing `t("key")` pattern from `useLanguage()`. Alternatively, integrate `react-i18next` (industry standard).

---

### H-11 — `EnhancedTourDetails.js` is 440+ lines; violates Single Responsibility
**Category:** Maintainability / Architecture  
**Files:** `src/components/EnhancedTourDetails.js`  

The component handles data lookup, group-size state, price calculation, WhatsApp message construction, and renders six distinct UI sections. It is untestable as a unit.

**Fix:** Extract sub-components:
- `TourHeroSection` — image, title overlay, back button, badges
- `TourInfoGrid` — duration, departure, frequency, price cards
- `TourStops` — stops list
- `TourHighlights` — highlights list
- `BookingSidebar` — group size selector, total price, Book Now CTA
- Custom hook `useTourBooking(tour)` — encapsulates groupSize, totalPrice, handleBookNow

---

### H-12 — No PropTypes or TypeScript; no type safety
**Category:** Maintainability  
**Files:** All components  

No component validates its props. Passing the wrong shape (e.g. a missing `pricePerPax` on a tour object) produces silent runtime errors rather than development-time warnings.

**Fix (short-term):** Add `prop-types` declarations to every component, especially those with complex data shapes (`SEOHead`, `StructuredDataScript`, `EnhancedTourDetails`, `EnhancedTours`).  
**Fix (long-term):** Migrate to TypeScript. The data models in `newToursData.js` are stable enough to type immediately.

---

### H-13 — No Error Boundary; a bad slug crashes the whole app
**Category:** Architecture / Resilience  
**Files:** `src/App.js`  

If `EnhancedTourDetails` receives an unrecognised slug and `navigate("/")` fails (e.g. a render error before `useEffect` fires), the entire React tree unmounts with a white screen.

**Fix:** Create `src/components/ErrorBoundary.jsx` and wrap `<Routes>` in it:

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError)
      return <div className="min-h-screen flex items-center justify-center">Something went wrong. <a href="/">Go home</a></div>;
    return this.props.children;
  }
}
```

---

## 🟡 MEDIUM PRIORITY

### M-01 — Price calculation in `useEffect` should be `useMemo`
**Category:** Performance  
**Files:** `src/components/EnhancedTourDetails.js` (lines ~37–46)  

`totalPrice` is derived state (it is always a function of `tour.pricePerPax` and `groupSize`). Storing it in `useState` and recalculating it in `useEffect` adds an extra render cycle.

**Fix:** Replace the second `useEffect` + `setTotalPrice` with:
```js
const totalPrice = useMemo(() => {
  if (!tour) return 0;
  return tour.isPrivate ? tour.pricePerPax : calculateGroupPrice(tour.pricePerPax, groupSize);
}, [tour, groupSize]);
```

---

### M-02 — `WhatsAppWidget` scroll listener fires without throttle
**Category:** Performance  
**Files:** `src/components/WhatsAppWidget.js` (lines ~10–22)  

Calculates footer position and calls `setState` on every scroll event — potentially 60 times per second.

**Fix:** Use `IntersectionObserver` to watch the footer element instead of manually computing positions on scroll.

---

### M-03 — Testimonials grid images recreated on every render
**Category:** Performance  
**Files:** `src/pages/Testimonials.js` (lines ~96–104)  

`gridImages` array is rebuilt (with random dimensions) on every render. The `react-visual-grid` library re-initialises its layout engine each time.

**Fix:**
```js
const gridImages = useMemo(() => testimonialsData.map((t) => ({
  src: t.image, alt: t.name,
  width: 400, height: 300, // fixed, not random
})), []); // stable reference
```

---

### M-04 — Magic numbers not extracted to constants
**Category:** Maintainability  
**Files:** `src/components/EnhancedTourDetails.js` (line ~70), `src/data/newToursData.js` (line ~388)  

```js
if (numPeople >= 4) { return pricePerPax * numPeople * 0.9; }
```

`4` (group threshold) and `0.9` (discount multiplier) are magic numbers that appear in two separate files.

**Fix:**
```js
// src/config/constants.js
export const GROUP_DISCOUNT_THRESHOLD = 4;
export const GROUP_DISCOUNT_MULTIPLIER = 0.9;
```

---

### M-05 — Missing 404/error state in `EnhancedTourDetails`
**Category:** Architecture / UX  
**Files:** `src/components/EnhancedTourDetails.js` (lines ~61–67)  

`getTourBySlug` returns `undefined` for unknown slugs and the component calls `navigate("/")` — but if that fails or is slow, users see an infinite spinner with no explanation.

**Fix:** Add an explicit error state:
```jsx
const [error, setError] = useState(false);
// in useEffect:
if (!tourData) { setError(true); return; }
// in render:
if (error) return <div>Tour not found. <Link to="/">Browse all tours</Link></div>;
```

---

### M-06 — Footer `scrollToSection` has a race-condition `setTimeout`
**Category:** Architecture  
**Files:** `src/components/Footer.js` (lines ~17–29)  

After navigating to `/`, the footer waits a hardcoded 100 ms then attempts to scroll. On slow devices the page may not have rendered yet; on fast ones this adds an unnecessary delay.

**Fix:** Replace with a `useEffect` that watches `location.pathname`:
```js
const location = useLocation();
useEffect(() => {
  if (location.state?.scrollTo) {
    document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: "smooth" });
  }
}, [location]);
// When navigating: navigate("/", { state: { scrollTo: "tours" } });
```

---

### M-07 — Colour contrast: `text-gray-400` / `text-gray-500` on white backgrounds
**Category:** Accessibility  
**Files:** `src/components/EnhancedTourDetails.js`, `src/components/Contact.js`, `src/components/CookieConsent.js`  

Tailwind's `gray-400` (#9ca3af) on white (#fff) gives a contrast ratio of ~2.85:1, well below the WCAG AA minimum of 4.5:1 for normal text.

**Fix:** Replace `text-gray-400` with `text-gray-600` (#4b5563, ratio ~5.74:1) for all body-level text. Reserve `gray-400` for decorative or large-text elements only.

---

### M-08 — Form labels not translated in `EnhancedTourDetails`
**Category:** Accessibility + Maintainability  
**Files:** `src/components/EnhancedTourDetails.js` (lines ~309–332)  

"Number of People", "Select", and group-size button labels are hardcoded in English while the rest of the page can render in French.

**Fix:** Run all labels through the `t()` function or inline ternaries until a full i18n solution is in place.

---

### M-09 — Google Analytics and Site Verification placeholders ship to production
**Category:** Maintainability / SEO  
**Files:** `public/index.html` (lines 32–53)  

`GA_MEASUREMENT_ID` and `YOUR_VERIFICATION_CODE_HERE` are placeholder strings. The GA script still loads and fires a network request (wasted bandwidth), and Search Console verification never succeeds.

**Fix:** Either populate via environment variables before build, or remove the blocks entirely until real IDs are ready:
```html
<!-- index.html — replace at build time or remove -->
<script async src="https://www.googletagmanager.com/gtag/js?id=%REACT_APP_GA_ID%"></script>
```

---

### M-10 — `react-visual-grid` inline theme object causes layout re-init
**Category:** Performance  
**Files:** `src/pages/Testimonials.js`  

The theme/config object is created inline in JSX, so its reference changes every render, causing the grid to rebuild its layout.

**Fix:** Define the theme object outside the component (module scope) or with `useMemo`.

---

### M-11 — Carousel/testimonial navigation lacks focus management
**Category:** Accessibility  
**Files:** `src/pages/Testimonials.js` (lines ~320–333)  

Clicking a dot navigation button updates visible content but leaves keyboard focus on the dot. The newly visible testimonial is never announced or focused.

**Fix:** After updating `activeTestimonial`, move focus to the testimonial container:
```js
const testimonialRef = useRef(null);
const handleDotClick = (index) => {
  setActiveTestimonial(index);
  testimonialRef.current?.focus();
};
// On the container: tabIndex={-1} ref={testimonialRef}
```

---

### M-12 — Potential unused dependencies in `package.json`
**Category:** Performance / Maintainability  
**Files:** `package.json`  

| Package | Concern |
|---------|---------|
| `@paypal/react-paypal-js` | `.env` has a PayPal placeholder key but no PayPal component was found rendered in source |
| `@emailjs/browser` | `.env` has EmailJS placeholder keys; verify this is actually wired into the Contact form |
| `react-visual-grid` | Used only in `Testimonials.js`; could be lazy-loaded |

**Fix:** Run `npx depcheck` to confirm which are genuinely unused, then remove or lazy-import them.

---

### M-13 — `StructuredData.js` uses `dangerouslySetInnerHTML` for JSON-LD
**Category:** Security (low risk) / Maintainability  
**Files:** `src/components/StructuredData.js` (lines ~100–105)  

While `JSON.stringify()` of a literal object is safe, the pattern is flagged by static analysis tools and can become dangerous if `data` ever includes user-supplied content.

**Fix:** Continue using the current approach **but** add an explicit check ensuring no string values in `data` come from user input. Document in a comment why this is safe. For future-proofing, consider switching to `react-helmet-async` which handles JSON-LD without raw HTML injection.

---

### M-14 — Testimonial data partially duplicated across files
**Category:** Maintainability / DRY  
**Files:** `src/data/testimonialsData.js`, `src/pages/Testimonials.js` (lines ~14–112)  

The base testimonials are imported from `testimonialsData.js`, but `Testimonials.js` defines additional entries inline as `extendedTestimonials`. If the card structure changes, both locations need updating.

**Fix:** Move all testimonial entries into `testimonialsData.js`. The page component should only render, not define data.

---

### M-15 — Tour badge markup duplicated across two components
**Category:** Maintainability / DRY  
**Files:** `src/components/EnhancedTours.js` (lines ~80–102), `src/components/EnhancedTourDetails.js` (lines ~100–118)  

The "Top Pick", "Popular 🔥", and "Private Tour" badges are styled and rendered independently in both files with near-identical JSX.

**Fix:** Extract a shared `<TourBadges tour={tour} />` component used in both places.

---

## 🟢 LOW PRIORITY

### L-01 — Local images missing `loading="lazy"` and `srcset`
**Category:** Performance  
**Files:** `src/components/AboutPreviewSection.js` (lines ~128–148)  

`w1.jpeg`, `w2.jpeg`, `w3.jpeg`, `w4.jpeg` are loaded eagerly with no size hints. These images are well below the fold.

**Fix:** Add `loading="lazy"` to each `<img>` and supply `srcset` with at least 2× and 1× variants.

---

### L-02 — `animate-pulse` is not GPU-composited
**Category:** Performance  
**Files:** `src/components/EnhancedTours.js` (line ~89)  

Tailwind's `animate-pulse` animates `opacity`, which triggers a repaint on every frame on some browsers. On lower-end mobile devices this contributes to jank.

**Fix:** Replace with a `scale`-based pulse or use `will-change: opacity` on the specific element.

---

### L-03 — Hardcoded image paths not configurable
**Category:** Maintainability  
**Files:** `src/components/AboutPreviewSection.js` (lines ~128–148)  

`/images/ppl/w1.jpeg` etc. are hardcoded string literals. Renaming or reorganising images requires a code change.

**Fix:** Move the image list to a data file or to `translations.js` so it can be managed outside the component.

---

### L-04 — No `useCallback` on `EnhancedTours` event handlers
**Category:** Performance  
**Files:** `src/components/EnhancedTours.js` (lines ~34–45)  

`handleBookNow` and `handleViewDetails` are recreated on every render. Once `TourCard` is wrapped in `React.memo` (H-07), these unstable references will break memoisation.

**Fix:** Wrap with `useCallback` before or at the same time as extracting the `TourCard` component.

---

### L-05 — No `useTransition` for route navigation pending state
**Category:** Performance / UX  
**Files:** `src/App.js`, `src/components/Navbar.js`  

React 18's `useTransition` allows marking route changes as non-urgent, keeping the current page interactive while the next page renders. Currently there is no visual feedback during navigation.

**Fix:**
```js
const [isPending, startTransition] = useTransition();
const navigate = useNavigate();
const handleNavigation = (path) => startTransition(() => navigate(path));
```

---

### L-06 — `<html lang>` duplication: `index.html` and `SEOHead.js` diverge
**Category:** Maintainability  
**Files:** `public/index.html`, `src/components/SEOHead.js`  

`index.html` sets `og:locale` to `en_US` statically. `SEOHead.js` also sets `og:locale` as `en_US` statically. When language is French, neither updates the locale in the OG tags.

**Fix:** In `SEOHead.js`, make `og:locale` dynamic:
```js
updateMetaTag("og:locale", language === "fr" ? "fr_FR" : "en_US", true);
```

---

### L-07 — No comments on non-obvious algorithms
**Category:** Maintainability  
**Files:** `src/components/Navbar.js` (lines ~62–84), `src/data/newToursData.js` (line ~386)  

The luminance brightness formula `(r*299 + g*587 + b*114) / 1000` and the group-discount calculation have no explanation. A new contributor will not know these are intentional choices.

**Fix:** Add one-line comments explaining the formula origin (ITU-R BT.601 luma) and the discount business rule.

---

### L-08 — Business contact data not centralised in `.env`
**Category:** Maintainability  
**Files:** Multiple  

Phone number, email, and site URL appear in source. While not secrets, they are business configuration that changes independently of code.

**Fix:** Add to `.env`:
```
REACT_APP_PHONE=33758781678
REACT_APP_EMAIL=info@azurescape.fr
REACT_APP_SITE_URL=https://www.azurescape.fr
```

---

### L-09 — No service worker / offline fallback
**Category:** Performance / UX  

The `manifest.json` declares a PWA-capable app, but there is no service worker. Returning visitors on flaky connections get a blank screen.

**Fix:** Use `workbox-webpack-plugin` (bundled with CRA via `cra-template-pwa`) to generate a service worker that caches the app shell and static assets.

---

## Appendix — What Is Already Done Well ✅

| Area | Status |
|------|--------|
| All `target="_blank"` links have `rel="noopener noreferrer"` | ✅ |
| No `eval()` or raw `innerHTML` (outside JSON-LD) | ✅ |
| `.env` uses placeholder values, no real secrets committed | ✅ |
| Vercel Speed Insights integrated | ✅ |
| Passive scroll listeners (`{ passive: true }`) throughout | ✅ |
| Tour cards have `alt={tour.title}` on images | ✅ |
| All external tour images loaded over HTTPS | ✅ |
| Cookie consent implemented | ✅ |
| Canonical + hreflang tags in place | ✅ |
| JSON-LD schemas for WebSite, TravelAgency, TouristTrip | ✅ |
| Language context pattern is sound; just needs memoisation | ✅ |
| Consistent PascalCase component naming | ✅ |
| `useEffect` cleanup functions present where needed (Navbar) | ✅ |

---

## Recommended Fix Order

```
Sprint 1 — Ship-blockers (1–2 days)
  H-01  Add <main> element
  H-02  Add skip-navigation link
  H-03  aria-label on icon buttons
  H-04  Dynamic document.lang
  H-09  Extract constants.js (phone, email, URL)
  M-09  Remove GA / verification placeholders (or wire up real IDs)

Sprint 2 — Performance (2–3 days)
  H-05  Memoize LanguageContext value
  H-06  React.lazy() code-splitting for all routes
  H-07  React.memo TourCard + useCallback handlers
  H-08  rAF-throttle Navbar scroll listener
  M-01  Derived totalPrice → useMemo
  M-02  WhatsAppWidget → IntersectionObserver
  M-03  Stable gridImages with useMemo

Sprint 3 — Architecture (2–3 days)
  H-11  Decompose EnhancedTourDetails into sub-components
  H-13  Add ErrorBoundary
  M-05  Add 404/error state in tour detail
  M-06  Fix Footer scroll race condition
  M-14  Consolidate testimonials data
  M-15  Extract TourBadges component

Sprint 4 — Type safety & i18n (ongoing)
  H-10  Migrate inline ternaries to translations.js / react-i18next
  H-12  Add PropTypes (or begin TypeScript migration)
  M-08  Translate remaining hardcoded English strings

Sprint 5 — Polish (as capacity allows)
  M-07  Fix gray-400 contrast issues
  M-11  Testimonial focus management
  L-01  lazy + srcset on local images
  L-06  Dynamic og:locale
  L-09  Service worker
```
