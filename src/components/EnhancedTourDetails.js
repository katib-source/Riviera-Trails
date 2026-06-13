import React, { useState, useEffect, useRef } from "react";
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
import { gsap, prefersReducedMotion } from "../lib/gsap";

// ─── Local helpers ────────────────────────────────────────────────────────────

const TourNotFound = () => {
  const { t } = useLanguage();
  return (
    <div className="flex min-h-screen items-center justify-center bg-sand px-6 pt-16">
      <div className="max-w-md text-center">
        <div className="mb-6 text-6xl">🗺️</div>
        <h1 className="mb-4 font-display text-4xl font-light text-azur-deep">
          {t("tourDetails.notFound.title")}
        </h1>
        <p className="mb-8 text-azur-deep/65">
          {t("tourDetails.notFound.description")}
        </p>
        <Link
          to="/"
          state={{ scrollTo: "tours" }}
          className="btn-gold inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-widest2"
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
    <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-azur-deep to-azur-night p-7 text-white">
      <div className="flex items-start gap-3">
        <Info className="mt-1 h-6 w-6 shrink-0 text-gold-light" />
        <div>
          <h3 className="mb-3 font-display text-xl">
            {t("tourDetails.privateBenefits.title")}
          </h3>
          <ul className="space-y-2.5 text-white/80">
            {[
              "tourDetails.privateBenefits.flexible",
              "tourDetails.privateBenefits.personalGuide",
              "tourDetails.privateBenefits.pickup",
              "tourDetails.privateBenefits.vehicle",
            ].map((key) => (
              <li key={key} className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 shrink-0 text-gold-light" />
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
  const contentRef = useRef(null);

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

  // Reveal the content blocks as they enter the viewport.
  useEffect(() => {
    if (!tour || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(".tour-reveal", {
        scrollTrigger: { trigger: contentRef.current, start: "top 85%" },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, contentRef);
    return () => ctx.revert();
  }, [tour]);

  if (notFound) return <TourNotFound />;

  if (!tour) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-sand">
        <div className="h-14 w-14 animate-spin rounded-full border-2 border-azur-deep/15 border-t-gold" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sand pb-28 lg:pb-12">
      <SEOHead {...seoConfigs.tourDetails(tour)} />

      <TourHeroSection tour={tour} onBack={() => navigate(-1)} />

      <div ref={contentRef} className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="tour-reveal">
              <TourInfoGrid tour={tour} />
            </div>
            <div className="tour-reveal">
              <TourStops tour={tour} />
            </div>
            <div className="tour-reveal">
              <TourHighlights tour={tour} />
            </div>
            {tour.isPrivate && (
              <div className="tour-reveal">
                <PrivateTourBenefits />
              </div>
            )}
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
