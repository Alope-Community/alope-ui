"use client";

import CodeBlock from "../../../components/CodeBlock";
import { TextInput } from "alope-ui";
import { useTheme } from "../../../context/ThemeContext";

export default function TextInputDocs() {
  const { theme } = useTheme();

  return (
    <div
      className={`prose max-w-none ${
        theme === "dark"
          ? "prose-invert text-gray-100"
          : "prose-slate text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Title */}
        <h2
          className={`text-4xl font-bold mb-6 ${
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Text Input
        </h2>
        <p
          className={`mb-8 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          The <code className="font-mono text-sm">TextInput</code> component
          provides a text input field for users to enter textual information
          such as names, emails, or any short form data.
        </p>

        {/* Import Section */}
        <h3
          className={`text-2xl font-semibold mt-10 mb-3 ${
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Import
        </h3>
        <CodeBlock code={`import { TextInput } from "alope-ui";`} />

        {/* Props Section */}
        <h3
          className={`text-2xl font-semibold mt-10 mb-3 ${
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Props
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
                ["id", "string", "required", "Input element ID"],
                ["name", "string", "required", "Input name attribute"],
                ["label", "string", "undefined", "Label text for the input"],
                ["placeholder", "string", "undefined", "Placeholder text"],
                ["error", "string", "undefined", "Error message to display"],
                ["disabled", "boolean", "false", "Disable the input"],
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
        <h3
          className={`text-2xl font-semibold mt-10 mb-3 ${
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Examples
        </h3>

        {/* Basic */}
        <h4
          className={`text-xl font-semibold mt-8 mb-3 ${
            theme === "dark" ? "text-gray-200" : "text-gray-900"
          }`}
        >
          Basic TextInput
        </h4>
        <div
          className={`border rounded-lg p-4 mb-6 ${
            theme === "dark"
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <TextInput id="basic" name="basic" placeholder="Enter text here" />
        </div>
        <CodeBlock
          code={`import { TextInput } from "alope-ui";

const BasicExample = () => {
  return <TextInput id="basic" name="basic" placeholder="Enter text here" />;
};`}
        />

        {/* With Label */}
        <h4
          className={`text-xl font-semibold mt-8 mb-3 ${
            theme === "dark" ? "text-gray-200" : "text-gray-900"
          }`}
        >
          With Label
        </h4>
        <div
          className={`border rounded-lg p-4 mb-6 ${
            theme === "dark"
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <TextInput
            id="with-label"
            name="with-label"
            label="Your Name"
            placeholder="John Doe"
          />
        </div>
        <CodeBlock
          code={`<TextInput
  id="with-label"
  name="with-label"
  label="Your Name"
  placeholder="John Doe"
/>`}
        />

        {/* With Error */}
        <h4
          className={`text-xl font-semibold mt-8 mb-3 ${
            theme === "dark" ? "text-red-400" : "text-red-600"
          }`}
        >
          With Error
        </h4>
        <div
          className={`border rounded-lg p-4 mb-6 ${
            theme === "dark"
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <TextInput
            id="with-error"
            name="with-error"
            label="Email Address"
            placeholder="you@example.com"
            error="Please enter a valid email."
          />
        </div>
        <CodeBlock
          code={`<TextInput
  id="with-error"
  name="with-error"
  label="Email Address"
  placeholder="you@example.com"
  error="Please enter a valid email."
/>`}
        />

        {/* Disabled */}
        <h4
          className={`text-xl font-semibold mt-8 mb-3 ${
            theme === "dark" ? "text-gray-400" : "text-gray-700"
          }`}
        >
          Disabled State
        </h4>
        <div
          className={`border rounded-lg p-4 mb-6 ${
            theme === "dark"
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <TextInput
            id="disabled"
            name="disabled"
            label="Disabled Input"
            placeholder="You can't type here"
            disabled
          />
        </div>
        <CodeBlock
          code={`<TextInput
  id="disabled"
  name="disabled"
  label="Disabled Input"
  placeholder="You can't type here"
  disabled
/>`}
        />
      </div>
    </div>
  );
}
