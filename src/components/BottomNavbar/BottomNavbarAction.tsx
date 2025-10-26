import { cn } from "clsx-for-tailwind"
import React from "react"

export interface BottomNavbarActionProps {
  label?: React.ReactNode
  icon?: React.ReactNode
  value: string
  selectedValue?: string
  onChangeValue?: (value: string) => void
  labelClassName?: string
  className?: string
}

export const BottomNavbarAction: React.FC<BottomNavbarActionProps> = ({
  label,
  icon,
  value,
  selectedValue,
  onChangeValue,
  labelClassName,
  className
}) => {
  const isActive = value === selectedValue;

  return (
    <button
      onClick={() => onChangeValue?.(value)}
      className={cn(
        `inline-flex flex-1 flex-col items-center justify-center p-5 group`,
        isActive ? 'bg-secondary-30-50 dark:bg-secondary/10' : 'hover:bg-secondary-30 dark:hover:bg-secondary/30',
        className
      )}
    >
      {icon}
      <span className={cn(
        `text-sm`,
        isActive ? 'text-primary' : 'text-secondary-dark-700 dark:text-secondary-dark group-hover:text-secondary-700 dark:group-hover:text-white',
        labelClassName
      )}>
        {label}
      </span>
    </button >
  )
}
