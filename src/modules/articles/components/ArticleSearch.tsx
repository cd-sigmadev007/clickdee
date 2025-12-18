import React from 'react';
import hugeiconsSearchArea from '@/assets/icons/hugeicons_search-area.svg';

export interface ArticleSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const ArticleSearch: React.FC<ArticleSearchProps> = ({
  value,
  onChange,
  placeholder = 'Search Articles',
  className = '',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={`flex flex-row items-center self-stretch shrink-0 ${className}`}>
      <div className="w-full bg-neutral-50 border border-neutral-200 border-solid flex gap-[10px] h-full items-center overflow-clip px-[14px] py-[10px] relative rounded-[10px]">
        <div className="relative shrink-0 size-6 flex items-center justify-center">
          <img 
            src={hugeiconsSearchArea} 
            alt="" 
            className="block max-w-none size-full"
            style={{
              filter: 'brightness(0) saturate(100%) invert(45%) sepia(3%) saturate(272%) hue-rotate(314deg) brightness(95%) contrast(86%)'
            }}
          />
        </div>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="font-medium text-s leading-[1.3] not-italic relative shrink-0 text-neutral-500 placeholder:text-neutral-500 outline-none bg-transparent flex-1 min-w-0 border-0"
        />
      </div>
    </div>
  );
};

