"use client";

import CodeBlock from "../../components/CodeBlock";
import { Alert, Button } from "alope-ui";

export default function AlertDocs() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2 className="text-4xl font-bold mb-6 text-gray-900">Alert</h2>
      <p className="text-gray-600 mb-8">
        The Alert component displays important messages to users with different
        severity levels.
      </p>

      {/* Import Section */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
      <CodeBlock code={`import { Alert } from "alope-ui";`} />

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
            <tr className="bg-white">
              <td className="p-3 border font-mono">type</td>
              <td className="p-3 border">
                'success' | 'info' | 'warning' | 'error'
              </td>
              <td className="p-3 border">'info'</td>
              <td className="p-3 border">Alert severity type</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">title</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">""</td>
              <td className="p-3 border">Alert title</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">description</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">""</td>
              <td className="p-3 border">Alert description</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">icon</td>
              <td className="p-3 border">ReactNode</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Custom icon</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">action</td>
              <td className="p-3 border">ReactNode</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Action button or element</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">withClose</td>
              <td className="p-3 border">boolean</td>
              <td className="p-3 border">false</td>
              <td className="p-3 border">Show close button</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">onClose</td>
              <td className="p-3 border">function</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Close callback</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Examples Section */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Usage</h3>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
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
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6 space-y-4">
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

      <h3 className="text-2xl font-semibold mt-10 mb-3">
        Alert with Custom Icon
      </h3>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
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
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    </svg>
  }
/>`}
      />

      <h3 className="text-2xl font-semibold mt-10 mb-3">
        Alert with Action Button
      </h3>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
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
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
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
  );
}
