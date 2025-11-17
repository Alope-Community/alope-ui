import { cn } from 'clsx-for-tailwind';
import React, { type InputHTMLAttributes } from 'react';

export type TextInputProps = {
    label?: string;
    error?: string;
    labelClassName?: string;
    errorClassName?: string;
    inputClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
    ({
        label,
        id,
        name,
        error,
        labelClassName,
        inputClassName,
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
                    className={cn(`block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm placeholder:text-secondary-400 dark:text-white dark:placeholder:text-secondary-300-dark`,
                        error ? 'border-error-500 dark:border-error-500-dark' : 'border-secondary-500 dark:border-secondary-500-dark',
                        props.disabled ? 'bg-secondary-200 dark:bg-secondary-700-dark cursor-not-allowed' : '', inputClassName)}
                    {...props}
                />
                {error && <p className={cn("mt-1 text-sm text-error-500 dark:text-error-500-dark", errorClassName)}>{error}</p>}
            </div>
        )
    })

TextInput.displayName = 'TextInput';