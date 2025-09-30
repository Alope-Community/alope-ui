"use client";

import { useState } from "react";
import CodeBlock from "../../components/CodeBlock";
import { SelectInput } from "alope-ui";
import type { SelectOptionType } from "alope-ui";
import { cn } from "clsx-for-tailwind";
import { useTheme } from "../../context/ThemeContext";

const options: SelectOptionType[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "caramel", label: "Caramel" },
  { value: "mint", label: "Mint" },
  { value: "coffee", label: "Coffee" },
];

export default function SelectDocs() {
  const [singleValue, setSingleValue] = useState<SelectOptionType | null>(null);
  const [multipleValues, setMultipleValues] = useState<
    readonly SelectOptionType[]
  >([]);
  const { theme } = useTheme();

  return (
    <div className="prose prose-slate max-w-none">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Title */}
        <h2
          className={cn(
            "text-4xl font-bold mb-6",
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          )}
        >
          Select Input
        </h2>
        <p
          className={cn(
            "mb-8",
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          )}
        >
          The <code className="font-mono text-sm">SelectInput</code> component
          provides a dropdown interface for selecting one or multiple options from
          a list.
        </p>

        {/* Import Section */}
        <h3
          className={cn(
            "text-2xl font-semibold mt-10 mb-3",
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          )}
        >
          Import
        </h3>
        <CodeBlock
          code={`import { SelectInput } from "alope-ui";
import type { SelectOptionType } from "alope-ui";`}
        />

        {/* Props Section */}
        <h3
          className={cn(
            "text-2xl font-semibold mt-10 mb-3",
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          )}
        >
          Props
        </h3>
        <div className="overflow-x-auto mb-10">
          <table
            className={cn(
              "w-full border rounded-lg shadow-sm text-sm",
              theme === "dark"
                ? "border-gray-700"
                : "border-gray-200"
            )}
          >
            <thead className={theme === "dark" ? "bg-gray-800" : "bg-gray-100"}>
              <tr>
                <th className="p-3 border">Prop</th>
                <th className="p-3 border">Type</th>
                <th className="p-3 border">Default</th>
                <th className="p-3 border">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "instanceId",
                  "string",
                  "required",
                  "Unique identifier for the select instance",
                ],
                ["label", "string", "undefined", "Label text for the select"],
                [
                  "options",
                  "SelectOptionType[]",
                  "required",
                  "Array of selectable options",
                ],
                [
                  "value",
                  "SelectOptionType | SelectOptionType[] | null",
                  "null",
                  "Selected value(s)",
                ],
                [
                  "onChange",
                  "(value: any) => void",
                  "required",
                  "Change handler function",
                ],
                ["placeholder", "string", `"Select..."`, "Placeholder text"],
                ["isMulti", "boolean", "false", "Enable multiple selection"],
                [
                  "isSearchable",
                  "boolean",
                  "false",
                  "Enable search functionality",
                ],
                ["isClearable", "boolean", "false", "Enable clear button"],
                ["error", "string", "undefined", "Error message to display"],
                ["labelClassName", "string", `""`, "Label CSS class"],
                [
                  "customClassNames",
                  "object",
                  `{}`,
                  "Custom class names for react-select components",
                ],
              ].map(([prop, type, def, desc]) => (
                <tr
                  key={prop}
                  className={theme === "dark" ? "bg-gray-900" : "bg-white"}
                >
                  <td className="p-3 border font-mono">{prop}</td>
                  <td className="p-3 border">{type}</td>
                  <td className="p-3 border">{def}</td>
                  <td className="p-3 border">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Examples Section */}
        <h3
          className={cn(
            "text-2xl font-semibold mt-10 mb-3",
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          )}
        >
          Examples
        </h3>

        {/* Single Select */}
        <h4
          className={cn(
            "text-xl font-semibold mt-8 mb-3",
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          )}
        >
          Single Select
        </h4>
        <div
          className={cn(
            "border rounded-lg p-4 mb-6",
            theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
          )}
        >
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
        <CodeBlock
          code={`import { useState } from "react";
import { SelectInput } from "alope-ui";
import type { SelectOptionType } from "alope-ui";

const options: SelectOptionType[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const SingleExample = () => {
  const [value, setValue] = useState<SelectOptionType | null>(null);

  return (
    <SelectInput
      instanceId="single-select"
      label="Choose your flavor"
      options={options}
      value={value}
      onChange={(value) => setValue(value as SelectOptionType)}
      isClearable
      isSearchable
      placeholder="Select a flavor..."
    />
  );
};`}
        />

        {/* Multiple Select */}
        <h4
          className={cn(
            "text-xl font-semibold mt-8 mb-3",
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          )}
        >
          Multiple Select
        </h4>
        <div
          className={cn(
            "border rounded-lg p-4 mb-6",
            theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
          )}
        >
          <SelectInput
            instanceId="multi-select"
            label="Select your favorite toppings"
            options={options}
            value={multipleValues}
            onChange={(value) =>
              setMultipleValues(value as readonly SelectOptionType[])
            }
            isMulti
            isSearchable
            placeholder="Select toppings..."
          />
        </div>
        <CodeBlock
          code={`const [multipleValues, setMultipleValues] = useState<readonly SelectOptionType[]>([]);

<SelectInput
  instanceId="multi-select"
  label="Select your favorite toppings"
  options={options}
  value={multipleValues}
  onChange={(value) => setMultipleValues(value as readonly SelectOptionType[])}
  isMulti
  isSearchable
  placeholder="Select toppings..."
/>`}
        />

        {/* Select with Error */}
        <h4
          className={cn(
            "text-xl font-semibold mt-8 mb-3",
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          )}
        >
          Select with Error
        </h4>
        <div
          className={cn(
            "border rounded-lg p-4 mb-6",
            theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
          )}
        >
          <SelectInput
            instanceId="error-select"
            label="Your selection"
            options={options}
            error="This field is required."
            placeholder="Make a selection..."
          />
        </div>
        <CodeBlock
          code={`<SelectInput
  instanceId="error-select"
  label="Your selection"
  options={options}
  error="This field is required."
  placeholder="Make a selection..."
/>`}
        />

        {/* Custom Styling */}
        <h4
          className={cn(
            "text-xl font-semibold mt-8 mb-3",
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          )}
        >
          Custom Styling
        </h4>
        <div
          className={cn(
            "border rounded-lg p-4 mb-6",
            theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
          )}
        >
          <SelectInput
            instanceId="custom-select"
            label="Your selection"
            options={options}
            placeholder="Custom styled select..."
            labelClassName="font-bold text-lg"
            customClassNames={{
              control: ({ isFocused }) =>
                cn(
                  "!w-full !border !rounded-lg p-2 !shadow-md !sm:text-sm !min-h-[38px]",
                  isFocused ? "border-info !ring-1 !ring-info" : "!border-info"
                ),
              option: ({ isFocused, isSelected }) =>
                `!px-4 !py-2 !cursor-pointer ${
                  isSelected
                    ? "!bg-info !text-white"
                    : isFocused
                    ? "!bg-info/30"
                    : "!bg-white"
                }`,
            }}
          />
        </div>
        <CodeBlock
          code={`<SelectInput
  instanceId="custom-select"
  label="Your selection"
  options={options}
  placeholder="Custom styled select..."
  labelClassName="font-bold text-lg"
  customClassNames={{
    control: ({ isFocused }) =>
      cn(
        "!w-full !border !rounded-lg p-2 !shadow-md !sm:text-sm !min-h-[38px]",
        isFocused ? "border-info !ring-1 !ring-info" : "!border-info"
      ),
    option: ({ isFocused, isSelected }) =>
      \`!px-4 !py-2 !cursor-pointer $\{isSelected
        ? "!bg-info !text-white"
        : isFocused
        ? "!bg-info/30"
        : "!bg-white"}\`,
  }}
/>`}
        />
      </div>
    </div>
  );
}