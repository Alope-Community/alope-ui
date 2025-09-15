"use client";

import CodeBlock from "../../components/CodeBlock";
import { Alert, Button } from "alope-ui";
import { useTheme } from "../../context/ThemeContext";

export default function AlertDocs() {
  const { theme } = useTheme();

  return (
    <div
      className={`prose max-w-none transition-colors ${
        theme === "dark" ? "prose-invert" : "prose-slate"
      }`}
    >
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Alert
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        The Alert component displays important messages to users with different
        severity levels.
      </p>

      {/* Import Section */}
      <h3 className="text-2xl font-semibold mt-10 mb-3 dark:text-gray-100">
        Import
      </h3>
      <CodeBlock code={`import { Alert } from "alope-ui";`} />

      {/* Props Section */}
      <h3 className="text-2xl font-semibold mt-10 mb-3 dark:text-gray-100">
        Props
      </h3>
      <div
        className={`overflow-x-auto mb-10 border rounded-lg shadow-sm text-sm transition-colors ${
          theme === "dark"
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
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
              <td className="p-3 border font-mono">type</td>
              <td className="p-3 border">
                'success' | 'info' | 'warning' | 'error'
              </td>
              <td className="p-3 border">'info'</td>
              <td className="p-3 border">Alert severity type</td>
            </tr>
            <tr className={theme === "dark" ? "bg-gray-900" : "bg-white"}>
              <td className="p-3 border font-mono">title</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">""</td>
              <td className="p-3 border">Alert title</td>
            </tr>
            <tr className={theme === "dark" ? "bg-gray-900" : "bg-white"}>
              <td className="p-3 border font-mono">description</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">""</td>
              <td className="p-3 border">Alert description</td>
            </tr>
            <tr className={theme === "dark" ? "bg-gray-900" : "bg-white"}>
              <td className="p-3 border font-mono">icon</td>
              <td className="p-3 border">ReactNode</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Custom icon</td>
            </tr>
            <tr className={theme === "dark" ? "bg-gray-900" : "bg-white"}>
              <td className="p-3 border font-mono">action</td>
              <td className="p-3 border">ReactNode</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Action button or element</td>
            </tr>
            <tr className={theme === "dark" ? "bg-gray-900" : "bg-white"}>
              <td className="p-3 border font-mono">withClose</td>
              <td className="p-3 border">boolean</td>
              <td className="p-3 border">false</td>
              <td className="p-3 border">Show close button</td>
            </tr>
            <tr className={theme === "dark" ? "bg-gray-900" : "bg-white"}>
              <td className="p-3 border font-mono">onClose</td>
              <td className="p-3 border">function</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Close callback</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Examples Section */}
      <h3 className="text-2xl font-semibold mt-10 mb-3 dark:text-gray-100">
        Basic Usage
      </h3>
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

      <h3 className="text-2xl font-semibold mt-10 mb-3 dark:text-gray-100">
        Alert Types
      </h3>
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
        code={`<Alert
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
/>`}
      />

      <h3 className="text-2xl font-semibold mt-10 mb-3 dark:text-gray-100">
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
  icon={/* ... */}
/>`}
      />

      <h3 className="text-2xl font-semibold mt-10 mb-3 dark:text-gray-100">
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
  action={/* ... */}
/>`}
      />

      <h3 className="text-2xl font-semibold mt-10 mb-3 dark:text-gray-100">
        Dismissible Alert
      </h3>
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
/>`}
      />
    </div>
  );
}