import React, { useState, useEffect, useRef, useLayoutEffect, type InputHTMLAttributes } from 'react';
import { TextInput } from '../TextInput/TextInput';
import { cn } from 'clsx-for-tailwind';

const DatePickerColors = {
    success: {
        input: 'focus:ring-success focus:border-success',
        outline: 'outline-success dark:outline-success-dark',
        header: 'bg-success dark:bg-success-dark',
        icon: 'hover:bg-success-700 dark:hover:bg-success-dark-700',
        day: 'bg-success dark:bg-success-dark',
    },
    info: {
        input: 'focus:ring-info focus:border-info',
        outline: 'outline-info dark:outline-info-dark',
        header: 'bg-info dark:bg-info-dark',
        icon: 'hover:bg-info-700 dark:hover:bg-info-dark-700',
        day: 'bg-info dark:bg-info-dark',
    },
    error: {
        input: 'focus:ring-error focus:border-error',
        outline: 'outline-error dark:outline-error-dark',
        header: 'bg-error dark:bg-error-dark',
        icon: 'hover:bg-error-700 dark:hover:bg-error-dark-700',
        day: 'bg-error dark:bg-error-dark',
    },
    warning: {
        input: 'focus:ring-warning focus:border-warning',
        outline: 'outline-warning dark:outline-warning-dark',
        header: 'bg-warning dark:bg-warning-dark',
        icon: 'hover:bg-warning-700 dark:hover:bg-warning-dark-700',
        day: 'bg-warning dark:bg-warning-dark',
    },
    default: {
        input: '',
        outline: '',
        header: '',
        icon: '',
        day: '',
    },
}

type DatePickerProps = {
    label?: string;
    selectedDate?: Date;
    labelClassName?: string
    color?: keyof typeof DatePickerColors
    onDateChange?: (date: Date) => void;
} & InputHTMLAttributes<HTMLInputElement>

export const DatePicker: React.FC<DatePickerProps> = ({
    label,
    id,
    name,
    color = 'default',
    labelClassName,
    selectedDate: initialSelectedDate,
    onDateChange,
}) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(
        initialSelectedDate || null
    );
    const [isOpen, setIsOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(
        selectedDate ? selectedDate.getMonth() : new Date().getMonth()
    );
    const [currentYear, setCurrentYear] = useState(
        selectedDate ? selectedDate.getFullYear() : new Date().getFullYear()
    );
    const [calendarPosition, setCalendarPosition] = useState('bottom');
    const datePickerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const inputClasess = DatePickerColors[color].input
    const dayClasess = DatePickerColors[color].day
    const headerClasess = DatePickerColors[color].header
    const iconClasess = DatePickerColors[color].icon
    const outlineClasess = DatePickerColors[color].outline

    useLayoutEffect(() => {
        if (isOpen && inputRef.current) {
            const inputRect = inputRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - inputRect.bottom;
            const calendarHeight = 300; // Approximate height of the calendar

            if (spaceBelow < calendarHeight) {
                setCalendarPosition('top');
            } else {
                setCalendarPosition('bottom');
            }
        }
    }, [isOpen]);

    useEffect(() => {
        if (initialSelectedDate) {
            setSelectedDate(initialSelectedDate);
            setCurrentMonth(initialSelectedDate.getMonth());
            setCurrentYear(initialSelectedDate.getFullYear());
        }
    }, [initialSelectedDate]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                datePickerRef.current &&
                !datePickerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [datePickerRef]);

    const handleDateChange = (date: Date) => {
        setSelectedDate(date);
        if (onDateChange) {
            onDateChange(date);
        }
        setIsOpen(false);
    };

    const daysInMonth = (month: number, year: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const firstDayOfMonth = (month: number, year: number) => {
        return new Date(year, month, 1).getDay();
    };

    const renderCalendar = () => {
        const days = [];
        const totalDays = daysInMonth(currentMonth, currentYear);
        const firstDay = firstDayOfMonth(currentMonth, currentYear);

        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
        }

        for (let i = 1; i <= totalDays; i++) {
            const date = new Date(currentYear, currentMonth, i);
            const isSelected =
                selectedDate &&
                date.getDate() === selectedDate.getDate() &&
                date.getMonth() === selectedDate.getMonth() &&
                date.getFullYear() === selectedDate.getFullYear();

            days.push(
                <div
                    key={i}
                    className={cn(
                        `px-4 py-2 flex items-center justify-center cursor-pointer rounded-md text-sm font-medium hover:bg-secondary dark:hover:bg-secondary-dark`,
                        {
                            'bg-primary dark:bg-primary-dark text-white': isSelected,
                            [dayClasess]: isSelected,
                        },
                    )}
                    onClick={() => handleDateChange(date)}
                >
                    {i}
                </div>
            );
        }

        return (
            <div className="grid grid-cols-7 gap-1 p-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="w-8 h-8 flex items-center justify-center font-semibold">
                        {day}
                    </div>
                ))}
                {days}
            </div>
        );
    };

    return (
        <div className="relative" ref={datePickerRef}>
            {label && <label htmlFor={id || name} className={cn("block text-sm font-medium mb-1 dark:text-white", labelClassName)}>{label}</label>}
            <TextInput
                type="text"
                readOnly
                ref={inputRef}
                value={selectedDate ? selectedDate.toLocaleDateString() : ''}
                onClick={() => setIsOpen(!isOpen)}
                placeholder="Select a date"
                className={cn(
                    "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm dark:placeholder:text-white dark:text-white",
                    inputClasess,
                )}
            />
            {isOpen && (
                <div className={cn(
                    `absolute overflow-auto z-10 w-full bg-white outline-3 outline-primary dark:outline-primary-dark rounded-md shadow-lg`,
                    calendarPosition === 'top' ? 'bottom-full mb-2' : 'top-full mt-2',
                    outlineClasess,
                )}>
                    <div className={cn(
                        "flex justify-between items-center mb-1 bg-primary dark:bg-primary-dark p-2 text-white",
                        headerClasess,
                    )}>
                        <button
                            onClick={() => {
                                if (currentMonth === 0) {
                                    setCurrentMonth(11);
                                    setCurrentYear(currentYear - 1);
                                } else {
                                    setCurrentMonth(currentMonth - 1);
                                }
                            }}
                            className={cn(
                                "px-2 py-1 rounded-md hover:bg-primary-700 dark:hover:bg-primary-dark-700 hover:cursor-pointer",
                                iconClasess,
                            )}
                        >
                            &lt;
                        </button>
                        <div className="flex gap-2 items-center">
                            <div className="font-semibold">
                                {new Date(currentYear, currentMonth).toLocaleString('default', {
                                    month: 'long',
                                    // year: 'numeric',
                                })}
                            </div>
                            <div className="w-20">
                                <TextInput
                                    type='number'
                                    value={currentYear}
                                    onChange={e => setCurrentYear(Number(e.target.value))}
                                />
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                if (currentMonth === 11) {
                                    setCurrentMonth(0);
                                    setCurrentYear(currentYear + 1);
                                } else {
                                    setCurrentMonth(currentMonth + 1);
                                }
                            }}
                            className={cn(
                                "px-2 py-1 rounded-md hover:bg-primary-700 dark:hover:bg-primary-dark-700 hover:cursor-pointer",
                                iconClasess,
                            )}
                        >
                            &gt;
                        </button>
                    </div>
                    {renderCalendar()}
                </div>
            )}
        </div>
    );
};