import { cn } from 'clsx-for-tailwind'
import React from 'react'

interface OffcanvasProps {
    isOpen: boolean
    onClose: () => void
    title: string
    children: React.ReactNode
    position?: 'left' | 'right'
    titleClassName?: string
    closeButtonClassName?: string
    className?: string
}

export const Offcanvas: React.FC<OffcanvasProps> = ({
    isOpen,
    onClose,
    title,
    children,
    titleClassName,
    closeButtonClassName,
    className,
    position = 'right'
}) => {
    const offcanvasClasses = cn(`fixed top-0 h-full w-90 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : (position === 'right' ? 'translate-x-full' : '-translate-x-full')} ${position === 'right' ? 'right-0' : 'left-0'}`, className)

    return (
        <>
            {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose}></div>}
            <div className={offcanvasClasses}>
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h5 className={cn("text-lg font-semibold", titleClassName)}>{title}</h5>
                    <button type="button" className={cn("text-gray-500 hover:text-gray-800 text-2xl", closeButtonClassName)} onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="p-4 overflow-y-auto">
                    {children}
                </div>
            </div>
        </>
    )
}
