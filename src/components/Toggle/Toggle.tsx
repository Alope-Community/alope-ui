import { cn } from "clsx-for-tailwind";
import type { InputHTMLAttributes } from "react";

export const ToggleVariant = {
  primary: 'peer-checked:bg-primary',
  error: 'peer-checked:bg-error',
  warning: 'peer-checked:bg-warning',
  success: 'peer-checked:bg-success',
  info: 'peer-checked:bg-info',
  secondary: 'peer-checked:bg-secondary'
};

export const ToggleThumbShape = {
  stadium: 'rounded-full after:rounded-full',
  rounded: 'rounded-md after:rounded-sm',
};

export const ToggleSize = {
  sm: 'w-9 h-5 after:h-4 after:w-4 after:start-[2px] after:top-[2px] peer-checked:after:translate-x-[16px]',
  md: 'w-11 h-6 after:h-5 after:w-5 after:start-[2px] after:top-[2px] peer-checked:after:translate-x-[20px]',
  lg: 'w-14 h-7 after:h-6 after:w-6 after:start-[2px] after:top-[2px] peer-checked:after:translate-x-[28px]'
};

export type ToggleProps = {
  customSize?: keyof typeof ToggleSize;
  variant?: keyof typeof ToggleVariant;
  thumbShape?: keyof typeof ToggleThumbShape;
  label?: string;
  wrapperClassName?: string;
  labelClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Toggle: React.FC<ToggleProps> = ({
  variant = 'primary',
  customSize: size = 'md',
  thumbShape = 'stadium',
  label,
  wrapperClassName,
  labelClassName,
  ...props
}) => {
  const divClasses = [
    'relative',
    'bg-gray-500/30',
    'peer-checked:after:translate-x-full',
    'rtl:peer-checked:after:-translate-x-full',
    'peer-checked:after:border-white',
    'after:absolute',
    'after:bg-white',
    'after:transition-colors',
    'after:transition-transform',
    'duration-500',
  ].filter(Boolean).join(' ');

  const wrapperClasses = [
    "inline-flex items-center cursor-pointer"
  ].filter(Boolean).join(' ');

  return (
    <label className={cn(wrapperClasses, wrapperClassName, props.disabled && 'cursor-not-allowed')}>
      <input type="checkbox" value="" className="sr-only peer" {...props} />
      <div className={cn(divClasses, ToggleSize[size], ToggleVariant[variant], ToggleThumbShape[thumbShape], props.disabled && 'opacity-50 cursor-not-allowed')}></div>
      {label && <span className={cn("ms-3 text-sm font-medium", labelClassName)}>{label}</span>}
    </label>
  );
};
