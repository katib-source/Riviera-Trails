import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FadeIn } from "./LoadingAnimations";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const whatsappUrl =
    "https://wa.me/33758781678?text=Hello!%20I'm%20interested%20in%20your%20French%20Riviera%20tours.%20Could%20you%20please%20provide%20more%20information?";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1233281/pexels-photo-1233281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
        <FadeIn>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            {t("hero.title")}
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-gray-200 font-light">
            {t("hero.subtitle")}
          </p>
        </FadeIn>

        <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {t("hero.description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
          <a
            href="#tours"
            className="w-full sm:w-auto bg-riviera-blue hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {t("hero.ctaButton")}
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border-2 border-white hover:bg-white hover:text-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FaWhatsapp className="w-5 h-5" />
            {t("hero.ctaWhatsapp")}
          </a>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-sunset-orange mb-2">
              200+
            </div>
            <div className="text-gray-300">Happy Travelers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-sunset-orange mb-2">7</div>
            <div className="text-gray-300">Historic Villages</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-sunset-orange mb-2">3</div>
            <div className="text-gray-300">Languages Spoken</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
