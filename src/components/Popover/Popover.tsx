import React, { useState, useRef, useEffect } from "react";
import { cn } from "clsx-for-tailwind";

export type PopoverProps = {
  title?: string;
  content?: string | React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  trigger?: "click" | "hover";
  dismissible?: boolean;
  disabled?: boolean;
  offset?: string;
  arrow?: "arrow" | "no-arrow";
  className?: string;
  children: React.ReactNode;
};

export const Popover: React.FC<PopoverProps> = ({
  title,
  content,
  placement = "top",
  trigger = "click",
  dismissible = false,
  disabled = false,
  offset = 8,
  arrow = "arrow",
  className,
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [currentPosition, setCurrentPosition] =
    useState<"top" | "bottom" | "left" | "right">(placement);

  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (disabled) return;
    setOpen((prev) => !prev);
  };

  const handleMouseEnter = () => {
    if (disabled || trigger !== "hover") return;
    setOpen(true);
  };

  const handleMouseLeave = () => {
    if (disabled || trigger !== "hover") return;
    setOpen(false);
  };

  useEffect(() => {
    if (!dismissible) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        !popoverRef.current?.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dismissible]);

  useEffect(() => {
    if (!open) return;

    const adjustPosition = () => {
      const pop = popoverRef.current;
      const trigger = triggerRef.current;
      if (!pop || !trigger) return;

      const t = trigger.getBoundingClientRect();
      const p = pop.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const off = typeof offset === "string" ? parseInt(offset) : offset;

      const fallbackOrder: Record<
        string,
        ("top" | "right" | "bottom" | "left")[]
      > = {
        top: ["top", "right", "bottom", "left"],
        right: ["right", "bottom", "left", "top"],
        bottom: ["bottom", "left", "top", "right"],
        left: ["left", "bottom", "right", "top"],
      };

      const isFit = {
        top: t.top - p.height - off >= 0,
        bottom: t.bottom + p.height + off <= vh,
        left: t.left - p.width - off >= 0 && t.top >= 0,
        right: t.right + p.width + off <= vw && t.top >= 0,
      };

      let next = fallbackOrder[placement].find((dir) => isFit[dir]) ?? "bottom";

      const bottomOverflow = t.top + p.height / 2 > vh;

      if (placement === "right" && bottomOverflow) {
        next = "top";
      } else if (placement === "left" && bottomOverflow) {
        next = "top";
      } else if (placement === "bottom" && next === "left" && bottomOverflow) {
        next = "top";
      }

      setCurrentPosition(next);
    };

    adjustPosition();
    window.addEventListener("scroll", adjustPosition);
    window.addEventListener("resize", adjustPosition);

    const observer = new MutationObserver(adjustPosition);
    if (popoverRef.current)
      observer.observe(popoverRef.current, { attributes: true, childList: true });

    return () => {
      window.removeEventListener("scroll", adjustPosition);
      window.removeEventListener("resize", adjustPosition);
      observer.disconnect();
    };
  }, [open, placement, offset]);

  const popBg = "bg-white dark:bg-gray-900";
  const textColor = "text-gray-800 dark:text-gray-100";
  const secondaryText = "text-gray-600 dark:text-gray-300";
  const arrowColor = {
    top: "border-t-white dark:border-t-gray-900",
    bottom: "border-b-white dark:border-b-gray-900",
    left: "border-l-white dark:border-l-gray-900",
    right: "border-r-white dark:border-r-gray-900",
  };

  const off = typeof offset === "string" ? parseInt(offset) : offset;

  const positions = {
    top: {
      body: "bottom-full left-1/2 -translate-x-1/2 origin-bottom mb-0",
      style: { marginBottom: off },
      arrow: cn(
        "top-full left-1/2 -translate-x-1/2 border-x-transparent border-b-transparent",
        arrowColor.top
      ),
    },
    bottom: {
      body: "top-full left-1/2 -translate-x-1/2 origin-top mt-0",
      style: { marginTop: off },
      arrow: cn(
        "bottom-full left-1/2 -translate-x-1/2 border-x-transparent border-t-transparent",
        arrowColor.bottom
      ),
    },
    left: {
      body: "right-full top-1/2 -translate-y-1/2 origin-right mr-0",
      style: { marginRight: off },
      arrow: cn(
        "left-full top-1/2 -translate-y-1/2 border-y-transparent border-r-transparent",
        arrowColor.left
      ),
    },
    right: {
      body: "left-full top-1/2 -translate-y-1/2 origin-left ml-0",
      style: { marginLeft: off },
      arrow: cn(
        "right-full top-1/2 -translate-y-1/2 border-y-transparent border-l-transparent",
        arrowColor.right
      ),
    },
  }[currentPosition];

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={triggerRef}
        onClick={trigger === "click" ? handleToggle : undefined}
        className={cn(
          "cursor-pointer select-none",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        {children}
      </div>

      {open && !disabled && (
        <div
          ref={popoverRef}
          style={positions.style}
          className={cn(
            "absolute z-50 w-64 rounded-lg shadow-lg p-3 border border-gray-200 dark:border-gray-700",
            "transition-all duration-200 ease-out animate-fadeIn",
            popBg,
            textColor,
            positions.body,
            className
          )}
        >
          {arrow === "arrow" && (
            <div className={cn("absolute w-0 h-0 border-8", positions.arrow)} />
          )}

          {title && <h3 className="font-semibold mb-1">{title}</h3>}
          {content && (
            <div className={cn("leading-snug", secondaryText)}>
              {typeof content === "string" ? <p>{content}</p> : content}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
