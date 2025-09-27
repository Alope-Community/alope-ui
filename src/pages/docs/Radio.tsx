"use client";

import { useState } from "react";
import CodeBlock from "../../components/CodeBlock";
import { RadioInput } from "alope-ui";
import type { RadioOptionType } from "alope-ui";
import { useTheme } from "../../context/ThemeContext";

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
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Radio Input
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        The <code>RadioInput</code> component allows users to choose one option
        from a list of mutually exclusive choices.
      </p>

      {/* Import Section */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
      <CodeBlock
        code={`import { RadioInput } from "alope-ui";
import type { RadioOptionType } from "alope-ui";`}
      />

      {/* Props Section */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Props</h3>
      <div className="overflow-x-auto mb-10">
        <table
          className={`w-full border rounded-lg shadow-sm text-sm ${
            theme === "dark"
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <thead className={theme === "dark" ? "bg-gray-700" : "bg-gray-100"}>
            <tr>
              <th className="p-3 border">Prop</th>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Default</th>
              <th className="p-3 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className={theme === "dark" ? "bg-gray-800" : "bg-white"}>
              <td className="p-3 border font-mono">name</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">required</td>
              <td className="p-3 border">Name attribute for radio group</td>
            </tr>
            <tr className={theme === "dark" ? "bg-gray-800" : "bg-white"}>
              <td className="p-3 border font-mono">options</td>
              <td className="p-3 border">RadioOptionType[]</td>
              <td className="p-3 border">required</td>
              <td className="p-3 border">Array of radio options</td>
            </tr>
            <tr className={theme === "dark" ? "bg-gray-800" : "bg-white"}>
              <td className="p-3 border font-mono">selectedValue</td>
              <td className="p-3 border">RadioOptionType | undefined</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Currently selected option</td>
            </tr>
            <tr className={theme === "dark" ? "bg-gray-800" : "bg-white"}>
              <td className="p-3 border font-mono">onValueChange</td>
              <td className="p-3 border">
                (value: RadioOptionType) =&gt; void
              </td>
              <td className="p-3 border">required</td>
              <td className="p-3 border">Change handler function</td>
            </tr>
            <tr className={theme === "dark" ? "bg-gray-800" : "bg-white"}>
              <td className="p-3 border font-mono">variant</td>
              <td className="p-3 border">'subtle' | 'solid' | 'outline'</td>
              <td className="p-3 border">'subtle'</td>
              <td className="p-3 border">Visual variant style</td>
            </tr>
            <tr className={theme === "dark" ? "bg-gray-800" : "bg-white"}>
              <td className="p-3 border font-mono">radioSize</td>
              <td className="p-3 border">'sm' | 'md' | 'lg'</td>
              <td className="p-3 border">'md'</td>
              <td className="p-3 border">Radio button size</td>
            </tr>
            <tr className={theme === "dark" ? "bg-gray-800" : "bg-white"}>
              <td className="p-3 border font-mono">disabled</td>
              <td className="p-3 border">boolean</td>
              <td className="p-3 border">false</td>
              <td className="p-3 border">Disable all radio options</td>
            </tr>
            <tr className={theme === "dark" ? "bg-gray-800" : "bg-white"}>
              <td className="p-3 border font-mono">containerClassName</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">""</td>
              <td className="p-3 border">Container CSS class</td>
            </tr>
            <tr className={theme === "dark" ? "bg-gray-800" : "bg-white"}>
              <td className="p-3 border font-mono">inputGroupClassName</td>
              <td className="p-3 border">
                string | (isChecked: boolean) =&gt; string
              </td>
              <td className="p-3 border">""</td>
              <td className="p-3 border">Input group CSS class</td>
            </tr>
            <tr className={theme === "dark" ? "bg-gray-800" : "bg-white"}>
              <td className="p-3 border font-mono">inputLabelClassName</td>
              <td className="p-3 border">
                string | (isChecked: boolean) =&gt; string
              </td>
              <td className="p-3 border">""</td>
              <td className="p-3 border">Label CSS class</td>
            </tr>
            <tr className={theme === "dark" ? "bg-gray-800" : "bg-white"}>
              <td className="p-3 border font-mono">inputRadioClassName</td>
              <td className="p-3 border">
                string | (isChecked: boolean) =&gt; string
              </td>
              <td className="p-3 border">""</td>
              <td className="p-3 border">Radio input CSS class</td>
            </tr>
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
  const [selectedValue, setSelectedValue] = useState<RadioOptionType | undefined>(options[0]);

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
        <RadioInput
          name="variant-subtle"
          options={options}
          selectedValue={selectedValue}
          onValueChange={setSelectedValue}
          variant="subtle"
        />
        <RadioInput
          name="variant-solid"
          options={options}
          selectedValue={selectedValue}
          onValueChange={setSelectedValue}
          variant="solid"
        />
        <RadioInput
          name="variant-outline"
          options={options}
          selectedValue={selectedValue}
          onValueChange={setSelectedValue}
          variant="outline"
        />
      </div>
      <CodeBlock
        code={`<RadioInput
  name="variant-subtle"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  variant="subtle"
/>

<RadioInput
  name="variant-solid"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  variant="solid"
/>

<RadioInput
  name="variant-outline"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  variant="outline"
/>`}
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
        <RadioInput
          name="size-sm"
          options={options}
          selectedValue={selectedValue}
          onValueChange={setSelectedValue}
          radioSize="sm"
        />
        <RadioInput
          name="size-md"
          options={options}
          selectedValue={selectedValue}
          onValueChange={setSelectedValue}
          radioSize="md"
        />
        <RadioInput
          name="size-lg"
          options={options}
          selectedValue={selectedValue}
          onValueChange={setSelectedValue}
          radioSize="lg"
        />
      </div>
      <CodeBlock
        code={`<RadioInput
  name="size-sm"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  radioSize="sm"
/>

<RadioInput
  name="size-lg"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  radioSize="lg"
/>`}
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
          containerClassName="gap-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-900"
          inputGroupClassName={(isChecked) =>
            isChecked
              ? "bg-blue-100 dark:bg-blue-800 border border-blue-500 shadow-md"
              : "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
          }
          inputLabelClassName={(isChecked) =>
            isChecked
              ? "text-blue-800 dark:text-blue-200 font-bold"
              : "text-gray-700 dark:text-gray-300"
          }
          inputRadioClassName={(isChecked) =>
            isChecked
              ? "bg-blue-600 border-blue-600"
              : "bg-white dark:bg-gray-700 border-gray-400 dark:border-gray-500"
          }
        />
      </div>
      <CodeBlock
        code={`<RadioInput
  name="custom-styling"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  containerClassName="gap-6 bg-blue-50 dark:bg-blue-900 p-4 rounded-lg"
  inputGroupClassName={(isChecked) =>
    isChecked
      ? "bg-blue-100 dark:bg-blue-800 border-blue-500 shadow-md"
      : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
  }
  inputLabelClassName={(isChecked) =>
    isChecked ? "text-blue-800 dark:text-blue-200 font-bold" : "text-gray-600 dark:text-gray-300"
  }
  inputRadioClassName={(isChecked) =>
    isChecked
      ? "bg-blue-600 border-blue-600"
      : "bg-white dark:bg-gray-700 border-gray-400 dark:border-gray-500"
  }
/>`}
      />
    </div>
  );
}
