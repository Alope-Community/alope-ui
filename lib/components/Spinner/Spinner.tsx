import { cn } from "clsx-for-tailwind";
import React from "react";

const SpinnerSize = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-3",
  lg: "h-8 w-8 border-4",
};

const SpinnerColor = {
  primary: "border-primary dark:border-primary-dark",
  error: "border-error dark:border-error-dark",
  warning: "border-warning dark:border-warning-dark",
  success: "border-success dark:border-success-dark",
  info: "border-info dark:border-info-dark",
  secondary: "border-secondary dark:border-secondary-dark",
};

const SpinnerTextSize = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

const LabelPosition = {
  right: "flex-row",
  left: "flex-row-reverse",
  bottom: "flex-col",
  top: "flex-col-reverse",
};

export type SpinnerProps = {
  size?: keyof typeof SpinnerSize;
  color?: keyof typeof SpinnerColor;
  className?: string;
  labelClassName?: string;
  duration?: number;
  thickness?: number | undefined;
  label?: React.ReactNode;
  labelPosition?: keyof typeof LabelPosition;
};

export const Spinner: React.FC<SpinnerProps> = ({
  color = "primary",
  size = "md",
  className: customClassName,
  labelClassName,
  duration = 1000,
  thickness,
  label,
  labelPosition = "right",
}) => {
  const spinnerColor = SpinnerColor[color];
  const spinnerSize = SpinnerSize[size];
  const spinnerTextSize = SpinnerTextSize[size];
  const positionClass = LabelPosition[labelPosition];
  const animationDuration = `${duration}ms`;
  const borderWidth = thickness ? `${thickness}px` : undefined;

  const spinnerElement = (
    <span
      role="status"
      aria-label={typeof label === "string" ? label : "Loading"}
      className={cn(
        spinnerSize,
        spinnerColor,
        "inline-block shrink-0 rounded-full animate-spin",
        customClassName,
        "border-t-transparent dark:border-t-transparent"
      )}
      style={{ animationDuration, borderWidth }}
    />
  );

  if (!label) {
    return spinnerElement;
  }

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center gap-2",
        positionClass
      )}
    >
      {spinnerElement}
      <span
        className={cn(
          spinnerTextSize,
          "text-gray-700 dark:text-gray-200 font-medium",
          labelClassName
        )}
      >
        {label}
      </span>
    </div>
  );
};