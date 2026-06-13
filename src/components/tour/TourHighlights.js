import React from "react";
import PropTypes from "prop-types";
import { Sparkles, Check } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const TourHighlights = ({ tour }) => {
  const { t } = useLanguage();

  return (
    <div className="rounded-3xl border border-azur-deep/10 bg-white p-7 shadow-soft">
      <h2 className="mb-6 flex items-center gap-2 font-display text-2xl text-azur-deep">
        <Sparkles className="h-6 w-6 text-gold-deep" />
        {t("tourDetails.highlights")}
      </h2>
      <ul className="grid gap-3 sm:grid-cols-2">
        {tour.highlights.map((highlight, index) => (
          <li
            key={index}
            className="flex items-start gap-3 rounded-2xl border border-azur-deep/10 bg-sand-warm p-4 transition-colors hover:border-gold/40"
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-sea/15 text-teal-deep">
              <Check className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm leading-relaxed text-azur-deep/80">
              {highlight}
            </span>
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
