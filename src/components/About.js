import React from "react";
import { FiMapPin, FiHeart, FiUsers, FiGlobe } from "react-icons/fi";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Your Local French Riviera Expert
            </h2>

            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                Bonjour! I'm passionate about sharing the magic of the French
                Riviera with visitors from around the world. Born and raised in
                Nice, I've spent years discovering the hidden gems and stories
                that make this region truly special.
              </p>

              <p className="leading-relaxed">
                What started as a love for my hometown has grown into a mission
                to provide authentic, personalized experiences that go beyond
                typical tourist attractions. I believe in small groups,
                meaningful connections, and creating memories that last a
                lifetime.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <FiMapPin className="w-6 h-6 text-riviera-blue mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Local Insider</h3>
                  <p className="text-sm text-gray-600">
                    Born and raised in Nice
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiUsers className="w-6 h-6 text-riviera-blue mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Small Groups</h3>
                  <p className="text-sm text-gray-600">Max 8 people per tour</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiGlobe className="w-6 h-6 text-riviera-blue mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">3 Languages</h3>
                  <p className="text-sm text-gray-600">
                    French, English, Arabic
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiHeart className="w-6 h-6 text-riviera-blue mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    500+ Happy Guests
                  </h3>
                  <p className="text-sm text-gray-600">
                    Trusted by travelers worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-4">
                Why Choose Riviera Trails?
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-riviera-blue rounded-full"></div>
                  Licensed and insured local guide
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-riviera-blue rounded-full"></div>
                  Flexible itineraries based on your interests
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-riviera-blue rounded-full"></div>
                  Personalized recommendations for restaurants and shopping
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-riviera-blue rounded-full"></div>
                  Photography assistance and best viewpoint tips
                </li>
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Tour Guide"
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-riviera-blue">4.9★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
