import { Text, type TextProps } from "react-native";

import { useThemeColor } from "@/lib/hooks/useThemeColor";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const { styles } = useStyles(stylesheet);

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const stylesheet = createStyleSheet((theme) => ({
  default: {
    fontSize: theme.fontSizes.$base,
    lineHeight: theme.lineHeights.$6,
  },
  defaultSemiBold: {
    fontSize: theme.fontSizes.$base,
    lineHeight: theme.lineHeights.$6,
    fontWeight: theme.fontWeights.semibold,
  },
  title: {
    fontSize: theme.fontSizes.$3xl,
    fontWeight: theme.fontWeights.bold,
    lineHeight: theme.lineHeights.$8,
  },
  subtitle: {
    fontSize: theme.fontSizes.$2xl,
    fontWeight: theme.fontWeights.bold,
  },
  link: {
    lineHeight: theme.lineHeights.$8,
    fontSize: theme.fontSizes.$base,
    color: theme.colors.accent,
  },
}));
