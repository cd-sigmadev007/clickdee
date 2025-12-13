/**
 * Demo state data for nationwide map
 * This will be replaced with API data later
 */

import { StateData } from '../types';
import fireDamageIcon from '@/assets/icons/fire-damage-leads.svg';
import waterDamageIcon from '@/assets/icons/water-damage-leads.svg';
import pestControlIcon from '@/assets/icons/pest-control-leads.svg';
import hvacIcon from '@/assets/icons/hvac-leads.svg';
import plumbingIcon from '@/assets/icons/plumbing-leads.svg';
import roofingIcon from '@/assets/icons/roofing-leads.svg';

const services = [
  { name: 'Fire Damage', icon: fireDamageIcon },
  { name: 'Water Damage', icon: waterDamageIcon },
  { name: 'Pest Control', icon: pestControlIcon },
  { name: 'HVAC', icon: hvacIcon },
  { name: 'Plumbing', icon: plumbingIcon },
  { name: 'Roofing', icon: roofingIcon },
];

const worthValues = ['$300', '$400', '$500', '$600', '$700'];

// Generate random service and worth for a state
const getRandomLead = () => {
  const service = services[Math.floor(Math.random() * services.length)];
  const worth = worthValues[Math.floor(Math.random() * worthValues.length)];
  return { service: service.name, worth, icon: service.icon };
};

// US States with their approximate center coordinates
export const usStates: StateData[] = [
  { id: 'alabama', name: 'Alabama', abbreviation: 'AL', coordinates: [-86.7911, 32.8067], leads: getRandomLead() },
  { id: 'alaska', name: 'Alaska', abbreviation: 'AK', coordinates: [-152.4044, 61.3707], leads: getRandomLead() },
  { id: 'arizona', name: 'Arizona', abbreviation: 'AZ', coordinates: [-111.4312, 33.7298], leads: getRandomLead() },
  { id: 'arkansas', name: 'Arkansas', abbreviation: 'AR', coordinates: [-92.3731, 34.9697], leads: getRandomLead() },
  { id: 'california', name: 'California', abbreviation: 'CA', coordinates: [-119.4179, 36.1162], leads: getRandomLead() },
  { id: 'colorado', name: 'Colorado', abbreviation: 'CO', coordinates: [-105.3111, 39.0598], leads: getRandomLead() },
  { id: 'connecticut', name: 'Connecticut', abbreviation: 'CT', coordinates: [-72.7273, 41.5978], leads: getRandomLead() },
  { id: 'delaware', name: 'Delaware', abbreviation: 'DE', coordinates: [-75.5277, 39.3185], leads: getRandomLead() },
  { id: 'florida', name: 'Florida', abbreviation: 'FL', coordinates: [-81.5158, 27.7663], leads: getRandomLead() },
  { id: 'georgia', name: 'Georgia', abbreviation: 'GA', coordinates: [-83.1132, 33.0406], leads: getRandomLead() },
  { id: 'hawaii', name: 'Hawaii', abbreviation: 'HI', coordinates: [-157.4983, 21.0943], leads: getRandomLead() },
  { id: 'idaho', name: 'Idaho', abbreviation: 'ID', coordinates: [-114.4788, 44.2405], leads: getRandomLead() },
  { id: 'illinois', name: 'Illinois', abbreviation: 'IL', coordinates: [-89.3985, 40.3495], leads: getRandomLead() },
  { id: 'indiana', name: 'Indiana', abbreviation: 'IN', coordinates: [-86.1477, 39.8494], leads: getRandomLead() },
  { id: 'iowa', name: 'Iowa', abbreviation: 'IA', coordinates: [-93.2105, 42.0115], leads: getRandomLead() },
  { id: 'kansas', name: 'Kansas', abbreviation: 'KS', coordinates: [-98.4842, 38.5266], leads: getRandomLead() },
  { id: 'kentucky', name: 'Kentucky', abbreviation: 'KY', coordinates: [-84.6701, 37.6681], leads: getRandomLead() },
  { id: 'louisiana', name: 'Louisiana', abbreviation: 'LA', coordinates: [-91.8749, 31.1695], leads: getRandomLead() },
  { id: 'maine', name: 'Maine', abbreviation: 'ME', coordinates: [-69.3977, 44.3235], leads: getRandomLead() },
  { id: 'maryland', name: 'Maryland', abbreviation: 'MD', coordinates: [-76.5019, 39.0639], leads: getRandomLead() },
  { id: 'massachusetts', name: 'Massachusetts', abbreviation: 'MA', coordinates: [-71.5301, 42.2302], leads: getRandomLead() },
  { id: 'michigan', name: 'Michigan', abbreviation: 'MI', coordinates: [-84.5467, 43.3266], leads: getRandomLead() },
  { id: 'minnesota', name: 'Minnesota', abbreviation: 'MN', coordinates: [-94.6859, 45.6945], leads: getRandomLead() },
  { id: 'mississippi', name: 'Mississippi', abbreviation: 'MS', coordinates: [-89.6678, 32.7416], leads: getRandomLead() },
  { id: 'missouri', name: 'Missouri', abbreviation: 'MO', coordinates: [-92.1893, 38.4561], leads: getRandomLead() },
  { id: 'montana', name: 'Montana', abbreviation: 'MT', coordinates: [-110.3626, 46.9219], leads: getRandomLead() },
  { id: 'nebraska', name: 'Nebraska', abbreviation: 'NE', coordinates: [-98.2681, 41.1254], leads: getRandomLead() },
  { id: 'nevada', name: 'Nevada', abbreviation: 'NV', coordinates: [-117.0554, 38.3135], leads: getRandomLead() },
  { id: 'new-hampshire', name: 'New Hampshire', abbreviation: 'NH', coordinates: [-71.5653, 43.4525], leads: getRandomLead() },
  { id: 'new-jersey', name: 'New Jersey', abbreviation: 'NJ', coordinates: [-74.5210, 40.2989], leads: getRandomLead() },
  { id: 'new-mexico', name: 'New Mexico', abbreviation: 'NM', coordinates: [-106.2485, 34.8405], leads: getRandomLead() },
  { id: 'new-york', name: 'New York', abbreviation: 'NY', coordinates: [-74.9481, 42.1657], leads: getRandomLead() },
  { id: 'north-carolina', name: 'North Carolina', abbreviation: 'NC', coordinates: [-79.0193, 35.6301], leads: getRandomLead() },
  { id: 'north-dakota', name: 'North Dakota', abbreviation: 'ND', coordinates: [-99.7840, 47.5289], leads: getRandomLead() },
  { id: 'ohio', name: 'Ohio', abbreviation: 'OH', coordinates: [-82.7649, 40.3888], leads: getRandomLead() },
  { id: 'oklahoma', name: 'Oklahoma', abbreviation: 'OK', coordinates: [-97.0929, 35.5653], leads: getRandomLead() },
  { id: 'oregon', name: 'Oregon', abbreviation: 'OR', coordinates: [-122.0709, 44.5720], leads: getRandomLead() },
  { id: 'pennsylvania', name: 'Pennsylvania', abbreviation: 'PA', coordinates: [-77.2098, 40.5908], leads: getRandomLead() },
  { id: 'rhode-island', name: 'Rhode Island', abbreviation: 'RI', coordinates: [-71.5118, 41.6809], leads: getRandomLead() },
  { id: 'south-carolina', name: 'South Carolina', abbreviation: 'SC', coordinates: [-80.9450, 33.8569], leads: getRandomLead() },
  { id: 'south-dakota', name: 'South Dakota', abbreviation: 'SD', coordinates: [-99.9018, 44.2998], leads: getRandomLead() },
  { id: 'tennessee', name: 'Tennessee', abbreviation: 'TN', coordinates: [-86.7816, 35.7478], leads: getRandomLead() },
  { id: 'texas', name: 'Texas', abbreviation: 'TX', coordinates: [-99.9018, 31.0545], leads: getRandomLead() },
  { id: 'utah', name: 'Utah', abbreviation: 'UT', coordinates: [-111.8926, 40.1500], leads: getRandomLead() },
  { id: 'vermont', name: 'Vermont', abbreviation: 'VT', coordinates: [-72.7317, 44.0459], leads: getRandomLead() },
  { id: 'virginia', name: 'Virginia', abbreviation: 'VA', coordinates: [-78.1697, 37.7693], leads: getRandomLead() },
  { id: 'washington', name: 'Washington', abbreviation: 'WA', coordinates: [-121.4905, 47.4009], leads: getRandomLead() },
  { id: 'west-virginia', name: 'West Virginia', abbreviation: 'WV', coordinates: [-80.9696, 38.4912], leads: getRandomLead() },
  { id: 'wisconsin', name: 'Wisconsin', abbreviation: 'WI', coordinates: [-89.6165, 44.2685], leads: getRandomLead() },
  { id: 'wyoming', name: 'Wyoming', abbreviation: 'WY', coordinates: [-107.3025, 41.1455], leads: getRandomLead() },
];

