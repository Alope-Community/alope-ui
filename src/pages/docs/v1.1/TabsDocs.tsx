"use client";

import { useState } from "react";
import CodeBlock from "../../../components/CodeBlock";
// import { Tabs } from "alope-ui";
import { useTheme } from "../../../context/ThemeContext";
import { Tabs } from "../../../components";

export default function TabsDocs() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    {
      label: "Profile",
      content: <div>Profile content here</div>,
    },
    {
      label: "Settings",
      content: <div>Settings content here</div>,
    },
    {
      label: "Notifications",
      content: <div>Notifications content here</div>,
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
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-6">Tabs</h2>
        <p>
          The Tabs component provides a tabbed navigation interface for
          organizing and displaying content in separate panels.
        </p>

        {/* Import */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
        <CodeBlock
          code={`import { Tabs } from "alope-ui";
import type { Tabs as TabType } from "alope-ui";`}
        />

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
                ["tabs", "TabType[]", "required", "Array of tab objects"],
                [
                  "variant",
                  "'line' | 'solid' | 'subtle' | 'inline' | 'outline' | 'plain'",
                  "'line'",
                  "Visual variant style",
                ],
                [
                  "fitted",
                  "boolean",
                  "false",
                  "Make tabs fill available width",
                ],
                [
                  "wrapperClassName",
                  "string",
                  '""',
                  "Wrapper container CSS class",
                ],
                ["buttonClassName", "string", '""', "Tab button CSS class"],
                ["activeClassName", "string", '""', "Active tab CSS class"],
                ["inactiveClassName", "string", '""', "Inactive tab CSS class"],
                [
                  "activeTab",
                  "number",
                  "undefined",
                  "Controlled active tab index",
                ],
                [
                  "onTabChange",
                  "(index: number) => void",
                  "undefined",
                  "Callback when tab changes",
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

        {/* Tab Object Type */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Tab Object Type</h3>

        <CodeBlock
          code={`type Tabs = {
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
  link?: string;
};`}
        />

        {/* Basic Usage */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Tabs</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Basic />
        </div>
        <CodeBlock
          code={`import { Tabs } from "alope-ui";

const BasicExample = () => {
  const tabs = [
    {
      label: "Profile",
      content: <div>Profile content here</div>,
    },
    {
      label: "Settings",
      content: <div>Settings content here</div>,
    },
    {
      label: "Notifications",
      content: <div>Notifications content here</div>,
    },
  ];

  return <Tabs tabs={tabs} />;
};`}
        />

        {/* Variants */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Variants</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Tabs tabs={tabs} variant="solid" />
        </div>
        <CodeBlock
          code={`{
  /* Line Variant */
}
<Tabs tabs={tabs} variant="line" />

{
  /* Solid Variant */
}
<Tabs tabs={tabs} variant="solid" />

{
  /* Subtle Variant */
}
<Tabs tabs={tabs} variant="subtle" />

{
  /* Inline Variant */
}
<Tabs tabs={tabs} variant="inline" />

{
  /* Outline Variant */
}
<Tabs tabs={tabs} variant="outline" />

{
  /* Plain Variant */
}
<Tabs tabs={tabs} variant="plain" />`}
        />

        {/* Fitted Tabs */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Fitted Tabs</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Tabs tabs={tabs} fitted />
        </div>
        <CodeBlock
          code={`{
  /* Tabs will fill the available width equally */
}
<Tabs tabs={tabs} fitted />`}
        />

        {/* Controlled Tabs */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Controlled Tabs</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
        <CodeBlock
          code={`import { useState } from "react";
import { Tabs } from "alope-ui";

const ControlledExample = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Tab 1",
      content: <div>Content 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>Content 2</div>,
    },
  ];

  return <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
};`}
        />

        {/* Disabled Tabs */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Disabled Tabs</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Tabs
            tabs={[
              { label: "Active Tab", content: <div>Active content</div> },
              {
                label: "Disabled Tab",
                content: <div>This content won't show</div>,
                disabled: true,
              },
            ]}
          />
        </div>
        <CodeBlock
          code={`const tabs = [
  {
    label: "Active Tab",
    content: <div>Active content</div>,
  },
  {
    label: "Disabled Tab",
    content: <div>This content won't show</div>,
    disabled: true,
  },
];

<Tabs tabs={tabs} />`}
        />

        {/* Tabs with Links */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Tabs with Links</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Tabs
            tabs={[
              {
                label: "Dashboard",
                content: <div>Dashboard content</div>,
                link: "/dashboard",
              },
              {
                label: "Profile",
                content: <div>Profile content</div>,
                link: "/profile",
              },
            ]}
          />
        </div>
        <CodeBlock
          code={`const tabs = [
  {
    label: "Active Tab",
    content: <div>Active content</div>,
  },
  {
    label: "Disabled Tab",
    content: <div>This content won't show</div>,
    disabled: true,
  },
];

<Tabs tabs={tabs} />`}
        />

        {/* Custom Styling */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Custom Styling</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Tabs
            tabs={tabs}
            variant="solid"
            wrapperClassName="bg-gray-100 dark:bg-gray-800"
            buttonClassName="text-base"
            activeClassName="font-bold"
            inactiveClassName="opacity-70"
          />
        </div>
        <CodeBlock
          code={`<Tabs
  tabs={tabs}
  variant="solid"
  wrapperClassName="bg-gray-100 dark:bg-gray-800"
  buttonClassName="text-base"
  activeClassName="font-bold"
  inactiveClassName="opacity-70"
/>`}
        />

        {/* Complete Example */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Complete Example</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Tabs
            tabs={[
              {
                label: "Overview",
                content: (
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">Overview</h2>
                    <p>Dashboard overview content goes here.</p>
                  </div>
                ),
              },
              {
                label: "Analytics",
                content: (
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">Analytics</h2>
                    <p>Analytics and statistics content.</p>
                  </div>
                ),
              },
              {
                label: "Reports",
                content: (
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">Reports</h2>
                    <p>Reports and data visualization.</p>
                  </div>
                ),
              },
              {
                label: "Settings",
                content: (
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">Settings</h2>
                    <p>Configuration and preferences.</p>
                  </div>
                ),
                disabled: true,
              },
            ]}
            variant="subtle"
            fitted
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
        <CodeBlock
          code={`import { useState } from "react";
import { Tabs } from "alope-ui";

const CompleteExample = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Overview",
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">Overview</h2>
          <p>Dashboard overview content goes here.</p>
        </div>
      ),
    },
    {
      label: "Analytics",
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">Analytics</h2>
          <p>Analytics and statistics content.</p>
        </div>
      ),
    },
    {
      label: "Reports",
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">Reports</h2>
          <p>Reports and data visualization.</p>
        </div>
      ),
    },
    {
      label: "Settings",
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">Settings</h2>
          <p>Configuration and preferences.</p>
        </div>
      ),
      disabled: true,
    },
  ];

  return (
    <Tabs
      tabs={tabs}
      variant="subtle"
      fitted
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );
};`}
        />
      </div>
    </div>
  );
}

function Basic() {
  const tabs = [
    {
      label: "Profile",
      content: <div>Profile content here</div>,
    },
    {
      label: "Settings",
      content: <div>Settings content here</div>,
    },
    {
      label: "Notifications",
      content: <div>Notifications content here</div>,
    },
  ];

  return <Tabs tabs={tabs} />;
}
