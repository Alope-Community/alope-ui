"use client";

import CodeBlock from "../../components/CodeBlock";
import { Button } from "alope-ui";

function Preview({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 mb-6 border border-gray-200 rounded-lg bg-white shadow-sm">
      {children}
    </div>
  );
}

export default function ButtonDocs() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2 className="text-4xl font-bold mb-6 text-gray-900">Button</h2>
      <p className="text-gray-600 mb-8">
        The Button component provides clickable elements for user interactions
        with various styles and states.
      </p>

      {/* Import Section */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
      <CodeBlock code={`import { Button } from "alope-ui";`} />

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
              <td className="p-3 border font-mono">variant</td>
              <td className="p-3 border">
                'solid' | 'outline' | 'ghost' | 'plain'
              </td>
              <td className="p-3 border">'solid'</td>
              <td className="p-3 border">Button style variant</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">variantType</td>
              <td className="p-3 border">
                'primary' | 'secondary' | 'success' | 'info' | 'warning' |
                'error'
              </td>
              <td className="p-3 border">'primary'</td>
              <td className="p-3 border">Button color theme</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">size</td>
              <td className="p-3 border">'sm' | 'md' | 'lg'</td>
              <td className="p-3 border">'md'</td>
              <td className="p-3 border">Button size</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">radius</td>
              <td className="p-3 border">'regular' | 'stadium'</td>
              <td className="p-3 border">'regular'</td>
              <td className="p-3 border">Border radius style</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">fullWidth</td>
              <td className="p-3 border">boolean</td>
              <td className="p-3 border">false</td>
              <td className="p-3 border">Full width button</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">disabled</td>
              <td className="p-3 border">boolean</td>
              <td className="p-3 border">false</td>
              <td className="p-3 border">Disabled state</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">to</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Link destination</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">prefixIcon</td>
              <td className="p-3 border">ReactNode</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Icon before text</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">suffixIcon</td>
              <td className="p-3 border">ReactNode</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Icon after text</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">onClick</td>
              <td className="p-3 border">function</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Click handler</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">children</td>
              <td className="p-3 border">ReactNode</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Button content</td>
            </tr>
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
  <Button radius="regular">Regular Radius</Button>
  <Button radius="stadium">Stadium Radius</Button>
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

      <h3 className="text-2xl font-semibold mt-10 mb-3">Buttons with Icons</h3>
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
        <Button to="#" variantType="info">
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
              prefixIcon={<span>➕</span>}
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
  );
}
