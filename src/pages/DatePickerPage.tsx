import { useState } from 'react';
import { DatePicker } from '../components';
import Container from './Container';

const DatePickerPage = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    return (
        <div className="overflow-auto">

            <Container title='Date Picker Component' description='Used to pick a date input value.'>
                <div className="max-w-xs">
                    <DatePicker
                        label="Select a date"
                        selectedDate={selectedDate || undefined}
                        onDateChange={(date) => setSelectedDate(date)}
                    />
                </div>
                {selectedDate && (
                    <p className="mt-4 dark:text-white">Selected date: {selectedDate.toLocaleDateString()}</p>
                )}
            </Container>
        </div>
    );
};

export default DatePickerPage;