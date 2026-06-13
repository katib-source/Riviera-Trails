import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Check, Info } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { getTourBySlug } from "../data/newToursData";
import SEOHead, { seoConfigs } from "./SEOHead";
import useTourBooking from "../hooks/useTourBooking";
import TourHeroSection from "./tour/TourHeroSection";
import TourInfoGrid from "./tour/TourInfoGrid";
import TourStops from "./tour/TourStops";
import TourHighlights from "./tour/TourHighlights";
import BookingSidebar from "./tour/BookingSidebar";

// ─── Local helpers ────────────────────────────────────────────────────────────

const TourNotFound = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-16">
      <div className="text-center max-w-md px-6">
        <div className="text-6xl mb-6">🗺️</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {t("tourDetails.notFound.title")}
        </h1>
        <p className="text-gray-600 mb-8">
          {t("tourDetails.notFound.description")}
        </p>
        <Link
          to="/"
          state={{ scrollTo: "tours" }}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          {t("tourDetails.notFound.cta")}
        </Link>
      </div>
    </div>
  );
};

const PrivateTourBenefits = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-indigo-200">
      <div className="flex items-start gap-3">
        <Info className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-lg font-bold text-indigo-900 mb-2">
            {t("tourDetails.privateBenefits.title")}
          </h3>
          <ul className="space-y-2 text-indigo-800">
            {[
              "tourDetails.privateBenefits.flexible",
              "tourDetails.privateBenefits.personalGuide",
              "tourDetails.privateBenefits.pickup",
              "tourDetails.privateBenefits.vehicle",
            ].map((key) => (
              <li key={key} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-indigo-600" />
                {t(key)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// ─── EnhancedTourDetails ──────────────────────────────────────────────────────
const EnhancedTourDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [tour, setTour] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const {
    groupSize,
    setGroupSize,
    totalPrice,
    hasDiscount,
    discountAmount,
    originalTotal,
    handleBookNow,
  } = useTourBooking(tour);

  useEffect(() => {
    const tourData = getTourBySlug(slug, language);
    if (tourData) {
      setTour(tourData);
      setNotFound(false);
    } else {
      setNotFound(true);
    }
  }, [slug, language]);

  if (notFound) return <TourNotFound />;

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-20 lg:pb-0">
      <SEOHead {...seoConfigs.tourDetails(tour)} />

      <TourHeroSection tour={tour} onBack={() => navigate(-1)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <TourInfoGrid tour={tour} />
            <TourStops tour={tour} />
            <TourHighlights tour={tour} />
            {tour.isPrivate && <PrivateTourBenefits />}
          </div>
          <div className="lg:col-span-1">
            <BookingSidebar
              tour={tour}
              groupSize={groupSize}
              setGroupSize={setGroupSize}
              totalPrice={totalPrice}
              hasDiscount={hasDiscount}
              discountAmount={discountAmount}
              originalTotal={originalTotal}
              handleBookNow={handleBookNow}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedTourDetails;
