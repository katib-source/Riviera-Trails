import React from "react";
import PropTypes from "prop-types";
import { Clock, Calendar, Users, MapPin } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const TourInfoGrid = ({ tour }) => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {t("tourDetails.info")}
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
          <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-600 font-semibold uppercase">
              {t("tourDetails.duration")}
            </p>
            <p className="text-lg font-bold text-gray-900">{tour.duration}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
          <Calendar className="w-6 h-6 text-green-600 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-600 font-semibold uppercase">
              {t("tourDetails.departure")}
            </p>
            <p className="text-lg font-bold text-gray-900">{tour.departure}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
          <Users className="w-6 h-6 text-purple-600 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-600 font-semibold uppercase">
              {t("tourDetails.frequency")}
            </p>
            <p className="text-lg font-bold text-gray-900">{tour.frequency}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-red-50 rounded-lg">
          <MapPin className="w-6 h-6 text-red-600 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-600 font-semibold uppercase">
              {t("tourDetails.stops")}
            </p>
            <p className="text-lg font-bold text-gray-900">
              {tour.stops.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

TourInfoGrid.propTypes = {
  tour: PropTypes.shape({
    duration:  PropTypes.string.isRequired,
    departure: PropTypes.string.isRequired,
    frequency: PropTypes.string.isRequired,
    stops:     PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default TourInfoGrid;
