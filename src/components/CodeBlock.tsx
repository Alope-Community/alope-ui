"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy } from "lucide-react";

export default function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative bg-slate-950 rounded-lg overflow-hidden shadow-md mb-6">
      {/* Header */}
      <div className="flex items-center justify-between bg-slate-900 text-slate-200 text-sm px-3 py-2 border-b border-slate-800">
        <span>HTML</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-2 py-1 text-xs rounded hover:bg-slate-800"
        >
          <Copy className="w-4 h-4" />
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Code */}
      <SyntaxHighlighter
        language="tsx"
        style={oneDark}
        customStyle={{
          margin: 0,
          padding: "1rem",
          background: "transparent", // 🔥 hilangkan background putih
          fontSize: "0.9rem",
          lineHeight: "1.6",
        }}
        codeTagProps={{
          style: {
            fontFamily: "Consolas, Monaco, 'Courier New', monospace", // 🔥 paksa pakai Consolas
            background: "transparent", // pastikan tidak ada background
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}