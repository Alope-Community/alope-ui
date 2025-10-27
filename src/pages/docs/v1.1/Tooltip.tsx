"use client";

import { useState } from "react";
import CodeBlock from "../../../components/CodeBlock";
// import { Tooltip } from "alope-ui";
import { Info, HelpCircle } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";
import { Tooltip } from "../../../components";

export default function TooltipDocs() {
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
        <h2 className="text-4xl font-bold mb-6">Tooltip</h2>
        <p>
          The <code>Tooltip</code> component displays informative text when
          hovering over an element, with customizable placement, styling, and
          animation options.
        </p>

        {/* Import */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
        <CodeBlock code={`import { Tooltip } from "alope-ui";`} />

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
                  "children",
                  "React.ReactNode",
                  "required",
                  "Element that triggers the tooltip",
                ],
                ["text", "string", "required", "Text content of the tooltip"],
                [
                  "showArrow",
                  "boolean",
                  "true",
                  "Show arrow pointing to trigger element",
                ],
                [
                  "placement",
                  "'top' | 'bottom' | 'left' | 'right'",
                  "'top'",
                  "Position of tooltip relative to trigger",
                ],
                [
                  "offset",
                  "number",
                  "8",
                  "Distance from trigger element (in px)",
                ],
                [
                  "bgColor",
                  "string",
                  "'bg-gray-800 dark:bg-gray-600'",
                  "Background color class",
                ],
                [
                  "isOpen",
                  "boolean",
                  "undefined",
                  "Controlled visibility state",
                ],
                [
                  "onOpenChange",
                  "(open: boolean) => void",
                  "undefined",
                  "Callback when visibility changes",
                ],
                [
                  "disabled",
                  "boolean",
                  "false",
                  "Disable tooltip functionality",
                ],
                [
                  "animationDuration",
                  "number",
                  "300",
                  "Animation duration (in ms)",
                ],
                [
                  "delay",
                  "number",
                  "700",
                  "Delay before showing tooltip (in ms)",
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

        {/* Basic Tooltip */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Tooltip</h3>
        <div
          className={`border rounded-lg p-6 mb-6 flex justify-center transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Tooltip text="This is a helpful tooltip">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Hover me
            </button>
          </Tooltip>
        </div>
        <CodeBlock
          code={`import { Tooltip } from "alope-ui";

const BasicExample = () => {
  return (
    <Tooltip text="This is a helpful tooltip">
      <button className="px-4 py-2 bg-blue-500 text-white rounded">
        Hover me
      </button>
    </Tooltip>
  );
};`}
        />

        {/* Placement */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Placement</h3>
        <div
          className={`border rounded-lg p-6 flex flex-wrap gap-6 justify-center mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Top Placement */}
          <Tooltip text="Tooltip on top" placement="top">
            <button>Top</button>
          </Tooltip>

          {/* Bottom Placement */}
          <Tooltip text="Tooltip on bottom" placement="bottom">
            <button>Bottom</button>
          </Tooltip>

          {/* Left Placement */}
          <Tooltip text="Tooltip on left" placement="left">
            <button>Left</button>
          </Tooltip>

          {/* Right Placement */}
          <Tooltip text="Tooltip on right" placement="right">
            <button>Right</button>
          </Tooltip>
        </div>
        <CodeBlock
          code={`{
  /* Top Placement */
}
<Tooltip text="Tooltip on top" placement="top">
  <button>Top</button>
</Tooltip>;

{
  /* Bottom Placement */
}
<Tooltip text="Tooltip on bottom" placement="bottom">
  <button>Bottom</button>
</Tooltip>;

{
  /* Left Placement */
}
<Tooltip text="Tooltip on left" placement="left">
  <button>Left</button>
</Tooltip>;

{
  /* Right Placement */
}
<Tooltip text="Tooltip on right" placement="right">
  <button>Right</button>
</Tooltip>;`}
        />

        {/* Without Arrow */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Without Arrow</h3>
        <div
          className={`border rounded-lg p-6 flex justify-center mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Tooltip text="Tooltip without arrow" showArrow={false}>
            <button>No Arrow</button>
          </Tooltip>
        </div>
        <CodeBlock
          code={`<Tooltip text="Tooltip without arrow" showArrow={false}>
  <button>No Arrow</button>
</Tooltip>`}
        />

        {/* Custom Offset */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Custom Offset</h3>
        <div
          className={`border rounded-lg p-6 flex justify-center gap-6 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Small offset */}
          <Tooltip text="Close to element" offset={4}>
            <button>Small Offset</button>
          </Tooltip>

          {/* Large offset */}
          <Tooltip text="Far from element" offset={16}>
            <button>Large Offset</button>
          </Tooltip>
        </div>
        <CodeBlock
          code={`{
  /* Small offset */
}
<Tooltip text="Close to element" offset={4}>
  <button>Small Offset</button>
</Tooltip>;

{
  /* Large offset */
}
<Tooltip text="Far from element" offset={16}>
  <button>Large Offset</button>
</Tooltip>;`}
        />

        {/* Custom Background */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Custom Background Color
        </h3>
        <div
          className={`border rounded-lg p-6 flex flex-wrap gap-6 justify-center mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Tooltip text="Blue tooltip" bgColor="bg-blue-600">
            <button>Blue Tooltip</button>
          </Tooltip>
          <Tooltip text="Red tooltip" bgColor="bg-red-600">
            <button>Red Tooltip</button>
          </Tooltip>
          <Tooltip text="Green tooltip" bgColor="bg-green-600">
            <button>Green Tooltip</button>
          </Tooltip>
        </div>
        <CodeBlock
          code={`<Tooltip text="Blue tooltip" bgColor="bg-blue-600">
  <button>Blue Tooltip</button>
</Tooltip>

<Tooltip text="Red tooltip" bgColor="bg-red-600">
  <button>Red Tooltip</button>
</Tooltip>

<Tooltip text="Green tooltip" bgColor="bg-green-600">
  <button>Green Tooltip</button>
</Tooltip>`}
        />

        {/* Controlled Tooltip */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Controlled Tooltip
        </h3>
        <div
          className={`border rounded-lg p-6 mb-6 flex justify-center transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <ControlledTooltipExample />
        </div>
        <CodeBlock
          code={`import { useState } from "react";

const ControlledExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Tooltip
        text="Controlled tooltip"
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      >
        <button onClick={() => setIsOpen(!isOpen)}>Click to toggle</button>
      </Tooltip>
    </div>
  );
};`}
        />

        {/* Custom Animation */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Custom Animation</h3>
        <div
          className={`border rounded-lg p-6 flex flex-wrap gap-6 justify-center mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Fast animation */}
          <Tooltip text="Fast animation" animationDuration={150}>
            <button>Fast</button>
          </Tooltip>
          {/* Slow animation */}
          <Tooltip text="Slow animation" animationDuration={600}>
            <button>Slow</button>
          </Tooltip>
        </div>
        <CodeBlock
          code={`{
  /* Fast animation */
}
<Tooltip text="Fast animation" animationDuration={150}>
  <button>Fast</button>
</Tooltip>;

{
  /* Slow animation */
}
<Tooltip text="Slow animation" animationDuration={600}>
  <button>Slow</button>
</Tooltip>;`}
        />

        {/* Custom Delay */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Custom Delay</h3>
        <div
          className={`border rounded-lg p-6 flex flex-wrap gap-6 justify-center mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* No delay */}
          <Tooltip text="Instant tooltip" delay={0}>
            <button>No Delay</button>
          </Tooltip>
          {/* Long delay */}
          <Tooltip text="Patient tooltip" delay={1500}>
            <button>Long Delay</button>
          </Tooltip>
        </div>
        <CodeBlock
          code={`{
  /* No delay */
}
<Tooltip text="Instant tooltip" delay={0}>
  <button>No Delay</button>
</Tooltip>;

{
  /* Long delay */
}
<Tooltip text="Patient tooltip" delay={1500}>
  <button>Long Delay</button>
</Tooltip>;`}
        />

        {/* Disabled Tooltip */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Disabled Tooltip</h3>
        <div
          className={`border rounded-lg p-6 flex flex-wrap gap-6 justify-center mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Tooltip text="This won't show" disabled>
            <button>Disabled Tooltip</button>
          </Tooltip>
        </div>
        <CodeBlock
          code={`<Tooltip text="This won't show" disabled>
  <button>Disabled Tooltip</button>
</Tooltip>`}
        />

        {/* With Icons */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">With Icons</h3>
        <div
          className={`border rounded-lg p-6 flex flex-wrap gap-6 justify-center mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <Tooltip text="Additional information about this feature">
            <Info className="w-4 h-4 text-gray-500 cursor-help" />
          </Tooltip>

          <Tooltip text="Click for help documentation" placement="right">
            <HelpCircle className="w-5 h-5 text-blue-500 cursor-pointer" />
          </Tooltip>
        </div>
        <CodeBlock
          code={`import { Info, HelpCircle } from "lucide-react";

<Tooltip text="Additional information about this feature">
  <Info className="w-4 h-4 text-gray-500 cursor-help" />
</Tooltip>

<Tooltip text="Click for help documentation" placement="right">
  <HelpCircle className="w-5 h-5 text-blue-500 cursor-pointer" />
</Tooltip>`}
        />

        {/* Complete Example */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Complete Example</h3>
        <div
          className={`border rounded-lg p-6 flex flex-wrap gap-6 justify-center mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <CompleteExample />
        </div>
        <CodeBlock
          code={`import { Tooltip } from "alope-ui";
import { Info } from "lucide-react";

const UserProfile = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <span>Username</span>
        <Tooltip
          text="Your username is visible to all users"
          placement="top"
          bgColor="bg-blue-600"
          delay={500}
        >
          <Info className="w-4 h-4 text-gray-400 cursor-help" />
        </Tooltip>
      </div>

      <div className="flex items-center gap-2">
        <span>Email</span>
        <Tooltip
          text="Your email is kept private and secure"
          placement="right"
          showArrow={false}
          offset={12}
        >
          <Info className="w-4 h-4 text-gray-400 cursor-help" />
        </Tooltip>
      </div>

      <Tooltip text="Click to edit your profile" placement="bottom">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Edit Profile
        </button>
      </Tooltip>
    </div>
  );
};`}
        />
      </div>
    </div>
  );
}

/* === Inline Example Components === */
function ControlledTooltipExample() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Tooltip text="Controlled tooltip" isOpen={isOpen} onOpenChange={setIsOpen}>
      <button onClick={() => setIsOpen(!isOpen)}>Click to toggle</button>
    </Tooltip>
  );
}

function CompleteExample() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <span>Username</span>
        <Tooltip
          text="Your username is visible to all users"
          placement="top"
          bgColor="bg-blue-600"
          delay={500}
        >
          <Info className="w-4 h-4 text-gray-400 cursor-help" />
        </Tooltip>
      </div>

      <div className="flex items-center gap-2">
        <span>Email</span>
        <Tooltip
          text="Your email is kept private and secure"
          placement="right"
          showArrow={false}
          offset={12}
        >
          <Info className="w-4 h-4 text-gray-400 cursor-help" />
        </Tooltip>
      </div>

      <Tooltip text="Click to edit your profile" placement="bottom">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Edit Profile
        </button>
      </Tooltip>
    </div>
  );
}
