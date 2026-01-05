/**
 * Location API service using CountryStateCity API
 * Free tier: https://countrystatecity.in/
 * 
 * Note: For production, you should:
 * 1. Get a free API key from https://countrystatecity.in/
 * 2. Store it in environment variables
 * 3. Use it in the headers: { 'X-CSCAPI-KEY': 'YOUR_API_KEY' }
 */

const API_BASE_URL = 'https://api.countrystatecity.in/v1';

// For now, using public endpoint (limited requests)
// In production, add API key: { 'X-CSCAPI-KEY': import.meta.env.VITE_CSC_API_KEY }
const getHeaders = () => {
  const apiKey = import.meta.env.VITE_CSC_API_KEY;
  return {
    'Content-Type': 'application/json',
    ...(apiKey && { 'X-CSCAPI-KEY': apiKey }),
  };
};

export interface Country {
  iso2: string;
  iso3: string;
  name: string;
  phone_code: string;
  capital: string;
  currency: string;
  currency_name: string;
  currency_symbol: string;
  tld: string;
  native: string;
  region: string;
  subregion: string;
  latitude: string;
  longitude: string;
  emoji: string;
  emojiU: string;
}

export interface State {
  iso2: string;
  name: string;
}

export interface City {
  id: number;
  name: string;
  iso2: string;
}

/**
 * Fetch all countries
 */
export async function fetchCountries(): Promise<Country[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/countries`, {
      headers: getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch countries: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    // Fallback to basic country list if API fails
    return getFallbackCountries();
  }
}

/**
 * Fetch states/provinces for a country
 */
export async function fetchStates(countryCode: string): Promise<State[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/countries/${countryCode}/states`, {
      headers: getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch states: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching states for ${countryCode}:`, error);
    return [];
  }
}

/**
 * Fetch cities for a country and state
 * Note: The API uses state ISO2 codes, but we might receive state names
 * This function tries both approaches
 */
export async function fetchCities(countryCode: string, stateCodeOrName?: string): Promise<City[]> {
  try {
    if (!stateCodeOrName) {
      // Fetch all cities for the country
      const response = await fetch(`${API_BASE_URL}/countries/${countryCode}/cities`, {
        headers: getHeaders(),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch cities: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    }

    // Try to fetch cities by state code
    // First, get states to find the correct ISO2 code
    const states = await fetchStates(countryCode);
    const state = states.find(s => s.iso2 === stateCodeOrName || s.name === stateCodeOrName);
    
    if (state) {
      const response = await fetch(`${API_BASE_URL}/countries/${countryCode}/states/${state.iso2}/cities`, {
        headers: getHeaders(),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch cities: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    }

    return [];
  } catch (error) {
    console.error(`Error fetching cities for ${countryCode}/${stateCodeOrName}:`, error);
    return [];
  }
}

/**
 * Get country options for select dropdown
 */
export async function getCountryOptions() {
  const countries = await fetchCountries();
  return countries.map(country => ({
    value: country.iso2,
    label: country.name,
  }));
}

/**
 * Get state options for select dropdown
 * Returns both ISO2 code and name for flexibility
 */
export async function getStateOptions(countryCode: string) {
  const states = await fetchStates(countryCode);
  return states.map(state => ({
    value: state.iso2, // Use ISO2 code as value for API calls
    label: state.name,
    // Store both for reference
    iso2: state.iso2,
    name: state.name,
  }));
}

/**
 * Get city options for select dropdown
 */
export async function getCityOptions(countryCode: string, stateCode?: string) {
  const cities = await fetchCities(countryCode, stateCode);
  return cities.map(city => ({
    value: city.name,
    label: city.name,
  }));
}

/**
 * Fallback countries if API fails
 */
function getFallbackCountries(): Country[] {
  return [
    { iso2: 'US', iso3: 'USA', name: 'United States', phone_code: '+1', capital: 'Washington, D.C.', currency: 'USD', currency_name: 'US Dollar', currency_symbol: '$', tld: '.us', native: 'United States', region: 'Americas', subregion: 'Northern America', latitude: '38.00000000', longitude: '-97.00000000', emoji: '🇺🇸', emojiU: 'U+1F1FA U+1F1F8' },
    { iso2: 'CA', iso3: 'CAN', name: 'Canada', phone_code: '+1', capital: 'Ottawa', currency: 'CAD', currency_name: 'Canadian Dollar', currency_symbol: '$', tld: '.ca', native: 'Canada', region: 'Americas', subregion: 'Northern America', latitude: '60.00000000', longitude: '-95.00000000', emoji: '🇨🇦', emojiU: 'U+1F1E8 U+1F1E6' },
    { iso2: 'MX', iso3: 'MEX', name: 'Mexico', phone_code: '+52', capital: 'Mexico City', currency: 'MXN', currency_name: 'Mexican Peso', currency_symbol: '$', tld: '.mx', native: 'México', region: 'Americas', subregion: 'Central America', latitude: '23.00000000', longitude: '-102.00000000', emoji: '🇲🇽', emojiU: 'U+1F1F2 U+1F1FD' },
    { iso2: 'GB', iso3: 'GBR', name: 'United Kingdom', phone_code: '+44', capital: 'London', currency: 'GBP', currency_name: 'British Pound', currency_symbol: '£', tld: '.uk', native: 'United Kingdom', region: 'Europe', subregion: 'Northern Europe', latitude: '54.00000000', longitude: '-2.00000000', emoji: '🇬🇧', emojiU: 'U+1F1EC U+1F1E7' },
    { iso2: 'AU', iso3: 'AUS', name: 'Australia', phone_code: '+61', capital: 'Canberra', currency: 'AUD', currency_name: 'Australian Dollar', currency_symbol: '$', tld: '.au', native: 'Australia', region: 'Oceania', subregion: 'Australia and New Zealand', latitude: '-27.00000000', longitude: '133.00000000', emoji: '🇦🇺', emojiU: 'U+1F1E6 U+1F1FA' },
  ];
}

