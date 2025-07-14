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
    solid: 'bg-primary text-white hover:bg-primary/90',
    outline: 'border border-primary text-primary hover:bg-primary/10',
    ghost: 'text-primary hover:bg-primary/10',
    plain: 'text-primary',
  },
  error: {
    solid: 'bg-error text-white hover:bg-error/90',
    outline: 'border border-error text-error hover:bg-error/10',
    ghost: 'text-error hover:bg-error/10',
    plain: 'text-error',
  },
  warning: {
    solid: 'bg-warning text-white hover:bg-warning/90',
    outline: 'border border-warning text-warning hover:bg-warning/10',
    ghost: 'text-warning hover:bg-warning/10',
    plain: 'text-warning',
  },
  success: {
    solid: 'bg-success text-white hover:bg-success/90',
    outline: 'border border-success text-success hover:bg-success/10',
    ghost: 'text-success hover:bg-success/10',
    plain: 'text-success',
  },
  info: {
    solid: 'bg-info text-white hover:bg-info/90',
    outline: 'border border-info text-info hover:bg-info/10',
    ghost: 'text-info hover:bg-info/10',
    plain: 'text-info',
  },
  secondary: {
    solid: 'bg-gray-200 text-black hover:bg-gray-300',
    outline: 'border border-gray-300 text-black hover:bg-gray-100',
    ghost: 'text-black hover:bg-gray-100',
    plain: 'text-black',
  },
}

export type VariantType = keyof typeof ButtonVariantsMap
export type Variant = keyof typeof ButtonVariantsMap[VariantType]

const getVariantClasses = (
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
