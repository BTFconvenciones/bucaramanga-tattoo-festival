import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({

    base: "/bucaramanga-tattoo-festival/",

    plugins: [react()],

    resolve: {

        alias: {

            "@": path.resolve(__dirname, "./src"),

        },

    },

});