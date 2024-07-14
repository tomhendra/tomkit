import type { ConfigContext, ExpoConfig } from "expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

function getUniqueIdentifier() {
  if (IS_DEV) {
    return "com.tomhendra.tomkit.dev";
  }

  if (IS_PREVIEW) {
    return "com.tomhendra.tomkit.preview";
  }

  return "com.tomhendra.tomkit";
}

function getAppName() {
  if (IS_DEV) {
    return "Tomkit (Dev)";
  }

  if (IS_PREVIEW) {
    return "Tomkit (Preview)";
  }

  return "Tomkit";
}

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: getAppName(),
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
