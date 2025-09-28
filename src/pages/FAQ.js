import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useState } from "react";

const FAQ = () => {
  const { language } = useLanguage();
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqs = {
    en: [
      {
        question: "What are your tour prices?",
        answer:
          "Our tours are priced at €110 for 1 person, €190 for 2 people, and €270 for 3 people. All tours include transportation, professional guide, and entrance fees where applicable.",
      },
      {
        question: "How long are your tours?",
        answer:
          "Tour durations vary from 1.5 to 4 hours depending on the destination. Nice and Monaco are half-day tours (4 hours), while villages like Èze, Menton are typically 2-3 hours.",
      },
      {
        question: "What's included in the tour price?",
        answer:
          "All tours include: professional local guide, comfortable transportation, entrance fees to major attractions, local insights and recommendations, and flexible itinerary based on your interests.",
      },
      {
        question: "How do I book a tour?",
        answer:
          "You can book instantly via WhatsApp by clicking any 'Book via WhatsApp' button on our website. We'll respond within minutes to confirm availability and details.",
      },
      {
        question: "What's your cancellation policy?",
        answer:
          "Free cancellation up to 24 hours before your tour. For weather-related cancellations, we offer full refund or rescheduling at no extra cost.",
      },
      {
        question: "Do you provide hotel pickup?",
        answer:
          "Yes! We provide complimentary pickup from most hotels in Nice, Monaco, and surrounding areas. Meeting points will be confirmed when you book.",
      },
      {
        question: "Are tours available in multiple languages?",
        answer:
          "All tours are conducted in English and French. Our guide is fluent in both languages and can switch between them as needed for mixed groups.",
      },
      {
        question: "What should I bring on the tour?",
        answer:
          "Comfortable walking shoes, sun protection, camera, and water bottle. In summer, bring a hat and sunscreen. We provide additional water and local recommendations.",
      },
      {
        question: "Are your tours suitable for children and seniors?",
        answer:
          "Absolutely! Our tours are designed for all ages. We adjust the pace and activities based on your group's needs and mobility levels.",
      },
      {
        question: "What happens in bad weather?",
        answer:
          "Tours run in light rain with covered transportation. For severe weather, we offer full refund or free rescheduling to another date that works for you.",
      },
    ],
    fr: [
      {
        question: "Quels sont vos tarifs de circuits?",
        answer:
          "Nos circuits coûtent 110€ pour 1 personne, 190€ pour 2 personnes et 270€ pour 3 personnes. Tous les circuits incluent le transport, guide professionnel et les frais d'entrée le cas échéant.",
      },
      {
        question: "Quelle est la durée de vos circuits?",
        answer:
          "La durée varie de 1,5 à 4 heures selon la destination. Nice et Monaco sont des circuits d'une demi-journée (4 heures), tandis que les villages comme Èze, Menton durent généralement 2-3 heures.",
      },
      {
        question: "Qu'est-ce qui est inclus dans le prix du circuit?",
        answer:
          "Tous les circuits incluent : guide local professionnel, transport confortable, frais d'entrée aux principales attractions, conseils locaux et recommandations, et itinéraire flexible selon vos intérêts.",
      },
      {
        question: "Comment réserver un circuit?",
        answer:
          "Vous pouvez réserver instantanément via WhatsApp en cliquant sur n'importe quel bouton 'Réserver via WhatsApp' sur notre site. Nous répondons en quelques minutes pour confirmer la disponibilité.",
      },
      {
        question: "Quelle est votre politique d'annulation?",
        answer:
          "Annulation gratuite jusqu'à 24 heures avant votre circuit. Pour les annulations liées à la météo, nous offrons un remboursement complet ou une reprogrammation sans frais supplémentaires.",
      },
      {
        question: "Proposez-vous la prise en charge à l'hôtel?",
        answer:
          "Oui! Nous proposons une prise en charge gratuite dans la plupart des hôtels de Nice, Monaco et des environs. Les points de rendez-vous seront confirmés lors de votre réservation.",
      },
      {
        question: "Les circuits sont-ils disponibles en plusieurs langues?",
        answer:
          "Tous les circuits se déroulent en anglais et en français. Notre guide parle couramment les deux langues et peut alterner selon les besoins des groupes mixtes.",
      },
      {
        question: "Que dois-je apporter pour le circuit?",
        answer:
          "Chaussures de marche confortables, protection solaire, appareil photo et bouteille d'eau. En été, apportez un chapeau et de la crème solaire. Nous fournissons de l'eau supplémentaire et des recommandations locales.",
      },
      {
        question: "Vos circuits conviennent-ils aux enfants et aux seniors?",
        answer:
          "Absolument! Nos circuits sont conçus pour tous les âges. Nous adaptons le rythme et les activités selon les besoins et niveaux de mobilité de votre groupe.",
      },
      {
        question: "Que se passe-t-il par mauvais temps?",
        answer:
          "Les circuits ont lieu par temps de pluie légère avec transport couvert. En cas de mauvais temps sévère, nous offrons un remboursement complet ou une reprogrammation gratuite à une autre date qui vous convient.",
      },
    ],
  };

  const currentFaqs = faqs[language] || faqs.en;

  const pageTitle =
    language === "fr" ? "Questions Fréquentes" : "Frequently Asked Questions";
  const pageSubtitle =
    language === "fr"
      ? "Tout ce que vous devez savoir sur nos circuits de la Côte d'Azur"
      : "Everything you need to know about our French Riviera tours";

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{pageTitle}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {pageSubtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {currentFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                {openItems[index] ? (
                  <FiChevronUp className="text-sunset-orange text-xl flex-shrink-0" />
                ) : (
                  <FiChevronDown className="text-sunset-orange text-xl flex-shrink-0" />
                )}
              </button>

              {openItems[index] && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-riviera-blue to-mediterranean-teal rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            {language === "fr"
              ? "Vous avez d'autres questions?"
              : "Still have questions?"}
          </h2>
          <p className="mb-6 opacity-90">
            {language === "fr"
              ? "Contactez-nous directement via WhatsApp pour des réponses immédiates!"
              : "Contact us directly via WhatsApp for instant answers!"}
          </p>
          <a
            href="https://wa.me/33605985410?text=Hello!%20I%20have%20a%20question%20about%20your%20French%20Riviera%20tours."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-riviera-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.696" />
            </svg>
            {language === "fr" ? "Poser une question" : "Ask a Question"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
