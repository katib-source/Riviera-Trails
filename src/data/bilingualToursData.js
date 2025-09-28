// Bilingual tours data
export const toursData = {
  en: [
    {
      id: 1,
      title: "Côte d'Azur Complete • French Riviera Highlights",
      description:
        "Discover the complete Côte d'Azur itinerary from Nice to Menton. A journey through the most beautiful cities and villages of the French Riviera, from colorful fishing ports to medieval hilltop villages.",
      price: "€110",
      priceType: "1 person | €190 (2 people) | €270 (3 people)",
      image:
        "https://cdn.pixabay.com/photo/2025/07/18/09/11/09-11-57-51_1280.jpg",
      duration: "4.5 hours",
      city: "Nice • Villefranche • Saint-Jean-Cap-Ferrat • Èze • Monaco • Menton",
      topPick: true,
      departure: "Daily",
      highlights: [
        "Nice - Promenade des Anglais and colorful old quarter",
        "Villefranche-sur-Mer - Fishing port and 16th-century citadel",
        "Saint-Jean-Cap-Ferrat - Villa Ephrussi de Rothschild",
        "Beaulieu-sur-Mer - Elegant seaside resort",
        "Èze - Medieval 'Eagle's Nest' village with spectacular views",
        "Cap-d'Ail - Secret coves",
        "Monaco - Monte-Carlo and famous casino",
        "Roquebrune-Cap-Martin - Medieval village with preserved architecture",
        "Menton - Gardens and Franco-Italian cultural blend",
      ],
      shared: true,
      itinerary: [
        {
          stop: "Nice",
          duration: "1h30",
          description:
            "The main city of the French Riviera, known for its Promenade des Anglais and colorful old quarter.",
        },
        {
          stop: "Villefranche-sur-Mer",
          duration: "45min",
          description:
            "A charming fishing port with colorful facades and a 16th-century citadel.",
        },
        {
          stop: "Saint-Jean-Cap-Ferrat",
          duration: "1h15",
          description:
            "A luxurious peninsula with sumptuous villas and gardens like Villa Ephrussi de Rothschild.",
        },
        {
          stop: "Beaulieu-sur-Mer",
          duration: "30min",
          description:
            "An elegant seaside resort, often considered an extension of Saint-Jean-Cap-Ferrat.",
        },
        {
          stop: "Èze",
          duration: "1h30",
          description:
            "A perched medieval village nicknamed the 'Eagle's Nest' for its spectacular Mediterranean views.",
        },
        {
          stop: "Cap-d'Ail",
          duration: "30min",
          description:
            "A small coastal commune between Monaco and Nice, with secret coves.",
        },
        {
          stop: "Monaco",
          duration: "2h",
          description:
            "Including Monte-Carlo and its famous casino. Though technically an independent principality.",
        },
        {
          stop: "Roquebrune-Cap-Martin",
          duration: "45min",
          description:
            "A medieval village with preserved architecture and sea views.",
        },
        {
          stop: "Menton",
          duration: "1h15",
          description:
            "The last French city before Italy, famous for its lemons, gardens, and Franco-Italian cultural blend.",
        },
      ],
    },
    {
      id: 2,
      title: "Gorges du Verdon",
      description:
        "Enjoy the authenticity of Castellane, nestled at the gates of the Gorges du Verdon. Admire Moustiers-Sainte-Marie, one of France's most beautiful villages, known for its faience. Explore Sainte-Croix Lake, ideal for swimming and water activities.",
      price: "€145",
      priceType: "per person*",
      image:
        "https://cdn.pixabay.com/photo/2015/10/03/12/55/gorge-du-verdon-969748_1280.jpg",
      duration: "4 hours",
      city: "Castellane, Moustiers-Sainte-Marie, Sainte-Croix Lake",
      topPick: true,
      departure: "8:00AM | Mon, Wed, Fri, Sun",
      highlights: [
        "Castellane - Historic town at the gateway to Verdon",
        "Moustiers-Sainte-Marie - One of France's most beautiful villages",
        "Sainte-Croix Lake - Crystal clear waters perfect for swimming",
        "Verdon Gorge - Europe's Grand Canyon",
        "Scenic mountain roads and panoramic viewpoints",
        "Local pottery workshops and traditional crafts",
        "Provençal lunch with local specialties",
      ],
      shared: false,
    },
    {
      id: 3,
      title: "Cannes & Antibes",
      description:
        "Walk the famous Croisette in Cannes, where the film festival takes place. Discover the old town of Antibes and its ramparts, then visit the Picasso Museum. End with a stroll through the luxury marina of Port Vauban.",
      price: "€95",
      priceType: "per person*",
      image:
        "https://cdn.pixabay.com/photo/2025/07/18/09/29/09-29-00-554_1280.jpg",
      duration: "4 hours",
      city: "Cannes, Antibes",
      topPick: false,
      departure: "Daily",
      highlights: [
        "Cannes - La Croisette and Palais des Festivals",
        "Antibes - Historic old town and ramparts",
        "Picasso Museum - Art and Mediterranean views",
        "Port Vauban - Luxury yacht marina",
        "Provençal market (depending on day)",
        "Scenic coastal drive",
      ],
      shared: true,
    },
    {
      id: 4,
      title: "Saint-Paul-de-Vence & Grasse",
      description:
        "Explore the medieval village of Saint-Paul-de-Vence, famous for its art galleries and stunning views. Then discover Grasse, the perfume capital of the world, with visits to traditional perfumeries and their gardens.",
      price: "€120",
      priceType: "per person*",
      image:
        "https://cdn.pixabay.com/photo/2019/07/02/16/22/saint-paul-de-vence-4312078_1280.jpg",
      duration: "4 hours",
      city: "Saint-Paul-de-Vence, Grasse",
      topPick: false,
      departure: "Daily",
      highlights: [
        "Saint-Paul-de-Vence - Medieval village and art galleries",
        "Fondation Maeght - Modern art museum",
        "Grasse - Perfume capital of the world",
        "Perfume workshop - Create your own fragrance",
        "Fragonard or Molinard perfumery visit",
        "Scenic countryside drive through Provence",
      ],
      shared: true,
    },
  ],
  fr: [
    {
      id: 1,
      title: "Côte d'Azur Complète • Incontournables de la Riviera",
      description:
        "Découvrez l'itinéraire complet de la Côte d'Azur de Nice à Menton. Un voyage à travers les plus belles villes et villages de la Riviera française, des ports de pêche colorés aux villages médiévaux perchés.",
      price: "€110",
      priceType: "1 personne | €190 (2 pers.) | €270 (3 pers.)",
      image:
        "https://cdn.pixabay.com/photo/2025/07/18/09/11/09-11-57-51_1280.jpg",
      duration: "4h30",
      city: "Nice • Villefranche • Saint-Jean-Cap-Ferrat • Èze • Monaco • Menton",
      topPick: true,
      departure: "Quotidien",
      highlights: [
        "Nice - Promenade des Anglais et vieux quartier coloré",
        "Villefranche-sur-Mer - Port de pêche et citadelle du XVIe siècle",
        "Saint-Jean-Cap-Ferrat - Villa Ephrussi de Rothschild",
        "Beaulieu-sur-Mer - Station balnéaire élégante",
        "Èze - Village médiéval 'Nid d'Aigle' avec vues spectaculaires",
        "Cap-d'Ail - Criques secrètes",
        "Monaco - Monte-Carlo et casino célèbre",
        "Roquebrune-Cap-Martin - Village médiéval avec architecture préservée",
        "Menton - Jardins et mélange culturel franco-italien",
      ],
      shared: true,
      itinerary: [
        {
          stop: "Nice",
          duration: "1h30",
          description:
            "La principale ville de la Côte d'Azur, connue pour sa Promenade des Anglais et son vieux quartier coloré.",
        },
        {
          stop: "Villefranche-sur-Mer",
          duration: "45min",
          description:
            "Un charmant port de pêche avec des façades colorées et une citadelle du XVIe siècle.",
        },
        {
          stop: "Saint-Jean-Cap-Ferrat",
          duration: "1h15",
          description:
            "Une péninsule luxueuse avec des villas somptueuses et des jardins comme la Villa Ephrussi de Rothschild.",
        },
        {
          stop: "Beaulieu-sur-Mer",
          duration: "30min",
          description:
            "Une station balnéaire élégante, souvent considérée comme une extension de Saint-Jean-Cap-Ferrat.",
        },
        {
          stop: "Èze",
          duration: "1h30",
          description:
            "Un village médiéval perché surnommé le 'Nid d'Aigle' pour ses vues spectaculaires sur la Méditerranée.",
        },
        {
          stop: "Cap-d'Ail",
          duration: "30min",
          description:
            "Une petite commune côtière entre Monaco et Nice, avec des criques secrètes.",
        },
        {
          stop: "Monaco",
          duration: "2h",
          description:
            "Incluant Monte-Carlo et son célèbre casino. Bien que techniquement une principauté indépendante.",
        },
        {
          stop: "Roquebrune-Cap-Martin",
          duration: "45min",
          description:
            "Un village médiéval avec une architecture préservée et des vues sur la mer.",
        },
        {
          stop: "Menton",
          duration: "1h15",
          description:
            "La dernière ville française avant l'Italie, célèbre pour ses citrons, ses jardins et son mélange culturel franco-italien.",
        },
      ],
    },
    {
      id: 2,
      title: "Gorges du Verdon",
      description:
        "Profitez de l'authenticité de Castellane, nichée aux portes des Gorges du Verdon. Admirez Moustiers-Sainte-Marie, l'un des plus beaux villages de France, connu pour ses faïences. Explorez le lac Sainte-Croix, idéal pour la baignade et les activités nautiques.",
      price: "€145",
      priceType: "par personne*",
      image:
        "https://cdn.pixabay.com/photo/2015/10/03/12/55/gorge-du-verdon-969748_1280.jpg",
      duration: "4 heures",
      city: "Castellane, Moustiers-Sainte-Marie, Lac Sainte-Croix",
      topPick: true,
      departure: "8h00 | Lun, Mer, Ven, Dim",
      highlights: [
        "Castellane - Ville historique aux portes du Verdon",
        "Moustiers-Sainte-Marie - L'un des plus beaux villages de France",
        "Lac Sainte-Croix - Eaux cristallines parfaites pour la baignade",
        "Gorges du Verdon - Le Grand Canyon de l'Europe",
        "Routes de montagne pittoresques et points de vue panoramiques",
        "Ateliers de poterie locale et artisanat traditionnel",
        "Déjeuner provençal avec spécialités locales",
      ],
      shared: false,
    },
    {
      id: 3,
      title: "Cannes & Antibes",
      description:
        "Marchez sur la célèbre Croisette à Cannes, où se déroule le festival de cinéma. Découvrez la vieille ville d'Antibes et ses remparts, puis visitez le Musée Picasso. Terminez par une promenade dans le port de plaisance de luxe de Port Vauban.",
      price: "€95",
      priceType: "par personne*",
      image:
        "https://cdn.pixabay.com/photo/2025/07/18/09/29/09-29-00-554_1280.jpg",
      duration: "4 heures",
      city: "Cannes, Antibes",
      topPick: false,
      departure: "Quotidien",
      highlights: [
        "Cannes - La Croisette et le Palais des Festivals",
        "Antibes - Vieille ville historique et remparts",
        "Musée Picasso - Art et vues méditerranéennes",
        "Port Vauban - Port de plaisance de luxe",
        "Marché provençal (selon le jour)",
        "Route côtière pittoresque",
      ],
      shared: true,
    },
    {
      id: 4,
      title: "Saint-Paul-de-Vence & Grasse",
      description:
        "Explorez le village médiéval de Saint-Paul-de-Vence, célèbre pour ses galeries d'art et ses vues magnifiques. Puis découvrez Grasse, la capitale mondiale du parfum, avec des visites de parfumeries traditionnelles et leurs jardins.",
      price: "€120",
      priceType: "par personne*",
      image:
        "https://cdn.pixabay.com/photo/2019/07/02/16/22/saint-paul-de-vence-4312078_1280.jpg",
      duration: "4 heures",
      city: "Saint-Paul-de-Vence, Grasse",
      topPick: false,
      departure: "Quotidien",
      highlights: [
        "Saint-Paul-de-Vence - Village médiéval et galeries d'art",
        "Fondation Maeght - Musée d'art moderne",
        "Grasse - Capitale mondiale du parfum",
        "Atelier de parfum - Créez votre propre fragrance",
        "Visite de parfumerie Fragonard ou Molinard",
        "Route pittoresque à travers la campagne provençale",
      ],
      shared: true,
    },
  ],
};
