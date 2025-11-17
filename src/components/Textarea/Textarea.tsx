import React, { type InputHTMLAttributes, useRef, useEffect } from 'react'
import { cn } from 'clsx-for-tailwind'

export type TextareaType = {
    label?: string
    error?: string
    autoResize?: boolean
    customClassName?: string
} & InputHTMLAttributes<HTMLTextAreaElement>

export const Textarea: React.FC<TextareaType> = ({
    label,
    id,
    name,
    error,
    autoResize = false,
    customClassName,
    ...props
}) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)

    const handleResize = () => {
        const el = textareaRef.current
        if (el) {
            el.style.height = 'auto' // Reset height
            el.style.height = `${el.scrollHeight}px` // Set height to content
        }
    }

    useEffect(() => {
        if (autoResize) handleResize()
    }, [])

    return (
        <div>
            {label && (
                <label
                    htmlFor={id || name}
                    className="inline-block text-sm font-medium mb-1 dark:text-white"
                >
                    {label}
                </label>
            )}

            <textarea
                id={id || name}
                name={name}
                rows={autoResize ? 1 : 5}
                ref={textareaRef}
                onInput={handleResize}
                className={cn(
                    `overflow-hidden w-full block px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-secondary-500 min-h-[58px] max-h-[10rem]`,
                    'dark:border-secondary-500-dark dark:text-white placeholder:text-secondary-400 dark:placeholder:text-secondary-600-dark',
                    autoResize ? 'resize-none' : 'resize',
                    error && 'border-error-500 dark:border-error-500-dark',
                    props.disabled && 'cursor-not-allowed',
                    customClassName
                )}
                {...props}
            ></textarea>

            {error && (
                <p className="mt-1 text-sm text-error-500 dark:text-error-500-dark">{error}</p>
            )}
        </div>
    )
}
