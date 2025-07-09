import React from "react";
import TourCard from "../components/TourCard";
import { toursData } from "../data/toursData";

const Tours = () => {
  return (
    <section id="tours" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Historical Coastal Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the rich history and stunning beauty of the French Riviera
            on our comprehensive journey from Nice to Menton. Experience every
            charming village along the coast with detailed historical narratives
            and local insights.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md">
            {toursData.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Looking for a custom experience or have special requirements?
          </p>
          <a
            href="https://wa.me/33605985410?text=Hello!%20I'm%20interested%20in%20creating%20a%20custom%20tour%20experience.%20Could%20you%20help%20me%20plan%20something%20special?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sunset-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Request Custom Tour
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tours;
