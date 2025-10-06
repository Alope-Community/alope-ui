"use client";
import { Link } from "react-router-dom";
import CodeBlock from "../CodeBlock";

const Installation: React.FC = () => {
  return (
    <section className="relative px-4 md:px-10 lg:px-20 bg-white dark:bg-gray-900 transition-colors duration-500 pt-16 pb-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Get started any way you want
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Jump right into building with Alope UI — use the CDN, install it via
          package manager, or download the source code.
        </p>
        <Link
          to="/docs/installation"
          className="inline-block mt-6 text-[#80C41C] hover:underline font-medium"
        >
          Read installation docs →
        </Link>
      </div>

      <div className="mt-16 max-w-6xl mx-auto">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-lg font-semibold mb-4 flex items-center justify-center gap-2">
            Install via package manager
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Install Alope UI's source files via npm or yarn. Package-managed
            installs don't include documentation or our full build scripts.
          </p>
          <div className="space-y-4">
            <CodeBlock code={`npm install alope-ui`} lang="bash" label="npm" />
            <CodeBlock code={`yarn add alope-ui`} lang="bash" label="yarn" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;
