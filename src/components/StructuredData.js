import React from "react";
import { PHONE_NUMBER } from "../config/constants";

export const StructuredDataScript = ({ type = "website", data = {} }) => {
  const getStructuredData = () => {
    switch (type) {
      case "website":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Azur Escape",
          description:
            "Premium guided tours of the French Riviera from Nice to Menton",
          url: "https://www.azurescape.fr",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://www.azurescape.fr/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
          sameAs: [
            "https://www.instagram.com/azurescape",
            "https://www.facebook.com/azurescape",
          ],
        };

      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": ["TravelAgency", "LocalBusiness"],
          name: "Azur Escape",
          description: "Premium guided tours of the French Riviera",
          url: "https://www.azurescape.fr",
          telephone: `+${PHONE_NUMBER}`,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nice",
            addressRegion: "Provence-Alpes-Côte d'Azur",
            addressCountry: "FR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 43.7102,
            longitude: 7.262,
          },
          hasMap: "https://maps.google.com/?q=Nice,France",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "08:00",
              closes: "19:00",
            },
          ],
          currenciesAccepted: "EUR",
          paymentAccepted: "Cash, Credit Card, PayPal",
          priceRange: "€100 – €150",
          areaServed: [
            { "@type": "City", name: "Nice" },
            { "@type": "City", name: "Monaco" },
            { "@type": "City", name: "Menton" },
            { "@type": "City", name: "Cannes" },
            { "@type": "City", name: "Saint-Tropez" },
          ],
          serviceType: "Guided Tours",
        };

      case "tour":
        return {
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: data.title || "French Riviera Tour",
          description: data.description || "Guided tour of the French Riviera",
          provider: {
            "@type": "TravelAgency",
            name: "Azur Escape",
            url: "https://www.azurescape.fr",
          },
          touristType: "Leisure",
          duration: data.duration || "2-4 hours",
          offers: {
            "@type": "Offer",
            price: String(data.pricePerPax || 100),
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
          },
          itinerary: {
            "@type": "ItemList",
            itemListElement:
              data.highlights?.map((highlight, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: highlight,
              })) || [],
          },
        };

      case "attraction":
        return {
          "@context": "https://schema.org",
          "@type": "TouristAttraction",
          name: data.title || "French Riviera Attraction",
          description: data.description || "Tourist attraction on the French Riviera",
          url: `https://www.azurescape.fr/tour/${data.slug || ""}`,
          image: data.image || "",
          touristType: "Leisure",
          geo: {
            "@type": "GeoCoordinates",
            latitude: 43.7102,
            longitude: 7.262,
          },
          isAccessibleForFree: false,
          publicAccess: true,
        };

      default:
        return {};
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  );
};

export default StructuredDataScript;
