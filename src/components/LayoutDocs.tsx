import { Link, Outlet, useLocation } from "react-router-dom";
import TableOfContents from "./TableOfContents";
import { ToastProvider } from "alope-ui";
import { useTheme } from "../context/ThemeContext";
import { useMemo, useState } from "react";
import { useLayoutEffect } from "react";
import Navbar from "../components/Layout/Navbar";
import { generateNavSections } from "../data/navSections";
import { Spinner } from "alope-ui";

export default function LayoutDocs() {
  const location = useLocation();
  const { theme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Ambil versi dari URL, misalnya: /docs/v1.0.8/button → "v1.0.8"
  const versionKey = location.pathname.split("/")[2];

  // Gunakan memo agar tidak regenerate tiap render
  const navSections = useMemo(
    () => generateNavSections(versionKey),
    [versionKey]
  );

  // Scroll ke atas setiap kali halaman berubah
  useLayoutEffect(() => {
    const main = document.querySelector("main");
    if (main) main.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Navbar */}
      <Navbar
        onToggleSidebar={() => setSidebarOpen(true)}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />

      {/* Spinner overlay penuh layar */}
      {isLoading && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <Spinner color="success" size="lg" />
        </div>
      )}

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
                  {section.items.map((item) => {
                    const fullPath = `/docs/${versionKey}/${item.path.replace(
                      /^\/docs\/[^/]+\//,
                      ""
                    )}`;
                    const isActive = location.pathname === fullPath;

                    return (
                      <Link
                        key={item.path}
                        to={fullPath}
                        onClick={() => setSidebarOpen(false)}
                        className={`block rounded-md px-3 py-2 text-sm transition-all duration-200 ${
                          isActive
                            ? "bg-[#80C41C] text-white font-semibold shadow-sm"
                            : theme === "dark"
                            ? "text-gray-300 hover:bg-[#80C41C]/80 hover:text-white"
                            : "text-gray-600 hover:bg-[#80C41C]/20 hover:text-[#80C41C]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
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
            <Outlet key={versionKey} />{" "}
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
                  {section.items.map((item) => {
                    const fullPath = `/docs/${versionKey}/${item.path.replace(
                      /^\/docs\/[^/]+\//,
                      ""
                    )}`;
                    const isActive = location.pathname === fullPath;

                    return (
                      <Link
                        key={item.path}
                        to={fullPath}
                        onClick={() => setSidebarOpen(false)}
                        className={`block rounded-md px-3 py-2 text-sm transition-all duration-200 ${
                          isActive
                            ? "bg-[#80C41C] text-white font-semibold shadow-sm"
                            : theme === "dark"
                            ? "text-gray-300 hover:bg-[#80C41C]/80 hover:text-white"
                            : "text-gray-600 hover:bg-[#80C41C]/20 hover:text-[#80C41C]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
