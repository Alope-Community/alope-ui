import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const location = useLocation();
  const { theme } = useTheme();
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const content = document.querySelector("main");
    if (!content) return;

    const nodes = content.querySelectorAll<HTMLHeadingElement>("h2, h3");
    const newHeadings: Heading[] = [];

    nodes.forEach((node) => {
      if (!node.id) {
        node.id =
          node.textContent
            ?.toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "") || "";
      }
      newHeadings.push({
        id: node.id,
        text: node.textContent || "",
        level: node.tagName === "H2" ? 2 : 3,
      });
    });

    setHeadings(newHeadings);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -70% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [location.pathname]);

  if (headings.length === 0) return null;

  return (
    <aside
      className={`fixed top-0 right-0 bottom-0 w-64 backdrop-blur-md border-l overflow-y-auto
        ${theme === "dark" 
          ? "bg-gray-900/90 border-gray-800" 
          : "bg-gray-50/90 border-gray-200"}`
      }
    >
      <div className="pt-16 p-6">
        <h3
          className={`font-semibold mb-4 text-sm uppercase tracking-wide
            ${theme === "dark" ? "text-gray-100" : "text-gray-700"}`}
        >
          On this page
        </h3>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`relative block rounded-md px-3 py-1.5 transition-all duration-200
                  ${heading.level === 3 ? "ml-4" : ""}
                  ${
                    activeId === heading.id
                      ? theme === "dark"
                        ? "text-green-400 font-semibold bg-green-900/30"
                        : "text-green-700 font-semibold bg-green-100"
                      : theme === "dark"
                        ? "text-gray-300 hover:text-green-400 hover:bg-gray-800/50"
                        : "text-gray-600 hover:text-green-700 hover:bg-gray-100"
                  }`}
              >
                {activeId === heading.id && (
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 rounded-r-md" />
                )}
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}