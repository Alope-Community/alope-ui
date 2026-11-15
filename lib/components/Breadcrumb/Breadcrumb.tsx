import { cn } from 'clsx-for-tailwind';
import React from 'react';
import { Link } from 'react-router-dom';

type BreadcrumbItem = {
  label: string;
  path?: string;
  icon?: React.ReactNode;
};

type BreadcrumbVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error';

type BreadcrumbProps = {
  data: BreadcrumbItem[];
  variant?: BreadcrumbVariant;
  separator?: React.ReactNode;
};

const variantStyles: Record<BreadcrumbVariant, string> = {
  primary: 'text-primary dark:text-primary-dark-30',
  secondary: 'text-secondary-foreground dark:text-secondary-foreground-dark',
  success: 'text-success-dark dark:text-success-dark-30',
  info: 'text-info-dark dark:text-info-dark-30',
  warning: 'text-warning-dark dark:text-warning-dark-30',
  error: 'text-error-dark dark:text-error-dark-30',
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  data,
  variant = 'primary',
  separator = '/',
}) => {
  return (
    <nav aria-label="breadcrumb" className='mb-5'>
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {data.map((item, index) => {
          const isLast = item.path === null || index === data.length - 1;

          return (
            <li key={index} className="flex items-center">
              {isLast ? (
                <span
                  aria-current="page"
                  className={cn(
                    'flex items-center font-medium',
                    variantStyles[variant]
                  )}
                >
                  {item.icon && <span className="mr-1.5">{item.icon}</span>}
                  {item.label}
                </span>
              ) : item.path ? (
                <Link
                  to={item.path}
                  className="flex items-center text-zinc-400 transition-colors hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300"
                >
                  {item.icon && <span className="mr-1.5">{item.icon}</span>}
                  {item.label}
                </Link>
              ) : (
                <span className="flex items-center text-zinc-400 dark:text-zinc-500">
                  {item.icon && <span className="mr-1.5">{item.icon}</span>}
                  {item.label}
                </span>
              )}

              {!isLast && (
                <span
                  aria-hidden="true"
                  className="ml-2 select-none text-zinc-300 dark:text-zinc-700"
                >
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};