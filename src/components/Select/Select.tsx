import React, { useState, useRef, useEffect } from 'react';
import { InputState } from '@/design-system';
import chevronUpIcon from '@/assets/icons/heroicons_chevron-up.svg';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string | string[]; // string for single select, string[] for multi-select
  onChange?: (value: string | string[]) => void;
  placeholder?: string;
  state?: InputState;
  error?: string;
  label?: string;
  multiSelect?: boolean;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  state = 'default',
  error,
  label,
  multiSelect = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<string | string[]>(multiSelect ? [] : '');
  const selectRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);

  const currentValue = value !== undefined ? value : internalValue;
  const isMulti = multiSelect;
  const selectedValues = isMulti ? (currentValue as string[]) : [];
  const singleValue = isMulti ? '' : (currentValue as string);

  // Determine display state
  const hasValue = isMulti ? selectedValues.length > 0 : !!singleValue;
  const baseState = state === 'default' && isTyping ? 'typing' : (hasValue && state === 'default' ? 'filled' : state);
  // When open, apply primary border (same as input focus state)
  const currentState = isOpen && baseState !== 'error' ? 'typing' : baseState;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsTyping(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsTyping(true);
  };

  const handleSelect = (optionValue: string) => {
    if (isMulti) {
      const current = selectedValues;
      const newValue = current.includes(optionValue)
        ? current.filter(v => v !== optionValue)
        : [...current, optionValue];
      
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    } else {
      if (value === undefined) {
        setInternalValue(optionValue);
      }
      onChange?.(optionValue);
      setIsOpen(false);
      setIsTyping(false);
    }
  };

  const handleRemoveTag = (optionValue: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (isMulti) {
      const newValue = selectedValues.filter(v => v !== optionValue);
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    }
  };

  const handleClearAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isMulti) {
      if (value === undefined) {
        setInternalValue([]);
      }
      onChange?.([]);
    }
  };

  const baseClasses = 'w-full px-[14px] py-[10px] rounded-[10px] font-medium text-s transition-all duration-200 outline-none min-h-[44px]';
  
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

  const getSelectedOption = () => {
    if (isMulti) return null;
    return options.find(opt => opt.value === singleValue);
  };

  const selectedOption = getSelectedOption();

  return (
    <div className="flex gap-[14px] flex-col" ref={selectRef}>
      {label && (
        <label className="font-medium text-s text-neutral-900 mb-0">
          {label}
        </label>
      )}
      <div className="relative">
        {/* Multi-select: Show chips */}
        {isMulti && (
          <button
            type="button"
            onClick={handleToggle}
            className={`${classes} flex items-center justify-between cursor-pointer`}
          >
            <div className="flex flex-wrap gap-[10px] items-center flex-1 min-w-0">
              {selectedValues.length === 0 ? (
                <span className="text-neutral-500">{placeholder}</span>
              ) : (
                <>
                  {selectedValues.slice(0, 2).map((val) => {
                    const option = options.find(opt => opt.value === val);
                    return (
                      <div
                        key={val}
                        className="bg-white border border-neutral-200 flex items-center gap-[5px] px-[10px] py-[6px] rounded-[24px] shrink-0"
                      >
                        <span className="font-medium text-s text-neutral-900">{option?.label || val}</span>
                        <button
                          type="button"
                          onClick={(e) => handleRemoveTag(val, e)}
                          className="w-4 h-4 flex items-center justify-center"
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4L4 12M4 4L12 12" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    );
                  })}
                  {selectedValues.length > 2 && (
                    <div className="bg-white border border-neutral-200 flex items-center px-[10px] py-[6px] rounded-[24px] shrink-0">
                      <span className="font-medium text-s text-neutral-900">{selectedValues.length - 2}+</span>
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="bg-white flex items-center justify-center px-[10px] py-[6px] rounded-[10px] shrink-0 w-[32px] ml-2">
              <img
                src={chevronUpIcon}
                alt=""
                className={`w-5 h-5 transition-transform ${isOpen ? '' : 'rotate-180'}`}
              />
            </div>
          </button>
        )}

        {/* Single select */}
        {!isMulti && (
          <button
            type="button"
            onClick={handleToggle}
            className={`${classes} flex items-center justify-between cursor-pointer`}
          >
            <span className={selectedOption ? 'text-neutral-900' : 'text-neutral-500'}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <div className="flex items-center justify-center shrink-0 ml-2">
              <img
                src={chevronUpIcon}
                alt=""
                className={`w-[18px] h-[18px] transition-transform ${isOpen ? '' : 'rotate-180'}`}
              />
            </div>
          </button>
        )}

        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute z-50 bg-white border border-neutral-200 rounded-[10px] shadow-[0px_10px_16px_0px_rgba(0,0,0,0.05)] mt-1 w-full max-h-[252px] overflow-y-auto">
            <div className="p-[5px]">
              {options.map((option) => {
                const isSelected = isMulti 
                  ? selectedValues.includes(option.value)
                  : singleValue === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleSelect(option.value)}
                    className={`
                      w-full flex items-center justify-between px-4 py-[10px] rounded-[10px] text-left
                      ${isSelected ? 'bg-primary-100' : 'hover:bg-neutral-50'}
                    `}
                  >
                    <span className="font-medium text-s text-neutral-900">{option.label}</span>
                    {isMulti && (
                      <div className="w-4 h-4 flex items-center justify-center shrink-0">
                        {isSelected ? (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="2" width="12" height="12" rx="2" fill="#0070FF"/>
                            <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="2" width="12" height="12" rx="2" stroke="#E4E4E7" strokeWidth="1.5"/>
                          </svg>
                        )}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Multi-select: Selected count and Clear All */}
        {isMulti && selectedValues.length > 0 && (
          <div className="flex items-center justify-between mt-2">
            <span className="font-medium text-[13px] text-primary-500">
              {selectedValues.length} selected
            </span>
            <button
              type="button"
              onClick={handleClearAll}
              className="font-medium text-[13px] text-primary-500 hover:opacity-70"
            >
              Clear All
            </button>
          </div>
        )}
      </div>
      {error && (
        <span className="text-xs text-error-200">{error}</span>
      )}
    </div>
  );
};

