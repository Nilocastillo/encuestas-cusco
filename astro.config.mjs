// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://Nilocastillo.github.io",
  base: "/encuestas-cusco", // Asegúrate de que la base esté correctamente configurada
  vite: {
    plugins: [tailwindcss()],
  },
});
