import { useState } from 'react';
import { ListCheckboxInput, CheckboxInput } from '../components';
import type { CheckboxOptionType } from '../components/CheckboxInput/ListCheckboxInput';

const options: CheckboxOptionType[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const CheckboxInputPage = () => {
  const [singleCheck, setSingleCheck] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<CheckboxOptionType[]>([]);

  return (
    <div className="p-10 space-y-12 min-h-screen">
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
            label="Saya menyetujui syarat dan ketentuan"
            checked={singleCheck}
            onChange={(e) => setSingleCheck(e.target.checked)}
            description="Klik checkbox ini untuk melanjutkan."
          />
          <p className="mt-2 text-sm text-gray-500">Status: {singleCheck ? 'Checked' : 'Unchecked'}</p>
        </section>

        {/* Indeterminate Example */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Indeterminate State</h2>
          <CheckboxInput
            label="Pilih Semua"
            indeterminate={true}
            checked={false}
            readOnly
            description="Contoh tampilan indeterminate."
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
