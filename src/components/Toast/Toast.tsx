import { cn } from 'clsx-for-tailwind';
import React, { useEffect, useState } from 'react';

export interface ToastProps {
  title?: string
  message: string
  type: keyof typeof ToastTypes
  position?: keyof typeof ToastPositions
  variant?: keyof typeof ToastVariants
  icon?: React.ReactNode
  onClose?: () => void
}

export const ToastVariants = {
  outline: 'border border-current',
  solid: ''
}

export const ToastPositions = {
  topLeft: 'top-5 left-5',
  bottomLeft: 'bottom-5 left-5',
  topRight: 'top-5 right-5',
  bottomRight: 'bottom-5 right-5'
}

export const ToastTypes = {
  success: 'bg-success-30-50 outline-success-700 text-success-700 dark:bg-success-dark-30-20 dark:text-success',
  info: 'bg-info-30-50 outline-info-700 text-info-700 dark:bg-info-dark-30-20 dark:text-info',
  warning: 'bg-warning-30-50 outline-warning-700 text-warning-700 dark:bg-warning-dark-30-20 dark:text-warning',
  error: 'bg-error-30-50 outline-error-700 text-error-700 dark:bg-error-dark-30-20 dark:text-error',
}

const enterAnimationByPosition: Record<keyof typeof ToastPositions, string> = {
  topRight: 'translate-x-0',
  bottomRight: 'translate-x-0',
  topLeft: '-translate-x-0',
  bottomLeft: '-translate-x-0',
}

const exitAnimationByPosition: Record<keyof typeof ToastPositions, string> = {
  topRight: 'translate-x-40',
  bottomRight: 'translate-x-40',
  topLeft: '-translate-x-40',
  bottomLeft: '-translate-x-40',
}

const initialAnimationByPosition: Record<keyof typeof ToastPositions, string> = {
  topRight: 'translate-x-10',
  bottomRight: 'translate-x-10',
  topLeft: '-translate-x-10',
  bottomLeft: '-translate-x-10',
}

const Toast: React.FC<ToastProps> = ({
  title,
  message,
  type,
  icon,
  position = 'bottomRight',
  variant = 'solid',
  onClose
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 50)

    timeoutRef.current = setTimeout(() => {
      handleClose()
    }, 3500)

    return () => { timeoutRef.current && clearTimeout(timeoutRef.current) }
  }, []);

  const handleClose = () => {
    setIsFadingOut(true)
    setTimeout(() => {
      if (onClose) onClose()
    }, 500)
  };

  const handleOnMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  const handleOnMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      handleClose()
    }, 3500)
  }

  return (
    <div
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      className={cn(`flex max-w-sm items-start gap-3 p-4 mb-3 rounded-lg shadow-lg transition-all duration-500 transform`,
        ToastTypes[type],
        ToastVariants[variant],
        isFadingOut
          ? `opacity-0 ${exitAnimationByPosition[position]}`
          : isVisible
            ? `opacity-100 ${enterAnimationByPosition[position]}`
            : `opacity-0 ${initialAnimationByPosition[position]}`
      )}
    >
      {icon && (
        <div className="text-2xl mt-1">
          {icon}
        </div>
      )}

      <div className="flex-1">
        {title && <p className="font-semibold text-base mb-1">{title}</p>}
        <p className="text-sm leading-snug">{message}</p>
      </div>

      <button
        onClick={handleClose}
        className="ml-2 text-lg leading-none hover:text-red-500 focus:outline-none cursor-pointer"
        aria-label="Close"
      >
        &times;
      </button>
    </div>
  )
}

export default Toast
