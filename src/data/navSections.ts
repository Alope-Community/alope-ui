// src/data/navSections.ts

export interface NavItem {
  name: string;
  path: string;
}

export interface NavCategory {
  title: string;
  items: NavItem[];
}

export interface NavSection {
  title: string;
  categories: NavCategory[];
}

// Struktur dasar (tanpa versi di path)
export const baseNavSections: NavSection[] = [
  {
    title: "Getting Started",
    categories: [
      {
        title: "Introduction",
        items: [{ name: "Installation", path: "installation" }],
      },
    ],
  },
  {
    title: "Components",
    categories: [
      {
        title: "Navigation",
        items: [
          { name: "Accordion", path: "accordion" },
          { name: "Breadcrumb", path: "breadcrumb" },
          { name: "Tabs", path: "tabsDocs" },
          { name: "Pagination", path: "pagination" },
        ],
      },
      {
        title: "Feedback",
        items: [
          { name: "Alert", path: "alert" },
          { name: "Toast", path: "toast" },
          { name: "Tooltip", path: "tooltip" },
          { name: "Spinner", path: "spinner" },
          { name: "Skeleton", path: "skeleton" },
        ],
      },
      {
        title: "Data Display",
        items: [
          { name: "Badge", path: "badge" },
          { name: "Card", path: "card" },
          { name: "Table", path: "tableDocs" },
          { name: "Avatar", path: "avatar" },
          { name: "Avatar Group", path: "avatarGroup" },
        ],
      },
      {
        title: "Form Controls",
        items: [
          { name: "Checkbox", path: "checkbox" },
          { name: "Radio", path: "radio" },
          { name: "Select", path: "select" },
          { name: "Text Input", path: "textinput" },
          { name: "Textarea", path: "textArea" },
          { name: "Toggle", path: "toggle" },
          { name: "File Upload", path: "fileUpload" },
        ],
      },
      {
        title: "Interactive Elements",
        items: [
          { name: "Button", path: "button" },
          { name: "Modal", path: "modal" },
          { name: "Offcanvas", path: "offcanvas" },
        ],
      },
    ],
  },
];

/**
 * Fungsi pembuat navSections berdasarkan versi.
 * Contoh: generateNavSections("v1.0.8") → hasil path lengkap /docs/v1.0.8/accordion
 */
export function generateNavSections(version: string): NavSection[] {
  // Jika versi 1.1 hanya punya 1 halaman misalnya
  if (version === "v1.1") {
    return [
      {
        title: "Getting Started",
        categories: [
          {
            title: "Introduction",
            items: [
              { name: "Installation", path: `/docs/${version}/installation` },
            ],
          },
        ],
      },
      {
        title: "Components",
        categories: [
          {
            title: "Essentials",
            items: [
              { name: "Avatar", path: `/docs/${version}/avatar` },
              { name: "Avatar Group", path: `/docs/${version}/avatarGroup` },
              { name: "File Upload", path: `/docs/${version}/fileUpload` },
              { name: "Pagination", path: `/docs/${version}/pagination` },
              { name: "Skeleton", path: `/docs/${version}/skeleton` },
              { name: "Spinner", path: `/docs/${version}/spinner` },
              { name: "Table", path: `/docs/${version}/tableDocs` },
              { name: "Tabs", path: `/docs/${version}/tabsDocs` },
              { name: "Textarea", path: `/docs/${version}/textArea` },
              { name: "Toggle", path: `/docs/${version}/toggle` },
              { name: "Tooltip", path: `/docs/${version}/tooltip` },
            ],
          },
        ],
      },
    ];
  }

  // Default: gunakan struktur dasar
  return baseNavSections.map((section) => ({
    ...section,
    categories: section.categories.map((category) => ({
      ...category,
      items: category.items.map((item) => ({
        ...item,
        path: `/docs/${version}/${item.path}`,
      })),
    })),
  }));
}
