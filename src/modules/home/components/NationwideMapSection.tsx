import React, { useMemo } from 'react';
import { Button } from '@/components/Button';
import { Typography } from '@/components';
import { USMap } from './USMap';
import { HoveringPopup } from '@/components/HoveringPopup';
import { StatsCards } from './StatsCards';
import { StatCard } from '../types';
import { useMapInteractions } from '../hooks/useMapInteractions';
import { usStates } from '../utils/stateData';
import chevronLeftIcon from '@/assets/icons/heroicons_chevron-left.svg';
import { geoAlbersUsa } from 'd3-geo';

const stats: StatCard[] = [
  {
    id: 'roi',
    value: '8.5X',
    label: 'Average Return On Investment',
  },
  {
    id: 'leads',
    value: '10',
    label: 'Average Leads Delivered per Month',
  },
  {
    id: 'conversion',
    value: '60%',
    label: 'Average conversion rate on inbound calls',
  },
];

// Create projection for converting coordinates to screen position
// Match the projection config from USMap component
const projection = geoAlbersUsa()
  .scale(1000)
  .translate([350, 241]); // Center of 700x482 map

export const NationwideMapSection: React.FC = () => {
  const { hoveredState, handleStateHover } = useMapInteractions();
  
  // Find the hovered state data
  const hoveredStateData = useMemo(() => {
    if (!hoveredState) return null;
    return usStates.find(state => state.name === hoveredState);
  }, [hoveredState]);

  // Calculate popup position from state coordinates
  const popupPosition = useMemo(() => {
    if (!hoveredStateData?.coordinates) return null;
    
    try {
      const [longitude, latitude] = hoveredStateData.coordinates;
      const coords = projection([longitude, latitude]);
      
      if (!coords || !coords[0] || !coords[1]) return null;
      
      return {
        x: coords[0],
        y: coords[1] - 40, // Position above the state (moved down)
      };
    } catch (error) {
      return null;
    }
  }, [hoveredStateData]);

  return (
    <div className="bg-neutral-900 flex flex-col gap-6 sm:gap-8 items-center justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-[80px] lg:py-[88px] relative w-full" data-node-id="1:14262">
      {/* Title */}
      <div className="flex flex-col sm:flex-row gap-2.5 items-center justify-center w-full" data-node-id="1:14263">
        <Typography variant="title" weight="bold" className="text-white text-center" data-node-id="1:14264">
          Tap into leads across
        </Typography>
        <div className="bg-neutral-800 flex items-start justify-center px-2.5 py-1.5 rounded-[10px]" data-node-id="1:14265">
          <Typography variant="title" weight="bold" className="text-primary-500" data-node-id="1:14266">
            Nationwide
          </Typography>
        </div>
        <Typography variant="title" weight="bold" className="text-white" data-node-id="1:14267">
          today!
        </Typography>
      </div>
      
      {/* CTA Button */}
      <Button variant="secondary" className="bg-white text-neutral-900 flex items-center gap-[5px]">
        Get Leads Now
        <img src={chevronLeftIcon} alt="" className="w-4 h-4 rotate-180" data-node-id="1:14270" />
      </Button>
      
      {/* Map and Stats */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center justify-center px-0 py-4 relative rounded-[20px] sm:rounded-[40px] w-full" data-node-id="1:14272">
        <div className="relative w-full max-w-[700px] flex justify-center overflow-visible">
          <USMap
            onStateHover={handleStateHover}
            hoveredStateName={hoveredState}
          />
          {hoveredStateData && hoveredStateData.leads && popupPosition && (
            <div
              className="absolute pointer-events-none"
              style={{
                left: `${popupPosition.x}px`,
                top: `${popupPosition.y}px`,
                transform: 'translate(-50%, -100%)',
              }}
              data-node-id="1:14661"
            >
              <HoveringPopup
                amount={hoveredStateData.leads.worth.replace('$', '')}
                worth=" worth"
                title={`${hoveredStateData.leads.service} leads in`}
                subtitle={hoveredStateData.name}
                icon={hoveredStateData.leads.icon && <img src={hoveredStateData.leads.icon} alt="" className="w-8 h-8" />}
              />
            </div>
          )}
        </div>
        
          <StatsCards stats={stats} />
      </div>
      
      {/* Footer Note */}
      <Typography variant="s" weight="medium" className="text-neutral-500 text-center max-w-full" data-node-id="1:14681">
        <p className="mb-0">* More competitive areas of the country command higher Lead prices.</p>
        <p>The statistics may vary according to the season and movements in consumption.</p>
      </Typography>
    </div>
  );
};

