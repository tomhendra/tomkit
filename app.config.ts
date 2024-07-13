import type { ConfigContext, ExpoConfig } from "expo/config";

function getUniqueIdentifier() {
  return "com.tomhendra.tomkit";
}

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "tomkit",
  slug: "tomkit",
  scheme: "tomkit",
  owner: "tomhendra",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: getUniqueIdentifier(),
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-dev-launcher",
      {
        launchMode: "most-recent",
      },
    ],
  ],
  extra: {
    eas: {
      projectId: "ef49fb6c-141b-460a-b226-6f4884f01c89",
    },
  },
  experiments: {
    typedRoutes: true,
  },
});
