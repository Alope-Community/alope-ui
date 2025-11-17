import React from 'react';
import { cn } from 'clsx-for-tailwind';

const BadgeVariants = {
  primary: 'bg-primary-100 text-primary-600 dark:bg-primary-900-dark dark:text-primary-100-dark',
  secondary: 'bg-secondary-100 text-secondary-600 dark:bg-secondary-900-dark dark:text-secondary-100-dark',
  success: 'bg-success-100 text-success-600 dark:bg-success-900-dark dark:text-success-100-dark',
  warning: 'bg-warning-100 text-warning-600 dark:bg-warning-900-dark dark:text-warning-100-dark',
  error: 'bg-error-100 text-error-600 dark:bg-error-900-dark dark:text-error-100-dark',
  info: 'bg-info-100 text-info-600 dark:bg-info-900-dark dark:text-info-100-dark',
  default: 'bg-secondary-100 text-secondary-600 dark:bg-secondary-900-dark dark:text-secondary-100-dark',
};

const BadgePositions = {
  'top-right': 'absolute -top-3 -right-3',
  'top-left': 'absolute -top-3 -left-3',
  'bottom-right': 'absolute -bottom-3 -right-3',
  'bottom-left': 'absolute -bottom-3 -left-3',
};

export type BadgeProps = {
  children?: React.ReactNode | string;
  variant?: keyof typeof BadgeVariants;
  position?: keyof typeof BadgePositions;
  isAbsolute?: boolean;
  className?: string;
  icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLSpanElement>;

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  position = 'top-right',
  isAbsolute = false,
  className,
  icon,
}) => {
  const variantClass = BadgeVariants[variant];
  const positionClass = isAbsolute ? BadgePositions[position] : '';

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold',
        variantClass,
        positionClass,
        className
      )}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </span>
  );
};
