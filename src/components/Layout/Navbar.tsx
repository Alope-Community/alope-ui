import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [version, setVersion] = useState<'v1.0.8' | 'v2.0' | 'v3.0'>('v1.0.8');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('darkMode', newMode ? 'true' : 'false');
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    const isDark = savedMode === 'true';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleVersionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVersion(e.target.value as 'v1.0.8' | 'v2.0' | 'v3.0');
  };

  return (
    <nav
      className={`w-full fixed container mx-auto top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 shadow backdrop-blur-md'
          : 'bg-transparent'
      } px-4 md:px-20 py-2`}
    >
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
     
        <a href="/" className="flex items-center space-x-2">
          <img
            src="./img/Alope.png"
            alt="AlopeUI"
            className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 hover:rotate-12"
          />
          <span className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
            AlopeUI
          </span>
        </a>

   
        <button
          className="md:hidden text-gray-800 dark:text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

    
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {['/docs', '/playground', '/guides', '/blog'].map((href, i) => (
            <a
              key={i}
              href={href}
              className="text-sm hover:text-green-600 transition dark:text-white"
            >
              {href.replace('/', '').charAt(0).toUpperCase() + href.slice(2)}
            </a>
          ))}

          <div className="relative">
            <select
              value={version}
              onChange={handleVersionChange}
              className="w-full md:w-auto text-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 px-3 py-0.5 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-400 transition appearance-none"
            >
              <option value="v1.0.8">v1.0</option>
              <option value="v2.0">v2.0</option>
              <option value="v3.0">v3.0</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>


          <button onClick={toggleDarkMode} className="focus:outline-none">
            {darkMode ? (
              <FaSun className="w-4 h-4 text-gray-600 dark:text-white hover:text-black dark:hover:text-gray-300" />
            ) : (
              <FaMoon className="w-4 h-4 text-gray-600 dark:text-white hover:text-black dark:hover:text-white" />
            )}
          </button>
        </div>
      </div>

 
      {menuOpen && (
        <div className="flex flex-col mt-4 space-y-3 md:hidden pb-4 max-h-[80vh] overflow-y-auto transition-all duration-300">
          {['/docs', '/playground', '/guides', '/blog'].map((href, i) => (
            <a
              key={i}
              href={href}
              className="text-sm hover:text-green-600 transition text-gray-800 dark:text-white"
            >
              {href.replace('/', '').charAt(0).toUpperCase() + href.slice(2)}
            </a>
          ))}

          <div className="relative">
            <select
              value={version}
              onChange={handleVersionChange}
              className="w-full text-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 px-3 py-0.5 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-400 transition appearance-none"
            >
              <option value="v1.0.8">v1.0</option>
              <option value="v2.0">v2.0</option>
              <option value="v3.0">v3.0</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <button onClick={toggleDarkMode} className="focus:outline-none">
            {darkMode ? (
              <FaSun className="w-4 h-4 text-gray-600 hover:text-black dark:hover:text-white" />
            ) : (
              <FaMoon className="w-4 h-4 text-gray-600 hover:text-black dark:hover:text-white" />
            )}
          </button>
        </div>
      )}
    </nav>
  );
}
