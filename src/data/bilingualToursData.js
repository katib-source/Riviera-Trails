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
      duration: "Full-day (9 hours)",
      city: "Castellane, Moustiers-Sainte-Marie, Sainte-Croix Lake",
      topPick: true,
      departure: "8:00H | Mon, Wed, Fri, Sun",
      highlights: [
        "Castellane",
        "Moustiers-Sainte-Marie",
        "Sainte-Croix Lake",
        "Lavender fields (end-June to mid-July)",
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
      id: 3,
      title: "Saint-Tropez & Port Grimaud",
      description:
        "Discover Saint-Tropez, blending tradition and modernity, and explore Port Grimaud, the 'Little Venice of Provence,' with its picturesque canals.",
      price: "€145",
      priceType: "per person*",
      image:
        "https://cdn.pixabay.com/photo/2023/04/30/15/17/saint-tropez-7960721_1280.jpg",
      duration: "Full-day (9 hours)",
      city: "Saint-Tropez, Port Grimaud",
      topPick: true,
      departure: "8:00H | Tue, Thu, Sat",
      highlights: ["Saint-Tropez", "Port Grimaud"],
      shared: true,
    },
    {
      id: 5,
      title: "Provence & Its Medieval Villages",
      description:
        "Explore Grasse's perfume secrets, medieval villages, and stunning coastal views.",
      price: "€115",
      priceType: "per person*",
      image:
        "https://cdn.pixabay.com/photo/2014/11/16/12/33/gordes-533375_1280.jpg",
      duration: "Full-day (9 hours)",
      city: "Grasse, Gourdon, Tourrettes-sur-Loup, Saint-Paul-de-Vence",
      topPick: false,
      departure: "9:00H | Mon, Wed",
      highlights: [
        "Grasse (perfume capital)",
        "Gourdon",
        "Saut du Loup waterfalls",
        "Tourrettes-sur-Loup",
        "Saint-Paul-de-Vence",
      ],
      shared: true,
    },
    {
      id: 6,
      title: "Countryside & Lake Saint-Cassien",
      description:
        "Discover lavender fields, waterfalls, and the refreshing Lake Saint-Cassien.",
      price: "€119",
      priceType: "per person*",
      image:
        "https://www.paysdefayence.com/wp-content/uploads/2024/06/panorama-saintcassien-otipf_jeanpaulvillegas-2.jpg",
      duration: "Full-day (9 hours)",
      city: "Saut du Loup, Gourdon, Grasse, Lake Saint-Cassien",
      topPick: false,
      departure: "8:30H | Tue, Thu, Sat",
      highlights: ["Saut du Loup", "Gourdon", "Grasse", "Lake Saint-Cassien"],
      shared: true,
    },
    {
      id: 7,
      title: "Italian Riviera & Monaco",
      description:
        "Explore Italy's markets, Monaco's royal sites, and the Grand Prix circuit.",
      price: "€119",
      priceType: "per person*",
      image:
        "https://cdn.pixabay.com/photo/2020/04/21/11/31/architecture-5072728_1280.jpg",
      duration: "Full-day (9 hours)",
      city: "San Remo/Ventimiglia, Menton, Monaco, Monte-Carlo",
      topPick: false,
      departure: "9:00H | Tue, Fri",
      highlights: [
        "San Remo (Tue) / Ventimiglia (Fri)",
        "Menton",
        "Monaco",
        "Monte-Carlo",
      ],
      shared: true,
    },
    {
      id: 8,
      title: "Cannes • Antibes • St-Paul de Vence",
      description:
        "Coastal drive from Cannes to Antibes, ending at the medieval gem Saint-Paul-de-Vence.",
      price: "€85",
      priceType: "per person*",
      image:
        "https://cdn.pixabay.com/photo/2018/04/06/10/05/travel-3295399_1280.jpg",
      duration: "Half-day (4.5 hours)",
      city: "Cannes, Antibes, Saint-Paul-de-Vence",
      topPick: false,
      departure: "9:00H or 14:00H",
      highlights: ["Cannes", "Antibes", "Saint-Paul-de-Vence"],
      shared: true,
    },
    {
      id: 9,
      title: "Eze • Monaco • Monte-Carlo",
      description:
        "Visit Eze's perfume factory, Monaco's palace, and Monte-Carlo's luxury spots.",
      price: "€85",
      priceType: "per person*",
      image:
        "https://cdn.pixabay.com/photo/2018/07/13/21/04/the-french-riviera-3536553_1280.jpg",
      duration: "Half-day (4.5 hours)",
      city: "Eze Village, Monaco, Monte-Carlo",
      topPick: true,
      departure: "9:00H or 14:00H",
      highlights: ["Eze Village", "Monaco", "Monte-Carlo"],
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
      duration: "Journée complète (9 heures)",
      city: "Castellane, Moustiers-Sainte-Marie, Lac Sainte-Croix",
      topPick: true,
      departure: "8h00 | Lun, Mer, Ven, Dim",
      highlights: [
        "Castellane",
        "Moustiers-Sainte-Marie",
        "Lac Sainte-Croix",
        "Champs de lavande (fin juin à mi-juillet)",
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
      id: 3,
      title: "Saint-Tropez & Port Grimaud",
      description:
        "Découvrez Saint-Tropez, mélange de tradition et de modernité, et explorez Port Grimaud, la 'Petite Venise de Provence', avec ses canaux pittoresques.",
      price: "€145",
      priceType: "par personne*",
      image:
        "https://cdn.pixabay.com/photo/2023/04/30/15/17/saint-tropez-7960721_1280.jpg",
      duration: "Journée complète (9 heures)",
      city: "Saint-Tropez, Port Grimaud",
      topPick: true,
      departure: "8h00 | Mar, Jeu, Sam",
      highlights: ["Saint-Tropez", "Port Grimaud"],
      shared: true,
    },
    {
      id: 5,
      title: "Provence & Ses Villages Médiévaux",
      description:
        "Explorez les secrets du parfum de Grasse, les villages médiévaux et les vues côtières époustouflantes.",
      price: "€115",
      priceType: "par personne*",
      image:
        "https://cdn.pixabay.com/photo/2014/11/16/12/33/gordes-533375_1280.jpg",
      duration: "Journée complète (9 heures)",
      city: "Grasse, Gourdon, Tourrettes-sur-Loup, Saint-Paul-de-Vence",
      topPick: false,
      departure: "9h00 | Lun, Mer",
      highlights: [
        "Grasse (capitale du parfum)",
        "Gourdon",
        "Cascades du Saut du Loup",
        "Tourrettes-sur-Loup",
        "Saint-Paul-de-Vence",
      ],
      shared: true,
    },
    {
      id: 6,
      title: "Campagne & Lac Saint-Cassien",
      description:
        "Découvrez les champs de lavande, les cascades et le rafraîchissant lac Saint-Cassien.",
      price: "€119",
      priceType: "par personne*",
      image:
        "https://www.paysdefayence.com/wp-content/uploads/2024/06/panorama-saintcassien-otipf_jeanpaulvillegas-2.jpg",
      duration: "Journée complète (9 heures)",
      city: "Saut du Loup, Gourdon, Grasse, Lac Saint-Cassien",
      topPick: false,
      departure: "8h30 | Mar, Jeu, Sam",
      highlights: ["Saut du Loup", "Gourdon", "Grasse", "Lac Saint-Cassien"],
      shared: true,
    },
    {
      id: 7,
      title: "Riviera Italienne & Monaco",
      description:
        "Explorez les marchés d'Italie, les sites royaux de Monaco et le circuit du Grand Prix.",
      price: "€119",
      priceType: "par personne*",
      image:
        "https://cdn.pixabay.com/photo/2020/04/21/11/31/architecture-5072728_1280.jpg",
      duration: "Journée complète (9 heures)",
      city: "San Remo/Ventimiglia, Menton, Monaco, Monte-Carlo",
      topPick: false,
      departure: "9h00 | Mar, Ven",
      highlights: [
        "San Remo (Mar) / Ventimiglia (Ven)",
        "Menton",
        "Monaco",
        "Monte-Carlo",
      ],
      shared: true,
    },
    {
      id: 8,
      title: "Cannes • Antibes • St-Paul de Vence",
      description:
        "Route côtière de Cannes à Antibes, se terminant au joyau médiéval de Saint-Paul-de-Vence.",
      price: "€85",
      priceType: "par personne*",
      image:
        "https://cdn.pixabay.com/photo/2018/04/06/10/05/travel-3295399_1280.jpg",
      duration: "Demi-journée (4h30)",
      city: "Cannes, Antibes, Saint-Paul-de-Vence",
      topPick: false,
      departure: "9h00 ou 14h00",
      highlights: ["Cannes", "Antibes", "Saint-Paul-de-Vence"],
      shared: true,
    },
    {
      id: 9,
      title: "Èze • Monaco • Monte-Carlo",
      description:
        "Visitez l'usine de parfum d'Èze, le palais de Monaco et les lieux de luxe de Monte-Carlo.",
      price: "€85",
      priceType: "par personne*",
      image:
        "https://cdn.pixabay.com/photo/2018/07/13/21/04/the-french-riviera-3536553_1280.jpg",
      duration: "Demi-journée (4h30)",
      city: "Village d'Èze, Monaco, Monte-Carlo",
      topPick: true,
      departure: "9h00 ou 14h00",
      highlights: ["Village d'Èze", "Monaco", "Monte-Carlo"],
      shared: true,
    },
  ],
};
