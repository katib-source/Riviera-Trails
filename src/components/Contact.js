import React, { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  FiMail,
  FiMapPin,
  FiInstagram,
  FiFacebook,
  FiStar,
} from "react-icons/fi";
import { FaWhatsapp, FaGoogle } from "react-icons/fa";
import { EMAIL_ADDRESS, getWhatsAppUrl } from "../config/constants";
import { gsap, prefersReducedMotion } from "../lib/gsap";

const Contact = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  const whatsappUrl = getWhatsAppUrl(
    "Hello! I'd like to book a tour or get more information about your French Riviera experiences."
  );

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const channels = [
    {
      href: whatsappUrl,
      external: true,
      icon: <FaWhatsapp className="h-5 w-5 text-white" />,
      iconBg: "bg-[#25D366]",
      title: t("contactSection.whatsappTitle"),
      desc: t("contactSection.whatsappDesc"),
      value: "+33 7 58 78 16 78",
      valueClass: "text-teal-deep",
    },
    {
      href: `mailto:${EMAIL_ADDRESS}`,
      external: false,
      icon: <FiMail className="h-5 w-5 text-white" />,
      iconBg: "bg-azur-sea",
      title: t("contactSection.emailTitle"),
      desc: t("contactSection.emailDesc"),
      value: EMAIL_ADDRESS,
      valueClass: "text-azur-sea",
    },
    {
      href: null,
      icon: <FiMapPin className="h-5 w-5 text-white" />,
      iconBg: "bg-gold-deep",
      title: t("contactSection.basedIn"),
      desc: t("contactSection.basedInDesc"),
      value: "Nice, Côte d'Azur, France",
      valueClass: "text-azur-deep",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-sand-warm py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="contact-reveal mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-ultra text-gold-deep">
            03 — {t("nav.contact")}
          </p>
          <h2 className="font-display text-4xl font-light leading-tight text-azur-deep sm:text-6xl">
            {t("contactSection.title")}
          </h2>
          <div className="hairline mx-auto my-7 h-px w-24" />
          <p className="text-lg leading-relaxed text-azur-deep/65">
            {t("contactSection.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Channels */}
          <div className="contact-reveal">
            <h3 className="mb-7 font-display text-2xl text-azur-deep">
              {t("contactSection.getInTouch")}
            </h3>

            <div className="space-y-4">
              {channels.map((c, i) => {
                const inner = (
                  <>
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${c.iconBg}`}
                    >
                      {c.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-semibold text-azur-deep sm:text-base">
                        {c.title}
                      </h4>
                      <p className="text-xs text-azur-deep/55 sm:text-sm">{c.desc}</p>
                      <p className={`break-all text-sm font-semibold sm:text-base ${c.valueClass}`}>
                        {c.value}
                      </p>
                    </div>
                  </>
                );
                const cls =
                  "flex items-center gap-4 rounded-2xl border border-azur-deep/10 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-soft";
                return c.href ? (
                  <a
                    key={i}
                    href={c.href}
                    {...(c.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={cls}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={i} className={cls}>
                    {inner}
                  </div>
                );
              })}
            </div>

            {/* Social */}
            <div className="mt-8">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-azur-deep/70">
                {t("contactSection.followAdventures")}
              </h4>
              <div className="flex gap-3">
                {[
                  { href: "https://instagram.com/rivieratrails", icon: <FiInstagram className="h-5 w-5" /> },
                  { href: "https://www.facebook.com/azurescape", icon: <FiFacebook className="h-5 w-5" /> },
                  { href: "https://g.page/r/rivieratrails", icon: <FaGoogle className="h-5 w-5" /> },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-azur-deep/15 bg-white text-azur-deep transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-azur-deep hover:text-gold"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map + CTA */}
          <div className="contact-reveal">
            <h3 className="mb-7 font-display text-2xl text-azur-deep">
              {t("contactSection.tourAreas")}
            </h3>
            <div className="h-64 overflow-hidden rounded-3xl shadow-lift ring-1 ring-azur-deep/10 sm:h-80 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92326.68831761793!2d7.189953127353686!3d43.71628097107258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdc26f996b7715%3A0x40819a5fd979270!2sNice%2C%20France!5e0!3m2!1sen!2sus!4v1703597852541!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="French Riviera Map"
              />
            </div>

            <div className="relative mt-6 overflow-hidden rounded-3xl bg-azur-deep p-6 text-white shadow-lift sm:p-7">
              <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_85%_15%,rgba(231,180,115,0.4),transparent_55%)]" />
              <div className="relative">
                <h4 className="font-display text-xl">{t("contactSection.readyToBook")}</h4>
                <p className="mb-4 mt-1 text-sm text-white/75">
                  {t("contactSection.readyToBookDesc")}
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-widest2"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  {t("contactSection.bookNowWhatsapp")}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust */}
        <div className="contact-reveal mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {[
            t("contactSection.trustLicensed"),
            t("contactSection.trustInsured"),
            t("contactSection.trustCovid"),
            t("contactSection.trustSmallGroup"),
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-azur-deep/70">
              <FiStar className="h-4 w-4 text-gold" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
