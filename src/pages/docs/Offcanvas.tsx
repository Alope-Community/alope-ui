"use client";

import { useState } from "react";
import { Button, Offcanvas } from "alope-ui";
import CodeBlock from "../../components/CodeBlock";
import { useTheme } from "../../context/ThemeContext";

export default function OffcanvasDocs() {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);
  const [isCustomOpen, setIsCustomOpen] = useState(false);

  const { theme } = useTheme();

  // wrapper preview
  const Preview = ({ children }: { children: React.ReactNode }) => (
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

  // wrapper table
  const TableWrapper = ({ children }: { children: React.ReactNode }) => (
    <div
      className={`overflow-x-auto mb-10 border rounded-lg shadow-sm text-sm transition-colors ${
        theme === "dark"
          ? "bg-gray-800 border-gray-700"
          : "bg-gray-50 border-gray-200"
      }`}
    >
      <table className="w-full">{children}</table>
    </div>
  );

  return (
    <div
      className={`prose max-w-none transition-colors ${
        theme === "dark"
          ? "prose-invert"
          : "prose-slate prose-headings:text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Offcanvas</h2>
        <p>
          The Offcanvas component provides a sliding panel for displaying hidden
          content like menus or sidebars that slide in from the side.
        </p>

        {/* Import Section */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
        <CodeBlock code={`import { Offcanvas } from "alope-ui";`} />

        {/* Props Section */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Props</h3>
        <TableWrapper>
          <thead className={theme === "dark" ? "bg-gray-700" : "bg-gray-100"}>
            <tr>
              <th className="p-3 border">Prop</th>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Default</th>
              <th className="p-3 border">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["isOpen", "boolean", "false", "Controls visibility of the offcanvas"],
              ["onClose", "() => void", "required", "Callback when offcanvas closes"],
              ["title", "string", "undefined", "Offcanvas header title"],
              ["position", "'left' | 'right'", "'left'", "Slide position"],
              ["children", "ReactNode", "undefined", "Offcanvas content"],
              ["className", "string", '""', "Custom container class"],
              ["titleClassName", "string", '""', "Custom title class"],
              ["closeButtonClassName", "string", '""', "Custom close button class"],
            ].map(([prop, type, def, desc], i) => (
              <tr
                key={i}
                className={theme === "dark" ? "bg-gray-900" : "bg-white"}
              >
                <td className="p-3 border font-mono">{prop}</td>
                <td className="p-3 border">{type}</td>
                <td className="p-3 border">{def}</td>
                <td className="p-3 border">{desc}</td>
              </tr>
            ))}
          </tbody>
        </TableWrapper>

        {/* Examples Section */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Offcanvas</h3>
        <Preview>
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
        </Preview>
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
        <Preview>
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
        </Preview>
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
        <Preview>
          <Button onClick={() => setIsCustomOpen(true)}>
            Open Custom Offcanvas
          </Button>
          <Offcanvas
            isOpen={isCustomOpen}
            onClose={() => setIsCustomOpen(false)}
            title="Right Offcanvas"
            position="right"
            className={`${
              theme === "dark" ? "bg-gray-900" : "bg-primary-700"
            }`}
            titleClassName="text-2xl font-bold text-white"
            closeButtonClassName="text-white hover:text-white/80"
          >
            <div className="text-white">
              <p>This is the content of the offcanvas with custom styling.</p>
              <p>
                You can put any content here, such as text, forms, or other
                components.
              </p>
            </div>
          </Offcanvas>
        </Preview>
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
  closeButtonClassName="text-white hover:text-white/80"
>
  <div className="text-white">
    <p>This is the content of the offcanvas with custom styling.</p>
    <p>You can put any content here, such as text, forms, or other components.</p>
  </div>
</Offcanvas>`}
        />
      </div>
    </div>
  );
}