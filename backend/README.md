# ClickDee Backend Email Service

A simple, reusable email service for handling form submissions from the ClickDee website.

## Features

- ✅ Reusable email service for multiple form types
- ✅ TypeScript support
- ✅ Express.js REST API
- ✅ Nodemailer for email delivery
- ✅ Formatted HTML emails
- ✅ Health check endpoint
- ✅ CORS support

## Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your email configuration:

```bash
cp .env.example .env
```

Edit `.env` with your SMTP settings:

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com

# Recipient Email (where form submissions will be sent)
RECIPIENT_EMAIL=info@clickdee.com

# Server Configuration
PORT=3001
NODE_ENV=development

# CORS Configuration
CORS_ORIGIN=http://localhost:5173
```

### 3. Gmail Setup (if using Gmail)

If you're using Gmail, you'll need to:

1. Enable 2-Step Verification on your Google account
2. Generate an App Password:
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password in `SMTP_PASS`

### 4. Run the Server

**Development mode (with hot reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm run build
npm start
```

## API Endpoints

### POST `/api/forms/affiliate`

Submit affiliate program application form.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "(555) 555-5555",
  "company": "Example Corp",
  "interestedLeads": ["fire-damage", "water-damage"],
  ...
}
```

**Response:**
```json
{
  "success": true,
  "message": "Form submitted successfully"
}
```

### POST `/api/forms/contact`

Submit contact form.

**Request Body:**
```json
{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "phone": "(555) 555-5555",
  "companyName": "Example Corp",
  "services": ["fire-damage", "water-damage"],
  ...
}
```

**Response:**
```json
{
  "success": true,
  "message": "Form submitted successfully"
}
```

### GET `/api/forms/health`

Check if email service is configured and working.

**Response:**
```json
{
  "success": true,
  "emailServiceConfigured": true,
  "message": "Email service is configured and ready"
}
```

### GET `/health`

Basic server health check.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Usage in Frontend

Update your form submission handlers to call the API:

```typescript
const handleSubmit = async (formData: Record<string, any>) => {
  try {
    const response = await fetch('http://localhost:3001/api/forms/affiliate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    
    if (result.success) {
      // Handle success
      console.log('Form submitted successfully');
    } else {
      // Handle error
      console.error('Form submission failed:', result.error);
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};
```

## Project Structure

```
backend/
├── src/
│   ├── services/
│   │   └── emailService.ts    # Reusable email service
│   ├── routes/
│   │   └── formRoutes.ts      # API routes for forms
│   └── index.ts               # Express server setup
├── .env.example               # Environment variables template
├── package.json
├── tsconfig.json
└── README.md
```

## Email Service

The `emailService` is a reusable singleton that can be used by any form or module:

```typescript
import { emailService } from './services/emailService';

await emailService.sendFormSubmission({
  formType: 'affiliate', // or 'contact'
  data: formData,
});
```

## Troubleshooting

### Email not sending

1. Check that all environment variables are set correctly
2. Verify SMTP credentials are correct
3. For Gmail, ensure you're using an App Password, not your regular password
4. Check server logs for error messages
5. Use the `/api/forms/health` endpoint to verify configuration

### CORS errors

Update `CORS_ORIGIN` in `.env` to match your frontend URL.

## License

ISC

