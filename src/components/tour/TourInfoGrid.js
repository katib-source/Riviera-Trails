import React from "react";
import PropTypes from "prop-types";
import { Clock, Calendar, Repeat, MapPin } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const TourInfoGrid = ({ tour }) => {
  const { t } = useLanguage();

  const items = [
    { icon: Clock, label: t("tourDetails.duration"), value: tour.duration },
    { icon: Calendar, label: t("tourDetails.departure"), value: tour.departure },
    { icon: Repeat, label: t("tourDetails.frequency"), value: tour.frequency },
    { icon: MapPin, label: t("tourDetails.stops"), value: tour.stops.length },
  ];

  return (
    <div className="rounded-3xl border border-azur-deep/10 bg-white p-7 shadow-soft">
      <h2 className="mb-6 font-display text-2xl text-azur-deep">
        {t("tourDetails.info")}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex items-center gap-4 rounded-2xl border border-azur-deep/10 bg-sand-warm p-4"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-azur-sea to-teal-sea text-white">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest2 text-azur-deep/45">
                {label}
              </p>
              <p className="font-display text-lg text-azur-deep">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

TourInfoGrid.propTypes = {
  tour: PropTypes.shape({
    duration: PropTypes.string.isRequired,
    departure: PropTypes.string.isRequired,
    frequency: PropTypes.string.isRequired,
    stops: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default TourInfoGrid;
