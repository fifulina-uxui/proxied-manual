import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  // kimi-plugin-inspect-react is a local dev helper; it must not run in
  // production builds (it breaks the deployed bundle on GitHub Pages).
  plugins: [process.env.NODE_ENV === "production" ? null : inspectAttr(), react()].filter(Boolean) as any[],
  server: {
    host: true,
    port: process.env.PORT ? Number(process.env.PORT) : 3000,
    strictPort: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
