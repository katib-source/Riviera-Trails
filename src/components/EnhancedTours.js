import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Clock,
  MapPin,
  Users,
  Calendar,
  Star,
  Award,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { getToursByLanguage } from "../data/newToursData";

const EnhancedTours = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const tours = getToursByLanguage(language);
  const [hoveredTour, setHoveredTour] = useState(null);

  const getDurationBadgeColor = (type) => {
    switch (type) {
      case "half-day":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "full-day":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const handleBookNow = (tour) => {
    const message = `Hello! I'm interested in booking the "${tour.title}" tour (${tour.duration}). Could you provide more information?`;
    const whatsappUrl = `https://wa.me/33605985410?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleViewDetails = (tour) => {
    navigate(`/tour/${tour.slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="tours"
      className="pt-20 py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {language === "en"
              ? "Discover Our Tours"
              : "Découvrez Nos Circuits"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "en"
              ? "From half-day adventures to full-day explorations, find your perfect French Riviera experience"
              : "Des aventures d'une demi-journée aux explorations d'une journée complète, trouvez votre expérience parfaite sur la Côte d'Azur"}
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <div
              key={tour.id}
              className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 ${
                hoveredTour === tour.id ? "ring-2 ring-blue-500" : ""
              }`}
              onMouseEnter={() => setHoveredTour(tour.id)}
              onMouseLeave={() => setHoveredTour(null)}
            >
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {tour.topPick && (
                  <div className="flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    <Award className="w-3 h-3" />
                    <span>
                      {language === "en" ? "Top Pick" : "Meilleur Choix"}
                    </span>
                  </div>
                )}
                {tour.popular && (
                  <div className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                    <TrendingUp className="w-3 h-3" />
                    <span>
                      {language === "en" ? "Popular 🔥" : "Populaire 🔥"}
                    </span>
                  </div>
                )}
                {tour.isPrivate && (
                  <div className="flex items-center gap-1 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    <Users className="w-3 h-3" />
                    <span>{language === "en" ? "Private" : "Privé"}</span>
                  </div>
                )}
              </div>

              {/* Duration Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div
                  className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDurationBadgeColor(
                    tour.durationType
                  )} shadow-sm`}
                >
                  {tour.durationType === "half-day"
                    ? language === "en"
                      ? "Half Day"
                      : "Demi-journée"
                    : language === "en"
                    ? "Full Day"
                    : "Journée complète"}
                </div>
              </div>

              {/* Image */}
              <div
                className="relative h-56 overflow-hidden cursor-pointer"
                onClick={() => handleViewDetails(tour)}
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* View Details Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {language === "en" ? "View Details" : "Voir les détails"}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 min-h-[56px]">
                  {tour.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {tour.description}
                </p>

                {/* Tour Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="font-medium">{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Calendar className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>
                      {language === "en" ? "Departure:" : "Départ:"}{" "}
                      {tour.departure}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <MapPin className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-1">
                      {tour.stops.join(" • ")}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
                    {language === "en" ? "Highlights:" : "Points forts:"}
                  </p>
                  <ul className="space-y-1">
                    {tour.highlights.slice(0, 3).map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <Star className="w-3 h-3 text-amber-500 flex-shrink-0 mt-1" />
                        <span className="line-clamp-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">
                        {tour.isPrivate
                          ? language === "en"
                            ? "Total Price"
                            : "Prix total"
                          : language === "en"
                          ? "Starting from"
                          : "À partir de"}
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-gray-900">
                          {tour.currency}
                          {tour.pricePerPax}
                        </span>
                        {!tour.isPrivate && (
                          <span className="text-sm text-gray-600">
                            / {language === "en" ? "person" : "personne"}
                          </span>
                        )}
                      </div>
                    </div>
                    {tour.isPrivate && (
                      <div className="text-right">
                        <p className="text-xs text-indigo-600 font-semibold">
                          {language === "en" ? "Private Tour" : "Tour Privé"}
                        </p>
                        <p className="text-xs text-gray-500">
                          {language === "en"
                            ? "Custom route"
                            : "Itinéraire personnalisé"}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleBookNow(tour)}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    {language === "en" ? "Book Now" : "Réserver"}
                  </button>
                  <button
                    onClick={() => handleViewDetails(tour)}
                    className="px-4 py-3 border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 rounded-lg font-semibold transition-colors duration-200"
                  >
                    {language === "en" ? "Details" : "Détails"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Tour CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-3">
            {language === "en"
              ? "Need a Custom Experience?"
              : "Besoin d'une expérience personnalisée?"}
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            {language === "en"
              ? "Contact us to create a personalized tour tailored to your interests, schedule, and preferences."
              : "Contactez-nous pour créer un circuit personnalisé adapté à vos intérêts, votre emploi du temps et vos préférences."}
          </p>
          <a
            href="https://wa.me/33605985410?text=Hello!%20I'm%20interested%20in%20creating%20a%20custom%20tour%20experience."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors duration-200 shadow-lg"
          >
            <FaWhatsapp className="w-5 h-5" />
            {language === "en"
              ? "Contact Us on WhatsApp"
              : "Contactez-nous sur WhatsApp"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTours;
