import { cn } from "clsx-for-tailwind"
import { CheckboxInput } from "../CheckboxInput/CheckboxInput"

export type Column<T> = {
    header: string
    accessor: keyof T
    render?: (value: T[keyof T], row: T) => React.ReactNode
}

const TableSize = {
    sm: 'text-sm py-[5px] px-2',
    md: 'text-base py-2 px-4',
    lg: 'text-lg py-3 px-6',
}

export type TableType<T> = {
    columns: Column<T>[]
    data: T[]
    striped?: boolean
    stripeColor?: string
    headerClassName?: string
    dataColumnClassName?: string
    dataRowClassName?: string
    tableClassName?: string
    captionClassName?: string
    containerClassName?: string
    customEmptyData?: React.ReactNode
    size?: keyof typeof TableSize
    caption?: string
    captionPosition?: 'top' | 'bottom'
    stickyHeader?: boolean
    selectable?: boolean
    onSelectionChange?: (selected: T[]) => void
    selectedRows?: T[]
}

export function Table<T extends { id: any }>({
    columns,
    data,
    striped = false,
    stripeColor,
    headerClassName,
    dataColumnClassName,
    dataRowClassName,
    customEmptyData,
    tableClassName,
    captionClassName,
    containerClassName,
    size = 'md',
    caption,
    captionPosition = 'bottom',
    stickyHeader = false,
    selectable = false,
    onSelectionChange,
    selectedRows = [],
}: TableType<T>) {

    const tableSizeClass = TableSize[size]

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            onSelectionChange?.(data)
        } else {
            onSelectionChange?.([])
        }
    }

    const handleSelectRow = (row: T) => {
        const isSelected = selectedRows.some(r => r.id === row.id)
        if (isSelected) {
            onSelectionChange?.(selectedRows.filter(r => r.id !== row.id))
        } else {
            onSelectionChange?.([...selectedRows, row])
        }
    }

    const isAllSelected = data.length > 0 && selectedRows.length === data.length
    const isIndeterminate = selectedRows.length > 0 && selectedRows.length < data.length

    return (
        <div className={cn("overflow-x-auto w-full", stickyHeader && "max-h-[400px] overflow-y-auto", containerClassName)}>
            {
                caption && captionPosition === 'top' && <p className={cn("text-center text-sm font-medium mb-1 dark:text-white", captionClassName)}>{caption}</p>
            }
            <table className={cn("relative min-w-full outline outline-gray-200 dark:outline-gray-600", tableSizeClass, tableClassName)}>
                <thead className={cn("dark:bg-gray-700 dark:text-white", headerClassName)}>
                    <tr>
                        {selectable && (
                            <th
                                className={cn(
                                    "px-4 py-2 text-left text-sm border-b dark:border-b-secondary-700",
                                    tableSizeClass,
                                    stickyHeader && "sticky top-0 bg-secondary dark:bg-gray-700 z-10",
                                    headerClassName
                                )}
                            >
                                <CheckboxInput
                                    checked={isAllSelected}
                                    indeterminate={isIndeterminate}
                                    onChange={handleSelectAll}
                                />
                            </th>
                        )}
                        {columns.map((col, idx) => (
                            <th
                                key={idx}
                                className={cn(
                                    "px-4 py-2 text-left text-sm border-b dark:border-b-secondary-700",
                                    tableSizeClass,
                                    stickyHeader && "sticky top-0 bg-secondary dark:bg-gray-700 z-10",
                                    headerClassName
                                )}
                            >
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="dark:bg-gray-800 dark:text-white">
                    {data.length > 0 ? (
                        data.map((row, rIdx) => (
                            <tr
                                key={rIdx}
                                className={cn("hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 transition-colors", striped && rIdx % 2 !== 0 && (stripeColor ?? 'bg-gray-300 dark:bg-gray-700'), dataRowClassName)}
                            >
                                {selectable && (
                                    <td className={cn("px-4 py-2 border-b border-secondary-700 dark:border-secondary-dark-700", (striped || stripeColor) && 'border-none', dataColumnClassName, tableSizeClass)}>
                                        <CheckboxInput
                                            checked={selectedRows.some(r => r.id === row.id)}
                                            onChange={() => handleSelectRow(row)}
                                        />
                                    </td>
                                )}
                                {columns.map((col, cIdx) => (
                                    <td
                                        key={cIdx}
                                        className={cn("px-4 py-2 border-b border-secondary-700 dark:border-secondary-dark-700", (striped || stripeColor) && 'border-none', dataColumnClassName, tableSizeClass)}
                                    >
                                        {col.render ? col.render(row[col.accessor], row) : String(row[col.accessor])}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={columns.length + (selectable ? 1 : 0)}
                                className={cn("px-4 py-6 text-center", tableSizeClass)}
                            >
                                {customEmptyData ?? 'Tidak ada data.'}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            {
                caption && captionPosition === 'bottom' && <p className={cn("text-center text-sm font-medium mt-1 dark:text-white", captionClassName)}>{caption}</p>
            }
        </div>
    );
};
