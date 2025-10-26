import React, { isValidElement, cloneElement } from "react";
import { BottomNavbarAction, type BottomNavbarActionProps } from "./BottomNavbarAction";

interface BottomNavbarProps {
  children: React.ReactNode;
  className?: string;
  value: string;
  onChangeValue: (value: string) => void;
}

export const BottomNavbar: React.FC<BottomNavbarProps> = ({
  children,
  className,
  value,
  onChangeValue
}) => {
  return (
    <div className={`fixed bottom-0 left-0 z-50 w-full bg-white border-t border-secondary dark:bg-gray-800 dark:border-secondary-dark-700 ${className ?? ''}`}>
      <div className="flex items-center justify-center h-full max-w-lg md:max-w-md mx-auto font-medium">
        {React.Children.map(children, (child) => {
          if (isValidElement(child)) {

            if (child.type === BottomNavbarAction) {
              return cloneElement(child as React.ReactElement<BottomNavbarActionProps>, {
                selectedValue: value,
                onChangeValue: onChangeValue,
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
