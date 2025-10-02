import { useState } from 'react';
import { ListCheckboxInput, CheckboxInput } from '../components';
import type { CheckboxOptionType } from '../components/CheckboxInput/ListCheckboxInput';
import Container from './Container';

const options: CheckboxOptionType[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const CheckboxInputPage = () => {

  const [singleCheck, setSingleCheck] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<CheckboxOptionType[]>([]);

  return (
    <Container title='Checkbox Input Component' description='A checkbox component for selecting one or multiple options, with indeterminate state support.'>

      {/* Basic */}
      <section>
        <h2 className="text-xl font-semibold dark:text-white mb-2">Basic Example Checkbox</h2>
        <CheckboxInput
          label="I agree to the terms and conditions"
          checked={singleCheck}
          onChange={(e) => setSingleCheck(e.target.checked)}
          description="Click this checkbox to proceed."
        />
        <p className="mt-2 text-sm dark:text-white">Status: {singleCheck ? 'Checked' : 'Unchecked'}</p>
      </section>

      {/* Indeterminate Example */}
      <section>
        <h2 className="text-xl font-semibold dark:text-white mb-2">Select All (with Indeterminate State)</h2>

        <CheckboxInput
          label="Select All"
          checked={selectedOptions.length === options.length}
          indeterminate={
            selectedOptions.length > 0 &&
            selectedOptions.length < options.length
          }
          onChange={(e) => {
            const isChecked = e.target.checked;
            setSelectedOptions(isChecked ? options : []);
          }}
          description="Check to select all options or uncheck to deselect all."
        />

        <ListCheckboxInput
          options={options}
          selectedValues={selectedOptions}
          onValueChange={setSelectedOptions}
          containerClassName='mt-2'
          variant="subtle"
          checkboxSize="md"
        />

        <div className="mt-2 text-sm dark:text-white">
          Selected: {selectedOptions.map(o => o.label).join(', ') || 'None'}
        </div>
      </section>

      {/* === List Checkbox Input === */}
      <section>
        <h2 className="text-xl font-semibold dark:text-white mb-4">List Checkbox</h2>
        <ListCheckboxInput
          options={options}
          selectedValues={selectedOptions}
          onValueChange={(val) => setSelectedOptions(val)}
          variant="subtle"
          checkboxSize="md"
        />
        <div className="mt-2 text-sm dark:text-white">
          Selected: {selectedOptions.map(o => o.label).join(', ') || 'None'}
        </div>
      </section>

      {/* Custom Variants and Sizes */}
      <section>
        <h2 className="text-xl font-semibold dark:text-white mb-2">Variants & Sizes</h2>
        <div className="space-y-6">
          {(['solid', 'subtle', 'outline'] as const).map(variant => (
            <div key={variant}>
              <h4 className="font-semibold dark:text-white mb-1 capitalize">{variant} variant</h4>
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
            <h4 className="font-semibold dark:text-white mb-1">Large Size</h4>
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

    </Container>
  );
};

export default CheckboxInputPage;
