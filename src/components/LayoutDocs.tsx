import { Link, Outlet, useLocation } from "react-router-dom";
import TableOfContents from "./TableOfContents";
import { ToastProvider } from "alope-ui";
import Navbar from "../components/Navbar";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

interface NavItem {
  name: string;
  path: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    title: "Getting Started",
    items: [{ name: "Installation", path: "/docs/installation" }],
  },
  {
    title: "Components",
    items: [
      { name: "Accordion", path: "/docs/accordion" },
      { name: "Alert", path: "/docs/alert" },
      { name: "Badge", path: "/docs/badge" },
      { name: "Breadcrumb", path: "/docs/breadcrumb" },
      { name: "Button", path: "/docs/button" },
      { name: "Card", path: "/docs/card" },
      { name: "Modal", path: "/docs/modal" },
      { name: "Offcanvas", path: "/docs/offcanvas" },
      { name: "Toast", path: "/docs/toast" },
      { name: "Checkbox", path: "/docs/checkbox" },
      { name: "Radio", path: "/docs/radio" },
      { name: "Select", path: "/docs/select" },
      { name: "TextInput", path: "/docs/textinput" },
    ],
  },
];

export default function LayoutDocs() {
  const location = useLocation();
  const { theme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Navbar dengan tombol toggle */}
      <Navbar onToggleSidebar={() => setSidebarOpen(true)} />

      {/* Wrapper utama */}
      <div className="flex-1 flex pt-16">
        {/* Sidebar kiri (desktop) */}
        <aside
          className={`hidden lg:block w-64 p-6 border-r backdrop-blur-md transition-colors
            ${
              theme === "dark"
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }
            sticky top-16 h-[calc(100vh-64px)] overflow-y-auto
          `}
        >
          <nav className="space-y-8">
            {navSections.map((section) => (
              <div key={section.title}>
                <h2
                  className={`text-xs font-semibold uppercase tracking-wide mb-3 ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  {section.title}
                </h2>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setSidebarOpen(false)}
                      className={`block rounded-md px-3 py-2 text-sm transition-all duration-200 ${
                        location.pathname === item.path
                          ? "bg-[#80C41C] text-white font-semibold shadow-sm"
                          : theme === "dark"
                          ? "text-gray-300 hover:bg-[#80C41C]/80 hover:text-white"
                          : "text-gray-600 hover:bg-[#80C41C]/20 hover:text-[#80C41C]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* Konten utama */}
        <main
          className="flex-1 px-4 sm:px-6 lg:px-10 pb-12 overflow-y-auto pt-10"
          style={{ height: "calc(100vh - 64px)" }}
        >
          <ToastProvider>
            <Outlet />
          </ToastProvider>
        </main>

        {/* TOC kanan */}
        <div
          className={`hidden lg:block w-64 border-l backdrop-blur-md transition-colors
            ${
              theme === "dark"
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-100"
            }
            sticky top-16 h-[calc(100vh-64px)] overflow-y-auto
          `}
        >
          <TableOfContents />
        </div>
      </div>

      {/* Sidebar mobile overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Overlay gelap */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setSidebarOpen(false)}
        />

        {/* Panel Sidebar */}
        <div
          className={`relative w-full md:w-1/2 h-full shadow-xl p-6 flex flex-col transition-colors
      ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-white text-gray-900"
      }
    `}
        >
          {/* Header Sidebar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Browse docs</h2>
              <button
                className={`${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                ✕
              </button>
            </div>
            <hr
              className={`border-0 h-px ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}
            />
          </div>

          {/* Isi nav */}
          <nav className="flex-1 overflow-y-auto space-y-8">
            {navSections.map((section) => (
              <div key={section.title}>
                <h2
                  className={`text-sm font-semibold uppercase tracking-wide mb-3 ${
                    theme === "dark" ? "text-gray-400" : "text-black"
                  }`}
                >
                  {section.title}
                </h2>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setSidebarOpen(false)}
                      className={`block rounded-md px-3 py-2 text-sm transition-all duration-200 ${
                        location.pathname === item.path
                          ? "bg-[#80C41C] text-white font-semibold shadow-sm"
                          : theme === "dark"
                          ? "text-gray-300 hover:bg-[#80C41C]/80 hover:text-white"
                          : "text-gray-700 hover:bg-[#80C41C]/20 hover:text-[#80C41C]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
