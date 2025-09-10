"use client";

import { Button, Card } from "alope-ui";
import CodeBlock from "../../components/CodeBlock";

export default function CardDocs() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2 className="text-4xl font-bold mb-6 text-gray-900">Card</h2>
      <p className="text-gray-600 mb-8">
        The Card component provides a flexible container for displaying content
        in a structured format.
      </p>

      {/* Import Section */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
      <CodeBlock code={`import { Card } from "alope-ui";`} />

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
              <td className="p-3 border font-mono">image</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Image URL</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">title</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Card title</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">description</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Card description</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">footer</td>
              <td className="p-3 border">ReactNode</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Card footer content</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">ribbon</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Ribbon text</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">horizontal</td>
              <td className="p-3 border">boolean</td>
              <td className="p-3 border">false</td>
              <td className="p-3 border">Horizontal layout</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">children</td>
              <td className="p-3 border">ReactNode</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Card content</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">containerClassName</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">""</td>
              <td className="p-3 border">Container CSS class</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">titleClassName</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">""</td>
              <td className="p-3 border">Title CSS class</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">descriptionClassName</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">""</td>
              <td className="p-3 border">Description CSS class</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Examples Section */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Card</h3>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
        <Card
          image="https://placehold.co/600x400"
          title="Web Development"
          description="Build modern web applications with the latest technologies and best practices."
        />
      </div>
      <CodeBlock
        code={`<Card
  image="https://placehold.co/600x400"
  title="Web Development"
  description="Build modern web applications with the latest technologies and best practices."
/>`}
      />

      <h3 className="text-2xl font-semibold mt-10 mb-3">Card with Footer</h3>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
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
      </div>
      <CodeBlock
        code={`<Card
  image="https://placehold.co/600x400"
  title="Advanced React Course"
  description="Master React with hooks, context, and advanced patterns."
  footer={<Button size="sm" variantType="primary">Enroll Now</Button>}
/>`}
      />

      <h3 className="text-2xl font-semibold mt-10 mb-3">Card with Ribbon</h3>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
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
      </div>
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
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
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
      </div>
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
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
        <Card
          image="https://placehold.co/600x400"
          title="Custom Styled Card"
          description="Demonstrates custom styling."
          titleClassName="text-3xl font-bold text-purple-700"
          descriptionClassName="text-gray-600 italic"
          containerClassName="border-2 border-purple-200 shadow-lg"
        />
      </div>
      <CodeBlock
        code={`<Card
  image="https://placehold.co/600x400"
  title="Custom Styled Card"
  description="Demonstrates custom styling."
  titleClassName="text-3xl font-bold text-purple-700"
  descriptionClassName="text-gray-600 italic"
  containerClassName="border-2 border-purple-200 shadow-lg"
/>`}
      />

      <h3 className="text-2xl font-semibold mt-10 mb-3">Content-Only Card</h3>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
        <Card>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Custom Content</h3>
            <p className="text-gray-600 mb-4">
              Use Card as a container for custom content.
            </p>
            <Button size="sm">Action</Button>
          </div>
        </Card>
      </div>
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
  );
}
