import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#374151 !important", // gray-700
            h1: { color: "#111827 !important" }, // gray-900
            h2: { color: "#111827 !important" },
            h3: { color: "#111827 !important" },
            p: { color: "#374151 !important" }, // gray-700
          },
        },
        dark: {
          css: {
            color: "#D1D5DB !important", // gray-300
            h1: { color: "#F9FAFB !important" }, // gray-100
            h2: { color: "#F9FAFB !important" },
            h3: { color: "#F9FAFB !important" },
            p: { color: "#D1D5DB !important" }, // gray-300
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;