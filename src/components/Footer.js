import React from "react";
import { FiHeart } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Riviera Trails
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted local guide for unforgettable French Riviera
              experiences. Discover hidden gems, iconic landmarks, and authentic
              culture with personalized tours.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/33605985410"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/rivieratrails"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/rivieratrails"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://g.page/r/rivieratrails"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
              >
                <FaGoogle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#tours"
                  className="hover:text-white transition-colors duration-200"
                >
                  Our Tours
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
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
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📍 Nice, French Riviera</p>
              <p>📱 +33 6 00 00 00 00</p>
              <p>📧 hello@rivieratrails.com</p>
              <p>🌐 3 Languages: FR, EN, AR</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Riviera Trails. Made with
            <FiHeart className="w-4 h-4 text-red-500" />
            for French Riviera travelers.
          </p>
          <p className="mt-2 text-sm">
            Licensed tour guide | Fully insured | Small group experiences
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
