// Enhanced tours data with business-optimized pricing and structure
export const updatedToursData = {
  tours: {
    en: [
      {
        id: 1,
        order: 1,
        title: "Explore The Riviera",
        description:
          "Discover the French Riviera's most iconic destinations from Nice to Menton. Experience the perfect blend of coastal charm, medieval villages, and Mediterranean luxury.",
        duration: "Half Day (4.5h)",
        durationType: "half-day",
        image: "https://od.lk/s/NjlfNDA5NTAwMTFf/webcams.jpg.webp",
        slug: "explore-the-riviera",
        departure: "8:00 H or 14:00 H",
        frequency: "Daily",
        pricePerPax: 115,
        currency: "€",
        popular: true,
        stops: ["Nice", "Villefranche-sur-Mer", "Monaco", "Menton"],
        highlights: [
          "Promenade des Anglais - Famous seafront promenade",
          "Colorful fishing port of Villefranche",
          "Monte-Carlo Casino and luxury shopping",
          "Menton's Italian-influenced architecture",
        ],
      },
      {
        id: 2,
        order: 2,
        title: "Eze – Monaco – Monte-Carlo",
        description:
          "Journey through medieval perched villages and the glamorous principality of Monaco. Experience luxury, history, and breathtaking Mediterranean views.",
        duration: "Half Day (4.5h)",
        durationType: "half-day",
        image:
          "https://od.lk/s/NjlfNDA5NTA0MTVf/TESTE-POUR-VOUS-MONT-BASTIDE-EZE-2-2048x1379.jpg.webp",
        slug: "eze-monaco-monte-carlo",
        departure: "9:00 H or 14:00 H",
        frequency: "Daily",
        pricePerPax: 85,
        currency: "€",
        popular: true,
        stops: ["Eze Village", "Monaco", "Monte-Carlo"],
        highlights: [
          "Medieval village perched 400m above sea",
          "Exotic Garden with panoramic views",
          "Prince's Palace and changing of the guard",
          "Monte-Carlo Casino and Formula 1 circuit",
        ],
      },
      {
        id: 3,
        order: 3,
        title: "Cannes – Antibes – St-Paul de Vence",
        description:
          "Explore the glamorous French Riviera from Cannes' red carpet to medieval hilltop villages. Art, luxury, and Provençal charm in one unforgettable journey.",
        duration: "Half Day (4.5h)",
        durationType: "half-day",
        image:
          "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
        slug: "cannes-antibes-st-paul",
        departure: "9:00 H or 14:00 H",
        frequency: "Daily",
        pricePerPax: 100,
        currency: "€",
        stops: ["Cannes", "Antibes", "St-Paul de Vence"],
        highlights: [
          "Walk the famous Croisette and Palais des Festivals",
          "Picasso Museum in historic Antibes",
          "Medieval St-Paul de Vence art galleries",
          "Provençal market experience",
        ],
      },
      {
        id: 4,
        order: 4,
        title: "Italian Riviera & Monaco",
        description:
          "A full-day adventure crossing borders from the French to Italian Riviera. Discover San Remo's elegance, Menton's lemon gardens, and Monaco's grandeur.",
        duration: "Full Day (9h)",
        durationType: "full-day",
        image:
          "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80",
        slug: "italian-riviera-monaco",
        departure: "9:00 H",
        frequency: "Daily",
        pricePerPax: 145,
        currency: "€",
        popular: true,
        stops: ["San Remo / Ventimiglia", "Menton", "Monaco", "Monte-Carlo"],
        highlights: [
          "Italian market and casino in San Remo",
          "Hanbury Botanical Gardens",
          "Menton's Lemon Festival gardens",
          "Monaco's Prince's Palace and oceanographic museum",
        ],
      },
      {
        id: 5,
        order: 5,
        title: "Saint-Tropez & Port Grimaud",
        description:
          "A full-day journey to the legendary Saint-Tropez. Experience the glamorous lifestyle, stunning beaches, and the 'Little Venice' of Port Grimaud.",
        duration: "Full Day (9h)",
        durationType: "full-day",
        image:
          "https://od.lk/s/NjlfNDA5NTQ3MjRf/st.%2Btropez%2B101%2Bmiddellandse%2Bzee%2Bkust%2Bvakantie%2Bfrankrijk%2Bluxe%2Bvilla%2Bprovence%2Bcote%2Bd%27azur.jpg",
        slug: "saint-tropez-port-grimaud",
        departure: "8:00 H",
        frequency: "Daily",
        pricePerPax: 145,
        currency: "€",
        topPick: true,
        popular: true,
        stops: [
          "Nice",
          "Antibes",
          "Cannes",
          "Cap de l'Esterel",
          "Saint Raphael",
          "Fréjus",
          "Saint-Tropez",
        ],
        highlights: [
          "Port of Saint-Tropez with luxury yachts",
          "Pampelonne Beach - world-renowned beach clubs",
          "Citadel with panoramic views",
          "Port Grimaud - Venice of Provence",
          "Scenic coastal drive along Esterel",
        ],
      },
      {
        id: 6,
        order: 6,
        title: "PRIVATE TOUR - Half Day",
        description:
          "Design your own French Riviera adventure. Flexible timing, custom route, and personalized attention. Your private chauffeur, your itinerary.",
        duration: "Half Day (4.5h)",
        durationType: "half-day",
        isPrivate: true,
        image:
          "https://od.lk/s/NjlfNDI5MzMxNjFf/Ferrari-Cavalcade-6-2930x2198-c-center.jpg",
        slug: "private-tour-half-day",
        departure: "Flexible - 8:00 H",
        frequency: "Daily",
        pricePerPax: 350,
        currency: "€",
        stops: ["Custom route"],
        highlights: [
          "Fully customizable itinerary",
          "Private luxury vehicle",
          "Flexible departure and timing",
          "Expert local guide/driver",
          "Perfect for families or groups",
        ],
      },
      {
        id: 7,
        order: 7,
        title: "PRIVATE TOUR - Full Day",
        description:
          "The ultimate French Riviera experience with complete freedom. Nine hours of luxury exploration tailored exactly to your preferences and pace.",
        duration: "Full Day (9h)",
        durationType: "full-day",
        isPrivate: true,
        image: "https://od.lk/s/NjlfNDI5MzMxNjJf/take-to-the-road_image-3.webp",
        slug: "private-tour-full-day",
        departure: "Flexible - 9:00 H",
        frequency: "Daily",
        pricePerPax: 600,
        currency: "€",
        topPick: true,
        stops: ["Custom route"],
        highlights: [
          "Fully customizable 9-hour itinerary",
          "Premium luxury vehicle",
          "Flexible timing and route",
          "Multilingual expert guide",
          "VIP treatment throughout",
        ],
      },
    ],

    fr: [
      {
        id: 1,
        order: 1,
        title: "Explorer la Riviera",
        description:
          "Découvrez les destinations les plus emblématiques de la Côte d'Azur de Nice à Menton. Vivez le mélange parfait de charme côtier, de villages médiévaux et de luxe méditerranéen.",
        duration: "Demi-journée (4,5h)",
        durationType: "half-day",
        image: "https://od.lk/s/NjlfNDA5NTAwMTFf/webcams.jpg.webp",
        slug: "explorer-la-riviera",
        departure: "8h00 ou 14h00",
        frequency: "Quotidien",
        pricePerPax: 115,
        currency: "€",
        popular: true,
        stops: ["Nice", "Villefranche-sur-Mer", "Monaco", "Menton"],
        highlights: [
          "Promenade des Anglais - Célèbre promenade en bord de mer",
          "Port de pêche coloré de Villefranche",
          "Casino de Monte-Carlo et shopping de luxe",
          "Architecture d'influence italienne de Menton",
        ],
      },
      {
        id: 2,
        order: 2,
        title: "Èze – Monaco – Monte-Carlo",
        description:
          "Voyage à travers les villages médiévaux perchés et la glamoureuse principauté de Monaco. Expérience de luxe, d'histoire et de vues méditerranéennes à couper le souffle.",
        duration: "Demi-journée (4,5h)",
        durationType: "half-day",
        image:
          "https://od.lk/s/NjlfNDA5NTA0MTVf/TESTE-POUR-VOUS-MONT-BASTIDE-EZE-2-2048x1379.jpg.webp",
        slug: "eze-monaco-monte-carlo",
        departure: "9h00 ou 14h00",
        frequency: "Quotidien",
        pricePerPax: 85,
        currency: "€",
        popular: true,
        stops: ["Village d'Èze", "Monaco", "Monte-Carlo"],
        highlights: [
          "Village médiéval perché à 400m au-dessus de la mer",
          "Jardin exotique avec vues panoramiques",
          "Palais du Prince et relève de la garde",
          "Casino de Monte-Carlo et circuit de Formule 1",
        ],
      },
      {
        id: 3,
        order: 3,
        title: "Cannes – Antibes – St-Paul de Vence",
        description:
          "Explorez la glamoureuse Côte d'Azur du tapis rouge de Cannes aux villages médiévaux perchés. Art, luxe et charme provençal en un voyage inoubliable.",
        duration: "Demi-journée (4,5h)",
        durationType: "half-day",
        image:
          "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
        slug: "cannes-antibes-st-paul",
        departure: "9h00 ou 14h00",
        frequency: "Quotidien",
        pricePerPax: 100,
        currency: "€",
        stops: ["Cannes", "Antibes", "St-Paul de Vence"],
        highlights: [
          "Promenade sur la célèbre Croisette et Palais des Festivals",
          "Musée Picasso dans l'historique Antibes",
          "Galeries d'art médiévales de St-Paul de Vence",
          "Expérience du marché provençal",
        ],
      },
      {
        id: 4,
        order: 4,
        title: "Riviera Italienne & Monaco",
        description:
          "Une aventure d'une journée complète franchissant les frontières de la Riviera française à italienne. Découvrez l'élégance de San Remo, les jardins de citronniers de Menton et la grandeur de Monaco.",
        duration: "Journée complète (9h)",
        durationType: "full-day",
        image:
          "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80",
        slug: "riviera-italienne-monaco",
        departure: "9h00",
        frequency: "Quotidien",
        pricePerPax: 145,
        currency: "€",
        popular: true,
        stops: ["San Remo / Vintimille", "Menton", "Monaco", "Monte-Carlo"],
        highlights: [
          "Marché italien et casino à San Remo",
          "Jardins botaniques Hanbury",
          "Jardins de la Fête du Citron de Menton",
          "Palais princier et musée océanographique de Monaco",
        ],
      },
      {
        id: 5,
        order: 5,
        title: "Saint-Tropez & Port Grimaud",
        description:
          "Un voyage d'une journée complète vers la légendaire Saint-Tropez. Vivez le style de vie glamour, les plages magnifiques et la 'Petite Venise' de Port Grimaud.",
        duration: "Journée complète (9h)",
        durationType: "full-day",
        image:
          "https://od.lk/s/NjlfNDA5NTQ3MjRf/st.%2Btropez%2B101%2Bmiddellandse%2Bzee%2Bkust%2Bvakantie%2Bfrankrijk%2Bluxe%2Bvilla%2Bprovence%2Bcote%2Bd%27azur.jpg",
        slug: "saint-tropez-port-grimaud",
        departure: "8h00",
        frequency: "Quotidien",
        pricePerPax: 145,
        currency: "€",
        topPick: true,
        popular: true,
        stops: [
          "Nice",
          "Antibes",
          "Cannes",
          "Cap de l'Esterel",
          "Saint Raphael",
          "Fréjus",
          "Saint-Tropez",
        ],
        highlights: [
          "Port de Saint-Tropez avec yachts de luxe",
          "Plage de Pampelonne - beach clubs de renommée mondiale",
          "Citadelle avec vues panoramiques",
          "Port Grimaud - Venise de Provence",
          "Route côtière pittoresque le long de l'Esterel",
        ],
      },
      {
        id: 6,
        order: 6,
        title: "TOUR PRIVÉ - Demi-journée",
        description:
          "Concevez votre propre aventure sur la Côte d'Azur. Horaires flexibles, itinéraire personnalisé et attention personnalisée. Votre chauffeur privé, votre itinéraire.",
        duration: "Demi-journée (4,5h)",
        durationType: "half-day",
        isPrivate: true,
        image:
          "https://od.lk/s/NjlfNDI5MzMxNjFf/Ferrari-Cavalcade-6-2930x2198-c-center.jpg",
        slug: "tour-prive-demi-journee",
        departure: "Flexible - 8h00",
        frequency: "Quotidien",
        pricePerPax: 350,
        currency: "€",
        stops: ["Itinéraire personnalisé"],
        highlights: [
          "Itinéraire entièrement personnalisable",
          "Véhicule de luxe privé",
          "Départ et horaires flexibles",
          "Guide/chauffeur expert local",
          "Parfait pour les familles ou groupes",
        ],
      },
      {
        id: 7,
        order: 7,
        title: "TOUR PRIVÉ - Journée complète",
        description:
          "L'expérience ultime de la Côte d'Azur en toute liberté. Neuf heures d'exploration luxueuse adaptées exactement à vos préférences et à votre rythme.",
        duration: "Journée complète (9h)",
        durationType: "full-day",
        isPrivate: true,
        image: "https://od.lk/s/NjlfNDI5MzMxNjJf/take-to-the-road_image-3.webp",
        slug: "tour-prive-journee-complete",
        departure: "Flexible - 9h00",
        frequency: "Quotidien",
        pricePerPax: 600,
        currency: "€",
        topPick: true,
        stops: ["Itinéraire personnalisé"],
        highlights: [
          "Itinéraire entièrement personnalisable de 9 heures",
          "Véhicule de luxe premium",
          "Horaires et itinéraire flexibles",
          "Guide expert multilingue",
          "Traitement VIP tout au long",
        ],
      },
    ],
  },
};

// Helper function to get tours by language
export const getToursByLanguage = (language = "en") => {
  return updatedToursData.tours[language] || updatedToursData.tours.en;
};

// Helper function to get individual tour by slug and language
export const getTourBySlug = (slug, language = "en") => {
  const tours = getToursByLanguage(language);
  return tours.find((tour) => tour.slug === slug);
};

// Helper function to format price
export const formatPrice = (pricePerPax, numPeople = 1, currency = "€") => {
  const total = pricePerPax * numPeople;
  return `${currency}${total}`;
};

// Helper function to calculate group discount (if applicable)
export const calculateGroupPrice = (pricePerPax, numPeople) => {
  // Example: 10% discount for groups of 4+
  if (numPeople >= 4) {
    return pricePerPax * numPeople * 0.9;
  }
  return pricePerPax * numPeople;
};
