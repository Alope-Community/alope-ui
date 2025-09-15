import { Link } from "react-router-dom";
import { Moon, Sun, Github } from "lucide-react";
import logo from "../assets/logo hitam.png";
import { useTheme } from "../context/ThemeContext"; // ⬅️ ambil dari context

export default function Navbar() {
  const { theme, toggleTheme } = useTheme(); // ⬅️ context state

  return (
    <header
      className="
        fixed top-0 inset-x-0 h-16 
        bg-green-200 text-green-800
        backdrop-blur-md 
        flex items-center justify-between px-4 sm:px-6 
        z-30 transition-colors shadow-sm
      "
    >
      {/* Logo */}
      <div className="flex items-center gap-2 font-semibold">
        <img src={logo} alt="Alope UI Logo" className="h-6 sm:h-7 w-auto" />
      </div>

      {/* Menu Tengah */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link to="/docs/installation" className="hover:text-green-900">
          Docs
        </Link>
        <Link to="/playground" className="hover:text-green-900">
          Playground
        </Link>
        <Link to="/guides" className="hover:text-green-900">
          Guides
        </Link>
        <Link to="/blog" className="hover:text-green-900">
          Blog
        </Link>
      </nav>

      {/* Bagian Kanan */}
      <div className="flex items-center gap-2 sm:gap-4">
        <select className="border rounded-md px-2 py-1 text-xs sm:text-sm bg-green-50 text-green-800">
          <option>v1.0</option>
          <option>v2.0</option>
        </select>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green-900"
        >
          <Github className="w-5 h-5" />
        </a>

        {/* Tombol Dark/Light */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md hover:bg-green-300 transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-green-800" />
          ) : (
            <Moon className="w-5 h-5 text-green-800" />
          )}
        </button>
      </div>
    </header>
  );
}