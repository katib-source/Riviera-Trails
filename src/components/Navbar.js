import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

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

      // Clear any pending hide timeout
      if (hideTimeout) clearTimeout(hideTimeout);

      // Delayed hide for smoother feel
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
    if (isOpen) {
      setIsHidden(false);
    }
  }, [isOpen]);

  // Dynamic background brightness detection with route-change delay
  useEffect(() => {
    const detectBackground = () => {
      const hero = document.querySelector(
        ".hero, main > div:first-child, header, [class*='hero'], [class*='Hero']"
      );

      if (hero) {
        const rect = hero.getBoundingClientRect();
        // If hero is in viewport and navbar overlaps it
        if (rect.top < 80 && rect.bottom > 0) {
          const bgColor = window.getComputedStyle(hero).backgroundColor;
          const rgb = bgColor.match(/\d+/g)?.map(Number);

          if (rgb && rgb.length >= 3) {
            // Calculate brightness using luminance formula
            const brightness =
              (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
            setIsDarkBackground(brightness < 140);
            return;
          }

          // Fallback: Check for background-image if backgroundColor is transparent
          const bgImage = window.getComputedStyle(hero).backgroundImage;
          if (bgImage && bgImage !== "none") {
            // If there's a background image, assume dark for safety
            setIsDarkBackground(true);
            return;
          }
        }
      }

      // Safe fallback: Default to light background (dark text)
      setIsDarkBackground(false);
    };

    // ✅ Delay detection until hero section is fully rendered after route change
    const timeout = setTimeout(() => detectBackground(), 250);

    window.addEventListener("scroll", detectBackground, { passive: true });
    window.addEventListener("resize", detectBackground);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", detectBackground);
      window.removeEventListener("resize", detectBackground);
    };
  }, [location.pathname]);

  const whatsappUrl =
    "https://wa.me/33758781678?text=Hello!%20I'm%20interested%20in%20your%20French%20Riviera%20tours.";

  const scrollToSection = (sectionId) => {
    // If not on homepage, navigate to homepage first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const handleTestimonialsClick = () => {
    navigate("/clients");
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-500 ease-out ${
        isHidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      } ${
        isDarkBackground
          ? "bg-white/10 text-white shadow-[inset_0_-1px_0_rgba(255,255,255,0.25)]"
          : "bg-white/30 text-gray-800 shadow-[inset_0_-1px_0_rgba(0,0,0,0.08)]"
      } ${isScrolled ? "shadow-lg shadow-black/5 scale-[1.02]" : "scale-100"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={handleLogoClick}
              className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${
                isDarkBackground
                  ? "text-white hover:text-gray-100"
                  : "text-riviera-blue hover:text-mediterranean-teal"
              }`}
            >
              Azur Escape
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection("tours")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  isDarkBackground
                    ? "hover:text-gray-200"
                    : "hover:text-riviera-blue"
                }`}
              >
                {t("nav.tours")}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  isDarkBackground
                    ? "hover:text-gray-200"
                    : "hover:text-riviera-blue"
                }`}
              >
                {t("nav.about")}
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  isDarkBackground
                    ? "hover:text-gray-200"
                    : "hover:text-riviera-blue"
                }`}
              >
                {t("nav.contact")}
              </button>
              <button
                onClick={() => {
                  navigate("/faq");
                  setIsOpen(false);
                }}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  isDarkBackground
                    ? "hover:text-gray-200"
                    : "hover:text-riviera-blue"
                }`}
              >
                {t("nav.faq")}
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-riviera-blue to-mediterranean-teal text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-105"
              >
                <FaWhatsapp className="w-4 h-4" />
                {t("nav.bookNow")}
              </a>
            </div>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-all duration-300 ${
                isDarkBackground
                  ? "hover:text-gray-200 hover:scale-105"
                  : "hover:text-riviera-blue hover:scale-105"
              }`}
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/30 backdrop-blur-md shadow-lg shadow-black/5 border-t border-white/20">
            <button
              onClick={() => scrollToSection("tours")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-riviera-blue hover:bg-white/50 w-full text-left transition-all duration-300"
            >
              {t("nav.tours")}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-riviera-blue hover:bg-white/50 w-full text-left transition-all duration-300"
            >
              {t("nav.about")}
            </button>
            <button
              onClick={handleTestimonialsClick}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-riviera-blue hover:bg-white/50 w-full text-left transition-all duration-300"
            >
              {t("nav.clientStories")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-riviera-blue hover:bg-white/50 w-full text-left transition-all duration-300"
            >
              {t("nav.contact")}
            </button>
            <button
              onClick={() => {
                navigate("/faq");
                setIsOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-riviera-blue hover:bg-white/50 w-full text-left transition-all duration-300"
            >
              {t("nav.faq")}
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-riviera-blue to-mediterranean-teal text-white hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <FaWhatsapp className="w-4 h-4" />
              {t("nav.bookNow")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
