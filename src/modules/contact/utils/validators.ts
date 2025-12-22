/**
 * Validation utilities for contact form
 */

// Phone number formatting: formats to (XXX) XXX-XXXX
export const formatPhoneNumber = (value: string): string => {
  // Remove all non-digit characters
  const phoneNumber = value.replace(/\D/g, '');
  
  // Limit to 10 digits
  const limitedPhone = phoneNumber.slice(0, 10);
  
  // Format based on length
  if (limitedPhone.length === 0) return '';
  if (limitedPhone.length <= 3) return `(${limitedPhone}`;
  if (limitedPhone.length <= 6) {
    return `(${limitedPhone.slice(0, 3)}) ${limitedPhone.slice(3)}`;
  }
  return `(${limitedPhone.slice(0, 3)}) ${limitedPhone.slice(3, 6)}-${limitedPhone.slice(6)}`;
};

// Phone number validation
export const validatePhoneNumber = (value: string): string | null => {
  if (!value) return 'Phone number is required';
  
  // Remove formatting to check digits only
  const digits = value.replace(/\D/g, '');
  
  if (digits.length !== 10) {
    return 'Please enter a valid 10-digit phone number';
  }
  
  // Check for invalid patterns (all same digits, etc.)
  if (/^(\d)\1{9}$/.test(digits)) {
    return 'Please enter a valid phone number';
  }
  
  return null;
};

// Email validation
export const validateEmail = (value: string): string | null => {
  if (!value) return 'Email is required';
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return 'Please enter a valid email address';
  }
  
  // Check for common email patterns
  const domain = value.split('@')[1];
  if (!domain || !domain.includes('.')) {
    return 'Please enter a valid email address';
  }
  
  return null;
};

// Name validation (first name, last name)
export const validateName = (value: string, fieldName: string): string | null => {
  if (!value) return `${fieldName} is required`;
  
  if (value.trim().length < 2) {
    return `${fieldName} must be at least 2 characters`;
  }
  
  if (!/^[a-zA-Z\s'-]+$/.test(value)) {
    return `${fieldName} can only contain letters, spaces, hyphens, and apostrophes`;
  }
  
  return null;
};

// Zip code validation (US format: 5 digits or 5+4 format)
export const validateZipCode = (value: string): string | null => {
  if (!value) return 'Zip code is required';
  
  const zipRegex = /^\d{5}(-\d{4})?$/;
  if (!zipRegex.test(value)) {
    return 'Please enter a valid zip code (e.g., 12345 or 12345-6789)';
  }
  
  return null;
};

// Company name validation
export const validateCompanyName = (value: string): string | null => {
  if (!value) return 'Company name is required';
  
  if (value.trim().length < 2) {
    return 'Company name must be at least 2 characters';
  }
  
  return null;
};

// Address validation
export const validateAddress = (value: string): string | null => {
  if (!value) return 'Address is required';
  
  if (value.trim().length < 5) {
    return 'Please enter a valid address';
  }
  
  return null;
};

// Services validation (must select at least one)
export const validateServices = (value: string[]): string | null => {
  if (!value || value.length === 0) {
    return 'Please select at least one service';
  }
  
  return null;
};

// State validation
export const validateState = (value: string): string | null => {
  if (!value) return 'State is required';
  return null;
};

// City validation
export const validateCity = (value: string): string | null => {
  if (!value) return 'City is required';
  return null;
};

// Background check consent validation
export const validateBackgroundCheckConsent = (value: string): string | null => {
  if (!value) return 'Please select an option';
  if (value !== 'yes' && value !== 'no') {
    return 'Please select Yes or No';
  }
  return null;
};

// Terms accepted validation
export const validateTermsAccepted = (value: boolean): string | null => {
  if (!value) return 'You must agree to the terms to continue';
  return null;
};

