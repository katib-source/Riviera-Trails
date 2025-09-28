// Sample data for tours
export const toursData = [
  {
    id: 1,
    title: "Côte d'Azur Complete • French Riviera Highlights",
    description:
      "Découvrez l'itinéraire complet de la Côte d'Azur de Nice à Menton. Un voyage à travers les plus belles villes et villages de la Riviera française, des ports de pêche colorés aux villages médiévaux perchés.",
    price: "€110",
    priceType: "1 personne | €190 (2 pers.) | €270 (3 pers.)",
    image:
      "https://cdn.pixabay.com/photo/2025/08/06/13/14/13-14-49-577_1280.jpg",
    duration: "4.5 hours",
    city: "Nice • Villefranche • Saint-Jean-Cap-Ferrat • Èze • Monaco • Menton",
    topPick: true,
    departure: "Daily",
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
  // {
  //   id: 10,
  //   title: "French Riviera • Côte d'Azur",
  //   description:
  //     "Panoramic views, medieval Eze, and Monaco's jet-set attractions.",
  //   price: "€115",
  //   priceType: "per person*",
  //   image: "https://images.pexels.com/photos/3016350/pexels-photo-3016350.jpeg",
  //   duration: "Full-day (9 hours)",
  //   city: "Nice, Villefranche, Eze Village, Monaco, Monte-Carlo",
  //   topPick: false,
  //   departure: "9:00H",
  //   highlights: ["Nice, Villefranche", "Eze Village", "Monaco", "Monte-Carlo"],
  //   shared: true,
  // },
];

// Sample testimonials
export const testimonialsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    country: "United States",
    rating: 5,
    text: "Amazing experience! The Nice Old Town tour was perfectly organized and our guide was so knowledgeable. Would definitely book again!",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b04c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    name: "Marco Rossi",
    country: "Italy",
    rating: 5,
    text: "The Monaco tour exceeded all expectations. Small group, personal attention, and incredible insights into the city's history. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    name: "Emily Chen",
    country: "Canada",
    rating: 5,
    text: "Fantastic coastal drive tour! The scenery was breathtaking and our guide knew all the best photo spots. Perfect day out!",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
];
