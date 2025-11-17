import { cn } from 'clsx-for-tailwind';
import React from 'react';

export type CheckboxOptionType = {
    label: string;
    value: string;
};

const CheckboxSizes = {
    sm: {
        container: 'text-sm',
        checkbox: 'w-4 h-4',
        label: 'pl-2',
    },
    md: {
        container: 'text-base',
        checkbox: 'w-5 h-5',
        label: 'pl-2',
    },
    lg: {
        container: 'text-lg',
        checkbox: 'w-6 h-6',
        label: 'pl-3',
    },
};

const CheckboxVariants = {
    primary: {
        solid: {
            label: 'border-transparent bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-500-dark dark:hover:bg-primary-400-dark',
            checked: 'bg-primary-700 dark:bg-primary-600-dark hover:bg-primary-700 dark:hover:bg-primary-600-dark',
            checkbox: '',
            checkedCheckbox: 'border-white bg-primary-700 dark:bg-primary-700-dark',
        },
        subtle: {
            label: 'border-none bg-primary-50 hover:bg-primary-100 hover:text-primary-700 dark:bg-secondary-900-dark dark:hover:bg-secondary-800-dark dark:hover:text-primary-200-dark dark:text-primary-200-dark',
            checked: 'bg-primary-200 hover:bg-primary-200 text-primary-700 dark:bg-primary-100-dark dark:text-primary-700-dark dark:hover:text-primary-700-dark dark:hover:bg-primary-100-dark',
            checkbox: '',
            checkedCheckbox: 'bg-primary-700 dark:bg-primary-500 border-none',
        },
        outline: {
            label: `
            border border-primary-500 text-primary-500 
            hover:bg-primary-50 hover:border-primary-600 hover:text-primary-600
            dark:border-primary-400-dark dark:text-primary-400-dark
            dark:hover:bg-secondary-800-dark dark:hover:border-primary-300-dark dark:hover:text-primary-300-dark
        `,
            checked: 'border-primary-700 bg-primary-100 hover:bg-primary-100 text-primary-700 dark:border-primary-300 dark:bg-primary-900-dark dark:hover:bg-primary-900-dark dark:text-primary-100',
            checkbox: 'border-primary-700 dark:border-primary-400',
            checkedCheckbox: 'bg-primary-700 border-primary-700 dark:bg-primary-300 dark:border-primary-300',
        },
    },

    error: {
        solid: {
            label: 'border-transparent bg-error-500 text-white hover:bg-error-600 dark:bg-error-500-dark dark:hover:bg-error-400-dark',
            checked: 'bg-error-700 dark:bg-error-600-dark hover:bg-error-700 dark:hover:bg-error-600-dark',
            checkbox: '',
            checkedCheckbox: 'border-white bg-error-700 dark:bg-error-700-dark',
        },
        subtle: {
            label: 'border-none bg-error-50 hover:bg-error-100 hover:text-error-700 dark:bg-secondary-900-dark dark:hover:bg-secondary-800-dark dark:hover:text-error-200-dark dark:text-error-200-dark',
            checked: 'bg-error-200 hover:bg-error-200 text-error-700 dark:bg-error-100-dark dark:text-error-700-dark dark:hover:text-error-700-dark dark:hover:bg-error-100-dark',
            checkbox: '',
            checkedCheckbox: 'bg-error-700 dark:bg-error-500 border-none',
        },
        outline: {
            label: `
            border border-error-500 text-error-500 
            hover:bg-error-50 hover:border-error-600 hover:text-error-600
            dark:border-error-400-dark dark:text-error-400-dark
            dark:hover:bg-secondary-800-dark dark:hover:border-error-300-dark dark:hover:text-error-300-dark
        `,
            checked: 'border-error-700 bg-error-100 hover:bg-error-100 text-error-700 dark:border-error-300 dark:bg-error-900-dark dark:hover:bg-error-900-dark dark:text-error-100',
            checkbox: 'border-error-700 dark:border-error-400',
            checkedCheckbox: 'bg-error-700 border-error-700 dark:bg-error-300 dark:border-error-300',
        },
    },

    success: {
        solid: {
            label: 'border-transparent bg-success-500 text-white hover:bg-success-600 dark:bg-success-500-dark dark:hover:bg-success-400-dark',
            checked: 'bg-success-700 dark:bg-success-600-dark hover:bg-success-700 dark:hover:bg-success-600-dark',
            checkbox: '',
            checkedCheckbox: 'border-white bg-success-700 dark:bg-success-700-dark',
        },
        subtle: {
            label: 'border-none bg-success-50 hover:bg-success-100 hover:text-success-700 dark:bg-secondary-900-dark dark:hover:bg-secondary-800-dark dark:hover:text-success-200-dark dark:text-success-200-dark',
            checked: 'bg-success-200 hover:bg-success-200 text-success-700 dark:bg-success-100-dark dark:text-success-700-dark dark:hover:text-success-700-dark dark:hover:bg-success-100-dark',
            checkbox: '',
            checkedCheckbox: 'bg-success-700 dark:bg-success-500 border-none',
        },
        outline: {
            label: `
            border border-success-500 text-success-500 
            hover:bg-success-50 hover:border-success-600 hover:text-success-600
            dark:border-success-400-dark dark:text-success-400-dark
            dark:hover:bg-secondary-800-dark dark:hover:border-success-300-dark dark:hover:text-success-300-dark
        `,
            checked: 'border-success-700 bg-success-100 hover:bg-success-100 text-success-700 dark:border-success-300 dark:bg-success-900-dark dark:hover:bg-success-900-dark dark:text-success-100',
            checkbox: 'border-success-700 dark:border-success-400',
            checkedCheckbox: 'bg-success-700 border-success-700 dark:bg-success-300 dark:border-success-300',
        },
    },

    info: {
        solid: {
            label: 'border-transparent bg-info-500 text-white hover:bg-info-600 dark:bg-info-500-dark dark:hover:bg-info-400-dark',
            checked: 'bg-info-700 dark:bg-info-600-dark hover:bg-info-700 dark:hover:bg-info-600-dark',
            checkbox: '',
            checkedCheckbox: 'border-white bg-info-700 dark:bg-info-700-dark',
        },
        subtle: {
            label: 'border-none bg-info-50 hover:bg-info-100 hover:text-info-700 dark:bg-secondary-900-dark dark:hover:bg-secondary-800-dark dark:hover:text-info-200-dark dark:text-info-200-dark',
            checked: 'bg-info-200 hover:bg-info-200 text-info-700 dark:bg-info-100-dark dark:text-info-700-dark dark:hover:text-info-700-dark dark:hover:bg-info-100-dark',
            checkbox: '',
            checkedCheckbox: 'bg-info-700 dark:bg-info-500 border-none',
        },
        outline: {
            label: `
            border border-info-500 text-info-500 
            hover:bg-info-50 hover:border-info-600 hover:text-info-600
            dark:border-info-400-dark dark:text-info-400-dark
            dark:hover:bg-secondary-800-dark dark:hover:border-info-300-dark dark:hover:text-info-300-dark
        `,
            checked: 'border-info-700 bg-info-100 hover:bg-info-100 text-info-700 dark:border-info-300 dark:bg-info-900-dark dark:hover:bg-info-900-dark dark:text-info-100',
            checkbox: 'border-info-700 dark:border-info-400',
            checkedCheckbox: 'bg-info-700 border-info-700 dark:bg-info-300 dark:border-info-300',
        },
    },

    warning: {
        solid: {
            label: 'border-transparent bg-warning-500 text-white hover:bg-warning-600 dark:bg-warning-500-dark dark:hover:bg-warning-400-dark',
            checked: 'bg-warning-700 dark:bg-warning-600-dark hover:bg-warning-700 dark:hover:bg-warning-600-dark',
            checkbox: '',
            checkedCheckbox: 'border-white bg-warning-700 dark:bg-warning-700-dark',
        },
        subtle: {
            label: 'border-none bg-warning-50 hover:bg-warning-100 hover:text-warning-700 dark:bg-secondary-900-dark dark:hover:bg-secondary-800-dark dark:hover:text-warning-200-dark dark:text-warning-200-dark',
            checked: 'bg-warning-200 hover:bg-warning-200 text-warning-700 dark:bg-warning-100-dark dark:text-warning-700-dark dark:hover:text-warning-700-dark dark:hover:bg-warning-100-dark',
            checkbox: '',
            checkedCheckbox: 'bg-warning-700 dark:bg-warning-500 border-none',
        },
        outline: {
            label: `
            border border-warning-500 text-warning-500 
            hover:bg-warning-50 hover:border-warning-600 hover:text-warning-600
            dark:border-warning-400-dark dark:text-warning-400-dark
            dark:hover:bg-secondary-800-dark dark:hover:border-warning-300-dark dark:hover:text-warning-300-dark
        `,
            checked: 'border-warning-700 bg-warning-100 hover:bg-warning-100 text-warning-700 dark:border-warning-300 dark:bg-warning-900-dark dark:hover:bg-warning-900-dark dark:text-warning-100',
            checkbox: 'border-warning-700 dark:border-warning-400',
            checkedCheckbox: 'bg-warning-700 border-warning-700 dark:bg-warning-300 dark:border-warning-300',
        },
    },

}

export type VariantType = keyof typeof CheckboxVariants
export type Variant = keyof typeof CheckboxVariants[VariantType]

export const getVariantClasses = (
    variant: Variant,
    variantType: VariantType
) => {
    return CheckboxVariants[variantType][variant] || ''
}

export type ListCheckBoxInputProps = {
    options: CheckboxOptionType[];
    selectedValues: CheckboxOptionType[] | undefined;
    onValueChange: (value: CheckboxOptionType[]) => void;
    containerClassName?: string;
    inputLabelClassName?: (option: CheckboxOptionType, isChecked: boolean) => string;
    inputGroupClassName?: (option: CheckboxOptionType, isChecked: boolean) => string;
    inputCheckboxClassName?: (option: CheckboxOptionType, isChecked: boolean) => string;
    variant?: Variant;
    variantType?: VariantType;
    checkboxSize?: keyof typeof CheckboxSizes;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

export const ListCheckboxInput: React.FC<ListCheckBoxInputProps> = ({
    name,
    options,
    selectedValues,
    onValueChange,
    containerClassName,
    inputGroupClassName,
    inputLabelClassName,
    inputCheckboxClassName,
    variant = 'solid',
    variantType = 'primary',
    checkboxSize = 'md',
    disabled,
    ...props
}) => {
    const sizeClasses = CheckboxSizes[checkboxSize];
    const variantClasses = getVariantClasses(variant, variantType);

    return (
        <div className={cn('flex flex-wrap gap-3', containerClassName)}>
            {options.map((option, index) => {
                const isChecked = selectedValues?.some(selected => selected.value === option.value) ?? false
                return (
                    <label
                        key={index}
                        className={cn(
                            'relative flex items-center rounded-md cursor-pointer transition-all duration-200 border px-3 py-2',
                            sizeClasses.container,
                            variantClasses.label,
                            {
                                [variantClasses.checked]: isChecked,
                                'opacity-50 cursor-not-allowed': disabled,
                            },
                            inputGroupClassName?.(option, isChecked)
                        )}
                    >
                        <input
                            type="checkbox"
                            name={name}
                            value={option.value}
                            checked={isChecked}
                            onChange={() => {
                                const newSelected = isChecked
                                    ? selectedValues?.filter(val => val.value !== option.value) || []
                                    : [...(selectedValues || []), option];
                                onValueChange(newSelected);
                            }}
                            disabled={disabled}
                            className={cn('absolute opacity-0 w-full h-full cursor-pointer', { 'cursor-not-allowed': disabled })}
                            {...props}
                        />
                        <span
                            className={cn(
                                'flex items-center justify-center rounded-md border transition-all duration-200',
                                sizeClasses.checkbox,
                                variantClasses.checkbox,
                                {
                                    [variantClasses.checkedCheckbox]: isChecked,
                                },
                                inputCheckboxClassName?.(option, isChecked)
                            )}
                        >
                            {isChecked && (
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="white"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-7.778 7.778a1 1 0 01-1.414 0L3.293 10.05a1 1 0 111.414-1.414l3.536 3.535 7.071-7.071a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            )}
                        </span>
                        <span className={cn('ml-2', sizeClasses.label, inputLabelClassName?.(option, isChecked))}>{option.label}</span>
                    </label>
                );
            })}
        </div>
    );
};
