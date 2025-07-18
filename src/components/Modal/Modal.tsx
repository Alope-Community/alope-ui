import React, { useEffect } from 'react';
import { cn } from 'clsx-for-tailwind';

type ModalProps = {
    isOpen: boolean
    overlayClose?: boolean
    onClose: () => void
    title?: string
    children: React.ReactNode
    showCloseButton?: boolean
    size?: 'sm' | 'md' | 'lg' | 'xl'
    className?: string
};

const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
}

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    overlayClose = true,
    onClose,
    title,
    children,
    showCloseButton = true,
    size = 'md',
    className,
}) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
            <div
                className={cn(
                    'bg-white rounded-lg shadow-xl w-full max-h-[90vh] overflow-y-auto transition-all',
                    sizeClasses[size],
                    className
                )}
                onClick={(e) => e.stopPropagation()}
            >
                {title && (
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                        {showCloseButton && (
                            <button
                                onClick={onClose}
                                className="text-gray-500 hover:text-gray-800 transition"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                )}
                <div className="p-4">{children}</div>
            </div>
            {/* Overlay click to close */}
            {
                overlayClose && <div className="absolute inset-0" onClick={onClose} />
            }
        </div>
    )
}
