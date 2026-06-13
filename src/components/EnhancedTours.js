import React, { useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Clock, MapPin, Calendar, Star, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { getToursByLanguage } from "../data/newToursData";
import { getWhatsAppUrl } from "../config/constants";
import TourBadges from "./TourBadges";

// Pure function — no component state, lives outside to avoid re-creation
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

// ─── TourCard ────────────────────────────────────────────────────────────────
const TourCard = React.memo(
  ({ tour, isHovered, onHover, onUnhover, onBookNow, onViewDetails }) => {
    const { t } = useLanguage();

    return (
      <div
        className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 ${
          isHovered ? "ring-2 ring-blue-500" : ""
        }`}
        onMouseEnter={() => onHover(tour.id)}
        onMouseLeave={onUnhover}
      >
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          <TourBadges tour={tour} size="sm" />
        </div>

        {/* Duration Badge */}
        <div className="absolute top-4 right-4 z-10">
          <div
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDurationBadgeColor(
              tour.durationType
            )} shadow-sm`}
          >
            {tour.durationType === "half-day"
              ? t("tours.card.halfDay")
              : t("tours.card.fullDay")}
          </div>
        </div>

        {/* Image */}
        <div
          className="relative h-56 overflow-hidden cursor-pointer"
          onClick={() => onViewDetails(tour)}
        >
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {t("tours.viewDetails")}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 min-h-[56px]">
            {tour.title}
          </h3>
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
                {t("tours.card.departureLabel")} {tour.departure}
              </span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <MapPin className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
              <span className="line-clamp-1">{tour.stops.join(" • ")}</span>
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
              {t("tours.card.highlightsLabel")}
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
                    ? t("tours.card.totalPrice")
                    : t("tours.card.startingFrom")}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-gray-900">
                    {tour.currency}
                    {tour.pricePerPax}
                  </span>
                  {!tour.isPrivate && (
                    <span className="text-sm text-gray-600">
                      / {t("tours.card.person")}
                    </span>
                  )}
                </div>
              </div>
              {tour.isPrivate && (
                <div className="text-right">
                  <p className="text-xs text-indigo-600 font-semibold">
                    {t("tours.badges.privateTour")}
                  </p>
                  <p className="text-xs text-gray-500">
                    {t("tours.card.customRoute")}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={() => onBookNow(tour)}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <FaWhatsapp className="w-5 h-5" />
              {t("nav.bookNow")}
            </button>
            <button
              onClick={() => onViewDetails(tour)}
              className="px-4 py-3 border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 rounded-lg font-semibold transition-colors duration-200"
            >
              {t("tours.card.details")}
            </button>
          </div>
        </div>
      </div>
    );
  }
);

TourCard.propTypes = {
  tour: PropTypes.shape({
    id:          PropTypes.number.isRequired,
    title:       PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image:       PropTypes.string.isRequired,
    duration:    PropTypes.string.isRequired,
    departure:   PropTypes.string.isRequired,
    stops:       PropTypes.arrayOf(PropTypes.string).isRequired,
    highlights:  PropTypes.arrayOf(PropTypes.string).isRequired,
    currency:    PropTypes.string.isRequired,
    pricePerPax: PropTypes.number.isRequired,
    isPrivate:   PropTypes.bool,
    maxPax:      PropTypes.number,
    durationType: PropTypes.string,
    topPick:     PropTypes.bool,
    popular:     PropTypes.bool,
  }).isRequired,
  isHovered:    PropTypes.bool.isRequired,
  onHover:      PropTypes.func.isRequired,
  onUnhover:    PropTypes.func.isRequired,
  onBookNow:    PropTypes.func.isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

// ─── EnhancedTours ────────────────────────────────────────────────────────────
const EnhancedTours = () => {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const [hoveredTour, setHoveredTour] = useState(null);

  const tours = useMemo(() => getToursByLanguage(language), [language]);

  const handleBookNow = useCallback((tour) => {
    const message = `Hello! I'm interested in booking the "${tour.title}" tour (${tour.duration}). Could you provide more information?`;
    window.open(getWhatsAppUrl(message), "_blank");
  }, []);

  const handleViewDetails = useCallback(
    (tour) => {
      navigate(`/tour/${tour.slug}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [navigate]
  );

  const handleHover   = useCallback((id) => setHoveredTour(id), []);
  const handleUnhover = useCallback(() => setHoveredTour(null), []);

  return (
    <section
      id="tours"
      className="pt-20 py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("tours.section.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("tours.section.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              isHovered={hoveredTour === tour.id}
              onHover={handleHover}
              onUnhover={handleUnhover}
              onBookNow={handleBookNow}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* Custom Tour CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-3">
            {t("tours.custom.title")}
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            {t("tours.custom.description")}
          </p>
          <a
            href={getWhatsAppUrl(
              "Hello! I'm interested in creating a custom tour experience."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors duration-200 shadow-lg"
          >
            <FaWhatsapp className="w-5 h-5" />
            {t("tours.custom.cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTours;
