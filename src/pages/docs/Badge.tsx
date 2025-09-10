"use client";

import CodeBlock from "../../components/CodeBlock";
import { Badge, Button, Card } from "alope-ui";
import { CheckIcon } from "lucide-react";

export default function BadgeDocs() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2 className="text-4xl font-bold mb-6 text-gray-900">Badge</h2>
      <p className="text-gray-600 mb-8">
        The Badge component is used to display small pieces of information like
        status, count, or labels.
      </p>

      {/* Import Section */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
      <CodeBlock code={`import { Badge } from "alope-ui";`} />

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
                'default' | 'success' | 'info' | 'warning' | 'error'
              </td>
              <td className="p-3 border">'default'</td>
              <td className="p-3 border">Badge color variant</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">children</td>
              <td className="p-3 border">ReactNode</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Badge content</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">isAbsolute</td>
              <td className="p-3 border">boolean</td>
              <td className="p-3 border">false</td>
              <td className="p-3 border">Absolute positioning</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">position</td>
              <td className="p-3 border">
                'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
              </td>
              <td className="p-3 border">'top-right'</td>
              <td className="p-3 border">Position when absolute</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">icon</td>
              <td className="p-3 border">ReactNode</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Custom icon</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Examples Section */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Variants</h3>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
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
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
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
      <p className="text-gray-600 mb-2">
        Perfect for notification indicators or status markers:
      </p>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
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
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
        <div className="grid grid-cols-2 gap-4 w-fit">
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
  );
}
