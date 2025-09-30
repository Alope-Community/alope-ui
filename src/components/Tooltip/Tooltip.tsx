
import { cn } from "clsx-for-tailwind";
import { useState } from "react";

export type TooltipProps = {
    children: React.ReactNode;
    text: string;
    showArrow?: boolean;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    offset?: number;
    bgColor?: string;
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    disabled?: boolean;
    animationDuration?: number;
    delay?: number;
};

export const Tooltip: React.FC<TooltipProps> = ({
    children,
    text,
    showArrow = true,
    placement = 'top',
    offset = 8,
    bgColor = 'bg-gray-800',
    isOpen: controlledIsOpen,
    onOpenChange,
    disabled = false,
    animationDuration = 300,
    delay = 700,
}) => {

    const [isHovering, setIsHovering] = useState(false)

    const getTooltipPosition = () => {
        switch (placement) {
            case 'top':
                return { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: `${offset}px` };
            case 'bottom':
                return { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: `${offset}px` };
            case 'left':
                return { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: `${offset}px` };
            case 'right':
                return { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: `${offset}px` };
            default:
                return { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: `${offset}px` };
        }
    };

    const getArrowPosition = () => {
        switch (placement) {
            case 'top':
                return { bottom: '-4px', left: '50%', transform: 'translateX(-50%) rotate(45deg)' };
            case 'bottom':
                return { top: '-4px', left: '50%', transform: 'translateX(-50%) rotate(225deg)' };
            case 'left':
                return { right: '-4px', top: '50%', transform: 'translateY(-50%) rotate(135deg)' };
            case 'right':
                return { left: '-4px', top: '50%', transform: 'translateY(-50%) rotate(-45deg)' };
            default:
                return { bottom: '-4px', left: '50%', transform: 'translateX(-50%) rotate(45deg)' };
        }
    };

    const isVisible = controlledIsOpen ?? isHovering;

    const tooltipStyle = {
        ...getTooltipPosition(),
        transitionDelay: isVisible && !controlledIsOpen ? `${delay}ms` : '0ms',
        transitionDuration: `${animationDuration}ms`,
    };

    if (disabled) {
        return <>{children}</>;
    }

    return (
        <div
            className="relative inline-block group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
                if (controlledIsOpen !== undefined) onOpenChange?.(false)
                setIsHovering(false)
            }}
        >
            {children}
            <div
                className={cn(
                    `absolute text-white text-xs rounded py-1 px-2 z-10 transition-all ${bgColor}`,
                    isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
                )}
                style={tooltipStyle}
            >
                {text}
                {showArrow && (
                    <div
                        className={`absolute w-2 h-2 ${bgColor}`}
                        style={getArrowPosition()}
                    ></div>
                )}
            </div>
        </div>
    );
};
