import React, { useState, useEffect, useRef, useLayoutEffect, type InputHTMLAttributes } from 'react';
import { TextInput } from '../TextInput/TextInput';
import { cn } from 'clsx-for-tailwind';

type DatePickerProps = {
    label?: string;
    selectedDate?: Date;
    labelClassName?: string
    onDateChange?: (date: Date) => void;
} & InputHTMLAttributes<HTMLInputElement>

export const DatePicker: React.FC<DatePickerProps> = ({
    label,
    id,
    name,
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

    useLayoutEffect(() => {
        if (isOpen && inputRef.current) {
            const inputRect = inputRef.current.getBoundingClientRect();
            console.log(inputRect)
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
                    className={`px-4 py-2 flex items-center justify-center cursor-pointer rounded-md text-sm font-medium ${isSelected
                        ? 'bg-primary dark:bg-primary-dark text-white'
                        : 'hover:bg-secondary dark:hover:bg-secondary-dark'
                        }`}
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm dark:placeholder:text-white dark:text-white"
            />
            {isOpen && (
                <div className={`absolute overflow-auto z-10 w-full bg-white outline-3 outline-primary dark:outline-primary-dark rounded-md shadow-lg ${calendarPosition === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
                    }`}>
                    <div className="flex justify-between items-center mb-1 bg-primary dark:bg-primary-dark p-2 text-white">
                        <button
                            onClick={() => {
                                if (currentMonth === 0) {
                                    setCurrentMonth(11);
                                    setCurrentYear(currentYear - 1);
                                } else {
                                    setCurrentMonth(currentMonth - 1);
                                }
                            }}
                            className="px-2 py-1 rounded-md hover:bg-primary-700 dark:hover:bg-primary-dark-700 hover:cursor-pointer"
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
                            className="px-2 py-1 rounded-md hover:bg-primary-700 dark:hover:bg-primary-dark-700 hover:cursor-pointer"
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