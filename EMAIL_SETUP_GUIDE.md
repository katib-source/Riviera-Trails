# Email Templates Setup Guide

This guide explains how to set up email confirmations for your Riviera Trails booking system.

## EmailJS Setup

1. **Create EmailJS Account**

   - Go to https://www.emailjs.com/
   - Create a free account
   - You get 200 free emails per month

2. **Add Email Service**

   - Go to Email Services
   - Add your email service (Gmail, Outlook, etc.)
   - Follow the connection instructions

3. **Create Email Templates**

### Customer Confirmation Template

Create a template with ID: `customer_booking_confirmation`

**Subject:** `Booking Confirmation - {{tour_title}} - Riviera Trails`

**Content:**

```html
<h2>🌊 Booking Confirmation - Riviera Trails</h2>

<p>Dear {{to_name}},</p>

<p>
  Thank you for booking with Riviera Trails! We're excited to share the beauty
  of the French Riviera with you.
</p>

<h3>📋 Booking Details</h3>
<ul>
  <li><strong>Tour:</strong> {{tour_title}}</li>
  <li><strong>Duration:</strong> {{tour_duration}}</li>
  <li><strong>Price:</strong> {{tour_price}}</li>
  <li><strong>Guests:</strong> {{guests_count}}</li>
  <li><strong>Preferred Date:</strong> {{preferred_date}}</li>
  <li><strong>Order ID:</strong> {{order_id}}</li>
  <li><strong>Booking Date:</strong> {{booking_date}}</li>
</ul>

<h3>📞 Next Steps</h3>
<p>We'll contact you within 24 hours to:</p>
<ul>
  <li>Confirm your tour date and time</li>
  <li>Provide meeting point details</li>
  <li>Answer any questions you might have</li>
</ul>

<h3>📱 Contact Information</h3>
<p>If you have any immediate questions:</p>
<ul>
  <li><strong>Phone/WhatsApp:</strong> {{guide_phone}}</li>
  <li><strong>Email:</strong> {{guide_email}}</li>
</ul>

<h3>🔄 Cancellation Policy</h3>
<p>
  Free cancellation up to 24 hours before your tour. For cancellations, please
  contact us directly.
</p>

<p>We can't wait to show you the magic of the French Riviera!</p>

<p>
  Best regards,<br />
  Your Riviera Trails Team
</p>

<hr />
<p>
  <small
    >This is an automated confirmation email. Please save this email for your
    records.</small
  >
</p>
```

### Business Notification Template

Create a template with ID: `business_booking_notification`

**Subject:** `New Booking - {{tour_title}} - {{customer_name}}`

**Content:**

```html
<h2>🆕 New Booking Received</h2>

<h3>📋 Booking Details</h3>
<ul>
  <li><strong>Customer:</strong> {{customer_name}}</li>
  <li><strong>Email:</strong> {{customer_email}}</li>
  <li><strong>Phone:</strong> {{customer_phone}}</li>
  <li><strong>Tour:</strong> {{tour_title}}</li>
  <li><strong>Price:</strong> {{tour_price}}</li>
  <li><strong>Guests:</strong> {{guests_count}}</li>
  <li><strong>Preferred Date:</strong> {{preferred_date}}</li>
  <li><strong>Order ID:</strong> {{order_id}}</li>
  <li><strong>Booking Date:</strong> {{booking_date}}</li>
</ul>

<h3>💬 Special Requests</h3>
<p>{{special_requests}}</p>

<h3>⚡ Action Required</h3>
<p>
  Please contact the customer within 24 hours to confirm the booking details.
</p>

<hr />
<p>
  <small
    >This is an automated notification from your Riviera Trails booking
    system.</small
  >
</p>
```

## PayPal Setup

1. **Create PayPal Developer Account**

   - Go to https://developer.paypal.com/
   - Log in with your PayPal account
   - Create a new application

2. **Get Client ID**

   - In your app dashboard, copy the Client ID
   - For testing, use the Sandbox Client ID
   - For production, use the Live Client ID

3. **Environment Variables**
   Create a `.env` file in your project root:
   ```
   REACT_APP_PAYPAL_CLIENT_ID=your_client_id_here
   REACT_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_CUSTOMER_TEMPLATE_ID=customer_booking_confirmation
   REACT_APP_EMAILJS_BUSINESS_TEMPLATE_ID=business_booking_notification
   ```

## Testing

1. **Test EmailJS**

   - Send a test email from EmailJS dashboard
   - Verify templates render correctly

2. **Test PayPal**

   - Use PayPal sandbox for testing
   - Test credit card: 4111111111111111
   - Test PayPal account: Use sandbox buyer account

3. **Test Full Flow**
   - Fill booking form
   - Complete PayPal payment
   - Check both emails are received

## Security Notes

- Never commit `.env` file with real keys
- Use environment variables for all sensitive data
- Test thoroughly before going live
- Monitor transaction logs regularly

## Troubleshooting

**EmailJS Issues:**

- Check template IDs match exactly
- Verify service is connected
- Check email quotas

**PayPal Issues:**

- Verify Client ID is correct
- Check currency settings (EUR)
- Ensure webhook URLs are set (if needed)

**General Issues:**

- Check browser console for errors
- Verify all environment variables are set
- Test with network tab open to see API calls
