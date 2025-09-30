import { cn } from 'clsx-for-tailwind';
import { useEffect, useRef, useState } from 'react';

const TabsVariants = {
  line: {
    wrapper: 'border-b border-secondary',
    button: 'whitespace-nowrap py-4 px-1 font-medium text-sm',
    active: 'border-primary text-primary transition-all duration-300 ease-in-out',
    inactive: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
  },
  solid: {
    wrapper: 'rounded-md bg-gray-100 p-1',
    button: 'whitespace-nowrap py-2 px-4 font-medium text-sm rounded-md',
    active: 'bg-white text-primary transition-all duration-300 ease-in-out',
    inactive: 'text-gray-500 hover:text-gray-700',
  },
  subtle: {
    wrapper: 'rounded-md bg-transparent p-1',
    button: 'whitespace-nowrap py-2 px-4 font-medium text-sm',
    active: 'text-white transition-all duration-300 ease-in-out z-10',
    inactive: 'bg-transparent text-primary',
  },
  inline: {
    wrapper: 'bg-gray-100 border-b border-gray-500',
    button: 'whitespace-nowrap py-2 px-4 font-medium text-sm z-10',
    active: 'text-primary transition-all duration-300 ease-in-out',
    inactive: 'text-gray-500 hover:text-gray-700',
  },
  outline: {
    wrapper: 'border border-secondary rounded-md p-1',
    button: 'whitespace-nowrap py-2 px-4 font-medium text-sm rounded-md',
    active: 'bg-indigo-50 text-primary transition-all duration-300 ease-in-out',
    inactive: 'text-gray-500 hover:text-gray-700',
  },
  plain: {
    wrapper: '',
    button: 'whitespace-nowrap py-2 px-4 font-medium text-sm',
    active: 'text-primary transition-all duration-300 ease-in-out',
    inactive: 'text-gray-500 hover:text-gray-700',
  },
}

const IndicatorVariants = {
  line: 'absolute bottom-0 h-0.5 bg-primary transition-all duration-300 ease-in-out',
  solid: 'absolute bottom-0 h-0.5 bg-primary transition-all duration-300 ease-in-out',
  subtle: 'absolute bottom-0 h-full bg-primary rounded-md transition-all duration-300 ease-in-out',
  inline: 'absolute bottom-0 h-full bg-white border-t border-r border-l border-gray-500 rounded-tl-md rounded-tr-md transition-all duration-300 ease-in-out',
  outline: 'absolute bottom-0 h-0.5 bg-primary transition-all duration-300 ease-in-out',
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
      const tabRect = currentTab.getBoundingClientRect();
      const containerRect = currentTab.parentElement?.getBoundingClientRect();

      if (containerRect) {
        const left = tabRect.left - containerRect.left;
        const width = tabRect.width;

        indicator.style.transform = `translateX(${left}px)`;
        indicator.style.width = `${width}px`;
      }
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
        <nav className="relative -mb-px flex space-x-2" aria-label="Tabs">
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
                  ref={(el) => {tabRefs.current[index] = el}}
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
                ref={(el) => {tabRefs.current[index] = el}}
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
