import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiMapPin,
  FiClock,
  FiAward,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import WhatsAppBooking from "./WhatsAppBooking";

const TourCard = ({ tour, onBooking }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleCardClick = () => {
    navigate(`/tour/${tour.id}`);
    // Scroll to top when navigating to tour details
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 relative cursor-pointer group max-w-sm border border-sand-beige/30"
      onClick={handleCardClick}
    >
      {tour.topPick && (
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-gradient-to-r from-sunset-orange to-orange-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1 z-10 shadow-lg">
          <FiAward className="w-3 h-3 sm:w-4 sm:h-4" />
          {t("tours.topPick")}
        </div>
      )}

      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

        {/* View Details Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-riviera-blue/90 via-riviera-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <div className="bg-white/95 backdrop-blur-sm text-riviera-blue px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold flex items-center gap-2 text-sm sm:text-base shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span>{t("tours.viewDetails")}</span>
            <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3 text-xs sm:text-sm">
          <FiMapPin className="w-4 h-4 text-mediterranean-teal flex-shrink-0" />
          <span className="text-gray-600 truncate font-medium">
            {tour.city}
          </span>
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          <FiClock className="w-4 h-4 text-mediterranean-teal flex-shrink-0" />
          <span className="text-gray-600 truncate">{tour.duration}</span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 line-clamp-2 leading-tight">
          {tour.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed line-clamp-3">
          {tour.description}
        </p>

        {/* Tour Highlights */}
        {tour.highlights && (
          <div className="mb-5">
            <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-riviera-blue to-mediterranean-teal rounded-full"></span>
              {t("tours.highlights")}:
            </h4>
            <ul className="space-y-1">
              {tour.highlights.slice(0, 3).map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-xs sm:text-sm text-gray-600"
                >
                  <FiCheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-1">{highlight}</span>
                </li>
              ))}
              {tour.highlights.length > 3 && (
                <li className="text-xs text-mediterranean-teal italic font-medium">
                  +{tour.highlights.length - 3} more highlights...
                </li>
              )}
            </ul>
          </div>
        )}

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-riviera-blue to-mediterranean-teal bg-clip-text text-transparent">
                {tour.price}
              </span>
              <span className="text-xs sm:text-sm text-gray-500 font-medium">
                {tour.priceType}
              </span>
            </div>
          </div>

          {/* WhatsApp Booking Button */}
          <div className="mt-2" onClick={(e) => e.stopPropagation()}>
            <WhatsAppBooking tour={tour} className="w-full text-sm py-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
