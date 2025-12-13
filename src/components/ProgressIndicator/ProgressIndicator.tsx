import React from 'react';

export interface ProgressIndicatorProps {
  steps: number;
  currentStep: number;
  className?: string;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  steps,
  currentStep,
  className = '',
}) => {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      {Array.from({ length: steps }).map((_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber <= currentStep;
        
        return (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
              isActive
                ? 'bg-primary-500'
                : 'bg-white border border-neutral-300'
            }`}
            aria-label={`Step ${stepNumber} ${isActive ? 'completed' : 'pending'}`}
          />
        );
      })}
    </div>
  );
};

