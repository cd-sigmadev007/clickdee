/**
 * API utility functions for form submissions
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  error?: string;
  data?: T;
}

/**
 * Submit affiliate form
 */
export async function submitAffiliateForm(formData: Record<string, any>): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/forms/affiliate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || 'Failed to submit form',
      };
    }

    return result;
  } catch (error) {
    console.error('Error submitting affiliate form:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error. Please try again.',
    };
  }
}

/**
 * Submit contact form
 */
export async function submitContactForm(formData: Record<string, any>): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/forms/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || 'Failed to submit form',
      };
    }

    return result;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error. Please try again.',
    };
  }
}

/**
 * Check if email service is configured
 */
export async function checkEmailServiceHealth(): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/forms/health`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error checking email service health:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to check service health',
    };
  }
}

