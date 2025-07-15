# PayPal & EmailJS Setup Checklist

## PayPal Setup ✅

1. [ ] Go to https://developer.paypal.com/
2. [ ] Log in with PayPal account
3. [ ] Create new app "Azur Escape Booking"
4. [ ] Choose "Checkout" product
5. [ ] Copy Sandbox Client ID
6. [ ] Add Client ID to .env file

**Your PayPal Client ID:** `_________________`

## EmailJS Setup ✅

1. [ ] Go to https://www.emailjs.com/
2. [ ] Create free account
3. [ ] Add email service (Gmail/Outlook)
4. [ ] Create template "customer_booking_confirmation"
5. [ ] Create template "business_booking_notification"
6. [ ] Copy Public Key from Account page
7. [ ] Copy Service ID from Email Services
8. [ ] Add all keys to .env file

**Your EmailJS Public Key:** `_________________`
**Your EmailJS Service ID:** `_________________`

## Environment Variables Setup ✅

1. [ ] Open .env file in your project
2. [ ] Replace "your_paypal_client_id_here" with actual PayPal Client ID
3. [ ] Replace "your_emailjs_public_key_here" with actual EmailJS Public Key
4. [ ] Replace "your_emailjs_service_id_here" with actual EmailJS Service ID
5. [ ] Save .env file
6. [ ] Restart development server (npm start)

## Testing ✅

1. [ ] Go to tour details page
2. [ ] Click "Book Now (PayPal)"
3. [ ] Fill booking form
4. [ ] Test PayPal payment (use sandbox)
5. [ ] Check if confirmation emails are sent
6. [ ] Verify both customer and business emails received

## PayPal Test Credit Card (Sandbox)

- **Card Number:** 4111111111111111
- **Expiry:** Any future date
- **CVV:** 123

## Troubleshooting

- Check browser console for errors
- Verify all environment variables are set
- Ensure templates exist in EmailJS
- Check EmailJS quota (200 emails/month free)

## When Ready for Production

1. [ ] Switch to PayPal Live Client ID
2. [ ] Update return URLs in PayPal app settings
3. [ ] Test with real payments (small amounts)
4. [ ] Set environment variables on hosting platform
