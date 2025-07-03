import React, { useState } from "react";
import { cn } from 'clsx-for-tailwind'

export type AccordionProps = {
    data: {
        label: string
        description: string
    }[]
    labelClassName?: string
    labelContainerClassName?: string
    icon?: React.ReactNode | ((isActive: boolean) => React.ReactNode)
    descriptionClassName?: string
    openIndex?: number | null
    onToggleItem?: (index: number | null) => void
} & React.HTMLAttributes<HTMLDivElement>;

export const Accordion: React.FC<AccordionProps> = ({
    data = [],
    labelClassName,
    labelContainerClassName,
    descriptionClassName,
    icon,
    openIndex,
    onToggleItem,
    ...props
}) => {
    const [opennedIndex, setOpennedIndex] = useState<number | null>(openIndex ?? null);

    const isControlled = openIndex !== undefined && onToggleItem !== undefined;
    const currentIndex = isControlled ? openIndex : opennedIndex;

    const toggle = (index: number) => {
        const newIndex = currentIndex === index ? null : index;
        isControlled ? onToggleItem?.(newIndex) : setOpennedIndex(newIndex);
    };

    return (
        <div {...props}>
            {data.map((item, index) => (
                <div
                    key={index}
                    className={cn("border border-gray-300 rounded-md overflow-hidden", labelContainerClassName)}
                >
                    <button
                        onClick={() => toggle(index)}
                        className="w-full flex justify-between items-center p-4 text-left"
                    >
                        <p className={cn("font-semibold", labelClassName)}>
                            {item.label}
                        </p>
                        {typeof icon === 'function' ? icon(currentIndex === index) : icon ?? (
                            <svg
                                className={cn(
                                    "w-5 h-5 transition-transform duration-300",
                                    currentIndex === index ? "rotate-180" : "rotate-0"
                                )}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        )}
                    </button>
                    <div
                        className={cn(
                            "bg-gray-50 px-4 transition-all overflow-hidden",
                            currentIndex === index
                                ? "max-h-40 py-6 duration-200"
                                : "max-h-0 duration-[250ms]",
                            descriptionClassName
                        )}
                    >
                        {item.description}
                    </div>
                </div>
            ))}
        </div>
    );
};
