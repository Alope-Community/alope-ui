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
    control: ({ isFocused }) => cn(
      `!w-full !border !rounded-md !shadow-sm !sm:text-sm !min-h-[38px]`,
      error
        ? '!border-error'
        : isFocused
          ? 'border-primary !ring-1 !ring-primary'
          : '!border-secondary'
    ),
    option: ({ isFocused, isSelected }) =>
      `!px-4 !py-2 !cursor-pointer ${isSelected
        ? '!bg-primary !text-white'
        : isFocused
          ? '!bg-primary/30'
          : '!bg-white'
      }`,
    multiValue: () => '!bg-primary/30 !rounded-md !flex !items-center !mr-1',
    multiValueLabel: () => '!text-primary-700 !text-sm !px-2 !py-0.5',
    multiValueRemove: () =>
      '!text-primary-700 !hover:bg-primary/30 !hover:text-primary-700 !rounded-r-md !px-1 !cursor-pointer',
    menu: () => '!mt-1 !border-secondary !bg-white !rounded-md !shadow-lg !z-10',
    input: () => '!text-gray-900',
    placeholder: () => '!text-gray-400',
    singleValue: () => '!text-gray-900',
  }

  return (
    <div className="w-full">
      {label && <label className={cn("block text-sm font-medium text-gray-700 mb-1", labelClassName)}>{label}</label>}
      <Select
        classNames={{ ...defaultClassNames, ...customClassNames }}
        {...props}
      />
      {error && <p className={cn("mt-1 text-sm text-[var(--color-error)]", errorClassName)}>{error}</p>}
    </div>
  )
}