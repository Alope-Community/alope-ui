"use client";

// import { Avatar } from "alope-ui";
import { useTheme } from "../../../context/ThemeContext";
import CodeBlock from "../../../components/CodeBlock";
import { Avatar } from "../../../components";

export default function AvatarDocs() {
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
        <h2 className="text-4xl font-bold mb-6">Avatar</h2>
        <p>
          The <code>Avatar</code> component displays user profile images with
          fallback initials, status indicators, and various styling options.
        </p>

        {/* Import */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
        <CodeBlock code={`import { Avatar } from "alope-ui";`} />

        {/* Props Table */}
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
                ["imageSrc", "string", "undefined", "URL of the avatar image"],
                [
                  "fallbackName",
                  "string",
                  "undefined",
                  "Name to generate initials from",
                ],
                [
                  "fallbackColor",
                  "'primary' | 'error' | 'warning' | 'success' | 'info' | 'secondary'",
                  "'primary'",
                  "Background color for fallback",
                ],
                [
                  "shape",
                  "'sharp' | 'cornered' | 'rounded'",
                  "'rounded'",
                  "Shape of the avatar",
                ],
                [
                  "variant",
                  "'solid' | 'outline'",
                  "'solid'",
                  "Visual variant style",
                ],
                ["size", "'sm' | 'md' | 'lg'", "'md'", "Size of the avatar"],
                ["ring", "boolean", "false", "Show ring around avatar"],
                [
                  "ringClassName",
                  "string",
                  '""',
                  "Custom ring CSS class for ring color/style",
                ],
                ["alt", "string", "'avatar'", "Alt text for image"],
                [
                  "status",
                  "'online' | 'offline'",
                  "undefined",
                  "Status indicator dot",
                ],
                [
                  "className",
                  "string",
                  '""',
                  "Additional custom CSS class for avatar",
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

        {/* Basic Avatar */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Avatar</h3>
        <div
          className={`border rounded-lg p-4 flex gap-4 transition-colors mb-6 ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Avatar
            imageSrc="https://i.pravatar.cc/150?img=1"
            alt="User Avatar"
          />
        </div>
        <CodeBlock
          code={`import { Avatar } from "alope-ui";

const BasicExample = () => {
  return (
    <Avatar imageSrc="https://i.pravatar.cc/150?img=1" alt="User Avatar" />
  );
};`}
        />

        {/* Fallback with Initials */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Fallback with Initials
        </h3>
        <div
          className={`border rounded-lg p-4 flex gap-4 flex-wrap mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Avatar with fallback name */}
          <Avatar fallbackName="John Doe" />

          {/* Avatar with no image (shows initials) */}
          <Avatar imageSrc="invalid-url.jpg" fallbackName="Jane Smith" />
        </div>
        <CodeBlock
          code={`{
  /* Avatar with fallback name */
}
<Avatar fallbackName="John Doe" />

{
  /* Avatar with no image (shows initials) */
}
<Avatar imageSrc="invalid-url.jpg" fallbackName="Jane Smith" />`}
        />

        {/* Sizes */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Sizes</h3>
        <div
          className={`border rounded-lg p-4 flex items-center gap-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Small */}
          <Avatar imageSrc="https://i.pravatar.cc/150?img=1" size="sm" />

          {/* Medium */}
          <Avatar imageSrc="https://i.pravatar.cc/150?img=1" size="md" />

          {/* Large */}
          <Avatar imageSrc="https://i.pravatar.cc/150?img=1" size="lg" />
        </div>
        <CodeBlock
          code={`{
  /* Small */
}
<Avatar imageSrc="https://i.pravatar.cc/150?img=1" size="sm" />

{
  /* Medium */
}
<Avatar imageSrc="https://i.pravatar.cc/150?img=1" size="md" />

{
  /* Large */
}
<Avatar imageSrc="https://i.pravatar.cc/150?img=1" size="lg" />`}
        />

        {/* Shapes */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Shapes</h3>
        <div
          className={`border rounded-lg p-4 flex items-center gap-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Sharp corners */}
          <Avatar imageSrc="https://i.pravatar.cc/150?img=1" shape="sharp" />

          {/* Cornered (slightly rounded) */}
          <Avatar imageSrc="https://i.pravatar.cc/150?img=1" shape="cornered" />

          {/* Rounded (circular) */}
          <Avatar imageSrc="https://i.pravatar.cc/150?img=1" shape="rounded" />
        </div>
        <CodeBlock
          code={`{
  /* Sharp corners */
}
<Avatar imageSrc="https://i.pravatar.cc/150?img=1" shape="sharp" />

{
  /* Cornered (slightly rounded) */
}
<Avatar imageSrc="https://i.pravatar.cc/150?img=1" shape="cornered" />

{
  /* Rounded (circular) */
}
<Avatar imageSrc="https://i.pravatar.cc/150?img=1" shape="rounded" />`}
        />

        {/* Variants */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Variants</h3>
        <div
          className={`border rounded-lg p-4 flex gap-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Solid variant */}
          <Avatar fallbackName="John Doe" variant="solid" />

          {/* Outline variant */}
          <Avatar fallbackName="John Doe" variant="outline" />
        </div>
        <CodeBlock
          code={`{
  /* Solid variant */
}
<Avatar fallbackName="John Doe" variant="solid" />

{
  /* Outline variant */
}
<Avatar fallbackName="John Doe" variant="outline" />`}
        />

        {/* Fallback Colors */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Fallback Colors</h3>
        <div
          className={`border rounded-lg p-4 flex gap-4 flex-wrap mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Primary color */}
          <Avatar fallbackName="John Doe" fallbackColor="primary" />
          {/* Error color */}
          <Avatar fallbackName="John Doe" fallbackColor="error" />
          {/* Warning color */}
          <Avatar fallbackName="John Doe" fallbackColor="warning" />
          {/* Success color */}
          <Avatar fallbackName="John Doe" fallbackColor="success" />
          {/* Info color */}
          <Avatar fallbackName="John Doe" fallbackColor="info" />
          {/* Secondary color */}
          <Avatar fallbackName="John Doe" fallbackColor="secondary" />
        </div>
        <CodeBlock
          code={`{
  /* Primary color */
}
<Avatar fallbackName="John Doe" fallbackColor="primary" />

{
  /* Error color */
}
<Avatar fallbackName="John Doe" fallbackColor="error" />

{
  /* Warning color */
}
<Avatar fallbackName="John Doe" fallbackColor="warning" />

{
  /* Success color */
}
<Avatar fallbackName="John Doe" fallbackColor="success" />

{
  /* Info color */
}
<Avatar fallbackName="John Doe" fallbackColor="info" />

{
  /* Secondary color */
}
<Avatar fallbackName="John Doe" fallbackColor="secondary" />`}
        />

        {/* With Ring */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">With Ring</h3>
        <div
          className={`border rounded-lg p-4 flex gap-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Default ring */}
          <Avatar imageSrc="https://i.pravatar.cc/150?img=1" ring />

          {/* Custom ring color */}
          <Avatar
            imageSrc="https://i.pravatar.cc/150?img=1"
            ring
            ringClassName="ring-success dark:ring-success-dark"
          />
        </div>
        <CodeBlock
          code={`{
  /* Default ring */
}
<Avatar imageSrc="https://i.pravatar.cc/150?img=1" ring />

{
  /* Custom ring color */
}
<Avatar
  imageSrc="https://i.pravatar.cc/150?img=1"
  ring
  ringClassName="ring-success dark:ring-success-dark"
/>`}
        />

        {/* Status Indicator */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Status Indicator</h3>
        <div
          className={`border rounded-lg p-4 flex gap-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Online status */}
          <Avatar imageSrc="https://i.pravatar.cc/150?img=1" status="online" />

          {/* Offline status */}
          <Avatar imageSrc="https://i.pravatar.cc/150?img=1" status="offline" />
        </div>
        <CodeBlock
          code={`{
  /* Online status */
}
<Avatar imageSrc="https://i.pravatar.cc/150?img=1" status="online" />

{
  /* Offline status */
}
<Avatar imageSrc="https://i.pravatar.cc/150?img=1" status="offline" />`}
        />

        {/* Complete Example */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Complete Example</h3>
        <div
          className={`border rounded-lg p-4 flex gap-4 flex-wrap items-center mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Avatar
            imageSrc="https://i.pravatar.cc/150?img=1"
            fallbackName="John Doe"
            size="lg"
            shape="rounded"
            ring
            status="online"
            alt="John Doe Avatar"
          />

          <Avatar
            imageSrc="https://i.pravatar.cc/150?img=2"
            fallbackName="Jane Smith"
            size="lg"
            shape="rounded"
            ring
            status="offline"
            alt="Jane Smith Avatar"
          />
        </div>
        <CodeBlock
          code={`import { Avatar } from "alope-ui";

const CompleteExample = () => {
  return (
    <div className="flex gap-4">
      <Avatar
        imageSrc="https://i.pravatar.cc/150?img=1"
        fallbackName="John Doe"
        size="lg"
        shape="rounded"
        ring
        status="online"
        alt="John Doe Avatar"
      />

      <Avatar
        imageSrc="https://i.pravatar.cc/150?img=2"
        fallbackName="Jane Smith"
        size="lg"
        shape="rounded"
        ring
        status="offline"
        alt="Jane Smith Avatar"
      />
    </div>
  );
};`}
        />
      </div>
    </div>
  );
}
