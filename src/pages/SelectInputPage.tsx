import { useState } from 'react';
import { cn } from 'clsx-for-tailwind';
import { SelectInput } from '../components';
import type { SelectOptionType } from '../components/SelectInput/SelectInput';
import Container from './Container';

const options: SelectOptionType[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'caramel', label: 'Caramel' },
  { value: 'mint', label: 'Mint' },
  { value: 'coffee', label: 'Coffee' },
]

const SelectInputPage = () => {
  const [singleValue, setSingleValue] = useState<SelectOptionType | null>(null)
  const [multipleValues, setMultipleValues] = useState<readonly SelectOptionType[]>([])

  return (
    <Container title='Select Input Component' description='Used to let users choose one option from a dropdown list.'>

      {/* Single Select */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold dark:text-white">Single Select (Searchable)</h2>
        <div className="p-4">
          <SelectInput
            instanceId="single-select"
            label="Choose your flavor"
            options={options}
            value={singleValue}
            onChange={(value) => setSingleValue(value as SelectOptionType)}
            isClearable
            isSearchable
            placeholder="Select a flavor..."
          />
        </div>
      </div>

      {/* Multiple Select */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold dark:text-white">Multiple Select</h2>
        <div className="p-4">
          <SelectInput
            instanceId="multi-select"
            label="Select your favorite toppings"
            options={options}
            value={multipleValues}
            onChange={(value) => setMultipleValues(value as readonly SelectOptionType[])}
            isMulti
            isSearchable
            placeholder="Select toppings..."
          />
        </div>
      </div>

      {/* With Error */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold dark:text-white">Select with Error</h2>
        <div className="p-4">
          <SelectInput
            instanceId="error-select"
            label="Your selection"
            options={options}
            error="This field is required."
            placeholder="Make a selection..."
          />
        </div>
      </div>

      {/* With Custom Class */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold dark:text-white">Select with Custom Class</h2>
        <div className="p-4">
          <SelectInput
            instanceId="error-select"
            label="Your selection"
            menuPlacement='top'
            options={options}
            placeholder="This is a huge selection..."
            labelClassName='font-bold text-lg'
            customClassNames={{
              control: ({ isFocused }) => cn(
                `!w-full !bg-transparent !border !rounded-lg p-2 !shadow-md !sm:text-sm !min-h-[38px]`,
                isFocused
                  ? 'border-info !ring-1 !ring-info'
                  : '!border-info dark:!border-info-dark'
              ),
              option: ({ isFocused, isSelected }) =>
                `!px-4 !py-2 !cursor-pointer ${isSelected
                  ? '!bg-info !text-white'
                  : isFocused
                    ? '!bg-info/30 dark:!bg-info-dark/30'
                    : '!bg-white dark:!bg-gray-800'
                }`,
            }}
          />
        </div>
      </div>

    </Container>
  );
};

export default SelectInputPage;
