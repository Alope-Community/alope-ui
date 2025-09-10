"use client";

import { useState } from "react";
import { Button, Modal, TextInput, SelectInput } from "alope-ui";
import CodeBlock from "../../components/CodeBlock";

export default function ModalDocs() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [smallOpen, setSmallOpen] = useState(false);
  const [mediumOpen, setMediumOpen] = useState(false);
  const [largeOpen, setLargeOpen] = useState(false);
  const [xLargeOpen, setXLargeOpen] = useState(false);

  const handleDelete = () => {
    console.log("Item deleted");
    setIsDeleteOpen(false);
  };

  return (
    <div className="prose prose-slate max-w-none">
      <h2 className="text-4xl font-bold mb-6 text-gray-900">Modal</h2>
      <p className="text-gray-600 mb-8">
        The Modal component provides overlay dialogs for important user
        interactions and information.
      </p>

      {/* Import Section */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
      <CodeBlock code={`import { Modal } from "alope-ui";`} />

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
              <td className="p-3 border font-mono">isOpen</td>
              <td className="p-3 border">boolean</td>
              <td className="p-3 border">false</td>
              <td className="p-3 border">Modal visibility state</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">onClose</td>
              <td className="p-3 border">function</td>
              <td className="p-3 border">required</td>
              <td className="p-3 border">Close handler</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">title</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Modal title</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">size</td>
              <td className="p-3 border">'sm' | 'md' | 'lg' | 'xl'</td>
              <td className="p-3 border">'md'</td>
              <td className="p-3 border">Modal size</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">overlayClose</td>
              <td className="p-3 border">boolean</td>
              <td className="p-3 border">true</td>
              <td className="p-3 border">Close on overlay click</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">children</td>
              <td className="p-3 border">ReactNode</td>
              <td className="p-3 border">undefined</td>
              <td className="p-3 border">Modal content</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Examples Section */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Modal</h3>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Basic Modal"
          size="md"
        >
          <div className="p-4">
            <p className="text-gray-600 mb-4">
              This is a basic modal example. You can put any content here.
            </p>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)}>Confirm</Button>
            </div>
          </div>
        </Modal>
      </div>
      <CodeBlock
        code={`const [isOpen, setIsOpen] = useState(false);

<>
  <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

  <Modal
    isOpen={isOpen}
    onClose={() => setIsOpen(false)}
    title="Basic Modal"
    size="md"
  >
    <div className="p-4">
      <p className="text-gray-600 mb-4">
        This is a basic modal example. You can put any content here.
      </p>
      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
        <Button onClick={() => setIsOpen(false)}>Confirm</Button>
      </div>
    </div>
  </Modal>
</>`}
      />

      <h3 className="text-2xl font-semibold mt-10 mb-3">Confirmation Modal</h3>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
        <Button variantType="error" onClick={() => setIsDeleteOpen(true)}>
          Delete Item
        </Button>
        <Modal
          isOpen={isDeleteOpen}
          onClose={() => setIsDeleteOpen(false)}
          title="Confirm Deletion"
          size="sm"
          overlayClose={false}
        >
          <div className="p-4">
            <p className="text-gray-700 mb-6">
              Are you sure you want to delete this item? This action cannot be
              undone.
            </p>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsDeleteOpen(false)}>
                Cancel
              </Button>
              <Button variantType="error" onClick={handleDelete}>
                Yes, Delete
              </Button>
            </div>
          </div>
        </Modal>
      </div>
      <CodeBlock
        code={`const [isDeleteOpen, setIsDeleteOpen] = useState(false);

const handleDelete = () => {
  console.log("Item deleted");
  setIsDeleteOpen(false);
};

<>
  <Button variantType="error" onClick={() => setIsDeleteOpen(true)}>Delete Item</Button>

  <Modal
    isOpen={isDeleteOpen}
    onClose={() => setIsDeleteOpen(false)}
    title="Confirm Deletion"
    size="sm"
    overlayClose={false}
  >
    <div className="p-4">
      <p className="text-gray-700 mb-6">
        Are you sure you want to delete this item? This action cannot be undone.
      </p>
      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={() => setIsDeleteOpen(false)}>Cancel</Button>
        <Button variantType="error" onClick={handleDelete}>Yes, Delete</Button>
      </div>
    </div>
  </Modal>
</>`}
      />

      <h3 className="text-2xl font-semibold mt-10 mb-3">Form Modal</h3>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
        <Button onClick={() => setIsFormOpen(true)}>Add User</Button>
        <Modal
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          title="Add New User"
          size="lg"
        >
          <div className="p-6">
            <form className="space-y-4">
              <TextInput
                label="Full Name"
                placeholder="Enter full name"
                required
              />
              <TextInput
                type="email"
                label="Email Address"
                placeholder="Enter email address"
                required
              />
              <SelectInput
                label="Role"
                options={[
                  { label: "Admin", value: "admin" },
                  { label: "User", value: "user" },
                  { label: "Moderator", value: "moderator" },
                ]}
                placeholder="Select role"
              />
              <div className="flex justify-end gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsFormOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" variantType="success">
                  Create User
                </Button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
      <CodeBlock
        code={`const [isFormOpen, setIsFormOpen] = useState(false);

<>
  <Button onClick={() => setIsFormOpen(true)}>Add User</Button>

  <Modal
    isOpen={isFormOpen}
    onClose={() => setIsFormOpen(false)}
    title="Add New User"
    size="lg"
  >
    <div className="p-6">
      <form className="space-y-4">
        <TextInput label="Full Name" placeholder="Enter full name" required />
        <TextInput type="email" label="Email Address" placeholder="Enter email address" required />
        <SelectInput
          label="Role"
          options={[
            { label: "Admin", value: "admin" },
            { label: "User", value: "user" },
            { label: "Moderator", value: "moderator" },
          ]}
          placeholder="Select role"
        />
        <div className="flex justify-end gap-3 pt-4">
          <Button type="button" variant="outline" onClick={() => setIsFormOpen(false)}>Cancel</Button>
          <Button type="submit" variantType="success">Create User</Button>
        </div>
      </form>
    </div>
  </Modal>
</>`}
      />

      <h3 className="text-2xl font-semibold mt-10 mb-3">Modal Sizes</h3>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => setSmallOpen(true)}>Small Modal</Button>
          <Button onClick={() => setMediumOpen(true)}>Medium Modal</Button>
          <Button onClick={() => setLargeOpen(true)}>Large Modal</Button>
          <Button onClick={() => setXLargeOpen(true)}>X-Large Modal</Button>
        </div>

        <Modal
          isOpen={smallOpen}
          onClose={() => setSmallOpen(false)}
          title="Small"
          size="sm"
        >
          <div className="p-4">This is a small modal.</div>
        </Modal>

        <Modal
          isOpen={mediumOpen}
          onClose={() => setMediumOpen(false)}
          title="Medium"
          size="md"
        >
          <div className="p-4">This is a medium modal.</div>
        </Modal>

        <Modal
          isOpen={largeOpen}
          onClose={() => setLargeOpen(false)}
          title="Large"
          size="lg"
        >
          <div className="p-4">This is a large modal.</div>
        </Modal>

        <Modal
          isOpen={xLargeOpen}
          onClose={() => setXLargeOpen(false)}
          title="X-Large"
          size="xl"
        >
          <div className="p-4">This is an extra large modal.</div>
        </Modal>
      </div>
      <CodeBlock
        code={`const [smallOpen, setSmallOpen] = useState(false);
const [mediumOpen, setMediumOpen] = useState(false);
const [largeOpen, setLargeOpen] = useState(false);
const [xLargeOpen, setXLargeOpen] = useState(false);

<div className="flex flex-wrap gap-2">
  <Button onClick={() => setSmallOpen(true)}>Small Modal</Button>
  <Button onClick={() => setMediumOpen(true)}>Medium Modal</Button>
  <Button onClick={() => setLargeOpen(true)}>Large Modal</Button>
  <Button onClick={() => setXLargeOpen(true)}>X-Large Modal</Button>
</div>

<Modal isOpen={smallOpen} onClose={() => setSmallOpen(false)} title="Small" size="sm">
  <div className="p-4">This is a small modal.</div>
</Modal>

<Modal isOpen={mediumOpen} onClose={() => setMediumOpen(false)} title="Medium" size="md">
  <div className="p-4">This is a medium modal.</div>
</Modal>

<Modal isOpen={largeOpen} onClose={() => setLargeOpen(false)} title="Large" size="lg">
  <div className="p-4">This is a large modal.</div>
</Modal>

<Modal isOpen={xLargeOpen} onClose={() => setXLargeOpen(false)} title="X-Large" size="xl">
  <div className="p-4">This is an extra large modal.</div>
</Modal>`}
      />
    </div>
  );
}
