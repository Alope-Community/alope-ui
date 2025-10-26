import { cn } from "clsx-for-tailwind";
import React, { Children, cloneElement, isValidElement, type ReactNode } from "react";

const DotColors = {
    success: 'bg-success dark:bg-success-dark',
    info: 'bg-info dark:bg-info-dark',
    error: 'bg-error dark:bg-error-dark',
    warning: 'bg-warning dark:bg-warning-dark',
    primary: 'bg-primary dark:bg-primary-dark',
    default: 'bg-secondary-700 dark:bg-secondary-dark',
}

const LineColors = {
    success: 'border-success dark:border-success-dark md:before:border-success md:before:dark:border-success-dark',
    info: 'border-info dark:border-info-dark md:before:border-info md:before:dark:border-info-dark',
    error: 'border-error dark:border-error-dark md:before:border-error md:before:dark:border-error-dark',
    warning: 'border-warning dark:border-warning-dark md:before:border-warning md:before:dark:border-warning-dark',
    primary: 'border-primary dark:border-primary-dark md:before:border-primary md:before:dark:border-primary-dark',
    default: 'border-secondary-700 dark:border-secondary-dark md:before:border-secondary md:before:dark:border-secondary-dark',
}

export type TimelineProps = {
    position?: 'split' | 'right' | 'left'
    lineColor?: keyof typeof LineColors
    children: ReactNode;
};

export type TimelineItemProps = {
    title: string;
    time: string;
    children: ReactNode;
    dotColor?: keyof typeof DotColors
    icon?: React.ReactNode
};

const TimelineItem: React.FC<TimelineItemProps & { position?: 'split' | 'right' | 'left' }> = ({
    title,
    time,
    children,
    dotColor = 'default',
    icon,
    position, // prop from parent
}) => {
    const dotColorClassName = DotColors[dotColor];

    return (
        <li className={cn("mb-5", {
            "ms-8": position === 'left',
            "me-8 text-end": position === 'right',
            "ms-4 md:w-1/2 ps-4 md:odd:pe-8 md:odd:ms-0 md:odd:text-end md:even:ps-8 md:even:ms-auto": position === 'split'
        })}>
            {
                icon
                    ? <div className={cn("flex items-center justify-center absolute w-10 h-10 rounded-full mt-1.5 outline outline-white dark:outline-secondary",
                        dotColorClassName,
                        {
                            "-start-[20px]": position === 'left' || (position === 'split' && "md:hidden"),
                            "-end-[21px]": position === 'right',
                            "-start-[21px] md:start-1/2 md:-ms-[19px]": position === 'split'
                        }
                    )}>
                        {icon}
                    </div>
                    : <div className={cn("absolute w-3 h-3 rounded-full mt-1.5 outline outline-white dark:outline-secondary",
                        dotColorClassName,
                        {
                            "-start-[7px]": position === 'left' || (position === 'split' && "md:hidden"),
                            "-end-[7px]": position === 'right',
                            "-start-[7.1px] md:start-1/2 md:-ms-[4.7px]": position === 'split'
                        })}></div>
            }
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-secondary-dark">
                {time}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}
            </h3>
            <p className="mb-4 text-base font-normal text-secondary-foreground dark:text-secondary-foreground-dark">
                {children}
            </p>
        </li>
    );
};

export const Timeline: React.FC<TimelineProps> & { Item: React.FC<TimelineItemProps> } = ({
    position = 'left',
    lineColor = 'default',
    children,
}) => {
    const childrenWithProps = Children.map(children, (child) => {
        if (isValidElement(child)) {
            return cloneElement(child as React.ReactElement<TimelineItemProps & { position: 'split' | 'right' | 'left' }>, { position });
        }
        return child;
    });

    const lineColorClassName = LineColors[lineColor];

    return (
        <ol className={cn("relative",
            {
                "border-s-2": position === 'left',
                "border-e-2": position === 'right',
                "border-s-2 md:border-s-0 md:before:content-[''] md:before:absolute md:before:top-0 md:before:left-1/2 md:before:h-full md:before:border-s-2 md:before:border-secondary md:before:dark:border-secondary-dark": position === 'split'
            },
            lineColorClassName
        )}>
            {childrenWithProps}
        </ol>
    );
};

Timeline.Item = TimelineItem;
