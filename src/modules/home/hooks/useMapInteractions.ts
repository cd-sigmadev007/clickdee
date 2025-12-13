import { useState, useCallback } from 'react';
import { StateData, MapPin } from '../types';

export const useMapInteractions = () => {
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [activePin, setActivePin] = useState<MapPin | null>(null);

  const handleStateClick = useCallback((state: StateData) => {
    setSelectedState(state);
  }, []);

  const handleStateHover = useCallback((stateId: string | null) => {
    setHoveredState(stateId);
  }, []);

  const handlePinClick = useCallback((pin: MapPin) => {
    setActivePin(pin);
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedState(null);
    setActivePin(null);
  }, []);

  return {
    selectedState,
    hoveredState,
    activePin,
    handleStateClick,
    handleStateHover,
    handlePinClick,
    clearSelection,
  };
};

