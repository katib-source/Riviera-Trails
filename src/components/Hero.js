import React, { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
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
        .from(".hero-stat", { y: 26, opacity: 0, duration: 0.7, stagger: 0.1 }, "-=0.4");
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

      {/* Legibility scrims — strong vertical wash plus a dark halo centred on
          the text so the bright sunset horizon never washes the copy out. */}
      <div className="absolute inset-0 bg-gradient-to-b from-azur-ink/80 via-azur-ink/40 to-azur-ink/95" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 95% 70% at 50% 44%, rgba(4,16,31,0.82), rgba(4,16,31,0.25) 60%, transparent 78%)",
        }}
      />

      {/* Content */}
      <div className="hero-content relative z-10 mx-auto max-w-5xl px-6 pt-24 pb-10 text-center text-white sm:py-0">
        <p className="hero-eyebrow mb-4 text-[10px] font-semibold uppercase tracking-widest2 text-gold-light sm:mb-6 sm:text-sm sm:tracking-ultra">
          {t("hero.eyebrow")}
        </p>

        <h1 className="text-shadow-hero font-display font-light leading-[0.9] tracking-tight">
          <span className="hero-title-line reveal-line text-[min(16vw,14vh)]">
            <span>Azur</span>
          </span>
          <span className="hero-title-line reveal-line text-[min(16vw,14vh)] italic text-gold-light">
            <span>Escape</span>
          </span>
        </h1>

        <div className="hero-rule hairline mx-auto mb-5 mt-5 h-px w-28 origin-center sm:mb-7 sm:mt-6 sm:w-40" />

        <p className="hero-desc text-shadow-hero mx-auto mb-8 max-w-2xl text-balance text-[15px] font-light leading-relaxed text-white/90 sm:mb-10 sm:text-lg">
          {t("hero.subtitle")}.
          <span className="hidden sm:inline"> {t("hero.description")}</span>
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#tours"
            className="hero-cta btn-gold inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-widest2 sm:w-auto sm:py-4"
          >
            {t("hero.ctaButton")}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta btn-outline-light inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-widest2 sm:w-auto sm:py-4"
          >
            <FaWhatsapp className="h-4 w-4" />
            {t("hero.ctaWhatsapp")}
          </a>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-x-4 gap-y-6 sm:mt-16 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="hero-stat text-center">
              <div className="font-display text-2xl text-gold-light sm:text-4xl">
                <Counter value={s.value} decimals={s.decimals || 0} suffix={s.suffix} immediate />
              </div>
              <div className="mt-1.5 text-[10px] font-medium uppercase tracking-widest2 text-white/55 sm:mt-2 sm:text-[11px]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
