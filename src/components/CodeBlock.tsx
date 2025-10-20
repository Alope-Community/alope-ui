"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface CodeBlockProps {
  code: string;
  lang?: string;
  label?: string; // custom label (contoh: "npm", "bash")
  showHeader?: boolean; // sembunyikan header jika false
}

export default function CodeBlock({
  code,
  lang = "tsx",
  label,
  showHeader = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={`relative rounded-lg overflow-hidden shadow-md mb-6 border 
        ${
          isDark
            ? "border-slate-700 bg-slate-900"
            : "border-slate-200 bg-slate-50"
        }`}
    >
      {/* Header */}
      {showHeader && (
        <div
          className={`flex items-center justify-between text-sm px-3 py-2 border-b
            ${
              isDark
                ? "bg-slate-800 text-slate-200 border-slate-700"
                : "bg-slate-100 text-slate-800 border-slate-200"
            }`}
        >
          <span className="uppercase text-xs font-medium tracking-wide">
            {label ?? lang}
          </span>
          <button
            onClick={handleCopy}
            className={`flex items-center gap-1 px-2 py-1 text-xs rounded transition-colors
              ${isDark ? "hover:bg-slate-700" : "hover:bg-slate-200"}`}
          >
            <Copy className="w-4 h-4" />
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      )}

      {/* Code */}
      <SyntaxHighlighter
        language={lang}
        style={isDark ? oneDark : oneLight}
        customStyle={{
          margin: 0,
          padding: "1rem",
          background: "transparent",
          fontSize: "0.9rem",
          lineHeight: "1.6",
        }}
        codeTagProps={{
          style: {
            fontFamily: "Consolas, Monaco, 'Courier New', monospace",
            background: "transparent",
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
