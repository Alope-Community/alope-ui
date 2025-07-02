import React from 'react'

const BadgeVariants = {
    default: 'bg-primary/60 text-primary-700',
    success: 'bg-success/60 text-green-700',
    error: 'bg-error/60 text-red-700',
    info: 'bg-info/60 text-blue-700',
    warning: 'bg-warning/60 text-amber-700'
}

export type BadgeProps = {
    children?: React.ReactNode | string
    variant?: keyof typeof BadgeVariants
    className?: string
} & React.ButtonHTMLAttributes<HTMLSpanElement>

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'default',
    className
}) => {
    const variantClass = BadgeVariants[variant]

    return (
        <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${variantClass} ${className}`}
        >
            {children}
        </span>
    )
}