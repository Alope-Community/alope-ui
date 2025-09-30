import { cn } from 'clsx-for-tailwind';
import React from 'react';

const OffcanvasWidthVariants = {
  default: 'w-3/4 md:1/2',
  sm: 'md:w-60 w-3/4',
  md: 'md:w-90 w-3/4',
  lg: 'md:w-1/2 w-3/4',
};

interface OffcanvasProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  position?: 'left' | 'right';
  width?: keyof typeof OffcanvasWidthVariants;
  titleClassName?: string;
  closeButtonClassName?: string;
  className?: string;
}

export const Offcanvas: React.FC<OffcanvasProps> = ({
  isOpen,
  onClose,
  title,
  children,
  position = 'right',
  width = 'default',
  titleClassName,
  closeButtonClassName,
  className,
}) => {

  const positionClasses = position === 'right'
    ? 'right-0'
    : 'left-0';

  const animationClasses = isOpen
    ? 'translate-x-0'
    : position === 'right'
      ? 'translate-x-full'
      : '-translate-x-full';

  const baseClasses = 'fixed top-0 h-full bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out';

  const offcanvasClassName = cn(
    baseClasses,
    OffcanvasWidthVariants[width],
    positionClasses,
    animationClasses,
    className
  );

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      <div className={offcanvasClassName}>
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h5 className={cn("text-lg font-semibold", titleClassName)}>
            {title}
          </h5>
          <button
            type="button"
            onClick={onClose}
            className={cn("text-gray-500 hover:text-gray-800 text-2xl", closeButtonClassName)}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="p-4 overflow-y-auto">
          {children}
        </div>
      </div>
    </>
  );
};
