import React from "react";
import { FiStar } from "react-icons/fi";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>

      <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>

      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.country}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
