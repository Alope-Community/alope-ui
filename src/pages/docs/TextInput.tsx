"use client";

import CodeBlock from "../../components/CodeBlock";
import { TextInput } from "alope-ui";
import { useTheme } from "../../context/ThemeContext";

export default function TextInputDocs() {
  const { theme } = useTheme();

  return (
    <div
      className={`prose max-w-none ${
        theme === "dark" ? "prose-invert text-gray-100" : "prose-slate text-gray-900"
      }`}
    >
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
        provides a text input field for users to enter textual information such
        as names, emails, or any short form data.
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
      <div className="overflow-x-auto mb-10">
        <table
          className={`w-full border rounded-lg shadow-sm text-sm ${
            theme === "dark" ? "border-gray-700" : "border-gray-200"
          }`}
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
                "id",
                "string",
                "required",
                "Unique identifier for the input element",
              ],
              ["name", "string", "required", "Input name attribute"],
              [
                "label",
                "string",
                "undefined",
                "Label text displayed above the input",
              ],
              [
                "placeholder",
                "string",
                "undefined",
                "Placeholder text for guidance",
              ],
              [
                "error",
                "string",
                "undefined",
                "Error message to display below the input",
              ],
              ["disabled", "boolean", "false", "Disable the input field"],
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
          theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
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
          theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
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
          theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
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
          theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
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
  );
}