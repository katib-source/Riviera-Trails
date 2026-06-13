import React from "react";
import PropTypes from "prop-types";
import { MapPin } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const TourStops = ({ tour }) => {
  const { t } = useLanguage();

  return (
    <div className="rounded-3xl border border-azur-deep/10 bg-white p-7 shadow-soft">
      <h2 className="mb-6 flex items-center gap-2 font-display text-2xl text-azur-deep">
        <MapPin className="h-6 w-6 text-teal-sea" />
        {t("tourDetails.tourStops")}
      </h2>

      {/* Vertical itinerary timeline */}
      <ol className="relative space-y-1 pl-2">
        {tour.stops.map((stop, index) => (
          <li key={index} className="relative flex items-center gap-4 pb-5 last:pb-0">
            {/* connector line */}
            {index !== tour.stops.length - 1 && (
              <span className="absolute left-[18px] top-9 h-[calc(100%-18px)] w-px bg-gradient-to-b from-azur-sea/50 to-teal-sea/20" />
            )}
            <span className="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-azur-sea to-teal-sea font-display text-sm font-semibold text-white shadow-soft">
              {index + 1}
            </span>
            <span className="font-medium text-azur-deep">{stop}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

TourStops.propTypes = {
  tour: PropTypes.shape({
    stops: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default TourStops;
