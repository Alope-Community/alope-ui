import { useState, useEffect } from "react";
import { FaCheck, FaRegCopy } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const command = "npm install alope-ui";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    document.onclick = () => {};
    return () => {
      document.onclick = null;
    };
  }, []);

  return (
    <div className="relative px-6 md:px-20 bg-white dark:bg-gray-900 transition-colors duration-500 min-h-screen flex items-center">
      <div
        className="absolute z-10 inset-0 blur-xl h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(132, 252, 178, 0.1) 20.79%, rgba(121, 249, 142, 0.26) 40.92%, rgba(171, 238, 204, 0) 70.35%)",
        }}
      ></div>

      <div className="relative z-10 container mx-auto">
        <section>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 py-20 md:py-28 text-gray-600">
            <div className="space-y-6 text-center md:text-left flex-1">
              <NewsAlert />

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight max-w-3xl mx-auto md:mx-0">
                Alope UI for <br />
                Less styling,
                <span className="text-[#80C41C] px-2 rounded-sm dark:text-[#80C41C] leading-none">
                  More building
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
                React component library to help you build clean, accessible, and
                responsive interfaces with less effort.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center md:justify-start">
                <Link
                  to="/docs/v1.0.8/installation"
                  className="flex items-center justify-center gap-x-1 py-2 px-5 text-white font-medium bg-[#80C41C] hover:bg-[#80C41C]/80 active:bg-gray-900 rounded-lg transition md:inline-flex w-full sm:w-auto"
                >
                  Get started
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                <div className="relative w-full max-w-xs">
                  <div className="bg-green-200 dark:bg-gray-800 text-sm font-mono px-4 py-2 rounded-lg text-gray-800 dark:text-gray-200 select-text text-center sm:text-left">
                    $ {command}
                  </div>
                  <button
                    onClick={handleCopy}
                    className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-600 dark:text-gray-300 hover:text-[#80C41C] dark:hover:text-[#80C41C] transition cursor-pointer"
                    title="Copy to clipboard"
                  >
                    {copied ? (
                      <FaCheck className="w-3 h-3" />
                    ) : (
                      <FaRegCopy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function NewsAlert() {
  return (
    <a
      target="_blank"
      href="https://alope.id"
      className="inline-flex gap-x-4 items-center rounded-lg p-1 pr-5 border border-gray-300 dark:border-gray-700 text-sm font-medium duration-150 hover:bg-[#80C41C]/10 dark:hover:bg-[#80C41C]/30 transition-colors"
    >
      <span className="inline-block rounded-lg px-3 py-1 bg-[#80C41C] text-white text-xs">
        News
      </span>
      <p className="flex items-center text-gray-800 dark:text-white">
        Level Up Your Programming Skill
        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          />
        </svg>
      </p>
    </a>
  );
}
