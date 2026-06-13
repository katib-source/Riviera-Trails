import React from "react";
import PropTypes from "prop-types";
import { ChevronLeft, Clock, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import TourBadges from "../TourBadges";

const TourHeroSection = ({ tour, onBack }) => {
  const { t } = useLanguage();

  return (
    <div className="relative h-[78vh] min-h-[520px] w-full overflow-hidden bg-azur-ink">
      <img
        src={tour.image}
        alt={tour.title}
        className="h-full w-full object-cover"
        fetchpriority="high"
      />
      {/* Cinematic legibility gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-azur-ink via-azur-ink/55 to-azur-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-azur-ink/50 to-transparent" />

      {/* Back button */}
      <button
        onClick={onBack}
        data-cursor="hover"
        className="glass absolute left-4 top-6 z-10 flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold uppercase tracking-widest2 text-white transition-colors hover:border-gold/60 sm:left-6"
      >
        <ChevronLeft className="h-4 w-4" />
        {t("tourDetails.back")}
      </button>

      {/* Badges */}
      <div className="absolute right-4 top-6 z-10 flex flex-col items-end gap-2 sm:right-6">
        <TourBadges tour={tour} size="md" />
      </div>

      {/* Title block */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-ultra text-gold-light">
            <MapPin className="h-4 w-4" />
            {tour.stops.join("  ·  ")}
          </p>
          <h1 className="text-shadow-hero font-display text-4xl font-light leading-[1.02] text-white sm:text-6xl md:text-7xl">
            {tour.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {tour.description}
          </p>

          {/* Key facts strip */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/90">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold-light" />
              {tour.duration}
            </span>
            <span className="hidden h-4 w-px bg-white/25 sm:block" />
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gold-light" />
              {tour.departure}
            </span>
            <span className="hidden h-4 w-px bg-white/25 sm:block" />
            <span className="flex items-baseline gap-1.5">
              <span className="text-xs uppercase tracking-wider text-white/55">
                {tour.isPrivate
                  ? t("tours.card.totalPrice")
                  : t("tours.card.startingFrom")}
              </span>
              <span className="font-display text-xl text-gold-light">
                {tour.currency}
                {tour.pricePerPax}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

TourHeroSection.propTypes = {
  tour: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    departure: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    pricePerPax: PropTypes.number.isRequired,
    stops: PropTypes.arrayOf(PropTypes.string).isRequired,
    isPrivate: PropTypes.bool,
    topPick: PropTypes.bool,
    popular: PropTypes.bool,
  }).isRequired,
  onBack: PropTypes.func.isRequired,
};

export default TourHeroSection;
