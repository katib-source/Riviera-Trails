import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiMapPin,
  FiClock,
  FiAward,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

const TourCard = ({ tour, onBooking }) => {
  const navigate = useNavigate();
  const whatsappMessage = `Hello! I'm interested in booking the "${tour.title}" tour for ${tour.price} ${tour.priceType}. Could you please provide more details about availability?`;
  const whatsappUrl = `https://wa.me/33605985410?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const handleCardClick = () => {
    navigate(`/tour/${tour.id}`);
    // Scroll to top when navigating to tour details
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative cursor-pointer group"
      onClick={handleCardClick}
    >
      {tour.topPick && (
        <div className="absolute top-4 left-4 bg-sunset-orange text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 z-10">
          <FiAward className="w-4 h-4" />
          Top Pick
        </div>
      )}

      <div className="relative h-48 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        {/* View Details Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white text-riviera-blue px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
            <span>View Details</span>
            <FiArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <FiMapPin className="w-4 h-4 text-riviera-blue" />
          <span className="text-sm text-gray-600">{tour.city}</span>
          <FiClock className="w-4 h-4 text-riviera-blue ml-2" />
          <span className="text-sm text-gray-600">{tour.duration}</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {tour.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {tour.description}
        </p>

        {/* Tour Highlights */}
        {tour.highlights && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">
              Tour Highlights:
            </h4>
            <ul className="space-y-1">
              {tour.highlights.slice(0, 3).map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-xs text-gray-600"
                >
                  <FiCheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
              {tour.highlights.length > 3 && (
                <li className="text-xs text-gray-500 italic">
                  +{tour.highlights.length - 3} more stops with historical
                  details...
                </li>
              )}
            </ul>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold text-riviera-blue">
              {tour.price}
            </span>
            <span className="text-sm text-gray-500">{tour.priceType}</span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="bg-riviera-blue hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
