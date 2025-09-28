import React from "react";

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
            "https://www.instagram.com/azur_escape",
            "https://www.facebook.com/azur.escape",
          ],
        };

      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Azur Escape",
          description: "Premium guided tours of the French Riviera",
          url: "https://www.azurescape.fr",
          telephone: "+33605985410",
          address: {
            "@type": "PostalAddress",
            addressRegion: "French Riviera",
            addressCountry: "France",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 43.7102,
            longitude: 7.262,
          },
          areaServed: [
            {
              "@type": "City",
              name: "Nice",
            },
            {
              "@type": "City",
              name: "Monaco",
            },
            {
              "@type": "City",
              name: "Menton",
            },
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
            price: "110",
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
