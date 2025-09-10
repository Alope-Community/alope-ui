"use client";

import CodeBlock from "../../components/CodeBlock";

export default function installation() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2 className="text-4xl font-bold mb-6 text-gray-900">Quick Start</h2>

      {/* Installation */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Installation</h3>
      <p className="text-gray-600">Using npm:</p>
      <CodeBlock code={`npm install alope-ui`} />

      {/* CSS Import */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Add Styles</h3>
      <p className="text-gray-600">
        Add <code>@import</code> directive(s) in your main CSS file:
      </p>
      <CodeBlock
        code={`/* index.css */

/* Make sure to import TailwindCSS first */
@import "tailwindcss";

/* Then import the styles from Alope UI */
@import "../node_modules/alope-ui/dist/index.css";`}
      />

      {/* Basic Setup */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Basic Setup</h3>
      <p className="text-gray-600">
        Import and use any component in your React application:
      </p>
      <CodeBlock
        code={`import React from "react";
import { Button } from "alope-ui";

function App() {
  return (
    <div className="App">
      <Button variant="solid" variantType="primary">
        Hello ALOPE UI!
      </Button>
    </div>
  );
}

export default App;`}
      />

      {/* Important Notes */}
      <h3 className="text-2xl font-semibold mt-10 mb-3">Important Notes</h3>
      <p className="text-gray-600">
        If you're using the <code>to</code> prop on a <code>Button</code> (or
        any other component that uses SPA-style navigation), make sure{" "}
        <code>react-router-dom</code> is properly configured.
      </p>
      <CodeBlock
        code={`import React from "react";
import { Button } from "alope-ui";

function App() {
  return (
    <div className="App">
      <Button to="/button" variant="solid" variantType="primary">
        Hello I'm going to Button Page!
      </Button>
    </div>
  );
}

export default App;`}
      />
    </div>
  );
}