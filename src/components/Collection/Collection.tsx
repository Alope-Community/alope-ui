import { cn } from "clsx-for-tailwind"

export type CollectionProps<T> = {
    title?: string
    data: T[]
    children?: (item: T, index: number, isActive: boolean) => React.ReactNode
    className?: string
    wrapperClassName?: string
    suffixIcon?: React.ReactNode | ((item?: T, index?: number, isActive?: boolean) => React.ReactNode)
    activeItem?: any
    onChangeActive?: (item: T, index: number) => void
}

export function Collection<T extends { id: any, name?: string }>({
    data,
    title,
    className,
    wrapperClassName,
    children,
    suffixIcon,
    activeItem,
    onChangeActive,
}: CollectionProps<T>) {

    return (
        <div className={cn("p-3 border border-secondary-700 inline-block dark:border-secondary-dark-700 rounded-md dark:text-white", className)}>
            {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
            {data.length > 0 ? (
                <ul className={cn("space-y-3", wrapperClassName)}>
                    {data.map((item, index) => {
                        const isActive = item.id === activeItem;
                        return (
                            <li key={item.id}>
                                {
                                    children ?
                                        <div onClick={() => onChangeActive?.(item, index)}>
                                            {
                                                children(item, index, isActive)
                                            }
                                        </div>
                                        :
                                        <div
                                            onClick={() => onChangeActive?.(item, index)}
                                            className={cn(
                                                "p-3 border border-secondary-700 dark:border-secondary-dark-700 rounded-md flex gap-3 items-center justify-between cursor-pointer",
                                                { "bg-primary-100 dark:bg-primary-dark-100": isActive }
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
