import { cn } from "clsx-for-tailwind"

const CollectionVariants = {
    primary: {
        solid: {
            label: 'border-transparent bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-500-dark dark:hover:bg-primary-400-dark',
            checked: 'bg-primary-700 dark:bg-primary-600-dark hover:bg-primary-700 dark:hover:bg-primary-600-dark',
        },
        subtle: {
            label: 'border-none bg-primary-50 hover:bg-primary-100 hover:text-primary-700 dark:bg-secondary-900-dark dark:hover:bg-secondary-800-dark dark:hover:text-primary-200-dark dark:text-primary-200-dark',
            checked: 'bg-primary-200 hover:bg-primary-200 text-primary-700 dark:bg-primary-100-dark dark:text-primary-700-dark dark:hover:text-primary-700-dark dark:hover:bg-primary-100-dark',
        },
        outline: {
            label: `
            border border-primary-500 text-primary-500 
            hover:bg-primary-50 hover:border-primary-600 hover:text-primary-600
            dark:border-primary-400-dark dark:text-primary-400-dark
            dark:hover:bg-secondary-800-dark dark:hover:border-primary-300-dark dark:hover:text-primary-300-dark
        `,
            checked: 'border-primary-700 bg-primary-100 hover:bg-primary-100 text-primary-700 dark:border-primary-300 dark:bg-primary-900-dark dark:hover:bg-primary-900-dark dark:text-primary-100',
        },
    },

    error: {
        solid: {
            label: 'border-transparent bg-error-500 text-white hover:bg-error-600 dark:bg-error-500-dark dark:hover:bg-error-400-dark',
            checked: 'bg-error-700 dark:bg-error-600-dark hover:bg-error-700 dark:hover:bg-error-600-dark',
        },
        subtle: {
            label: 'border-none bg-error-50 hover:bg-error-100 hover:text-error-700 dark:bg-secondary-900-dark dark:hover:bg-secondary-800-dark dark:hover:text-error-200-dark dark:text-error-200-dark',
            checked: 'bg-error-200 hover:bg-error-200 text-error-700 dark:bg-error-100-dark dark:text-error-700-dark dark:hover:text-error-700-dark dark:hover:bg-error-100-dark',
        },
        outline: {
            label: `
            border border-error-500 text-error-500 
            hover:bg-error-50 hover:border-error-600 hover:text-error-600
            dark:border-error-400-dark dark:text-error-400-dark
            dark:hover:bg-secondary-800-dark dark:hover:border-error-300-dark dark:hover:text-error-300-dark
        `,
            checked: 'border-error-700 bg-error-100 hover:bg-error-100 text-error-700 dark:border-error-300 dark:bg-error-900-dark dark:hover:bg-error-900-dark dark:text-error-100',
        },
    },

    success: {
        solid: {
            label: 'border-transparent bg-success-500 text-white hover:bg-success-600 dark:bg-success-500-dark dark:hover:bg-success-400-dark',
            checked: 'bg-success-700 dark:bg-success-600-dark hover:bg-success-700 dark:hover:bg-success-600-dark',
        },
        subtle: {
            label: 'border-none bg-success-50 hover:bg-success-100 hover:text-success-700 dark:bg-secondary-900-dark dark:hover:bg-secondary-800-dark dark:hover:text-success-200-dark dark:text-success-200-dark',
            checked: 'bg-success-200 hover:bg-success-200 text-success-700 dark:bg-success-100-dark dark:text-success-700-dark dark:hover:text-success-700-dark dark:hover:bg-success-100-dark',
        },
        outline: {
            label: `
            border border-success-500 text-success-500 
            hover:bg-success-50 hover:border-success-600 hover:text-success-600
            dark:border-success-400-dark dark:text-success-400-dark
            dark:hover:bg-secondary-800-dark dark:hover:border-success-300-dark dark:hover:text-success-300-dark
        `,
            checked: 'border-success-700 bg-success-100 hover:bg-success-100 text-success-700 dark:border-success-300 dark:bg-success-900-dark dark:hover:bg-success-900-dark dark:text-success-100',
        },
    },

    info: {
        solid: {
            label: 'border-transparent bg-info-500 text-white hover:bg-info-600 dark:bg-info-500-dark dark:hover:bg-info-400-dark',
            checked: 'bg-info-700 dark:bg-info-600-dark hover:bg-info-700 dark:hover:bg-info-600-dark',
        },
        subtle: {
            label: 'border-none bg-info-50 hover:bg-info-100 hover:text-info-700 dark:bg-secondary-900-dark dark:hover:bg-secondary-800-dark dark:hover:text-info-200-dark dark:text-info-200-dark',
            checked: 'bg-info-200 hover:bg-info-200 text-info-700 dark:bg-info-100-dark dark:text-info-700-dark dark:hover:text-info-700-dark dark:hover:bg-info-100-dark',
        },
        outline: {
            label: `
            border border-info-500 text-info-500 
            hover:bg-info-50 hover:border-info-600 hover:text-info-600
            dark:border-info-400-dark dark:text-info-400-dark
            dark:hover:bg-secondary-800-dark dark:hover:border-info-300-dark dark:hover:text-info-300-dark
        `,
            checked: 'border-info-700 bg-info-100 hover:bg-info-100 text-info-700 dark:border-info-300 dark:bg-info-900-dark dark:hover:bg-info-900-dark dark:text-info-100',
        },
    },

    warning: {
        solid: {
            label: 'border-transparent bg-warning-500 text-white hover:bg-warning-600 dark:bg-warning-500-dark dark:hover:bg-warning-400-dark',
            checked: 'bg-warning-700 dark:bg-warning-600-dark hover:bg-warning-700 dark:hover:bg-warning-600-dark',
        },
        subtle: {
            label: 'border-none bg-warning-50 hover:bg-warning-100 hover:text-warning-700 dark:bg-secondary-900-dark dark:hover:bg-secondary-800-dark dark:hover:text-warning-200-dark dark:text-warning-200-dark',
            checked: 'bg-warning-200 hover:bg-warning-200 text-warning-700 dark:bg-warning-100-dark dark:text-warning-700-dark dark:hover:text-warning-700-dark dark:hover:bg-warning-100-dark',
        },
        outline: {
            label: `
            border border-warning-500 text-warning-500 
            hover:bg-warning-50 hover:border-warning-600 hover:text-warning-600
            dark:border-warning-400-dark dark:text-warning-400-dark
            dark:hover:bg-secondary-800-dark dark:hover:border-warning-300-dark dark:hover:text-warning-300-dark
        `,
            checked: 'border-warning-700 bg-warning-100 hover:bg-warning-100 text-warning-700 dark:border-warning-300 dark:bg-warning-900-dark dark:hover:bg-warning-900-dark dark:text-warning-100',
        },
    },

}

export type VariantType = keyof typeof CollectionVariants
export type Variant = keyof typeof CollectionVariants[VariantType]

export const getVariantClasses = (
    variant: Variant,
    variantType: VariantType
) => {
    return CollectionVariants[variantType][variant] || ''
}


export type CollectionProps<T> = {
    title?: string
    data: T[]
    children?: (item: T, index: number, isActive: boolean) => React.ReactNode
    className?: string
    wrapperClassName?: string
    childrenClassName?: string
    suffixIcon?: React.ReactNode | ((item?: T, index?: number, isActive?: boolean) => React.ReactNode)
    activeItem?: any
    onChangeActive?: (item: T, index: number) => void
    variant?: Variant
    variantType?: VariantType
}

export function Collection<T extends { id: any, name?: string }>({
    data,
    title,
    className,
    wrapperClassName,
    childrenClassName,
    children,
    suffixIcon,
    activeItem,
    onChangeActive,
    variant = 'outline',
    variantType = 'primary'
}: CollectionProps<T>) {

    const variantClasses = getVariantClasses(variant, variantType)

    return (
        <div className={cn("p-3 border border-secondary-300 inline-block dark:border-secondary-600-dark rounded-md dark:text-white", className)}>
            {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
            {data.length > 0 ? (
                <ul className={cn("space-y-3", wrapperClassName)}>
                    {data.map((item, index) => {
                        const isActive = item.id === activeItem;
                        return (
                            <li key={item.id}>
                                {
                                    children ?
                                        <div
                                            onClick={() => onChangeActive?.(item, index)}
                                            className={cn(
                                                "p-3 border rounded-md flex gap-3 items-center justify-between cursor-pointer",
                                                variantClasses.label,
                                                {
                                                    [variantClasses.checked]: isActive,
                                                },
                                                childrenClassName,
                                            )}
                                        >
                                            {
                                                children(item, index, isActive)
                                            }
                                        </div>
                                        :
                                        <div
                                            onClick={() => onChangeActive?.(item, index)}
                                            className={cn(
                                                "p-3 border rounded-md flex gap-3 items-center justify-between cursor-pointer",
                                                variantClasses.label,
                                                {
                                                    [variantClasses.checked]: isActive,
                                                },
                                                childrenClassName,
                                            )}
                                        >
                                            <p className="font-bold">{item.name || `Item ${item.id}`}</p>
                                            {suffixIcon && (
                                                <span>
                                                    {typeof suffixIcon === "function"
                                                        ? suffixIcon(item, index, isActive)
                                                        : suffixIcon}
                                                </span>
                                            )}
                                        </div>
                                }
                            </li>
                        )
                    })}
                </ul>
            ) : (
                <p>No items to display.</p>
            )}
        </div>
    )
}
