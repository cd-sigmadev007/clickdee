import React from 'react';
import { ServiceCard } from './ServiceCard';
import { Service } from '../types';

interface ServicesGridProps {
  services: Service[];
  onServiceClick?: (service: Service) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ services, onServiceClick }) => {
  // Filter and organize services
  const fireDamage = services.find(s => s.name === 'Fire Damage');
  const bathroomRemodel = services.find(s => s.name === 'Bathroom Remodel');
  const waterDamage = services.find(s => s.name === 'Water Damage');
  const gutter = services.find(s => s.name === 'Gutter');
  const applianceRepair = services.find(s => s.name === 'Appliance Repair');
  const moldRemoval = services.find(s => s.name === 'Mold Removal');
  const roofing = services.find(s => s.name === 'Roofing');
  const locksmith = services.find(s => s.name === 'Locksmith');
  const electrician = services.find(s => s.name === 'Electrician');
  const pestControl = services.find(s => s.name === 'Pest control');
  const hvac = services.find(s => s.name === 'Hvac');
  const plumbing = services.find(s => s.name === 'Plumbing');

  return (
    <div className="flex flex-col gap-4 w-full" data-node-id="1:14135">
      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {fireDamage && (
          <ServiceCard service={fireDamage} onClick={() => onServiceClick?.(fireDamage)} />
        )}
        {bathroomRemodel && (
          <ServiceCard service={bathroomRemodel} onClick={() => onServiceClick?.(bathroomRemodel)} />
        )}
        {gutter && (
          <ServiceCard service={gutter} onClick={() => onServiceClick?.(gutter)} />
        )}
        {waterDamage && (
          <div className="col-span-1 md:col-span-2 lg:col-span-1 lg:row-span-2 lg:h-full">
            <div className="h-full">
              <ServiceCard service={waterDamage} onClick={() => onServiceClick?.(waterDamage)} />
            </div>
          </div>
        )}
      </div>
      
      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {applianceRepair && (
          <ServiceCard service={applianceRepair} onClick={() => onServiceClick?.(applianceRepair)} />
        )}
        {moldRemoval && (
          <ServiceCard service={moldRemoval} onClick={() => onServiceClick?.(moldRemoval)} />
        )}
        {roofing && (
          <ServiceCard service={roofing} onClick={() => onServiceClick?.(roofing)} />
        )}
        {locksmith && (
          <ServiceCard service={locksmith} onClick={() => onServiceClick?.(locksmith)} />
        )}
      </div>
      
      {/* Third Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {electrician && (
          <div className="col-span-1 md:col-span-2">
            <ServiceCard service={electrician} onClick={() => onServiceClick?.(electrician)} />
          </div>
        )}
        {pestControl && (
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <ServiceCard service={pestControl} onClick={() => onServiceClick?.(pestControl)} />
          </div>
        )}
      </div>
      
      {/* Fourth Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {hvac && (
          <ServiceCard service={hvac} onClick={() => onServiceClick?.(hvac)} />
        )}
        {plumbing && (
          <ServiceCard service={plumbing} onClick={() => onServiceClick?.(plumbing)} />
        )}
      </div>
    </div>
  );
};

