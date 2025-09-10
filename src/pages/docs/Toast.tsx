"use client";

import CodeBlock from "../../components/CodeBlock";
import { Button, useToast } from "alope-ui";

export default function ToastDocs() {
  const { addToast } = useToast();

  return (
    <div className="prose prose-slate max-w-none">
      <h2 className="text-4xl font-bold mb-6 text-gray-900">Toast</h2>
      <p className="text-gray-600 mb-8">
        The Toast component provides brief, auto-dismissable messages to inform
        users about actions or status updates.
      </p>

      {/* Adding Provider */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Adding Provider</h3>
      <p className="text-gray-600 mb-4">
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
      <p className="text-gray-600 mb-4">
        Use the <code>useToast()</code> hook to trigger toasts in your app.
      </p>
      <CodeBlock
        code={`import { useToast } from "alope-ui";
const { addToast } = useToast();`}
      />

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
              <td className="p-3 border font-mono">title</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">required</td>
              <td className="p-3 border">Toast title</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">message</td>
              <td className="p-3 border">string</td>
              <td className="p-3 border">required</td>
              <td className="p-3 border">Toast message content</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">type</td>
              <td className="p-3 border">
                'success' | 'error' | 'info' | 'warning'
              </td>
              <td className="p-3 border">'info'</td>
              <td className="p-3 border">Toast type/variant</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">variant</td>
              <td className="p-3 border">'filled' | 'outline'</td>
              <td className="p-3 border">'filled'</td>
              <td className="p-3 border">Toast visual style</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border font-mono">position</td>
              <td className="p-3 border">
                'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
              </td>
              <td className="p-3 border">'topRight'</td>
              <td className="p-3 border">Toast position on screen</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Examples Section */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Toast</h3>
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
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
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
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
      <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
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
  );
}
