import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

const dev = process.env.NODE_ENV !== "production";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    tailwindcss(),
    dts({
      include: ["lib"],
      tsconfigPath: resolve(__dirname, "tsconfig.lib.json"),
    }),
  ],
  build: {
    minify: "terser",
    terserOptions: {
      ecma: 2015,
      compress: {
        toplevel: true,
        passes: 2,
        drop_console: !dev,
        drop_debugger: !dev,
      },
      mangle: { toplevel: true },
      format: {
        beautify: false,
        comments: false,
        braces: false,
        semicolons: false,
      },
    },
    lib: {
      entry: {
        main: resolve(__dirname, "lib/main.ts"),
        style: resolve(__dirname, "lib/index.css"),
      },
      formats: ["es", "cjs"],
      fileName: (format, entryName) => {
        if (entryName === "style") return "index.css";
        return format === "es" ? "main.js" : "main.cjs";
      },
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react-router-dom",
        "react/jsx-runtime",
        "clsx-for-tailwind",
        "lucide-react",
        "next-themes",
        "prism-react-renderer",
        "react-collapse",
        "react-icons",
        "react-select",
        "react-syntax-highlighter",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-router-dom": "ReactRouterDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
    copyPublicDir: false,
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import tailwindcss from "@tailwindcss/vite";
// import { resolve } from "path";

// const dev = process.env.NODE_ENV !== "production";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   resolve: {
//     alias: {
//       "@": resolve(__dirname, "./src"),
//     },
//   },
//   build: {
//     minify: "terser",
//     terserOptions: {
//       ecma: 2015,
//       compress: {
//         toplevel: true,
//         passes: 2,
//         drop_console: !dev,
//         drop_debugger: !dev,
//       },
//       mangle: { toplevel: true },
//       format: {
//         beautify: false,
//         comments: false,
//       },
//     },
//     outDir: "dist",
//     assetsDir: "assets",
//     sourcemap: dev,
//     copyPublicDir: true,
//   },
//   server: {
//     port: 5173,
//     open: true,
//   },
// });
