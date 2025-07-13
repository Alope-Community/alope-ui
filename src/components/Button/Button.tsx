import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from 'clsx-for-tailwind';

const ButtonSizes = {
  sm: 'px-3 py-2 text-sm font-medium rounded-sm',
  md: 'px-4 py-2 text-base font-semibold tracking-[.2px] rounded-md',
  lg: 'px-6 py-3 text-lg font-semibold rounded-lg',
}

const ButtonVariants = {
  primary: 'bg-primary text-white hover:bg-primary/90',
  error: 'bg-error text-white hover:bg-error/90',
  warning: 'bg-warning text-white hover:bg-warning/80',
  success: 'bg-success text-white hover:bg-success/80',
  info: 'bg-info text-white hover:bg-info/80',
  surface: 'bg-gray-200 hover:bg-secondary',
  outline: 'bg-transparent hover:bg-gray-200 outline',
  ghost: 'bg-transparent hover:bg-gray-200',
  plain: '',
}

export type ButtonProps = {
  children?: React.ReactNode | string
  onClick?: () => void
  size?: keyof typeof ButtonSizes
  to?: string
  variant?: keyof typeof ButtonVariants
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  fullWidth?: boolean
  prefixIcon?: React.ReactNode
  suffixIcon?: React.ReactNode
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size = 'md',
  to,
  type = 'button',
  disabled = false,
  variant = 'primary',
  fullWidth = false,
  prefixIcon,
  suffixIcon,
  className
}) => {

  const variantClass = ButtonVariants[variant] || ''
  const sizeClass = ButtonSizes[size] || ''
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  const fullWidthClass = fullWidth ? 'w-full' : ''

  return to ? (
    <Link
      to={to}
      className={cn(`flex items-center justify-center transition-all duration-[170ms] h-10`, variantClass, sizeClass, disabledClass, fullWidthClass, className)}
    >
      {prefixIcon && <span className="mr-2">{prefixIcon}</span>}
      {children}
      {suffixIcon && <span className="ml-2">{suffixIcon}</span>}
    </Link >
  ) : (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={cn(`flex items-center justify-center transition-all duration-[170ms] h-10`, variantClass, sizeClass, disabledClass, fullWidthClass, className)}
    >
      {prefixIcon && <span className="mr-2">{prefixIcon}</span>}
      {children}
      {suffixIcon && <span className="ml-2">{suffixIcon}</span>}
    </button>
  )
};
