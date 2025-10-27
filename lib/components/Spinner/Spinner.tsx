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

export type SpinnerProps = {
  size?: keyof typeof SpinnerSize;
  color?: keyof typeof SpinnerColor;
  className?: string;
  duration?: number;
  thickness?: number | undefined;
};

export const Spinner: React.FC<SpinnerProps> = ({
  color = "primary",
  size = "md",
  className: customClassName,
  duration = 1000,
  thickness,
}) => {
  const spinnerColor = SpinnerColor[color];
  const spinnerSize = SpinnerSize[size];
  const animationDuration = `${duration}ms`;
  const borderWidth = thickness && `${thickness}px`;

  return (
    <span
      className={cn(
        spinnerSize,
        spinnerColor,
        `flex rounded-full animate-spin`,
        customClassName,
        "border-t-transparent dark:border-t-transparent"
      )}
      style={{ animationDuration, borderWidth }}
    ></span>
  );
};
