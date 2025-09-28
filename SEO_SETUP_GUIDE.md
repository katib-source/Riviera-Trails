# Google Analytics & Search Console Setup

## 1. Google Analytics Setup

### Add to public/index.html (before closing </head> tag):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**Steps:**
1. Go to https://analytics.google.com
2. Create account for "Azur Escape"
3. Add property for www.azurescape.fr
4. Replace GA_MEASUREMENT_ID with your actual ID
5. Add the code to index.html

## 2. Google Search Console Setup

### Verify your site ownership:

**Option 1: HTML Meta Tag (Recommended)**
Add this to public/index.html in <head>:
```html
<meta name="google-site-verification" content="VERIFICATION_CODE" />
```

**Option 2: Upload HTML File**
Download verification file from Search Console and add to public/ folder

**Steps:**
1. Go to https://search.google.com/search-console
2. Add property: https://www.azurescape.fr
3. Choose verification method
4. Follow verification steps
5. Submit sitemap: https://www.azurescape.fr/sitemap.xml

## 3. Submit Your Site to Google

### Manual submission:
1. Google Search Console → Sitemaps → Add sitemap → "sitemap.xml"
2. Google Search Console → URL Inspection → Submit specific URLs
3. Request indexing for key pages

### Key URLs to submit:
- https://www.azurescape.fr/
- https://www.azurescape.fr/tour/monaco  
- https://www.azurescape.fr/tour/nice
- https://www.azurescape.fr/tour/eze

## 4. Technical SEO Checklist

- ✅ Sitemap.xml created
- ✅ Robots.txt configured
- ✅ Meta descriptions optimized
- ✅ Structured data added
- ⏳ Google Analytics setup needed
- ⏳ Search Console verification needed
- ⏳ Core Web Vitals optimization
- ⏳ Mobile-first indexing ready

## 5. Content SEO Strategy

### Target Keywords:
- Primary: "French Riviera tours", "Nice to Menton tours"
- Secondary: "Monaco tours", "Eze village tours", "Côte d'Azur guided tours"
- Long-tail: "private guided tours French Riviera", "small group tours Monaco Nice"

### Content Pages to Add:
1. Blog/Articles about each destination
2. FAQ page about tours
3. About the French Riviera guide page
4. Customer testimonials page (already exists)

## Next Actions:
1. Set up Google Analytics
2. Verify Google Search Console  
3. Submit sitemap
4. Monitor search performance
5. Add more content pages