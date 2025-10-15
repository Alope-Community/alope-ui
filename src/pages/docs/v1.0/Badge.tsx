"use client";

import CodeBlock from "../../../components/CodeBlock";
import { Badge, Button, Card } from "alope-ui";
import { CheckIcon } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";

export default function BadgeDocs() {
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
        <h2 className="text-4xl font-bold mb-6">Badge</h2>
        <p>
          The Badge component is used to display small pieces of information
          like status, count, or labels.
        </p>

        {/* Import Section */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
        <CodeBlock code={`import { Badge } from "alope-ui";`} />

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
                  "variant",
                  "'default' | 'success' | 'info' | 'warning' | 'error'",
                  "'default'",
                  "Badge color variant",
                ],
                ["children", "ReactNode", "undefined", "Badge content"],
                ["isAbsolute", "boolean", "false", "Absolute positioning"],
                [
                  "position",
                  "'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'",
                  "'top-right'",
                  "Position when absolute",
                ],
                ["icon", "ReactNode", "undefined", "Custom icon"],
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
        <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Variants</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-gray-50 border-gray-200"
          }`}
        >
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
          </div>
        </div>
        <CodeBlock
          code={`<div className="flex flex-wrap gap-2">
  <Badge variant="default">Default</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="info">Info</Badge>
  <Badge variant="warning">Warning</Badge>
  <Badge variant="error">Error</Badge>
</div>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">Badge with Icon</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-gray-50 border-gray-200"
          }`}
        >
          <Badge variant="success" icon={<CheckIcon className="w-4 h-4" />}>
            Verified
          </Badge>
        </div>
        <CodeBlock
          code={`<Badge variant="success" icon={<CheckIcon className="w-4 h-4" />}>
  Verified
</Badge>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Absolute Positioning
        </h3>
        <p>Perfect for notification indicators or status markers:</p>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-gray-50 border-gray-200"
          }`}
        >
          <div className="relative inline-block">
            <Button>Messages</Button>
            <Badge variant="error" position="top-right" isAbsolute>
              3
            </Badge>
          </div>
        </div>
        <CodeBlock
          code={`<div className="relative inline-block">
  <Button>Messages</Button>
  <Badge variant="error" position="top-right" isAbsolute>
    3
  </Badge>
</div>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">
          All Position Examples
        </h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-gray-50 border-gray-200"
          }`}
        >
          <div className="grid grid-cols-2 gap-4 w-fit">
            <Card containerClassName="relative p-8 !bg-white dark:!bg-gray-900 text-gray-900 dark:text-gray-100">
              <Badge variant="success" position="top-left" isAbsolute>
                1
              </Badge>
              <span>Top Left</span>
            </Card>

            <Card containerClassName="relative p-8 !bg-white dark:!bg-gray-900 text-gray-900 dark:text-gray-100">
              <Badge variant="info" position="top-right" isAbsolute>
                2
              </Badge>
              <span>Top Right</span>
            </Card>

            <Card containerClassName="relative p-8 !bg-white dark:!bg-gray-900 text-gray-900 dark:text-gray-100">
              <Badge variant="warning" position="bottom-left" isAbsolute>
                3
              </Badge>
              <span>Bottom Left</span>
            </Card>

            <Card containerClassName="relative p-8 !bg-white dark:!bg-gray-900 text-gray-900 dark:text-gray-100">
              <Badge variant="error" position="bottom-right" isAbsolute>
                4
              </Badge>
              <span>Bottom Right</span>
            </Card>
          </div>
        </div>
        <CodeBlock
          code={`<div className="grid grid-cols-2 gap-4 w-fit">
  <Card containerClassName="relative p-8">
    <Badge variant="success" position="top-left" isAbsolute>
      1
    </Badge>
    <span>Top Left</span>
  </Card>

  <Card containerClassName="relative p-8">
    <Badge variant="info" position="top-right" isAbsolute>
      2
    </Badge>
    <span>Top Right</span>
  </Card>

  <Card containerClassName="relative p-8">
    <Badge variant="warning" position="bottom-left" isAbsolute>
      3
    </Badge>
    <span>Bottom Left</span>
  </Card>

  <Card containerClassName="relative p-8">
    <Badge variant="error" position="bottom-right" isAbsolute>
      4
    </Badge>
    <span>Bottom Right</span>
  </Card>
</div>`}
        />
      </div>
    </div>
  );
}
