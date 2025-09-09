import React, { useState, useEffect } from 'react';
import { FaGithub, FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [version, setVersion] = useState<'v1.0.8' | 'v2.0' | 'v3.0'>('v1.0.8');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleVersionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVersion(e.target.value as 'v1.0.8' | 'v2.0' | 'v3.0');
    // Optional: Redirect based on version
    // window.location.href = `/docs/${e.target.value}`;
  };

  return (
    <nav className="w-full fix bg-transparent flex items-center justify-between px-20 py-2">

      {/* Logo */}
      <a href="/" className="flex items-center space-x-1">
        <img
          src="./img/Alope.png"
          alt="AlopeUI"
          className="w-8 h-8 transition-transform duration-300 hover:rotate-25"
        />
        <span className="text-xl font-semibold text-gray-900 dark:text-white">
          AlopeUI
        </span>
      </a>

      {/* Right-side nav */}
      <div className="flex items-center space-x-6">

        <a href="/docs" className="text-sm hover:text-green-600 transition">Docs</a>
        <a href="/playground" className="text-sm hover:text-green-600 transition">Playground</a>
        <a href="/guides" className="text-sm hover:text-green-600 transition">Guides</a>
        <a href="/blog" className="text-sm hover:text-green-600 transition">Blog</a>

        {/* Version Dropdown */}
        <div className="relative">
  <select
    value={version}
    onChange={handleVersionChange}
    className="text-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 px-3 py-0.5 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-400 transition appearance-none"
  >
    <option value="v1.0.8">v1.0</option>
    <option value="v2.0">v2.0</option>
    <option value="v3.0">v3.0</option>
  </select>

  {/* Custom arrow */}
  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-400">
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>

        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="focus:outline-none">
          {darkMode ? (
            <FaSun className="w-4 h-4 text-gray-600 hover:text-black dark:hover:text-white" />
          ) : (
            <FaMoon className="w-4 h-4 text-gray-600 hover:text-black dark:hover:text-white" />
          )}
        </button>
      </div>
    </nav>
  );
}
