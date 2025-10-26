"use client";

import { useState, useEffect } from "react";
import CodeBlock from "../../../components/CodeBlock";
import { Spinner } from "alope-ui";
import { useTheme } from "../../../context/ThemeContext";

export default function SpinnerDocs() {
  const { theme } = useTheme();

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
        <h2 className="text-4xl font-bold mb-6">Spinner</h2>
        <p>
          The <code>Spinner</code> component displays an animated loading
          indicator with customizable size, color, duration, and thickness.
        </p>

        {/* Import */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
        <CodeBlock code={`import { Spinner } from "alope-ui";`} />

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
                ["size", "'sm' | 'md' | 'lg'", "'md'", "Size of the spinner"],
                [
                  "color",
                  "'primary' | 'error' | 'warning' | 'success' | 'info' | 'secondary'",
                  "'primary'",
                  "Color variant of the spinner",
                ],
                ["className", "string", '""', "Additional CSS classes"],
                [
                  "duration",
                  "number",
                  "1000",
                  "Animation duration (in milliseconds)",
                ],
                [
                  "thickness",
                  "number",
                  "undefined",
                  "Custom border thickness (in pixels)",
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

        {/* Basic Spinner */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Spinner</h3>
        <div
          className={`border rounded-lg p-4 flex justify-center mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Spinner />
        </div>
        <CodeBlock
          code={`import { Spinner } from "alope-ui";

const BasicExample = () => {
  return <Spinner />;
};`}
        />

        {/* Sizes */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Sizes</h3>
        <div
          className={`border rounded-lg p-4 flex items-center gap-6 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Small Size */}
          <Spinner size="sm" />
          {/* Medium Size */}
          <Spinner size="md" />
          {/* Large Size */}
          <Spinner size="lg" />
        </div>
        <CodeBlock
          code={`{
  /* Small Size */
}
<Spinner size="sm" />

{
  /* Medium Size */
}
<Spinner size="md" />

{
  /* Large Size */
}
<Spinner size="lg" />`}
        />

        {/* Colors */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Colors</h3>
        <div
          className={`border rounded-lg p-4 flex flex-wrap gap-4 items-center justify-center mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {["primary", "error", "warning", "success", "info", "secondary"].map(
            (color) => (
              <div key={color} className="flex flex-col items-center">
                <Spinner color={color as any} />
                <p className="text-xs mt-1">{color}</p>
              </div>
            )
          )}
        </div>
        <CodeBlock
          code={`{
  /* Primary Color */
}
<Spinner color="primary" />

{
  /* Error Color */
}
<Spinner color="error" />

{
  /* Warning Color */
}
<Spinner color="warning" />

{
  /* Success Color */
}
<Spinner color="success" />

{
  /* Info Color */
}
<Spinner color="info" />

{
  /* Secondary Color */
}
<Spinner color="secondary" />`}
        />

        {/* Custom Duration */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Custom Duration</h3>
        <div
          className={`border rounded-lg p-4 flex gap-6 justify-center mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Spinner duration={500} />
          <Spinner duration={2000} />
        </div>
        <CodeBlock
          code={`{
  /* Fast animation */
}
<Spinner duration={500} />

{
  /* Slow animation */
}
<Spinner duration={2000} />`}
        />

        {/* Custom Thickness */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Custom Thickness</h3>
        <div
          className={`border rounded-lg p-4 flex gap-6 justify-center mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Spinner thickness={1} />
          <Spinner thickness={6} />
        </div>
        <CodeBlock
          code={`{
  /* Thin spinner */
}
<Spinner thickness={1} />;

{
  /* Thick spinner */
}
<Spinner thickness={6} />;`}
        />

        {/* Combined Customization */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Combined Customization
        </h3>
        <div
          className={`border rounded-lg p-4 flex justify-center mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Spinner size="lg" color="success" duration={1500} thickness={5} />
        </div>
        <CodeBlock
          code={`<Spinner size="lg" color="success" duration={1500} thickness={5} />;`}
        />

        {/* Custom Styling */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          With Custom Styling
        </h3>
        <div
          className={`border rounded-lg p-4 flex flex-col items-center gap-6 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Spinner className="mx-auto my-4" />
          <div className="relative w-full h-32 border border-dashed rounded">
            <Spinner className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
        <CodeBlock
          code={`<Spinner className="mx-auto my-4" />

<Spinner className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />;`}
        />

        {/* Loading States */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Loading States</h3>
        <div
          className={`border rounded-lg p-4 flex justify-center mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <LoadingButton />
        </div>
        <CodeBlock
          code={`import { useState } from "react";

const LoadingButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 flex items-center gap-2"
    >
      {isLoading && <Spinner size="sm" className="border-white" />}
      {isLoading ? "Loading..." : "Submit"}
    </button>
  );
};`}
        />

        {/* Centered Loading */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Centered Loading</h3>
        <div
          className={`border rounded-lg p-4 flex justify-center items-center h-64 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Spinner size="lg" color="primary" />
        </div>
        <CodeBlock
          code={`const CenteredLoading = () => {
  return (
    <div className="flex items-center justify-center h-64">
      <Spinner size="lg" color="primary" />
    </div>
  );
};`}
        />

        {/* With Text */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">With Text</h3>
        <div
          className={`border rounded-lg p-4 flex flex-col items-center gap-3 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Spinner size="lg" color="info" />
          <p className="text-gray-600 dark:text-gray-400">Loading data...</p>
        </div>
        <CodeBlock
          code={`const LoadingWithText = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <Spinner size="lg" color="info" />
      <p className="text-gray-600 dark:text-gray-400">Loading data...</p>
    </div>
  );
};`}
        />

        {/* Complete Example */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Complete Example</h3>
        <div
          className={`border rounded-lg p-4 mb-10 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <DataFetcher />
        </div>
        <CodeBlock
          code={`import { useState, useEffect } from "react";
import { Spinner } from "alope-ui";

const DataFetcher = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setData({ message: "Data loaded successfully!" });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-96 gap-4">
        <Spinner size="lg" color="primary" duration={800} />
        <p className="text-gray-600 dark:text-gray-400">
          Fetching your data...
        </p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{data?.message}</h2>
    </div>
  );
};`}
        />
      </div>
    </div>
  );
}

/* === Inline Components === */

function LoadingButton() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 flex items-center gap-2"
    >
      {isLoading && <Spinner size="sm" className="border-white" />}
      {isLoading ? "Loading..." : "Submit"}
    </button>
  );
}

function DataFetcher() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setData({ message: "Data loaded successfully!" });
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <Spinner size="lg" color="primary" duration={800} />
        <p className="text-gray-600 dark:text-gray-400">
          Fetching your data...
        </p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{data?.message}</h2>
    </div>
  );
}
