import { cn } from 'clsx-for-tailwind'
import React from 'react'

const SpinnerSize = {
    sm: 'h-4 w-4 border-2',
    md: 'h-6 w-6 border-3',
    lg: 'h-8 w-8 border-4',
}

const SpinnerColor = {
    primary: 'border-primary-500 dark:border-primary-900-dark',
    error: 'border-error-500 dark:border-error-900-dark',
    warning: 'border-warning-500 dark:border-warning-900-dark',
    success: 'border-success-500 dark:border-success-900-dark',
    info: 'border-info-500 dark:border-info-900-dark',
    secondary: 'border-secondary-500 dark:border-secondary-900-dark'
}

export type SpinnerProps = {
    size?: keyof typeof SpinnerSize
    color?: keyof typeof SpinnerColor
    className?: string
    duration?: number
    thickness?: number | undefined
}

export const Spinner: React.FC<SpinnerProps> = ({
    color = 'primary',
    size = 'md',
    className: customClassName,
    duration = 1000,
    thickness,
}) => {

    const spinnerColor = SpinnerColor[color]
    const spinnerSize = SpinnerSize[size]
    const animationDuration = `${duration}ms`
    const borderWidth = thickness && `${thickness}px`

    return (
        <span
            className={cn(spinnerSize, spinnerColor, `flex rounded-full animate-spin`, customClassName, 'border-t-transparent dark:border-t-transparent')}
            style={{ animationDuration, borderWidth }}
        >
        </span>
    )
}