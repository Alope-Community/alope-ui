import React, { isValidElement, cloneElement } from "react";
import { BottomNavbarAction, type BottomNavbarActionProps } from "./BottomNavbarAction";
import type { Variant } from './variants'
import { cn } from "clsx-for-tailwind";

interface BottomNavbarProps {
  children: React.ReactNode;
  className?: string;
  value: string;
  variant?: Variant;
  onChangeValue: (value: string) => void;
}

export const BottomNavbar: React.FC<BottomNavbarProps> = ({
  children,
  className,
  value,
  variant = 'primary',
  onChangeValue
}) => {
  return (
    <div className={cn(`fixed bottom-0 left-0 z-50 w-full bg-white border-t border-secondary-300 dark:bg-secondary-800-dark dark:border-secondary-600-dark`, className)}>
      <div className="flex items-center justify-center h-full max-w-lg md:max-w-md mx-auto font-medium">
        {React.Children.map(children, (child) => {
          if (isValidElement(child)) {

            if (child.type === BottomNavbarAction) {
              return cloneElement(child as React.ReactElement<BottomNavbarActionProps>, {
                selectedValue: value,
                onChangeValue: onChangeValue,
                variant: variant,
              });
            } else {

              if (process.env.NODE_ENV !== "production") {
                console.warn(
                  `[BottomNavbar] Invalid child component: Only <BottomNavbarAction> is allowed.\nReceived:`,
                  child.type
                );
              }
              return null;
            }
          }

          if (process.env.NODE_ENV !== "production") {
            console.warn(`[BottomNavbar] Invalid child: Only <BottomNavbarAction> components are allowed.`);
          }
          return null;
        })}
      </div>
    </div>
  );
};
