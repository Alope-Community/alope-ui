import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { cn } from "clsx-for-tailwind";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineDotsVertical,
} from "react-icons/hi";
import logo from "../../assets/logo.svg";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
}) {
  const { theme, toggleTheme } = useTheme();
  const [version, setVersion] = useState<"v1.0.8" | "v2.0" | "v3.0">("v1.0.8");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleVersionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVersion(e.target.value as "v1.0.8" | "v2.0" | "v3.0");
  };

  return (
    <nav
      className={cn(
        `fixed top-0 z-50 shadow w-full transition-all duration-300`,
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 shadow backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between sm:px-10 px-3 py-3">
        {/* Kiri: Hamburger + Logo */}
        <div className="flex items-center space-x-2">
          {/* Tombol Hamburger (sidebar kiri) */}
          <button
            className={`lg:hidden focus:outline-none ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
            onClick={onToggleSidebar}
          >
            <HiOutlineMenu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="AlopeUI"
              className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 hover:rotate-12"
            />
            <span
              className={`text-xl md:text-2xl font-semibold transition-colors ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              AlopeUI
            </span>
          </Link>
        </div>

        {/* Menu Desktop */}
        <div className="hidden lg:flex items-center space-x-4 lg:space-x-6">
          <Link
            to="/docs/installation"
            className={`text-sm transition ${
              theme === "dark"
                ? "text-white hover:text-[#80C41C]"
                : "text-gray-800 hover:text-[#80C41C]"
            }`}
          >
            Documentation
          </Link>

          {/* Select Version */}
          <div className="relative">
            <select
              value={version}
              onChange={handleVersionChange}
              className={`w-full md:w-auto text-sm ${
                theme === "dark"
                  ? "bg-gray-800 text-white border-gray-600"
                  : "bg-white text-gray-800 border-gray-300"
              } px-3 py-0.5 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#80C41C] transition appearance-none`}
            >
              <option value="v1.0.8">v1.0</option>
              <option value="v2.0">v2.0</option>
              <option value="v3.0">v3.0</option>
            </select>
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

          {/* Toggle Theme */}
          <button onClick={toggleTheme} className="focus:outline-none">
            {theme === "dark" ? (
              <FaSun className="w-4 h-4 text-yellow-500 hover:text-yellow-600" />
            ) : (
              <FaMoon className="w-4 h-4 text-gray-700 hover:text-black" />
            )}
          </button>
        </div>

        {/* Mobile: kebab menu (kanan) */}
        <button
          className={`lg:hidden focus:outline-none ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
          onClick={() => setMenuOpen(true)}
        >
          <HiOutlineDotsVertical className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Offcanvas dari kanan */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMenuOpen(false)}
        />

        {/* Panel kanan */}
        <div
          className={`absolute right-0 top-0 w-full md:w-1/2 h-full shadow-xl p-6 flex flex-col transition-colors
    bg-[#80C41C] text-white
  `}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">AlopeUI</h2>
            <button onClick={() => setMenuOpen(false)}>
              <HiOutlineX className="w-6 h-6" />
            </button>
          </div>

          <hr className="border-white/30 mb-6" />

          {/* Isi Menu */}
          <nav className="flex-1 overflow-y-auto space-y-6">
            {/* Menu 2 kolom */}
            <div className="grid grid-cols-2 gap-4 text-sm font-medium">
              <Link to="/docs/installation" onClick={() => setMenuOpen(false)}>
                Docs
              </Link>
            </div>

            <hr className="border-white/30" />

            {/* Versi */}
            <div>
              <label className="text-sm block mb-1">AlopeUI</label>
              <select
                value={version}
                onChange={handleVersionChange}
                className="w-full rounded-md bg-[#6aa318] text-white border border-white/20 px-2 py-1 text-sm"
              >
                <option value="v1.0.8">v1.0</option>
                {/* <option value="v2.0">v2.0</option>
                <option value="v3.0">v3.0</option> */}
              </select>
            </div>

            <hr className="border-white/30" />

            {/* Toggle Theme */}
            <button
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
              className="flex items-center space-x-2 text-sm"
            >
              {theme === "dark" ? (
                <FaSun className="w-4 h-4 text-yellow-200" />
              ) : (
                <FaMoon className="w-4 h-4 text-white" />
              )}
              <span>Toggle theme</span>
            </button>
          </nav>
        </div>
      </div>
    </nav>
  );
}
