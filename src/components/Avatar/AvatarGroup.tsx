import React from 'react'
import { Avatar, type AvatarProps } from './Avatar'
import { cn } from 'clsx-for-tailwind'

export type AvatarGroupProps = {
    avatars: AvatarProps[]
    maxVisible?: number
    size?: AvatarProps['size']
    overlap?: string // contoh: "-ml-2"
    className?: string
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
    avatars,
    maxVisible = 3,
    size = 'md',
    overlap = '-ml-3',
    className
}) => {
    const visibleAvatars = avatars.slice(0, maxVisible)
    const remaining = avatars.length - maxVisible

    return (
        <div className={cn('flex items-center', className)}>
            {visibleAvatars.map((avatar, index) => (
                <div key={index} className={cn(index !== 0 && overlap)}>
                    <Avatar {...avatar} size={size} />
                </div>
            ))}
            {remaining > 0 && (
                <div className={cn('flex items-center justify-center bg-secondary dark:bg-secondary-dark font-medium', overlap,
                    size === 'sm' && 'w-8 h-8 text-xs rounded-full',
                    size === 'md' && 'w-12 h-12 text-sm rounded-full',
                    size === 'lg' && 'w-16 h-16 text-base rounded-full'
                )}>
                    +{remaining}
                </div>
            )}
        </div>
    )
}
