import React, { type InputHTMLAttributes } from 'react';

export type TextInputProps = {
    label?: string;
    error?: string;
} & InputHTMLAttributes<HTMLInputElement>

export const TextInput: React.FC<TextInputProps> = ({
    label,
    id,
    name,
    error,
    ...props
}) => {
    return (
        <div className="w-full">
            {label && <label htmlFor={id || name} className="block text-sm font-medium mb-1">{label}</label>}
            <input
                id={id || name}
                name={name}
                className={`block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm ${error ? 'border-error' : 'border-secondary'
                    } ${props.disabled ? 'bg-secondary/40 cursor-not-allowed' : ''}`}
                {...props}
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
};
