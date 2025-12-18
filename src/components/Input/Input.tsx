import React, { useState } from 'react';
import { InputState } from '@/design-system';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  state?: InputState;
  error?: string;
  icon?: React.ReactNode;
  onChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  state = 'default',
  error,
  icon,
  value,
  onChange,
  className = '',
  ...props
}) => {
  const [isTyping, setIsTyping] = useState(false);
  const [internalValue, setInternalValue] = useState('');

  const currentValue = value !== undefined ? value : internalValue;
  const currentState = state === 'default' && isTyping ? 'typing' : state;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (value === undefined) {
      setInternalValue(newValue);
    }
    setIsTyping(newValue.length > 0);
    onChange?.(newValue);
  };

  const handleBlur = () => {
    setIsTyping(false);
  };

  const baseClasses = 'w-full px-[14px] py-[10px] rounded-input font-medium text-s transition-all duration-200 outline-none focus:border-primary-500 min-h-[44px]';
  
  const stateClasses = {
    default: 'bg-neutral-50 border border-neutral-200 text-neutral-500',
    typing: 'bg-white border border-primary-500 text-neutral-900',
    filled: 'bg-neutral-50 border border-neutral-200 text-neutral-900',
    error: 'bg-neutral-50 border border-error-200 text-neutral-900',
  };

  const classes = `
    ${baseClasses}
    ${stateClasses[currentState]}
    ${error ? 'border-error-200' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className="flex gap-[14px] flex-col">
      {label && (
        <label className="font-medium text-s text-neutral-900 mb-0">
          {label}
        </label>
      )}
      <div className="relative flex items-center gap-[5px]">
        {icon && (
          <span className="absolute left-[14px] flex items-center justify-center w-[13.645px] h-[13.645px] text-neutral-500">
            {icon}
          </span>
        )}
        <input
          type="text"
          className={classes}
          value={currentValue}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ paddingLeft: icon ? '36px' : '14px' }}
          {...props}
        />
        {currentState === 'typing' && (
          <span className="absolute right-[14px] text-primary-500 font-light">|</span>
        )}
      </div>
      {error && (
        <span className="text-xs text-error-200">{error}</span>
      )}
    </div>
  );
};

