"use client";

import CodeBlock from "../../../components/CodeBlock";
import { Button, useToast } from "alope-ui";
import { useTheme } from "../../../context/ThemeContext";

export default function ToastDocs() {
  const { addToast } = useToast();
  const { theme } = useTheme();

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div
        className={`prose max-w-none transition-colors ${
          theme === "dark"
            ? "prose-invert"
            : "prose-slate prose-headings:text-gray-900"
        }`}
      >
        {/* Title */}
        <h2 className="text-4xl font-bold mb-6">Toast</h2>
        <p>
          The Toast component provides brief, auto-dismissable messages to
          inform users about actions or status updates.
        </p>

        {/* Adding Provider */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Adding Provider</h3>
        <p>
          First, import the <code>ToastProvider</code> and wrap your main
          application component (e.g. in <code>App.tsx</code>).
        </p>
        <CodeBlock code={`import { ToastProvider } from "alope-ui";`} />

        <p>
          Then, wrap your main application component with the provider (e.g. in
          App.tsx or your entry file):
        </p>
        <CodeBlock
          code={`import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ToastProvider } from 'alope-ui';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </StrictMode>
);`}
        />

        {/* Usage Section */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Use Toast</h3>
        <p>
          Use the <code>useToast()</code> hook to trigger toasts in your app.
        </p>
        <CodeBlock code={`import { useToast } from "alope-ui";`} />
        <CodeBlock code={`const { addToast } = useToast();`} />

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
                ["title", "string", "required", "Toast title"],
                ["message", "string", "required", "Toast message content"],
                [
                  "type",
                  "'success' | 'error' | 'info' | 'warning'",
                  "'info'",
                  "Toast type/variant",
                ],
                [
                  "variant",
                  "'filled' | 'outline'",
                  "'filled'",
                  "Toast visual style",
                ],
                [
                  "position",
                  "'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'",
                  "'topRight'",
                  "Toast position on screen",
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
        <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Toast</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="flex gap-4">
            <Button
              onClick={() =>
                addToast({
                  title: "Success",
                  message: "This is a success message!",
                  type: "success",
                })
              }
            >
              Success Toast
            </Button>

            <Button
              onClick={() =>
                addToast({
                  title: "Error",
                  message: "This is an error message!",
                  type: "error",
                })
              }
            >
              Error Toast
            </Button>

            <Button
              onClick={() =>
                addToast({
                  title: "Info",
                  message: "This is an info message!",
                  type: "info",
                })
              }
            >
              Info Toast
            </Button>

            <Button
              onClick={() =>
                addToast({
                  title: "Warning",
                  message: "This is a warning message!",
                  type: "warning",
                })
              }
            >
              Warning Toast
            </Button>
          </div>
        </div>
        <CodeBlock
          code={`import { useToast } from "alope-ui";

const BasicExample = () => {
  const { addToast } = useToast();

  return (
    <div className="flex gap-4">
      <Button
        onClick={() =>
          addToast({
            title: "Success",
            message: "This is a success message!",
            type: "success",
          })
        }
      >
        Success Toast
      </Button>

      <Button
        onClick={() =>
          addToast({
            title: "Error",
            message: "This is an error message!",
            type: "error",
          })
        }
      >
        Error Toast
      </Button>

      <Button
        onClick={() =>
          addToast({
            title: "Info",
            message: "This is an info message!",
            type: "info",
          })
        }
      >
        Info Toast
      </Button>

      <Button
        onClick={() =>
          addToast({
            title: "Warning",
            message: "This is a warning message!",
            type: "warning",
          })
        }
      >
        Warning Toast
      </Button>
    </div>
  );
};`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">Outline Variant</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() =>
                addToast({
                  title: "Success",
                  message: "This is a success message!",
                  type: "success",
                  variant: "outline",
                })
              }
            >
              Success Outline Toast
            </Button>

            <Button
              onClick={() =>
                addToast({
                  title: "Error",
                  message: "This is an error message!",
                  type: "error",
                  variant: "outline",
                })
              }
            >
              Error Outline Toast
            </Button>
          </div>
        </div>
        <CodeBlock
          code={`<Button onClick={() => addToast({
  title: 'Success',
  message: 'This is a success message!',
  type: 'success',
  variant: 'outline'
})}>
  Success Outline Toast
</Button>

<Button onClick={() => addToast({
  title: 'Error',
  message: 'This is an error message!',
  type: 'error',
  variant: 'outline'
})}>
  Error Outline Toast
</Button>`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">Custom Position</h3>
        <div
          className={`border rounded-lg p-4 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() =>
                addToast({
                  title: "Top Left",
                  message: "This toast appears at top left!",
                  type: "success",
                  variant: "outline",
                  position: "topLeft",
                })
              }
            >
              Top Left Toast
            </Button>

            <Button
              onClick={() =>
                addToast({
                  title: "Bottom Right",
                  message: "This toast appears at bottom right!",
                  type: "info",
                  variant: "outline",
                  position: "bottomRight",
                })
              }
            >
              Bottom Right Toast
            </Button>
          </div>
        </div>
        <CodeBlock
          code={`<Button onClick={() => addToast({
  title: 'Top Left',
  message: 'This toast appears at top left!',
  type: 'success',
  variant: 'outline',
  position: 'topLeft'
})}>
  Top Left Toast
</Button>

<Button onClick={() => addToast({
  title: 'Bottom Right',
  message: 'This toast appears at bottom right!',
  type: 'info',
  variant: 'outline',
  position: 'bottomRight'
})}>
  Bottom Right Toast
</Button>`}
        />
      </div>
    </div>
  );
}
