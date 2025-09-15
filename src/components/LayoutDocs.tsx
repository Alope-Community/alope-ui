import { Link, Outlet, useLocation } from "react-router-dom";
import TableOfContents from "./TableOfContents";
import { ToastProvider } from "alope-ui";
import Navbar from "../components/Navbar";
import { useTheme } from "../context/ThemeContext";

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

  return (
    <div
      className={`flex h-screen transition-colors ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Navbar */}
      <Navbar />

      {/* Sidebar kiri */}
      {/* Sidebar kiri */}
      <aside
        className={`fixed inset-y-0 left-0 top-16 w-64 backdrop-blur-md p-6 border-r z-20 transition-colors
    ${
      theme === "dark"
        ? "bg-gray-800 border-gray-700"
        : "bg-white border-gray-200"
    }
    overflow-y-auto
  `}
      >
        <h1
          className={`text-2xl font-bold mb-6 tracking-tight ${
            theme === "dark" ? "text-green-400" : "text-green-600"
          }`}
        >
          Docs
        </h1>

        <nav className="space-y-8">
          {navSections.map((section) => (
            <div key={section.title}>
              <h2
                className={`text-xs font-semibold uppercase tracking-wide mb-3 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {section.title}
              </h2>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block rounded-md px-3 py-2 text-sm transition-all duration-200 ${
                      location.pathname === item.path
                        ? theme === "dark"
                          ? "bg-green-900 text-green-300 font-semibold shadow-sm"
                          : "bg-green-100 text-green-700 font-semibold shadow-sm"
                        : theme === "dark"
                        ? "text-gray-300 hover:bg-green-800 hover:text-green-300"
                        : "text-gray-700 hover:bg-green-50 hover:text-green-600"
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
  className={`flex-1 ml-64 mr-64 px-10 pb-12 max-w-5xl mx-auto overflow-y-auto transition-colors`}
  style={{ height: "calc(100vh - 64px)", marginTop: "64px" }} // ⬅️ navbar tinggi 64px (top-16)
>
        <ToastProvider>
          <Outlet />
        </ToastProvider>
      </main>

      {/* TOC kanan */}
      <div
        className={`fixed inset-y-0 right-0 top-16 w-64 backdrop-blur-md border-l transition-colors ${
          theme === "dark"
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-100"
        }`}
      >
        <TableOfContents />
      </div>
    </div>
  );
}
