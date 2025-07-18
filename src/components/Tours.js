import React from "react";
import TourCard from "../components/TourCard";
import { toursData } from "../data/bilingualToursData";
import { FadeIn, SlideIn } from "./LoadingAnimations";
import { useLanguage } from "../context/LanguageContext";

const Tours = () => {
  const { t, language } = useLanguage();
  const currentTours = toursData[language] || toursData.en;

  return (
    <section id="tours" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              {t("tours.title")}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              {t("tours.subtitle")}
            </p>
          </div>
        </FadeIn>

        <SlideIn direction="up" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {currentTours.map((tour, index) => (
              <div key={tour.id} className="flex justify-center">
                <TourCard tour={tour} />
              </div>
            ))}
          </div>
        </SlideIn>

        <FadeIn delay={400}>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4 px-4 text-sm sm:text-base">
              Looking for a custom experience or have special requirements?
            </p>
            <a
              href="https://wa.me/33605985410?text=Hello!%20I'm%20interested%20in%20creating%20a%20custom%20tour%20experience.%20Could%20you%20help%20me%20plan%20something%20special?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-sunset-orange hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base"
            >
              Request Custom Tour
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Tours;
