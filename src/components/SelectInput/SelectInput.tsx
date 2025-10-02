import { cn } from 'clsx-for-tailwind';
import React from 'react';
import Select, { type Props as SelectProps, type GroupBase, type ClassNamesConfig } from 'react-select';

export interface SelectOptionType {
  value: string
  label: string
}

export type SelectInputProps = {
  label?: string
  error?: string
  labelClassName?: string
  errorClassName?: string
  customClassNames?: ClassNamesConfig<SelectOptionType, boolean, GroupBase<SelectOptionType>>
} & SelectProps<SelectOptionType, boolean, GroupBase<SelectOptionType>>

export const SelectInput: React.FC<SelectInputProps> = ({ label, error, labelClassName, errorClassName, customClassNames, ...props }) => {
  const defaultClassNames: ClassNamesConfig<SelectOptionType, boolean, GroupBase<SelectOptionType>> = {
    clearIndicator: () => cn(
      "hover:cursor-pointer hover:!text-error dark:hover:!text-error-dark"
    ),
    control: ({ isFocused }) => cn(
      `!w-full !border !rounded-md !shadow-sm !sm:text-sm !min-h-[38px] !bg-transparent`,
      error
        ? isFocused ? 'border-primary !ring-1 !ring-primary' : '!border-error dark:!border-error-dark'
        : isFocused
          ? 'border-primary !ring-1 !ring-primary'
          : '!border-secondary dark:!border-secondary-dark'
    ),
    option: ({ isFocused, isSelected }) =>
      `!px-4 !py-2 !cursor-pointer ${isSelected
        ? '!bg-primary !text-white'
        : isFocused
          ? '!bg-primary/30 dark:!bg-primary-dark/30'
          : '!bg-white dark:!bg-gray-700'
      }`,
    multiValue: () => '!bg-primary-30 dark:!bg-primary-dark-30-50 !rounded-md !flex !items-center !mr-1',
    multiValueLabel: () => '!text-primary-700 dark:!text-primary-dark-30-20 !text-sm !px-2 !py-0.5',
    multiValueRemove: () =>
      '!text-primary-700 !hover:bg-primary/30 !hover:text-primary-700 !rounded-r-md !px-1 !cursor-pointer',
    menu: () => '!mt-1 dark:!text-white !border-secondary dark:!border-secondary-dark !bg-white dark:!bg-gray-700 !rounded-md !shadow-lg !z-10',
    input: () => '!text-gray-900 dark:!text-white',
    placeholder: () => '!text-gray-400',
    singleValue: () => '!text-gray-900 dark:!text-white',
  }

  return (
    <div className="w-full">
      {label && <label className={cn("block text-sm font-medium dark:text-white mb-1", labelClassName)}>{label}</label>}
      <Select
        classNames={{ ...defaultClassNames, ...customClassNames }}
        {...props}
      />
      {error && <p className={cn("mt-1 text-sm text-error", errorClassName)}>{error}</p>}
    </div>
  )
}