"use client";

import CodeBlock from "../../components/CodeBlock";
import { TextInput } from "alope-ui";

export default function TextInputDocs() {
  return (
    <div className="prose prose-slate max-w-none">
      {/* Title */}
      <h2 className="text-4xl font-bold mb-6 text-gray-900">Text Input</h2>
      <p className="text-gray-600 mb-8">
        The <code className="font-mono text-sm">TextInput</code> component
        provides a text input field for users to enter textual information such
        as names, emails, or any short form data.
      </p>

      {/* Import Section */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
      <CodeBlock code={`import { TextInput } from "alope-ui";`} />

      {/* Props Section */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Props</h3>
      <div className="overflow-x-auto mb-10">
        <table className="w-full border border-gray-200 rounded-lg shadow-sm text-sm">
          <thead className="bg-gray-100">
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
              <tr key={prop} className="bg-white">
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
      <h3 className="text-2xl font-semibold mt-10 mb-3">Examples</h3>

      {/* Basic */}
      <h4 className="text-xl font-semibold mt-8 mb-3">Basic TextInput</h4>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
        <TextInput id="basic" name="basic" placeholder="Enter text here" />
      </div>
      <CodeBlock
        code={`import { TextInput } from "alope-ui";

const BasicExample = () => {
  return <TextInput id="basic" name="basic" placeholder="Enter text here" />;
};`}
      />

      {/* With Label */}
      <h4 className="text-xl font-semibold mt-8 mb-3">With Label</h4>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
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
      <h4 className="text-xl font-semibold mt-8 mb-3">With Error</h4>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
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
      <h4 className="text-xl font-semibold mt-8 mb-3">Disabled State</h4>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
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
