import { cn } from 'clsx-for-tailwind';
import { useEffect, useRef, useState } from 'react';

const TabsVariants = {
  line: {
    wrapper: 'border-b border-secondary dark:border-secondary-dark',
    button: 'whitespace-nowrap py-4 px-1 font-medium text-sm',
    active: 'border-primary text-primary dark:text-primary-30 transition-all duration-300 ease-in-out',
    inactive: 'border-transparent text-gray-500 hover:text-secondary-700 dark:text-white dark:hover:text-secondary-dark-700',
  },
  solid: {
    wrapper: 'rounded-md p-1',
    button: 'whitespace-nowrap py-2 px-4 font-medium text-sm rounded-md',
    active: 'bg-indigo-100 dark:bg-indigo-200 text-primary dark:text-primary-dark transition-all duration-300 ease-in-out',
    inactive: 'text-gray-500 hover:text-secondary-700 dark:text-white dark:hover:text-secondary-dark-700',
  },
  subtle: {
    wrapper: 'rounded-md bg-transparent p-1',
    button: 'whitespace-nowrap py-2 px-4 font-medium text-sm',
    active: 'text-white transition-all duration-300 ease-in-out z-10',
    inactive: 'bg-transparent text-primary dark:text-primary-30 hover:text-primary-700',
  },
  inline: {
    wrapper: 'border border-primary rounded-t-md border-b dark:border-primary-dark-30',
    button: 'whitespace-nowrap py-2 px-4 font-medium text-sm z-10',
    active: 'text-white transition-all duration-300 ease-in-out',
    inactive: 'text-gray-500 hover:text-secondary-700 dark:text-white dark:hover:text-secondary-dark',
  },
  outline: {
    wrapper: 'border border-primary dark:border-primary-dark-30 rounded-md p-1',
    button: 'whitespace-nowrap py-2 px-4 font-medium text-sm rounded-md',
    active: 'bg-indigo-100 dark:bg-indigo-200 text-primary dark:text-primary-dark transition-all duration-300 ease-in-out',
    inactive: 'text-gray-500 hover:text-secondary-700 dark:text-white dark:hover:text-secondary-dark',
  },
  plain: {
    wrapper: '',
    button: 'whitespace-nowrap py-2 px-4 font-medium text-sm',
    active: 'text-primary dark:text-primary-30 transition-all duration-300 ease-in-out',
    inactive: 'text-gray-500 hover:text-secondary-700 dark:text-white dark:hover:text-secondary',
  },
}

const IndicatorVariants = {
  line: 'absolute bottom-0 h-1 bg-primary dark:bg-primary-30 transition-all duration-300 ease-in-out',
  solid: 'absolute bottom-0 h-1 bg-primary transition-all duration-300 ease-in-out',
  subtle: 'absolute bottom-0 h-full bg-primary rounded-md transition-all duration-300 ease-in-out',
  inline: 'absolute bottom-0 h-full bg-primary border-t border-r border-l border-primary-700 rounded-tl-md rounded-tr-md transition-all duration-300 ease-in-out',
  outline: 'absolute bottom-0 h-1 bg-primary transition-all duration-300 ease-in-out',
  plain: '',
}

export type Tabs = {
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
  link?: string;
}

export type TabsProps = {
  tabs: Tabs[];
  variant?: keyof typeof TabsVariants;
  fitted?: boolean;
  wrapperClassName?: string;
  buttonClassName?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  activeTab?: number;
  onTabChange?: (index: number) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  fitted,
  variant = 'line',
  wrapperClassName,
  buttonClassName,
  activeClassName,
  inactiveClassName,
  activeTab: controlledActiveTab,
  onTabChange,
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(0);
  const isControlled = controlledActiveTab !== undefined && onTabChange !== undefined;
  const activeTab = isControlled ? controlledActiveTab : internalActiveTab;

  const variantClasses = TabsVariants[variant];
  const indicatorVariantClasses = IndicatorVariants[variant];

  const tabRefs = useRef<Array<HTMLButtonElement | HTMLAnchorElement | null>>([]);
  const indicatorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isControlled && activeTab >= tabs.length) {
      setInternalActiveTab(Math.max(0, tabs.length - 1));
    }
  }, [tabs, activeTab, isControlled]);

  useEffect(() => {
    const currentTab = tabRefs.current[activeTab];
    const indicator = indicatorRef.current;

    if (currentTab && indicator) {
      const left = currentTab.offsetLeft;
      const width = currentTab.offsetWidth;

      indicator.style.transform = `translateX(${left}px)`;
      indicator.style.width = `${width}px`;

      currentTab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [activeTab, tabs]);

  const handleTabClick = (index: number) => {
    if (isControlled) {
      onTabChange(index);
    } else {
      setInternalActiveTab(index);
    }
  };

  return (
    <div>
      <div className={cn('relative', variantClasses.wrapper, wrapperClassName)}>
        <nav className="relative -mb-px flex space-x-2 overflow-x-auto scroll-smooth" aria-label="Tabs">
          {tabs.map((tab, index) => {
            const className = cn(
              'hover:cursor-pointer',
              fitted && 'flex-1',
              variantClasses.button,
              buttonClassName,
              activeTab === index
                ? cn(variantClasses.active, activeClassName)
                : cn(variantClasses.inactive, inactiveClassName),
              tab.disabled && 'hover:cursor-not-allowed cursor-not-allowed opacity-50'
            );

            if (tab.link) {
              return (
                <a
                  key={tab.label}
                  href={!tab.disabled ? tab.link : undefined}
                  ref={(el) => { tabRefs.current[index] = el }}
                  className={className}
                  aria-disabled={tab.disabled}
                  onClick={(e) => tab.disabled && e.preventDefault()}
                >
                  {tab.label}
                </a>
              );
            }

            return (
              <button
                key={tab.label}
                ref={(el) => { tabRefs.current[index] = el }}
                onClick={() => handleTabClick(index)}
                disabled={tab.disabled}
                className={className}
              >
                {tab.label}
              </button>
            );
          })}

          {/* Slide Indicator */}
          <div
            ref={indicatorRef}
            className={cn(indicatorVariantClasses)}
            style={{ width: 0, transform: 'translateX(0px)' }}
          />
        </nav>
      </div>
      <div className="mt-4">{tabs[activeTab]?.content}</div>
    </div>
  );
};
