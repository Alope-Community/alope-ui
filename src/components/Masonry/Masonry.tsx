import { cn } from 'clsx-for-tailwind'
import React from 'react'

const responsiveColsClass = {
  base: {
    1: "columns-1",
    2: "columns-2",
    3: "columns-3",
    4: "columns-4",
    5: "columns-5",
    6: "columns-6",
    7: "columns-7",
    8: "columns-8",
    9: "columns-9",
    10: "columns-10",
    11: "columns-11",
    12: "columns-12",
  },
  sm: {
    1: "sm:columns-1",
    2: "sm:columns-2",
    3: "sm:columns-3",
    4: "sm:columns-4",
    5: "sm:columns-5",
    6: "sm:columns-6",
    7: "sm:columns-7",
    8: "sm:columns-8",
    9: "sm:columns-9",
    10: "sm:columns-10",
    11: "sm:columns-11",
    12: "sm:columns-12",
  },
  md: {
    1: "md:columns-1",
    2: "md:columns-2",
    3: "md:columns-3",
    4: "md:columns-4",
    5: "md:columns-5",
    6: "md:columns-6",
    7: "md:columns-7",
    8: "md:columns-8",
    9: "md:columns-9",
    10: "md:columns-10",
    11: "md:columns-11",
    12: "md:columns-12",
  },
  lg: {
    1: "lg:columns-1",
    2: "lg:columns-2",
    3: "lg:columns-3",
    4: "lg:columns-4",
    5: "lg:columns-5",
    6: "lg:columns-6",
    7: "lg:columns-7",
    8: "lg:columns-8",
    9: "lg:columns-9",
    10: "lg:columns-10",
    11: "lg:columns-11",
    12: "lg:columns-12",
  },
  xl: {
    1: "xl:columns-1",
    2: "xl:columns-2",
    3: "xl:columns-3",
    4: "xl:columns-4",
    5: "xl:columns-5",
    6: "xl:columns-6",
    7: "xl:columns-7",
    8: "xl:columns-8",
    9: "xl:columns-9",
    10: "xl:columns-10",
    11: "xl:columns-11",
    12: "xl:columns-12",
  },
  '2xl': {
    1: "2xl:columns-1",
    2: "2xl:columns-2",
    3: "2xl:columns-3",
    4: "2xl:columns-4",
    5: "2xl:columns-5",
    6: "2xl:columns-6",
    7: "2xl:columns-7",
    8: "2xl:columns-8",
    9: "2xl:columns-9",
    10: "2xl:columns-10",
    11: "2xl:columns-11",
    12: "2xl:columns-12",
  },
} as const

const responsiveGapClass = {
  base: {
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    5: "gap-5",
    6: "gap-6",
  },
  sm: {
    1: "sm:gap-1",
    2: "sm:gap-2",
    3: "sm:gap-3",
    4: "sm:gap-4",
    5: "sm:gap-5",
    6: "sm:gap-6",
  },
  md: {
    1: "md:gap-1",
    2: "md:gap-2",
    3: "md:gap-3",
    4: "md:gap-4",
    5: "md:gap-5",
    6: "md:gap-6",
  },
  lg: {
    1: "lg:gap-1",
    2: "lg:gap-2",
    3: "lg:gap-3",
    4: "lg:gap-4",
    5: "lg:gap-5",
    6: "lg:gap-6",
  },
  xl: {
    1: "xl:gap-1",
    2: "xl:gap-2",
    3: "xl:gap-3",
    4: "xl:gap-4",
    5: "xl:gap-5",
    6: "xl:gap-6",
  },
  '2xl': {
    1: "2xl:gap-1",
    2: "2xl:gap-2",
    3: "2xl:gap-3",
    4: "2xl:gap-4",
    5: "2xl:gap-5",
    6: "2xl:gap-6",
  },
} as const

type Breakpoint = 'base' | 'sm' | 'md' | 'lg' | 'xl' | 'lg' | 'xl' | '2xl'
export type ResponsiveValue<T extends number | string> = T | Partial<Record<Breakpoint, T>>
type ResponsiveCols = ResponsiveValue<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>
type ResponsiveGap = ResponsiveValue<1 | 2 | 3 | 4 | 5 | 6>

function normalizeResponsiveProp<T extends number>(
  value?: ResponsiveValue<T>
): Partial<Record<Breakpoint, T>> | undefined {
  if (typeof value === 'number') {
    return { base: value }
  }
  return value
}

function getResponsiveColsClasses(values?: ResponsiveCols): string[] {
  if (!values) return []

  return Object.entries(values).map(([breakpoint, value]) => {
    return responsiveColsClass[breakpoint as Breakpoint]?.[value as keyof typeof responsiveColsClass["base"]] ?? ""
  })
}

function getResponsiveGapClasses(values?: ResponsiveGap): string[] {
  if (!values) return []

  return Object.entries(values).map(([breakpoint, value]) => {
    return responsiveGapClass[breakpoint as Breakpoint]?.[value as keyof typeof responsiveGapClass["base"]] ?? ""
  })
}

export interface MasonryProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  cols?: ResponsiveCols
  gap?: ResponsiveGap
}

export const Masonry = React.forwardRef<HTMLDivElement, MasonryProps>(
  ({ children, className, cols, gap = 4, ...props }, ref) => {

    const colsClasses = getResponsiveColsClasses(normalizeResponsiveProp(cols))
    const gapClasses = getResponsiveGapClasses(normalizeResponsiveProp(gap))

    return (
      <div ref={ref} className={cn('grid-mason', colsClasses, gapClasses, className)} {...props}>
        {children}
      </div>
    )
  }
)

