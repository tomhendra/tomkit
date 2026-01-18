import { Text as RNText, type TextProps as RNTextProps } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

export type TextProps = RNTextProps & {
  variant?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link'
}

export function Text({ style, variant = 'default', ...rest }: TextProps) {
  return (
    <RNText
      style={[
        variant === 'default' ? styles.default : undefined,
        variant === 'title' ? styles.title : undefined,
        variant === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        variant === 'subtitle' ? styles.subtitle : undefined,
        variant === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  )
}

const styles = StyleSheet.create((t) => ({
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
