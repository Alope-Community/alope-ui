"use client";

import { useState, useEffect } from "react";
import CodeBlock from "../../../components/CodeBlock";
import { Skeleton } from "alope-ui";
import { useTheme } from "../../../context/ThemeContext";

export default function SkeletonDocs() {
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
        <h2 className="text-4xl font-bold mb-6">Skeleton</h2>
        <p>
          The <code>Skeleton</code> component displays a placeholder preview of
          content before the actual data is loaded, improving perceived
          performance and user experience.
        </p>

        {/* Import */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
        <CodeBlock code={`import { Skeleton } from "alope-ui";`} />

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
                [
                  "width",
                  "string",
                  "undefined",
                  "Width of the skeleton (CSS value)",
                ],
                [
                  "height",
                  "string",
                  "undefined",
                  "Height of the skeleton (CSS value)",
                ],
                [
                  "rounded",
                  "boolean",
                  "false",
                  "Apply rounded shape (full circle/pill)",
                ],
                [
                  "isLoading",
                  "boolean",
                  "true",
                  "Show skeleton or actual content",
                ],
                [
                  "children",
                  "React.ReactNode",
                  "undefined",
                  "Content to render when not loading",
                ],
                [
                  "animode",
                  "'shimmer' | 'flash'",
                  "'flash'",
                  "Animation mode for the skeleton",
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

        {/* Basic Skeleton */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Skeleton</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Skeleton width="200px" height="20px" />
        </div>
        <CodeBlock
          code={`import { Skeleton } from "alope-ui";

const BasicExample = () => {
  return <Skeleton width="200px" height="20px" />;
};`}
        />

        {/* With Children */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">With Children</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <WithChildrenExample />
        </div>
        <CodeBlock
          code={`import { useState, useEffect } from "react";

const SkeletonWithChildren = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <Skeleton isLoading={isLoading}>
      <p>This content will show after loading</p>
    </Skeleton>
  );
};`}
        />

        {/* Animation Modes */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Animation Modes</h3>
        <div
          className={`border rounded-lg p-4 flex flex-col gap-3 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Skeleton width="200px" height="20px" animode="flash" />
          <Skeleton width="200px" height="20px" animode="shimmer" />
        </div>
        <CodeBlock
          code={`{
  /* Flash animation */
}
<Skeleton width="200px" height="20px" animode="flash" />

{
  /* Shimmer animation */
}
<Skeleton width="200px" height="20px" animode="shimmer" />`}
        />

        {/* Rounded Skeleton */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Rounded Skeleton</h3>
        <div
          className={`border rounded-lg p-4 flex gap-4 flex-wrap mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Skeleton width="100px" height="100px" rounded />
          <Skeleton width="48px" height="48px" rounded />
        </div>
        <CodeBlock
          code={`{
  /* Rounded rectangle */
}
<Skeleton width="100px" height="100px" rounded />

{
  /* Avatar skeleton */
}
<Skeleton width="48px" height="48px" rounded />`}
        />

        {/* Different Sizes */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Different Sizes</h3>
        <div
          className={`border rounded-lg p-4 flex gap-4 flex-wrap mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Small */}
          <Skeleton width="100px" height="16px" />
          <Skeleton width="200px" height="20px" />
          <Skeleton width="300px" height="24px" />
          <Skeleton width="100%" height="20px" />
        </div>
        <CodeBlock
          code={`{
  /* Small */
}
<Skeleton width="100px" height="16px" />;

{
  /* Medium */
}
<Skeleton width="200px" height="20px" />;

{
  /* Large */
}
<Skeleton width="300px" height="24px" />;

{
  /* Full width */
}
<Skeleton width="100%" height="20px" />;`}
        />

        {/* Text Skeleton */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Text Skeleton</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <TextSkeleton />
        </div>
        <CodeBlock
          code={`const TextSkeleton = () => {
  return (
    <div className="space-y-2">
      <Skeleton width="100%" height="20px" />
      <Skeleton width="90%" height="20px" />
      <Skeleton width="95%" height="20px" />
      <Skeleton width="85%" height="20px" />
    </div>
  );
};`}
        />

        {/* Card Skeleton */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Card Skeleton</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <CardSkeleton />
        </div>
        <CodeBlock
          code={`const CardSkeleton = () => {
  return (
    <div className="border rounded-lg p-4 space-y-4">
      {/* Image skeleton */}
      <Skeleton width="100%" height="200px" />

      {/* Title skeleton */}
      <Skeleton width="70%" height="24px" />

      {/* Description skeleton */}
      <div className="space-y-2">
        <Skeleton width="100%" height="16px" />
        <Skeleton width="95%" height="16px" />
        <Skeleton width="90%" height="16px" />
      </div>

      {/* Button skeleton */}
      <Skeleton width="120px" height="40px" />
    </div>
  );
};`}
        />

        {/* Avatar Skeleton */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Avatar Skeleton</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <AvatarSkeleton />
        </div>
        <CodeBlock
          code={`const AvatarSkeleton = () => {
  return (
    <div className="flex items-center gap-3">
      <Skeleton width="48px" height="48px" rounded />
      <div className="space-y-2 flex-1">
        <Skeleton width="150px" height="16px" />
        <Skeleton width="100px" height="14px" />
      </div>
    </div>
  );
};`}
        />

        {/* List Skeleton */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">List Skeleton</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <ListSkeleton />
        </div>
        <CodeBlock
          code={`const ListSkeleton = () => {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton width="40px" height="40px" rounded />
          <div className="space-y-2 flex-1">
            <Skeleton width="60%" height="16px" />
            <Skeleton width="40%" height="14px" />
          </div>
        </div>
      ))}
    </div>
  );
};`}
        />

        {/* Table Skeleton */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Table Skeleton</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <TableSkeleton />
        </div>
        <CodeBlock
          code={`const TableSkeleton = () => {
  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="grid grid-cols-4 gap-4">
        <Skeleton width="100%" height="20px" />
        <Skeleton width="100%" height="20px" />
        <Skeleton width="100%" height="20px" />
        <Skeleton width="100%" height="20px" />
      </div>

      {/* Rows */}
      {[...Array(5)].map((_, i) => (
        <div key={i} className="grid grid-cols-4 gap-4">
          <Skeleton width="100%" height="16px" />
          <Skeleton width="100%" height="16px" />
          <Skeleton width="100%" height="16px" />
          <Skeleton width="100%" height="16px" />
        </div>
      ))}
    </div>
  );
};`}
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
          <ExampleComplete />
        </div>
        <CodeBlock
          code={`import { useState, useEffect } from "react";
import { Skeleton } from "alope-ui";

type User = {
  id: number,
  name: string,
  email: string,
  avatar: string,
};

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = (useState < User) | (null > null);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setUser({
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        avatar: "/avatar.jpg",
      });
      setIsLoading(false);
    };

    fetchUser();
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-md border rounded-lg p-6 space-y-4">
        {/* Avatar and name skeleton */}
        <div className="flex items-center gap-4">
          <Skeleton width="64px" height="64px" rounded />
          <div className="space-y-2 flex-1">
            <Skeleton width="150px" height="20px" />
            <Skeleton width="200px" height="16px" />
          </div>
        </div>

        {/* Bio skeleton */}
        <div className="space-y-2">
          <Skeleton width="100%" height="16px" />
          <Skeleton width="95%" height="16px" />
          <Skeleton width="90%" height="16px" />
        </div>

        {/* Stats skeleton */}
        <div className="flex gap-4">
          <Skeleton width="80px" height="40px" />
          <Skeleton width="80px" height="40px" />
          <Skeleton width="80px" height="40px" />
        </div>

        {/* Button skeleton */}
        <Skeleton width="100%" height="44px" />
      </div>
    );
  }

  return (
    <div className="max-w-md border rounded-lg p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={user?.avatar}
          alt={user?.name}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="text-xl font-bold">{user?.name}</h2>
          <p className="text-gray-600">{user?.email}</p>
        </div>
      </div>
      {/* Rest of the content */}
    </div>
  );
};`}
        />
      </div>
    </div>
  );
}

/* === Inline examples === */
function WithChildrenExample() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Skeleton isLoading={isLoading}>
      <p>This content will show after loading</p>
    </Skeleton>
  );
}

function TextSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton width="100%" height="20px" />
      <Skeleton width="90%" height="20px" />
      <Skeleton width="95%" height="20px" />
      <Skeleton width="85%" height="20px" />
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="border rounded-lg p-4 space-y-4">
      {/* Image skeleton */}
      <Skeleton width="100%" height="200px" />

      {/* Title skeleton */}
      <Skeleton width="70%" height="24px" />

      {/* Description skeleton */}
      <div className="space-y-2">
        <Skeleton width="100%" height="16px" />
        <Skeleton width="95%" height="16px" />
        <Skeleton width="90%" height="16px" />
      </div>

      {/* Button skeleton */}
      <Skeleton width="120px" height="40px" />
    </div>
  );
}

function AvatarSkeleton() {
  return (
    <div className="flex items-center gap-3">
      <Skeleton width="48px" height="48px" rounded />
      <div className="space-y-2 flex-1">
        <Skeleton width="150px" height="16px" />
        <Skeleton width="100px" height="14px" />
      </div>
    </div>
  );
}

function ListSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton width="40px" height="40px" rounded />
          <div className="space-y-2 flex-1">
            <Skeleton width="60%" height="16px" />
            <Skeleton width="40%" height="14px" />
          </div>
        </div>
      ))}
    </div>
  );
}

function TableSkeleton() {
  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="grid grid-cols-4 gap-4">
        <Skeleton width="100%" height="20px" />
        <Skeleton width="100%" height="20px" />
        <Skeleton width="100%" height="20px" />
        <Skeleton width="100%" height="20px" />
      </div>

      {/* Rows */}
      {[...Array(5)].map((_, i) => (
        <div key={i} className="grid grid-cols-4 gap-4">
          <Skeleton width="100%" height="16px" />
          <Skeleton width="100%" height="16px" />
          <Skeleton width="100%" height="16px" />
          <Skeleton width="100%" height="16px" />
        </div>
      ))}
    </div>
  );
}

function ExampleComplete() {
  type User = {
    id: number;
    name: string;
    email: string;
    avatar: string;
  };

  const UserProfile = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
      const fetchUser = async () => {
        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setUser({
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          avatar: "https://i.pravatar.cc/150?img=1",
        });
        setIsLoading(false);
      };

      fetchUser();
    }, []);

    if (isLoading) {
      return (
        <div className="max-w-md border rounded-lg p-6 space-y-4">
          {/* Avatar and name skeleton */}
          <div className="flex items-center gap-4">
            <Skeleton width="64px" height="64px" rounded />
            <div className="space-y-2 flex-1">
              <Skeleton width="150px" height="20px" />
              <Skeleton width="200px" height="16px" />
            </div>
          </div>

          {/* Bio skeleton */}
          <div className="space-y-2">
            <Skeleton width="100%" height="16px" />
            <Skeleton width="95%" height="16px" />
            <Skeleton width="90%" height="16px" />
          </div>

          {/* Stats skeleton */}
          <div className="flex gap-4">
            <Skeleton width="80px" height="40px" />
            <Skeleton width="80px" height="40px" />
            <Skeleton width="80px" height="40px" />
          </div>

          {/* Button skeleton */}
          <Skeleton width="100%" height="44px" />
        </div>
      );
    }

    return (
      <div className="max-w-md border rounded-lg p-6">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={user?.avatar}
            alt={user?.name}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold">{user?.name}</h2>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>
        {/* Rest of the content */}
      </div>
    );
  };

  return <UserProfile />; // ✅ tambahan agar komponen bisa tampil
}