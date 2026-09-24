// Central business configuration — update here, reflected everywhere
export const PHONE_NUMBER  = "33758781678";
export const EMAIL_ADDRESS = "info@azurescape.fr";
export const SITE_URL      = "https://www.azurescape.fr";

// Shown if a tour photo ever fails to load. Tour photos must be self-hosted
// in public/images/tours/ (enforced by newToursData.test.js).
export const FALLBACK_TOUR_IMAGE = "/images/tours/tour-fallback.webp";

// <img onError> handler: swap to the fallback once (guards against loops).
export const handleTourImageError = (e) => {
  const img = e.currentTarget;
  if (img.dataset.fallback) return;
  img.dataset.fallback = "1";
  img.src = FALLBACK_TOUR_IMAGE;
};

/**
 * Build a WhatsApp deep-link URL.
 * @param {string} [message] - Pre-filled chat message (plain text, not encoded).
 */
export const getWhatsAppUrl = (message = "") =>
  message
    ? `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${PHONE_NUMBER}`;
