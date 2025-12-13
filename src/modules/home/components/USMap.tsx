import React from 'react';
import { ComposableMap, Geographies, Geography, Annotation } from 'react-simple-maps';
import { geoCentroid } from 'd3-geo';
import { usStates } from '../utils/stateData';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

// Create a mapping from state name to abbreviation
const getStateAbbreviation = (stateName: string): string => {
  const state = usStates.find(s => s.name === stateName);
  return state?.abbreviation || '';
};

interface USMapProps {
  onStateClick?: (stateName: string) => void;
  onStateHover?: (stateName: string | null) => void;
  hoveredStateName?: string | null;
}

export const USMap: React.FC<USMapProps> = ({
  onStateClick,
  onStateHover,
  hoveredStateName,
}) => {
  return (
    <div className="h-full relative w-full max-w-[700px] overflow-visible" data-name="US Map" data-node-id="1:14273">
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{
          scale: 1000,
        }}
        width={700}
        height={482}
        className="w-full h-auto"
        style={{ overflow: 'visible' }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateName = geo.properties.name;
              const isHovered = hoveredStateName === stateName;
              const centroid = geoCentroid(geo);
              const abbreviation = getStateAbbreviation(stateName);
              
              return (
                <React.Fragment key={geo.rsmKey}>
                  <Geography
                    geography={geo}
                    fill={isHovered ? '#71717A' : '#27272A'}
                    stroke="#E4E4E7"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: 'none' },
                      hover: { outline: 'none', fill: '#71717A', cursor: 'pointer' },
                      pressed: { outline: 'none', fill: '#71717A' },
                    }}
                    onClick={() => onStateClick?.(stateName)}
                    onMouseEnter={() => onStateHover?.(stateName)}
                    onMouseLeave={() => onStateHover?.(null)}
                  />
                  {/* Add state abbreviation label using centroid */}
                  {abbreviation && (
                    <Annotation
                      subject={centroid}
                      dx={0}
                      dy={0}
                      connectorProps={{}}
                    >
                      <text
                        x={0}
                        y={0}
                        textAnchor="middle"
                        fontSize={9}
                        fontFamily="Inter, sans-serif"
                        fontWeight={600}
                        fill="#F4F4F5"
                        style={{ pointerEvents: 'none', userSelect: 'none' }}
                      >
                        {abbreviation}
                      </text>
                    </Annotation>
                  )}
                </React.Fragment>
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

