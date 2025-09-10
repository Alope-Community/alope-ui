import { Link, Outlet, useLocation } from "react-router-dom";
import TableOfContents from "./TableOfContents";
import { ToastProvider } from "alope-ui"; // ⬅️ import ini

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

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar kiri */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-white/95 backdrop-blur-md p-6 border-r border-gray-200 z-20">
        <h1 className="text-2xl font-bold text-green-600 mb-6 tracking-tight">
          Docs
        </h1>

        <nav className="space-y-8">
          {navSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                {section.title}
              </h2>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block rounded-md px-3 py-2 text-sm transition-all duration-200 ${
                      location.pathname === item.path
                        ? "bg-green-100 text-green-700 font-semibold shadow-sm"
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
      <main className="flex-1 ml-64 mr-64 px-10 py-12 max-w-5xl mx-auto prose prose-gray overflow-y-auto">
        <ToastProvider>
          <Outlet />
        </ToastProvider>
      </main>

      {/* TOC kanan */}
      <div className="fixed inset-y-0 right-0 w-64 border-l border-gray-100 bg-white/90 backdrop-blur-md">
        <TableOfContents />
      </div>
    </div>
  );
}