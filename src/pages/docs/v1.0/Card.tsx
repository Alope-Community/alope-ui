"use client";

import { Button, Card } from "alope-ui";
import CodeBlock from "../../../components/CodeBlock";
import { useTheme } from "../../../context/ThemeContext";

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
        <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Card</h3>
        <Preview>
          <Card
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
            title="Web Development"
            description="Build modern web applications with the latest technologies and best practices."
          />
        </Preview>
        <CodeBlock
          code={`<Card
  image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
  title="Web Development"
  description="Build modern web applications with the latest technologies and best practices."
/>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">Card with Footer</h3>
        <Preview>
          <Card
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
            title="Advanced React Course"
            description="Master React with hooks, context, and advanced patterns. Perfect for developers looking to level up their skills."
            footer={
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">$99</span>
                <Button size="sm" variantType="primary">
                  Enroll Now
                </Button>
              </div>
            }
          />
        </Preview>
        <CodeBlock
          code={`<Card
  image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
  title="Advanced React Course"
  description="Master React with hooks, context, and advanced patterns. Perfect for developers looking to level up their skills."
  footer={
    <div className="flex justify-between items-center">
      <span className="text-2xl font-bold text-green-600">$99</span>
      <Button size="sm" variantType="primary">
        Enroll Now
      </Button>
    </div>
  }
/>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">Card with Ribbon</h3>
        <Preview>
          <Card
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
            title="Premium Course"
            description="Get access to exclusive content and personalized mentorship."
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
  image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
  title="Premium Course"
  description="Get access to exclusive content and personalized mentorship."
  ribbon="50% OFF"
  footer={
    <Button fullWidth variantType="success">
      Get Started
    </Button>
  }
/>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">Horizontal Card</h3>
        <Preview>
          <Card
            horizontal
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
            title="JavaScript Fundamentals"
            description="Learn the core concepts of JavaScript programming from scratch. Perfect for beginners who want to start their coding journey."
            footer={
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  Preview
                </Button>
                <Button size="sm" variantType="primary">
                  Start Learning
                </Button>
              </div>
            }
          />
        </Preview>
        <CodeBlock
          code={`<Card
  horizontal
  image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
  title="JavaScript Fundamentals"
  description="Learn the core concepts of JavaScript programming from scratch. Perfect for beginners who want to start their coding journey."
  footer={
    <div className="flex gap-2">
      <Button size="sm" variant="outline">
        Preview
      </Button>
      <Button size="sm" variantType="primary">
        Start Learning
      </Button>
    </div>
  }
/>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">Custom Styling</h3>
        <Preview>
          <Card
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
            title="Custom Styled Card"
            description="This card demonstrates custom styling capabilities."
            titleClassName="text-3xl font-bold text-purple-700"
            descriptionClassName="text-gray-600 italic"
            containerClassName="border-2 border-purple-200 shadow-lg"
            footer={<Button variantType="info">Learn More</Button>}
          />
        </Preview>
        <CodeBlock
          code={`<Card
  image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
  title="Custom Styled Card"
  description="This card demonstrates custom styling capabilities."
  titleClassName="text-3xl font-bold text-purple-700"
  descriptionClassName="text-gray-600 italic"
  containerClassName="border-2 border-purple-200 shadow-lg"
  footer={
    <Button variantType="info" radius="stadium">
      Learn More
    </Button>
  }
/>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">Content-Only Card</h3>
        <Preview>
          <Card>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Custom Content</h3>
              <p className="text-gray-600 mb-4">
                You can also use the Card component as a container for any
                custom content.
              </p>
              <div className="flex justify-end">
                <Button size="sm">Action</Button>
              </div>
            </div>
          </Card>
        </Preview>
        <CodeBlock
          code={`<Card>
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-4">Custom Content</h3>
    <p className="text-gray-600 mb-4">
      You can also use the Card component as a container for any custom content.
    </p>
    <div className="flex justify-end">
      <Button size="sm">Action</Button>
    </div>
  </div>
</Card>`}
        />
      </div>
    </div>
  );
}
