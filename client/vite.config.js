import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugIn = {
  registerType: "autoUpdate",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    name: "Sowo-GV-Onboarder",
    short_name: "GV-Onboarder",
    description: "App to speed up onboarding processes.",
    icons: [
      {
        src: "/Sowo-Logo_192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/Sowo-Logo_512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/Sowo-Logo_180x180.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple-touch-icon",
      },
    ],
    theme_color: "#171717",
    background_color: "#171717",
    display: "minimal-ui",
    scope: "/",
    start_url: "/",
    // orientation: "portrait",
    orientation: "natural",
  },
};

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      ...manifestForPlugIn,
      workbox: {
        cleanupOutdatedCaches: true,
        sourcemap: true,
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
