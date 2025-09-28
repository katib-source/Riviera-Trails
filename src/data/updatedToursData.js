// Updated tours data with new itinerary and pricing
export const updatedToursData = {
  pricing: {
    en: {
      "1_person": "€110",
      "2_people": "€190",
      "3_people": "€270",
    },
    fr: {
      "1_personne": "110€",
      "2_personnes": "190€",
      "3_personnes": "270€",
    },
  },

  tours: {
    en: [
      {
        id: 1,
        order: 1,
        title: "Nice",
        description:
          "The main city of the French Riviera, known for its Promenade des Anglais and colorful old town.",
        duration: "4.5 hours",
        image: "https://od.lk/s/NjlfNDA5NTAwMTFf/webcams.jpg.webp",
        slug: "nice",
        highlights: [
          "Promenade des Anglais - Famous seafront promenade",
          "Vieux Nice - Colorful old town with markets",
          "Castle Hill - Panoramic views over the city",
          "Place Masséna - Main square and shopping area",
        ],
        price: "€110",
        priceType: "1 person | €190 (2 people) | €270 (3 people)",
      },
      {
        id: 2,
        order: 2,
        title: "Villefranche-sur-Mer",
        description:
          "A charming fishing port with colorful facades and a 16th-century citadel.",
        duration: "4.5 hours",
        image: "https://od.lk/s/NjlfNDA5NTAxNzFf/11945679.jpg",
        slug: "villefranche-sur-mer",
        highlights: [
          "Colorful waterfront buildings",
          "16th-century Citadel Saint-Elme",
          "Chapel of Saint-Pierre decorated by Jean Cocteau",
          "Protected deep-water harbor",
        ],
        price: "€110",
        priceType: "1 person | €190 (2 people) | €270 (3 people)",
      },
      {
        id: 3,
        order: 3,
        title: "Saint-Jean-Cap-Ferrat",
        description:
          "A luxurious peninsula with sumptuous villas and gardens such as the Villa Ephrussi de Rothschild.",
        duration: "4.5 hours",
        image:
          "https://od.lk/s/NjlfNDA5NTAyMzRf/vue-aerienne-saint-jean-cap-ferrat-scaled.jpg",
        slug: "saint-jean-cap-ferrat",
        highlights: [
          "Villa Ephrussi de Rothschild and gardens",
          "Exclusive peninsula with luxury properties",
          "Villa Kerylos - Ancient Greek replica",
          "Scenic coastal walking paths",
        ],
        price: "€110",
        priceType: "1 person | €190 (2 people) | €270 (3 people)",
      },
      {
        id: 4,
        order: 4,
        title: "Beaulieu-sur-Mer",
        description:
          "An elegant seaside resort, often considered an extension of Saint-Jean-Cap-Ferrat.",
        duration: "4.5 hours",
        image:
          "https://od.lk/s/NjlfNDA5NTAzNDFf/beaulieu-sur-mer8-scaled-e1710335496187.jpeg",
        slug: "beaulieu-sur-mer",
        highlights: [
          "Belle Époque architecture",
          "Villa Kerylos - Ancient Greek villa",
          "Baie des Fourmis - Beautiful bay",
          "Casino and luxury hotels",
        ],
        price: "€110",
        priceType: "1 person | €190 (2 people) | €270 (3 people)",
      },
      {
        id: 5,
        order: 5,
        title: "Èze",
        description:
          "A perched medieval village nicknamed the 'Eagle's Nest' for its spectacular views over the Mediterranean.",
        duration: "4.5 hours",
        image:
          "https://od.lk/s/NjlfNDA5NTA0MTVf/TESTE-POUR-VOUS-MONT-BASTIDE-EZE-2-2048x1379.jpg.webp",
        slug: "eze",
        highlights: [
          "Medieval village perched 400m above sea",
          "Exotic Garden with panoramic views",
          "Church of Our Lady of the Assumption",
          "Artisan shops and galleries",
        ],
        price: "€110",
        priceType: "1 person | €190 (2 people) | €270 (3 people)",
      },
      {
        id: 6,
        order: 6,
        title: "Cap-d'Ail",
        description:
          "A small coastal town between Monaco and Nice, with hidden coves.",
        duration: "4.5 hours",
        image: "https://od.lk/s/NjlfNDA5NTA1Mzhf/10111276-2048x1365.jpg.webp",
        slug: "cap-dail",
        highlights: [
          "Mala Beach - Hidden cove with crystal clear water",
          "Coastal hiking trails",
          "Villa Lumière - Historic residence",
          "Beautiful Mediterranean vegetation",
        ],
        price: "€110",
        priceType: "1 person | €190 (2 people) | €270 (3 people)",
      },
      {
        id: 7,
        order: 7,
        title: "Monaco",
        description:
          "Including Monte-Carlo and its famous casino (technically an independent principality).",
        duration: "4.5 hours",
        image:
          "https://od.lk/s/NjlfNDA5NTA2NzRf/16d0e61d4250-Web-Large-JPG-C-BVergely_Lot21_Dec2022_19_addcrop.jpg.webp",
        slug: "monaco",
        highlights: [
          "Monte-Carlo Casino and luxury shopping",
          "Prince's Palace and changing of the guard",
          "Monaco Cathedral and royal tombs",
          "Formula 1 Grand Prix circuit",
          "Port Hercule luxury yacht harbor",
        ],
        price: "€110",
        priceType: "1 person | €190 (2 people) | €270 (3 people)",
      },
      {
        id: 8,
        order: 8,
        title: "Roquebrune-Cap-Martin",
        description:
          "A medieval village with preserved architecture and sea views.",
        duration: "4.5 hours",
        image: "https://od.lk/s/NjlfNDA5NTA3NTVf/11973644.jpg.webp",
        slug: "roquebrune-cap-martin",
        highlights: [
          "Medieval castle - oldest feudal castle in France",
          "Olive tree over 1000 years old",
          "Scenic Cap Martin peninsula",
          "Le Corbusier's cabin (exterior visit)",
        ],
        price: "€110",
        priceType: "1 person | €190 (2 people) | €270 (3 people)",
      },
      {
        id: 9,
        order: 9,
        title: "Menton",
        description:
          "The last French city before Italy, famous for its lemons, gardens, and Franco-Italian cultural blend.",
        duration: "4.5 hours",
        image: "https://od.lk/s/NjlfNDA5NTA5MTRf/Port_menton.jpg",
        slug: "menton",
        highlights: [
          "Lemon Festival and citrus gardens",
          "Jean Cocteau Museum",
          "Italian-influenced architecture",
          "Val Rahmeh Botanical Garden",
          "Basilica of Saint-Michel",
        ],
        price: "€110",
        priceType: "1 person | €190 (2 people) | €270 (3 people)",
      },
      {
        id: 10,
        order: 10,
        title: "Saint-Tropez",
        description:
          "The legendary glamorous resort town famous for its beaches, luxury yachts, and vibrant nightlife. A full day exploring the French Riviera's most iconic destination.",
        duration: "8 hours",
        image:
          "https://od.lk/s/NjlfNDA5NTQ3MjRf/st.%2Btropez%2B101%2Bmiddellandse%2Bzee%2Bkust%2Bvakantie%2Bfrankrijk%2Bluxe%2Bvilla%2Bprovence%2Bcote%2Bd%27azur.jpg",
        slug: "saint-tropez",
        topPick: true,
        highlights: [
          "Port of Saint-Tropez - Iconic harbor with luxury yachts",
          "Place des Lices - Famous market square and café culture",
          "Citadel of Saint-Tropez - Historic fortress with panoramic views",
          "Pampelonne Beach - World-renowned beach clubs",
          "Old Town - Charming Provençal streets and boutiques",
          "Musée de l'Annonciade - Impressive art collection",
        ],
        price: "€110",
        priceType: "1 person | €190 (2 people) | €270 (3 people)",
      },
    ],

    fr: [
      {
        id: 1,
        order: 1,
        title: "Nice",
        description:
          "La principale ville de la Côte d'Azur, connue pour sa Promenade des Anglais et son vieux quartier coloré.",
        duration: "4,5 heures",
        image: "https://od.lk/s/NjlfNDA5NTAwMTFf/webcams.jpg.webp",
        slug: "nice",
        highlights: [
          "Promenade des Anglais - Célèbre promenade en bord de mer",
          "Vieux Nice - Quartier coloré avec ses marchés",
          "Colline du Château - Vues panoramiques sur la ville",
          "Place Masséna - Place principale et zone commerciale",
        ],
        price: "110€",
        priceType: "1 personne | 190€ (2 personnes) | 270€ (3 personnes)",
      },
      {
        id: 2,
        order: 2,
        title: "Villefranche-sur-Mer",
        description:
          "Un charmant port de pêche avec des façades colorées et une citadelle du XVIe siècle.",
        duration: "4,5 heures",
        image: "https://od.lk/s/NjlfNDA5NTAxNzFf/11945679.jpg",
        slug: "villefranche-sur-mer",
        highlights: [
          "Bâtiments colorés du front de mer",
          "Citadelle Saint-Elme du XVIe siècle",
          "Chapelle Saint-Pierre décorée par Jean Cocteau",
          "Port en eau profonde protégé",
        ],
        price: "110€",
        priceType: "1 personne | 190€ (2 personnes) | 270€ (3 personnes)",
      },
      {
        id: 3,
        order: 3,
        title: "Saint-Jean-Cap-Ferrat",
        description:
          "Une péninsule luxueuse avec des villas somptueuses et des jardins comme la Villa Ephrussi de Rothschild.",
        duration: "4,5 heures",
        image:
          "https://od.lk/s/NjlfNDA5NTAyMzRf/vue-aerienne-saint-jean-cap-ferrat-scaled.jpg",
        slug: "saint-jean-cap-ferrat",
        highlights: [
          "Villa Ephrussi de Rothschild et ses jardins",
          "Presqu'île exclusive avec propriétés de luxe",
          "Villa Kerylos - Réplique de villa grecque antique",
          "Sentiers côtiers panoramiques",
        ],
        price: "110€",
        priceType: "1 personne | 190€ (2 personnes) | 270€ (3 personnes)",
      },
      {
        id: 4,
        order: 4,
        title: "Beaulieu-sur-Mer",
        description:
          "Une station balnéaire élégante, souvent considérée comme une extension de Saint-Jean-Cap-Ferrat.",
        duration: "4,5 heures",
        image:
          "https://od.lk/s/NjlfNDA5NTAzNDFf/beaulieu-sur-mer8-scaled-e1710335496187.jpeg",
        slug: "beaulieu-sur-mer",
        highlights: [
          "Architecture Belle Époque",
          "Villa Kerylos - Villa grecque antique",
          "Baie des Fourmis - Belle baie",
          "Casino et hôtels de luxe",
        ],
        price: "110€",
        priceType: "1 personne | 190€ (2 personnes) | 270€ (3 personnes)",
      },
      {
        id: 5,
        order: 5,
        title: "Èze",
        description:
          "Un village médiéval perché surnommé le 'Nid d'Aigle' pour ses vues spectaculaires sur la Méditerranée.",
        duration: "4,5 heures",
        image:
          "https://od.lk/s/NjlfNDA5NTA0MTVf/TESTE-POUR-VOUS-MONT-BASTIDE-EZE-2-2048x1379.jpg.webp",
        slug: "eze",
        highlights: [
          "Village médiéval perché à 400m au-dessus de la mer",
          "Jardin Exotique avec vues panoramiques",
          "Église Notre-Dame de l'Assomption",
          "Boutiques d'artisans et galeries",
        ],
        price: "110€",
        priceType: "1 personne | 190€ (2 personnes) | 270€ (3 personnes)",
      },
      {
        id: 6,
        order: 6,
        title: "Cap-d'Ail",
        description:
          "Une petite commune côtière entre Monaco et Nice, avec des criques secrètes.",
        duration: "4,5 heures",
        image: "https://od.lk/s/NjlfNDA5NTA1Mzhf/10111276-2048x1365.jpg.webp",
        slug: "cap-dail",
        highlights: [
          "Plage de la Mala - Crique cachée aux eaux cristallines",
          "Sentiers de randonnée côtiers",
          "Villa Lumière - Résidence historique",
          "Belle végétation méditerranéenne",
        ],
        price: "110€",
        priceType: "1 personne | 190€ (2 personnes) | 270€ (3 personnes)",
      },
      {
        id: 7,
        order: 7,
        title: "Monaco",
        description:
          "Incluant Monte-Carlo et son célèbre casino (bien que techniquement une principauté indépendante).",
        duration: "4,5 heures",
        image:
          "https://od.lk/s/NjlfNDA5NTA2NzRf/16d0e61d4250-Web-Large-JPG-C-BVergely_Lot21_Dec2022_19_addcrop.jpg.webp",
        slug: "monaco",
        highlights: [
          "Casino de Monte-Carlo et shopping de luxe",
          "Palais du Prince et relève de la garde",
          "Cathédrale de Monaco et tombes royales",
          "Circuit du Grand Prix de Formule 1",
          "Port Hercule et yachts de luxe",
        ],
        price: "110€",
        priceType: "1 personne | 190€ (2 personnes) | 270€ (3 personnes)",
      },
      {
        id: 8,
        order: 8,
        title: "Roquebrune-Cap-Martin",
        description:
          "Un village médiéval avec une architecture préservée et des vues sur la mer.",
        duration: "4,5 heures",
        image: "https://od.lk/s/NjlfNDA5NTA3NTVf/11973644.jpg.webp",
        slug: "roquebrune-cap-martin",
        highlights: [
          "Château médiéval - plus ancien château féodal de France",
          "Olivier millénaire de plus de 1000 ans",
          "Presqu'île panoramique du Cap Martin",
          "Cabanon de Le Corbusier (visite extérieure)",
        ],
        price: "110€",
        priceType: "1 personne | 190€ (2 personnes) | 270€ (3 personnes)",
      },
      {
        id: 9,
        order: 9,
        title: "Menton",
        description:
          "La dernière ville française avant l'Italie, célèbre pour ses citrons, ses jardins et son mélange culturel franco-italien.",
        duration: "4,5 heures",
        image: "https://od.lk/s/NjlfNDA5NTA5MTRf/Port_menton.jpg",
        slug: "menton",
        highlights: [
          "Fête du Citron et jardins d'agrumes",
          "Musée Jean Cocteau",
          "Architecture d'influence italienne",
          "Jardin botanique du Val Rahmeh",
          "Basilique Saint-Michel",
        ],
        price: "110€",
        priceType: "1 personne | 190€ (2 personnes) | 270€ (3 personnes)",
      },
      {
        id: 10,
        order: 10,
        title: "Saint-Tropez",
        description:
          "La légendaire station balnéaire glamour célèbre pour ses plages, ses yachts de luxe et sa vie nocturne animée. Une journée complète à explorer la destination la plus emblématique de la Côte d'Azur.",
        duration: "8 heures",
        image:
          "https://od.lk/s/NjlfNDA5NTQ3MjRf/st.%2Btropez%2B101%2Bmiddellandse%2Bzee%2Bkust%2Bvakantie%2Bfrankrijk%2Bluxe%2Bvilla%2Bprovence%2Bcote%2Bd%27azur.jpg",
        slug: "saint-tropez",
        topPick: true,
        highlights: [
          "Port de Saint-Tropez - Port emblématique avec yachts de luxe",
          "Place des Lices - Célèbre place du marché et culture café",
          "Citadelle de Saint-Tropez - Forteresse historique avec vues panoramiques",
          "Plage de Pampelonne - Beach clubs de renommée mondiale",
          "Vieille Ville - Rues provençales charmantes et boutiques",
          "Musée de l'Annonciade - Impressionnante collection d'art",
        ],
        price: "110€",
        priceType: "1 personne | 190€ (2 personnes) | 270€ (3 personnes)",
      },
    ],
  },
};

// Helper function to get tours by language
export const getToursByLanguage = (language = "en") => {
  return updatedToursData.tours[language] || updatedToursData.tours.en;
};

// Helper function to get pricing by language
export const getPricingByLanguage = (language = "en") => {
  return updatedToursData.pricing[language] || updatedToursData.pricing.en;
};

// Helper function to get individual tour by slug and language
export const getTourBySlug = (slug, language = "en") => {
  const tours = getToursByLanguage(language);
  return tours.find((tour) => tour.slug === slug);
};
