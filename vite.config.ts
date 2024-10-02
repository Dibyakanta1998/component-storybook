import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });
export default defineConfig({
  build: {
    lib: {
      // entry: "src/index.tsx",
      entry: path.resolve(__dirname, "src/index.tsx"),

      name: "component-react",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts()],
});
