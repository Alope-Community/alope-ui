import React from 'react';
import { cn } from 'clsx-for-tailwind';

const BadgeColors = {
    // default: 'bg-primary-30 text-primary-700 dark:bg-primary-dark-30',
    default: 'bg-secondary-30 text-black dark:bg-secondary-dark-30',
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
    color?: keyof typeof BadgeColors;
    position?: keyof typeof BadgePositions;
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLSpanElement>, 'className' | 'color'>;

export const Badge: React.FC<BadgeProps> = ({
    children,
    color = 'default',
    position,
    prefixIcon,
    suffixIcon,
    ...props
}) => {
    const colorClass = BadgeColors[color];
    const positionClass = position ? BadgePositions[position] : '';

    return (
        <span
            {...props}
            className={cn(
                'inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold',
                colorClass,
                positionClass
            )}
        >
            {prefixIcon && <span className="inline-flex shrink-0">{prefixIcon}</span>}
            {children}
            {suffixIcon && <span className="inline-flex shrink-0">{suffixIcon}</span>}
        </span>
    );
};