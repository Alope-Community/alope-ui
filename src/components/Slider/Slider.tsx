import { cn } from "clsx-for-tailwind";
import { useState, type InputHTMLAttributes } from "react";
import { Tooltip } from "../Tooltip/Tooltip";
import { TextInput } from "../TextInput/TextInput";

const SliderColor = {
    primary:
        'bg-primary-30 dark:bg-primary-dark-30 hover:[&::-webkit-slider-thumb]:transition-all hover:[&::-webkit-slider-thumb]:duration-300 ' +
        '[&::-webkit-slider-thumb]:outline-5 hover:[&::-webkit-slider-thumb]:outline-10 [&::-webkit-slider-thumb]:outline-primary-30 ' +
        '[&::-webkit-slider-thumb]:bg-primary dark:[&::-webkit-slider-thumb]:bg-primary-dark ' +
        '[&::-webkit-slider-thumb]:outline-primary-30 dark:[&::-webkit-slider-thumb]:outline-primary-dark-30',

    error:
        'bg-error-30 dark:bg-error-dark-30 ' +
        '[&::-webkit-slider-thumb]:outline-5 [&::-webkit-slider-thumb]:outline-error-30 ' +
        '[&::-webkit-slider-thumb]:bg-error dark:[&::-webkit-slider-thumb]:bg-error-dark ' +
        'dark:[&::-webkit-slider-thumb]:outline-5 dark:[&::-webkit-slider-thumb]:outline-error-dark-30',

    warning:
        'bg-warning-30 dark:bg-warning-dark-30 ' +
        '[&::-webkit-slider-thumb]:outline-5 [&::-webkit-slider-thumb]:outline-warning-30 ' +
        '[&::-webkit-slider-thumb]:bg-warning dark:[&::-webkit-slider-thumb]:bg-warning-dark ' +
        'dark:[&::-webkit-slider-thumb]:outline-5 dark:[&::-webkit-slider-thumb]:outline-warning-dark-30',

    success:
        'bg-success-30 dark:bg-success-dark-30 ' +
        '[&::-webkit-slider-thumb]:outline-5 [&::-webkit-slider-thumb]:outline-success-30 ' +
        '[&::-webkit-slider-thumb]:bg-success dark:[&::-webkit-slider-thumb]:bg-success-dark ' +
        'dark:[&::-webkit-slider-thumb]:outline-5 dark:[&::-webkit-slider-thumb]:outline-success-dark-30',

    info:
        'bg-info-30 dark:bg-info-dark-30 ' +
        '[&::-webkit-slider-thumb]:outline-5 [&::-webkit-slider-thumb]:outline-info-30 ' +
        '[&::-webkit-slider-thumb]:bg-info dark:[&::-webkit-slider-thumb]:bg-info-dark ' +
        'dark:[&::-webkit-slider-thumb]:outline-5 dark:[&::-webkit-slider-thumb]:outline-info-dark-30',

    secondary:
        'bg-secondary dark:bg-secondary-dark ' +
        '[&::-webkit-slider-thumb]:outline-5 [&::-webkit-slider-thumb]:outline-secondary ' +
        '[&::-webkit-slider-thumb]:bg-secondary-700 dark:[&::-webkit-slider-thumb]:bg-secondary-dark-700 ' +
        'dark:[&::-webkit-slider-thumb]:outline-5 dark:[&::-webkit-slider-thumb]:outline-secondary-dark',
}

const SliderSize = {
    sm: "h-1 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3",
    md: "h-2 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4",
    lg: "h-3 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5",
    xl: "h-4 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6",
}

export type SliderProps = {
    label?: string;
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    color?: keyof typeof SliderColor;
    sliderSize?: keyof typeof SliderSize;
    showTooltip?: boolean;
    showMarks?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Slider: React.FC<SliderProps> = ({
    id,
    name,
    label,
    min = 0,
    disabled,
    max = 100,
    step = 1,
    value,
    showTooltip = true,
    showMarks = true,
    onChange,
    color = "primary",
    prefixIcon,
    suffixIcon,
    sliderSize = "md",
}) => {

    const [isInteracting, setIsInteracting] = useState(false);

    const sliderColorClassName = SliderColor[color];
    const sliderSizeClassName = SliderSize[sliderSize];

    const webkitClassName =
        "[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none";
    const mozClassName =
        "[&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:appearance-none";

    const thumbWidthMap = { sm: 12, md: 16, lg: 20, xl: 24 };
    const thumbWidth = thumbWidthMap[sliderSize];

    const getTooltipStyle = () => {
        const range = Number(max) - Number(min);
        const percentage = range === 0 ? 0 : (Number(value) - Number(min)) / range;
        const offset = percentage * -thumbWidth + thumbWidth / 2;
        return {
            left: `calc(${percentage * 100}% + ${offset}px)`,
            opacity: isInteracting ? 1 : 0,
            pointerEvents: "none" as const,
        };
    };

    const renderMarks = () => {
        if (!showMarks || Number(step) <= 1) return null;

        const range = Number(max) - Number(min);
        const stepCount = Math.floor(range / Number(step));

        const marks = Array.from({ length: stepCount + 1 }, (_, i) => {
            const left = (i / stepCount) * 100;
            return (
                <div
                    key={i}
                    className={cn(
                        "absolute top-1/2 -translate-y-1/2 w-[2px] h-2 rounded-full",
                        sliderColorClassName
                    )}
                    style={{ left: `${left}%` }}
                />
            );
        });

        return <div className="absolute top-full mt-2 -left-0.5 -right-0.5 h-2 me-[11px] ms-[9px]">{marks}</div>;
    };

    return (
        <div className="w-full p-4 relative overflow-x-clip">
            {label && (
                <label htmlFor={id || name} className="block text-sm font-medium mb-1 dark:text-white">
                    {label}
                </label>
            )}

            <div className="flex gap-3 items-center relative">
                {prefixIcon}
                <div
                    className="relative w-full flex items-center"
                    onMouseEnter={() => setIsInteracting(true)}
                    onMouseLeave={() => setIsInteracting(false)}
                >
                    {showTooltip && (
                        <div
                            className="absolute z-10 -top-7 transition-opacity duration-300"
                            style={getTooltipStyle()}
                        >
                            <Tooltip text={String(value)} isOpen={isInteracting} placement="top">
                                <div />
                            </Tooltip>
                        </div>
                    )}

                    <input
                        disabled={disabled}
                        type="range"
                        id={id || "slider-range"}
                        min={min}
                        max={max}
                        step={step}
                        value={value}
                        onChange={onChange}
                        onMouseDown={() => setIsInteracting(true)}
                        className={cn(
                            "w-full rounded-full appearance-none cursor-pointer dark:bg-gray-700",
                            "transition-all duration-300 ease-in-out",
                            sliderSizeClassName,
                            webkitClassName,
                            mozClassName,
                            sliderColorClassName,
                            {
                                [SliderColor['secondary']]: disabled,
                                'bg-secondary opacity-50': disabled
                            }
                        )}
                    />


                    {renderMarks()}
                </div>
                {suffixIcon}
                <div className="w-32">
                    <TextInput
                        min={min}
                        max={max}
                        step={step}
                        type={Number(value) <= 0 ? 'text' : "number"}
                        value={Number(value) <= 0 ? '' : value}
                        onChange={onChange}
                    >
                    </TextInput>
                </div>
            </div>
        </div>
    );
};
