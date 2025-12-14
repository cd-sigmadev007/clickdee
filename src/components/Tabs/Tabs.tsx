import React, { useState } from 'react';

export interface TabItem {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultValue,
  value: controlledValue,
  onChange,
  className = '',
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue || items[0]?.value || '');
  const activeValue = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <div className={`bg-neutral-200 border border-neutral-300 rounded-[40px] p-[5px] flex items-center ${className}`}>
      {items.map((item) => {
        const isActive = activeValue === item.value;
        return (
          <button
            key={item.value}
            onClick={() => !item.disabled && handleChange(item.value)}
            disabled={item.disabled}
            className={`
              flex items-center justify-center px-3 py-2.5 rounded-[40px] transition-all duration-200 w-[130px]
              ${isActive ? 'bg-white' : ''}
              ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            <span
              className={`font-bold text-s ${
                isActive ? 'text-neutral-900' : 'text-neutral-500'
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

