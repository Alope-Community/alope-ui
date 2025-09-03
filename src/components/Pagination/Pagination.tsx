import { cn } from "clsx-for-tailwind";

type PaginationType = {
    currentPage: number;
    format?: 'none' | 'long';
    count?: number;
    pageSize?: number;
    simplified?: boolean;
    asLink?: boolean;
    getPageHref?: (page: number) => string;
    // ❗ Deprecated, prefer count + pageSize
    totalPages?: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
    prevIcon?: React.ReactNode;
    nextIcon?: React.ReactNode;
    size?: keyof typeof PaginationSizes;
};

const PaginationSizes = {
    sm: 'px-3 py-2 text-sm font-medium rounded-lg',
    md: 'px-4 py-2 text-base font-medium rounded-lg',
    lg: 'px-6 py-3 text-lg font-medium rounded-lg',
};

export const Pagination = ({
    currentPage,
    simplified = false,
    format = 'none',
    count,
    pageSize,
    asLink = false,
    getPageHref,
    totalPages: customTotalPages,
    onPageChange,
    siblingCount = 1,
    prevIcon,
    nextIcon,
    size = 'sm',
}: PaginationType) => {

    if (
        process.env.NODE_ENV !== 'production' &&
        count && pageSize && customTotalPages &&
        Math.ceil(count / pageSize) !== customTotalPages
    ) {
        console.warn(
            '[Pagination] Both "count/pageSize" and "totalPages" props are provided, but are inconsistent. "totalPages" will be ignored in favor of count/pageSize.'
        );
    }

    const totalPages = (count && pageSize && siblingCount === 1)
        ? Math.ceil(count / pageSize)
        : (customTotalPages ?? 1);

    if (totalPages <= 1) return null;

    const DOTS = '...';

    const createPageRange = (): (number | string)[] => {
        const totalPageNumbers = siblingCount * 2 + 5;

        if (totalPageNumbers >= totalPages) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

        const firstPageIndex = 1;
        const lastPageIndex = totalPages;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblingCount;
            const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
            return [...leftRange, DOTS, totalPages];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 3 + 2 * siblingCount;
            const rightRange = Array.from(
                { length: rightItemCount },
                (_, i) => totalPages - rightItemCount + 1 + i
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            const middleRange = Array.from(
                { length: rightSiblingIndex - leftSiblingIndex + 1 },
                (_, i) => leftSiblingIndex + i
            );
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }

        return Array.from({ length: totalPages }, (_, i) => i + 1);
    };

    const goToPage = (page: number) => {
        const newPage = Math.max(1, Math.min(page, totalPages));
        if (newPage !== currentPage) {
            onPageChange(newPage);
        }
    };

    const paginationRange = createPageRange();
    const sizeClass = PaginationSizes[size] || '';
    const disabledClass = "opacity-50 pointer-events-none";

    const getHref = (page: number) => getPageHref?.(page) ?? `?page=${page}`;

    const PrevButton = asLink ? (
        <a
            className={cn("px-3 py-1 rounded-lg border", sizeClass, currentPage === 1 ? disabledClass : 'hover:cursor-pointer')}
            href={currentPage > 1 ? getHref(currentPage - 1) : undefined}
            onClick={(e) => {
                if (currentPage === 1) {
                    e.preventDefault();
                    return;
                }
                e.preventDefault();
                goToPage(currentPage - 1);
            }}
            aria-disabled={currentPage === 1}
        >
            {prevIcon ?? <span>{'<'}</span>}
        </a>
    ) : (
        <button
            className={cn("px-3 py-1 rounded-lg border", sizeClass, currentPage === 1 ? disabledClass : 'hover:cursor-pointer')}
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
        >
            {prevIcon ?? <span>{'<'}</span>}
        </button>
    );

    const NextButton = asLink ? (
        <a
            className={cn("px-3 py-1 rounded-lg border", sizeClass, currentPage === totalPages ? disabledClass : 'hover:cursor-pointer')}
            href={currentPage < totalPages ? getHref(currentPage + 1) : undefined}
            onClick={(e) => {
                if (currentPage === totalPages) {
                    e.preventDefault();
                    return;
                }
                e.preventDefault();
                goToPage(currentPage + 1);
            }}
            aria-disabled={currentPage === totalPages}
        >
            {nextIcon ?? <span>{'>'}</span>}
        </a>
    ) : (
        <button
            className={cn("px-3 py-1 rounded-lg border", sizeClass, currentPage === totalPages ? disabledClass : 'hover:cursor-pointer')}
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
        >
            {nextIcon ?? <span>{'>'}</span>}
        </button>
    );

    const renderPageInfo = () => {
        if (format === 'long' && pageSize && count) {
            const start = (currentPage - 1) * pageSize + 1;
            const end = Math.min(currentPage * pageSize, count);
            return <p className="">Showing {start} - {end} of {count}</p>;
        }

        if (format === 'none') {
            return <p className="">{currentPage} of {totalPages}</p>;
        }

        return null;
    };

    if (!simplified) {
        return (
            <div className="flex items-center gap-3">
                {PrevButton}

                {paginationRange.map((page, idx) => {
                    if (page === "...") {
                        return (
                            <span key={idx} className={cn("px-3 py-1 text-gray-500", sizeClass)}>
                                ...
                            </span>
                        );
                    }

                    const isActive = page === currentPage;
                    const baseClasses = cn(
                        "px-3 py-1 rounded-lg border",
                        isActive ? "bg-primary text-white" : "hover:bg-gray-100 hover:cursor-pointer",
                        sizeClass,
                        isActive && "pointer-events-none"
                    );

                    if (asLink) {
                        return (
                            <a
                                key={idx}
                                className={baseClasses}
                                href={getHref(Number(page))}
                                onClick={(e) => {
                                    e.preventDefault();
                                    goToPage(Number(page));
                                }}
                            >
                                {page}
                            </a>
                        );
                    }

                    return (
                        <button
                            key={idx}
                            className={baseClasses}
                            onClick={() => goToPage(Number(page))}
                        >
                            {page}
                        </button>
                    );
                })}

                {NextButton}
            </div>
        );
    }

    return (
        <div className="flex items-center gap-3">
            {PrevButton}
            {renderPageInfo()}
            {NextButton}
        </div>
    );
};
