import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        home: "index.html",
        physical: "physical/index.html",
        digital: "digital/index.html",
        journal: "journal/index.html",
        contact: "contact/index.html",
      },
    },
  },
});
