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

const TableVariants = {
    solid: {
        table: 'outline-none',
        header: 'bg-secondary-500 text-white dark:bg-secondary-600-dark',
        row: 'text-secondary-700 dark:text-secondary-200-dark',
        striped: 'bg-secondary-100 dark:bg-secondary-800-dark',
        hover: 'hover:bg-secondary-200 dark:hover:bg-secondary-700-dark',
        border: 'border-secondary-200 dark:border-secondary-700-dark',
    },
    outline: {
        table: 'outline outline-1 outline-secondary-200 dark:outline-secondary-700-dark',
        header: 'bg-secondary-50 dark:bg-secondary-800-dark text-secondary-800 dark:text-secondary-100-dark',
        row: 'text-secondary-700 dark:text-secondary-200-dark',
        striped: 'bg-secondary-100 dark:bg-secondary-800-dark',
        hover: 'hover:bg-secondary-100 dark:hover:bg-secondary-800-dark',
        border: 'border-b-secondary-200 dark:border-b-secondary-700-dark',
    },
};

export type TableType<T> = {
    columns: Column<T>[]
    data: T[]
    striped?: boolean
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
    variant?: keyof typeof TableVariants
}

export function Table<T extends { id: any }>({
    columns,
    data,
    striped = false,
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
    variant = 'outline',
}: TableType<T>) {

    const tableSizeClass = TableSize[size]
    const variantClasses = TableVariants[variant];

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
            <table className={cn("relative min-w-full", tableSizeClass, variantClasses.table, tableClassName)}>
                <thead className={cn(variantClasses.header, headerClassName)}>
                    <tr>
                        {selectable && (
                            <th
                                className={cn(
                                    "px-4 py-2 text-left text-sm border-b",
                                    variantClasses.border,
                                    tableSizeClass,
                                    stickyHeader && "sticky top-0 z-10",
                                    stickyHeader && variantClasses.header,
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
                                    "px-4 py-2 text-left text-sm border-b",
                                    variantClasses.border,
                                    tableSizeClass,
                                    stickyHeader && "sticky top-0 z-10",
                                    stickyHeader && variantClasses.header,
                                    headerClassName
                                )}
                            >
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className={cn(variantClasses.row)}>
                    {data.length > 0 ? (
                        data.map((row, rIdx) => (
                            <tr
                                key={rIdx}
                                className={cn(
                                    variantClasses.hover,
                                    "transition-colors",
                                    striped && rIdx % 2 !== 0 && variantClasses.striped,
                                    dataRowClassName
                                )}
                            >
                                {selectable && (
                                    <td className={cn("px-4 py-2 border-b", variantClasses.border, dataColumnClassName, tableSizeClass)}>
                                        <CheckboxInput
                                            checked={selectedRows.some(r => r.id === row.id)}
                                            onChange={() => handleSelectRow(row)}
                                        />
                                    </td>
                                )}
                                {columns.map((col, cIdx) => (
                                    <td
                                        key={cIdx}
                                        className={cn("px-4 py-2 border-b", variantClasses.border, dataColumnClassName, tableSizeClass)}
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
