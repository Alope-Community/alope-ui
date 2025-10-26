import { useState } from 'react';
import { RadioInput } from '../components';
import type { RadioOptionType } from '../components/RadioInput/RadioInput';
import Container from './Container';

const options: RadioOptionType[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const RadioInputPage = () => {
  const [selectedValue, setSelectedValue] = useState<RadioOptionType | undefined>(options[0]);

  return (
    <Container title='Radio Component' description='Used to let users choose one option from a list.'>

      {/* Variants Section */}
      <section>
        <h2 className="text-2xl font-semibold dark:text-white mb-4">Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium dark:text-white mb-2">Subtle</h3>
            <RadioInput
              name="variant-subtle"
              options={options}
              selectedValue={selectedValue}
              onValueChange={setSelectedValue}
              variant="subtle"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium dark:text-white mb-2">Solid</h3>
            <RadioInput
              name="variant-solid"
              options={options}
              selectedValue={selectedValue}
              onValueChange={setSelectedValue}
              variant="solid"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium dark:text-white mb-2">Outline</h3>
            <RadioInput
              name="variant-outline"
              options={options}
              selectedValue={selectedValue}
              onValueChange={setSelectedValue}
              variant="outline"
            />
          </div>
        </div>
      </section>

      {/* Sizes Section */}
      <section>
        <h2 className="text-2xl font-semibold dark:text-white mb-4">Sizes</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium dark:text-white mb-2">Small (sm)</h3>
            <RadioInput
              name="size-sm"
              options={options}
              selectedValue={selectedValue}
              onValueChange={setSelectedValue}
              radioSize="sm"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium dark:text-white mb-2">Medium (md)</h3>
            <RadioInput
              name="size-md"
              options={options}
              selectedValue={selectedValue}
              onValueChange={setSelectedValue}
              radioSize="md"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium dark:text-white mb-2">Large (lg)</h3>
            <RadioInput
              name="size-lg"
              options={options}
              selectedValue={selectedValue}
              onValueChange={setSelectedValue}
              radioSize="lg"
            />
          </div>
        </div>
      </section>

      {/* Disabled State */}
      <section>
        <h2 className="text-2xl font-semibold dark:text-white mb-4">Disabled State</h2>
        <RadioInput
          name="disabled-example"
          options={options}
          selectedValue={selectedValue}
          onValueChange={setSelectedValue}
          disabled
        />
      </section>

      {/* With Custom Class */}
      <section>
        <h2 className="text-2xl font-semibold dark:text-white mb-4">With Custom Class</h2>
        <RadioInput
          name="with-custom-class-example"
          options={options}
          selectedValue={selectedValue}
          onValueChange={setSelectedValue}
          containerClassName="gap-6 bg-blue-300 p-4 rounded-lg dark:bg-blue-500"
          inputGroupClassName={(isChecked) =>
            isChecked
              ? 'bg-blue-100 shadow-md dark:bg-blue-700'
              : 'bg-white border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
          }
          inputLabelClassName={(isChecked) =>
            isChecked
              ? 'text-blue-500 font-bold dark:text-blue-100'
              : 'text-gray-500 dark:text-gray-300'
          }
          inputRadioClassName={(isChecked) =>
            isChecked
              ? 'bg-blue-500 border-blue-500 dark:bg-blue-400 dark:border-blue-400'
              : 'border-gray-300 dark:border-gray-600'
          }
        />
      </section>

      {/* Selected Value Display */}
      <section className="text-center p-4 bg-white dark:bg-gray-600 rounded-lg shadow-md">
        <p className="text-lg dark:text-white">Selected Value: <span className="font-semibold dark:text-white text-primary">{selectedValue?.label || 'None'}</span></p>
      </section>

    </Container>
  );
};

export default RadioInputPage;