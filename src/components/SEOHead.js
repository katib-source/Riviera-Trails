import { useEffect } from "react";

const SEOHead = ({
  title = "Azur Escape - French Riviera Tours | Expert Local Guide",
  description = "Discover the French Riviera with expert local guide. Small group tours from Nice to Menton. Book your authentic Côte d'Azur experience today. Licensed guide, instant booking.",
  keywords = "French Riviera tours, Nice tours, Monaco tours, Côte d'Azur guide, Riviera tours, Mediterranean tours, local guide France, small group tours",
  canonical = window.location.href,
  ogImage = "/images/tours/og-image.jpg",
  structuredData = null,
}) => {
  useEffect(() => {
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
    updateMetaTag("og:url", canonical, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:site_name", "Azur Escape", true);
    updateMetaTag("og:locale", "en_US", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);
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
    canonicalLink.setAttribute("href", canonical);

    // Add structured data if provided
    if (structuredData) {
      let structuredDataScript = document.querySelector("#structured-data");
      if (!structuredDataScript) {
        structuredDataScript = document.createElement("script");
        structuredDataScript.id = "structured-data";
        structuredDataScript.type = "application/ld+json";
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, canonical, ogImage, structuredData]);

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
      telephone: "+33758781678",
      email: "info@azurescape.fr",
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
      priceRange: "€120",
      languages: ["French", "English", "Arabic"],
    },
  },

  tourDetails: (tour) => ({
    title: `${tour.title} - French Riviera Tours | Azur Escape`,
    description: `${tour.description.substring(0, 150)}... Book this ${
      tour.duration
    } French Riviera tour for ${
      tour.price
    } per person. Expert local guide, small groups.`,
    keywords: `${tour.title}, French Riviera tours, ${tour.city} tour, Monaco tour, Nice tour, Menton tour`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      name: tour.title,
      description: tour.description,
      provider: {
        "@type": "TourOperator",
        name: "Azur Escape",
        telephone: "+33758781678",
      },
      duration: tour.duration,
      offers: {
        "@type": "Offer",
        price: tour.price.replace("€", ""),
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
