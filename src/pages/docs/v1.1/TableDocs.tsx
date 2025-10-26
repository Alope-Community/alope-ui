"use client";

import { useState } from "react";
import CodeBlock from "../../../components/CodeBlock";
import { Table } from "alope-ui";
import type { Column } from "alope-ui";
import { useTheme } from "../../../context/ThemeContext";

export default function TableDocs() {
  const { theme } = useTheme();

  // sample data
  type User = {
    id: number;
    name: string;
    email: string;
    role: string;
  };

  const columns: Column<User>[] = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Role", accessor: "role" },
  ];

  const data: User[] = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Manager" },
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
        <h2 className="text-4xl font-bold mb-6">Table</h2>
        <p>
          The <code>Table</code> component provides a flexible and feature-rich
          data table with support for custom rendering, row selection, striping,
          sticky headers, and responsive design.
        </p>

        {/* Import */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
        <CodeBlock
          code={`import { Table } from "alope-ui";
import type { Column } from "alope-ui";`}
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
                [
                  "columns",
                  "Column<T>[]",
                  "required",
                  "Array of column configurations",
                ],
                ["data", "T[]", "required", "Array of data objects to display"],
                [
                  "striped",
                  "boolean",
                  "false",
                  "Enable alternating row colors",
                ],
                [
                  "stripeColor",
                  "string",
                  "undefined",
                  "Custom color for striped rows",
                ],
                [
                  "headerClassName",
                  "string",
                  '""',
                  "CSS class for table header",
                ],
                [
                  "dataColumnClassName",
                  "string",
                  '""',
                  "CSS class for data cells",
                ],
                ["dataRowClassName", "string", '""', "CSS class for data rows"],
                [
                  "tableClassName",
                  "string",
                  '""',
                  "CSS class for table element",
                ],
                ["captionClassName", "string", '""', "CSS class for caption"],
                [
                  "containerClassName",
                  "string",
                  '""',
                  "CSS class for container",
                ],
                [
                  "customEmptyData",
                  "React.ReactNode",
                  "undefined",
                  "Custom message when no data",
                ],
                ["size", "'sm' | 'md' | 'lg'", "'md'", "Size variant of table"],
                ["caption", "string", "undefined", "Table caption text"],
                [
                  "captionPosition",
                  "'top' | 'bottom'",
                  "'bottom'",
                  "Position of caption",
                ],
                [
                  "stickyHeader",
                  "boolean",
                  "false",
                  "Make header sticky on scroll",
                ],
                [
                  "selectable",
                  "boolean",
                  "false",
                  "Enable row selection with checkboxes",
                ],
                [
                  "onSelectionChange",
                  "(selected: T[]) => void",
                  "undefined",
                  "Callback when selection changes",
                ],
                ["selectedRows", "T[]", "[]", "Array of selected rows"],
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

        {/* Column Type */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Column Type</h3>
        <CodeBlock
          code={`type Column<T> = {
  header: string;
  accessor: keyof T;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};`}
        />

        {/* Basic Table */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Table</h3>
        <div
          className={`border rounded-lg p-4 mb-6 overflow-x-auto transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Table columns={columns} data={data} />
        </div>
        <CodeBlock
          code={`import { Table } from "alope-ui";
import type { Column } from "alope-ui";

type User = {
  id: number,
  name: string,
  email: string,
  role: string,
};

const columns: Column<User>[] = [
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
  { header: "Role", accessor: "role" },
];

const data: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Manager" },
];

const BasicExample = () => {
  return <Table columns={columns} data={data} />
};`}
        />

        {/* Striped */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Striped Table</h3>
        <div
          className={`border rounded-lg p-4 mb-6 overflow-x-auto transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Table columns={columns} data={data} striped />
        </div>
        <CodeBlock
          code={`<Table columns={columns} data={data} striped />;

{
  /* With custom stripe color */
}
<Table
  columns={columns}
  data={data}
  striped
  stripeColor="bg-blue-50 dark:bg-blue-900"
/>`}
        />

        {/* Sizes */}
        <h3 className="text-2xl font-semibold mt-10 mb-3 ">Sizes</h3>
        <div
          className={`border rounded-lg p-4 mb-6 flex flex-col gap-6 overflow-x-auto transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Table columns={columns} data={data} size="sm" />
          <Table columns={columns} data={data} size="md" />
          <Table columns={columns} data={data} size="lg" />
        </div>
        <CodeBlock
          code={`{
  /* Small Size */
}
<Table columns={columns} data={data} size="sm" />

{
  /* Medium Size */
}
<Table columns={columns} data={data} size="md" />

{
  /* Large Size */
}
<Table columns={columns} data={data} size="lg" />`}
        />

        {/* Custom Rendering */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Custom Rendering</h3>
        <CustomRenderExample />
        <CodeBlock
          code={`const columns: Column<User>[] = [
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
  {
    header: "Role",
    accessor: "role",
    render: (value, row) => (
      <span
        className={
          value === "Admin"
            ? "bg-red-100 text-red-800 px-2 py-1 rounded"
            : "bg-blue-100 text-blue-800 px-2 py-1 rounded"
        }
      >
        {value}
      </span>
    ),
  },
];

<Table columns={columns} data={data} />;`}
        />

        {/* Selectable Rows */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Selectable Rows</h3>
        <SelectableExample />
        <CodeBlock
          code={`import { useState } from "react";

const SelectableExample = () => {
  const [selectedRows, setSelectedRows] = useState<User[]>([]);

  return (
    <Table
      columns={columns}
      data={data}
      selectable
      selectedRows={selectedRows}
      onSelectionChange={setSelectedRows}
    />
  );
};`}
        />

        {/* Sticky Header */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Sticky Header</h3>
        <div
          className={`border rounded-lg p-4 mb-6 overflow-x-auto transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Table columns={columns} data={data} stickyHeader />
        </div>
        <CodeBlock
          code={`<Table columns={columns} data={data} stickyHeader />;`}
        />

        {/* With Caption */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">With Caption</h3>
        <div
          className={`border rounded-lg p-4 mb-6 overflow-x-auto transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Table
            columns={columns}
            data={data}
            caption="User Management Table"
            captionPosition="bottom"
          />
        </div>
        <CodeBlock
          code={`{
  /* Caption at bottom */
}
<Table
  columns={columns}
  data={data}
  caption="User Management Table"
  captionPosition="bottom"
/>

{
  /* Caption at top */
}
<Table
  columns={columns}
  data={data}
  caption="User Management Table"
  captionPosition="top"
/>`}
        />

        {/* Custom Empty State */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Custom Empty State
        </h3>
        <div
          className={`border rounded-lg p-4 mb-6 overflow-x-auto transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Table
            columns={columns}
            data={[]}
            customEmptyData={
              <div className="flex flex-col items-center gap-2 py-6">
                <span className="text-gray-500">No users found</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded">
                  Add User
                </button>
              </div>
            }
          />
        </div>
        <CodeBlock
          code={`<Table
  columns={columns}
  data={[]}
  customEmptyData={
    <div className="flex flex-col items-center gap-2">
      <span className="text-gray-500">No users found</span>
      <button className="px-4 py-2 bg-blue-500 text-white rounded">
        Add User
      </button>
    </div>
  }
/>`}
        />

        {/* Custom Styling */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Custom Styling</h3>
        <div
          className={`border rounded-lg p-4 mb-6 overflow-x-auto transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Table
            columns={columns}
            data={data}
            containerClassName="shadow-lg rounded-lg"
            tableClassName="border-2 border-blue-500"
            headerClassName="bg-blue-600 text-white"
            dataRowClassName="hover:bg-blue-50"
            dataColumnClassName="text-gray-700"
          />
        </div>
        <CodeBlock
          code={`<Table
  columns={columns}
  data={data}
  containerClassName="shadow-lg rounded-lg"
  tableClassName="border-2 border-blue-500"
  headerClassName="bg-blue-600 text-white"
  dataRowClassName="hover:bg-blue-50"
  dataColumnClassName="text-gray-700"
/>`}
        />

        {/* Complete Example */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Complete Example</h3>
        <ProductTable />

        <CodeBlock
          code={`import { useState } from "react";
import { Table } from "alope-ui";
import type { Column } from "alope-ui";

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  status: string;
};

const ProductTable = () => {
  const [selectedRows, setSelectedRows] = useState<Product[]>([]);

  const columns: Column<Product>[] = [
    { header: "Product Name", accessor: "name" },
    {
      header: "Price",
      accessor: "price",
      render: (value: number) => \`$\${value.toFixed(2)}\`,
    },
    { header: "Stock", accessor: "stock" },
    {
      header: "Status",
      accessor: "status",
      render: (value: string) => (
        <span
          className={
            value === "Available"
              ? "bg-green-100 text-green-800 px-2 py-1 rounded"
              : "bg-gray-100 text-gray-800 px-2 py-1 rounded"
          }
        >
          {value}
        </span>
      ),
    },
  ];

  const data: Product[] = [
    { id: 1, name: "Laptop", price: 999.99, stock: 15, status: "Available" },
    { id: 2, name: "Mouse", price: 29.99, stock: 0, status: "Out of Stock" },
    { id: 3, name: "Keyboard", price: 79.99, stock: 23, status: "Available" },
  ];

  return (
    <Table
      columns={columns}
      data={data}
      striped
      selectable
      selectedRows={selectedRows}
      onSelectionChange={setSelectedRows}
      stickyHeader
      caption="Product Inventory"
      size="md"
    />
  );
};`}
        />
      </div>
    </div>
  );
}

/* === Inline Components === */

function CustomRenderExample() {
  type User = { id: number; name: string; email: string; role: string };
  const columns: Column<User>[] = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    {
      header: "Role",
      accessor: "role",
      render: (value) => (
        <span
          className={
            value === "Admin"
              ? "bg-red-100 text-red-800 px-2 py-1 rounded"
              : "bg-blue-100 text-blue-800 px-2 py-1 rounded"
          }
        >
          {value}
        </span>
      ),
    },
  ];
  const data: User[] = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  ];
  return (
    <div className="border rounded-lg p-4 mb-6 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-x-auto">
      <Table columns={columns} data={data} />
    </div>
  );
}

function SelectableExample() {
  type User = { id: number; name: string; email: string; role: string };
  const [selectedRows, setSelectedRows] = useState<User[]>([]);
  const columns: Column<User>[] = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Role", accessor: "role" },
  ];
  const data: User[] = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  ];
  return (
    <div className="border rounded-lg p-4 mb-6 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-x-auto">
      <Table
        columns={columns}
        data={data}
        selectable
        selectedRows={selectedRows}
        onSelectionChange={setSelectedRows}
      />
    </div>
  );
}

function ProductTable() {
  type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
    status: string;
  };
  const [selectedRows, setSelectedRows] = useState<Product[]>([]);
  const columns: Column<Product>[] = [
    { header: "Product Name", accessor: "name" },
    {
      header: "Price",
      accessor: "price",
      render: (value) =>
        typeof value === "number"
          ? `$${value.toFixed(2)}`
          : `$${Number(value).toFixed(2)}`,
    },
    { header: "Stock", accessor: "stock" },
    {
      header: "Status",
      accessor: "status",
      render: (value) => (
        <span
          className={
            value === "Available"
              ? "bg-green-100 text-green-800 px-2 py-1 rounded"
              : "bg-gray-100 text-gray-800 px-2 py-1 rounded"
          }
        >
          {value}
        </span>
      ),
    },
  ];
  const data: Product[] = [
    { id: 1, name: "Laptop", price: 999.99, stock: 15, status: "Available" },
    { id: 2, name: "Mouse", price: 29.99, stock: 0, status: "Out of Stock" },
    { id: 3, name: "Keyboard", price: 79.99, stock: 23, status: "Available" },
  ];

  return (
    <div className="border rounded-lg p-4 mb-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-x-auto">
      <Table
        columns={columns}
        data={data}
        striped
        selectable
        selectedRows={selectedRows}
        onSelectionChange={setSelectedRows}
        stickyHeader
        caption="Product Inventory"
        size="md"
      />
    </div>
  );
}
