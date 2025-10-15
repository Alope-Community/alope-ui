"use client";

import { useState } from "react";
import { Button, Offcanvas } from "alope-ui";
import CodeBlock from "../../../components/CodeBlock";
import { useTheme } from "../../../context/ThemeContext";

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

  <div
    className={`overflow-x-auto mb-10 border rounded-lg shadow-sm text-sm transition-colors ${
      theme === "dark"
        ? "bg-gray-800 border-gray-700"
        : "bg-gray-50 border-gray-200"
    }`}
  ></div>;

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
        <h3 className="text-2xl font-semibold mb-3">Props</h3>
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
                  "isOpen",
                  "boolean",
                  "false",
                  "Controls visibility of the offcanvas",
                ],
                [
                  "onClose",
                  "() => void",
                  "required",
                  "Callback when offcanvas closes",
                ],
                ["title", "string", "undefined", "Offcanvas header title"],
                ["position", "'left' | 'right'", "'left'", "Slide position"],
                ["children", "ReactNode", "undefined", "Offcanvas content"],
                ["className", "string", '""', "Custom container class"],
                ["titleClassName", "string", '""', "Custom title class"],
                [
                  "closeButtonClassName",
                  "string",
                  '""',
                  "Custom close button class",
                ],
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
              This is the content of the offcanvas with that slides in from the
              right.
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
  <p>
    This is the content of the offcanvas with that slides in from the right.
  </p>
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
        </Preview>
        <CodeBlock
          code={`const [isCustomOpen, setIsCustomOpen] = useState(false);

<Button onClick={() => setIsCustomOpen(true)}>Open Custom Offcanvas</Button>

<Offcanvas
  isOpen={isRightOpen}
  onClose={() => setIsRightOpen(false)}
  title="Right Offcanvas"
  position="right"
  className="bg-primary-700"
  titleClassName="text-2xl font-bold text-white"
  closeButtonClassName="text-white hover:text-white/20"
>
  <div className="text-white">
    <p>This is the content of the offcanvas with custom styling.</p>
    <p>
      You can put any content here, such as text, forms, or other components.
    </p>
  </div>
</Offcanvas>`}
        />
      </div>
    </div>
  );
}
