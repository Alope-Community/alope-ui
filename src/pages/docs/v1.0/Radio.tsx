"use client";

import { useState } from "react";
import CodeBlock from "../../../components/CodeBlock";
import { RadioInput } from "alope-ui";
import type { RadioOptionType } from "alope-ui";
import { useTheme } from "../../../context/ThemeContext";

const options: RadioOptionType[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function RadioDocs() {
  const [selectedValue, setSelectedValue] = useState<
    RadioOptionType | undefined
  >(options[0]);
  const { theme } = useTheme();

  return (
    <div className="container mx-auto px-4">
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-4xl font-bold mb-6">Radio Input</h2>
        <p>
          The <code>RadioInput</code> component allows users to choose one
          option from a list of mutually exclusive choices.
        </p>

        {/* Import Section */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
        <CodeBlock
          code={`import { RadioInput } from "alope-ui";
import type { RadioOptionType } from "alope-ui";`}
        />

        {/* Props Section */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Props</h3>
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
                  "name",
                  "string",
                  "required",
                  "Name attribute for radio group",
                ],
                [
                  "options",
                  "RadioOptionType[]",
                  "required",
                  "Array of radio options",
                ],
                [
                  "selectedValue",
                  "RadioOptionType | undefined",
                  "undefined",
                  "Currently selected option",
                ],
                [
                  "onValueChange",
                  "(value: RadioOptionType) => void",
                  "required",
                  "Change handler function",
                ],
                [
                  "variant",
                  "'subtle' | 'solid' | 'outline'",
                  "'subtle'",
                  "Visual variant style",
                ],
                [
                  "radioSize",
                  "'sm' | 'md' | 'lg'",
                  "'md'",
                  "Radio button size",
                ],
                ["disabled", "boolean", "false", "Disable all radio options"],
                ["containerClassName", "string", '""', "Container CSS class"],
                [
                  "inputGroupClassName",
                  "string | (isChecked: boolean) => string",
                  '""',
                  "Input group CSS class",
                ],
                [
                  "inputLabelClassName",
                  "string | (isChecked: boolean) => string",
                  '""',
                  "Label CSS class",
                ],
                [
                  "inputRadioClassName",
                  "string | (isChecked: boolean) => string",
                  '""',
                  "Radio input CSS class",
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

        {/* Examples Section */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Basic RadioInput</h3>
        <div
          className={`border rounded-lg p-4 mb-6 ${
            theme === "dark"
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <RadioInput
            name="flavor"
            options={options}
            selectedValue={selectedValue}
            onValueChange={setSelectedValue}
          />
        </div>
        <CodeBlock
          code={`import { useState } from "react";
import { RadioInput } from "alope-ui";
import type { RadioOptionType } from "alope-ui";

const options: RadioOptionType[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const BasicExample = () => {
  const [selectedValue, setSelectedValue] =
    (useState < RadioOptionType) | (undefined > options[0]);

  return (
    <RadioInput
      name="flavor"
      options={options}
      selectedValue={selectedValue}
      onValueChange={setSelectedValue}
    />
  );
};`}
        />

        {/* Variants */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Variants</h3>
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 border rounded-lg p-4 mb-6 ${
            theme === "dark"
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Subtle Variant */}
          <RadioInput
            name="variant-subtle"
            options={options}
            selectedValue={selectedValue}
            onValueChange={setSelectedValue}
            variant="subtle"
          />
          {/* Solid Variant */}
          <RadioInput
            name="variant-solid"
            options={options}
            selectedValue={selectedValue}
            onValueChange={setSelectedValue}
            variant="solid"
          />
          {/* Outline Variant */}
          <RadioInput
            name="variant-outline"
            options={options}
            selectedValue={selectedValue}
            onValueChange={setSelectedValue}
            variant="outline"
          />
        </div>
        <CodeBlock
          code={`{
  /* Subtle Variant */
}
<RadioInput
  name="variant-subtle"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  variant="subtle"
/>;

{
  /* Solid Variant */
}
<RadioInput
  name="variant-solid"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  variant="solid"
/>;

{
  /* Outline Variant */
}
<RadioInput
  name="variant-outline"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  variant="outline"
/>;`}
        />

        {/* Sizes */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Sizes</h3>
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 border rounded-lg p-4 mb-6 ${
            theme === "dark"
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Small Size */}
          <RadioInput
            name="size-sm"
            options={options}
            selectedValue={selectedValue}
            onValueChange={setSelectedValue}
            radioSize="sm"
          />
          {/* Large Size */}
          <RadioInput
            name="size-lg"
            options={options}
            selectedValue={selectedValue}
            onValueChange={setSelectedValue}
            radioSize="lg"
          />
        </div>
        <CodeBlock
          code={`{
  /* Small Size */
}
<RadioInput
  name="size-sm"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  radioSize="sm"
/>;

{
  /* Large Size */
}
<RadioInput
  name="size-lg"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  radioSize="lg"
/>;`}
        />

        {/* Disabled */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Disabled State</h3>
        <div
          className={`border rounded-lg p-4 mb-6 ${
            theme === "dark"
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <RadioInput
            name="disabled-example"
            options={options}
            selectedValue={selectedValue}
            onValueChange={setSelectedValue}
            disabled
          />
        </div>
        <CodeBlock
          code={`<RadioInput
  name="disabled-example"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  disabled
/>`}
        />

        {/* Custom Styling */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Custom Styling</h3>
        <div
          className={`border rounded-lg p-4 mb-6 ${
            theme === "dark"
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <RadioInput
            name="custom-styling"
            options={options}
            selectedValue={selectedValue}
            onValueChange={setSelectedValue}
            containerClassName="gap-6 bg-blue-50 p-4 rounded-lg"
            inputGroupClassName={(isChecked) =>
              isChecked
                ? "bg-blue-100 border-blue-500 shadow-md"
                : "bg-white border-gray-300 hover:bg-gray-100"
            }
            inputLabelClassName={(isChecked) =>
              isChecked ? "text-blue-800 font-bold" : "text-gray-600"
            }
            inputRadioClassName={(isChecked) =>
              isChecked
                ? "bg-blue-600 border-blue-600"
                : "bg-white border-gray-400"
            }
          />
        </div>
        <CodeBlock
          code={`<RadioInput
  name="custom-styling"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  containerClassName="gap-6 bg-blue-50 p-4 rounded-lg"
  inputGroupClassName={(isChecked) =>
    isChecked
      ? "bg-blue-100 border-blue-500 shadow-md"
      : "bg-white border-gray-300 hover:bg-gray-100"
  }
  inputLabelClassName={(isChecked) =>
    isChecked ? "text-blue-800 font-bold" : "text-gray-600"
  }
  inputRadioClassName={(isChecked) =>
    isChecked ? "bg-blue-600 border-blue-600" : "bg-white border-gray-400"
  }
/>`}
        />
      </div>
    </div>
  );
}
