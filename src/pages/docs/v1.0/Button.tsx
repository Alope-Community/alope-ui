"use client";

import CodeBlock from "../../../components/CodeBlock";
import { Button } from "alope-ui";
import { useTheme } from "../../../context/ThemeContext";
import { PlusIcon } from "lucide-react";

function Preview({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <div
      className={`p-4 mb-6 border rounded-lg shadow-sm transition-colors ${
        theme === "dark"
          ? "bg-gray-800 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      {children}
    </div>
  );
}

export default function ButtonDocs() {
  const { theme } = useTheme();

  return (
    <div className="container mx-auto px-4">
      <div
        className={`prose max-w-none transition-colors ${
          theme === "dark"
            ? "prose-invert"
            : "prose-slate prose-headings:text-gray-900"
        }`}
      >
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">Button</h2>
        <p>
          The Button component provides clickable elements for user interactions
          with various styles and states.
        </p>

        {/* Import Section */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
        <CodeBlock code={`import { Button } from "alope-ui";`} />

        {/* Props Section */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Props</h3>
        <div className="overflow-x-auto border border-gray-200 dark:border-gray-800 rounded-lg">
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
                  "'solid' | 'outline' | 'ghost' | 'plain'",
                  "'solid'",
                  "Button style variant",
                ],
                [
                  "variantType",
                  "'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'",
                  "'primary'",
                  "Button color theme",
                ],
                ["size", "'sm' | 'md' | 'lg'", "'md'", "Button size"],
                [
                  "borderType",
                  "'regular' | 'stadium'",
                  "'regular'",
                  "Border radius style",
                ],
                ["fullWidth", "boolean", "false", "Full width button"],
                ["disabled", "boolean", "false", "Disabled state"],
                ["to", "string", "undefined", "Link destination"],
                ["prefixIcon", "ReactNode", "undefined", "Icon before text"],
                ["suffixIcon", "ReactNode", "undefined", "Icon after text"],
                ["onClick", "function", "undefined", "Click handler"],
                ["children", "ReactNode", "undefined", "Button content"],
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
        <h3 className="text-2xl font-semibold mt-10 mb-3">Button Variants</h3>
        <Preview>
          <div className="flex flex-wrap gap-2">
            <Button variant="solid">Solid Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="plain">Plain Button</Button>
          </div>
        </Preview>
        <CodeBlock
          code={`<div className="flex flex-wrap gap-2">
  <Button variant="solid">Solid Button</Button>
  <Button variant="outline">Outline Button</Button>
  <Button variant="ghost">Ghost Button</Button>
  <Button variant="plain">Plain Button</Button>
</div>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Button Types (Colors)
        </h3>
        <Preview>
          <div className="flex flex-wrap gap-2">
            <Button variantType="primary">Primary</Button>
            <Button variantType="secondary">Secondary</Button>
            <Button variantType="success">Success</Button>
            <Button variantType="info">Info</Button>
            <Button variantType="warning">Warning</Button>
            <Button variantType="error">Error</Button>
          </div>
        </Preview>
        <CodeBlock
          code={`<div className="flex flex-wrap gap-2">
  <Button variantType="primary">Primary</Button>
  <Button variantType="secondary">Secondary</Button>
  <Button variantType="success">Success</Button>
  <Button variantType="info">Info</Button>
  <Button variantType="warning">Warning</Button>
  <Button variantType="error">Error</Button>
</div>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">Button Sizes</h3>
        <Preview>
          <div className="flex flex-wrap gap-2 items-center">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </Preview>
        <CodeBlock
          code={`<div className="flex flex-wrap gap-2 items-center">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</div>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">Button Radius</h3>
        <Preview>
          <div className="flex flex-wrap gap-2">
            <Button borderType="regular">Regular Radius</Button>
            <Button borderType="stadium">Stadium Radius</Button>
          </div>
        </Preview>
        <CodeBlock
          code={`<div className="flex flex-wrap gap-2">
  <Button borderType="regular">Regular Radius</Button>
  <Button borderType="stadium">Stadium Radius</Button>
</div>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">Button States</h3>
        <Preview>
          <div className="flex flex-wrap gap-2">
            <Button>Normal Button</Button>
            <Button disabled>Disabled Button</Button>
            <Button fullWidth>Full Width Button</Button>
          </div>
        </Preview>
        <CodeBlock
          code={`<div className="flex flex-wrap gap-2">
  <Button>Normal Button</Button>
  <Button disabled>Disabled Button</Button>
  <Button fullWidth>Full Width Button</Button>
</div>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Buttons with Icons
        </h3>
        <Preview>
          <div className="flex flex-wrap gap-2">
            <Button
              prefixIcon={
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              }
            >
              Search
            </Button>

            <Button
              suffixIcon={
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              }
            >
              Continue
            </Button>
          </div>
        </Preview>
        <CodeBlock
          code={`<div className="flex flex-wrap gap-2">
  <Button
    prefixIcon={
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    }
  >
    Search
  </Button>

  <Button
    suffixIcon={
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    }
  >
    Continue
  </Button>
</div>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">Link Button</h3>
        <Preview>
          <Button to="/dashboard" variantType="info">
            Go to Dashboard
          </Button>
        </Preview>
        <CodeBlock
          code={`<Button to="/dashboard" variantType="info">
  Go to Dashboard
</Button>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">Complete Example</h3>
        <Preview>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button
                variant="solid"
                variantType="primary"
                size="lg"
                prefixIcon={<PlusIcon />}
                onClick={() => alert("Button clicked!")}
              >
                Create New
              </Button>

              <Button variant="outline" variantType="secondary" size="lg">
                Cancel
              </Button>
            </div>
          </div>
        </Preview>
        <CodeBlock
          code={`<div className="space-y-4">
  <div className="flex flex-wrap gap-2">
    <Button
      variant="solid"
      variantType="primary"
      size="lg"
      prefixIcon={<PlusIcon />}
      onClick={() => alert("Button clicked!")}
    >
      Create New
    </Button>

    <Button variant="outline" variantType="secondary" size="lg">
      Cancel
    </Button>
  </div>
</div>`}
        />
      </div>
    </div>
  );
}
