"use client";

import { AvatarGroup, type AvatarProps } from "alope-ui";
import { useTheme } from "../../../context/ThemeContext";
import CodeBlock from "../../../components/CodeBlock";

export default function AvatarGroupDocs() {
  const { theme } = useTheme();

  const sampleAvatars = [
    { imageSrc: "https://i.pravatar.cc/150?img=1", fallbackName: "John Doe" },
    { imageSrc: "https://i.pravatar.cc/150?img=2", fallbackName: "Jane Smith" },
    { imageSrc: "https://i.pravatar.cc/150?img=3", fallbackName: "Bob Wilson" },
    {
      imageSrc: "https://i.pravatar.cc/150?img=4",
      fallbackName: "Alice Brown",
    },
    { imageSrc: "https://i.pravatar.cc/150?img=5", fallbackName: "Tom Lee" },
  ];

  return (
    <div
      className={`transition-colors ${theme === "dark"
        ? "prose prose-invert max-w-none"
        : "prose prose-slate prose-headings:text-gray-900 max-w-none"
        }`}
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-6">AvatarGroup</h2>
        <p>
          The <code>AvatarGroup</code> component displays multiple avatars in an
          overlapping stack with a counter for additional avatars.
        </p>

        {/* Import */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
        <CodeBlock
          code={`import { AvatarGroup } from "alope-ui";
import type { AvatarGroupProps } from "alope-ui";`}
        />

        {/* Props Table */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Props</h3>
        <div className="overflow-x-auto border border-gray-200 dark:border-gray-800 rounded-lg mb-10">
          <table className="w-full text-sm text-left">
            <thead
              className={`${theme === "dark"
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
                  "avatars",
                  "AvatarProps[]",
                  "required",
                  "Array of avatar configurations",
                ],
                [
                  "maxVisible",
                  "number",
                  "3",
                  "Maximum number of visible avatars before showing a counter",
                ],
                ["size", "'sm' | 'md' | 'lg'", "'md'", "Size of all avatars"],
                [
                  "overlap",
                  "string",
                  "'-ml-3'",
                  "CSS class for overlap spacing between avatars",
                ],
                [
                  "className",
                  "string",
                  '""',
                  "Additional custom CSS class for the container",
                ],
              ].map(([prop, type, def, desc]) => (
                <tr
                  key={prop}
                  className={`border-t ${theme === "dark" ? "border-gray-800" : "border-gray-200"
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

        {/* Basic AvatarGroup */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Basic AvatarGroup</h3>
        <div
          className={`border rounded-lg p-4 mb-6 flex justify-center transition-colors ${theme === "dark"
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
            }`}
        >
          <AvatarGroup avatars={sampleAvatars.slice(0, 3)} />
        </div>
        <CodeBlock
          code={`import { AvatarGroup } from "alope-ui";

const BasicGroupExample = () => {
  const avatars = [
    { imageSrc: "https://i.pravatar.cc/150?img=1", fallbackName: "John Doe" },
    { imageSrc: "https://i.pravatar.cc/150?img=2", fallbackName: "Jane Smith" },
    { imageSrc: "https://i.pravatar.cc/150?img=3", fallbackName: "Bob Wilson" },
  ];

  return <AvatarGroup avatars={avatars} />;
};`}
        />

        {/* With Max Visible Limit */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          With Max Visible Limit
        </h3>
        <div
          className={`border rounded-lg p-4 mb-6 flex justify-center transition-colors ${theme === "dark"
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
            }`}
        >
          <AvatarGroup avatars={sampleAvatars} maxVisible={3} />
        </div>
        <CodeBlock
          code={`const avatars = [
  { imageSrc: "https://i.pravatar.cc/150?img=1", fallbackName: "User 1" },
  { imageSrc: "https://i.pravatar.cc/150?img=2", fallbackName: "User 2" },
  { imageSrc: "https://i.pravatar.cc/150?img=3", fallbackName: "User 3" },
  { imageSrc: "https://i.pravatar.cc/150?img=4", fallbackName: "User 4" },
  { imageSrc: "https://i.pravatar.cc/150?img=5", fallbackName: "User 5" },
];

{/* Show only 3 avatars, rest shown as "+2" */}
<AvatarGroup avatars={avatars} maxVisible={3} />;`}
        />

        {/* Different Sizes */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Different Sizes</h3>
        <div
          className={`border rounded-lg p-4 mb-6 flex flex-col gap-4 items-center transition-colors ${theme === "dark"
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
            }`}
        >
          <AvatarGroup avatars={sampleAvatars} size="sm" />
          <AvatarGroup avatars={sampleAvatars} size="md" />
          <AvatarGroup avatars={sampleAvatars} size="lg" />
        </div>
        <CodeBlock
          code={`{
  /* Small size */
}
<AvatarGroup avatars={avatars} size="sm" />

{
  /* Medium size */
}
<AvatarGroup avatars={avatars} size="md" />

{
  /* Large size */
}
<AvatarGroup avatars={avatars} size="lg" />`}
        />

        {/* Custom Overlap */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Custom Overlap</h3>
        <div
          className={`border rounded-lg p-4 mb-6 flex flex-col gap-4 items-center transition-colors ${theme === "dark"
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
            }`}
        >
          <AvatarGroup avatars={sampleAvatars} overlap="-ml-4" />
          <AvatarGroup avatars={sampleAvatars} overlap="-ml-2" />
          <AvatarGroup avatars={sampleAvatars} overlap="" />
        </div>
        <CodeBlock
          code={`{/* More overlap */}
<AvatarGroup avatars={avatars} overlap="-ml-4" />

{/* Less overlap */}
<AvatarGroup avatars={avatars} overlap="-ml-2" />

{/* No overlap */}
<AvatarGroup avatars={avatars} overlap="" />`}
        />

        {/* Complete Example */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Complete AvatarGroup Example
        </h3>
        <div
          className={`border rounded-lg p-4 mb-6 flex justify-center transition-colors ${theme === "dark"
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
            }`}
        >
          <CompleteGroupExample />
        </div>
        <CodeBlock
          code={`import { AvatarGroup } from "alope-ui";

const CompleteGroupExample = () => {
  const teamMembers = [
    {
      imageSrc: "https://i.pravatar.cc/150?img=1",
      fallbackName: "John Doe",
      status: "online",
    },
    {
      imageSrc: "https://i.pravatar.cc/150?img=2",
      fallbackName: "Jane Smith",
      status: "online",
    },
    {
      imageSrc: "https://i.pravatar.cc/150?img=3",
      fallbackName: "Bob Wilson",
      status: "offline",
    },
    {
      fallbackName: "Alice Brown",
      fallbackColor: "success",
    },
    {
      fallbackName: "Charlie Davis",
      fallbackColor: "info",
    },
  ];

  return (
    <AvatarGroup
      avatars={teamMembers}
      maxVisible={3}
      size="md"
      overlap="-ml-3"
    />
  );
};`}
        />
      </div>
    </div>
  );
}

/* === Inline Example === */
function CompleteGroupExample() {
  const teamMembers: AvatarProps[] = [
    {
      imageSrc: "https://i.pravatar.cc/150?img=1",
      fallbackName: "John Doe",
      status: "online",
    },
    {
      imageSrc: "https://i.pravatar.cc/150?img=2",
      fallbackName: "Jane Smith",
      status: "online",
    },
    {
      imageSrc: "https://i.pravatar.cc/150?img=3",
      fallbackName: "Bob Wilson",
      status: "offline",
    },
    {
      fallbackName: "Alice Brown",
      fallbackColor: "success",
    },
    {
      fallbackName: "Charlie Davis",
      fallbackColor: "info",
    },
  ];

  return (
    <AvatarGroup
      avatars={teamMembers}
      maxVisible={3}
      size="md"
      overlap="-ml-3"
    />
  );
}
