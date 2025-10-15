"use client";

import { useState } from "react";
import CodeBlock from "../../../components/CodeBlock";
import { CheckboxInput, ListCheckboxInput } from "alope-ui";
import type { CheckboxOptionType } from "alope-ui";
import { useTheme } from "../../../context/ThemeContext";

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
        <h2 className="text-4xl font-bold mb-6">Checkbox Input</h2>
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
        <div className="overflow-x-auto border border-gray-200 dark:border-gray-800 rounded-lg">
          <table className="w-full text-sm text-left">
            <thead
              className={`${
                theme === "dark"
                  ? "bg-gray-800 text-gray-200"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <tr>
                <th className="px-4 py-2 font-semibold">Prop</th>
                <th className="px-4 py-2 font-semibold">Type</th>
                <th className="px-4 py-2 font-semibold">Default</th>
                <th className="px-4 py-2 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["label", "string", "required", "Checkbox label text"],
                ["checked", "boolean", "false", "Checkbox checked state"],
                [
                  "indeterminate",
                  "boolean",
                  "false",
                  "Indeterminate state for partial selection",
                ],
                [
                  "onChange",
                  "(e: ChangeEvent<HTMLInputElement>) => void",
                  "required",
                  "Change handler function",
                ],
                [
                  "description",
                  "string",
                  "undefined",
                  "Additional description text",
                ],
              ].map(([prop, type, def, desc]) => (
                <tr
                  key={prop}
                  className={`border-t ${
                    theme === "dark" ? "border-gray-800" : "border-gray-200"
                  }`}
                >
                  <td className="px-4 py-2 font-medium">{prop}</td>
                  <td className="px-4 py-2 font-mono text-blue-500">{type}</td>
                  <td className="px-4 py-2 text-gray-500">{def}</td>
                  <td className="px-4 py-2">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ListCheckboxInput Props */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          ListCheckboxInput Props
        </h3>
        <div className="overflow-x-auto border border-gray-200 dark:border-gray-800 rounded-lg mb-10">
          <table className="w-full text-sm text-left">
            <thead
              className={`${
                theme === "dark"
                  ? "bg-gray-800 text-gray-200"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <tr>
                <th className="px-4 py-2 font-semibold">Prop</th>
                <th className="px-4 py-2 font-semibold">Type</th>
                <th className="px-4 py-2 font-semibold">Default</th>
                <th className="px-4 py-2 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "options",
                  "CheckboxOptionType[]",
                  "required",
                  "Array of checkbox options",
                ],
                [
                  "selectedValues",
                  "CheckboxOptionType[]",
                  "[]",
                  "Currently selected options",
                ],
                [
                  "onValueChange",
                  "(values: CheckboxOptionType[]) => void",
                  "required",
                  "Change handler for selected values",
                ],
                [
                  "variant",
                  "'solid' | 'subtle' | 'outline'",
                  "'solid'",
                  "Visual variant style",
                ],
                ["checkboxSize", "'sm' | 'md' | 'lg'", "'md'", "Checkbox size"],
                ["containerClassName", "string", '""', "Container CSS class"],
              ].map(([prop, type, def, desc]) => (
                <tr
                  key={prop}
                  className={`border-t ${
                    theme === "dark" ? "border-gray-800" : "border-gray-200"
                  }`}
                >
                  <td className="px-4 py-2 font-medium">{prop}</td>
                  <td className="px-4 py-2 font-mono text-blue-500">{type}</td>
                  <td className="px-4 py-2 text-gray-500">{def}</td>
                  <td className="px-4 py-2">{desc}</td>
                </tr>
              ))}
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

        <h3 className="text-2xl font-semibold mt-10 mb-3">ListCheckboxInput</h3>
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
            {/* Solid Variant */}
            <ListCheckboxInput
              options={options}
              selectedValues={selectedOptions}
              onValueChange={setSelectedOptions}
              variant="solid"
              checkboxSize="md"
            />
            {/* Subtle Variant */}
            <ListCheckboxInput
              options={options}
              selectedValues={selectedOptions}
              onValueChange={setSelectedOptions}
              variant="subtle"
              checkboxSize="md"
            />
            {/* Outline Variant */}
            <ListCheckboxInput
              options={options}
              selectedValues={selectedOptions}
              onValueChange={setSelectedOptions}
              variant="outline"
              checkboxSize="md"
            />
          </div>
        </Preview>
        <CodeBlock
          code={`{
  /* Solid Variant */
}
<ListCheckboxInput
  options={options}
  selectedValues={selectedOptions}
  onValueChange={setSelectedOptions}
  variant="solid"
  checkboxSize="md"
/>;

{
  /* Subtle Variant */
}
<ListCheckboxInput
  options={options}
  selectedValues={selectedOptions}
  onValueChange={setSelectedOptions}
  variant="subtle"
  checkboxSize="md"
/>;

{
  /* Outline Variant */
}
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
          {/* Large Size */}
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
