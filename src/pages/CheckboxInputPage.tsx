import { useState } from 'react';
import { ListCheckboxInput, CheckboxInput, Button } from '../components';
import type { CheckboxOptionType } from '../components/CheckboxInput/ListCheckboxInput';
import { useNavigate } from 'react-router-dom';

const options: CheckboxOptionType[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const CheckboxInputPage = () => {
  const navigate = useNavigate()

  const [singleCheck, setSingleCheck] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<CheckboxOptionType[]>([]);

  return (
    <div className="p-10 space-y-12 min-h-screen bg-gradient-to-br from-primary/25 via-white to-blue-100">

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
        <h1 className="text-4xl font-bold text-gray-800">Checkbox Component</h1>
        <p className="text-lg mt-2">
          A checkbox component for selecting one or multiple options, with indeterminate state support.
        </p>
      </header>

      <div className="max-w-4xl mx-auto space-y-10">

        {/* Basic */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Basic Example Checkbox</h2>
          <CheckboxInput
            label="I agree to the terms and conditions"
            checked={singleCheck}
            onChange={(e) => setSingleCheck(e.target.checked)}
            description="Click this checkbox to proceed."
          />
          <p className="mt-2 text-sm text-gray-500">Status: {singleCheck ? 'Checked' : 'Unchecked'}</p>
        </section>

        {/* Indeterminate Example */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Indeterminate State</h2>
          <CheckboxInput
            label="Select All"
            indeterminate={true}
            checked={false}
            readOnly
            description="Indeterminate Example."
          />
        </section>

        {/* === List Checkbox Input === */}
        <section>
          <h2 className="text-xl font-semibold mb-4">ListCheckboxInput</h2>
          <ListCheckboxInput
            options={options}
            selectedValues={selectedOptions}
            onValueChange={(val) => setSelectedOptions(val)}
            variant="subtle"
            checkboxSize="md"
          />
          <div className="mt-2 text-sm">
            Selected: {selectedOptions.map(o => o.label).join(', ') || 'None'}
          </div>
        </section>

        {/* Custom Variants and Sizes */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Variants & Sizes</h2>
          <div className="space-y-6">
            {(['solid', 'subtle', 'outline'] as const).map(variant => (
              <div key={variant}>
                <h4 className="font-semibold mb-1 capitalize">{variant} variant</h4>
                <ListCheckboxInput
                  options={options}
                  selectedValues={selectedOptions}
                  onValueChange={setSelectedOptions}
                  variant={variant}
                  checkboxSize="md"
                />
              </div>
            ))}
            <div>
              <h4 className="font-semibold mb-1">Large Size</h4>
              <ListCheckboxInput
                options={options}
                selectedValues={selectedOptions}
                onValueChange={setSelectedOptions}
                variant="solid"
                checkboxSize="lg"
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default CheckboxInputPage;
