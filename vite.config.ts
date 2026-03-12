import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/STEM-Academia/',
  plugins: [inspectAttr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
<img src={`${import.meta.env.BASE_URL}images/habits-banner.jpg`} />
<img src={`${import.meta.env.BASE_URL}images/hygiene-banner.jpg`} />
<img src={`${import.meta.env.BASE_URL}images/nutrition-banner.jpg`} />
<img src={`${import.meta.env.BASE_URL}images/routine-banner.jpg`} />
<img src={`${import.meta.env.BASE_URL}images/sport-banner.jpg`} />
