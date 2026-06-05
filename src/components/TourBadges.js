import React from "react";
import PropTypes from "prop-types";
import { Award, TrendingUp, Users } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// Shared badge strip used in TourCard (size="sm") and TourHeroSection (size="md").
// Renders as a React Fragment — the caller controls the positioning container.
const TourBadges = ({ tour, size = "sm" }) => {
  const { t } = useLanguage();

  const icon    = size === "md" ? "w-4 h-4" : "w-3 h-3";
  const text    = size === "md" ? "text-sm"  : "text-xs";
  const pad     = size === "md" ? "px-4 py-2" : "px-3 py-1";
  const privKey = size === "md" ? "tours.badges.privateTour" : "tours.badges.private";

  return (
    <>
      {tour.topPick && (
        <div className={`flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white ${pad} rounded-full ${text} font-bold shadow-lg`}>
          <Award className={icon} />
          <span>{t("tours.badges.topPick")}</span>
        </div>
      )}
      {tour.popular && (
        <div className={`flex items-center gap-1 bg-red-500 text-white ${pad} rounded-full ${text} font-bold shadow-lg animate-pulse`}>
          <TrendingUp className={icon} />
          <span>{t("tours.badges.popular")}</span>
        </div>
      )}
      {tour.isPrivate && (
        <div className={`flex items-center gap-1 bg-indigo-600 text-white ${pad} rounded-full ${text} font-bold shadow-lg`}>
          <Users className={icon} />
          <span>{t(privKey)}</span>
        </div>
      )}
    </>
  );
};

TourBadges.propTypes = {
  tour: PropTypes.shape({
    topPick:   PropTypes.bool,
    popular:   PropTypes.bool,
    isPrivate: PropTypes.bool,
  }).isRequired,
  size: PropTypes.oneOf(["sm", "md"]),
};

export default TourBadges;
