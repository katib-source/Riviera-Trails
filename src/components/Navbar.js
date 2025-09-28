import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl =
    "https://wa.me/33605985410?text=Hello!%20I'm%20interested%20in%20your%20French%20Riviera%20tours.";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={handleLogoClick}
              className={`text-2xl font-bold transition-colors duration-200 ${
                isScrolled ? "text-riviera-blue" : "text-white"
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
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isScrolled
                    ? "text-gray-700 hover:text-riviera-blue"
                    : "text-white hover:text-gray-200"
                }`}
              >
                {t("nav.tours")}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isScrolled
                    ? "text-gray-700 hover:text-riviera-blue"
                    : "text-white hover:text-gray-200"
                }`}
              >
                {t("nav.about")}
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isScrolled
                    ? "text-gray-700 hover:text-riviera-blue"
                    : "text-white hover:text-gray-200"
                }`}
              >
                {t("nav.contact")}
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2"
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
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-700 hover:text-riviera-blue"
                  : "text-white hover:text-gray-200"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <button
              onClick={() => scrollToSection("tours")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-riviera-blue hover:bg-gray-50 w-full text-left"
            >
              {t("nav.tours")}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-riviera-blue hover:bg-gray-50 w-full text-left"
            >
              {t("nav.about")}
            </button>
            <button
              onClick={handleTestimonialsClick}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-riviera-blue hover:bg-gray-50 w-full text-left"
            >
              {t("nav.clientStories")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-riviera-blue hover:bg-gray-50 w-full text-left"
            >
              {t("nav.contact")}
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium bg-green-500 text-white hover:bg-green-600 flex items-center gap-2"
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
