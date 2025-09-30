"use client";

import { useState } from "react";
import CodeBlock from "../../components/CodeBlock";
import { CheckboxInput, ListCheckboxInput } from "alope-ui";
import type { CheckboxOptionType } from "alope-ui";
import { useTheme } from "../../context/ThemeContext";

const options: CheckboxOptionType[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function Preview({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <div
      className={`p-4 mb-6 border rounded-lg shadow-sm transition-colors ${
        theme === "dark"
          ? "bg-gray-800 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      {children}
    </div>
  );
}

export default function CheckboxDocs() {
  const [basicChecked, setBasicChecked] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<CheckboxOptionType[]>(
    []
  );
  const { theme } = useTheme();

  return (
    <div className="container mx-auto px-4">
      <div
        className={`prose max-w-none transition-colors ${
          theme === "dark"
            ? "prose-invert"
            : "prose-slate prose-headings:text-gray-900"
        }`}
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Checkbox Input
        </h2>
        <p>
          The <code>CheckboxInput</code> component provides checkbox
          functionality for selecting single or multiple options, with
          indeterminate state support.
        </p>

        {/* Import Section */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
        <CodeBlock
          code={`import { CheckboxInput, ListCheckboxInput } from "alope-ui";
import type { CheckboxOptionType } from "alope-ui";`}
        />

        {/* Props Section */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          CheckboxInput Props
        </h3>
        <div
          className={`overflow-x-auto mb-10 border rounded-lg shadow-sm text-sm transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-gray-50 border-gray-200"
          }`}
        >
          <table className="w-full">
            <thead className={theme === "dark" ? "bg-gray-700" : "bg-gray-100"}>
              <tr>
                <th className="p-3 border">Prop</th>
                <th className="p-3 border">Type</th>
                <th className="p-3 border">Default</th>
                <th className="p-3 border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className={theme === "dark" ? "bg-gray-900" : "bg-white"}>
                <td className="p-3 border font-mono">label</td>
                <td className="p-3 border">string</td>
                <td className="p-3 border">required</td>
                <td className="p-3 border">Checkbox label text</td>
              </tr>
              <tr className={theme === "dark" ? "bg-gray-900" : "bg-white"}>
                <td className="p-3 border font-mono">checked</td>
                <td className="p-3 border">boolean</td>
                <td className="p-3 border">false</td>
                <td className="p-3 border">Checkbox checked state</td>
              </tr>
              <tr className={theme === "dark" ? "bg-gray-900" : "bg-white"}>
                <td className="p-3 border font-mono">indeterminate</td>
                <td className="p-3 border">boolean</td>
                <td className="p-3 border">false</td>
                <td className="p-3 border">
                  Indeterminate state for partial selection
                </td>
              </tr>
              <tr className={theme === "dark" ? "bg-gray-900" : "bg-white"}>
                <td className="p-3 border font-mono">onChange</td>
                <td className="p-3 border">
                  (e: ChangeEvent&lt;HTMLInputElement&gt;) =&gt; void
                </td>
                <td className="p-3 border">required</td>
                <td className="p-3 border">Change handler function</td>
              </tr>
              <tr className={theme === "dark" ? "bg-gray-900" : "bg-white"}>
                <td className="p-3 border font-mono">description</td>
                <td className="p-3 border">string</td>
                <td className="p-3 border">undefined</td>
                <td className="p-3 border">Additional description text</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ListCheckboxInput Props */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          ListCheckboxInput Props
        </h3>
        <div
          className={`overflow-x-auto mb-10 border rounded-lg shadow-sm text-sm transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-gray-50 border-gray-200"
          }`}
        >
          <table className="w-full">
            <thead className={theme === "dark" ? "bg-gray-700" : "bg-gray-100"}>
              <tr>
                <th className="p-3 border">Prop</th>
                <th className="p-3 border">Type</th>
                <th className="p-3 border">Default</th>
                <th className="p-3 border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className={theme === "dark" ? "bg-gray-900" : "bg-white"}>
                <td className="p-3 border font-mono">options</td>
                <td className="p-3 border">CheckboxOptionType[]</td>
                <td className="p-3 border">required</td>
                <td className="p-3 border">Array of checkbox options</td>
              </tr>
              <tr className={theme === "dark" ? "bg-gray-900" : "bg-white"}>
                <td className="p-3 border font-mono">selectedValues</td>
                <td className="p-3 border">CheckboxOptionType[]</td>
                <td className="p-3 border">[]</td>
                <td className="p-3 border">Currently selected options</td>
              </tr>
              <tr className={theme === "dark" ? "bg-gray-900" : "bg-white"}>
                <td className="p-3 border font-mono">onValueChange</td>
                <td className="p-3 border">
                  (values: CheckboxOptionType[]) =&gt; void
                </td>
                <td className="p-3 border">required</td>
                <td className="p-3 border">Change handler for selected values</td>
              </tr>
              <tr className={theme === "dark" ? "bg-gray-900" : "bg-white"}>
                <td className="p-3 border font-mono">variant</td>
                <td className="p-3 border">'solid' | 'subtle' | 'outline'</td>
                <td className="p-3 border">'solid'</td>
                <td className="p-3 border">Visual variant style</td>
              </tr>
              <tr className={theme === "dark" ? "bg-gray-900" : "bg-white"}>
                <td className="p-3 border font-mono">checkboxSize</td>
                <td className="p-3 border">'sm' | 'md' | 'lg'</td>
                <td className="p-3 border">'md'</td>
                <td className="p-3 border">Checkbox size</td>
              </tr>
              <tr className={theme === "dark" ? "bg-gray-900" : "bg-white"}>
                <td className="p-3 border font-mono">containerClassName</td>
                <td className="p-3 border">string</td>
                <td className="p-3 border">""</td>
                <td className="p-3 border">Container CSS class</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Examples Section */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Basic CheckboxInput
        </h3>
        <Preview>
          <CheckboxInput
            label="I agree to the terms and conditions"
            checked={basicChecked}
            onChange={(e) => setBasicChecked(e.target.checked)}
            description="Click this checkbox to proceed."
          />
        </Preview>
        <CodeBlock
          code={`import { useState } from "react";
import { CheckboxInput } from "alope-ui";

const BasicExample = () => {
  const [checked, setChecked] = useState(false);

  return (
    <CheckboxInput
      label="I agree to the terms and conditions"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      description="Click this checkbox to proceed."
    />
  );
};`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">
          ListCheckboxInput
        </h3>
        <Preview>
          <ListCheckboxInput
            options={options}
            selectedValues={selectedOptions}
            onValueChange={setSelectedOptions}
            variant="subtle"
            checkboxSize="md"
          />
        </Preview>
        <CodeBlock
          code={`import { useState } from 'react';
import { ListCheckboxInput } from "alope-ui";
import type { CheckboxOptionType } from "alope-ui";

const options: CheckboxOptionType[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const ListExample = () => {
  const [selectedOptions, setSelectedOptions] = useState<CheckboxOptionType[]>([]);

  return (
    <ListCheckboxInput
      options={options}
      selectedValues={selectedOptions}
      onValueChange={setSelectedOptions}
      variant="subtle"
      checkboxSize="md"
    />
  );
};`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Select All with Indeterminate State
        </h3>
        <Preview>
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
            containerClassName="mt-2"
            variant="subtle"
            checkboxSize="md"
          />
        </Preview>
        <CodeBlock
          code={`const [selectedOptions, setSelectedOptions] = useState<CheckboxOptionType[]>([]);

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
  containerClassName="mt-2"
  variant="subtle"
  checkboxSize="md"
/>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">Variants</h3>
        <Preview>
          <div className="space-y-4">
            {(["solid", "subtle", "outline"] as const).map((variant) => (
              <ListCheckboxInput
                key={variant}
                options={options}
                selectedValues={selectedOptions}
                onValueChange={setSelectedOptions}
                variant={variant}
                checkboxSize="md"
              />
            ))}
          </div>
        </Preview>
        <CodeBlock
          code={`{/* Solid Variant */}
<ListCheckboxInput
  options={options}
  selectedValues={selectedOptions}
  onValueChange={setSelectedOptions}
  variant="solid"
  checkboxSize="md"
/>;

{/* Subtle Variant */}
<ListCheckboxInput
  options={options}
  selectedValues={selectedOptions}
  onValueChange={setSelectedOptions}
  variant="subtle"
  checkboxSize="md"
/>;

{/* Outline Variant */}
<ListCheckboxInput
  options={options}
  selectedValues={selectedOptions}
  onValueChange={setSelectedOptions}
  variant="outline"
  checkboxSize="md"
/>;`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">Sizes</h3>
        <Preview>
          <ListCheckboxInput
            options={options}
            selectedValues={selectedOptions}
            onValueChange={setSelectedOptions}
            variant="solid"
            checkboxSize="lg"
          />
        </Preview>
        <CodeBlock
          code={`{/* Large Size */}
<ListCheckboxInput
  options={options}
  selectedValues={selectedOptions}
  onValueChange={setSelectedOptions}
  variant="solid"
  checkboxSize="lg"
/>;`}
        />
      </div>
    </div>
  );
}