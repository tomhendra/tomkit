import { Text as RNText, type TextProps as RNTextProps } from "react-native"

import { useThemeColor } from "@/lib/hooks/useThemeColor"
import { createStyleSheet, useStyles } from "react-native-unistyles"

export type TextProps = RNTextProps & {
  lightColor?: string
  darkColor?: string
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link"
}

export function Text({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: TextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text")
  const { styles } = useStyles(stylesheet)

  return (
    <RNText
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
  )
}

const stylesheet = createStyleSheet((t) => ({
  default: {
    fontSize: t.fontSizes.$base,
    lineHeight: t.lineHeights.$6,
  },
  defaultSemiBold: {
    fontSize: t.fontSizes.$base,
    lineHeight: t.lineHeights.$6,
    fontWeight: t.fontWeights.$semibold,
  },
  title: {
    fontSize: t.fontSizes.$3xl,
    fontWeight: t.fontWeights.$bold,
    lineHeight: t.lineHeights.$8,
  },
  subtitle: {
    fontSize: t.fontSizes.$2xl,
    fontWeight: t.fontWeights.$bold,
  },
  link: {
    lineHeight: t.lineHeights.$8,
    fontSize: t.fontSizes.$base,
    color: t.colors.$accentForeground,
  },
}))
