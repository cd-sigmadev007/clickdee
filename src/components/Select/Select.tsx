import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
  height?: number; // Height in pixels, defaults to 44px
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
  height = 44,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<string | string[]>(multiSelect ? [] : '');
  const selectRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const tagsContainerRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<{ top: number; left: number; width: number } | null>(null);
  const [visibleTagsCount, setVisibleTagsCount] = useState<number | null>(null);

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
      const target = event.target as Node;
      if (
        selectRef.current && 
        !selectRef.current.contains(target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(target)
      ) {
        setIsOpen(false);
        setIsTyping(false);
        setDropdownPosition(null);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleToggle = () => {
    if (!isOpen && selectRef.current) {
      const button = selectRef.current.querySelector('button');
      if (button) {
        const rect = button.getBoundingClientRect();
        setDropdownPosition({
          top: rect.bottom + window.scrollY + 4, // 4px margin (mt-1 = 4px)
          left: rect.left + window.scrollX,
          width: rect.width,
        });
      }
    }
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

  const baseClasses = `w-full px-[14px] py-[10px] rounded-[10px] font-medium text-s transition-all duration-200 outline-none`;
  const heightStyle = { minHeight: `${height}px` };
  
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

  // Calculate how many tags fit in one line
  useEffect(() => {
    if (!isMulti || selectedValues.length === 0 || !tagsContainerRef.current) {
      setVisibleTagsCount(null);
      return;
    }

    const calculateVisibleTags = () => {
      const container = tagsContainerRef.current;
      if (!container) return;

      const containerWidth = container.offsetWidth;
      const chevronWidth = 48; // Approximate width of chevron button + margin
      const availableWidth = containerWidth - chevronWidth;
      
      // Create a temporary container to measure tag widths
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.visibility = 'hidden';
      tempContainer.style.display = 'flex';
      tempContainer.style.gap = '10px';
      tempContainer.style.flexWrap = 'nowrap';
      tempContainer.style.fontFamily = 'Satoshi, sans-serif';
      tempContainer.style.fontSize = '14px';
      tempContainer.style.fontWeight = '500';
      document.body.appendChild(tempContainer);

      let totalWidth = 0;
      let count = 0;
      const gap = 10;

      for (const val of selectedValues) {
        const option = options.find(opt => opt.value === val);
        const tag = document.createElement('div');
        tag.style.display = 'flex';
        tag.style.alignItems = 'center';
        tag.style.gap = '5px';
        tag.style.padding = '6px 10px';
        tag.style.borderRadius = '24px';
        tag.style.whiteSpace = 'nowrap';
        tag.style.border = '1px solid #E4E4E7';
        
        const label = document.createElement('span');
        label.textContent = option?.label || val;
        label.style.fontSize = '14px';
        label.style.fontWeight = '500';
        tag.appendChild(label);
        
        // Add close button width (16px + 5px gap)
        const closeBtn = document.createElement('div');
        closeBtn.style.width = '16px';
        closeBtn.style.height = '16px';
        closeBtn.style.flexShrink = '0';
        tag.appendChild(closeBtn);
        
        tempContainer.appendChild(tag);
        const tagWidth = tag.offsetWidth;
        
        // Check if this tag fits (including gap)
        const widthWithGap = totalWidth + (count > 0 ? gap : 0) + tagWidth;
        
        if (widthWithGap <= availableWidth) {
          totalWidth = widthWithGap;
          count++;
        } else {
          break;
        }
      }

      document.body.removeChild(tempContainer);
      setVisibleTagsCount(count);
    };

    // Use requestAnimationFrame to ensure DOM is ready
    const timeoutId = setTimeout(calculateVisibleTags, 0);
    
    // Recalculate on window resize
    const handleResize = () => {
      calculateVisibleTags();
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMulti, selectedValues, options, isOpen]);

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
            style={heightStyle}
          >
            <div ref={tagsContainerRef} className="flex flex-nowrap gap-[10px] items-center flex-1 min-w-0 overflow-hidden">
              {selectedValues.length === 0 ? (
                <span className="text-neutral-500">{placeholder}</span>
              ) : (
                <>
                  {selectedValues.slice(0, visibleTagsCount !== null ? visibleTagsCount : selectedValues.length).map((val) => {
                    const option = options.find(opt => opt.value === val);
                    return (
                      <div
                        key={val}
                        className="bg-white border border-neutral-200 flex items-center gap-[5px] px-[10px] py-[6px] rounded-[24px] shrink-0"
                      >
                        <span className="font-medium text-s text-neutral-900 whitespace-nowrap">{option?.label || val}</span>
                        <button
                          type="button"
                          onClick={(e) => handleRemoveTag(val, e)}
                          className="w-4 h-4 flex items-center justify-center shrink-0"
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4L4 12M4 4L12 12" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    );
                  })}
                  {visibleTagsCount !== null && visibleTagsCount < selectedValues.length && (
                    <div className="bg-white border border-neutral-200 flex items-center px-[10px] py-[6px] rounded-[24px] shrink-0">
                      <span className="font-medium text-s text-neutral-900">+{selectedValues.length - visibleTagsCount}</span>
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
            style={heightStyle}
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
        {isOpen && dropdownPosition && createPortal(
          <div 
            ref={dropdownRef}
            className="absolute z-[99999] bg-white border border-neutral-200 rounded-[10px] shadow-[0px_10px_16px_0px_rgba(0,0,0,0.05)] max-h-[252px] overflow-y-auto"
            style={{ 
              top: `${dropdownPosition.top}px`,
              left: `${dropdownPosition.left}px`,
              width: `${dropdownPosition.width}px`,
            }}
          >
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
          </div>,
          document.body
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

