import React from "react";
import { FaWhatsapp, FaFacebook, FaGoogle } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

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
              {t("footer.tagline")}
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://wa.me/33605985410"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
              >
                <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://facebook.com/rivieratrails"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
              >
                <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:derbalaymene@yahoo.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
              >
                <FaGoogle className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>
                <a
                  href="#tours"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t("footer.tours")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t("footer.about")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t("footer.contact")}
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/33605985410?text=Hello!%20I%20have%20a%20question%20about%20your%20tours."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              {t("footer.contact")}
            </h4>
            <div className="space-y-2 text-gray-300 text-sm sm:text-base">
              <p>📍 Nice, French Riviera</p>
              <p className="break-all">📱 +33 6 05 98 54 10</p>
              <p className="break-all">📧 derbalaymene@yahoo.fr</p>
              <p>🌐 3 Languages: FR, EN, AR</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2 text-sm sm:text-base flex-wrap">
            © {currentYear} Azur Escape. {t("footer.rights")}
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
