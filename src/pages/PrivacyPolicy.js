import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-6">Last updated: September 29, 2025</p>

          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Information We Collect
            </h2>
            <p className="mb-4">
              When you book a tour with Azur Escape, we collect personal
              information necessary to provide our services:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Name and contact information (email, phone)</li>
              <li>Booking preferences and special requirements</li>
              <li>
                Payment information (processed securely through third parties)
              </li>
              <li>Communication records via WhatsApp and email</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              How We Use Your Information
            </h2>
            <p className="mb-4">Your information is used to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide and deliver tour services</li>
              <li>Communicate about bookings and updates</li>
              <li>Process payments and confirmations</li>
              <li>Improve our services and customer experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Information Sharing
            </h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information to third
              parties. Information may be shared with:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Service providers necessary for tour operations</li>
              <li>Payment processors for transaction handling</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Cookies and Tracking
            </h2>
            <p className="mb-4">
              Our website uses cookies to enhance your browsing experience. You
              can manage cookie preferences through our cookie consent banner.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Rights (GDPR)
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Object to processing</li>
              <li>Data portability</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Data Security
            </h2>
            <p className="mb-6">
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h2>
            <p className="mb-4">
              For privacy-related questions or to exercise your rights, contact
              us:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Email: privacy@azurescape.fr</li>
              <li>WhatsApp: +33 6 05 98 54 10</li>
              <li>Address: French Riviera, France</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Changes to This Policy
            </h2>
            <p className="mb-6">
              We may update this privacy policy periodically. Changes will be
              posted on this page with an updated revision date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
