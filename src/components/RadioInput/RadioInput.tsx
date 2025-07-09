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
        label: 'border-transparent bg-primary/90 text-white hover:bg-primary-700',
        checked: 'bg-primary-700 hover:bg-primary-700',
        radio: '',
        checkedRadio: 'border-primary bg-primary-700',
    },
    subtle: {
        label: 'border-slate-200 bg-secondary/30 hover:bg-secondary',
        checked: 'bg-primary/30 text-primary-700 border-primary/30 hover:bg-primary-700/15',
        radio: '',
        checkedRadio: 'border-primary-700 bg-primary-700',
    },
    outline: {
        label: 'border-secondary-700 bg-transparent hover:bg-secondary',
        checked: 'border-primary bg-primary/30 text-primary-700',
        radio: '',
        checkedRadio: 'border-primary bg-primary-700',
    },
}

export type RadioInputProps = {
    options: RadioOptionType[];
    selectedValue?: RadioOptionType;
    onValueChange: (value: RadioOptionType) => void;
    containerClassName?: string;
    inputLabelClassName?: (option: RadioOptionType, isChecked: boolean) => string;
    inputGroupClassName?: (option: RadioOptionType, isChecked: boolean) => string;
    inputRadioClassName?: (option: RadioOptionType, isChecked: boolean) => string;
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
                            inputGroupClassName?.(option, isChecked)
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
                                inputRadioClassName?.(option, isChecked)
                            )}
                        >
                            {isChecked && (
                                <span
                                    className={cn(
                                        'w-1/2 h-1/2 rounded-full bg-white transition-transform duration-200 transform scale-100'
                                    )}
                                />
                            )}
                        </span>
                        <span className={cn('ml-2', sizeClasses.label, inputLabelClassName?.(option, isChecked))}>{option.label}</span>
                    </label>
                );
            })}
        </div>
    );
};
