import React, { useState } from "react";
import {
  FiX,
  FiUser,
  FiMail,
  FiPhone,
  FiCalendar,
  FiUsers,
  FiMessageSquare,
  FiClock,
  FiMapPin,
} from "react-icons/fi";

const BookingForm = ({ tour, onClose }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    guestsCount: 1,
    preferredDate: "",
    specialRequests: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto border border-sand-beige">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 bg-gradient-to-r from-riviera-blue to-mediterranean-teal bg-clip-text text-transparent">
            Book Your Tour
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Tour Info */}
        <div className="bg-gradient-to-r from-riviera-blue/10 to-mediterranean-teal/10 rounded-xl p-4 sm:p-6 mb-6 border border-riviera-blue/20">
          <h4 className="font-semibold text-riviera-blue mb-2 text-lg">
            {tour.title}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <FiClock className="w-4 h-4 text-mediterranean-teal" />
              <span>Duration: {tour.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin className="w-4 h-4 text-mediterranean-teal" />
              <span>Price: {tour.price} per person</span>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FiUser className="w-4 h-4 inline mr-2 text-riviera-blue" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={customerInfo.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-riviera-blue/50 focus:border-riviera-blue transition-all duration-200 text-base"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FiMail className="w-4 h-4 inline mr-2 text-riviera-blue" />
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={customerInfo.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-riviera-blue/50 focus:border-riviera-blue transition-all duration-200 text-base"
              placeholder="Enter your email address"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FiPhone className="w-4 h-4 inline mr-2 text-riviera-blue" />
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={customerInfo.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-riviera-blue/50 focus:border-riviera-blue transition-all duration-200 text-base"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Number of Guests */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FiUsers className="w-4 h-4 inline mr-2 text-riviera-blue" />
                Guests
              </label>
              <select
                name="guestsCount"
                value={customerInfo.guestsCount}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-riviera-blue/50 focus:border-riviera-blue transition-all duration-200 text-base"
              >
                {[1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FiCalendar className="w-4 h-4 inline mr-2 text-riviera-blue" />
                Date *
              </label>
              <input
                type="date"
                name="preferredDate"
                value={customerInfo.preferredDate}
                onChange={handleInputChange}
                min={getTomorrowDate()}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-riviera-blue/50 focus:border-riviera-blue transition-all duration-200 text-base"
              />
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FiMessageSquare className="w-4 h-4 inline mr-2 text-riviera-blue" />
              Special Requests (Optional)
            </label>
            <textarea
              name="specialRequests"
              value={customerInfo.specialRequests}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-riviera-blue/50 focus:border-riviera-blue transition-all duration-200 text-base resize-none"
              placeholder="Any special requests or dietary requirements?"
            />
          </div>

          {/* Total Calculation */}
          <div className="bg-gradient-to-r from-sand-beige/50 to-sunset-orange/10 rounded-xl p-4 border border-sunset-orange/20">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">
                Total for {customerInfo.guestsCount} guest
                {customerInfo.guestsCount > 1 ? "s" : ""}:
              </span>
              <span className="text-2xl font-bold bg-gradient-to-r from-riviera-blue to-mediterranean-teal bg-clip-text text-transparent">
                €
                {parseInt(tour.price.replace("€", "")) *
                  customerInfo.guestsCount}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="w-full bg-gradient-to-r from-riviera-blue to-mediterranean-teal text-white py-4 px-6 rounded-xl font-semibold hover:from-riviera-blue/90 hover:to-mediterranean-teal/90 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Book Your Tour
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500 space-y-1">
          <p className="flex items-center justify-center gap-2">
            <span className="text-green-500">✓</span>
            Instant booking confirmation via WhatsApp
          </p>
          <p className="flex items-center justify-center gap-2">
            <span className="text-green-500">✓</span>
            Free cancellation up to 24h before
          </p>
          <p className="flex items-center justify-center gap-2">
            <span className="text-green-500">✓</span>
            Secure & trusted service
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
