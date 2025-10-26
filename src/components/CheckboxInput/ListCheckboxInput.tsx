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
    solid: {
        label: 'border-transparent bg-primary/90 text-white hover:bg-primary-700 dark:bg-primary-dark dark:hover:bg-primary-dark-700',
        checked: 'bg-primary-700 hover:bg-primary-700 dark:bg-primary-dark-700',
        checkbox: '',
        checkedCheckbox: 'border-white bg-primary dark:bg-primary',
    },
    subtle: {
        label: 'border-slate-200 border-none bg-secondary/30 hover:bg-primary/30 hover:text-primary-700 dark:text-white dark:bg-primary-dark/50 hover:dark:text-primary-30',
        checked: 'bg-primary/30 text-primary-700 border-primary/30 dark:border-none hover:bg-primary-700/15 dark:bg-primary/30 dark:text-white hover:dark:text-white dark:hover:bg-primary-dark/50',
        checkbox: 'dark:bg-primary dark:border-none',
        checkedCheckbox: 'border-primary-700 bg-primary-700 dark:bg-primary',
    },
    outline: {
        label: 'border-secondary-700 bg-transparent hover:bg-primary/30 hover:text-primary-700 dark:hover:text-white hover:border-primary-700 dark:text-white dark:border-secondary-dark dark:hover:bg-primary-dark/20',
        checked: 'border-primary bg-primary/30 text-primary-700 dark:border-primary-700 dark:bg-primary-dark/20',
        checkbox: 'dark:border-secondary-dark',
        checkedCheckbox: 'border-primary bg-primary-700 dark:border-primary-700 dark:border-primary dark:bg-primary',
    },
}

export type ListCheckBoxInputProps = {
    options: CheckboxOptionType[];
    selectedValues: CheckboxOptionType[] | undefined;
    onValueChange: (value: CheckboxOptionType[]) => void;
    containerClassName?: string;
    inputLabelClassName?: (option: CheckboxOptionType, isChecked: boolean) => string;
    inputGroupClassName?: (option: CheckboxOptionType, isChecked: boolean) => string;
    inputCheckboxClassName?: (option: CheckboxOptionType, isChecked: boolean) => string;
    variant?: keyof typeof CheckboxVariants;
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
    variant = 'subtle',
    checkboxSize = 'md',
    disabled,
    ...props
}) => {
    const sizeClasses = CheckboxSizes[checkboxSize];
    const variantClasses = CheckboxVariants[variant];

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
