import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import { testimonialsData } from "../data/toursData";
import { FadeIn, SlideIn } from "./LoadingAnimations";

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Don't just take our word for it. Here's what our guests have to
              say about their French Riviera experiences with us.
            </p>
          </div>
        </FadeIn>

        <SlideIn direction="up" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </SlideIn>

        <FadeIn delay={400}>
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-full overflow-x-auto">
              <div className="text-center flex-shrink-0">
                <div className="text-2xl sm:text-3xl font-bold text-riviera-blue mb-1">
                  4.9
                </div>
                <div className="text-yellow-400 text-lg sm:text-xl">★★★★★</div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Google Reviews
                </div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-gray-300"></div>
              <div className="text-center flex-shrink-0">
                <div className="text-2xl sm:text-3xl font-bold text-riviera-blue mb-1">
                  500+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Happy Travelers
                </div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-gray-300"></div>
              <div className="text-center flex-shrink-0">
                <div className="text-2xl sm:text-3xl font-bold text-riviera-blue mb-1">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Recommendation Rate
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Testimonials;
