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
      "hover:cursor-pointer hover:!text-error-500 dark:hover:!text-error-500-dark"
    ),
    control: ({ isFocused }) => cn(
      `!w-full !border !rounded-md !shadow-sm !sm:text-sm !min-h-[38px] !bg-transparent `,
      error
        ? isFocused ? '!ring-1 !border-primary-500 !ring-primary-500 dark:!border-primary-500-dark dark:!ring-primary-500-dark' : '!border-error-500 dark:!border-error-500-dark'
        : isFocused
          ? '!border-primary-500 !ring-1 !ring-primary-500 dark:!border-primary-500-dark dark:!ring-primary-500-dark'
          : '!border-secondary-500 dark:!border-secondary-500-dark'
    ),
    option: ({ isFocused, isSelected }) =>
      `!px-4 !py-2 !cursor-pointer ${isSelected
        ? '!bg-primary-600 dark:!bg-primary-600-dark !text-white'
        : isFocused
          ? '!bg-primary-500 dark:!bg-primary-500-dark !text-white'
          : '!bg-white dark:!bg-secondary-800-dark'
      }`,
    multiValue: () => '!bg-primary-100 dark:!bg-primary-900-dark !rounded-md !flex !items-center !mr-1',
    multiValueLabel: () => '!text-primary-700 dark:!text-primary-100-dark !text-sm !px-2 !py-0.5',
    multiValueRemove: () =>
      '!text-primary-700 hover:!text-error-500 hover:!bg-transparent dark:!text-primary-100-dark dark:hover:!text-error-500-dark !rounded-r-md !px-1 !cursor-pointer',
    menu: () => '!mt-1 dark:!text-white !border-secondary-500 dark:!border-secondary-500-dark !bg-white dark:!bg-secondary-800-dark !rounded-md !shadow-lg !z-10',
    input: () => 'dark:!text-white',
    placeholder: () => '!text-secondary-400 dark:!text-secondary-600-dark',
    singleValue: () => 'dark:!text-white',
  }

  return (
    <div className="w-full">
      {label && <label className={cn("block text-sm font-medium dark:text-white mb-1", labelClassName)}>{label}</label>}
      <Select
        classNames={{ ...defaultClassNames, ...customClassNames }}
        {...props}
      />
      {error && <p className={cn("mt-1 text-sm text-error-500 dark:text-error-500-dark", errorClassName)}>{error}</p>}
    </div>
  )
}