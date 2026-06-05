// Central business configuration — update here, reflected everywhere
export const PHONE_NUMBER  = "33758781678";
export const EMAIL_ADDRESS = "info@azurescape.fr";
export const SITE_URL      = "https://www.azurescape.fr";

/**
 * Build a WhatsApp deep-link URL.
 * @param {string} [message] - Pre-filled chat message (plain text, not encoded).
 */
export const getWhatsAppUrl = (message = "") =>
  message
    ? `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${PHONE_NUMBER}`;
