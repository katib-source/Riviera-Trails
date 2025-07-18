import React from "react";
import { useLanguage } from "../context/LanguageContext";

const StructuredData = () => {
  const { language } = useLanguage();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Azur Escape - French Riviera Tours",
    description:
      language === "fr"
        ? "Découvrez la Côte d'Azur avec des tours guidés premium de Nice à Menton. Petits groupes, expérience de luxe, guides experts."
        : "Discover the French Riviera with premium guided tours from Nice to Menton. Small groups, luxury experience, expert guides.",
    provider: {
      "@type": "Organization",
      name: "Azur Escape",
      url: "https://www.azurescape.fr",
      logo: "https://www.azurescape.fr/logo192.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+33-6-05-98-54-10",
        contactType: "Customer Service",
        availableLanguage: ["French", "English"],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nice",
        addressRegion: "Alpes-Maritimes",
        addressCountry: "FR",
      },
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "85",
      lowPrice: "85",
      highPrice: "270",
      availability: "https://schema.org/InStock",
    },
    itinerary: [
      {
        "@type": "Place",
        name: "Nice",
        description: "Promenade des Anglais and colorful old quarter",
      },
      {
        "@type": "Place",
        name: "Monaco",
        description: "Monte-Carlo and famous casino",
      },
      {
        "@type": "Place",
        name: "Èze",
        description: "Medieval village with spectacular views",
      },
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Tourists",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "200",
      bestRating: "5",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
