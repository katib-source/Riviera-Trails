import React from "react";
import PropTypes from "prop-types";
import { MapPin } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const TourStops = ({ tour }) => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <MapPin className="w-6 h-6 text-red-600" />
        {t("tourDetails.tourStops")}
      </h2>
      <div className="space-y-2">
        {tour.stops.map((stop, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
              {index + 1}
            </div>
            <p className="text-gray-800 font-medium">{stop}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

TourStops.propTypes = {
  tour: PropTypes.shape({
    stops: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default TourStops;
