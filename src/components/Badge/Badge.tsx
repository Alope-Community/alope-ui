import React from 'react';
import { cn } from 'clsx-for-tailwind';

const BadgeVariants = {
    default: 'bg-primary-30 text-primary-700 dark:bg-primary-dark-30',
    secondary: 'bg-secondary-30 text-black dark:bg-secondary-dark-30',
    success: 'bg-success-30 text-green-700 dark:bg-success-dark-30',
    error: 'bg-error-30 text-red-700 dark:bg-error-dark-30',
    info: 'bg-info-30 text-blue-700 dark:bg-info-dark-30',
    warning: 'bg-warning-30 text-amber-700 dark:bg-warning-dark-30',
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
                `inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold`,
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
