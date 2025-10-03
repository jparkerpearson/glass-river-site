# EmailJS Setup Guide

To enable email functionality for the contact form, you need to set up EmailJS:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission - {{from_name}}

From: {{from_name}} ({{from_email}})
Company: {{company}}

Message:
{{message}}

---
This message was sent from the Glass River contact form.
```

4. Note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## 5. Update Configuration
Replace the placeholder values in `script.js`:

```javascript
// Line 3: Replace YOUR_PUBLIC_KEY
emailjs.init("YOUR_PUBLIC_KEY");

// Line 57: Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
```

## 6. Test the Form
1. Open your website
2. Fill out and submit the contact form
3. Check that you receive the email at parker@glassriver.ai

## Troubleshooting
- Make sure your email service is properly configured
- Check browser console for any error messages
- Verify all IDs are correctly replaced in the code
