# AzurEscape — Master Execution Plan

## Objective 1 — Price Updates

Update `src/data/newToursData.js` — both `en` and `fr` arrays.

| Tour | Old `pricePerPax` | New `pricePerPax` | Status |
|------|-------------------|-------------------|--------|
| Eze – Monaco – Monte-Carlo (id 2) | €85 | **€100** | ✅ Done |
| Cannes – Antibes – St-Paul de Vence (id 3) | €100 | **€130** | ✅ Done |
| Italian Riviera & Monaco (id 4) | €145 | **€130** | ✅ Done |
| Saint-Tropez & Port Grimaud (id 5) | €145 | **€150** | ✅ Done |

Tours NOT changed: Explore The Riviera (€115), Private Half Day (€350), Private Full Day (€600).

Secondary price references updated:
- `src/components/SEOHead.js` `priceRange` → `"€100 – €150"` ✅
- `src/components/SEOHead.js` `tour.price` bug → `tour.pricePerPax` ✅
- `src/components/StructuredData.js` hardcoded `"110"` → dynamic ✅

---

## Objective 2 — SEO Enhancements

### 2a. Dynamic title / meta tags
- [x] `SEOHead.js` dynamically sets title, description, OG, Twitter per page
- [x] Bug fix: `tour.price` → `tour.pricePerPax` in `SEOHead.js` tourDetails config
- [x] `SEOHead` added to `EnhancedTourDetails.js` for per-tour metadata
- [x] `SEOHead` added to `FAQ.js` with appropriate config
- [x] `SEOHead` added to `Testimonials.js` with appropriate config

### 2b. JSON-LD structured data
- [x] `WebSite`, `TravelAgency`, `TouristTrip` schemas exist
- [x] `LocalBusiness` schema added to `StructuredData.js` (organization case extended)
- [x] `TouristAttraction` schema added as new case `"attraction"`
- [x] Dynamic price in `tour` case fixed

### 2c. Open Graph tags
- [x] `SEOHead.js` sets full OG + Twitter per page
- [x] `index.html` fallback `og:site_name` added
- [x] `index.html` fallback `twitter:image` added
- [x] `index.html` `<title>` expanded to full site title
- [x] `og:image` updated to existing image (`img-nice-menton.png`)
  - **Note for owner**: Replace with a proper 1200×630 JPG at `public/images/tours/og-image.jpg` for best social sharing results

### 2d. Semantic HTML — H1 hierarchy
- [x] `Hero.js` — one H1 (home page only)
- [x] `EnhancedTourDetails.js` — one H1 (tour title)
- [x] `FAQ.js` — one H1
- [x] `Testimonials.js` — one H1
- [x] Tour cards use `<h3>` (correct, no conflicts)

### 2e. Image alt tags
- [x] Tour card images: `alt={tour.title}` ✓
- [x] Tour hero image: `alt={tour.title}` ✓
- [x] About section images: descriptive alt text ✓
- [x] Navbar: text button (no `<img>` tag, no alt needed)
- [x] Footer: audited — no bare `<img>` tags
- [x] Hero.js: background image via CSS, no `<img>` tag audit needed

---

## Verification Checklist

1. `npm start` → open `http://localhost:3000`
2. Tour cards show updated prices (€100, €130, €130, €150)
3. Tour detail pages show correct price + updated `<title>` in browser tab
4. DevTools `<head>` shows correct `og:title`, `og:description` per tour
5. `application/ld+json` scripts present with correct prices
6. `document.querySelectorAll('h1').length === 1` on every page
7. `document.querySelectorAll('img:not([alt])').length === 0`
8. Google Rich Results Test passes for tour pages
