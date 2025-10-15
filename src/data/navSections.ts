// src/data/navSections.ts

export interface NavItem {
  name: string;
  path: string; // hanya bagian subpath, bukan full path
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

// Struktur dasar (tanpa versi di path)
export const baseNavSections: NavSection[] = [
  {
    title: "Getting Started",
    items: [{ name: "Installation", path: "installation" }],
  },
  {
    title: "Components",
    items: [
      { name: "Accordion", path: "accordion" },
      { name: "Alert", path: "alert" },
      { name: "Badge", path: "badge" },
      { name: "Breadcrumb", path: "breadcrumb" },
      { name: "Button", path: "button" },
      { name: "Card", path: "card" },
      { name: "Modal", path: "modal" },
      { name: "Offcanvas", path: "offcanvas" },
      { name: "Toast", path: "toast" },
      { name: "Checkbox", path: "checkbox" },
      { name: "Radio", path: "radio" },
      { name: "Select", path: "select" },
      { name: "TextInput", path: "textinput" },
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
        items: [
          { name: "Installation", path: `/docs/${version}/installation` },

        ],
      },
      {
        title: "Components",
        items: [
          { name: "Avatar", path: `/docs/${version}/avatar` },
          { name: "AvatarGroup", path: `/docs/${version}/avatarGroup` },
          { name: "FileUpload", path: `/docs/${version}/fileUpload` },
          { name: "Pagination", path: `/docs/${version}/pagination` },
          { name: "Skeleton", path: `/docs/${version}/skeleton` },
          { name: "Spinner", path: `/docs/${version}/spinner` },
          { name: "Table", path: `/docs/${version}/tableDocs` },
          { name: "Tabs", path: `/docs/${version}/tabsDocs` },
          { name: "Text Area", path: `/docs/${version}/textArea` },
          { name: "Toggle", path: `/docs/${version}/toggle` },
          { name: "Tooltip", path: `/docs/${version}/tooltip` },
        ],
      }
    ];
  }

  // Default: gunakan struktur dasar
  return baseNavSections.map((section) => ({
    ...section,
    items: section.items.map((item) => ({
      ...item,
      path: `/docs/${version}/${item.path}`,
    })),
  }));
}