"use client";

import { useState } from "react";
import CodeBlock from "../../components/CodeBlock";
import { Accordion } from "alope-ui";

export default function AccordionDocs() {
  const [openIndex, setOpenIndex] = useState<number | number[] | null>(0);

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
    <div className="prose prose-slate max-w-none">
      <h2 className="text-4xl font-bold mb-6 text-gray-900">Accordion</h2>
      <p className="text-gray-600 mb-8">
        The Accordion component allows users to show and hide sections of
        related content on a page.
      </p>

      {/* Import */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
      <CodeBlock code={`import { Accordion } from "alope-ui";`} />

      {/* Props */}
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
              <td className="p-3 border font-mono">data</td>
              <td className="p-3 border">AccordionItem[]</td>
              <td className="p-3 border">[]</td>
              <td className="p-3 border">Array of accordion items</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">single</td>
              <td className="p-3 border">boolean</td>
              <td className="p-3 border">true</td>
              <td className="p-3 border">
                Allow only one panel open at a time
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">openIndex</td>
              <td className="p-3 border">number | number[]</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Controlled open state</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">onToggleItem</td>
              <td className="p-3 border">function</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Callback when item is toggled</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">icon</td>
              <td className="p-3 border">function</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Custom icon renderer</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">labelClassName</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">""</td>
              <td className="p-3 border">Custom CSS class for labels</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">labelContainerClassName</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">""</td>
              <td className="p-3 border">
                Custom CSS class for label containers
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">descriptionClassName</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">""</td>
              <td className="p-3 border">Custom CSS class for descriptions</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Basic Usage */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Usage</h3>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
        <Accordion data={accordionData} />
      </div>
      <CodeBlock
        code={`const accordionData = [
  { label: "What is ALOPE UI?", description: "ALOPE UI is a modern React component library that helps you build beautiful user interfaces quickly." },
  { label: "How do I install it?", description: "You can install ALOPE UI using npm, yarn, or pnpm. Check the installation section for details." },
  { label: "Is it free to use?", description: "Yes! ALOPE UI is completely free and open-source under the MIT license." },
];

<Accordion data={accordionData} />`}
      />

      {/* Single Panel */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Single Panel Mode</h3>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
        <Accordion single data={accordionData} />
      </div>
      <CodeBlock code={`<Accordion single data={accordionData} />`} />

      {/* Multiple Panels */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">
        Multiple Panels Mode
      </h3>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
        <Accordion single={false} data={accordionData} />
      </div>
      <CodeBlock code={`<Accordion single={false} data={accordionData} />`} />

      {/* Custom Styling */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Custom Styling</h3>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
        <Accordion
          data={accordionData}
          labelClassName="font-bold text-lg"
          labelContainerClassName="bg-blue-50 border-blue-200 hover:bg-blue-100"
          descriptionClassName="bg-blue-25 text-gray-700"
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
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
        <Accordion
          data={accordionData}
          openIndex={openIndex}
          onToggleItem={(i) => setOpenIndex(i)}
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  )}
/>`}
      />
    </div>
  );
}
