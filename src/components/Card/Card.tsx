import { cn } from 'clsx-for-tailwind';
import React from 'react';

type CardSize = 'sm' | 'md' | 'lg' | 'full';

type CardProps = {
  title: string
  description?: string
  image?: string | React.ReactNode
  onClick?: () => void
  horizontal?: boolean
  footer?: React.ReactNode
  size?: CardSize
  containerClassName?: string
  imageClassName?: string
  titleClassName?: string
  descriptionClassName?: string
};

export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  onClick,
  footer,
  horizontal = false,
  size = 'md',
  containerClassName,
  descriptionClassName,
  imageClassName,
  titleClassName
}) => {
  const sizeClasses = {
    sm: 'max-w-xs',
    md: 'max-w-sm',
    lg: 'max-w-md',
    full: 'w-full'
  }

  const renderImage = () => {
    if (!image) return null;

    if (typeof image === 'string') {
      return (
        <img
          src={image}
          alt={title}
          className={cn(
            'object-cover',
            horizontal
              ? 'w-full h-48 sm:w-[44.4444%] sm:h-full flex-shrink-0'
              : 'w-full h-48',
            imageClassName
          )}
        />
      );
    }

    return (
      <div
        className={cn(
          horizontal
            ? 'w-full h-48 sm:w-[44.4444%] sm:h-full flex-shrink-0'
            : 'w-full h-48',
          imageClassName
        )}
      >
        {image}
      </div>
    )
  }

  return (
    <div
      onClick={onClick}
      className={cn(
        "bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer",
        horizontal
          ? 'flex flex-col sm:flex-row sm:h-48'
          : 'flex flex-col',
        sizeClasses[size] || size,
        containerClassName
      )}
    >
      {renderImage()}
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h3 className={cn("text-lg font-semibold text-gray-800 line-clamp-1", titleClassName)}>
            {title}
          </h3>
          {description && (
            <p className={cn("mt-2 text-gray-500 text-sm mb-2 line-clamp-3", descriptionClassName)}>
              {description}
            </p>
          )}
        </div>
        {footer && <div className="mt-2">{footer}</div>}
      </div>
    </div>
  );
};
