import React from 'react';
import { cn } from 'clsx-for-tailwind';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  indeterminate?: boolean;
  checkboxClassName?: string;
  labelClassName?: string;
  description?: string;
  descriptionClassName?: string;
}

export const CheckboxInput = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      description,
      className = '',
      indeterminate = false,
      descriptionClassName,
      checkboxClassName,
      labelClassName,
      disabled,
      readOnly,
      children,
      checked,
      defaultChecked,
      onChange,
      ...props
    },
    ref
  ) => {
    const internalRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => internalRef.current as HTMLInputElement);

    const [internalChecked, setInternalChecked] = React.useState(defaultChecked ?? false);

    const isControlled = typeof checked !== 'undefined';
    const isChecked = isControlled ? checked : internalChecked;

    React.useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalChecked(e.target.checked);
      }
      onChange?.(e); // Forward the event
    };

    return (
      <label
        className={cn(
          'inline-flex items-center gap-3 cursor-pointer select-none',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
      >
        <span className="relative inline-flex items-center justify-center w-5 h-5">
          <input
            {...props}
            ref={internalRef}
            type="checkbox"
            readOnly={readOnly}
            disabled={disabled}
            onChange={handleChange}
            checked={isChecked}
            aria-checked={indeterminate ? 'mixed' : isChecked ? 'true' : 'false'}
            className="absolute w-full h-full opacity-0 cursor-pointer peer"
          />
          <span
            className={cn(
              'w-5 h-5 rounded border border-gray-300 flex items-center justify-center transition-colors duration-200',
              {
                'bg-primary border-primary': isChecked || indeterminate,
              },
              checkboxClassName
            )}
          >
            {indeterminate ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 10a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" />
              </svg>
            ) : isChecked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 text-white fill-white"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-7.778 7.778a1 1 0 01-1.414 0L3.293 10.05a1 1 0 111.414-1.414l3.536 3.535 7.071-7.071a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : null}
          </span>
        </span>

        <div className="flex flex-col gap-1">
          {children}
          {label && <span className={cn('font-medium text-sm', labelClassName)}>{label}</span>}
          {description && (
            <span className={cn('text-secondary-700 text-sm', descriptionClassName)}>{description}</span>
          )}
        </div>
      </label>
    )
  }
)