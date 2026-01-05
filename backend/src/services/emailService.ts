import nodemailer from 'nodemailer';

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export interface FormSubmissionData {
  formType: 'affiliate' | 'contact';
  data: Record<string, any>;
}

class EmailService {
  private transporter: nodemailer.Transporter | null = null;
  private initialized: boolean = false;

  constructor() {
    // Don't initialize immediately - wait until first use
    // This allows dotenv.config() to run first
  }

  private ensureInitialized() {
    if (this.initialized) {
      return;
    }
    this.initializeTransporter();
    this.initialized = true;
  }

  private initializeTransporter() {
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      const missing = [];
      if (!smtpUser) missing.push('SMTP_USER');
      if (!smtpPass) missing.push('SMTP_PASS');
      console.warn(`Email service not configured. Missing: ${missing.join(', ')}`);
      console.warn('Please check your .env file and ensure SMTP_USER and SMTP_PASS are set.');
      console.warn(`Debug - SMTP_USER exists: ${!!smtpUser}, SMTP_PASS exists: ${!!smtpPass}`);
      return;
    }

    this.transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    console.log('✅ Email service initialized successfully');
  }

  /**
   * Send an email
   */
  async sendEmail(options: EmailOptions): Promise<void> {
    // Ensure transporter is initialized before use
    this.ensureInitialized();
    
    if (!this.transporter) {
      const missing = [];
      if (!process.env.SMTP_USER) missing.push('SMTP_USER');
      if (!process.env.SMTP_PASS) missing.push('SMTP_PASS');
      const missingMsg = missing.length > 0 
        ? ` Missing environment variables: ${missing.join(', ')}.`
        : '';
      throw new Error(`Email service not configured. Please check your SMTP settings in the .env file.${missingMsg}`);
    }

    const fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@clickdee.com';

    await this.transporter.sendMail({
      from: fromEmail,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text || this.htmlToText(options.html),
    });
  }

  /**
   * Format form data into a readable HTML email
   */
  private formatFormData(data: Record<string, any>): string {
    const formatValue = (value: any): string => {
      if (value === null || value === undefined) {
        return '<em>Not provided</em>';
      }
      if (Array.isArray(value)) {
        return value.length > 0 ? value.join(', ') : '<em>None selected</em>';
      }
      if (typeof value === 'boolean') {
        return value ? 'Yes' : 'No';
      }
      if (typeof value === 'object') {
        return JSON.stringify(value, null, 2);
      }
      return String(value);
    };

    const formatFieldName = (name: string): string => {
      return name
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase())
        .trim();
    };

    let html = '<table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;">';
    
    for (const [key, value] of Object.entries(data)) {
      html += `
        <tr style="border-bottom: 1px solid #e0e0e0;">
          <td style="padding: 12px; font-weight: bold; width: 200px; vertical-align: top; color: #333;">
            ${formatFieldName(key)}:
          </td>
          <td style="padding: 12px; color: #666;">
            ${formatValue(value)}
          </td>
        </tr>
      `;
    }
    
    html += '</table>';
    return html;
  }

  /**
   * Send receipt/confirmation email to the user
   */
  private async sendReceiptEmail(userEmail: string, formType: 'affiliate' | 'contact'): Promise<void> {
    const formTypeLabel = formType === 'affiliate' 
      ? 'Affiliate Program Application' 
      : 'Contact Form Submission';

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f5f5f5;
            }
            .container {
              background-color: white;
              border-radius: 12px;
              padding: 40px;
              box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }
            .checkmark {
              width: 80px;
              height: 80px;
              margin: 0 auto 30px;
              background-color: #0070FF;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
            }
            .checkmark::after {
              content: '✓';
              color: white;
              font-size: 48px;
              font-weight: bold;
            }
            .title {
              text-align: center;
              font-size: 28px;
              font-weight: bold;
              color: #18181B;
              margin-bottom: 20px;
            }
            .title-highlight {
              color: #0070FF;
              background-color: #ECF1F9;
              padding: 4px 12px;
              border-radius: 8px;
              display: inline-block;
            }
            .message {
              text-align: center;
              color: #71717A;
              font-size: 16px;
              line-height: 1.6;
              margin-bottom: 30px;
            }
            .contact-info {
              text-align: center;
              margin-top: 30px;
              padding-top: 30px;
              border-top: 1px solid #E4E4E7;
            }
            .phone-button {
              display: inline-block;
              background-color: #0070FF;
              color: white;
              padding: 14px 24px;
              border-radius: 8px;
              text-decoration: none;
              font-weight: bold;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="checkmark"></div>
            <h1 class="title">
              We will contact you <span class="title-highlight">shortly!</span>
            </h1>
            <p class="message">
              Thank you for your ${formTypeLabel.toLowerCase()}. One of our advertising consultants will contact you to discuss how we can help you grow your business.
            </p>
            <div class="contact-info">
              <p style="color: #71717A; margin-bottom: 10px;">Call our Advertising Specialists</p>
              <a href="tel:+18553877272" class="phone-button">(855) 387-7272</a>
            </div>
          </div>
        </body>
      </html>
    `;

    await this.sendEmail({
      to: userEmail,
      subject: `Thank you for your ${formTypeLabel} - ClickDee`,
      html,
    });
  }

  /**
   * Send form submission email
   */
  async sendFormSubmission(formData: FormSubmissionData): Promise<void> {
    const recipientEmail = process.env.RECIPIENT_EMAIL;
    
    if (!recipientEmail) {
      throw new Error(
        'RECIPIENT_EMAIL not configured. Please set RECIPIENT_EMAIL in your .env file. ' +
        'Example: RECIPIENT_EMAIL=info@clickdee.com'
      );
    }

    const formTypeLabel = formData.formType === 'affiliate' ? 'Affiliate Program Application' : 'Contact Form Submission';
    const subject = `New ${formTypeLabel} - ClickDee`;

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #0070FF;
              color: white;
              padding: 20px;
              border-radius: 8px 8px 0 0;
              margin-bottom: 0;
            }
            .content {
              background-color: #f9f9f9;
              padding: 20px;
              border-radius: 0 0 8px 8px;
            }
            .form-type {
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 10px;
            }
            .timestamp {
              color: #666;
              font-size: 12px;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="form-type">${formTypeLabel}</div>
            <div class="timestamp">Received: ${new Date().toLocaleString()}</div>
          </div>
          <div class="content">
            <h2 style="margin-top: 0; color: #333;">Form Details:</h2>
            ${this.formatFormData(formData.data)}
          </div>
        </body>
      </html>
    `;

    // Send email to admin/recipient
    await this.sendEmail({
      to: recipientEmail,
      subject,
      html,
    });

    // Send receipt email to user if email is provided in form data
    const userEmail = this.extractEmailFromFormData(formData.data);
    if (userEmail) {
      try {
        await this.sendReceiptEmail(userEmail, formData.formType);
        console.log(`✅ Receipt email sent to: ${userEmail}`);
      } catch (error) {
        // Log error but don't fail the main submission
        console.error('Failed to send receipt email:', error);
      }
    }
  }

  /**
   * Extract email address from form data
   * Checks common email field names: email, Email, emailAddress, etc.
   */
  private extractEmailFromFormData(data: Record<string, any>): string | null {
    // Common email field names
    const emailFields = ['email', 'Email', 'emailAddress', 'EmailAddress', 'userEmail', 'contactEmail'];
    
    for (const field of emailFields) {
      const value = data[field];
      if (value && typeof value === 'string') {
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(value.trim())) {
          return value.trim();
        }
      }
    }
    
    return null;
  }

  /**
   * Simple HTML to text converter
   */
  private htmlToText(html: string): string {
    return html
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .trim();
  }

  /**
   * Verify email service configuration
   */
  async verifyConnection(): Promise<boolean> {
    // Ensure transporter is initialized before verification
    this.ensureInitialized();
    
    if (!this.transporter) {
      return false;
    }

    try {
      await this.transporter.verify();
      return true;
    } catch (error) {
      console.error('Email service verification failed:', error);
      return false;
    }
  }
}

// Export singleton instance
export const emailService = new EmailService();

