import React from 'react';

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  role?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  role,
  size = 'md',
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt || name || 'Avatar'}
          className={`${sizeClasses[size]} rounded-full object-cover`}
        />
      ) : (
        <div
          className={`${sizeClasses[size]} rounded-full bg-neutral-200 flex items-center justify-center`}
        >
          <span className="text-neutral-500 font-bold">
            {name?.charAt(0).toUpperCase() || '?'}
          </span>
        </div>
      )}
      {(name || role) && (
        <div className="flex flex-col gap-1">
          {name && (
            <span className="font-bold text-s text-neutral-800">
              {name}
            </span>
          )}
          {role && (
            <span className="font-medium text-s text-neutral-500">
              {role}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

