import React from "react";
import { FiMapPin, FiHeart, FiUsers, FiGlobe } from "react-icons/fi";
import { FadeIn, SlideIn } from "./LoadingAnimations";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <SlideIn direction="left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                Your Local French Riviera Expert
              </h2>

              <div className="space-y-4 sm:space-y-6 text-gray-600">
                <p className="text-base sm:text-lg leading-relaxed">
                  Bonjour! I'm passionate about sharing the magic of the French
                  Riviera with visitors from around the world. Born and raised
                  in Nice, I've spent years discovering the hidden gems and
                  stories that make this region truly special.
                </p>

                <p className="leading-relaxed">
                  What started as a love for my hometown has grown into a
                  mission to provide authentic, personalized experiences that go
                  beyond typical tourist attractions. I believe in small groups,
                  meaningful connections, and creating memories that last a
                  lifetime.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="flex items-start gap-3">
                  <FiMapPin className="w-5 h-5 sm:w-6 sm:h-6 text-riviera-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                      Local Insider
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Born and raised in Nice
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiUsers className="w-5 h-5 sm:w-6 sm:h-6 text-riviera-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                      Small Groups
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Max 4 people per tour
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiGlobe className="w-5 h-5 sm:w-6 sm:h-6 text-riviera-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                      3 Languages
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      French, English, Arabic
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiHeart className="w-5 h-5 sm:w-6 sm:h-6 text-riviera-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                      500+ Happy Guests
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Trusted by travelers worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">
                  Why Choose Riviera Trails?
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-riviera-blue rounded-full flex-shrink-0"></div>
                    Licensed and insured local guide
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-riviera-blue rounded-full flex-shrink-0"></div>
                    Flexible itineraries based on your interests
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-riviera-blue rounded-full flex-shrink-0"></div>
                    Personalized recommendations for restaurants and shopping
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-riviera-blue rounded-full flex-shrink-0"></div>
                    Photography assistance and best viewpoint tips
                  </li>
                </ul>
              </div>
            </div>
          </SlideIn>

          {/* Image */}
          <SlideIn direction="right">
            <div className="relative mt-8 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Tour Guide"
                className="rounded-2xl shadow-lg w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-riviera-blue">
                    5/5 ★
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Average Rating
                  </div>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
};

export default About;
