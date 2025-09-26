"use client";

import { Button, Card } from "alope-ui";
import CodeBlock from "../../components/CodeBlock";
import { useTheme } from "../../context/ThemeContext";

function Preview({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <div
      className={`p-4 mb-6 border rounded-lg shadow-sm transition-colors ${
        theme === "dark"
          ? "bg-gray-800 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      {children}
    </div>
  );
}

export default function CardDocs() {
  const { theme } = useTheme();

  return (
    <div className="container mx-auto px-4">
      <div
        className={`prose max-w-none transition-colors ${
          theme === "dark"
            ? "prose-invert"
            : "prose-slate prose-headings:text-gray-900"
        }`}
      >
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">Card</h2>
        <p>
          The Card component provides a flexible container for displaying
          content in a structured format.
        </p>

        {/* Import Section */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
        <CodeBlock code={`import { Card } from "alope-ui";`} />

        {/* Props Section */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Props</h3>
        <div
          className={`overflow-x-auto mb-10 border rounded-lg shadow-sm text-sm transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-gray-50 border-gray-200"
          }`}
        >
          <table className="w-full">
            <thead
              className={theme === "dark" ? "bg-gray-700" : "bg-gray-100"}
            >
              <tr>
                <th className="p-3 border">Prop</th>
                <th className="p-3 border">Type</th>
                <th className="p-3 border">Default</th>
                <th className="p-3 border">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["image", "string", "undefined", "Image URL"],
                ["title", "string", "undefined", "Card title"],
                ["description", "string", "undefined", "Card description"],
                ["footer", "ReactNode", "undefined", "Card footer content"],
                ["ribbon", "string", "undefined", "Ribbon text"],
                ["horizontal", "boolean", "false", "Horizontal layout"],
                ["children", "ReactNode", "undefined", "Card content"],
                ["containerClassName", "string", '""', "Container CSS class"],
                ["titleClassName", "string", '""', "Title CSS class"],
                [
                  "descriptionClassName",
                  "string",
                  '""',
                  "Description CSS class",
                ],
              ].map(([prop, type, def, desc]) => (
                <tr
                  key={prop}
                  className={theme === "dark" ? "bg-gray-900" : "bg-white"}
                >
                  <td className="p-3 border font-mono">{prop}</td>
                  <td className="p-3 border">{type}</td>
                  <td className="p-3 border">{def}</td>
                  <td className="p-3 border">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Examples Section */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Card</h3>
        <Preview>
          <Card
            image="https://placehold.co/600x400"
            title="Web Development"
            description="Build modern web applications with the latest technologies and best practices."
          />
        </Preview>
        <CodeBlock
          code={`<Card
  image="https://placehold.co/600x400"
  title="Web Development"
  description="Build modern web applications with the latest technologies and best practices."
/>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">Card with Footer</h3>
        <Preview>
          <Card
            image="https://placehold.co/600x400"
            title="Advanced React Course"
            description="Master React with hooks, context, and advanced patterns."
            footer={
              <Button size="sm" variantType="primary">
                Enroll Now
              </Button>
            }
          />
        </Preview>
        <CodeBlock
          code={`<Card
  image="https://placehold.co/600x400"
  title="Advanced React Course"
  description="Master React with hooks, context, and advanced patterns."
  footer={<Button size="sm" variantType="primary">Enroll Now</Button>}
/>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">Card with Ribbon</h3>
        <Preview>
          <Card
            image="https://placehold.co/600x400"
            title="Premium Course"
            description="Exclusive content with mentorship."
            ribbon="50% OFF"
            footer={
              <Button fullWidth variantType="success">
                Get Started
              </Button>
            }
          />
        </Preview>
        <CodeBlock
          code={`<Card
  image="https://placehold.co/600x400"
  title="Premium Course"
  description="Exclusive content with mentorship."
  ribbon="50% OFF"
  footer={<Button fullWidth variantType="success">Get Started</Button>}
/>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">Horizontal Card</h3>
        <Preview>
          <Card
            horizontal
            image="https://placehold.co/600x400"
            title="JavaScript Fundamentals"
            description="Learn core JavaScript concepts from scratch."
            footer={
              <Button size="sm" variantType="info">
                Start
              </Button>
            }
          />
        </Preview>
        <CodeBlock
          code={`<Card
  horizontal
  image="https://placehold.co/600x400"
  title="JavaScript Fundamentals"
  description="Learn core JavaScript concepts from scratch."
  footer={<Button size="sm" variantType="info">Start</Button>}
/>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">Custom Styling</h3>
        <Preview>
          <Card
            image="https://placehold.co/600x400"
            title="Custom Styled Card"
            description="Demonstrates custom styling."
            titleClassName="text-3xl font-bold text-purple-700 dark:text-purple-300"
            descriptionClassName="text-gray-600 dark:text-gray-400 italic"
            containerClassName="border-2 border-purple-200 dark:border-purple-800 shadow-lg"
          />
        </Preview>
        <CodeBlock
          code={`<Card
  image="https://placehold.co/600x400"
  title="Custom Styled Card"
  description="Demonstrates custom styling."
  titleClassName="text-3xl font-bold text-purple-700 dark:text-purple-300"
  descriptionClassName="text-gray-600 dark:text-gray-400 italic"
  containerClassName="border-2 border-purple-200 dark:border-purple-800 shadow-lg"
/>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">Content-Only Card</h3>
        <Preview>
          <Card>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 dark:text-gray-100">
                Custom Content
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Use Card as a container for custom content.
              </p>
              <Button size="sm">Action</Button>
            </div>
          </Card>
        </Preview>
        <CodeBlock
          code={`<Card>
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-4">Custom Content</h3>
    <p className="text-gray-600 mb-4">Use Card as a container for custom content.</p>
    <Button size="sm">Action</Button>
  </div>
</Card>`}
        />
      </div>
    </div>
  );
}