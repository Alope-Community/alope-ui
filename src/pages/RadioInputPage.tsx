import { useState } from 'react';
import { Button, RadioInput } from '../components';
import type { RadioOptionType } from '../components/RadioInput/RadioInput';
import { useNavigate } from 'react-router-dom';

const options: RadioOptionType[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const RadioInputPage = () => {
  const navigate = useNavigate()
  const [selectedValue, setSelectedValue] = useState<RadioOptionType | undefined>(options[0]);

  return (
    <div className="relative p-10 space-y-12 min-h-screen bg-gradient-to-br from-primary/25 via-white to-blue-100">

      <Button
        onClick={() => navigate(-1)}
        className="absolute top-10 left-10 flex items-center gap-2"
        prefixIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        }>
        Back
      </Button>

      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Radio Component</h1>
        <p className="text-lg mt-2">
          Used to let users choose one option from a list.
        </p>
      </header>

      <div className="max-w-4xl mx-auto space-y-10">
        {/* Variants Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-2">Subtle</h3>
              <RadioInput
                name="variant-subtle"
                options={options}
                selectedValue={selectedValue}
                onValueChange={setSelectedValue}
                variant="subtle"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Solid</h3>
              <RadioInput
                name="variant-solid"
                options={options}
                selectedValue={selectedValue}
                onValueChange={setSelectedValue}
                variant="solid"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Outline</h3>
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
          <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Small (sm)</h3>
              <RadioInput
                name="size-sm"
                options={options}
                selectedValue={selectedValue}
                onValueChange={setSelectedValue}
                radioSize="sm"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Medium (md)</h3>
              <RadioInput
                name="size-md"
                options={options}
                selectedValue={selectedValue}
                onValueChange={setSelectedValue}
                radioSize="md"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Large (lg)</h3>
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
          <h2 className="text-2xl font-semibold mb-4">Disabled State</h2>
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
          <h2 className="text-2xl font-semibold mb-4">With Custom Class</h2>
          <RadioInput
            name="with-custom-class-example"
            options={options}
            selectedValue={selectedValue}
            onValueChange={setSelectedValue}
            containerClassName="gap-6 bg-blue-300 p-4 rounded-lg"
            inputGroupClassName={(isChecked) =>
              isChecked
                ? 'bg-blue-100 border-blue-500 shadow-md'
                : 'bg-white border-gray-300 hover:bg-gray-100'
            }
            inputLabelClassName={(isChecked) =>
              isChecked ? 'text-blue-800 font-bold' : 'text-gray-600'
            }
            inputRadioClassName={(isChecked) =>
              isChecked ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-400'
            }
          />
        </section>

        {/* Selected Value Display */}
        <section className="text-center p-4 bg-white rounded-lg shadow-md">
          <p className="text-lg">Selected Value: <span className="font-semibold text-primary">{selectedValue?.label || 'None'}</span></p>
        </section>

      </div>
    </div>
  );
};

export default RadioInputPage;