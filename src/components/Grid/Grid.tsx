import React, { type HTMLAttributes } from "react"
import { cn } from "clsx-for-tailwind"

const responsiveColsClass = {
    base: {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6",
        7: "grid-cols-7",
        8: "grid-cols-8",
        9: "grid-cols-9",
        10: "grid-cols-10",
        11: "grid-cols-11",
        12: "grid-cols-12",
    },
    sm: {
        1: "sm:grid-cols-1",
        2: "sm:grid-cols-2",
        3: "sm:grid-cols-3",
        4: "sm:grid-cols-4",
        5: "sm:grid-cols-5",
        6: "sm:grid-cols-6",
        7: "sm:grid-cols-7",
        8: "sm:grid-cols-8",
        9: "sm:grid-cols-9",
        10: "sm:grid-cols-10",
        11: "sm:grid-cols-11",
        12: "sm:grid-cols-12",
    },
    md: {
        1: "md:grid-cols-1",
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-4",
        5: "md:grid-cols-5",
        6: "md:grid-cols-6",
        7: "md:grid-cols-7",
        8: "md:grid-cols-8",
        9: "md:grid-cols-9",
        10: "md:grid-cols-10",
        11: "md:grid-cols-11",
        12: "md:grid-cols-12",
    },
    lg: {
        1: "lg:grid-cols-1",
        2: "lg:grid-cols-2",
        3: "lg:grid-cols-3",
        4: "lg:grid-cols-4",
        5: "lg:grid-cols-5",
        6: "lg:grid-cols-6",
        7: "lg:grid-cols-7",
        8: "lg:grid-cols-8",
        9: "lg:grid-cols-9",
        10: "lg:grid-cols-10",
        11: "lg:grid-cols-11",
        12: "lg:grid-cols-12",
    },
    xl: {
        1: "xl:grid-cols-1",
        2: "xl:grid-cols-2",
        3: "xl:grid-cols-3",
        4: "xl:grid-cols-4",
        5: "xl:grid-cols-5",
        6: "xl:grid-cols-6",
        7: "xl:grid-cols-7",
        8: "xl:grid-cols-8",
        9: "xl:grid-cols-9",
        10: "xl:grid-cols-10",
        11: "xl:grid-cols-11",
        12: "xl:grid-cols-12",
    },
    '2xl': {
        1: "2xl:grid-cols-1",
        2: "2xl:grid-cols-2",
        3: "2xl:grid-cols-3",
        4: "2xl:grid-cols-4",
        5: "2xl:grid-cols-5",
        6: "2xl:grid-cols-6",
        7: "2xl:grid-cols-7",
        8: "2xl:grid-cols-8",
        9: "2xl:grid-cols-9",
        10: "2xl:grid-cols-10",
        11: "2xl:grid-cols-11",
        12: "2xl:grid-cols-12",
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

type Breakpoint = 'base' | 'md' | 'lg' | 'xl' | 'lg' | 'xl' | '2xl'
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

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    cols?: ResponsiveCols
    gap?: ResponsiveGap
}

export const Grid = ({ className, cols, gap, children, style, ...props }: GridProps) => {

    const colsClasses = getResponsiveColsClasses(normalizeResponsiveProp(cols))
    const gapClasses = getResponsiveGapClasses(normalizeResponsiveProp(gap))

    // const gridTemplateColumns = cols
    //     ? `repeat(${cols}, minmax(0, 1fr))`
    //     : undefined

    // const gapValue = gap !== undefined ? `${gap * 0.25}rem` : undefined

    return (
        <div
            className={cn(
                "grid",
                colsClasses,
                gapClasses,
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}
