import { cn } from 'clsx-for-tailwind';
import React from 'react';

export type RadioOptionType = {
    label: string;
    value: string;
};

const RadioSizes = {
    sm: {
        container: 'text-sm',
        radio: 'w-4 h-4',
        label: 'pl-2',
    },
    md: {
        container: 'text-base',
        radio: 'w-5 h-5',
        label: 'pl-2',
    },
    lg: {
        container: 'text-lg',
        radio: 'w-6 h-6',
        label: 'pl-3',
    },
};

const RadioVariants = {
    solid: {
        label: 'border-transparent bg-primary dark:bg-primary-dark text-white dark:hover:bg-primary-dark-700 hover:bg-primary-700',
        checked: 'bg-primary-700 dark:bg-primary-dark-700',
        radio: '',
        checkedRadio: 'border-white bg-primary dark:bg-primary',
    },
    subtle: {
        label: 'border-none bg-secondary/30 dark:text-white hover:text-primary-700 hover:dark:text-primary-30 dark:text-white dark:bg-primary-dark/50 hover:bg-primary/30',
        checked: 'bg-primary/30 text-primary-700 dark:bg-primary/30 dark:text-white hover:dark:text-white',
        radio: 'dark:bg-primary',
        checkedRadio: 'bg-primary dark:bg-primary-500 border-none',
    },
    outline: {
        label: 'border-secondary-700 hover:bg-primary/30 hover:text-primary-700 hover:border-primary-700 dark:hover:bg-primary/20 bg-transparent dark:text-white dark:border-secondary-dark dark:hover:bg-primary-dark/20',
        checked: 'border-primary bg-primary/30 text-primary-700 dark:border-primary-700 dark:bg-primary-dark/20',
        radio: ' dark:border-secondary-dark hover:border-primary',
        checkedRadio: 'bg-primary-700 dark:border-primary-700 dark:border-primary dark:bg-primary',
    },
}

export type RadioInputProps = {
    options: RadioOptionType[];
    selectedValue?: RadioOptionType;
    onValueChange: (value: RadioOptionType) => void;
    containerClassName?: string;
    inputLabelClassName?: (isChecked: boolean, option: RadioOptionType) => string;
    inputGroupClassName?: (isChecked: boolean, option: RadioOptionType) => string;
    inputRadioClassName?: (isChecked: boolean, option: RadioOptionType) => string;
    variant?: keyof typeof RadioVariants;
    radioSize?: keyof typeof RadioSizes;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

export const RadioInput: React.FC<RadioInputProps> = ({
    name,
    options,
    selectedValue,
    onValueChange,
    containerClassName,
    inputGroupClassName,
    inputLabelClassName,
    inputRadioClassName,
    variant = 'subtle',
    radioSize = 'md',
    disabled,
    ...props
}) => {
    const sizeClasses = RadioSizes[radioSize];
    const variantClasses = RadioVariants[variant];

    return (
        <div className={cn('flex flex-wrap gap-3', containerClassName)}>
            {options.map((option, index) => {
                const isChecked = selectedValue?.value === option.value;
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
                            inputGroupClassName?.(isChecked, option)
                        )}
                    >
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={isChecked}
                            onChange={() => onValueChange(option)}
                            disabled={disabled}
                            className={cn('absolute opacity-0 w-full h-full cursor-pointer', { 'cursor-not-allowed': disabled })}
                            {...props}
                        />
                        <span
                            className={cn(
                                'flex items-center justify-center rounded-full border transition-all duration-200',
                                sizeClasses.radio,
                                variantClasses.radio,
                                {
                                    [variantClasses.checkedRadio]: isChecked,
                                },
                                inputRadioClassName?.(isChecked, option)
                            )}
                        >
                            {isChecked && (
                                <span
                                    className={cn(
                                        'w-1/2 h-1/2 rounded-full bg-white dark:bg-primary-dark transition-transform duration-200 transform scale-100'
                                    )}
                                />
                            )}
                        </span>
                        <span className={cn('ml-2', sizeClasses.label, inputLabelClassName?.(isChecked, option))}>{option.label}</span>
                    </label>
                );
            })}
        </div>
    );
};
