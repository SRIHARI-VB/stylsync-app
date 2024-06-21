import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.eternal.stylsync",
  appName: "stylsync",
  webDir: "out",
  server: {
    url: "https://stylsync-app.vercel.app/",
    cleartext: true,
  },
};

export default config;
