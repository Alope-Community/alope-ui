import { cn } from 'clsx-for-tailwind';
import React from 'react';

const OffcanvasWidthVariants = {
  default: 'w-3/4 md:w-1/2',
  sm: 'w-3/4 md:w-60',
  md: 'w-3/4 md:w-80',
  lg: 'w-3/4 md:w-[40rem]',
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

  const baseClasses = 'fixed top-0 h-full bg-white dark:bg-gray-700 z-50 shadow-xl transform transition-transform duration-300 ease-in-out';

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
        <div className="flex justify-between items-center p-4 border-b border-secondary dark:border-secondary-dark">
          <h5 className={cn("text-lg font-semibold dark:text-white", titleClassName)}>
            {title}
          </h5>
          <button
            type="button"
            onClick={onClose}
            className={cn("text-secondary-700 hover:text-secondary dark:hover:text-secondary-dark text-2xl dark:text-white hover:cursor-pointer", closeButtonClassName)}
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
