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
                    className="inline-block text-sm font-medium mb-1"
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
                    `overflow-hidden bg-gray-50 w-full block px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm border-secondary min-h-[58px] max-h-[10rem]`,
                    autoResize ? 'resize-none' : 'resize',
                    error && 'border-error',
                    props.disabled && 'bg-secondary/40 cursor-not-allowed',
                    customClassName
                )}
                {...props}
            ></textarea>

            {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    )
}
