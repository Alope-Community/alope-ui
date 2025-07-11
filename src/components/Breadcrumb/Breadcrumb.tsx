import { cn } from 'clsx-for-tailwind';
import React from 'react';
import { Link } from 'react-router-dom';

type BreadcrumbItem = {
  label: string
  path?: string
};

type BreadcrumbProps = {
  data: BreadcrumbItem[]
  labelClassName?: string
  linkClassName?: string
  currentLinkClassName?: string
  separatorClassName?: string
  separator?: React.ReactNode
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
      <ol className="flex space-x-2 text-gray-600">
        {data.map((item, index) => {
          const isLast = (item.path === null || index === data.length - 1)
          return (
            <li key={index} className="flex items-center">
              {!isLast && item.path ? (
                <Link to={item.path} className={cn("hover:underline text-primary", labelClassName, linkClassName)}>
                  {item.label}
                </Link>
              ) : (
                <span className={cn("font-semibold text-gray-800", labelClassName, currentLinkClassName)}>{item.label}</span>
              )}
              {!isLast && <span className={cn("mx-2 font-semibold", separatorClassName)}>{separator}</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
