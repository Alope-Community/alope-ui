import { cn } from "clsx-for-tailwind"
import { useState } from "react"

const AlertVariants = {
    outline: 'outline-1',
    solid: ''
}

const IconColors = {
    success: 'fill-success-700 dark:fill-success-100-dark',
    info: 'fill-info-700 dark:fill-info-100-dark',
    error: 'fill-error-700 dark:fill-error-100-dark',
    warning: 'fill-warning-700 dark:fill-warning-100-dark',
    primary: 'fill-primary-700 dark:fill-primary-100-dark',
    secondary: 'dark:fill-secondary-100-dark',
}

const AlertType = {
    success: 'bg-success-100 outline-success-700 text-success-700 dark:bg-success-900-dark dark:text-success-100-dark dark:outline-success-500-dark',
    info: 'bg-info-100 outline-info-700 text-info-700 dark:bg-info-900-dark dark:text-info-100-dark dark:outline-info-500-dark',
    warning: 'bg-warning-100 outline-warning-700 text-warning-700 dark:bg-warning-900-dark dark:text-warning-100-dark dark:outline-warning-500-dark',
    error: 'bg-error-100 outline-error-700 text-error-700 dark:bg-error-900-dark dark:text-error-100-dark dark:outline-error-500-dark',
    primary: 'bg-primary-100 outline-primary-700 text-primary-700 dark:bg-primary-900-dark dark:text-primary-100-dark dark:outline-primary-500-dark',
    secondary: 'bg-secondary-100 outline-secondary-700 text-secondary-700 dark:bg-secondary-900-dark dark:text-secondary-100-dark dark:outline-secondary-500-dark',
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
    iconColor = 'secondary',
    type = 'secondary',
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
            <div className="flex md:flex-row flex-col justify-between md:items-center w-full">
                <div className="flex flex-col gap-2">
                    <p className={cn("font-medium", titleClassName)}>{title}</p>
                    {description && <p className={cn("text-sm", descriptionClassName)}>{description}</p>}
                    {withClose && (typeof action === 'function' ?
                        <div className="mt-2">
                            {action()}
                        </div>
                        :
                        <div className="mt-2">
                            {action}
                        </div>
                    )}
                </div>
                <div>
                    {!withClose && (typeof action === 'function' ?
                        <div className="mt-2">
                            {action()}
                        </div>
                        :
                        <div className="mt-2">
                            {action}
                        </div>
                    )}
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