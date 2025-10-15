"use client";

import { useState } from "react";
import CodeBlock from "../../../components/CodeBlock";
import { Pagination } from "alope-ui";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";

export default function PaginationDocs() {
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);

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
        <h2 className="text-4xl font-bold mb-6">Pagination</h2>
        <p>
          The <code>Pagination</code> component provides navigation controls for
          paginated content, supporting both simplified and full pagination
          modes with customizable appearance.
        </p>

        {/* Import */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
        <CodeBlock code={`import { Pagination } from "alope-ui";`} />

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
                [
                  "currentPage",
                  "number",
                  "required",
                  "Current active page number",
                ],
                [
                  "onPageChange",
                  "(page: number) => void",
                  "required",
                  "Callback function when page changes",
                ],
                ["count", "number", "undefined", "Total number of items"],
                ["pageSize", "number", "undefined", "Number of items per page"],
                [
                  "totalPages",
                  "number",
                  "undefined",
                  "Total number of pages (deprecated)",
                ],
                [
                  "format",
                  "'none' | 'long'",
                  "'none'",
                  "Format for displaying page info",
                ],
                [
                  "simplified",
                  "boolean",
                  "false",
                  "Show simplified pagination (prev/next only)",
                ],
                [
                  "asLink",
                  "boolean",
                  "false",
                  "Render pagination buttons as links",
                ],
                [
                  "getPageHref",
                  "(page: number) => string",
                  "undefined",
                  "Custom href generator for pagination links",
                ],
                [
                  "siblingCount",
                  "number",
                  "1",
                  "Number of page buttons to show on each side",
                ],
                [
                  "prevIcon",
                  "React.ReactNode",
                  "'<'",
                  "Custom icon for previous button",
                ],
                [
                  "nextIcon",
                  "React.ReactNode",
                  "'>'",
                  "Custom icon for next button",
                ],
                [
                  "size",
                  "'sm' | 'md' | 'lg'",
                  "'sm'",
                  "Size variant of pagination buttons",
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

        {/* Basic Pagination */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Pagination</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Pagination
            currentPage={currentPage}
            count={100}
            pageSize={10}
            onPageChange={setCurrentPage}
          />
        </div>
        <CodeBlock
          code={`import { useState } from "react";
import { Pagination } from "alope-ui";

const BasicExample = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      currentPage={currentPage}
      count={100}
      pageSize={10}
      onPageChange={setCurrentPage}
    />
  );
};`}
        />

        {/* Simplified Pagination */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Simplified Pagination
        </h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Pagination
            currentPage={currentPage}
            count={100}
            pageSize={10}
            onPageChange={setCurrentPage}
            simplified
          />
        </div>
        <CodeBlock
          code={`const SimplifiedExample = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      currentPage={currentPage}
      count={100}
      pageSize={10}
      onPageChange={setCurrentPage}
      simplified
    />
  );
};`}
        />

        {/* Pagination with Format */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Pagination with Format
        </h3>
        <div
          className={`border rounded-lg p-4 flex flex-col gap-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* None Format - Shows page numbers */}
          <Pagination
            currentPage={currentPage}
            count={100}
            pageSize={10}
            onPageChange={setCurrentPage}
            format="none"
            simplified
          />
          {/* Long Format - Shows item range */}
          <Pagination
            currentPage={currentPage}
            count={100}
            pageSize={10}
            onPageChange={setCurrentPage}
            format="long"
            simplified
          />
        </div>
        <CodeBlock
          code={`{
  /* None Format - Shows page numbers */
}
<Pagination
  currentPage={currentPage}
  count={100}
  pageSize={10}
  onPageChange={setCurrentPage}
  format="none"
  simplified
/>

{
  /* Long Format - Shows item range */
}
<Pagination
  currentPage={currentPage}
  count={100}
  pageSize={10}
  onPageChange={setCurrentPage}
  format="long"
  simplified
/>`}
        />

        {/* Sizes */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Sizes</h3>
        <div
          className={`border rounded-lg p-4 flex flex-col gap-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Small Size */}
          <Pagination
            currentPage={currentPage}
            count={100}
            pageSize={10}
            onPageChange={setCurrentPage}
            size="sm"
          />

          {/* Medium Size */}
          <Pagination
            currentPage={currentPage}
            count={100}
            pageSize={10}
            onPageChange={setCurrentPage}
            size="md"
          />

          {/* Large Size */}
          <Pagination
            currentPage={currentPage}
            count={100}
            pageSize={10}
            onPageChange={setCurrentPage}
            size="lg"
          />
        </div>
        <CodeBlock
          code={`{
  /* Small Size */
}
<Pagination
  currentPage={currentPage}
  count={100}
  pageSize={10}
  onPageChange={setCurrentPage}
  size="sm"
/>

{
  /* Medium Size */
}
<Pagination
  currentPage={currentPage}
  count={100}
  pageSize={10}
  onPageChange={setCurrentPage}
  size="md"
/>

{
  /* Large Size */
}
<Pagination
  currentPage={currentPage}
  count={100}
  pageSize={10}
  onPageChange={setCurrentPage}
  size="lg"
/>`}
        />

        {/* Custom Sibling Count */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Custom Sibling Count
        </h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Pagination
            currentPage={currentPage}
            totalPages={100}
            pageSize={10}
            onPageChange={setCurrentPage}
            siblingCount={2}
          />
        </div>
        <CodeBlock
          code={`{
  /* Show 2 page buttons on each side */
}
<Pagination
  currentPage={currentPage}
  count={100}
  pageSize={10}
  onPageChange={setCurrentPage}
  siblingCount={2}
/>`}
        />

        {/* Custom Icons */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Custom Icons</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Pagination
            currentPage={currentPage}
            count={100}
            pageSize={10}
            onPageChange={setCurrentPage}
            prevIcon={<ChevronLeft size={16} />}
            nextIcon={<ChevronRight size={16} />}
          />
        </div>
        <CodeBlock
          code={`import { ChevronLeft, ChevronRight } from "lucide-react";

<Pagination
  currentPage={currentPage}
  count={100}
  pageSize={10}
  onPageChange={setCurrentPage}
  prevIcon={<ChevronLeft size={16} />}
  nextIcon={<ChevronRight size={16} />}
/>`}
        />

        {/* As Links */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">As Links</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Pagination
            currentPage={currentPage}
            count={100}
            pageSize={10}
            onPageChange={setCurrentPage}
            asLink
            getPageHref={(page) => `/products?page=${page}`}
          />
        </div>
        <CodeBlock
          code={`<Pagination
  currentPage={currentPage}
  count={100}
  pageSize={10}
  onPageChange={setCurrentPage}
  asLink
  getPageHref={(page) => \`/products?page=\${page}\`}
/>`}
        />

        {/* Using Total Pages */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Using Total Pages (Legacy)
        </h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* This approach is deprecated, prefer using count + pageSize */}
          <Pagination
            currentPage={currentPage}
            totalPages={10}
            onPageChange={setCurrentPage}
          />
        </div>
        <CodeBlock
          code={`{
  /* This approach is deprecated, prefer using count + pageSize */
}
<Pagination
  currentPage={currentPage}
  totalPages={10}
  onPageChange={setCurrentPage}
/>;`}
        />
      </div>
    </div>
  );
}
