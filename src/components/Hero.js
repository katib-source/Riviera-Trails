import React, { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import { getWhatsAppUrl } from "../config/constants";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import OceanCanvas from "./experience/OceanCanvas";
import Counter from "./experience/Counter";

const Hero = () => {
  const { t } = useLanguage();
  const rootRef = useRef(null);

  const whatsappUrl = getWhatsAppUrl(
    "Hello! I'm interested in your French Riviera tours. Could you please provide more information?"
  );

  // Cinematic intro: the seascape settles, then copy rises line by line.
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 24, opacity: 0, duration: 0.9, delay: 0.35 })
        .from(
          ".hero-title-line > span",
          { yPercent: 115, duration: 1.1, stagger: 0.12, ease: "power4.out" },
          "-=0.5"
        )
        .from(".hero-rule", { scaleX: 0, duration: 1, ease: "power3.inOut" }, "-=0.7")
        .from(".hero-desc", { y: 22, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-cta", { y: 22, opacity: 0, duration: 0.7, stagger: 0.12 }, "-=0.5")
        .from(".hero-stat", { y: 26, opacity: 0, duration: 0.7, stagger: 0.1 }, "-=0.4")
        .from(".hero-scroll", { opacity: 0, duration: 0.8 }, "-=0.3");
    }, rootRef);
    return () => ctx.revert();
  }, []);

  // Parallax the content gently as the hero scrolls away.
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const onScroll = () => {
      const y = window.scrollY;
      const layer = rootRef.current?.querySelector(".hero-content");
      if (layer && y < window.innerHeight) {
        layer.style.transform = `translateY(${y * 0.18}px)`;
        layer.style.opacity = `${Math.max(0, 1 - y / (window.innerHeight * 0.8))}`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const stats = [
    { value: 1000, suffix: "+", label: t("hero.stats.travelers") },
    { value: 7, suffix: "", label: t("hero.stats.routes") },
    { value: 5, decimals: 1, suffix: "★", label: t("hero.stats.rating") },
    { value: 3, suffix: "", label: t("hero.stats.languages") },
  ];

  return (
    <section
      ref={rootRef}
      className="hero relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-azur-ink"
    >
      {/* Living Mediterranean seascape (WebGL) */}
      <OceanCanvas />

      {/* Legibility scrims */}
      <div className="absolute inset-0 bg-gradient-to-b from-azur-ink/55 via-transparent to-azur-ink/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-azur-ink/45 via-transparent to-transparent" />

      {/* Content */}
      <div className="hero-content relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        <p className="hero-eyebrow mb-6 text-xs font-semibold uppercase tracking-ultra text-gold-light sm:text-sm">
          {t("hero.eyebrow")}
        </p>

        <h1 className="font-display font-light leading-[0.92] tracking-tight">
          <span className="hero-title-line reveal-line text-[18vw] sm:text-[15vw] md:text-[11rem] lg:text-[13rem]">
            <span>Azur</span>
          </span>
          <span className="hero-title-line reveal-line text-[18vw] italic text-gradient-gold sm:text-[15vw] md:text-[11rem] lg:text-[13rem]">
            <span>Escape</span>
          </span>
        </h1>

        <div className="hero-rule hairline mx-auto mt-6 mb-7 h-px w-40 origin-center" />

        <p className="hero-desc mx-auto mb-10 max-w-2xl text-balance text-base font-light leading-relaxed text-white/80 sm:text-lg">
          {t("hero.subtitle")}. {t("hero.description")}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#tours"
            className="hero-cta btn-gold inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest2 sm:w-auto"
          >
            {t("hero.ctaButton")}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta btn-outline-light inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest2 sm:w-auto"
          >
            <FaWhatsapp className="h-4 w-4" />
            {t("hero.ctaWhatsapp")}
          </a>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-y-8 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="hero-stat text-center">
              <div className="font-display text-3xl text-gold-light sm:text-4xl">
                <Counter value={s.value} decimals={s.decimals || 0} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-[11px] font-medium uppercase tracking-widest2 text-white/55">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#tours"
        className="hero-scroll absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70 transition-colors hover:text-gold"
        aria-label={t("hero.scrollCue")}
      >
        <span className="text-[10px] font-medium uppercase tracking-ultra">
          {t("hero.scrollCue")}
        </span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/40 p-1">
          <FiArrowDown className="h-3 w-3 animate-scroll-cue" />
        </span>
      </a>
    </section>
  );
};

export default Hero;
