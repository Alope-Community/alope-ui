"use client";

import CodeBlock from "../../components/CodeBlock";
import { Button, useToast } from "alope-ui";
import { useTheme } from "../../context/ThemeContext";

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
          The Toast component provides brief, auto-dismissable messages to inform
          users about actions or status updates.
        </p>

        {/* Adding Provider */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Adding Provider</h3>
        <p>
          First, import the <code>ToastProvider</code> and wrap your main
          application component (e.g. in <code>App.tsx</code>).
        </p>
        <CodeBlock
          code={`import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ToastProvider } from "alope-ui";

createRoot(document.getElementById("root")!).render(
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
        <CodeBlock
          code={`import { useToast } from "alope-ui";
const { addToast } = useToast();`}
        />

        {/* Props Section */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Props</h3>
        <div className="overflow-x-auto mb-10">
          <table
            className={`w-full border rounded-lg shadow-sm text-sm transition-colors ${
              theme === "dark"
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <thead className={theme === "dark" ? "bg-gray-700" : "bg-gray-100"}>
              <tr>
                <th className="p-3 border">Prop</th>
                <th className="p-3 border">Type</th>
                <th className="p-3 border">Default</th>
                <th className="p-3 border">Description</th>
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
              ].map(([prop, type, def, desc], i) => (
                <tr
                  key={i}
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
        <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Toast</h3>
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
          code={`const { addToast } = useToast();

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
</Button>`}
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
              Success Toast
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
              Error Toast
            </Button>
            <Button
              onClick={() =>
                addToast({
                  title: "Info",
                  message: "This is an info message!",
                  type: "info",
                  variant: "outline",
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
                  variant: "outline",
                })
              }
            >
              Warning Toast
            </Button>
          </div>
        </div>
        <CodeBlock
          code={`<Button
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
                  title: "Top Right",
                  message: "This toast appears at top right!",
                  type: "error",
                  variant: "outline",
                  position: "topRight",
                })
              }
            >
              Top Right Toast
            </Button>
            <Button
              onClick={() =>
                addToast({
                  title: "Bottom Left",
                  message: "This toast appears at bottom left!",
                  type: "info",
                  variant: "outline",
                  position: "bottomLeft",
                })
              }
            >
              Bottom Left Toast
            </Button>
            <Button
              onClick={() =>
                addToast({
                  title: "Bottom Right",
                  message: "This toast appears at bottom right!",
                  type: "warning",
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
          code={`<Button
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
</Button>`}
        />
      </div>
    </div>
  );
}