"use client";

import { useState } from "react";
import CodeBlock from "../../../components/CodeBlock";
import { Textarea } from "alope-ui";
import { useTheme } from "../../../context/ThemeContext";

export default function TextareaDocs() {
  const { theme } = useTheme();

  return (
    <div
      className={`transition-colors ${
        theme === "dark"
          ? "prose prose-invert max-w-none"
          : "prose prose-slate prose-headings:text-gray-900 max-w-none"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-6">Textarea</h2>
        <p>
          The <code>Textarea</code> component provides a multi-line text input
          with optional auto-resize functionality, label, error messages, and
          dark mode support.
        </p>

        {/* Import */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
        <CodeBlock
          code={`import { Textarea } from "alope-ui";
import type { TextareaType } from "alope-ui";`}
        />

        {/* Props Table */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Props</h3>
        <div className="overflow-x-auto border border-gray-200 dark:border-gray-800 rounded-lg">
            <table className="w-full text-sm text-left">
              <thead
                className={`${
                  theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-700"
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
                  ["label", "string", "undefined", "Label text displayed above textarea"],
                  ["error", "string", "undefined", "Error message displayed below textarea"],
                  ["autoResize", "boolean", "false", "Enable auto-resize based on content"],
                  ["customClassName", "string", '""', "Custom CSS class for textarea element"],
                  ["...props", "InputHTMLAttributes<HTMLTextAreaElement>", "-", "All standard HTML textarea attributes"],
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


        {/* Basic Textarea */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Textarea</h3>
        <ExampleBlock theme={theme}>
          <BasicExample />
        </ExampleBlock>
        <CodeBlock
          code={`import { useState } from "react";
import { Textarea } from "alope-ui";

const BasicExample = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter your text here..."
    />
  );
};`}
        />

        {/* With Label */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">With Label</h3>
        <ExampleBlock theme={theme}>
          <LabelExample />
        </ExampleBlock>
        <CodeBlock
          code={`<Textarea
  label="Description"
  name="description"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Enter description..."
/>`}
        />

        {/* With Error */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">With Error Message</h3>
        <ExampleBlock theme={theme}>
          <ErrorExample />
        </ExampleBlock>
        <CodeBlock
          code={`const [description, setDescription] = useState("");
const [error, setError] = useState("");

const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  setDescription(e.target.value);
  if (e.target.value.length < 10) {
    setError("Description must be at least 10 characters");
  } else {
    setError("");
  }
};

<Textarea
  label="Description"
  value={description}
  onChange={handleChange}
  error={error}
  placeholder="Enter at least 10 characters..."
/>;`}
        />

        {/* Auto Resize */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Auto-Resize Textarea</h3>
        <ExampleBlock theme={theme}>
          <AutoResizeExample />
        </ExampleBlock>
        <CodeBlock
          code={`<Textarea
  label="Auto-resizing textarea"
  autoResize
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="This textarea grows as you type..."
/>`}
        />

        {/* Disabled */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Disabled State</h3>
        <ExampleBlock theme={theme}>
          <Textarea label="Disabled textarea" value="This textarea is disabled" disabled />
        </ExampleBlock>
        <CodeBlock
          code={`<Textarea
  label="Disabled textarea"
  value="This textarea is disabled"
  disabled
/>;`}
        />

        {/* Custom Styling */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Custom Styling</h3>
        <ExampleBlock theme={theme}>
          <CustomStyledExample />
        </ExampleBlock>
        <CodeBlock
          code={`<Textarea
  label="Custom styled textarea"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  customClassName="border-2 border-blue-500 focus:ring-blue-600 rounded-lg"
  placeholder="Custom styled..."
/>;`}
        />

        {/* With Rows */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">With Rows</h3>
        <ExampleBlock theme={theme}>
          <RowsExample />
        </ExampleBlock>
        <CodeBlock
          code={`<Textarea
  label="Fixed height textarea"
  rows={8}
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="8 rows high..."
/>;`}
        />

        {/* Complete Example */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Complete Example</h3>
        <ExampleBlock theme={theme}>
          <CompleteExample />
        </ExampleBlock>
        <CodeBlock
            code={`import { useState } from "react";
import { Textarea } from "alope-ui";

const CompleteExample = () => {
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (feedback.length < 20) {
      setError("Feedback must be at least 20 characters");
      return;
    }

    console.log("Feedback submitted:", feedback);
    setFeedback("");
    setError("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
    if (error && e.target.value.length >= 20) {
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Share Your Feedback</h2>

      <Textarea
        label="Feedback"
        name="feedback"
        value={feedback}
        onChange={handleChange}
        error={error}
        autoResize
        placeholder="Tell us what you think... (minimum 20 characters)"
        customClassName="mb-4"
      />

      <p className="text-sm text-gray-500 mb-4">
        Character count: {feedback.length}
      </p>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Submit Feedback
      </button>
    </form>
  );
};`}
        />

        {/* Form Example */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Form Integration Example</h3>
        <ExampleBlock theme={theme}>
          <FormExample />
        </ExampleBlock>
        <CodeBlock
            code={`import { useState } from "react";
import { Textarea } from "alope-ui";

const FormExample = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    comments: "",
  });

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  return (
    <div className="space-y-4 max-w-lg mx-auto p-6">
      <Textarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange("message")}
        placeholder="Your message..."
        rows={4}
      />

      <Textarea
        label="Additional Comments"
        name="comments"
        value={formData.comments}
        onChange={handleChange("comments")}
        placeholder="Any additional comments..."
        autoResize
      />
    </div>
  );
};`}
        />
      </div>
    </div>


  );
}

/* === Helper Wrapper for Consistent Theme Box === */
function ExampleBlock({ theme, children }: { theme: string; children: React.ReactNode }) {
  return (
    <div
      className={`border rounded-lg p-4 mb-6 transition-colors ${
        theme === "dark"
          ? "bg-gray-800 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      {children}
    </div>
  );
}

/* === Inline Examples === */
function BasicExample() {
  const [value, setValue] = useState("");
  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter your text here..."
    />
  );
}

function LabelExample() {
  const [value, setValue] = useState("");
  return (
    <Textarea
      label="Description"
      name="description"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter description..."
    />
  );
}

function ErrorExample() {
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
    setError(
      e.target.value.length < 10
        ? "Description must be at least 10 characters"
        : ""
    );
  };

  return (
    <Textarea
      label="Description"
      value={description}
      onChange={handleChange}
      error={error}
      placeholder="Enter at least 10 characters..."
    />
  );
}

function AutoResizeExample() {
  const [value, setValue] = useState("");
  return (
    <Textarea
      label="Auto-resizing textarea"
      autoResize
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="This textarea grows as you type..."
    />
  );
}

function CustomStyledExample() {
  const [value, setValue] = useState("");
  return (
    <Textarea
      label="Custom styled textarea"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      customClassName="border-2 border-blue-500 focus:ring-blue-600 rounded-lg"
      placeholder="Custom styled..."
    />
  );
}

function RowsExample() {
  const [value, setValue] = useState("");
  return (
    <Textarea
      label="Fixed height textarea"
      aria-rowspan={8}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="8 rows high..."
    />
  );
}

function CompleteExample() {
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (feedback.length < 20) {
      setError("Feedback must be at least 20 characters");
      return;
    }

    alert("Feedback submitted!");
    setFeedback("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <Textarea
        label="Feedback"
        name="feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        error={error}
        autoResize
        placeholder="Tell us what you think... (minimum 20 characters)"
        customClassName="mb-4"
      />
      <p className="text-sm text-gray-500 mb-4">
        Character count: {feedback.length}
      </p>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Submit Feedback
      </button>
    </form>

    
  );
}

function FormExample() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    comments: "",
  });

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  return (
    <div className="space-y-4 max-w-lg mx-auto p-6">
      <Textarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange("message")}
        placeholder="Your message..."
        aria-rowspan={4}
      />

      <Textarea
        label="Additional Comments"
        name="comments"
        value={formData.comments}
        onChange={handleChange("comments")}
        placeholder="Any additional comments..."
        autoResize
      />
    </div>
  );
}
