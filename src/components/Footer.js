import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FaWhatsapp, FaFacebook, FaGoogle } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { EMAIL_ADDRESS, getWhatsAppUrl } from "../config/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();
  const { language, t } = useLanguage();

  // Fire after the route renders so the target section is in the DOM
  useEffect(() => {
    if (location.state?.scrollTo) {
      document
        .getElementById(location.state.scrollTo)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: t("footerSection.ourTours"), action: () => scrollToSection("tours") },
    { label: t("footerSection.aboutUs"), action: () => scrollToSection("about") },
    { label: t("footerSection.contact"), action: () => scrollToSection("contact") },
    { label: t("footerSection.faq"), action: () => navigate("/faq") },
    {
      label: t("footerSection.privacyPolicy"),
      action: () =>
        navigate(language === "fr" ? "/privacy-policy-fr" : "/privacy-policy"),
    },
  ];

  const socials = [
    { href: getWhatsAppUrl(), icon: <FaWhatsapp className="h-5 w-5" />, label: "WhatsApp" },
    { href: "https://www.facebook.com/azurescape", icon: <FaFacebook className="h-5 w-5" />, label: "Facebook" },
    { href: `mailto:${EMAIL_ADDRESS}`, icon: <FaGoogle className="h-5 w-5" />, label: "Email" },
  ];

  return (
    <footer className="relative overflow-hidden bg-azur-ink text-white">
      {/* top hairline */}
      <div className="hairline h-px w-full" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-azur-sea/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-medium">Azur</span>
              <span className="font-display text-3xl font-light italic text-gradient-gold">
                Escape
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              {t("footerSection.brandDesc")}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  {...(s.label !== "Email"
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:text-gold"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest2 text-gold-light">
              {t("footerSection.quickLinks")}
            </h4>
            <ul className="space-y-2.5 text-sm text-white/65">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={link.action}
                    className="link-underline transition-colors hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest2 text-gold-light">
              {t("footerSection.contactInfo")}
            </h4>
            <div className="space-y-2.5 text-sm text-white/65">
              <p>📍 Nice, French Riviera</p>
              <p className="break-all">📱 +33 7 58 78 16 78</p>
              <p className="break-all">📧 {EMAIL_ADDRESS}</p>
              <p>🌐 {t("footerSection.languages")}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-white/50">
          <p className="flex flex-wrap items-center justify-center gap-1.5 text-sm">
            © {currentYear} Azur Escape. {t("footerSection.madeWith")}
            <FiHeart className="h-4 w-4 text-coral" />
            {t("footerSection.forTravelers")}
          </p>
          <p className="mt-2 text-xs">{t("footerSection.licensedLine")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
