import React from "react";
import PropTypes from "prop-types";
import { ChevronLeft } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import TourBadges from "../TourBadges";

const TourHeroSection = ({ tour, onBack }) => {
  const { t } = useLanguage();

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden">
      <img
        src={tour.image}
        alt={tour.title}
        className="w-full h-full object-cover"
        fetchpriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <button
        onClick={onBack}
        className="absolute top-6 left-6 bg-white/90 hover:bg-white text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 font-semibold transition-colors shadow-lg"
      >
        <ChevronLeft className="w-5 h-5" />
        {t("tourDetails.back")}
      </button>

      <div className="absolute top-6 right-6 flex flex-col gap-2">
        <TourBadges tour={tour} size="md" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {tour.title}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">{tour.description}</p>
        </div>
      </div>
    </div>
  );
};

TourHeroSection.propTypes = {
  tour: PropTypes.shape({
    image:       PropTypes.string.isRequired,
    title:       PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    topPick:     PropTypes.bool,
    popular:     PropTypes.bool,
    isPrivate:   PropTypes.bool,
  }).isRequired,
  onBack: PropTypes.func.isRequired,
};

export default TourHeroSection;
