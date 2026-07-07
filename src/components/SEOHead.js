import { useEffect } from "react";
import { PHONE_NUMBER, EMAIL_ADDRESS, SITE_URL } from "../config/constants";
import { useLanguage } from "../context/LanguageContext";

// Canonical URLs must always point at the production host (never preview
// deploys) and never carry query strings or fragments.
const buildCanonical = () => `${SITE_URL}${window.location.pathname}`;

// Social crawlers require absolute image URLs; keep already-absolute ones.
const absolutize = (url) =>
  url.startsWith("http") ? url : `${SITE_URL}${url}`;

// Current path with any /en or /fr prefix stripped, for hreflang variants.
const basePath = () =>
  window.location.pathname.replace(/^\/(en|fr)(\/|$)/, "/");

const SEOHead = ({
  title = "Azur Escape - French Riviera Tours | Expert Local Guide",
  description = "Discover the French Riviera with expert local guide. Small group tours from Nice to Menton. Book your authentic Côte d'Azur experience today. Licensed guide, instant booking.",
  keywords = "French Riviera tours, Nice tours, Monaco tours, Côte d'Azur guide, Riviera tours, Mediterranean tours, local guide France, small group tours",
  canonical = null,
  ogImage = "/images/tours/img-nice-menton.png",
  structuredData = null,
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    const finalCanonical = canonical || buildCanonical();
    const finalImage = absolutize(ogImage);

    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("robots", "index, follow");
    updateMetaTag("author", "Azur Escape");
    updateMetaTag("viewport", "width=device-width, initial-scale=1.0");

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:url", finalCanonical, true);
    updateMetaTag("og:image", finalImage, true);
    updateMetaTag("og:site_name", "Azur Escape", true);
    const ogLocale = language === "fr" ? "fr_FR" : "en_US";
    const ogLocaleAlt = language === "fr" ? "en_US" : "fr_FR";
    updateMetaTag("og:locale", ogLocale, true);
    updateMetaTag("og:locale:alternate", ogLocaleAlt, true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", finalImage);
    updateMetaTag("twitter:site", "@azurescape");

    // Additional meta tags
    updateMetaTag("geo.region", "FR-06");
    updateMetaTag("geo.placename", "Nice, France");
    updateMetaTag("geo.position", "43.7102;7.2620");
    updateMetaTag("ICBM", "43.7102, 7.2620");

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", finalCanonical);

    // Keep hreflang alternates in sync with the current page (the static
    // tags in index.html only describe the homepage)
    const updateHreflang = (hreflang, href) => {
      let link = document.querySelector(
        `link[rel="alternate"][hreflang="${hreflang}"]`
      );
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "alternate");
        link.setAttribute("hreflang", hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };
    const path = basePath();
    updateHreflang("en", `${SITE_URL}/en${path === "/" ? "/" : path}`);
    updateHreflang("fr", `${SITE_URL}/fr${path === "/" ? "/" : path}`);
    updateHreflang("x-default", `${SITE_URL}${path}`);

    // Add structured data if provided; remove any left over from the
    // previous page so stale JSON-LD doesn't describe the wrong content
    const existingScript = document.querySelector("#structured-data");
    if (structuredData) {
      let structuredDataScript = existingScript;
      if (!structuredDataScript) {
        structuredDataScript = document.createElement("script");
        structuredDataScript.id = "structured-data";
        structuredDataScript.type = "application/ld+json";
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(structuredData);
    } else if (existingScript) {
      existingScript.remove();
    }
  }, [title, description, keywords, canonical, ogImage, structuredData, language]);

  return null; // This component doesn't render anything
};

// Predefined SEO configs for different pages
export const seoConfigs = {
  home: {
    title: "Azur Escape - French Riviera Tours | Expert Local Guide",
    description:
      "Discover the French Riviera with expert local guide. Small group tours from Nice to Menton. Book your authentic Côte d'Azur experience today. Licensed guide, instant booking.",
    keywords:
      "French Riviera tours, Nice tours, Monaco tours, Côte d'Azur guide, Riviera tours, Mediterranean tours, local guide France, small group tours",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "TourOperator",
      name: "Azur Escape",
      description:
        "Expert local guide offering small group tours of the French Riviera",
      url: "https://www.azurescape.fr",
      telephone: `+${PHONE_NUMBER}`,
      email: EMAIL_ADDRESS,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nice",
        addressRegion: "Côte d'Azur",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "43.7102",
        longitude: "7.2620",
      },
      serviceArea: {
        "@type": "Place",
        name: "French Riviera",
      },
      priceRange: "€100 – €150",
      languages: ["French", "English", "Arabic"],
    },
  },

  tourDetails: (tour) => ({
    title: `${tour.title} - French Riviera Tours | Azur Escape`,
    description: `${tour.description.substring(0, 150)}... Book this ${
      tour.duration
    } French Riviera tour from €${
      tour.pricePerPax
    }/person. Expert local guide, small groups.`,
    keywords: `${tour.title}, French Riviera tours, Monaco tour, Nice tour, Menton tour`,
    ogImage: tour.image,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      name: tour.title,
      description: tour.description,
      provider: {
        "@type": "TourOperator",
        name: "Azur Escape",
        telephone: `+${PHONE_NUMBER}`,
      },
      duration: tour.duration,
      offers: {
        "@type": "Offer",
        price: String(tour.pricePerPax),
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
      touristType: "Small Groups",
      maximumAttendeeCapacity: 8,
    },
  }),

  contact: {
    title: "Contact Azur Escape - Book Your French Riviera Tour",
    description:
      "Contact our expert local guide to book your French Riviera tour. WhatsApp, email, or phone booking available. Quick responses and instant confirmation.",
    keywords:
      "contact Azur Escape, book French Riviera tour, WhatsApp booking, tour guide contact",
  },

  about: {
    title: "About Azur Escape - Your Local French Riviera Expert",
    description:
      "Meet your local French Riviera guide. Born in Nice, expert in history and culture. Small group tours, personalized experiences, licensed and insured.",
    keywords:
      "French Riviera guide, local tour guide Nice, Azur Escape about, licensed tour guide",
  },
};

export default SEOHead;
