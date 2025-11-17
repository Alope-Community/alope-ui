export const BottomNavbarVariants = {
    primary: {
        label: 'border-none hover:bg-primary-100 hover:text-primary-700 dark:hover:bg-secondary-800-dark dark:hover:text-primary-200-dark text-secondary-600 dark:text-primary-200-dark',
        checked: 'bg-primary-100 text-primary-700 dark:bg-primary-900-dark dark:text-primary-100-dark',
        icon: 'text-secondary-600 dark:text-secondary-400-dark',
        checkedIcon: 'text-primary-700 dark:text-primary-100-dark',
    },

    error: {
        label: 'border-none hover:bg-error-100 hover:text-error-700 dark:hover:bg-secondary-800-dark dark:hover:text-error-200-dark text-secondary-600 dark:text-error-200-dark',
        checked: 'bg-error-100 text-error-700 dark:bg-error-900-dark dark:text-error-100-dark',
        icon: 'text-secondary-600 dark:text-secondary-400-dark',
        checkedIcon: 'text-error-700 dark:text-error-100-dark',
    },

    success: {
        label: 'border-none hover:bg-success-100 hover:text-success-700 dark:hover:bg-secondary-800-dark dark:hover:text-success-200-dark text-secondary-600 dark:text-success-200-dark',
        checked: 'bg-success-100 text-success-700 dark:bg-success-900-dark dark:text-success-100-dark',
        icon: 'text-secondary-600 dark:text-secondary-400-dark',
        checkedIcon: 'text-success-700 dark:text-success-100-dark',
    },

    info: {
        label: 'border-none hover:bg-info-100 hover:text-info-700 dark:hover:bg-secondary-800-dark dark:hover:text-info-200-dark text-secondary-600 dark:text-info-200-dark',
        checked: 'bg-info-100 text-info-700 dark:bg-info-900-dark dark:text-info-100-dark',
        icon: 'text-secondary-600 dark:text-secondary-400-dark',
        checkedIcon: 'text-info-700 dark:text-info-100-dark',
    },

    warning: {
        label: 'border-none hover:bg-warning-100 hover:text-warning-700 dark:hover:bg-secondary-800-dark dark:hover:text-warning-200-dark text-secondary-600 dark:text-warning-200-dark',
        checked: 'bg-warning-100 text-warning-700 dark:bg-warning-900-dark dark:text-warning-100-dark',
        icon: 'text-secondary-600 dark:text-secondary-400-dark',
        checkedIcon: 'text-warning-700 dark:text-warning-100-dark',
    },

} as const

export type Variant = keyof typeof BottomNavbarVariants

