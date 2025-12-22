export interface FormField {
  type: 'text' | 'textarea' | 'select' | 'multiselect' | 'radio' | 'checkbox' | 'phone';
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  options?: Array<{ value: string; label: string }>; // For select, multiselect, radio
  validation?: (value: any) => string | null; // Return error message or null
  groupWith?: string[]; // Field names to group in a row (for state/city/zip)
  separatorAfter?: boolean; // Add separator line after this field
}

export interface FormStep {
  id: string;
  title: string;
  fields: FormField[];
}

export interface ContactFormData {
  // Step 1: Company Profile
  services?: string[];
  companyName?: string;
  address?: string;
  state?: string;
  city?: string;
  zipCode?: string;
  
  // Step 2: Comments
  comments?: string;
  
  // Step 3: Reference Person
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  backgroundCheckConsent?: 'yes' | 'no';
  termsAccepted?: boolean;
}

