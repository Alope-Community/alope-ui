import { cn } from 'clsx-for-tailwind';
import React from 'react';
import { Link } from 'react-router-dom';

type BreadcrumbItem = {
  label: string;
  path?: string;
  icon?: React.ReactNode; // prefix icon
};

type BreadcrumbProps = {
  data: BreadcrumbItem[];
  labelClassName?: string;
  linkClassName?: string;
  currentLinkClassName?: string;
  separatorClassName?: string;
  separator?: React.ReactNode;
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  data,
  labelClassName,
  currentLinkClassName,
  linkClassName,
  separatorClassName,
  separator = '>',
}) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex flex-wrap gap-2 text-gray-600">
        {data.map((item, index) => {
          const isLast = item.path === null || index === data.length - 1;
          return (
            <li key={index} className="flex items-center">
              {!isLast && item.path ? (
                <Link to={item.path} className={cn("hover:underline text-primary dark:text-primary-dark-30 flex items-center text-sm", labelClassName, linkClassName)}>
                  {item.icon && <span className="mr-1">{item.icon}</span>}
                  {item.label}
                </Link>
              ) : (
                <span className={cn("font-semibold dark:text-white flex items-center text-sm", labelClassName, currentLinkClassName)}>
                  {item.icon && <span className="mr-1">{item.icon}</span>}
                  {item.label}
                </span>
              )}
              {!isLast && <span className={cn("mx-2 font-semibold dark:text-white", separatorClassName)}>{separator}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
