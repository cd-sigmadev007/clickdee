import { Router, Request, Response } from 'express';
import { emailService } from '../services/emailService';

const router = Router();

/**
 * POST /api/forms/affiliate
 * Handle affiliate form submission
 */
router.post('/affiliate', async (req: Request, res: Response) => {
  try {
    const formData = req.body;

    if (!formData || Object.keys(formData).length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Form data is required',
      });
    }

    await emailService.sendFormSubmission({
      formType: 'affiliate',
      data: formData,
    });

    res.status(200).json({
      success: true,
      message: 'Form submitted successfully',
    });
  } catch (error) {
    console.error('Error submitting affiliate form:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to submit form';
    
    // Provide more helpful error messages for configuration issues
    if (errorMessage.includes('not configured')) {
      res.status(500).json({
        success: false,
        error: 'Email service is not configured. Please check your backend environment variables.',
        details: errorMessage,
      });
    } else {
      res.status(500).json({
        success: false,
        error: errorMessage,
      });
    }
  }
});

/**
 * POST /api/forms/contact
 * Handle contact form submission
 */
router.post('/contact', async (req: Request, res: Response) => {
  try {
    const formData = req.body;

    if (!formData || Object.keys(formData).length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Form data is required',
      });
    }

    await emailService.sendFormSubmission({
      formType: 'contact',
      data: formData,
    });

    res.status(200).json({
      success: true,
      message: 'Form submitted successfully',
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to submit form';
    
    // Provide more helpful error messages for configuration issues
    if (errorMessage.includes('not configured')) {
      res.status(500).json({
        success: false,
        error: 'Email service is not configured. Please check your backend environment variables.',
        details: errorMessage,
      });
    } else {
      res.status(500).json({
        success: false,
        error: errorMessage,
      });
    }
  }
});

/**
 * GET /api/forms/health
 * Check if email service is configured and working
 */
router.get('/health', async (req: Request, res: Response) => {
  try {
    const isConfigured = await emailService.verifyConnection();
    
    res.status(200).json({
      success: true,
      emailServiceConfigured: isConfigured,
      message: isConfigured 
        ? 'Email service is configured and ready' 
        : 'Email service is not configured. Please check your environment variables.',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Health check failed',
    });
  }
});

export default router;

