"use client";

import { useState } from "react";
import CodeBlock from "../../../components/CodeBlock";
// import { Toggle } from "alope-ui";
import { useTheme } from "../../../context/ThemeContext";
import { Toggle } from "../../../components";

export default function ToggleDocs() {
  const { theme } = useTheme();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className={`transition-colors ${
        theme === "dark"
          ? "prose prose-invert max-w-none"
          : "prose prose-slate prose-headings:text-gray-900 max-w-none"
      }`}
    >
      <div className="container mx-auto px-4 overflow-x-hidden">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-6">Toggle</h2>
        <p>
          The <code>Toggle</code> component provides an animated switch control
          for toggling between on/off states with various visual styles and
          sizes.
        </p>

        {/* Import */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
        <CodeBlock code={`import { Toggle } from "alope-ui";`} />

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
                  "variant",
                  "'primary' | 'error' | 'warning' | 'success' | 'info' | 'secondary'",
                  "'primary'",
                  "Color variant of the toggle",
                ],
                [
                  "customSize",
                  "'sm' | 'md' | 'lg'",
                  "'md'",
                  "Size of the toggle switch",
                ],
                [
                  "thumbShape",
                  "'stadium' | 'rounded'",
                  "'stadium'",
                  "Shape of the toggle thumb",
                ],
                [
                  "label",
                  "string",
                  "undefined",
                  "Label text displayed next to toggle",
                ],
                [
                  "wrapperClassName",
                  "string",
                  '""',
                  "CSS class for wrapper element",
                ],
                ["labelClassName", "string", '""', "CSS class for label text"],
                [
                  "...props",
                  "InputHTMLAttributes<HTMLInputElement>",
                  "-",
                  "All standard HTML input attributes",
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

        {/* Basic Toggle */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Toggle</h3>
        <ExampleBox theme={theme}>
          <Toggle
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
        </ExampleBox>
        <CodeBlock
          code={`
            import { useState } from "react";
            import { Toggle } from "alope-ui";

            const BasicExample = () => {
              const [isChecked, setIsChecked] = useState(false);

              return (
                <Toggle
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
              );
            };`}
        />
      </div>
    </div>
  );
}

/* === Example Box Wrapper === */
function ExampleBox({
  theme,
  children,
}: {
  theme: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`border rounded-lg p-4 mb-6 transition-colors ${
        theme === "dark"
          ? "bg-gray-800 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      {children}
    </div>
  );
}

/* === Inline Examples === */
// function VariantsExample() {
//   const [isChecked, setIsChecked] = useState(false);
//   const variants = [
//     "primary",
//     "error",
//     "warning",
//     "success",
//     "info",
//     "secondary",
//   ] as const;
//   return (
//     <div className="flex flex-wrap gap-4">
//       {variants.map((v) => (
//         <Toggle
//           key={v}
//           variant={v}
//           label={v.charAt(0).toUpperCase() + v.slice(1)}
//           checked={isChecked}
//           onChange={(e) => setIsChecked(e.target.checked)}
//         />
//       ))}
//     </div>
//   );
// }

// function SizesExample() {
//   const [isChecked, setIsChecked] = useState(true);
//   const sizes = ["sm", "md", "lg"] as const;
//   return (
//     <div className="flex flex-wrap gap-4">
//       {sizes.map((s) => (
//         <Toggle
//           key={s}
//           customSize={s}
//           label={s.charAt(0).toUpperCase() + s.slice(1)}
//           checked={isChecked}
//           onChange={(e) => setIsChecked(e.target.checked)}
//         />
//       ))}
//     </div>
//   );
// }

// function ShapesExample() {
//   const [isChecked, setIsChecked] = useState(true);
//   return (
//     <div className="flex flex-wrap gap-4">
//       <Toggle
//         thumbShape="stadium"
//         label="Stadium"
//         checked={isChecked}
//         onChange={(e) => setIsChecked(e.target.checked)}
//       />
//       <Toggle
//         thumbShape="rounded"
//         label="Rounded"
//         checked={isChecked}
//         onChange={(e) => setIsChecked(e.target.checked)}
//       />
//     </div>
//   );
// }

// function CompleteExample() {
//   const [settings, setSettings] = useState({
//     notifications: false,
//     darkMode: true,
//     autoSave: false,
//   });

//   const handleToggle =
//     (key: keyof typeof settings) =>
//       (e: React.ChangeEvent<HTMLInputElement>) => {
//         setSettings((prev) => ({ ...prev, [key]: e.target.checked }));
//       };

//   return (
//     <div className="space-y-4">
//       <Toggle
//         checked={settings.notifications}
//         onChange={handleToggle("notifications")}
//         variant="primary"
//         label="Enable notifications"
//       />
//       <Toggle
//         checked={settings.darkMode}
//         onChange={handleToggle("darkMode")}
//         variant="secondary"
//         label="Dark mode"
//       />
//       <Toggle
//         checked={settings.autoSave}
//         onChange={handleToggle("autoSave")}
//         variant="success"
//         label="Auto-save documents"
//       />
//     </div>
//   );
// }
