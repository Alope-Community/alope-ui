import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const location = useLocation();
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
    <aside className="w-64 hidden lg:flex flex-col bg-white/90 backdrop-blur-md border-l border-gray-100">
      <div className="sticky top-24 p-6">
        <h3 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wide">
          On this page
        </h3>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`relative block rounded-md px-3 py-1.5 transition-all duration-200 ${
                  heading.level === 3 ? "ml-4" : ""
                } ${
                  activeId === heading.id
                    ? "text-green-600 font-semibold bg-green-50"
                    : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
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