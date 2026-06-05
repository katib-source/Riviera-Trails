import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FaWhatsapp, FaFacebook, FaGoogle } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { PHONE_NUMBER, EMAIL_ADDRESS, getWhatsAppUrl } from "../config/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useLanguage();

  // M-06: fire after the route renders so the target section is in the DOM
  useEffect(() => {
    if (location.state?.scrollTo) {
      document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      // Pass scroll target via router state; the useEffect above handles the scroll
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Azur Escape
            </h3>
            <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
              Your trusted local guide for unforgettable French Riviera
              experiences. Discover hidden gems, iconic landmarks, and authentic
              culture with personalized tours.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="w-11 h-11 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
              >
                <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/azurescape"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-11 h-11 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
              >
                <FaFacebook className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                aria-label="Send us an email"
                className="w-11 h-11 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
              >
                <FaGoogle className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>
                <button
                  onClick={() => scrollToSection("tours")}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Our Tours
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/testimonials")}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Client Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/faq")}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    navigate(
                      language === "fr"
                        ? "/privacy-policy-fr"
                        : "/privacy-policy"
                    )
                  }
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Contact Info
            </h4>
            <div className="space-y-2 text-gray-300 text-sm sm:text-base">
              <p>📍 Nice, French Riviera</p>
              <p className="break-all">📱 +33 7 58 78 16 78</p>
              <p className="break-all">📧 {EMAIL_ADDRESS}</p>
              <p>🌐 3 Languages: FR, EN, AR</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2 text-sm sm:text-base flex-wrap">
            © {currentYear} Azur Escape. Made with
            <FiHeart className="w-4 h-4 text-red-500" />
            for French Riviera travelers.
          </p>
          <p className="mt-2 text-xs sm:text-sm">
            Licensed tour guide | Fully insured | Small group experiences
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
