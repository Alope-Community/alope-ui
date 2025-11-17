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
    solid: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 dark:bg-primary-500-dark dark:hover:bg-primary-400-dark dark:active:bg-primary-600-dark',
    outline: 'border border-primary-500 text-primary-500 hover:text-primary-600 hover:border-primary-600 active:text-primary-700 active:border-primary-700 hover:bg-primary-50 active:bg-primary-100 dark:border-primary-400-dark dark:text-primary-400-dark dark:hover:border-primary-300-dark dark:hover:text-primary-300-dark dark:hover:bg-secondary-800-dark',
    ghost: 'text-primary-500 hover:text-primary-600 hover:bg-primary-50 active:text-primary-700 active:bg-primary-100 dark:hover:bg-primary-50-dark dark:text-primary-500-dark dark:hover:text-primary-600-dark dark:active:bg-primary-100-dark',
    plain: 'text-primary-600 hover:text-primary-700 active:text-primary-900 dark:text-primary-600-dark dark:hover:text-primary-700-dark dark:active:text-primary-900-dark',
  },
  secondary: {
    solid: 'bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 dark:bg-secondary-500-dark dark:hover:bg-secondary-400-dark dark:active:bg-secondary-600-dark',
    outline: 'border border-secondary-500 text-secondary-500 hover:text-secondary-600 hover:border-secondary-600 active:text-secondary-700 active:border-secondary-700 hover:bg-secondary-50 active:bg-secondary-100 dark:border-secondary-400-dark dark:text-secondary-400-dark dark:hover:border-secondary-300-dark dark:hover:text-secondary-300-dark dark:hover:bg-secondary-800-dark',
    ghost: 'text-secondary-500 hover:text-secondary-600 hover:bg-secondary-50 active:text-secondary-700 active:bg-secondary-100 dark:hover:bg-secondary-50-dark dark:text-secondary-500-dark dark:hover:text-secondary-600-dark dark:active:bg-secondary-100-dark',
    plain: 'text-secondary-600 hover:text-secondary-700 active:text-secondary-900 dark:text-secondary-600-dark dark:hover:text-secondary-700-dark dark:active:text-secondary-900-dark',
  },
  success: {
    solid: 'bg-success-500 text-white hover:bg-success-600 active:bg-success-700 dark:bg-success-500-dark dark:hover:bg-success-400-dark dark:active:bg-success-600-dark',
    outline: 'border border-success-500 text-success-500 hover:text-success-600 hover:border-success-600 active:text-success-700 active:border-success-700 hover:bg-success-50 active:bg-success-100 dark:border-success-400-dark dark:text-success-400-dark dark:hover:border-success-300-dark dark:hover:text-success-300-dark dark:hover:bg-secondary-800-dark',
    ghost: 'text-success-500 hover:text-success-600 hover:bg-success-50 active:text-success-700 active:bg-success-100 dark:hover:bg-success-50-dark dark:text-success-500-dark dark:hover:text-success-600-dark dark:active:bg-success-100-dark',
    plain: 'text-success-600 hover:text-success-700 active:text-success-900 dark:text-success-600-dark dark:hover:text-success-700-dark dark:active:text-success-900-dark',
  },
  warning: {
    solid: 'bg-warning-500 text-white hover:bg-warning-600 active:bg-warning-700 dark:bg-warning-500-dark dark:hover:bg-warning-400-dark dark:active:bg-warning-600-dark',
    outline: 'border border-warning-500 text-warning-500 hover:text-warning-600 hover:border-warning-600 active:text-warning-700 active:border-warning-700 hover:bg-warning-50 active:bg-warning-100 dark:border-warning-400-dark dark:text-warning-400-dark dark:hover:border-warning-300-dark dark:hover:text-warning-300-dark dark:hover:bg-secondary-800-dark',
    ghost: 'text-warning-500 hover:text-warning-600 hover:bg-warning-50 active:text-warning-700 active:bg-warning-100 dark:hover:bg-warning-50-dark dark:text-warning-500-dark dark:hover:text-warning-600-dark dark:active:bg-warning-100-dark',
    plain: 'text-warning-600 hover:text-warning-700 active:text-warning-900 dark:text-warning-600-dark dark:hover:text-warning-700-dark dark:active:text-warning-900-dark',
  },
  error: {
    solid: 'bg-error-500 text-white hover:bg-error-600 active:bg-error-700 dark:bg-error-500-dark dark:hover:bg-error-400-dark dark:active:bg-error-600-dark',
    outline: 'border border-error-500 text-error-500 hover:text-error-600 hover:border-error-600 active:text-error-700 active:border-error-700 hover:bg-error-50 active:bg-error-100 dark:border-error-400-dark dark:text-error-400-dark dark:hover:border-error-300-dark dark:hover:text-error-300-dark dark:hover:bg-secondary-800-dark',
    ghost: 'text-error-500 hover:text-error-600 hover:bg-error-50 active:text-error-700 active:bg-error-100 dark:hover:bg-error-50-dark dark:text-error-500-dark dark:hover:text-error-600-dark dark:active:bg-error-100-dark',
    plain: 'text-error-600 hover:text-error-700 active:text-error-900 dark:text-error-600-dark dark:hover:text-error-700-dark dark:active:text-error-900-dark',
  },
  info: {
    solid: 'bg-info-500 text-white hover:bg-info-600 active:bg-info-700 dark:bg-info-500-dark dark:hover:bg-info-400-dark dark:active:bg-info-600-dark',
    outline: 'border border-info-500 text-info-500 hover:text-info-600 hover:border-info-600 active:text-info-700 active:border-info-700 hover:bg-info-50 active:bg-info-100 dark:border-info-400-dark dark:text-info-400-dark dark:hover:border-info-300-dark dark:hover:text-info-300-dark dark:hover:bg-secondary-800-dark',
    ghost: 'text-info-500 hover:text-info-600 hover:bg-info-50 active:text-info-700 active:bg-info-100 dark:hover:bg-info-50-dark dark:text-info-500-dark dark:hover:text-info-600-dark dark:active:bg-info-100-dark',
    plain: 'text-info-600 hover:text-info-700 active:text-info-900 dark:text-info-600-dark dark:hover:text-info-700-dark dark:active:text-info-900-dark',
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
