import React, { useCallback, useMemo, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Clock, MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { getToursByLanguage } from "../data/newToursData";
import { getWhatsAppUrl } from "../config/constants";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../lib/gsap";
import TourBadges from "./TourBadges";

// ─── TourCard ────────────────────────────────────────────────────────────────
const TourCard = React.memo(({ tour, index, onBookNow, onViewDetails }) => {
  const { t } = useLanguage();
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  // Subtle 3D tilt + image parallax that follows the pointer.
  const handleMove = (e) => {
    if (prefersReducedMotion()) return;
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg) translateY(-6px)`;
    if (imgRef.current) {
      imgRef.current.style.transform = `scale(1.08) translate(${px * -14}px, ${py * -14}px)`;
    }
  };
  const handleLeave = () => {
    const el = cardRef.current;
    if (el) el.style.transform = "perspective(900px) rotateY(0) rotateX(0) translateY(0)";
    if (imgRef.current) imgRef.current.style.transform = "scale(1) translate(0,0)";
  };

  const duration =
    tour.durationType === "half-day" ? t("tours.card.halfDay") : t("tours.card.fullDay");

  return (
    <article
      data-tour-card
      style={{ "--i": index }}
      className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-azur-deep/10 bg-white shadow-soft transition-shadow duration-500 hover:shadow-lift"
    >
      <div
        ref={cardRef}
        className="tilt-card flex h-full flex-col"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {/* Image */}
        <div
          className="relative h-64 cursor-pointer overflow-hidden"
          onClick={() => onViewDetails(tour)}
          data-cursor="hover"
        >
          <img
            ref={imgRef}
            src={tour.image}
            alt={tour.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out-expo will-change-transform"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-azur-ink/80 via-azur-ink/10 to-transparent" />

          {/* Badges */}
          <div className="absolute left-4 top-4 z-10 flex flex-col items-start gap-2">
            <TourBadges tour={tour} size="sm" />
          </div>

          {/* Duration chip */}
          <div className="absolute right-4 top-4 z-10 rounded-full border border-white/30 bg-azur-ink/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
            {duration}
          </div>

          {/* Route ribbon */}
          <div className="absolute inset-x-4 bottom-4 z-10 flex items-center gap-1.5 text-[12px] font-medium text-white/90">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-gold-light" />
            <span className="truncate">{tour.stops.join("  ·  ")}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-2xl font-medium leading-snug text-azur-deep">
            {tour.title}
          </h3>
          <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-azur-deep/65">
            {tour.description}
          </p>

          {/* Meta */}
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-azur-deep/75">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-teal-sea" />
              {tour.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-teal-sea" />
              {tour.departure}
            </span>
          </div>

          {/* Price + actions */}
          <div className="mt-6 flex items-end justify-between border-t border-azur-deep/10 pt-5">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest2 text-azur-deep/45">
                {tour.isPrivate ? t("tours.card.totalPrice") : t("tours.card.startingFrom")}
              </p>
              <p className="mt-1 font-display text-3xl text-azur-deep">
                {tour.currency}
                {tour.pricePerPax}
                {!tour.isPrivate && (
                  <span className="ml-1 font-sans text-sm text-azur-deep/55">
                    /{t("tours.card.person")}
                  </span>
                )}
              </p>
            </div>
            <button
              onClick={() => onViewDetails(tour)}
              className="flex items-center gap-1 text-[12px] font-bold uppercase tracking-widest2 text-azur-sea transition-colors hover:text-teal-deep"
            >
              {t("tours.card.details")}
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <button
            onClick={() => onBookNow(tour)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-azur-deep py-3.5 text-sm font-bold uppercase tracking-widest2 text-white transition-colors duration-300 hover:bg-azur-sea"
          >
            <FaWhatsapp className="h-4 w-4" />
            {t("nav.bookNow")}
          </button>
        </div>
      </div>
    </article>
  );
});

TourCard.propTypes = {
  tour: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    departure: PropTypes.string.isRequired,
    stops: PropTypes.arrayOf(PropTypes.string).isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    currency: PropTypes.string.isRequired,
    pricePerPax: PropTypes.number.isRequired,
    isPrivate: PropTypes.bool,
    durationType: PropTypes.string,
    topPick: PropTypes.bool,
    popular: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onBookNow: PropTypes.func.isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

// ─── EnhancedTours ────────────────────────────────────────────────────────────
const EnhancedTours = () => {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const sectionRef = useRef(null);

  const tours = useMemo(() => getToursByLanguage(language), [language]);

  const handleBookNow = useCallback((tour) => {
    const message = `Hello! I'm interested in booking the "${tour.title}" tour (${tour.duration}). Could you provide more information?`;
    window.open(getWhatsAppUrl(message), "_blank");
  }, []);

  const handleViewDetails = useCallback(
    (tour) => {
      navigate(`/tour/${tour.slug}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [navigate]
  );

  // Scroll-triggered staggered reveal of the header and cards.
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(".tours-head > *", {
        scrollTrigger: { trigger: ".tours-head", start: "top 80%" },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });
      gsap.from("[data-tour-card]", {
        scrollTrigger: { trigger: ".tours-grid", start: "top 78%" },
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [language]);

  return (
    <section
      id="tours"
      ref={sectionRef}
      className="relative overflow-hidden bg-sand py-24 sm:py-32"
    >
      {/* faint atmospheric accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 -translate-y-1/3 translate-x-1/3 rounded-full bg-azur-mist/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="tours-head mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-ultra text-gold-deep">
            01 — {t("tours.title")}
          </p>
          <h2 className="font-display text-4xl font-light leading-tight text-azur-deep sm:text-6xl">
            {t("tours.section.title")}
          </h2>
          <div className="hairline mx-auto my-7 h-px w-24" />
          <p className="text-lg leading-relaxed text-azur-deep/65">
            {t("tours.section.subtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="tours-grid grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour, index) => (
            <TourCard
              key={tour.id}
              tour={tour}
              index={index}
              onBookNow={handleBookNow}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* Custom Tour CTA */}
        <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-azur-deep px-8 py-14 text-center text-white shadow-lift">
          <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_20%_20%,rgba(31,143,208,0.5),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(231,180,115,0.35),transparent_55%)]" />
          <div className="relative">
            <h3 className="font-display text-3xl font-light sm:text-4xl">
              {t("tours.custom.title")}
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              {t("tours.custom.description")}
            </p>
            <a
              href={getWhatsAppUrl("Hello! I'm interested in creating a custom tour experience.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest2"
            >
              <FaWhatsapp className="h-5 w-5" />
              {t("tours.custom.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTours;
