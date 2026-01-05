/**
 * React Query hooks for location data (countries, states, cities)
 */

import { useQuery } from '@tanstack/react-query';
import { fetchCountries, fetchStates, fetchCities, getCountryOptions, getStateOptions, getCityOptions } from '@/utils/locationApi';

/**
 * Hook to fetch all countries
 */
export function useCountries() {
  return useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
    staleTime: 1000 * 60 * 60 * 24, // Cache for 24 hours
    gcTime: 1000 * 60 * 60 * 24 * 7, // Keep in cache for 7 days
  });
}

/**
 * Hook to fetch country options for select dropdown
 */
export function useCountryOptions() {
  return useQuery({
    queryKey: ['countryOptions'],
    queryFn: getCountryOptions,
    staleTime: 1000 * 60 * 60 * 24, // Cache for 24 hours
    gcTime: 1000 * 60 * 60 * 24 * 7, // Keep in cache for 7 days
  });
}

/**
 * Hook to fetch states/provinces for a country
 */
export function useStates(countryCode: string | undefined) {
  return useQuery({
    queryKey: ['states', countryCode],
    queryFn: () => countryCode ? fetchStates(countryCode) : Promise.resolve([]),
    enabled: !!countryCode,
    staleTime: 1000 * 60 * 60 * 24, // Cache for 24 hours
    gcTime: 1000 * 60 * 60 * 24 * 7, // Keep in cache for 7 days
  });
}

/**
 * Hook to fetch state options for select dropdown
 */
export function useStateOptions(countryCode: string | undefined) {
  return useQuery({
    queryKey: ['stateOptions', countryCode],
    queryFn: () => countryCode ? getStateOptions(countryCode) : Promise.resolve([]),
    enabled: !!countryCode,
    staleTime: 1000 * 60 * 60 * 24, // Cache for 24 hours
    gcTime: 1000 * 60 * 60 * 24 * 7, // Keep in cache for 7 days
  });
}

/**
 * Hook to fetch cities for a country and state
 */
export function useCities(countryCode: string | undefined, stateCode: string | undefined) {
  return useQuery({
    queryKey: ['cities', countryCode, stateCode],
    queryFn: () => {
      if (!countryCode) return Promise.resolve([]);
      return fetchCities(countryCode, stateCode);
    },
    enabled: !!countryCode,
    staleTime: 1000 * 60 * 60 * 24, // Cache for 24 hours
    gcTime: 1000 * 60 * 60 * 24 * 7, // Keep in cache for 7 days
  });
}

/**
 * Hook to fetch city options for select dropdown
 */
export function useCityOptions(countryCode: string | undefined, stateCode: string | undefined) {
  return useQuery({
    queryKey: ['cityOptions', countryCode, stateCode],
    queryFn: () => {
      if (!countryCode) return Promise.resolve([]);
      return getCityOptions(countryCode, stateCode);
    },
    enabled: !!countryCode,
    staleTime: 1000 * 60 * 60 * 24, // Cache for 24 hours
    gcTime: 1000 * 60 * 60 * 24 * 7, // Keep in cache for 7 days
  });
}

