import { cn } from "clsx-for-tailwind"
import { useState } from "react"

const AlertVariants = {
    outline: 'outline-2',
    solid: ''
}

const IconColors = {
    success: 'fill-success-700',
    info: 'fill-info-700',
    error: 'fill-error-700',
    warning: 'fill-warning-700',
    primary: 'fill-primary-700',
    default: '',
}

const AlertType = {
    success: 'bg-success/30 outline-success-700 text-green-700',
    info: 'bg-info/30 outline-info-700 text-info-700',
    warning: 'bg-warning/30 outline-warning-700 text-warning-700',
    error: 'bg-error/30 outline-error-700 text-error-700',
    primary: 'bg-primary/30 outline-primary-700 text-primary-700',
    default: 'bg-secondary/30 outline-secondary-700',
}

export type AlertProps = {
    title: string
    description?: string
    type?: keyof typeof AlertType
    variant?: keyof typeof AlertVariants
    icon?: React.ReactNode
    withClose?: boolean
    titleClassName?: string
    descriptionClassName?: string
    action?: React.ReactNode | (() => React.ReactNode)
    iconColor?: keyof typeof IconColors
}

export const Alert: React.FC<AlertProps> = ({
    title,
    description,
    icon,
    titleClassName,
    descriptionClassName,
    action,
    withClose = false,
    iconColor = 'default',
    type = 'default',
    variant = 'outline'
}) => {

    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div id="alopeAlert" className={cn("flex gap-2 p-4 rounded-md w-full", AlertType[type], AlertVariants[variant])}>
            {
                icon ??
                <svg viewBox="0 0 24 24" className={cn("w-6 h-6", IconColors[iconColor])}>
                    <path
                        d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z">
                    </path>
                </svg>
            }

            {/* Content + Action */}
            <div className="flex md:flex-row flex-col justify-between md:items-center gap-4 w-full">
                <div className="flex flex-col gap-2">
                    <p className={cn("font-medium", titleClassName)}>{title}</p>
                    {description && <p className={cn("text-sm", descriptionClassName)}>{description}</p>}
                    {withClose && (typeof action === 'function' ?
                        <div className="mt-2 mb-1">
                            {action()}
                        </div>
                        :
                        <div className="mt-2 mb-1">
                            {action}
                        </div>
                    )}
                </div>
                <div>
                    {!withClose && (typeof action === 'function' ? action() : action)}
                </div>
            </div>

            {
                withClose &&
                <svg onClick={() => setVisible(false)} viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7 hover:cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            }

        </div>
    )
}