import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { getWhatsAppUrl } from "../config/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  // Smart scroll detection with auto-hide (with subtle delay for smoothness)
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let hideTimeout = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (hideTimeout) clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        setIsHidden(currentScrollY > lastScrollY && currentScrollY > 150);
      }, 120);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, []);

  // Keep navbar visible when mobile menu is open
  useEffect(() => {
    if (isOpen) setIsHidden(false);
  }, [isOpen]);

  // Dynamic background brightness detection with route-change delay.
  useEffect(() => {
    let rafId = null;

    const detectBackground = () => {
      const hero = document.querySelector(
        ".hero, main > div:first-child, header, [class*='hero'], [class*='Hero']"
      );

      if (hero) {
        const rect = hero.getBoundingClientRect();
        if (rect.top < 80 && rect.bottom > 0) {
          const bgColor = window.getComputedStyle(hero).backgroundColor;
          const rgb = bgColor.match(/\d+/g)?.map(Number);

          if (rgb && rgb.length >= 3) {
            const brightness =
              (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
            setIsDarkBackground(brightness < 140);
            return;
          }

          const bgImage = window.getComputedStyle(hero).backgroundImage;
          if (bgImage && bgImage !== "none") {
            setIsDarkBackground(true);
            return;
          }
        }
      }

      setIsDarkBackground(false);
    };

    const scheduleDetection = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(detectBackground);
    };

    const timeout = setTimeout(detectBackground, 250);
    window.addEventListener("scroll", scheduleDetection, { passive: true });
    window.addEventListener("resize", scheduleDetection, { passive: true });

    return () => {
      clearTimeout(timeout);
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", scheduleDetection);
      window.removeEventListener("resize", scheduleDetection);
    };
  }, [location.pathname]);

  const whatsappUrl = getWhatsAppUrl(
    "Hello! I'm interested in your French Riviera tours."
  );

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const textColor = isDarkBackground ? "text-white" : "text-azur-deep";

  const navLinks = [
    { label: t("nav.tours"), action: () => scrollToSection("tours") },
    { label: t("nav.about"), action: () => scrollToSection("about") },
    { label: t("nav.contact"), action: () => scrollToSection("contact") },
    { label: t("nav.faq"), action: () => { navigate("/faq"); setIsOpen(false); } },
  ];

  return (
    <nav
      style={{ top: 0, marginTop: 0 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ease-out ${
        isHidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      } ${
        isScrolled
          ? isDarkBackground
            ? "bg-azur-ink/60 shadow-lift backdrop-blur-md"
            : "bg-sand-warm/80 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      } ${textColor}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[68px] items-center justify-between">
          {/* Wordmark */}
          <button
            onClick={handleLogoClick}
            className="group flex items-baseline gap-2"
            data-cursor="hover"
          >
            <span className="font-display text-2xl font-medium tracking-tight">
              Azur
            </span>
            <span
              className={`font-display text-2xl font-light italic ${
                isDarkBackground ? "text-gold-light" : "text-gold-deep"
              }`}
            >
              Escape
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            <div className="flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="link-underline text-[13px] font-semibold uppercase tracking-widest2 opacity-90 transition-opacity hover:opacity-100"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="h-5 w-px bg-current opacity-20" />
            <LanguageSwitcher isDarkBackground={isDarkBackground} />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center gap-2 rounded-full px-5 py-2.5 text-[12px] font-bold uppercase tracking-widest2"
            >
              <FaWhatsapp className="h-4 w-4" />
              {t("nav.bookNow")}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher isDarkBackground={isDarkBackground} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="inline-flex items-center justify-center rounded-md p-2 transition-transform hover:scale-105"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden">
          <div className="space-y-1 border-t border-white/10 bg-azur-ink/95 px-4 pb-5 pt-3 text-white backdrop-blur-xl">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                className="block w-full rounded-lg px-3 py-3 text-left text-base font-medium uppercase tracking-wide text-white/85 transition-colors hover:bg-white/10 hover:text-gold"
              >
                {link.label}
              </button>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="btn-gold mt-3 flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold uppercase tracking-widest2"
            >
              <FaWhatsapp className="h-4 w-4" />
              {t("nav.bookNow")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
