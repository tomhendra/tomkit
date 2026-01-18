import { Text as RNText } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

import type { TextProps as RNTextProps } from 'react-native'

type Variant = 'body' | 'title' | 'subtitle' | 'caption' | 'link'

type TextProps = RNTextProps & {
  variant?: Variant
}

function Text({ style, variant = 'body', ...rest }: TextProps) {
  styles.useVariants({ variant })
  return <RNText style={[styles.text, style]} {...rest} />
}

export { Text, type TextProps }

const styles = StyleSheet.create((t) => ({
  text: {
    fontFamily: t.font.regular,
    color: t.color.foreground,
    variants: {
      variant: {
        body: {
          fontSize: t.fontSize.base,
          lineHeight: t.fontSize.base * t.lineHeight.normal,
        },
        title: {
          fontFamily: t.font.bold,
          fontSize: t.fontSize.xxxl,
          lineHeight: t.fontSize.xxxl * t.lineHeight.tight,
        },
        subtitle: {
          fontFamily: t.font.semibold,
          fontSize: t.fontSize.xxl,
          lineHeight: t.fontSize.xxl * t.lineHeight.tight,
        },
        caption: {
          fontSize: t.fontSize.sm,
          lineHeight: t.fontSize.sm * t.lineHeight.normal,
          color: t.color.mutedForeground,
        },
        link: {
          fontSize: t.fontSize.base,
          lineHeight: t.fontSize.base * t.lineHeight.normal,
          color: t.color.primary,
        },
      },
    },
  },
}))
