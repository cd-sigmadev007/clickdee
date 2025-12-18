import React, { useState } from 'react';
import { InputState } from '@/design-system';

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  label?: string;
  state?: InputState;
  error?: string;
  onChange?: (value: string) => void;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  state = 'default',
  error,
  value,
  onChange,
  className = '',
  ...props
}) => {
  const [isTyping, setIsTyping] = useState(false);
  const [internalValue, setInternalValue] = useState('');

  const currentValue = value !== undefined ? value : internalValue;
  const currentState = state === 'default' && isTyping ? 'typing' : (currentValue && state === 'default' ? 'filled' : state);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

  const baseClasses = 'w-full px-[14px] py-[10px] pb-[72px] rounded-[10px] font-medium text-s transition-all duration-200 outline-none resize-none';
  
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
      <div className="relative">
        <textarea
          className={classes}
          value={currentValue}
          onChange={handleChange}
          onBlur={handleBlur}
          {...props}
        />
        {currentState === 'typing' && (
          <span className="absolute right-[14px] top-[10px] text-primary-500 font-light">|</span>
        )}
      </div>
      {error && (
        <span className="text-xs text-error-200">{error}</span>
      )}
    </div>
  );
};

