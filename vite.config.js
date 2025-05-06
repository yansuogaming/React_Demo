import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import eslint from "vite-plugin-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), eslint(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.join(__dirname, "src"),
            "@images": path.join(__dirname, "src", "assets", "images"),
            "@css": path.join(__dirname, "src", "assets", "css"),
            "@fonts": path.join(__dirname, "src", "assets", "fonts"),
            "@components": path.join(__dirname, "src", "components"),
            "@constants": path.join(__dirname, "src", "constants"),
            "@contexts": path.join(__dirname, "src", "contexts"),
            "@hooks": path.join(__dirname, "src", "hooks"),
            "@languages": path.join(__dirname, "src", "languages"),
            "@layouts": path.join(__dirname, "src", "layouts"),
            "@pages": path.join(__dirname, "src", "pages"),
            "@routes": path.join(__dirname, "src", "routes"),
            "@services": path.join(__dirname, "src", "services"),
            "@lib": path.join(__dirname, "src", "lib"),
            "@ui": path.join(__dirname, "src", "components", "ui"),
        },
    },
});
