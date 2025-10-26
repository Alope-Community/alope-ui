import { cn } from 'clsx-for-tailwind';
import React, { type InputHTMLAttributes } from 'react';

export type TextInputProps = {
    label?: string;
    error?: string;
    labelClassName?: string;
    errorClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
    ({
        label,
        id,
        name,
        error,
        labelClassName,
        errorClassName,
        ...props
    }, ref) => {
        return (
            <div className="w-full">
                {label && <label htmlFor={id || name} className={cn("block text-sm font-medium mb-1 dark:text-white", labelClassName)}>{label}</label>}
                <input
                    ref={ref}
                    id={id || name}
                    name={name}
                    className={`block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm dark:text-white dark:placeholder:text-white ${error ? 'border-error dark:border-error-dark' : 'border-secondary dark:border-secondary-dark'
                        } ${props.disabled ? 'bg-secondary/30 cursor-not-allowed' : ''}`}
                    {...props}
                />
                {error && <p className={cn("mt-1 text-sm text-error", errorClassName)}>{error}</p>}
            </div>
        )
    })

TextInput.displayName = 'TextInput';