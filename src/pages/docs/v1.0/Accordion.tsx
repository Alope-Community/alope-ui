"use client";

import { useState } from "react";
import CodeBlock from "../../../components/CodeBlock";
import { Accordion } from "alope-ui";
import { useTheme } from "../../../context/ThemeContext";

export default function AccordionDocs() {
  const [openIndex, setOpenIndex] = useState<number | number[] | null>(0);
  const { theme } = useTheme();

  const accordionData = [
    {
      label: "What is ALOPE UI?",
      description:
        "ALOPE UI is a modern React component library that helps you build beautiful user interfaces quickly.",
    },
    {
      label: "How do I install it?",
      description:
        "You can install ALOPE UI using npm, yarn, or pnpm. Check the installation section for details.",
    },
    {
      label: "Is it free to use?",
      description:
        "Yes! ALOPE UI is completely free and open-source under the MIT license.",
    },
  ];

  return (
    <div
      className={`transition-colors ${
        theme === "dark"
          ? "prose prose-invert max-w-none"
          : "prose prose-slate prose-headings:text-gray-900 max-w-none"
      }`}
    >
      {/* Wrapper container supaya responsif */}
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-6">Accordion</h2>
        <p>
          The Accordion component allows users to show and hide sections of
          related content on a page.
        </p>

        {/* Import */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
        <CodeBlock code={`import { Accordion } from "alope-ui";`} />

        {/* Props */}
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
                ["data", "AccordionItem[]", "[]", "Array of accordion items"],
                [
                  "single",
                  "boolean",
                  "true",
                  "Allow only one panel open at a time",
                ],
                [
                  "openIndex",
                  "number | number[]",
                  "undefined",
                  "Controlled open state",
                ],
                [
                  "onToggleItem",
                  "function",
                  "undefined",
                  "Callback when item is toggled",
                ],
                ["icon", "function", "undefined", "Custom icon renderer"],
                [
                  "labelClassName",
                  "string",
                  `""`,
                  "Custom CSS class for labels",
                ],
                [
                  "labelContainerClassName",
                  "string",
                  `""`,
                  "Custom CSS class for label containers",
                ],
                [
                  "descriptionClassName",
                  "string",
                  `""`,
                  "Custom CSS class for descriptions",
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

        {/* Basic Usage */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Usage</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Accordion
            data={accordionData}
            descriptionClassName="alope-accordion-description"
          />
        </div>
        <CodeBlock
          code={`const accordionData = [
  {
    label: "What is ALOPE UI?",
    description:
      "ALOPE UI is a modern React component library that helps you build beautiful user interfaces quickly.",
  },
  {
    label: "How do I install it?",
    description:
      "You can install ALOPE UI using npm, yarn, or pnpm. Check the installation section for details.",
  },
  {
    label: "Is it free to use?",
    description:
      "Yes! ALOPE UI is completely free and open-source under the MIT license.",
  },
];

<Accordion data={accordionData} />;`}
        />

        {/* Single Panel */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Single Panel Mode</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Accordion
            single
            data={accordionData}
            descriptionClassName="alope-accordion-description"
          />
        </div>
        <CodeBlock code={`<Accordion single data={accordionData} />`} />

        {/* Multiple Panels */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Multiple Panels Mode
        </h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Accordion
            single={false}
            data={accordionData}
            descriptionClassName="alope-accordion-description"
          />
        </div>
        <CodeBlock code={`<Accordion single={false} data={accordionData} />`} />

        {/* Custom Styling */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Custom Styling</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Accordion
            data={accordionData}
            labelClassName="font-bold text-lg"
            labelContainerClassName="bg-blue-50 dark:bg-blue-600 hover:bg-blue-100 dark:hover:bg-blue-700"
            descriptionClassName="alope-accordion-description"
          />
        </div>
        <CodeBlock
          code={`<Accordion
  data={accordionData}
  labelClassName="font-bold text-lg"
  labelContainerClassName="bg-blue-50 border-blue-200 hover:bg-blue-100"
  descriptionClassName="bg-blue-25 text-gray-700"
/>`}
        />

        {/* Controlled State + Custom Icon */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Controlled State with Custom Icon
        </h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Accordion
            data={accordionData}
            openIndex={openIndex}
            onToggleItem={(i) => setOpenIndex(i)}
            descriptionClassName="alope-accordion-description"
            icon={(isActive) => (
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  isActive ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          />
        </div>
        <CodeBlock
          code={`const [openIndex, setOpenIndex] = useState(0);

<Accordion
  data={accordionData}
  openIndex={openIndex}
  onToggleItem={(index) => setOpenIndex(index)}
  icon={(isActive) => (
    <svg
      className={\`w-5 h-5 transition-transform duration-300 \${isActive ? "rotate-180" : "rotate-0"}\`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  )}
/>`}
        />
      </div>
    </div>
  );
}
