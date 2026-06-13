import React from "react";
import PropTypes from "prop-types";
import { Star, Check } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const TourHighlights = ({ tour }) => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Star className="w-6 h-6 text-amber-500" />
        {t("tourDetails.highlights")}
      </h2>
      <ul className="grid md:grid-cols-2 gap-3">
        {tour.highlights.map((highlight, index) => (
          <li
            key={index}
            className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

TourHighlights.propTypes = {
  tour: PropTypes.shape({
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default TourHighlights;
