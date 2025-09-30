"use client";

import CodeBlock from "../CodeBlock";
import { Button } from "alope-ui";
import { useTheme } from "../../context/ThemeContext";

function Preview({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <div
      className={`p-4 mb-4 border rounded-lg shadow-sm transition-colors ${
        theme === "dark"
          ? "bg-gray-800 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      {children}
    </div>
  );
}

const Comparation: React.FC = () => {
  return (
    <div className="relative px-4 md:px-10 lg:px-20 bg-white dark:bg-gray-900 transition-colors duration-500 pt-10 pb-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Components, meet <span className="text-[#80C41C]">Alope UI</span> &{" "}
          <span className="text-[#80C41C]">React + Tailwind</span>
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300">
          Alope UI provides <strong>ready-to-use components</strong> such as
          buttons, cards, and modals. Meanwhile, React + Tailwind gives you{" "}
          <strong>full control</strong> with utility classes. Both have their
          own advantages depending on your needs.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-10">
          <div>
            <h2 className="text-lg font-semibold mb-4">Alope UI</h2>
            <Preview>
              <div className="flex flex-wrap gap-2">
                <Button variant="solid">Solid Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="plain">Plain Button</Button>
              </div>
            </Preview>
            <div className="overflow-x-auto">
              <CodeBlock
                code={`<div className="flex flex-wrap gap-2">
  <Button variant="solid">Solid Button</Button>
  <Button variant="outline">Outline Button</Button>
  <Button variant="ghost">Ghost Button</Button>
  <Button variant="plain">Plain Button</Button>
</div>`}
              />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">React + Tailwind</h2>
            <Preview>
              <div className="flex flex-wrap gap-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded transition-transform duration-150 hover:scale-95 hover:bg-blue-600 dark:hover:bg-blue-400 cursor-pointer">
                  Solid Button
                </button>
                <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded transition-transform duration-150 hover:scale-95 hover:bg-blue-50 hover:text-blue-600 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900 dark:hover:text-blue-200 cursor-pointer">
                  Outline Button
                </button>
                <button className="bg-transparent text-blue-500 px-4 py-2 rounded transition-transform duration-150 hover:scale-95 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900 cursor-pointer">
                  Ghost Button
                </button>
                <button className="px-4 py-2 rounded text-blue-500 transition-transform duration-150 hover:scale-95 dark:text-blue-400 cursor-pointer">
                  Plain Button
                </button>
              </div>
            </Preview>
            <div className="overflow-x-auto">
              <CodeBlock
                code={`<div className="flex flex-wrap gap-2">
  <button className="bg-blue-500 text-white px-4 py-2 rounded transition-transform duration-150 hover:scale-95 hover:bg-blue-600 dark:hover:bg-blue-400 cursor-pointer">Solid Button</button>
  <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded transition-transform duration-150 hover:scale-95 hover:bg-blue-50 hover:text-blue-600 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900 dark:hover:text-blue-200 cursor-pointer">Outline Button</button>
  <button className="bg-transparent text-blue-500 px-4 py-2 rounded transition-transform duration-150 hover:scale-95 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900 cursor-pointer">Ghost Button</button>
  <button className="px-4 py-2 rounded text-blue-500 transition-transform duration-150 hover:scale-95 dark:text-blue-400 cursor-pointer">Plain Button</button>
</div>`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparation;
