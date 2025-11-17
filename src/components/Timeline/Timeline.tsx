import { cn } from "clsx-for-tailwind";
import React, { Children, cloneElement, isValidElement, type ReactNode } from "react";

const DotColors = {
    success: 'bg-success-500 dark:bg-success-900-dark outline-success-100 dark:outline-success-500-dark',
    info: 'bg-info-500 dark:bg-info-900-dark outline-info-100 dark:outline-info-500-dark',
    error: 'bg-error-500 dark:bg-error-900-dark outline-error-100 dark:outline-error-500-dark',
    warning: 'bg-warning-500 dark:bg-warning-900-dark outline-warning-100 dark:outline-warning-500-dark',
    primary: 'bg-primary-500 dark:bg-primary-900-dark outline-primary-100 dark:outline-primary-500-dark',
    default: 'bg-secondary-500 dark:bg-secondary-300-dark outline-white dark:outline-secondary-600-dark',
}

const LineColors = {
    success: 'border-success-500 dark:border-success-900-dark md:before:border-success-500 md:before:dark:border-success-900-dark',
    info: 'border-info-500 dark:border-info-900-dark md:before:border-info-500 md:before:dark:border-info-900-dark',
    error: 'border-error-500 dark:border-error-900-dark md:before:border-error-500 md:before:dark:border-error-900-dark',
    warning: 'border-warning-500 dark:border-warning-900-dark md:before:border-warning-500 md:before:dark:border-warning-900-dark',
    primary: 'border-primary-500 dark:border-primary-900-dark md:before:border-primary-500 md:before:dark:border-primary-900-dark',
    default: 'border-secondary-300 dark:border-secondary-600-dark md:before:border-secondary-300 md:before:dark:border-secondary-600-dark',
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
                    ? <div className={cn("flex items-center justify-center absolute w-10 h-10 rounded-full mt-1.5 outline ",
                        dotColorClassName,
                        {
                            "-start-[20px]": position === 'left' || (position === 'split' && "md:hidden"),
                            "-end-[21px]": position === 'right',
                            "-start-[21px] md:start-1/2 md:-ms-[19px]": position === 'split'
                        }
                    )}>
                        {icon}
                    </div>
                    : <div className={cn("absolute w-3 h-3 rounded-full mt-1.5 outline outline-white dark:outline-secondary-300-dark",
                        dotColorClassName,
                        {
                            "-start-[7px]": position === 'left' || (position === 'split' && "md:hidden"),
                            "-end-[7px]": position === 'right',
                            "-start-[7.1px] md:start-1/2 md:-ms-[4.7px]": position === 'split'
                        })}></div>
            }
            <time className="mb-1 text-sm font-normal leading-none text-secondary-400 dark:text-secondary-400-dark">
                {time}
            </time>
            <h3 className="text-lg font-semibold dark:text-white">
                {title}
            </h3>
            <p className="mb-4 text-base font-normal text-secondary-500 dark:text-secondary-500-dark">
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
