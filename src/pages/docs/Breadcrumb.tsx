"use client";

import CodeBlock from "../../components/CodeBlock";
import { Breadcrumb } from "alope-ui";
import { useTheme } from "../../context/ThemeContext";
import "../../index.css"; // ⬅️ import supaya style custom breadcrumb ikut masuk

export default function BreadcrumbDocs() {
  const { theme } = useTheme();

  const breadcrumbData = [
    { label: "Home", path: "#" },
    { label: "Products", path: "#" },
    { label: "Laptops", path: "#" },
    { label: "MacBook Pro" }, // Current page (no path)
  ];

  const breadcrumbWithIcons = [
    {
      label: "Home",
      path: "#",
      icon: (
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
    },
    {
      label: "Products",
      path: "#",
      icon: <span className="mr-1">🛍️</span>,
    },
    {
      label: "MacBook Pro",
      icon: <span className="mr-1">💻</span>,
    },
  ];

  return (
    <div
      className={`prose max-w-none transition-colors ${
        theme === "dark" ? "prose-invert" : "prose-slate"
      }`}
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Breadcrumb
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        The Breadcrumb component provides navigation context showing the user's
        location within the application hierarchy.
      </p>

      {/* Import Section */}
      <h3 className="text-2xl font-semibold mt-10 mb-3 dark:text-gray-100">
        Import
      </h3>
      <CodeBlock code={`import { Breadcrumb } from "alope-ui";`} />

      {/* Props Section */}
      <h3 className="text-2xl font-semibold mt-10 mb-3 dark:text-gray-100">
        Props
      </h3>
      <div
        className={`overflow-x-auto mb-10 border rounded-lg shadow-sm text-sm transition-colors ${
          theme === "dark"
            ? "bg-gray-800 border-gray-700"
            : "bg-gray-50 border-gray-200"
        }`}
      >
        <table className="w-full">
          <thead className={theme === "dark" ? "bg-gray-700" : "bg-gray-100"}>
            <tr>
              <th className="p-3 border">Prop</th>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Default</th>
              <th className="p-3 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className={theme === "dark" ? "bg-gray-900" : "bg-white"}>
              <td className="p-3 border font-mono">data</td>
              <td className="p-3 border">BreadcrumbItem[]</td>
              <td className="p-3 border">[]</td>
              <td className="p-3 border">Array of breadcrumb items</td>
            </tr>
            <tr className={theme === "dark" ? "bg-gray-900" : "bg-white"}>
              <td className="p-3 border font-mono">separator</td>
              <td className="p-3 border">ReactNode</td>
              <td className="p-3 border">"/"</td>
              <td className="p-3 border">Custom separator between items</td>
            </tr>
            <tr className={theme === "dark" ? "bg-gray-900" : "bg-white"}>
              <td className="p-3 border font-mono">linkClassName</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">""</td>
              <td className="p-3 border">Custom CSS class for links</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Examples Section */}
      <h3 className="text-2xl font-semibold mt-10 mb-3 dark:text-gray-100">
        Basic Usage
      </h3>
      <div
        className={`border rounded-lg p-4 mb-6 transition-colors ${
          theme === "dark"
            ? "bg-gray-800 border-gray-700"
            : "bg-gray-50 border-gray-200"
        }`}
      >
        <Breadcrumb data={breadcrumbData} />
      </div>
      <CodeBlock
        code={`const breadcrumbData = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Laptops", path: "/products/laptops" },
  { label: "MacBook Pro" }, // Current page (no path)
];

<Breadcrumb data={breadcrumbData} />`}
      />

      {/* Custom Separator */}
      <h3 className="text-2xl font-semibold mt-10 mb-3 dark:text-gray-100">
        Custom Separator
      </h3>
      <div
        className={`border rounded-lg p-4 mb-6 transition-colors ${
          theme === "dark"
            ? "bg-gray-800 border-gray-700"
            : "bg-gray-50 border-gray-200"
        }`}
      >
        <Breadcrumb
          data={breadcrumbData}
          separator={
            <svg
              className="w-4 h-4 mx-2 text-gray-400 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          }
        />
      </div>
      <CodeBlock
        code={`<Breadcrumb
  data={breadcrumbData}
  separator={
    <svg className="w-4 h-4 mx-2 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
      <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
    </svg>
  }
/>`}
      />

      {/* Custom Styling */}
      <h3 className="text-2xl font-semibold mt-10 mb-3 dark:text-gray-100">
        Custom Styling
      </h3>
      <div
        className={`border rounded-lg p-4 mb-6 transition-colors ${
          theme === "dark"
            ? "bg-gray-800 border-gray-700"
            : "bg-gray-50 border-gray-200"
        }`}
      >
        <Breadcrumb
          data={breadcrumbData}
          separator={<span className="mx-2 text-gray-400 dark:text-gray-500">→</span>}
        />
      </div>
      <CodeBlock
        code={`<Breadcrumb
  data={breadcrumbData}
  separator={<span className="mx-2 text-gray-400 dark:text-gray-500">→</span>}
/>`}
      />

      {/* With Icons */}
      <h3 className="text-2xl font-semibold mt-10 mb-3 dark:text-gray-100">
        Breadcrumb with Icons
      </h3>
      <div
        className={`border rounded-lg p-4 mb-6 transition-colors ${
          theme === "dark"
            ? "bg-gray-800 border-gray-700"
            : "bg-gray-50 border-gray-200"
        }`}
      >
        <Breadcrumb data={breadcrumbWithIcons} />
      </div>
      <CodeBlock
        code={`const breadcrumbWithIcons = [
  {
    label: "Home",
    path: "/",
    icon: (
      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
  },
  {
    label: "Products",
    path: "/products",
    icon: <span className="mr-1">🛍️</span>,
  },
  {
    label: "MacBook Pro",
    icon: <span className="mr-1">💻</span>,
  },
];

<Breadcrumb data={breadcrumbWithIcons} />`}
      />
    </div>
  );
}