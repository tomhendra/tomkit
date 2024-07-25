import { Text as RNText, type TextProps as RNTextProps } from "react-native"

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
  const { styles } = useStyles(stylesheet)

  return (
    <RNText
      style={[
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
    fontSize: t.fontSizeBase,
    lineHeight: t.lineHeight6,
    color: t.colorForeground,
  },
  defaultSemiBold: {
    fontSize: t.fontSizeBase,
    lineHeight: t.lineHeight6,
    fontWeight: t.fontWeightSemibold,
    color: t.colorForeground,
  },
  title: {
    fontSize: t.fontSize3xl,
    fontWeight: t.fontWeightBold,
    lineHeight: t.lineHeight8,
    color: t.colorForeground,
  },
  subtitle: {
    fontSize: t.fontSize2xl,
    fontWeight: t.fontWeightBold,
    color: t.colorForeground,
  },
  link: {
    lineHeight: t.lineHeight8,
    fontSize: t.fontSizeBase,
    color: t.colorAccentForeground,
  },
}))
