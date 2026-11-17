import React, { useEffect, useId, useState } from "react";
import { cn } from "clsx-for-tailwind";

export type ModalProps = {
    isOpen: boolean;
    overlayClose?: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    showCloseButton?: boolean;
    size?: keyof typeof sizeClasses;
};

const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-6xl",
} as const;

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    overlayClose = true,
    onClose,
    title,
    children,
    showCloseButton = true,
    size = "md",
}) => {
    const [isMounted, setIsMounted] = useState(isOpen);
    const [isVisible, setIsVisible] = useState(false);
    const titleId = useId();

    useEffect(() => {
        let enterTimer: ReturnType<typeof setTimeout>;
        let exitTimer: ReturnType<typeof setTimeout>;

        if (isOpen) {
            setIsMounted(true);
            enterTimer = setTimeout(() => setIsVisible(true), 15);
        } else {
            setIsVisible(false);
            exitTimer = setTimeout(() => setIsMounted(false), 200);
        }

        return () => {
            clearTimeout(enterTimer);
            clearTimeout(exitTimer);
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", handleEsc);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isMounted) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? titleId : undefined}
        >
            {/* Backdrop / Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-200",
                    isVisible ? "opacity-100" : "opacity-0"
                )}
                onClick={overlayClose ? onClose : undefined}
            />

            {/* Modal Panel */}
            <div
                className={cn(
                    "relative z-10 flex flex-col w-full max-h-[90vh] rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl transition-all duration-200 ease-out",
                    sizeClasses[size],
                    isVisible
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 translate-y-2"
                )}
                onClick={(e) => e.stopPropagation()}
            >
                {(title || showCloseButton) && (
                    <div className="flex items-center justify-between gap-4 shrink-0 px-5 py-4 border-b border-gray-200 dark:border-neutral-800">
                        {title && (
                            <h2
                                id={titleId}
                                className="text-lg font-semibold text-gray-900 dark:text-neutral-100 leading-snug"
                            >
                                {title}
                            </h2>
                        )}
                        {showCloseButton && (
                            <button
                                type="button"
                                onClick={onClose}
                                className="ml-auto -mr-1.5 p-1.5 rounded-lg text-gray-500 hover:text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                                aria-label="Close modal"
                            >
                                <svg
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M6 18L18 6M6 6l12 12"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        )}
                    </div>
                )}

                <div className="p-5 overflow-y-auto text-gray-700 dark:text-neutral-300">
                    {children}
                </div>
            </div>
        </div>
    );
};