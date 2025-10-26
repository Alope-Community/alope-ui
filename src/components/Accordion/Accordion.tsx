import React, { useState } from "react";
import { cn } from "clsx-for-tailwind";

type AccordionItem = {
  label: string;
  description: string;
};

export type AccordionProps = {
  data: AccordionItem[];
  openIndex?: number | number[] | null;
  single?: boolean;
  onToggleItem?: (index: number | number[] | null) => void;
  icon?: React.ReactNode | ((isOpen: boolean) => React.ReactNode);
  className?: string;
  labelClassName?: string;
  labelContainerClassName?: string;
  descriptionClassName?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Accordion: React.FC<AccordionProps> = ({
  data,
  openIndex,
  single = true,
  onToggleItem,
  icon,
  className,
  labelClassName,
  labelContainerClassName,
  descriptionClassName,
  ...props
}) => {
  const isControlled = openIndex !== undefined && onToggleItem !== undefined;
  const [internalOpen, setInternalOpen] = useState<number[]>([]);

  const activeIndexes = isControlled
    ? Array.isArray(openIndex)
      ? openIndex
      : openIndex != null
        ? [openIndex]
        : []
    : internalOpen;

  const toggle = (index: number) => {
    const isActive = activeIndexes.includes(index);
    const updated = single
      ? isActive ? [] : [index]
      : isActive
        ? activeIndexes.filter(i => i !== index)
        : [...activeIndexes, index];

    isControlled
      ? onToggleItem?.(single ? updated[0] ?? null : updated)
      : setInternalOpen(updated);
  };

  return (
    <div className={cn("space-y-2", className)} {...props}>
      {data.map((item, i) => {
        const isOpen = activeIndexes.includes(i);
        return (
          <div
            key={i}
            className={cn("border border-gray-300 dark:border-white/20 rounded-md overflow-hidden", labelContainerClassName)}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center p-4 text-left dark:text-white"
            >
              <span className={cn("font-semibold", labelClassName)}>{item.label}</span>
              {typeof icon === "function"
                ? icon(isOpen)
                : icon ?? (
                  <svg
                    className={cn("w-5 h-5 transition-transform", isOpen && "rotate-180")}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M19 9l-7 7-7-7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
            </button>
            <div
              className={cn(
                "overflow-hidden bg-gray-50 px-4 transition-all dark:bg-gray-700 dark:text-white",
                isOpen ? "max-h-40 py-4" : "max-h-0",
                descriptionClassName
              )}
            >
              {item.description}
            </div>
          </div>
        );
      })}
    </div>
  );
};
