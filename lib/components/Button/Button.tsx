import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from 'clsx-for-tailwind';

const ButtonSizes = {
  sm: 'px-3 py-2 text-sm font-medium rounded-sm',
  md: 'px-4 py-2 text-base font-semibold tracking-[.2px] rounded-md',
  lg: 'px-6 py-3 text-lg font-semibold rounded-lg',
}

const ButtonRadius = {
  regular: 'rounded rounded-md',
  stadium: 'rounded rounded-full',
}

export const ButtonVariantsMap = {
  primary: {
    solid: 'bg-primary text-white hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary-dark/70',
    outline: 'border border-primary text-primary hover:bg-primary-20 dark:bg-primary-dark/30 dark:border-primary-dark dark:text-white dark:hover:bg-primary-dark/70',
    ghost: 'text-primary hover:bg-primary-30 dark:text-primary-dark dark:hover:bg-primary-dark/70 dark:hover:text-white',
    plain: 'text-primary dark:text-primary-dark',
  },
  secondary: {
    solid: 'bg-secondary text-black hover:bg-secondary-dark/80 dark:bg-secondary-dark dark:text-white dark:hover:bg-secondary-dark/70',
    outline: 'border border-secondary text-black hover:bg-secondary-20 dark:bg-secondary-dark/30 dark:border-secondary-dark dark:text-white dark:hover:bg-secondary-dark/70',
    ghost: 'text-black hover:bg-secondary-30 dark:text-white dark:hover:bg-secondary-dark/70',
    plain: 'text-black dark:text-white',
  },
  success: {
    solid: 'bg-success text-white hover:bg-success-dark dark:bg-success-dark dark:hover:bg-success-dark/70',
    outline: 'border border-success text-success hover:bg-success-20 dark:bg-success-dark/30 dark:border-success-dark dark:text-white dark:hover:bg-success-dark/70',
    ghost: 'text-success hover:bg-success-30 dark:text-success-dark dark:hover:bg-success-dark/70 dark:hover:text-white',
    plain: 'text-success dark:text-success-dark',
  },
  warning: {
    solid: 'bg-warning text-white hover:bg-warning-dark dark:bg-warning-dark dark:hover:bg-warning-dark/70',
    outline: 'border border-warning text-warning hover:bg-warning-20 dark:bg-warning-dark/30 dark:border-warning-dark dark:text-white dark:hover:bg-warning-dark/70',
    ghost: 'text-warning hover:bg-warning-30 dark:text-warning-dark dark:hover:bg-warning-dark/70 dark:hover:text-white',
    plain: 'text-warning dark:text-warning-dark',
  },
  error: {
    solid: 'bg-error text-white hover:bg-error-dark dark:bg-error-dark dark:hover:bg-error-dark/70',
    outline: 'border border-error text-error hover:bg-error-20 dark:bg-error-dark/30 dark:border-error-dark dark:text-white dark:hover:bg-error-dark/70',
    ghost: 'text-error hover:bg-error-30 dark:text-error-dark dark:hover:bg-error-dark/70 dark:hover:text-white',
    plain: 'text-error dark:text-error-dark',
  },
  info: {
    solid: 'bg-info text-white hover:bg-info-dark dark:bg-info-dark dark:hover:bg-info-dark/70',
    outline: 'border border-info text-info hover:bg-info-20 dark:bg-info-dark/30 dark:border-info-dark dark:text-white dark:hover:bg-info-dark/70',
    ghost: 'text-info hover:bg-info-30 dark:text-info-dark dark:hover:bg-info-dark/70 dark:hover:text-white',
    plain: 'text-info dark:text-info-dark',
  },
};

export type VariantType = keyof typeof ButtonVariantsMap
export type Variant = keyof typeof ButtonVariantsMap[VariantType]

export const getVariantClasses = (
  variant: Variant,
  variantType: VariantType
): string => {
  return ButtonVariantsMap[variantType][variant] || ''
}

export type ButtonProps = {
  children?: React.ReactNode | string
  onClick?: () => void
  size?: keyof typeof ButtonSizes
  to?: string
  variant?: Variant
  variantType?: VariantType
  borderType?: keyof typeof ButtonRadius
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
  variant = 'solid',
  variantType = 'primary',
  borderType = 'regular',
  fullWidth = false,
  prefixIcon,
  suffixIcon,
  className
}) => {

  const buttonBorderClass = ButtonRadius[borderType]
  const variantClass = getVariantClasses(variant, variantType)
  const sizeClass = ButtonSizes[size] || ''
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  const fullWidthClass = fullWidth ? 'w-full' : ''

  return to ? (
    <Link
      to={to}
      className={cn(`inline-flex items-center justify-center transition-all duration-[170ms] hover:scale-[98%]`, variantClass, sizeClass, disabledClass, fullWidthClass, buttonBorderClass, className)}
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
      className={cn(`inline-flex items-center justify-center transition-all duration-[170ms] hover:scale-[98%]`, variantClass, sizeClass, disabledClass, fullWidthClass, buttonBorderClass, className)}
    >
      {prefixIcon && <span className="mr-2">{prefixIcon}</span>}
      {children}
      {suffixIcon && <span className="ml-2">{suffixIcon}</span>}
    </button>
  )
};
