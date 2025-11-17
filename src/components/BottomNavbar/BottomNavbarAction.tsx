import { cn } from "clsx-for-tailwind"
import React from "react"
import { BottomNavbarVariants, type Variant } from "./variants"

export interface BottomNavbarActionProps {
  label?: React.ReactNode
  icon?: React.ReactNode
  value: string
  selectedValue?: string
  onChangeValue?: (value: string) => void
  labelClassName?: string
  variant?: Variant
  className?: string
}

export const BottomNavbarAction: React.FC<BottomNavbarActionProps> = ({
  label,
  icon,
  value,
  selectedValue,
  onChangeValue,
  labelClassName,
  variant = 'primary',
  className
}) => {
  const isActive = value === selectedValue;

  const variantClasses = BottomNavbarVariants[variant ?? "primary"];

  return (
    <button
      onClick={() => onChangeValue?.(value)}
      className={cn(
        `inline-flex flex-1 flex-col items-center justify-center p-4 group transition-all`,
        isActive ? variantClasses.checked : variantClasses.label,
        className
      )}
    >
      {/* ICON */}
      <span
        className={cn(
          `text-xl transition-all`,
          isActive ? variantClasses.checkedIcon : variantClasses.icon
        )}
      >
        {icon}
      </span>

      {/* LABEL */}
      <span
        className={cn(
          `text-xs mt-1 transition-all`,
          labelClassName
        )}
      >
        {label}
      </span>
    </button>
  )
}
