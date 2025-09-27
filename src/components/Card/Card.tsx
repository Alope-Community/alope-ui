import { cn } from 'clsx-for-tailwind';
import React from 'react';

type CardSize = 'sm' | 'md' | 'lg' | 'full';

type CardProps = {
  title?: string;
  description?: string;
  image?: string | React.ReactNode;
  onClick?: () => void;
  horizontal?: boolean;
  footer?: React.ReactNode;
  size?: CardSize;
  containerClassName?: string;
  imageClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  ribbonClassName?: string;
  ribbon?: string;
  children?: React.ReactNode;
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
  titleClassName,
  ribbonClassName,
  ribbon,
  children,
}) => {
  const sizeClasses = {
    sm: 'max-w-xs',
    md: 'max-w-sm',
    lg: 'max-w-md',
    full: 'w-full',
  };

  const renderImage = () => {
    if (!image) return null;

    if (typeof image === 'string') {
      return (
        <img
          src={image}
          alt={title}
          className={cn(
            'object-cover w-full h-48 md:h-full',
            horizontal ? 'md:w-[40%]' : 'w-full',
            imageClassName
          )}
        />
      );
    }

    return (
      <div
        className={cn(
          'w-full h-48 md:h-full',
          horizontal ? 'md:w-[40%]' : 'w-full',
          imageClassName
        )}
      >
        {image}
      </div>
    );
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        'relative bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer overflow-hidden',
        horizontal ? 'flex flex-col md:flex-row' : 'flex flex-col',
        sizeClasses[size] || size,
        containerClassName
      )}
    >
      {children ?? (
        <>
          {renderImage()}
          <div className="p-4 flex flex-col justify-between flex-1">
            {ribbon && (
              <span
                className={cn(
                  'bg-red-500 text-white py-1 absolute text-[10px] md:text-xs w-[150px] text-center z-10',
                  horizontal
                    ? 'top-3 -left-[50px] -rotate-45'
                    : 'top-3 -right-[50px] rotate-45',
                  ribbonClassName
                )}
              >
                {ribbon}
              </span>
            )}

            <div>
              {title && (
                <h3
                  className={cn(
                    'text-lg font-semibold text-gray-800 line-clamp-1',
                    titleClassName
                  )}
                >
                  {title}
                </h3>
              )}
              {description && (
                <p
                  className={cn(
                    'mt-2 text-gray-500 text-sm mb-2 line-clamp-3',
                    descriptionClassName
                  )}
                >
                  {description}
                </p>
              )}
            </div>

            {footer && <div className="mt-2">{footer}</div>}
          </div>
        </>
      )}
    </div>
  );
};
