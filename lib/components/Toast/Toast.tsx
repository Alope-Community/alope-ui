import { cn } from "clsx-for-tailwind";
import React, { useEffect, useState } from "react";

export interface ToastProps {
  title?: string;
  message: string;
  type: keyof typeof ToastTypes;
  position?: keyof typeof ToastPositions;
  variant?: keyof typeof ToastVariants;
  icon?: React.ReactNode;
  withClose?: boolean;
  withLoading?: boolean;
  onClose?: () => void;
}

export const ToastVariants = {
  outline: "border border-current",
  solid: "",
};

export const ToastPositions = {
  "top-left": "top-5 left-5",
  "bottom-left": "bottom-5 left-5",
  "top-right": "top-5 right-5",
  "bottom-right": "bottom-5 right-5",
};

export const ToastTypes = {
  success: "bg-success-30 border-success-700 text-success-700",
  info: "bg-info-30 border-info-700 text-info-700",
  warning: "bg-warning-30 border-warning-700 text-warning-700",
  error: "bg-error-30 border-error-700 text-error-700",
};

const enterAnimationByPosition: Record<keyof typeof ToastPositions, string> = {
  "top-right": "translate-x-0",
  "bottom-right": "translate-x-0",
  "top-left": "-translate-x-0",
  "bottom-left": "-translate-x-0",
};

const exitAnimationByPosition: Record<keyof typeof ToastPositions, string> = {
  "top-right": "translate-x-40",
  "bottom-right": "translate-x-40",
  "top-left": "-translate-x-40",
  "bottom-left": "-translate-x-40",
};

const initialAnimationByPosition: Record<keyof typeof ToastPositions, string> =
{
  "top-right": "translate-x-10",
  "bottom-right": "translate-x-10",
  "top-left": "-translate-x-10",
  "bottom-left": "-translate-x-10",
};

const Toast: React.FC<ToastProps> = ({
  title,
  message,
  type,
  icon,
  position = "bottom-right",
  variant = "solid",
  withClose = true,
  withLoading = false,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const enterTimer = setTimeout(() => setIsVisible(true), 50);

    timeoutRef.current = setTimeout(() => {
      handleClose();
    }, 3500);

    return () => {
      clearTimeout(enterTimer);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleClose = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      if (onClose) onClose();
    }, 500);
  };

  const handleOnMouseEnter = () => {
    setIsPaused(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleOnMouseLeave = () => {
    setIsPaused(false);
    timeoutRef.current = setTimeout(() => {
      handleClose();
    }, 3500);
  };

  return (
    <div
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      className={cn(
        "relative overflow-hidden flex max-w-sm items-start gap-3 p-4 mb-3 rounded-lg shadow-lg transition-all duration-500 transform",
        ToastTypes[type],
        ToastVariants[variant],
        isFadingOut
          ? `opacity-0 ${exitAnimationByPosition[position]}`
          : isVisible
            ? `opacity-100 ${enterAnimationByPosition[position]}`
            : `opacity-0 ${initialAnimationByPosition[position]}`
      )}
    >
      {icon && <div className="text-2xl mt-1">{icon}</div>}

      <div className="flex-1">
        {title && <p className="font-semibold text-base mb-1">{title}</p>}
        <p className="text-sm leading-snug">{message}</p>
      </div>

      {withClose && (
        <button
          onClick={handleClose}
          className="ml-2 text-lg leading-none hover:text-red-500 focus:outline-none cursor-pointer"
          aria-label="Close"
        >
          ×
        </button>
      )}

      {withLoading && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-current/20">
          <div
            style={{
              width: isVisible && !isPaused ? "0%" : "100%",
              transition: isPaused ? "none" : "width 3500ms linear",
            }}
            className="h-full bg-current"
          />
        </div>
      )}
    </div>
  );
};

export default Toast;