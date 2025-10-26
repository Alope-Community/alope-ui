"use client";

import CodeBlock from "../../../components/CodeBlock";
import { Alert, Button } from "alope-ui";
import { useTheme } from "../../../context/ThemeContext";

export default function AlertDocs() {
  const { theme } = useTheme();

  return (
    <div
      className={`prose max-w-none transition-colors ${
        theme === "dark"
          ? "prose-invert"
          : "prose-slate prose-headings:text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Alert</h2>
        <p>
          The Alert component displays important messages to users with
          different severity levels.
        </p>

        {/* Import Section */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
        <CodeBlock code={`import { Alert } from "alope-ui";`} />

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
                  "type",
                  "'success' | 'info' | 'warning' | 'error'",
                  "'info'",
                  "Alert severity type",
                ],
                ["title", "string", `""`, "Alert title"],
                ["description", "string", `""`, "Alert description"],
                ["icon", "ReactNode", "undefined", "Custom icon"],
                [
                  "action",
                  "ReactNode",
                  "undefined",
                  "Action button or element",
                ],
                ["withClose", "boolean", "false", "Show close button"],
                ["onClose", "function", "undefined", "Close callback"],
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
        <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Usage</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Alert
            title="Welcome!"
            description="Thanks for choosing ALOPE UI for your project."
          />
        </div>
        <CodeBlock
          code={`<Alert
  title="Welcome!"
  description="Thanks for choosing ALOPE UI for your project."
/>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">Alert Types</h3>
        <div
          className={`border rounded-lg p-4 mb-6 space-y-4 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Alert
            type="success"
            title="Success!"
            description="Your changes have been saved successfully."
          />
          <Alert
            type="info"
            title="Information"
            description="Here's some helpful information for you."
          />
          <Alert
            type="warning"
            title="Warning"
            description="Please review your input before proceeding."
          />
          <Alert
            type="error"
            title="Error"
            description="Something went wrong. Please try again."
          />
        </div>
        <CodeBlock
          code={`{
  /* Success Alert */
}
<Alert
  type="success"
  title="Success!"
  description="Your changes have been saved successfully."
/>;

{
  /* Info Alert */
}
<Alert
  type="info"
  title="Information"
  description="Here's some helpful information for you."
/>;

{
  /* Warning Alert */
}
<Alert
  type="warning"
  title="Warning"
  description="Please review your input before proceeding."
/>;

{
  /* Error Alert */
}
<Alert
  type="error"
  title="Error"
  description="Something went wrong. Please try again."
/>;`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Alert with Custom Icon
        </h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Alert
            type="warning"
            title="Important Notice"
            description="This action cannot be undone."
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                />
              </svg>
            }
          />
        </div>
        <CodeBlock
          code={`<Alert
  type="warning"
  title="Important Notice"
  description="This action cannot be undone."
  icon={
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
      />
    </svg>
  }
/>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Alert with Action Button
        </h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Alert
            type="info"
            title="Update Available"
            description="A new version of the application is available."
            action={
              <Button size="sm" variantType="info">
                Update Now
              </Button>
            }
          />
        </div>
        <CodeBlock
          code={`<Alert
  type="info"
  title="Update Available"
  description="A new version of the application is available."
  action={
    <Button size="sm" variantType="info">
      Update Now
    </Button>
  }
/>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">Dismissible Alert</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Alert
            withClose
            type="success"
            title="Success!"
            description="Your profile has been updated successfully."
          />
        </div>
        <CodeBlock
          code={`<Alert
  withClose
  type="success"
  title="Success!"
  description="Your profile has been updated successfully."
  onClose={() => console.log("Alert closed")}
/>`}
        />
      </div>
    </div>
  );
}
