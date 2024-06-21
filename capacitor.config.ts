import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.eternal.stylsync",
  appName: "stylsync",
  webDir: "out",
  server: {
    url: "https://stylsync-app.vercel.app", //https://stylsync-app.vercel.app or http://192.168.0.113:3000
    cleartext: true,
  },
};

export default config;
