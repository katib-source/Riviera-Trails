import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import { testimonialsData } from "../data/toursData";

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our guests have to say
            about their French Riviera experiences with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white p-6 rounded-lg shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-riviera-blue mb-1">
                4.9
              </div>
              <div className="text-yellow-400 text-xl">★★★★★</div>
              <div className="text-sm text-gray-600">Google Reviews</div>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-riviera-blue mb-1">
                500+
              </div>
              <div className="text-sm text-gray-600">Happy Travelers</div>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-riviera-blue mb-1">
                100%
              </div>
              <div className="text-sm text-gray-600">Recommendation Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
