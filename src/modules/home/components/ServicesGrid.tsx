import React from 'react';
import { ServiceCard } from './ServiceCard';
import { Service } from '../types';

interface ServicesGridProps {
  services: Service[];
  onServiceClick?: (service: Service) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ services, onServiceClick }) => {
  // Detect category from first service
  const category = services[0]?.category || 'home-services';
  
  // Home Services
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
  
  // Insurance Services
  const medicare = services.find(s => s.name === 'Medicare');
  const aca = services.find(s => s.name === 'ACA');
  const homeInsurance = services.find(s => s.name === 'Home Insurance');
  const u65Health = services.find(s => s.name === 'U65 Health Insurance');
  const finalExpense = services.find(s => s.name === 'Final Expense');
  const autoInsurance = services.find(s => s.name === 'Auto Insurance');
  
  // Render insurance layout - same structure as home services
  if (category === 'insurance') {
    return (
      <div className="w-full max-w-full" data-node-id="1:14949">
        {/* Mobile: Stack all cards vertically */}
        <div className="flex flex-col gap-4 md:hidden w-full">
          {medicare && <ServiceCard service={medicare} onClick={() => onServiceClick?.(medicare)} />}
          {aca && <ServiceCard service={aca} onClick={() => onServiceClick?.(aca)} />}
          {homeInsurance && <ServiceCard service={homeInsurance} onClick={() => onServiceClick?.(homeInsurance)} />}
          {u65Health && <ServiceCard service={u65Health} onClick={() => onServiceClick?.(u65Health)} />}
          {finalExpense && <ServiceCard service={finalExpense} onClick={() => onServiceClick?.(finalExpense)} />}
          {autoInsurance && <ServiceCard service={autoInsurance} onClick={() => onServiceClick?.(autoInsurance)} />}
        </div>
        
        {/* Tablet: Nested flex with 2 cards per row */}
        <div className="hidden md:flex lg:hidden flex-col gap-[16px] w-full">
          {/* First Row - 2 cards */}
          <div className="flex gap-[16px] w-full">
            {/* Left Column - stacked cards */}
            <div className="flex flex-col gap-[16px] flex-1">
              {medicare && <ServiceCard service={medicare} onClick={() => onServiceClick?.(medicare)} />}
              {aca && <ServiceCard service={aca} onClick={() => onServiceClick?.(aca)} />}
              {homeInsurance && <ServiceCard service={homeInsurance} onClick={() => onServiceClick?.(homeInsurance)} />}
            </div>
            {/* Right Column - stacked cards */}
            <div className="flex flex-col gap-[16px] flex-1">
              {u65Health && <ServiceCard service={u65Health} onClick={() => onServiceClick?.(u65Health)} />}
              {finalExpense && <ServiceCard service={finalExpense} onClick={() => onServiceClick?.(finalExpense)} />}
              {autoInsurance && <ServiceCard service={autoInsurance} onClick={() => onServiceClick?.(autoInsurance)} />}
            </div>
          </div>
        </div>
        
        {/* Desktop: Nested flex layout matching Figma exactly */}
        <div className="hidden lg:flex flex-col gap-[16px] w-full">
          {/* First Row */}
          <div className="flex gap-[16px] w-full">
            {/* Left Column */}
            <div className="basis-0 flex flex-col gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
              {/* Medicare + ACA side by side */}
              <div className="flex gap-[16px] items-end relative shrink-0 w-full">
                {medicare && (
                  <div className="basis-0 flex-1 grow shrink-0">
                    <ServiceCard service={medicare} onClick={() => onServiceClick?.(medicare)} />
                  </div>
                )}
                {aca && (
                  <div className="basis-0 flex-1 grow shrink-0">
                    <ServiceCard service={aca} onClick={() => onServiceClick?.(aca)} />
                  </div>
                )}
              </div>
              {/* Home Insurance - large card */}
              {homeInsurance && (
                <div className="w-full">
                  <ServiceCard service={homeInsurance} onClick={() => onServiceClick?.(homeInsurance)} />
                </div>
              )}
            </div>
            {/* Right Column */}
            <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
              <div className="basis-0 flex flex-col gap-[16px] grow h-full items-center min-h-px min-w-px relative shrink-0">
                {/* U65 Health Insurance - large card on top */}
              {u65Health && (
                  <div className="w-full">
                  <ServiceCard service={u65Health} onClick={() => onServiceClick?.(u65Health)} />
                </div>
              )}
                {/* Final Expense + Auto Insurance side by side */}
                <div className="flex gap-[16px] items-end relative shrink-0 w-full">
                  {finalExpense && (
                    <div className="basis-0 flex-1 grow shrink-0">
                      <ServiceCard service={finalExpense} onClick={() => onServiceClick?.(finalExpense)} />
                    </div>
                  )}
                  {autoInsurance && (
                    <div className="basis-0 flex-1 grow shrink-0">
                      <ServiceCard service={autoInsurance} onClick={() => onServiceClick?.(autoInsurance)} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Render home services layout - exact Figma structure
  return (
    <div className="w-full max-w-full" data-node-id="1:14135">
      {/* Mobile: Stack all cards vertically */}
      <div className="flex flex-col gap-4 md:hidden w-full">
        {fireDamage && <ServiceCard service={fireDamage} onClick={() => onServiceClick?.(fireDamage)} />}
        {bathroomRemodel && <ServiceCard service={bathroomRemodel} onClick={() => onServiceClick?.(bathroomRemodel)} />}
        {gutter && <ServiceCard service={gutter} onClick={() => onServiceClick?.(gutter)} />}
        {waterDamage && <ServiceCard service={waterDamage} onClick={() => onServiceClick?.(waterDamage)} />}
        {applianceRepair && <ServiceCard service={applianceRepair} onClick={() => onServiceClick?.(applianceRepair)} />}
        {moldRemoval && <ServiceCard service={moldRemoval} onClick={() => onServiceClick?.(moldRemoval)} />}
        {roofing && <ServiceCard service={roofing} onClick={() => onServiceClick?.(roofing)} />}
        {locksmith && <ServiceCard service={locksmith} onClick={() => onServiceClick?.(locksmith)} />}
        {electrician && <ServiceCard service={electrician} onClick={() => onServiceClick?.(electrician)} />}
        {pestControl && <ServiceCard service={pestControl} onClick={() => onServiceClick?.(pestControl)} />}
        {hvac && <ServiceCard service={hvac} onClick={() => onServiceClick?.(hvac)} />}
        {plumbing && <ServiceCard service={plumbing} onClick={() => onServiceClick?.(plumbing)} />}
      </div>
      
      {/* Tablet: Nested flex with exactly 2 cards per row - all cards stacked vertically within columns */}
      <div className="hidden md:flex lg:hidden flex-col gap-[16px] w-full">
        {/* First Row - 2 cards (left and right columns) */}
        <div className="flex gap-[16px] w-full">
          {/* Left Column - all cards stacked vertically */}
          <div className="flex flex-col gap-[16px] flex-1">
            {fireDamage && (
              <ServiceCard service={fireDamage} onClick={() => onServiceClick?.(fireDamage)} />
            )}
            {bathroomRemodel && (
              <ServiceCard service={bathroomRemodel} onClick={() => onServiceClick?.(bathroomRemodel)} />
            )}
            {waterDamage && (
              <ServiceCard service={waterDamage} onClick={() => onServiceClick?.(waterDamage)} />
            )}
          </div>
          {/* Right Column - all cards stacked vertically */}
          <div className="flex flex-col gap-[16px] flex-1">
            {gutter && (
              <ServiceCard service={gutter} onClick={() => onServiceClick?.(gutter)} />
            )}
            {applianceRepair && (
              <ServiceCard service={applianceRepair} onClick={() => onServiceClick?.(applianceRepair)} />
            )}
            {moldRemoval && (
              <ServiceCard service={moldRemoval} onClick={() => onServiceClick?.(moldRemoval)} />
            )}
          </div>
        </div>
        
        {/* Second Row - 2 cards (left and right columns) */}
        <div className="flex gap-[16px] w-full">
          {/* Left Column - all cards stacked vertically */}
          <div className="flex flex-col gap-[16px] flex-1">
            {roofing && (
              <ServiceCard service={roofing} onClick={() => onServiceClick?.(roofing)} />
            )}
            {locksmith && (
              <ServiceCard service={locksmith} onClick={() => onServiceClick?.(locksmith)} />
            )}
            {electrician && (
              <ServiceCard service={electrician} onClick={() => onServiceClick?.(electrician)} />
            )}
          </div>
          {/* Right Column - all cards stacked vertically */}
          <div className="flex flex-col gap-[16px] flex-1">
            {pestControl && (
              <ServiceCard service={pestControl} onClick={() => onServiceClick?.(pestControl)} />
            )}
            {hvac && (
              <ServiceCard service={hvac} onClick={() => onServiceClick?.(hvac)} />
            )}
            {plumbing && (
              <ServiceCard service={plumbing} onClick={() => onServiceClick?.(plumbing)} />
            )}
          </div>
        </div>
      </div>
      
      {/* Desktop: Nested flex layout matching Figma exactly */}
      <div className="hidden lg:flex flex-col gap-[16px] w-full">
        {/* First Row */}
        <div className="flex gap-[16px] w-full">
          {/* Left Column */}
          <div className="basis-0 flex flex-col gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
            {/* Fire Damage + Bathroom Remodel side by side */}
            <div className="flex gap-[16px] items-end relative shrink-0 w-full">
              {fireDamage && (
                <div className="basis-0 flex-1 grow shrink-0">
                  <ServiceCard service={fireDamage} onClick={() => onServiceClick?.(fireDamage)} />
                </div>
              )}
              {bathroomRemodel && (
                <div className="basis-0 flex-1 grow shrink-0">
                  <ServiceCard service={bathroomRemodel} onClick={() => onServiceClick?.(bathroomRemodel)} />
                </div>
              )}
            </div>
            {/* Water Damage - large card */}
            {waterDamage && (
              <div className="w-full">
                <ServiceCard service={waterDamage} onClick={() => onServiceClick?.(waterDamage)} />
              </div>
            )}
          </div>
          {/* Right Column */}
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <div className="basis-0 flex flex-col gap-[16px] grow h-full items-center min-h-px min-w-px relative shrink-0">
            {/* Gutter - large card on top */}
            {gutter && (
                <div className="w-full">
                <ServiceCard service={gutter} onClick={() => onServiceClick?.(gutter)} />
              </div>
            )}
            {/* Appliance Repair + Mold Removal side by side */}
              <div className="flex gap-[16px] items-end relative shrink-0 w-full">
              {applianceRepair && (
                  <div className="basis-0 flex-1 grow shrink-0">
                  <ServiceCard service={applianceRepair} onClick={() => onServiceClick?.(applianceRepair)} />
                </div>
              )}
              {moldRemoval && (
                  <div className="basis-0 flex-1 grow shrink-0">
                  <ServiceCard service={moldRemoval} onClick={() => onServiceClick?.(moldRemoval)} />
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Second Row */}
        <div className="flex gap-[16px] items-center relative shrink-0 w-full">
          {/* Left Column */}
          <div className="basis-0 flex flex-col gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
            {/* Roofing + Locksmith side by side */}
            <div className="flex gap-[16px] items-end relative shrink-0 w-full">
              {roofing && (
                <div className="basis-0 flex-1 grow shrink-0">
                  <ServiceCard service={roofing} onClick={() => onServiceClick?.(roofing)} />
                </div>
              )}
              {locksmith && (
                <div className="basis-0 flex-1 grow shrink-0">
                  <ServiceCard service={locksmith} onClick={() => onServiceClick?.(locksmith)} />
                </div>
              )}
            </div>
            {/* Electrician - large card */}
            {electrician && (
              <div className="w-full">
                <ServiceCard service={electrician} onClick={() => onServiceClick?.(electrician)} />
              </div>
            )}
          </div>
          {/* Right Column */}
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <div className="basis-0 flex flex-col gap-[16px] grow h-full items-center min-h-px min-w-px relative shrink-0">
            {/* Pest Control - large card on top */}
            {pestControl && (
                <div className="w-full">
                <ServiceCard service={pestControl} onClick={() => onServiceClick?.(pestControl)} />
              </div>
            )}
            {/* HVAC + Plumbing side by side */}
              <div className="flex gap-[16px] items-end relative shrink-0 w-full">
              {hvac && (
                  <div className="basis-0 flex-1 grow shrink-0">
                  <ServiceCard service={hvac} onClick={() => onServiceClick?.(hvac)} />
                </div>
              )}
              {plumbing && (
                  <div className="basis-0 flex-1 grow shrink-0">
                  <ServiceCard service={plumbing} onClick={() => onServiceClick?.(plumbing)} />
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

