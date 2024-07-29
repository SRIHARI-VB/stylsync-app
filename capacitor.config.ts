import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.mint.stylsync",
  appName: "stylsync-app",
  webDir: "build",
  bundledWebRuntime: false,
  server: {
    url: "https://mint-stylsync-app.vercel.app",
    cleartext: true,
  },
};

export default config;
