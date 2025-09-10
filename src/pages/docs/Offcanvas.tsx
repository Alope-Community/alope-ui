"use client";

import { useState } from "react";
import { Button, Offcanvas } from "alope-ui";
import CodeBlock from "../../components/CodeBlock";

export default function OffcanvasDocs() {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);
  const [isCustomOpen, setIsCustomOpen] = useState(false);

  return (
    <div className="prose prose-slate max-w-none">
      <h2 className="text-4xl font-bold mb-6 text-gray-900">Offcanvas</h2>
      <p className="text-gray-600 mb-8">
        The Offcanvas component provides a sliding panel for displaying hidden
        content like menus or sidebars that slide in from the side.
      </p>

      {/* Import Section */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
      <CodeBlock code={`import { Offcanvas } from "alope-ui";`} />

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
              <td className="p-3 border font-mono">isOpen</td>
              <td className="p-3 border">boolean</td>
              <td className="p-3 border">false</td>
              <td className="p-3 border">
                Controls visibility of the offcanvas
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">onClose</td>
              <td className="p-3 border">() =&gt; void</td>
              <td className="p-3 border">required</td>
              <td className="p-3 border">Callback when offcanvas closes</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">title</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Offcanvas header title</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">position</td>
              <td className="p-3 border">'left' | 'right'</td>
              <td className="p-3 border">'left'</td>
              <td className="p-3 border">Slide position</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">children</td>
              <td className="p-3 border">ReactNode</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Offcanvas content</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">className</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">""</td>
              <td className="p-3 border">Custom container class</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">titleClassName</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">""</td>
              <td className="p-3 border">Custom title class</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">closeButtonClassName</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">""</td>
              <td className="p-3 border">Custom close button class</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Examples Section */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Offcanvas</h3>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
        <Button onClick={() => setIsLeftOpen(true)}>Open Offcanvas</Button>
        <Offcanvas
          isOpen={isLeftOpen}
          onClose={() => setIsLeftOpen(false)}
          title="Left Offcanvas"
          position="left"
        >
          <p>
            This is the content of the offcanvas that slides in from the left.
          </p>
        </Offcanvas>
      </div>
      <CodeBlock
        code={`const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Open Offcanvas</Button>

<Offcanvas
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Left Offcanvas"
  position="left"
>
  <p>This is the content of the offcanvas that slides in from the left.</p>
</Offcanvas>`}
      />

      <h3 className="text-2xl font-semibold mt-10 mb-3">
        Right Position Offcanvas
      </h3>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
        <Button onClick={() => setIsRightOpen(true)}>
          Open Right Offcanvas
        </Button>
        <Offcanvas
          isOpen={isRightOpen}
          onClose={() => setIsRightOpen(false)}
          title="Right Offcanvas"
          position="right"
        >
          <p>
            This is the content of the offcanvas that slides in from the right.
          </p>
        </Offcanvas>
      </div>
      <CodeBlock
        code={`const [isRightOpen, setIsRightOpen] = useState(false);

<Button onClick={() => setIsRightOpen(true)}>Open Right Offcanvas</Button>

<Offcanvas
  isOpen={isRightOpen}
  onClose={() => setIsRightOpen(false)}
  title="Right Offcanvas"
  position="right"
>
  <p>This is the content of the offcanvas that slides in from the right.</p>
</Offcanvas>`}
      />

      <h3 className="text-2xl font-semibold mt-10 mb-3">Custom Styling</h3>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
        <Button onClick={() => setIsCustomOpen(true)}>
          Open Custom Offcanvas
        </Button>
        <Offcanvas
          isOpen={isCustomOpen}
          onClose={() => setIsCustomOpen(false)}
          title="Right Offcanvas"
          position="right"
          className="bg-primary-700"
          titleClassName="text-2xl font-bold text-white"
          closeButtonClassName="text-white hover:text-white/20"
        >
          <div className="text-white">
            <p>This is the content of the offcanvas with custom styling.</p>
            <p>
              You can put any content here, such as text, forms, or other
              components.
            </p>
          </div>
        </Offcanvas>
      </div>
      <CodeBlock
        code={`const [isCustomOpen, setIsCustomOpen] = useState(false);

<Button onClick={() => setIsCustomOpen(true)}>Open Custom Offcanvas</Button>

<Offcanvas
  isOpen={isCustomOpen}
  onClose={() => setIsCustomOpen(false)}
  title="Right Offcanvas"
  position="right"
  className="bg-primary-700"
  titleClassName="text-2xl font-bold text-white"
  closeButtonClassName="text-white hover:text-white/20"
>
  <div className="text-white">
    <p>This is the content of the offcanvas with custom styling.</p>
    <p>You can put any content here, such as text, forms, or other components.</p>
  </div>
</Offcanvas>`}
      />
    </div>
  );
}
