import { cn } from 'clsx-for-tailwind'
import React, { useState } from 'react'

const AvatarSize = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-12 h-12 text-sm',
  lg: 'w-16 h-16 text-base',
}

const AvatarVariant = {
  solid: 'bg-opacity-100',
  outline: 'bg-transparent border-2',
}

const AvatarShape = {
  sharp: 'rounded-none',
  cornered: 'rounded-md',
  rounded: 'rounded-full',
}

const AvatarFallbackColor = {
  primary: 'bg-primary dark:bg-primary-dark text-white',
  error: 'bg-error dark:bg-error-dark text-white',
  warning: 'bg-warning dark:bg-warning-dark text-white',
  success: 'bg-success dark:bg-success-dark text-white',
  info: 'bg-info dark:bg-info-dark text-white',
  secondary: 'bg-secondary dark:bg-secondary-dark text-white',
}

export type AvatarProps = {
  imageSrc?: string
  shape?: keyof typeof AvatarShape
  variant?: keyof typeof AvatarVariant
  size?: keyof typeof AvatarSize
  ring?: boolean
  ringClassName?: string
  fallbackName?: string
  fallbackColor?: keyof typeof AvatarFallbackColor
  alt?: string
  status?: 'online' | 'offline'
  className?: string
}

export const Avatar: React.FC<AvatarProps> = ({
  imageSrc,
  fallbackName,
  ring = false,
  ringClassName,
  shape = 'rounded',
  variant = 'solid',
  fallbackColor = 'primary',
  size = 'md',
  alt = 'avatar',
  status,
  className,
}) => {
  const [imageError, setImageError] = useState(false)

  const AvatarSizeClass = AvatarSize[size]
  const AvatarVariantClass = AvatarVariant[variant]
  const AvatarShapeClass = AvatarShape[shape]
  const AvatarFallbackColorClass = AvatarFallbackColor[fallbackColor]
  const RingClass = ring ? cn('ring-2 ring-offset-2', ringClassName || 'ring-primary dark:ring-primary-dark') : ''

  const initials = fallbackName
    ? fallbackName
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
    : '?'

  const content = imageError || !imageSrc ? (
    <div
      className={cn(
        'flex items-center justify-center font-semibold',
        AvatarFallbackColorClass,
        AvatarSizeClass,
        AvatarShapeClass,
        AvatarVariantClass,
        RingClass,
        className
      )}
    >
      {initials}
    </div>
  ) : (
    <img
      src={imageSrc}
      alt={alt}
      onError={() => setImageError(true)}
      className={cn(
        'object-cover',
        AvatarSizeClass,
        AvatarShapeClass,
        AvatarVariantClass,
        RingClass,
        className
      )}
    />
  )

  return (
    <div className="relative inline-block">
      {content}

      {status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 w-3 h-3 rounded-full border-2',
            status === 'online' ? 'bg-success' : 'bg-secondary-700 dark:bg-secondary-dark-700',
            'border-white'
          )}
        />
      )}
    </div>
  )
}

