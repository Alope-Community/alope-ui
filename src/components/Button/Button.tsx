import React from 'react';
import { Link } from 'react-router-dom';

const ButtonSizes = {
  sm: 'px-2 py-1 text-sm rounded-sm',
  md: 'px-4 py-2 text-base rounded-md',
  lg: 'px-6 py-3 text-lg rounded-lg',
}

const ButtonVariants = {
  solid: 'bg-indigo-500 text-white hover:bg-indigo-500/90',
  error: 'bg-red-400 text-white hover:bg-red-400/90',
  success: 'bg-[#50C878] text-white hover:bg-[#50C878]/80',
  surface: 'bg-gray-200 hover:bg-gray-300 outline outline-black/50',
  outline: 'bg-transparent hover:bg-gray-200 outline',
  ghost: 'bg-transparent hover:bg-gray-200',
  plain: '',
}

export type ButtonProps = {
  children?: string
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
  variant = 'solid',
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
      className={`flex items-center justify-center transition-all duration-[170ms] ${variantClass} ${sizeClass} ${disabledClass} ${fullWidthClass} ${className}`}
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
      className={`flex items-center justify-center transition-all duration-[170ms] ${variantClass} ${sizeClass} ${disabledClass} ${fullWidthClass} ${className}`}
    >
      {prefixIcon && <span className="mr-2">{prefixIcon}</span>}
      {children}
      {suffixIcon && <span className="ml-2">{suffixIcon}</span>}
    </button>
  )
};
