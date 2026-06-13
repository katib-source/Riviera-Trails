import React, { useEffect, useRef } from "react";
import {
  FiMapPin,
  FiHeart,
  FiUsers,
  FiStar,
  FiShield,
  FiPhone,
  FiCheckCircle,
  FiGlobe,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { testimonialsData } from "../data/testimonialsData";
import { PHONE_NUMBER, getWhatsAppUrl } from "../config/constants";
import { useLanguage } from "../context/LanguageContext";
import { gsap, prefersReducedMotion } from "../lib/gsap";

const getCountryFlag = (country) => {
  const flags = {
    "United States": "🇺🇸",
    USA: "🇺🇸",
    Canada: "🇨🇦",
    Australia: "🇦🇺",
    "United Kingdom": "🇬🇧",
    UK: "🇬🇧",
    Germany: "🇩🇪",
    France: "🇫🇷",
    Spain: "🇪🇸",
    Italy: "🇮🇹",
    Japan: "🇯🇵",
    Singapore: "🇸🇬",
    UAE: "🇦🇪",
    Ireland: "🇮🇪",
    Mexico: "🇲🇽",
  };
  return flags[country] || "🌍";
};

const AboutPreviewSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  const trustFeatures = [
    {
      icon: <FiShield className="h-6 w-6" />,
      title: t("aboutPreview.trustFeatures.licensedTitle"),
      description: t("aboutPreview.trustFeatures.licensedDesc"),
    },
    {
      icon: <FiUsers className="h-6 w-6" />,
      title: t("aboutPreview.trustFeatures.smallGroupsTitle"),
      description: t("aboutPreview.trustFeatures.smallGroupsDesc"),
    },
    {
      icon: <FiHeart className="h-6 w-6" />,
      title: t("aboutPreview.trustFeatures.localTitle"),
      description: t("aboutPreview.trustFeatures.localDesc"),
    },
    {
      icon: <FiGlobe className="h-6 w-6" />,
      title: t("aboutPreview.trustFeatures.multilingualTitle"),
      description: t("aboutPreview.trustFeatures.multilingualDesc"),
    },
  ];

  const whatsappUrl = getWhatsAppUrl(
    "Hello! I'm interested in your French Riviera tours."
  );

  const marqueeTestimonials = [...testimonialsData, ...testimonialsData];

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        y: 44,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });
      // Parallax the photo collage.
      gsap.to(".about-photo-a", {
        scrollTrigger: {
          trigger: ".about-collage",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: -40,
      });
      gsap.to(".about-photo-b", {
        scrollTrigger: {
          trigger: ".about-collage",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: 40,
      });
      gsap.from(".trust-card", {
        scrollTrigger: { trigger: ".trust-grid", start: "top 82%" },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-azur-night py-24 text-white sm:py-32"
    >
      {/* atmospheric glows */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-[28rem] w-[28rem] -translate-x-1/3 rounded-full bg-azur-sea/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[26rem] w-[26rem] translate-x-1/4 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Story split */}
        <div className="mb-24 grid items-center gap-14 lg:grid-cols-2">
          {/* Left: copy */}
          <div className="space-y-6">
            <div className="about-reveal inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest2 text-gold-light">
              <FiMapPin className="h-4 w-4" />
              {t("aboutPreview.badge")}
            </div>

            <p className="about-reveal text-xs font-semibold uppercase tracking-ultra text-azur-mist/70">
              02 — {t("nav.about")}
            </p>

            <h2 className="about-reveal font-display text-4xl font-light leading-[1.05] sm:text-5xl">
              {t("aboutPreview.titleLine1")}{" "}
              <span className="italic text-gradient-gold">
                {t("aboutPreview.titleHighlight")}
              </span>
            </h2>

            <p className="about-reveal max-w-xl text-lg leading-relaxed text-white/70">
              {t("aboutPreview.description")}
            </p>

            <div className="about-reveal flex flex-wrap gap-3 pt-2">
              {[
                { icon: <FiStar className="h-4 w-4 text-gold" />, label: t("aboutPreview.rating") },
                { icon: <FiUsers className="h-4 w-4 text-teal-sea" />, label: t("aboutPreview.happyTravelers") },
                { icon: <FiGlobe className="h-4 w-4 text-azur-mist" />, label: t("aboutPreview.countries") },
              ].map((chip, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/85"
                >
                  {chip.icon}
                  {chip.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: photo collage */}
          <div className="about-collage about-reveal relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="about-photo-a space-y-4">
                <img
                  src="/images/ppl/w1.jpeg"
                  alt="Group tour in Monaco"
                  className="h-60 w-full rounded-3xl object-cover shadow-lift ring-1 ring-white/10"
                  loading="lazy"
                />
                <img
                  src="/images/ppl/w2.jpeg"
                  alt="Scenic French Riviera landscape"
                  className="h-72 w-full rounded-3xl object-cover shadow-lift ring-1 ring-white/10"
                  loading="lazy"
                />
              </div>
              <div className="about-photo-b space-y-4 pt-10">
                <img
                  src="/images/ppl/w3.jpeg"
                  alt="Happy clients at Èze Village"
                  className="h-72 w-full rounded-3xl object-cover shadow-lift ring-1 ring-white/10"
                  loading="lazy"
                />
                <img
                  src="/images/ppl/w4.jpeg"
                  alt="Family enjoying Saint-Tropez"
                  className="h-60 w-full rounded-3xl object-cover shadow-lift ring-1 ring-white/10"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Floating stat */}
            <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-azur-ink/80 p-4 shadow-lift backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-sea/20">
                <FiCheckCircle className="h-6 w-6 text-teal-sea" />
              </div>
              <div>
                <div className="font-display text-2xl text-white">100%</div>
                <div className="text-xs uppercase tracking-wider text-white/60">
                  {t("aboutPreview.recommendation")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust features */}
        <div className="mb-24">
          <h3 className="about-reveal mb-10 text-center font-display text-3xl font-light">
            {t("aboutPreview.whyChoose")}
          </h3>
          <div className="trust-grid grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {trustFeatures.map((feature, index) => (
              <div
                key={index}
                className="trust-card group rounded-3xl border border-white/10 bg-white/5 p-7 transition-colors duration-300 hover:border-gold/40 hover:bg-white/[0.08]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-azur-sea to-teal-sea text-white transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h4 className="mb-2 font-semibold text-white">{feature.title}</h4>
                <p className="text-sm leading-relaxed text-white/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials marquee */}
        <div className="about-reveal mb-24">
          <div className="mb-10 text-center">
            <h3 className="font-display text-3xl font-light sm:text-4xl">
              {t("aboutPreview.whatTravelersSay")}
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-white/60">
              {t("aboutPreview.travelersSubtitle")}
            </p>
          </div>

          <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]">
              {marqueeTestimonials.map((testimonial, index) => (
                <figure
                  key={index}
                  className="w-[340px] shrink-0 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
                >
                  <div className="mb-3 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="h-4 w-4 fill-current text-gold" />
                    ))}
                  </div>
                  <blockquote className="mb-5 text-sm italic leading-relaxed text-white/80">
                    “{testimonial.text.length > 150
                      ? testimonial.text.substring(0, 150) + "…"
                      : testimonial.text}”
                  </blockquote>
                  <figcaption className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-azur-sea to-teal-sea text-sm font-semibold text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-white/55">
                        <span>{getCountryFlag(testimonial.country)}</span>
                        <span>{testimonial.country}</span>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* Adventure CTA */}
        <div className="about-reveal relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-azur-sea/30 via-azur-deep to-azur-night p-10 text-center sm:p-14">
          <h3 className="font-display text-3xl font-light sm:text-4xl">
            {t("aboutPreview.adventureTitle")}
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            {t("aboutPreview.adventureSubtitle")}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest2"
            >
              <FaWhatsapp className="h-5 w-5" />
              {t("aboutPreview.ctaWhatsapp")}
            </a>
            <a
              href={`tel:+${PHONE_NUMBER}`}
              className="btn-outline-light inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest2"
            >
              <FiPhone className="h-5 w-5" />
              {t("aboutPreview.ctaPhone")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;
