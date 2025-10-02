import { cn } from "clsx-for-tailwind";
import type { InputHTMLAttributes } from "react";

const ToggleVariant = {
  primary: 'peer-checked:bg-primary dark:peer-checked:bg-primary-dark',
  error: 'peer-checked:bg-error dark:peer-checked:bg-error-dark',
  warning: 'peer-checked:bg-warning dark:peer-checked:bg-warning-dark',
  success: 'peer-checked:bg-success dark:peer-checked:bg-success-dark',
  info: 'peer-checked:bg-info dark:peer-checked:bg-info-dark',
  secondary: 'peer-checked:bg-secondary dark:peer-checked:bg-secondary-dark'
};

const ToggleThumbShape = {
  stadium: 'rounded-full after:rounded-full',
  rounded: 'rounded-md after:rounded-sm',
};

const ToggleSize = {
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
    'bg-secondary-700 dark:bg-secondary-dark-700',
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
      {label && <span className={cn("ms-3 text-sm font-medium dark:text-white", labelClassName)}>{label}</span>}
    </label>
  );
};
