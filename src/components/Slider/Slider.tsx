import { cn } from "clsx-for-tailwind";
import { useState, type InputHTMLAttributes } from "react";
import { Tooltip } from "../Tooltip/Tooltip";
import { TextInput } from "../TextInput/TextInput";

const SliderVariants = {

    primary:
        'bg-primary-300 text-primary-500 dark:bg-primary-600-dark dark:text-primary-500-dark ' +
        '[&::-webkit-slider-thumb]:bg-primary-500 dark:[&::-webkit-slider-thumb]:bg-primary-300-dark ',

    error:
        'bg-error-300 text-error-500 dark:bg-error-600-dark dark:text-error-500-dark ' +
        '[&::-webkit-slider-thumb]:bg-error-500 dark:[&::-webkit-slider-thumb]:bg-error-300-dark ',

    warning:
        'bg-warning-300 text-warning-500 dark:bg-warning-600-dark dark:text-warning-500-dark ' +
        '[&::-webkit-slider-thumb]:bg-warning-500 dark:[&::-webkit-slider-thumb]:bg-warning-300-dark ',

    success:
        'bg-success-300 text-success-500 dark:bg-success-600-dark dark:text-success-500-dark ' +
        '[&::-webkit-slider-thumb]:bg-success-500 dark:[&::-webkit-slider-thumb]:bg-success-300-dark ',

    info:
        'bg-info-300 text-info-500 dark:bg-info-600-dark dark:text-info-500-dark ' +
        '[&::-webkit-slider-thumb]:bg-info-500 dark:[&::-webkit-slider-thumb]:bg-info-300-dark ',

    default:
        'bg-secondary-300 text-secondary-500 dark:bg-secondary-600-dark dark:text-secondary-500-dark ' +
        '[&::-webkit-slider-thumb]:bg-secondary-500 dark:[&::-webkit-slider-thumb]:bg-secondary-300-dark '
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
    variant?: keyof typeof SliderVariants;
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
    variant = "default",
    prefixIcon,
    suffixIcon,
    sliderSize = "md",
}) => {

    const [isInteracting, setIsInteracting] = useState(false);

    const sliderVariantClassName = SliderVariants[variant];
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
                        sliderVariantClassName
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
                            "w-full rounded-full appearance-none cursor-pointer",
                            "transition-all duration-300 ease-in-out",
                            sliderSizeClassName,
                            webkitClassName,
                            mozClassName,
                            sliderVariantClassName,
                            {
                                [SliderVariants['default']]: disabled,
                                'opacity-50': disabled
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
