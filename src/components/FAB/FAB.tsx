import { cn } from 'clsx-for-tailwind'
import { Children, isValidElement, useEffect, useState } from 'react'
import { getVariantClasses, type Variant, type VariantType } from '../Button/Button'

const FABSizes = {
  sm: 'w-11 h-11 font-medium rounded-sm rounded rounded-full',
  md: 'w-14 h-14 font-semibold tracking-[.2px] rounded-md rounded rounded-full',
  lg: 'w-19 h-19 text-lg font-semibold rounded-lg rounded rounded-full',
}

type FABProps = {
  children: React.ReactNode
  direction?: 'horizontal' | 'vertical'
  size?: keyof typeof FABSizes
  variant?: Variant
  variantType?: VariantType
  isOpen: boolean
  onOpen: () => void
  icon?: React.ReactNode
}

export const FAB = ({
  children,
  direction = 'vertical',
  size = 'md',
  variant = 'solid',
  variantType = 'primary',
  isOpen,
  onOpen,
  icon = '+'
}: FABProps) => {
  const [shouldRender, setShouldRender] = useState(isOpen)
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
      setIsAnimatingOut(false)
    } else if (shouldRender) {
      setIsAnimatingOut(true)
      const timeout = setTimeout(() => {
        setShouldRender(false)
        setIsAnimatingOut(false)
      }, 300) // durasi animasi pop dan pop-out harus sama dengan CSS animasi (0.3s)
      return () => clearTimeout(timeout)
    }
  }, [isOpen, shouldRender])

  const directionClasses = {
    vertical: 'flex-col-reverse space-y-2 space-y-reverse mb-2',
    horizontal: 'flex-row-reverse space-x-2 space-x-reverse mr-2',
  }

  const sizeClasses = FABSizes[size]
  const variantClasses = getVariantClasses(variant, variantType)

  const animatedChildren = Children.toArray(children).map((child, index, arr) => {
    if (!isValidElement(child)) return child
    const reverseIndex = arr.length - 1 - index
    return (
      <div
        key={index}
        style={{ animationDelay: `${isAnimatingOut ? reverseIndex * 100 : index * 100}ms` }}
        className={cn(
          !isAnimatingOut && 'opacity-0',
          isAnimatingOut ? 'animate-pop-out' : 'animate-pop'
        )}
      >
        {child}
      </div>
    )
  })

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end z-50">
      {/* Action buttons container */}
      <div className={cn('flex items-center transition-all duration-300 ease-in-out', directionClasses[direction])}>
        {shouldRender && animatedChildren}
      </div>

      {/* Main FAB button */}
      <button
        onClick={onOpen}
        className={cn("shadow-lg flex w-full items-center justify-center hover:cursor-pointer", sizeClasses, variantClasses)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
        >
          {icon}
        </span>
      </button>
    </div>
  )
}
