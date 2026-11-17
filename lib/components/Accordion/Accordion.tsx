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
} & Omit<React.HTMLAttributes<HTMLDivElement>, "className">;

export const Accordion: React.FC<AccordionProps> = ({
  data,
  openIndex,
  single = true,
  onToggleItem,
  icon,
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
      ? isActive
        ? []
        : [index]
      : isActive
        ? activeIndexes.filter((i) => i !== index)
        : [...activeIndexes, index];

    isControlled
      ? onToggleItem?.(single ? (updated[0] ?? null) : updated)
      : setInternalOpen(updated);
  };

  return (
    <div className="space-y-2" {...props}>
      {data.map((item, i) => {
        const isOpen = activeIndexes.includes(i);
        return (
          <div
            key={i}
            className="border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-lg overflow-hidden transition-colors"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center p-4 text-left text-gray-900 dark:text-neutral-100 hover:bg-gray-50 dark:hover:bg-neutral-800/70 transition-colors cursor-pointer"
            >
              <span className="font-semibold">{item.label}</span>
              {typeof icon === "function"
                ? icon(isOpen)
                : (icon ?? (
                  <svg
                    className={cn(
                      "w-5 h-5 shrink-0 text-gray-500 dark:text-neutral-400 transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
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
                ))}
            </button>
            <div
              className={cn(
                "overflow-hidden bg-gray-50/80 dark:bg-neutral-800/50 px-4 text-sm text-gray-600 dark:text-neutral-300 transition-all duration-200",
                isOpen
                  ? "max-h-96 py-4 border-t border-gray-200 dark:border-neutral-800"
                  : "max-h-0"
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